import React from 'react';

export const NewsBlog = () => {
  return (
    <section id="news" className="container py-16">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-display font-semibold text-primary mb-4">
            Latest News
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8">
          <article className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-display font-semibold text-primary mb-3">
              Revolutionary AI Technology Breakthrough
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Scientists have achieved a major milestone in artificial intelligence research, 
              developing new algorithms that promise to transform how we interact with technology. 
              This breakthrough could revolutionize industries from healthcare to transportation.
            </p>
          </article>
          
          <article className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-display font-semibold text-primary mb-3">
              Sustainable Energy Initiative Launches
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A groundbreaking new initiative aims to accelerate the adoption of renewable energy 
              sources across major cities worldwide. The program focuses on innovative solar and 
              wind technologies that could reduce carbon emissions by up to 40% within the next decade.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};