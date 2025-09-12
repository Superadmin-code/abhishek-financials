export const HelpContact = () => {
  return (
    <section id="contact" className="container py-16">
      <div className="text-center">
        <h2 className="mb-6">Need Help?</h2>
        <p className="mb-8 text-lg">
          Have questions or need assistance? Our team is here to help you get the most out of our platform.
        </p>
        <a 
          href="mailto:info@example.com"
          className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium transition-luxury hover:bg-accent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};