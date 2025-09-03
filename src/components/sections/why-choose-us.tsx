import React from 'react';
import { Users, Trophy, Calculator, type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const features: FeatureCardProps[] = [
  {
    icon: Users,
    title: 'Dedicated Specialists',
    description: 'Our dedicated specialists offer expert support and guidance every step of the way.',
    buttonText: 'MEET THE TEAM',
    buttonLink: '#',
  },
  {
    icon: Trophy,
    title: 'Success Stories Rating',
    description: 'Our high success stories rating shows the trust and satisfaction of our happy customers.',
    buttonText: 'VIEW CLIENT REVIEW',
    buttonLink: '#',
  },
  {
    icon: Calculator,
    title: 'No front Appraisal Fees!',
    description: 'Enjoy zero upfront appraisal fees! No hidden charges, just a simple and fair process.',
    buttonText: 'WHY CHOOSE US',
    buttonLink: '#',
  },
];

const FeatureCard: React.FC<FeatureCardProps & { isLast: boolean }> = ({ icon: Icon, title, description, buttonText, buttonLink, isLast }) => (
  <div
    className={`flex flex-col items-center p-12 text-center ${
      !isLast ? 'md:border-r md:border-border' : ''
    }`}
  >
    <Icon className="w-16 h-16 mb-5 text-primary" strokeWidth={1.5} />
    <h3 className="flex items-center justify-center h-20 mb-4 text-2xl font-semibold text-primary">
      {title}
    </h3>
    <p className="flex-grow mb-8 leading-relaxed text-foreground">{description}</p>
    <a
      href={buttonLink}
      className="inline-block px-8 py-3 mt-auto text-sm font-medium tracking-wider text-center uppercase transition-colors duration-300 border rounded-sm border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
    >
      {buttonText}
    </a>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold text-primary">Why People Choose Us</h2>
          <p className="max-w-2xl mx-auto mt-4 text-foreground">
            People choose us for fast service, easy process, and trusted support every step of the way.
          </p>
        </div>

        <div className="bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} isLast={index === features.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;