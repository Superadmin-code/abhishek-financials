import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const newsData = [
  {
    id: 1,
    image: 'https://rvfinserve.in/wp-content/uploads/2024/05/blog-pic-3.jpg',
    title: "ITC Cannot Be Denied for Supplier's GSTIN Error: Delhi High Court Ruling",
    date: 'MARCH 31, 2025',
    author: 'YOGESH PATIL',
    excerpt: 'Judicial Update: ITC Cannot Be Denied Due to Supplier’s Mistake Introduction A recent judgment...',
    url: '#',
  },
  {
    id: 2,
    image: 'https://rvfinserve.in/wp-content/uploads/2024/05/blog-pic-1.jpg',
    title: "ITC Cannot Be Denied for Supplier's GSTIN Error: Delhi High Court Ruling",
    date: 'DECEMBER 14, 2016',
    author: 'PANKAJNEMADE1978',
    excerpt: 'Judicial Update: ITC Cannot Be Denied Due to Supplier’s Mistake Introduction A recent judgment...',
    url: '#',
  },
];

const NewsBlog = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-primary">
            Latest News from Loan Company
          </h2>
          <p className="text-foreground mt-4 text-base">
            Our mission is to deliver reliable, latest news and opinions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {newsData.map((article) => (
            <div key={article.id} className="card bg-card rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-[2px]">
              <Link href={article.url}>
                <div className="relative h-64 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
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