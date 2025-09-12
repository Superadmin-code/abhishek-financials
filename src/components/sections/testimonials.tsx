import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "This platform transformed our business operations completely. The intuitive design and powerful features made implementation seamless and results immediate.",
      name: "Sarah Johnson",
      title: "CEO, TechCorp"
    },
    {
      id: 2,
      quote: "Outstanding service and support. The team's dedication to excellence shows in every detail of their product. Highly recommended for any growing business.",
      name: "Michael Chen",
      title: "Founder, InnovateLab"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why leading businesses trust us to deliver exceptional results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card p-8 rounded-lg luxury-shadow hover:luxury-shadow-lg transition-luxury border border-border/50"
            >
              <Quote className="w-8 h-8 text-accent mb-6" />
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed font-medium">
                "{testimonial.quote}"
              </blockquote>
              <footer>
                <cite className="not-italic">
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </cite>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};