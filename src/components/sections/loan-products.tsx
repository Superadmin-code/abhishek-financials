import React from 'react';

export const LoanProducts = () => {
  const loanProducts = [
    {
      title: "Home Loan",
      description: "Secure your dream home with our competitive home loan rates and flexible repayment options designed for your financial comfort."
    },
    {
      title: "Business Loan",
      description: "Fuel your entrepreneurial ambitions with tailored business loans that provide the capital you need to grow and expand your venture."
    },
    {
      title: "Mortgage Loan",
      description: "Unlock the equity in your property with our mortgage solutions, offering attractive rates and terms for your financial goals."
    }
  ];

  return (
    <section id="products" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Loan Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of loan solutions designed to meet your unique financial needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanProducts.map((product, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 hover:shadow-lg transition-refined luxury-hover bg-card"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};