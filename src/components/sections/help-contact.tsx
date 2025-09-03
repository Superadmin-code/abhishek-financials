import type { FC } from 'react';
import { Calendar, Phone, Users } from 'lucide-react';

const HelpContact: FC = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-[36px] font-semibold text-primary mb-4 leading-tight">
            We are Here to Help You
          </h2>
          <p className="text-foreground text-base">
            Our mission is to deliver reliable, latest news and opinions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Card 1: Apply for Loan */}
          <div className="bg-card p-10 border border-border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <div className="mb-8">
              <Calendar className="h-16 w-16 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
              Apply for Loan
            </h3>
            <p className="text-foreground text-base leading-relaxed mb-6 flex-grow">
              Looking to buy a car or home loan? then apply for loan now.
            </p>
            <a
              href="#"
              className="font-medium text-primary border-b border-primary hover:text-accent hover:border-accent pb-1 transition-colors"
            >
              Get Appointment
            </a>
          </div>

          {/* Card 2: Call Us At */}
          <div className="bg-card p-10 border border-border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <div className="mb-8">
              <Phone className="h-16 w-16 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
              Call Us At
            </h3>
            <div className="text-base leading-relaxed mb-6 flex-grow">
              <p className="text-accent font-bold text-xl">8208918825</p>
              <p className="text-foreground">needhelp@rvfinserve.in</p>
            </div>
            <a
              href="#"
              className="font-medium text-primary border-b border-primary hover:text-accent hover:border-accent pb-1 transition-colors"
            >
              Contact us
            </a>
          </div>

          {/* Card 3: Talk to Advisor */}
          <div className="bg-card p-10 border border-border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <div className="mb-8">
              <Users className="h-16 w-16 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
              Talk to Advisor
            </h3>
            <p className="text-foreground text-base leading-relaxed mb-6 flex-grow">
              Need to loan advise? Talk to our Loan advisors.
            </p>
            <a
              href="#"
              className="font-medium text-primary border-b border-primary hover:text-accent hover:border-accent pb-1 transition-colors"
            >
              Meet The Advisor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpContact;