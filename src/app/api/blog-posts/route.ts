import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { blogPosts } from '@/db/schema';
import { eq, like, and, or, desc, asc, ne } from 'drizzle-orm';

// Utility function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Utility function to validate tags as JSON array
function validateTags(tags: any): string[] | null {
  if (!tags) return null;
  if (typeof tags === 'string') {
    try {
      const parsed = JSON.parse(tags);
      if (!Array.isArray(parsed)) return null;
      return parsed.filter(tag => typeof tag === 'string');
    } catch {
      return null;
    }
  }
  if (Array.isArray(tags)) {
    return tags.filter(tag => typeof tag === 'string');
  }
  return null;
}

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
        .from(blogPosts)
        .where(eq(blogPosts.id, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
      }

      return NextResponse.json(record[0]);
    }

    // List with pagination, search, and filtering
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    const isPublished = searchParams.get('is_published');
    const publishedOnly = searchParams.get('published_only') === 'true';
    const sort = searchParams.get('sort') || 'createdAt';
    const order = searchParams.get('order') || 'desc';

    let query = db.select().from(blogPosts);
    let conditions = [];

    // Search functionality
    if (search) {
      conditions.push(
        or(
          like(blogPosts.title, `%${search}%`),
          like(blogPosts.content, `%${search}%`),
          like(blogPosts.excerpt, `%${search}%`)
        )
      );
    }

    // Category filter
    if (category) {
      conditions.push(eq(blogPosts.category, category));
    }

    // Published filter
    if (isPublished !== null && (isPublished === 'true' || isPublished === 'false')) {
      conditions.push(eq(blogPosts.isPublished, isPublished === 'true'));
    }

    // Published only filter (overrides is_published filter)
    if (publishedOnly) {
      conditions.push(eq(blogPosts.isPublished, true));
    }

    // Apply conditions
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Apply sorting
    const sortColumn = blogPosts[sort as keyof typeof blogPosts] || blogPosts.createdAt;
    query = query.orderBy(order === 'asc' ? asc(sortColumn) : desc(sortColumn));

    // Apply pagination
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
    const { title, content, author, excerpt, featuredImage, category, tags } = requestBody;

    // Validate required fields
    if (!title || !title.trim()) {
      return NextResponse.json({ 
        error: "Title is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }

    if (!content || !content.trim()) {
      return NextResponse.json({ 
        error: "Content is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }

    if (!author || !author.trim()) {
      return NextResponse.json({ 
        error: "Author is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }

    // Validate tags if provided
    let validatedTags = null;
    if (tags) {
      validatedTags = validateTags(tags);
      if (validatedTags === null && tags) {
        return NextResponse.json({ 
          error: "Tags must be a valid JSON array of strings",
          code: "INVALID_TAGS" 
        }, { status: 400 });
      }
    }

    // Generate slug from title
    const slug = generateSlug(title.trim());
    
    // Check if slug already exists
    const existingSlug = await db.select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug))
      .limit(1);

    let finalSlug = slug;
    if (existingSlug.length > 0) {
      // Append timestamp to make it unique
      finalSlug = `${slug}-${Date.now()}`;
    }

    const now = new Date().toISOString();

    const insertData = {
      title: title.trim(),
      slug: finalSlug,
      excerpt: excerpt?.trim() || null,
      content: content.trim(),
      author: author.trim(),
      featuredImage: featuredImage?.trim() || null,
      category: category?.trim() || null,
      tags: validatedTags,
      isPublished: false, // Default to false
      publishedAt: null,
      createdAt: now,
      updatedAt: now,
    };

    const newRecord = await db.insert(blogPosts)
      .values(insertData)
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
      .from(blogPosts)
      .where(eq(blogPosts.id, parseInt(id)))
      .limit(1);

    if (existingRecord.length === 0) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    const requestBody = await request.json();
    const { title, content, author, excerpt, featuredImage, category, tags, isPublished } = requestBody;

    // Validate required fields if provided
    if (title !== undefined && (!title || !title.trim())) {
      return NextResponse.json({ 
        error: "Title cannot be empty",
        code: "INVALID_FIELD" 
      }, { status: 400 });
    }

    if (content !== undefined && (!content || !content.trim())) {
      return NextResponse.json({ 
        error: "Content cannot be empty",
        code: "INVALID_FIELD" 
      }, { status: 400 });
    }

    if (author !== undefined && (!author || !author.trim())) {
      return NextResponse.json({ 
        error: "Author cannot be empty",
        code: "INVALID_FIELD" 
      }, { status: 400 });
    }

    // Validate tags if provided
    let validatedTags = undefined;
    if (tags !== undefined) {
      if (tags === null) {
        validatedTags = null;
      } else {
        validatedTags = validateTags(tags);
        if (validatedTags === null) {
          return NextResponse.json({ 
            error: "Tags must be a valid JSON array of strings",
            code: "INVALID_TAGS" 
          }, { status: 400 });
        }
      }
    }

    const now = new Date().toISOString();
    let updates: any = {
      updatedAt: now,
    };

    // Update fields if provided
    if (title !== undefined) {
      updates.title = title.trim();
      // Auto-update slug if title changes
      const newSlug = generateSlug(title.trim());
      if (newSlug !== existingRecord[0].slug) {
        // Check if new slug already exists
        const existingSlug = await db.select()
          .from(blogPosts)
          .where(and(eq(blogPosts.slug, newSlug), ne(blogPosts.id, parseInt(id))))
          .limit(1);

        let finalSlug = newSlug;
        if (existingSlug.length > 0) {
          finalSlug = `${newSlug}-${Date.now()}`;
        }
        updates.slug = finalSlug;
      }
    }

    if (content !== undefined) updates.content = content.trim();
    if (author !== undefined) updates.author = author.trim();
    if (excerpt !== undefined) updates.excerpt = excerpt?.trim() || null;
    if (featuredImage !== undefined) updates.featuredImage = featuredImage?.trim() || null;
    if (category !== undefined) updates.category = category?.trim() || null;
    if (validatedTags !== undefined) updates.tags = validatedTags;

    // Handle published status and publishedAt timestamp
    if (isPublished !== undefined) {
      updates.isPublished = Boolean(isPublished);
      
      // Set publishedAt when changing to published for the first time
      if (Boolean(isPublished) && !existingRecord[0].isPublished) {
        updates.publishedAt = now;
      }
      
      // Clear publishedAt when unpublishing
      if (!Boolean(isPublished) && existingRecord[0].isPublished) {
        updates.publishedAt = null;
      }
    }

    const updated = await db.update(blogPosts)
      .set(updates)
      .where(eq(blogPosts.id, parseInt(id)))
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
    const existingRecord = await db.select()
      .from(blogPosts)
      .where(eq(blogPosts.id, parseInt(id)))
      .limit(1);

    if (existingRecord.length === 0) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    const deleted = await db.delete(blogPosts)
      .where(eq(blogPosts.id, parseInt(id)))
      .returning();

    return NextResponse.json({
      message: 'Blog post deleted successfully',
      deletedRecord: deleted[0]
    });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}