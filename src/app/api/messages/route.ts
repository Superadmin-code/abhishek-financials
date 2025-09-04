import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { messages } from '@/db/schema';
import { eq, like, and, or, desc, asc } from 'drizzle-orm';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single message by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const message = await db.select()
        .from(messages)
        .where(eq(messages.id, parseInt(id)))
        .limit(1);

      if (message.length === 0) {
        return NextResponse.json({ error: 'Message not found' }, { status: 404 });
      }

      return NextResponse.json(message[0]);
    }

    // List messages with pagination and filtering
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');
    const isRead = searchParams.get('is_read');
    const sort = searchParams.get('sort') || 'createdAt';
    const order = searchParams.get('order') || 'desc';

    let query = db.select().from(messages);
    let conditions = [];

    // Search across name, email, and subject
    if (search) {
      conditions.push(or(
        like(messages.name, `%${search}%`),
        like(messages.email, `%${search}%`),
        like(messages.subject, `%${search}%`)
      ));
    }

    // Filter by is_read status
    if (isRead !== null && isRead !== undefined) {
      const isReadBool = isRead === 'true';
      conditions.push(eq(messages.isRead, isReadBool));
    }

    // Apply conditions
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Apply sorting
    const orderBy = order === 'asc' ? asc : desc;
    if (sort === 'name') {
      query = query.orderBy(orderBy(messages.name));
    } else if (sort === 'email') {
      query = query.orderBy(orderBy(messages.email));
    } else if (sort === 'subject') {
      query = query.orderBy(orderBy(messages.subject));
    } else if (sort === 'isRead') {
      query = query.orderBy(orderBy(messages.isRead));
    } else {
      query = query.orderBy(orderBy(messages.createdAt));
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
    const { name, email, phone, subject, message } = requestBody;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json({ 
        error: "Name is required",
        code: "MISSING_NAME" 
      }, { status: 400 });
    }

    if (!email || !email.trim()) {
      return NextResponse.json({ 
        error: "Email is required",
        code: "MISSING_EMAIL" 
      }, { status: 400 });
    }

    if (!message || !message.trim()) {
      return NextResponse.json({ 
        error: "Message is required",
        code: "MISSING_MESSAGE" 
      }, { status: 400 });
    }

    // Email format validation
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ 
        error: "Invalid email format",
        code: "INVALID_EMAIL_FORMAT" 
      }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      subject: subject?.trim() || null,
      message: message.trim(),
      isRead: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const newMessage = await db.insert(messages)
      .values(sanitizedData)
      .returning();

    return NextResponse.json(newMessage[0], { status: 201 });
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
    const { name, email, phone, subject, message, isRead } = requestBody;

    // Check if record exists
    const existingMessage = await db.select()
      .from(messages)
      .where(eq(messages.id, parseInt(id)))
      .limit(1);

    if (existingMessage.length === 0) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
    }

    // Validate email format if provided
    if (email && !emailRegex.test(email.trim())) {
      return NextResponse.json({ 
        error: "Invalid email format",
        code: "INVALID_EMAIL_FORMAT" 
      }, { status: 400 });
    }

    // Prepare update data
    const updateData: any = {
      updatedAt: new Date().toISOString()
    };

    if (name !== undefined) updateData.name = name.trim();
    if (email !== undefined) updateData.email = email.trim().toLowerCase();
    if (phone !== undefined) updateData.phone = phone?.trim() || null;
    if (subject !== undefined) updateData.subject = subject?.trim() || null;
    if (message !== undefined) updateData.message = message.trim();
    if (isRead !== undefined) updateData.isRead = Boolean(isRead);

    const updated = await db.update(messages)
      .set(updateData)
      .where(eq(messages.id, parseInt(id)))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
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

    // Check if record exists before deleting
    const existingMessage = await db.select()
      .from(messages)
      .where(eq(messages.id, parseInt(id)))
      .limit(1);

    if (existingMessage.length === 0) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
    }

    const deleted = await db.delete(messages)
      .where(eq(messages.id, parseInt(id)))
      .returning();

    if (deleted.length === 0) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      message: 'Message deleted successfully',
      deletedRecord: deleted[0]
    });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}