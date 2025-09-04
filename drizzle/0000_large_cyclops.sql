CREATE TABLE `blog_posts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`excerpt` text,
	`content` text NOT NULL,
	`author` text NOT NULL,
	`featured_image` text,
	`category` text,
	`tags` text,
	`is_published` integer DEFAULT false,
	`published_at` text,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `blog_posts_slug_unique` ON `blog_posts` (`slug`);--> statement-breakpoint
CREATE TABLE `emi_calculations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`amount` real NOT NULL,
	`tenure_months` integer NOT NULL,
	`interest_rate` real NOT NULL,
	`emi_amount` real NOT NULL,
	`total_interest` real NOT NULL,
	`total_amount` real NOT NULL,
	`user_ip` text,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `loan_applications` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`email` text NOT NULL,
	`city` text NOT NULL,
	`loan_type` text NOT NULL,
	`amount` real NOT NULL,
	`monthly_income` real NOT NULL,
	`consent` integer NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `loan_docs` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`loan_type` text NOT NULL,
	`document_name` text NOT NULL,
	`description` text,
	`is_mandatory` integer DEFAULT true,
	`icon_name` text,
	`display_order` integer,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `messages` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`subject` text,
	`message` text NOT NULL,
	`is_read` integer DEFAULT false,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`key` text NOT NULL,
	`value` text NOT NULL,
	`category` text,
	`description` text,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `settings_key_unique` ON `settings` (`key`);--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`designation` text,
	`company` text,
	`rating` integer NOT NULL,
	`review` text NOT NULL,
	`image_url` text,
	`is_featured` integer DEFAULT false,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
