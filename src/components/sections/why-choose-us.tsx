export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience the difference with our commitment to excellence and customer satisfaction
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-6 text-center luxury-hover luxury-shadow transition-luxury">
          <div className="mb-4">
            <span className="text-4xl">💰</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Low Interest</h3>
          <p className="text-muted-foreground">
            Competitive rates that help you save money while achieving your financial goals
          </p>
        </div>
        
        <div className="border rounded-lg p-6 text-center luxury-hover luxury-shadow transition-luxury">
          <div className="mb-4">
            <span className="text-4xl">⚡</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Quick Approvals</h3>
          <p className="text-muted-foreground">
            Fast processing and instant decisions to get you the funds you need without delay
          </p>
        </div>
        
        <div className="border rounded-lg p-6 text-center luxury-hover luxury-shadow transition-luxury">
          <div className="mb-4">
            <span className="text-4xl">🤝</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
          <p className="text-muted-foreground">
            Personalized assistance from our expert team throughout your entire journey
          </p>
        </div>
      </div>
    </section>
  )
}