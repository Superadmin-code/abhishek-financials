import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { testimonials } from '@/db/schema';
import { eq, like, and, or, desc, asc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single testimonial by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const testimonial = await db.select()
        .from(testimonials)
        .where(eq(testimonials.id, parseInt(id)))
        .limit(1);

      if (testimonial.length === 0) {
        return NextResponse.json({ 
          error: 'Testimonial not found' 
        }, { status: 404 });
      }

      return NextResponse.json(testimonial[0]);
    }

    // List testimonials with filters and pagination
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');
    const rating = searchParams.get('rating');
    const isFeatured = searchParams.get('is_featured');
    const sort = searchParams.get('sort') || 'createdAt';
    const order = searchParams.get('order') || 'desc';

    let query = db.select().from(testimonials);

    // Build where conditions
    const conditions = [];

    if (search) {
      conditions.push(
        or(
          like(testimonials.name, `%${search}%`),
          like(testimonials.company, `%${search}%`)
        )
      );
    }

    if (rating && !isNaN(parseInt(rating))) {
      conditions.push(eq(testimonials.rating, parseInt(rating)));
    }

    if (isFeatured !== null && isFeatured !== undefined) {
      const featuredValue = isFeatured === 'true' ? 1 : 0;
      conditions.push(eq(testimonials.isFeatured, featuredValue));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Apply sorting
    const orderBy = order === 'asc' ? asc : desc;
    if (sort === 'name') {
      query = query.orderBy(orderBy(testimonials.name));
    } else if (sort === 'rating') {
      query = query.orderBy(orderBy(testimonials.rating));
    } else if (sort === 'company') {
      query = query.orderBy(orderBy(testimonials.company));
    } else {
      query = query.orderBy(orderBy(testimonials.createdAt));
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
    const { name, designation, company, rating, review, imageUrl, isFeatured } = requestBody;

    // Validate required fields
    if (!name) {
      return NextResponse.json({ 
        error: "Name is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }

    if (!rating) {
      return NextResponse.json({ 
        error: "Rating is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }

    if (!review) {
      return NextResponse.json({ 
        error: "Review is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }

    // Validate rating
    const ratingNum = parseInt(rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return NextResponse.json({ 
        error: "Rating must be an integer between 1 and 5",
        code: "INVALID_RATING" 
      }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim(),
      designation: designation?.trim() || null,
      company: company?.trim() || null,
      rating: ratingNum,
      review: review.trim(),
      imageUrl: imageUrl?.trim() || null,
      isFeatured: isFeatured === true ? 1 : 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newTestimonial = await db.insert(testimonials)
      .values(sanitizedData)
      .returning();

    return NextResponse.json(newTestimonial[0], { status: 201 });

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

    // Check if testimonial exists
    const existing = await db.select()
      .from(testimonials)
      .where(eq(testimonials.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Testimonial not found' 
      }, { status: 404 });
    }

    const requestBody = await request.json();
    const { name, designation, company, rating, review, imageUrl, isFeatured } = requestBody;

    // Build update object with only provided fields
    const updates: any = {
      updatedAt: new Date().toISOString()
    };

    if (name !== undefined) {
      if (!name.trim()) {
        return NextResponse.json({ 
          error: "Name cannot be empty",
          code: "INVALID_FIELD" 
        }, { status: 400 });
      }
      updates.name = name.trim();
    }

    if (designation !== undefined) {
      updates.designation = designation?.trim() || null;
    }

    if (company !== undefined) {
      updates.company = company?.trim() || null;
    }

    if (rating !== undefined) {
      const ratingNum = parseInt(rating);
      if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
        return NextResponse.json({ 
          error: "Rating must be an integer between 1 and 5",
          code: "INVALID_RATING" 
        }, { status: 400 });
      }
      updates.rating = ratingNum;
    }

    if (review !== undefined) {
      if (!review.trim()) {
        return NextResponse.json({ 
          error: "Review cannot be empty",
          code: "INVALID_FIELD" 
        }, { status: 400 });
      }
      updates.review = review.trim();
    }

    if (imageUrl !== undefined) {
      updates.imageUrl = imageUrl?.trim() || null;
    }

    if (isFeatured !== undefined) {
      updates.isFeatured = isFeatured === true ? 1 : 0;
    }

    const updated = await db.update(testimonials)
      .set(updates)
      .where(eq(testimonials.id, parseInt(id)))
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

    // Check if testimonial exists
    const existing = await db.select()
      .from(testimonials)
      .where(eq(testimonials.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Testimonial not found' 
      }, { status: 404 });
    }

    const deleted = await db.delete(testimonials)
      .where(eq(testimonials.id, parseInt(id)))
      .returning();

    return NextResponse.json({ 
      message: 'Testimonial deleted successfully',
      testimonial: deleted[0]
    });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}