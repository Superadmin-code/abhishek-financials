import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { settings } from '@/db/schema';
import { eq, like, and, or, desc, asc } from 'drizzle-orm';

const VALID_CATEGORIES = ['contact', 'office', 'social', 'general'];

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
        .from(settings)
        .where(eq(settings.id, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json({ 
          error: 'Setting not found',
          code: 'SETTING_NOT_FOUND' 
        }, { status: 404 });
      }

      return NextResponse.json(record[0]);
    }

    // List with pagination and filters
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    const sort = searchParams.get('sort') || 'createdAt';
    const order = searchParams.get('order') || 'desc';

    let query = db.select().from(settings);

    // Build where conditions
    const whereConditions = [];

    if (search) {
      whereConditions.push(
        or(
          like(settings.key, `%${search}%`),
          like(settings.description, `%${search}%`)
        )
      );
    }

    if (category) {
      if (!VALID_CATEGORIES.includes(category)) {
        return NextResponse.json({ 
          error: "Invalid category. Must be one of: " + VALID_CATEGORIES.join(', '),
          code: "INVALID_CATEGORY" 
        }, { status: 400 });
      }
      whereConditions.push(eq(settings.category, category));
    }

    if (whereConditions.length > 0) {
      query = query.where(and(...whereConditions));
    }

    // Apply sorting
    const orderBy = order === 'asc' ? asc : desc;
    if (sort === 'key') {
      query = query.orderBy(orderBy(settings.key));
    } else if (sort === 'category') {
      query = query.orderBy(orderBy(settings.category));
    } else {
      query = query.orderBy(orderBy(settings.createdAt));
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
    const { key, value, category, description } = body;

    // Validate required fields
    if (!key) {
      return NextResponse.json({ 
        error: "Key is required",
        code: "MISSING_KEY" 
      }, { status: 400 });
    }

    if (!value) {
      return NextResponse.json({ 
        error: "Value is required",
        code: "MISSING_VALUE" 
      }, { status: 400 });
    }

    // Validate category enum if provided
    if (category && !VALID_CATEGORIES.includes(category)) {
      return NextResponse.json({ 
        error: "Invalid category. Must be one of: " + VALID_CATEGORIES.join(', '),
        code: "INVALID_CATEGORY" 
      }, { status: 400 });
    }

    // Check if key already exists
    const existing = await db.select()
      .from(settings)
      .where(eq(settings.key, key.trim()))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json({ 
        error: "Setting with this key already exists",
        code: "DUPLICATE_KEY" 
      }, { status: 409 });
    }

    // Create new setting
    const now = new Date().toISOString();
    const newSetting = await db.insert(settings)
      .values({
        key: key.trim(),
        value: value.trim(),
        category: category || 'general',
        description: description?.trim() || null,
        createdAt: now,
        updatedAt: now
      })
      .returning();

    return NextResponse.json(newSetting[0], { status: 201 });

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

    const body = await request.json();
    const { key, value, category, description } = body;

    // Check if setting exists
    const existing = await db.select()
      .from(settings)
      .where(eq(settings.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Setting not found',
        code: 'SETTING_NOT_FOUND' 
      }, { status: 404 });
    }

    // Validate category enum if provided
    if (category && !VALID_CATEGORIES.includes(category)) {
      return NextResponse.json({ 
        error: "Invalid category. Must be one of: " + VALID_CATEGORIES.join(', '),
        code: "INVALID_CATEGORY" 
      }, { status: 400 });
    }

    // Check for duplicate key if key is being updated
    if (key && key.trim() !== existing[0].key) {
      const duplicateCheck = await db.select()
        .from(settings)
        .where(eq(settings.key, key.trim()))
        .limit(1);

      if (duplicateCheck.length > 0) {
        return NextResponse.json({ 
          error: "Setting with this key already exists",
          code: "DUPLICATE_KEY" 
        }, { status: 409 });
      }
    }

    // Build update object
    const updates: any = {
      updatedAt: new Date().toISOString()
    };

    if (key !== undefined) updates.key = key.trim();
    if (value !== undefined) updates.value = value.trim();
    if (category !== undefined) updates.category = category;
    if (description !== undefined) updates.description = description?.trim() || null;

    const updated = await db.update(settings)
      .set(updates)
      .where(eq(settings.id, parseInt(id)))
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

    // Check if setting exists
    const existing = await db.select()
      .from(settings)
      .where(eq(settings.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Setting not found',
        code: 'SETTING_NOT_FOUND' 
      }, { status: 404 });
    }

    const deleted = await db.delete(settings)
      .where(eq(settings.id, parseInt(id)))
      .returning();

    return NextResponse.json({
      message: 'Setting deleted successfully',
      deleted: deleted[0]
    });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}