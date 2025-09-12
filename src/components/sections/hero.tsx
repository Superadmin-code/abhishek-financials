export const HeroSection = () => {
  return (
    <section id="hero" className="container py-16 md:py-24 space-y-6">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
          Fast, Flexible Loans for Your Goals
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Whether you're looking to consolidate debt, fund a major purchase, or invest in your future, 
          our streamlined loan process gets you the financing you need with competitive rates and 
          transparent terms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a 
            href="#apply" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2.5 rounded-md font-medium transition-luxury btn-luxury inline-flex items-center justify-center"
          >
            Apply Now
          </a>
          <a 
            href="#products" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border px-5 py-2.5 rounded-md font-medium transition-luxury btn-luxury inline-flex items-center justify-center"
          >
            View Products
          </a>
        </div>
      </div>
    </section>
  );
};