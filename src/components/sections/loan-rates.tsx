import React from 'react';

export const LoanRates = () => {
  const rates = [
    {
      type: "Home Loans",
      rate: "8.5% p.a.",
      description: "Competitive rates for your dream home"
    },
    {
      type: "Business Loans", 
      rate: "9.2% p.a.",
      description: "Flexible financing for your business growth"
    },
    {
      type: "Personal Loans",
      rate: "10.8% p.a.",
      description: "Quick approval for personal needs"
    }
  ];

  return (
    <section id="rates" className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Current Loan Rates</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our competitive rates across all loan categories. All rates are indicative and subject to eligibility and approval.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rates.map((rate, index) => (
          <div 
            key={index}
            className="rounded-lg border p-6 bg-card shadow-sm luxury-hover transition-luxury"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">{rate.type}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-accent">Starting at</span>
                <div className="text-4xl font-bold text-primary mt-1">{rate.rate}</div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {rate.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};