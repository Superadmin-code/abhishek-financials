import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { emiCalculations } from '@/db/schema';
import { eq, gte, lte, and, desc } from 'drizzle-orm';

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
        .from(emiCalculations)
        .where(eq(emiCalculations.id, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json({ error: 'EMI calculation not found' }, { status: 404 });
      }

      return NextResponse.json(record[0]);
    }

    // List with pagination and filters
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const minAmount = searchParams.get('minAmount');
    const maxAmount = searchParams.get('maxAmount');
    const minTenure = searchParams.get('minTenure');
    const maxTenure = searchParams.get('maxTenure');
    const minInterestRate = searchParams.get('minInterestRate');
    const maxInterestRate = searchParams.get('maxInterestRate');
    const sort = searchParams.get('sort') || 'createdAt';
    const order = searchParams.get('order') || 'desc';

    let query = db.select().from(emiCalculations);
    const conditions = [];

    // Amount range filter
    if (minAmount) {
      const min = parseFloat(minAmount);
      if (!isNaN(min) && min > 0) {
        conditions.push(gte(emiCalculations.amount, min));
      }
    }
    if (maxAmount) {
      const max = parseFloat(maxAmount);
      if (!isNaN(max) && max > 0) {
        conditions.push(lte(emiCalculations.amount, max));
      }
    }

    // Tenure range filter
    if (minTenure) {
      const min = parseInt(minTenure);
      if (!isNaN(min) && min > 0) {
        conditions.push(gte(emiCalculations.tenureMonths, min));
      }
    }
    if (maxTenure) {
      const max = parseInt(maxTenure);
      if (!isNaN(max) && max > 0) {
        conditions.push(lte(emiCalculations.tenureMonths, max));
      }
    }

    // Interest rate range filter
    if (minInterestRate) {
      const min = parseFloat(minInterestRate);
      if (!isNaN(min) && min >= 0) {
        conditions.push(gte(emiCalculations.interestRate, min));
      }
    }
    if (maxInterestRate) {
      const max = parseFloat(maxInterestRate);
      if (!isNaN(max) && max >= 0) {
        conditions.push(lte(emiCalculations.interestRate, max));
      }
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Sorting
    const sortColumn = sort === 'amount' ? emiCalculations.amount :
                      sort === 'tenureMonths' ? emiCalculations.tenureMonths :
                      sort === 'interestRate' ? emiCalculations.interestRate :
                      sort === 'emiAmount' ? emiCalculations.emiAmount :
                      emiCalculations.createdAt;

    if (order === 'asc') {
      query = query.orderBy(sortColumn);
    } else {
      query = query.orderBy(desc(sortColumn));
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
    const requestBody = await request.json();
    const { amount, tenureMonths, interestRate, emiAmount, totalInterest, totalAmount } = requestBody;

    // Validate required fields
    if (!amount) {
      return NextResponse.json({ 
        error: "Amount is required",
        code: "MISSING_AMOUNT" 
      }, { status: 400 });
    }

    if (!tenureMonths) {
      return NextResponse.json({ 
        error: "Tenure in months is required",
        code: "MISSING_TENURE" 
      }, { status: 400 });
    }

    if (!interestRate) {
      return NextResponse.json({ 
        error: "Interest rate is required",
        code: "MISSING_INTEREST_RATE" 
      }, { status: 400 });
    }

    if (!emiAmount) {
      return NextResponse.json({ 
        error: "EMI amount is required",
        code: "MISSING_EMI_AMOUNT" 
      }, { status: 400 });
    }

    if (!totalInterest) {
      return NextResponse.json({ 
        error: "Total interest is required",
        code: "MISSING_TOTAL_INTEREST" 
      }, { status: 400 });
    }

    if (!totalAmount) {
      return NextResponse.json({ 
        error: "Total amount is required",
        code: "MISSING_TOTAL_AMOUNT" 
      }, { status: 400 });
    }

    // Validate amount is positive
    if (amount <= 0) {
      return NextResponse.json({ 
        error: "Amount must be positive",
        code: "INVALID_AMOUNT" 
      }, { status: 400 });
    }

    // Validate tenure (1-480 months)
    if (tenureMonths < 1 || tenureMonths > 480) {
      return NextResponse.json({ 
        error: "Tenure must be between 1 and 480 months",
        code: "INVALID_TENURE" 
      }, { status: 400 });
    }

    // Validate interest rate (0.1-50%)
    if (interestRate < 0.1 || interestRate > 50) {
      return NextResponse.json({ 
        error: "Interest rate must be between 0.1% and 50%",
        code: "INVALID_INTEREST_RATE" 
      }, { status: 400 });
    }

    // Validate EMI amount is positive
    if (emiAmount <= 0) {
      return NextResponse.json({ 
        error: "EMI amount must be positive",
        code: "INVALID_EMI_AMOUNT" 
      }, { status: 400 });
    }

    // Validate total interest is non-negative
    if (totalInterest < 0) {
      return NextResponse.json({ 
        error: "Total interest cannot be negative",
        code: "INVALID_TOTAL_INTEREST" 
      }, { status: 400 });
    }

    // Validate total amount is positive
    if (totalAmount <= 0) {
      return NextResponse.json({ 
        error: "Total amount must be positive",
        code: "INVALID_TOTAL_AMOUNT" 
      }, { status: 400 });
    }

    // Get user IP from request headers
    const userIp = request.headers.get('x-forwarded-for') || 
                   request.headers.get('x-real-ip') || 
                   request.headers.get('cf-connecting-ip') || 
                   'unknown';

    const newRecord = await db.insert(emiCalculations)
      .values({
        amount,
        tenureMonths,
        interestRate,
        emiAmount,
        totalInterest,
        totalAmount,
        userIp,
        createdAt: new Date().toISOString()
      })
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
    const existingRecord = await db.select()
      .from(emiCalculations)
      .where(eq(emiCalculations.id, parseInt(id)))
      .limit(1);

    if (existingRecord.length === 0) {
      return NextResponse.json({ error: 'EMI calculation not found' }, { status: 404 });
    }

    const requestBody = await request.json();
    const { amount, tenureMonths, interestRate, emiAmount, totalInterest, totalAmount } = requestBody;

    const updates: any = {};

    // Validate and update amount if provided
    if (amount !== undefined) {
      if (amount <= 0) {
        return NextResponse.json({ 
          error: "Amount must be positive",
          code: "INVALID_AMOUNT" 
        }, { status: 400 });
      }
      updates.amount = amount;
    }

    // Validate and update tenure if provided
    if (tenureMonths !== undefined) {
      if (tenureMonths < 1 || tenureMonths > 480) {
        return NextResponse.json({ 
          error: "Tenure must be between 1 and 480 months",
          code: "INVALID_TENURE" 
        }, { status: 400 });
      }
      updates.tenureMonths = tenureMonths;
    }

    // Validate and update interest rate if provided
    if (interestRate !== undefined) {
      if (interestRate < 0.1 || interestRate > 50) {
        return NextResponse.json({ 
          error: "Interest rate must be between 0.1% and 50%",
          code: "INVALID_INTEREST_RATE" 
        }, { status: 400 });
      }
      updates.interestRate = interestRate;
    }

    // Validate and update EMI amount if provided
    if (emiAmount !== undefined) {
      if (emiAmount <= 0) {
        return NextResponse.json({ 
          error: "EMI amount must be positive",
          code: "INVALID_EMI_AMOUNT" 
        }, { status: 400 });
      }
      updates.emiAmount = emiAmount;
    }

    // Validate and update total interest if provided
    if (totalInterest !== undefined) {
      if (totalInterest < 0) {
        return NextResponse.json({ 
          error: "Total interest cannot be negative",
          code: "INVALID_TOTAL_INTEREST" 
        }, { status: 400 });
      }
      updates.totalInterest = totalInterest;
    }

    // Validate and update total amount if provided
    if (totalAmount !== undefined) {
      if (totalAmount <= 0) {
        return NextResponse.json({ 
          error: "Total amount must be positive",
          code: "INVALID_TOTAL_AMOUNT" 
        }, { status: 400 });
      }
      updates.totalAmount = totalAmount;
    }

    const updated = await db.update(emiCalculations)
      .set(updates)
      .where(eq(emiCalculations.id, parseInt(id)))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json({ error: 'EMI calculation not found' }, { status: 404 });
    }

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
    const existingRecord = await db.select()
      .from(emiCalculations)
      .where(eq(emiCalculations.id, parseInt(id)))
      .limit(1);

    if (existingRecord.length === 0) {
      return NextResponse.json({ error: 'EMI calculation not found' }, { status: 404 });
    }

    const deleted = await db.delete(emiCalculations)
      .where(eq(emiCalculations.id, parseInt(id)))
      .returning();

    if (deleted.length === 0) {
      return NextResponse.json({ error: 'EMI calculation not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: 'EMI calculation deleted successfully',
      deletedRecord: deleted[0]
    });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}