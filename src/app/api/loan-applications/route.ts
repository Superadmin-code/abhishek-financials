import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { loanApplications } from '@/db/schema';
import { eq, like, and, or, desc, asc } from 'drizzle-orm';

const VALID_LOAN_TYPES = ['home', 'business', 'education', 'personal'] as const;
const VALID_STATUS = ['pending', 'approved', 'rejected'] as const;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single record fetch
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const record = await db.select()
        .from(loanApplications)
        .where(eq(loanApplications.id, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json({ error: 'Loan application not found' }, { status: 404 });
      }

      return NextResponse.json(record[0]);
    }

    // List with pagination, search, and filters
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');
    const loanType = searchParams.get('loan_type');
    const status = searchParams.get('status');
    const sortBy = searchParams.get('sort') || 'createdAt';
    const order = searchParams.get('order') || 'desc';

    let query = db.select().from(loanApplications);

    // Build conditions array
    const conditions = [];

    // Search across name, email, city
    if (search) {
      const searchCondition = or(
        like(loanApplications.name, `%${search}%`),
        like(loanApplications.email, `%${search}%`),
        like(loanApplications.city, `%${search}%`)
      );
      conditions.push(searchCondition);
    }

    // Filter by loan type
    if (loanType && VALID_LOAN_TYPES.includes(loanType as any)) {
      conditions.push(eq(loanApplications.loanType, loanType));
    }

    // Filter by status
    if (status && VALID_STATUS.includes(status as any)) {
      conditions.push(eq(loanApplications.status, status));
    }

    // Apply conditions
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Apply sorting
    const orderBy = order === 'asc' ? asc : desc;
    if (sortBy === 'name') {
      query = query.orderBy(orderBy(loanApplications.name));
    } else if (sortBy === 'amount') {
      query = query.orderBy(orderBy(loanApplications.amount));
    } else if (sortBy === 'status') {
      query = query.orderBy(orderBy(loanApplications.status));
    } else {
      query = query.orderBy(orderBy(loanApplications.createdAt));
    }

    const results = await query.limit(limit).offset(offset);

    return NextResponse.json(results);

  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      phone, 
      email, 
      city, 
      loanType, 
      amount, 
      monthlyIncome, 
      consent 
    } = body;

    // Validate required fields
    if (!name) {
      return NextResponse.json({ 
        error: "Name is required",
        code: "MISSING_NAME" 
      }, { status: 400 });
    }

    if (!phone) {
      return NextResponse.json({ 
        error: "Phone is required",
        code: "MISSING_PHONE" 
      }, { status: 400 });
    }

    if (!email) {
      return NextResponse.json({ 
        error: "Email is required",
        code: "MISSING_EMAIL" 
      }, { status: 400 });
    }

    if (!city) {
      return NextResponse.json({ 
        error: "City is required",
        code: "MISSING_CITY" 
      }, { status: 400 });
    }

    if (!loanType) {
      return NextResponse.json({ 
        error: "Loan type is required",
        code: "MISSING_LOAN_TYPE" 
      }, { status: 400 });
    }

    if (amount === undefined || amount === null) {
      return NextResponse.json({ 
        error: "Amount is required",
        code: "MISSING_AMOUNT" 
      }, { status: 400 });
    }

    if (monthlyIncome === undefined || monthlyIncome === null) {
      return NextResponse.json({ 
        error: "Monthly income is required",
        code: "MISSING_MONTHLY_INCOME" 
      }, { status: 400 });
    }

    if (consent === undefined || consent === null) {
      return NextResponse.json({ 
        error: "Consent is required",
        code: "MISSING_CONSENT" 
      }, { status: 400 });
    }

    // Validate loan type enum
    if (!VALID_LOAN_TYPES.includes(loanType)) {
      return NextResponse.json({ 
        error: "Invalid loan type. Must be one of: home, business, education, personal",
        code: "INVALID_LOAN_TYPE" 
      }, { status: 400 });
    }

    // Validate amount is positive number
    if (typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json({ 
        error: "Amount must be a positive number",
        code: "INVALID_AMOUNT" 
      }, { status: 400 });
    }

    // Validate monthly income is positive number
    if (typeof monthlyIncome !== 'number' || monthlyIncome <= 0) {
      return NextResponse.json({ 
        error: "Monthly income must be a positive number",
        code: "INVALID_MONTHLY_INCOME" 
      }, { status: 400 });
    }

    // Validate consent is true
    if (consent !== true) {
      return NextResponse.json({ 
        error: "Consent must be true",
        code: "CONSENT_REQUIRED" 
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        error: "Invalid email format",
        code: "INVALID_EMAIL" 
      }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.toString().trim(),
      phone: phone.toString().trim(),
      email: email.toString().toLowerCase().trim(),
      city: city.toString().trim(),
      loanType: loanType.toString().trim(),
      amount: Number(amount),
      monthlyIncome: Number(monthlyIncome),
      consent: Boolean(consent),
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const newRecord = await db.insert(loanApplications)
      .values(sanitizedData)
      .returning();

    return NextResponse.json(newRecord[0], { status: 201 });

  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    // Check if record exists
    const existing = await db.select()
      .from(loanApplications)
      .where(eq(loanApplications.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ error: 'Loan application not found' }, { status: 404 });
    }

    const body = await request.json();
    const { 
      name, 
      phone, 
      email, 
      city, 
      loanType, 
      amount, 
      monthlyIncome, 
      consent,
      status 
    } = body;

    const updates: any = {
      updatedAt: new Date().toISOString()
    };

    // Validate and update fields if provided
    if (name !== undefined) {
      if (!name) {
        return NextResponse.json({ 
          error: "Name cannot be empty",
          code: "INVALID_NAME" 
        }, { status: 400 });
      }
      updates.name = name.toString().trim();
    }

    if (phone !== undefined) {
      if (!phone) {
        return NextResponse.json({ 
          error: "Phone cannot be empty",
          code: "INVALID_PHONE" 
        }, { status: 400 });
      }
      updates.phone = phone.toString().trim();
    }

    if (email !== undefined) {
      if (!email) {
        return NextResponse.json({ 
          error: "Email cannot be empty",
          code: "INVALID_EMAIL" 
        }, { status: 400 });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json({ 
          error: "Invalid email format",
          code: "INVALID_EMAIL_FORMAT" 
        }, { status: 400 });
      }
      updates.email = email.toString().toLowerCase().trim();
    }

    if (city !== undefined) {
      if (!city) {
        return NextResponse.json({ 
          error: "City cannot be empty",
          code: "INVALID_CITY" 
        }, { status: 400 });
      }
      updates.city = city.toString().trim();
    }

    if (loanType !== undefined) {
      if (!VALID_LOAN_TYPES.includes(loanType)) {
        return NextResponse.json({ 
          error: "Invalid loan type. Must be one of: home, business, education, personal",
          code: "INVALID_LOAN_TYPE" 
        }, { status: 400 });
      }
      updates.loanType = loanType.toString().trim();
    }

    if (amount !== undefined) {
      if (typeof amount !== 'number' || amount <= 0) {
        return NextResponse.json({ 
          error: "Amount must be a positive number",
          code: "INVALID_AMOUNT" 
        }, { status: 400 });
      }
      updates.amount = Number(amount);
    }

    if (monthlyIncome !== undefined) {
      if (typeof monthlyIncome !== 'number' || monthlyIncome <= 0) {
        return NextResponse.json({ 
          error: "Monthly income must be a positive number",
          code: "INVALID_MONTHLY_INCOME" 
        }, { status: 400 });
      }
      updates.monthlyIncome = Number(monthlyIncome);
    }

    if (consent !== undefined) {
      if (consent !== true) {
        return NextResponse.json({ 
          error: "Consent must be true",
          code: "CONSENT_REQUIRED" 
        }, { status: 400 });
      }
      updates.consent = Boolean(consent);
    }

    if (status !== undefined) {
      if (!VALID_STATUS.includes(status)) {
        return NextResponse.json({ 
          error: "Invalid status. Must be one of: pending, approved, rejected",
          code: "INVALID_STATUS" 
        }, { status: 400 });
      }
      updates.status = status.toString().trim();
    }

    const updated = await db.update(loanApplications)
      .set(updates)
      .where(eq(loanApplications.id, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0]);

  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    // Check if record exists
    const existing = await db.select()
      .from(loanApplications)
      .where(eq(loanApplications.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ error: 'Loan application not found' }, { status: 404 });
    }

    const deleted = await db.delete(loanApplications)
      .where(eq(loanApplications.id, parseInt(id)))
      .returning();

    return NextResponse.json({ 
      message: 'Loan application deleted successfully',
      deleted: deleted[0] 
    });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}