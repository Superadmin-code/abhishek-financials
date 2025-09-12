export const Partners = () => {
  const partners = [
    "Bank A",
    "Bank B", 
    "Lender C",
    "Credit Union D",
    "Financial E",
    "Trust F"
  ];

  return (
    <section id="partners" className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Partners</h2>
      </div>
      
      <div className="flex gap-4 flex-wrap items-center justify-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="rounded-full border px-4 py-2 text-sm bg-secondary transition-gentle hover:bg-muted"
          >
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
};