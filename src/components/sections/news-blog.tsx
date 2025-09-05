import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const newsData = [
  {
    id: 1,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/professional-financial-blog-cover-image--6c08d34c-20250905164014.jpg?',
    title: "Understanding Personal Loan Interest Rates: A Complete Guide",
    date: 'SEPTEMBER 4, 2025',
    author: 'ABHISHEK SHARMA',
    excerpt: 'Learn everything about personal loan interest rates, factors affecting them, and how to secure the best rates for your financial needs...',
    url: '#',
  },
  {
    id: 2,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/professional-financial-services-blog-cov-b4327e36-20250905164025.jpg?',
    title: "Home Loan Pre-Approval: Benefits and Process Explained",
    date: 'AUGUST 28, 2025',
    author: 'PRIYA PATEL',
    excerpt: 'Discover the advantages of home loan pre-approval and step-by-step process to get pre-approved for your dream home purchase...',
    url: '#',
  },
];

const NewsBlog = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-primary">
            Latest Financial Insights & News
          </h2>
          <p className="text-foreground mt-4 text-base">
            Stay updated with the latest trends, tips, and expert advice in finance and lending.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {newsData.map((article) => (
            <div key={article.id} className="card bg-card rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-[2px] hover-lift">
              <Link href={article.url}>
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-10">
                <div className="text-xs font-medium uppercase mb-4 text-foreground tracking-wide">
                  <span className="text-accent">{article.date}</span>
                  <span className="mx-2">|</span>
                  <span>BY {article.author}</span>
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4 leading-tight">
                  <Link href={article.url} className="hover:text-accent transition-colors duration-300">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-foreground mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <Link href={article.url} className="text-primary font-semibold border-b-2 border-primary hover:text-accent hover:border-accent transition-colors duration-300 pb-1">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsBlog;