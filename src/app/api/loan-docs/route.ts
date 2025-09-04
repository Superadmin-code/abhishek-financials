import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { loanDocs } from '@/db/schema';
import { eq, like, and, or, desc, asc } from 'drizzle-orm';

const VALID_LOAN_TYPES = ['home', 'business', 'education', 'personal'] as const;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      // Get single loan document by ID
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const loanDoc = await db.select()
        .from(loanDocs)
        .where(eq(loanDocs.id, parseInt(id)))
        .limit(1);

      if (loanDoc.length === 0) {
        return NextResponse.json({ 
          error: 'Loan document not found' 
        }, { status: 404 });
      }

      return NextResponse.json(loanDoc[0]);
    }

    // List loan documents with pagination and filters
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');
    const loanType = searchParams.get('loan_type');
    const isMandatory = searchParams.get('is_mandatory');
    const sort = searchParams.get('sort') || 'display_order';
    const order = searchParams.get('order') || 'asc';

    let query = db.select().from(loanDocs);
    let conditions = [];

    // Filter by loan_type
    if (loanType) {
      if (!VALID_LOAN_TYPES.includes(loanType as any)) {
        return NextResponse.json({ 
          error: "Invalid loan type. Must be one of: home, business, education, personal",
          code: "INVALID_LOAN_TYPE" 
        }, { status: 400 });
      }
      conditions.push(eq(loanDocs.loanType, loanType));
    }

    // Filter by is_mandatory
    if (isMandatory !== null && isMandatory !== undefined) {
      const mandatory = isMandatory === 'true';
      conditions.push(eq(loanDocs.isMandatory, mandatory));
    }

    // Search across text fields
    if (search) {
      const searchCondition = or(
        like(loanDocs.documentName, `%${search}%`),
        like(loanDocs.description, `%${search}%`)
      );
      conditions.push(searchCondition);
    }

    // Apply all conditions
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Apply sorting
    const orderDirection = order === 'desc' ? desc : asc;
    if (sort === 'display_order') {
      query = query.orderBy(orderDirection(loanDocs.displayOrder));
    } else if (sort === 'createdAt') {
      query = query.orderBy(orderDirection(loanDocs.createdAt));
    } else if (sort === 'documentName') {
      query = query.orderBy(orderDirection(loanDocs.documentName));
    } else if (sort === 'loanType') {
      query = query.orderBy(orderDirection(loanDocs.loanType));
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
    const { loanType, documentName, description, isMandatory, iconName, displayOrder } = requestBody;

    // Validate required fields
    if (!loanType) {
      return NextResponse.json({ 
        error: "Loan type is required",
        code: "MISSING_LOAN_TYPE" 
      }, { status: 400 });
    }

    if (!documentName) {
      return NextResponse.json({ 
        error: "Document name is required",
        code: "MISSING_DOCUMENT_NAME" 
      }, { status: 400 });
    }

    // Validate loan type enum
    if (!VALID_LOAN_TYPES.includes(loanType)) {
      return NextResponse.json({ 
        error: "Invalid loan type. Must be one of: home, business, education, personal",
        code: "INVALID_LOAN_TYPE" 
      }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedData = {
      loanType: loanType.trim(),
      documentName: documentName.trim(),
      description: description ? description.trim() : null,
      isMandatory: isMandatory !== undefined ? isMandatory : true,
      iconName: iconName ? iconName.trim() : null,
      displayOrder: displayOrder || null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const newLoanDoc = await db.insert(loanDocs)
      .values(sanitizedData)
      .returning();

    return NextResponse.json(newLoanDoc[0], { status: 201 });

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

    const requestBody = await request.json();
    const { loanType, documentName, description, isMandatory, iconName, displayOrder } = requestBody;

    // Check if record exists
    const existingRecord = await db.select()
      .from(loanDocs)
      .where(eq(loanDocs.id, parseInt(id)))
      .limit(1);

    if (existingRecord.length === 0) {
      return NextResponse.json({ 
        error: 'Loan document not found' 
      }, { status: 404 });
    }

    // Validate loan type if provided
    if (loanType && !VALID_LOAN_TYPES.includes(loanType)) {
      return NextResponse.json({ 
        error: "Invalid loan type. Must be one of: home, business, education, personal",
        code: "INVALID_LOAN_TYPE" 
      }, { status: 400 });
    }

    // Prepare update data
    const updates: any = {
      updatedAt: new Date().toISOString()
    };

    if (loanType !== undefined) updates.loanType = loanType.trim();
    if (documentName !== undefined) updates.documentName = documentName.trim();
    if (description !== undefined) updates.description = description ? description.trim() : null;
    if (isMandatory !== undefined) updates.isMandatory = isMandatory;
    if (iconName !== undefined) updates.iconName = iconName ? iconName.trim() : null;
    if (displayOrder !== undefined) updates.displayOrder = displayOrder;

    const updatedLoanDoc = await db.update(loanDocs)
      .set(updates)
      .where(eq(loanDocs.id, parseInt(id)))
      .returning();

    return NextResponse.json(updatedLoanDoc[0]);

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
      .from(loanDocs)
      .where(eq(loanDocs.id, parseInt(id)))
      .limit(1);

    if (existingRecord.length === 0) {
      return NextResponse.json({ 
        error: 'Loan document not found' 
      }, { status: 404 });
    }

    const deletedLoanDoc = await db.delete(loanDocs)
      .where(eq(loanDocs.id, parseInt(id)))
      .returning();

    return NextResponse.json({
      message: 'Loan document deleted successfully',
      deletedRecord: deletedLoanDoc[0]
    });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}