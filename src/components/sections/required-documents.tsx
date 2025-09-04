import React from 'react';
import { Home, Building2, GraduationCap, User } from 'lucide-react';

const RequiredDocuments = () => {
  const loanTypes = [
    {
      icon: Home,
      title: 'Home Loan',
      documents: [
        'Identity Proof',
        'Address Proof',
        'Income Documents',
        'Property Papers',
        'Bank Statements'
      ]
    },
    {
      icon: Building2,
      title: 'Business Loan',
      documents: [
        'Business Registration',
        'GST Certificate',
        'Financial Statements',
        'Bank Statements',
        'Identity Proof'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Education Loan',
      documents: [
        'Admission Letter',
        'Fee Structure',
        'Academic Records',
        'Identity Proof',
        'Income Proof'
      ]
    },
    {
      icon: User,
      title: 'Personal Loan',
      documents: [
        'Identity Proof',
        'Address Proof',
        'Income Documents',
        'Bank Statements',
        'Employment Proof'
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1E3A] mb-4">
            Required Documents
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Prepare these essential documents to streamline your loan application process
          </p>
        </div>

        {/* Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loanTypes.map((loan, index) => {
            const IconComponent = loan.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none" />
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#2F6EF3] to-[#0F1E3A] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Loan Type Title */}
                <h3 className="text-xl font-semibold text-[#0F1E3A] mb-4 text-center">
                  {loan.title}
                </h3>

                {/* Document List */}
                <div className="space-y-3">
                  {loan.documents.map((document, docIndex) => (
                    <div
                      key={docIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#2F6EF3] to-[#0F1E3A] rounded-full flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">
                        {document}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#2F6EF3]/30 transition-colors duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need help with document preparation? Our experts are here to guide you.
          </p>
          <button className="bg-gradient-to-r from-[#2F6EF3] to-[#0F1E3A] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Get Document Checklist
          </button>
        </div>
      </div>
    </section>
  );
};

export default RequiredDocuments;