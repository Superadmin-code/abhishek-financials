import { sqliteTable, integer, text, real } from 'drizzle-orm/sqlite-core';

// Loan Applications Table
export const loanApplications = sqliteTable('loan_applications', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  phone: text('phone').notNull(),
  email: text('email').notNull(),
  city: text('city').notNull(),
  loanType: text('loan_type').notNull(), // enum: 'home', 'business', 'education', 'personal'
  amount: real('amount').notNull(),
  monthlyIncome: real('monthly_income').notNull(),
  consent: integer('consent', { mode: 'boolean' }).notNull(),
  status: text('status').notNull().default('pending'), // enum: 'pending', 'approved', 'rejected'
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Testimonials Table
export const testimonials = sqliteTable('testimonials', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  designation: text('designation'),
  company: text('company'),
  rating: integer('rating').notNull(),
  review: text('review').notNull(),
  imageUrl: text('image_url'),
  isFeatured: integer('is_featured', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Blog Posts Table
export const blogPosts = sqliteTable('blog_posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
  author: text('author').notNull(),
  featuredImage: text('featured_image'),
  category: text('category'),
  tags: text('tags', { mode: 'json' }),
  isPublished: integer('is_published', { mode: 'boolean' }).default(false),
  publishedAt: text('published_at'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Loan Documents Table
export const loanDocs = sqliteTable('loan_docs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  loanType: text('loan_type').notNull(), // enum: 'home', 'business', 'education', 'personal'
  documentName: text('document_name').notNull(),
  description: text('description'),
  isMandatory: integer('is_mandatory', { mode: 'boolean' }).default(true),
  iconName: text('icon_name'),
  displayOrder: integer('display_order'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Messages Table
export const messages = sqliteTable('messages', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  subject: text('subject'),
  message: text('message').notNull(),
  isRead: integer('is_read', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Settings Table
export const settings = sqliteTable('settings', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  key: text('key').notNull().unique(),
  value: text('value').notNull(),
  category: text('category'), // enum: 'contact', 'office', 'social', 'general'
  description: text('description'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// EMI Calculations Table
export const emiCalculations = sqliteTable('emi_calculations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  amount: real('amount').notNull(),
  tenureMonths: integer('tenure_months').notNull(),
  interestRate: real('interest_rate').notNull(),
  emiAmount: real('emi_amount').notNull(),
  totalInterest: real('total_interest').notNull(),
  totalAmount: real('total_amount').notNull(),
  userIp: text('user_ip'),
  createdAt: text('created_at').notNull(),
});