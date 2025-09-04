import React from 'react';
import { Home, Building2, GraduationCap, User } from 'lucide-react';

interface LoanCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const loanProducts: LoanCard[] = [
  {
    id: 'home',
    title: 'Home Loan',
    description: 'Get your dream home with our competitive rates and flexible terms. Quick approval process.',
    icon: Home
  },
  {
    id: 'business',
    title: 'Business Loan',
    description: 'Fuel your business growth with tailored financing solutions. Minimal documentation.',
    icon: Building2
  },
  {
    id: 'education',
    title: 'Education Loan',
    description: 'Invest in your future with our education loans. Low interest rates for students.',
    icon: GraduationCap
  },
  {
    id: 'personal',
    title: 'Personal Loan',
    description: 'Meet your personal needs with our hassle-free personal loans. Instant approval.',
    icon: User
  }
];

export const LoanCategories = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F1E3A] mb-4">
            Our Loan Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose from our comprehensive range of loan products designed to meet your financial needs with competitive rates and flexible terms.
          </p>
        </div>

        {/* Loan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loanProducts.map((loan) => {
            const IconComponent = loan.icon;
            return (
              <div
                key={loan.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F6EF3]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2F6EF3] to-[#0F1E3A] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0F1E3A] mb-3 group-hover:text-[#2F6EF3] transition-colors duration-300">
                    {loan.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {loan.description}
                  </p>

                  {/* Apply Button */}
                  <button className="w-full bg-gradient-to-r from-[#2F6EF3] to-[#0F1E3A] text-white py-3 px-6 rounded-lg font-semibold text-sm hover:shadow-lg hover:from-[#0F1E3A] hover:to-[#2F6EF3] transition-all duration-300 transform hover:scale-105 active:scale-95">
                    Apply Now
                  </button>
                </div>

                {/* Glassmorphism effect border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-[#2F6EF3] font-medium">
            <span>Need help choosing the right loan?</span>
            <button className="underline hover:text-[#0F1E3A] transition-colors duration-200">
              Contact our experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};