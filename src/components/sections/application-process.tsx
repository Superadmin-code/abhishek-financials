import React from 'react';
import Link from 'next/link';

interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStepData[] = [
  {
    number: "1",
    title: "Choose Loan Amount",
    description: "Select the loan amount that fits your needs. Flexible options are available for you!",
  },
  {
    number: "2",
    title: "Approved Your Loan",
    description: "Get your loan approved quickly with our easy process. Fast and hassle-free approval!",
  },
  {
    number: "3",
    title: "Get Your Cash",
    description: "Receive your cash quickly after approval. Fast, easy, and hassle-free process!",
  },
];

const ProcessStepCard: React.FC<ProcessStepData> = ({ number, title, description }) => {
  return (
    <div className="relative pt-[30px] h-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[60px] bg-card border-2 border-[#e7ecf2] rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold text-primary">{number}</span>
      </div>
      <div className="bg-card p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-border text-center h-full">
        <h3 className="text-[22px] font-semibold text-primary leading-tight mt-4">{title}</h3>
        <p className="text-foreground mt-2">{description}</p>
      </div>
    </div>
  );
};

const ApplicationProcess = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-[36px] font-semibold text-primary leading-tight">
            Fast & Easy Application Process
          </h1>
          <p className="mt-4 text-base text-foreground">
            Apply our simple process quickly and easily. Get started in just a few easy steps!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-[60px] md:gap-y-0">
          {steps.map((step, index) => (
            <ProcessStepCard key={index} {...step} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="https://rvfinserve.in/apply-now" className="btn inline-block">
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;