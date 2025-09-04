import React from 'react';
import { Eye, Zap, Heart, type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const trustFactors: FeatureCardProps[] = [
  {
    icon: Eye,
    title: 'Transparent',
    description: 'Complete transparency in our processes with no hidden fees or surprises. You know exactly what you are getting.',
    features: ['No Hidden Charges', 'Clear Terms & Conditions', 'Upfront Pricing', 'Real-time Updates']
  },
  {
    icon: Zap,
    title: 'Fast',
    description: 'Lightning-fast approvals and processing. Get your loan approved in as little as 24 hours with minimal paperwork.',
    features: ['24 Hour Approval', 'Digital Documentation', 'Quick Disbursement', 'Instant Pre-approval']
  },
  {
    icon: Heart,
    title: 'Human',
    description: 'Personal touch with dedicated relationship managers who understand your unique financial needs and goals.',
    features: ['Dedicated Manager', 'Personalized Service', '24/7 Support', 'Expert Guidance']
  }
];

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, features }) => (
  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out">
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    {/* Content */}
    <div className="relative z-10 text-center space-y-6">
      {/* Icon */}
      <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Features List */}
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-center space-x-2 text-sm text-primary">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Glassmorphism effect border */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </div>
);

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Choose AGFineserve?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We built our foundation on three core principles that make us the trusted choice for thousands of customers.
          </p>
        </div>

        {/* Trust Factor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustFactors.map((factor) => (
            <FeatureCard key={factor.title} {...factor} />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">₹500Cr+</div>
              <div className="text-muted-foreground">Loans Disbursed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;