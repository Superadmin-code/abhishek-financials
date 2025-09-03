import React from 'react';
import { Home, User, Car, GraduationCap } from 'lucide-react';

const LoanRates = () => {
    const loanData = [
        {
            icon: Home,
            rate: "8.50%",
            title: "Home Loans",
        },
        {
            icon: User,
            rate: "10.75%",
            title: "Personal Loans",
        },
        {
            icon: Car,
            rate: "9.50%",
            title: "Car Loans",
        },
        {
            icon: GraduationCap,
            rate: "11.00%",
            title: "Education Loan",
        },
    ];

    return (
        <section className="bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 md:grid-cols-4 md:divide-x md:divide-y-0">
                    {loanData.map((loan, index) => (
                        <div 
                           key={loan.title} 
                           className={`flex items-center justify-center space-x-4 p-6 ${index > 1 ? 'sm:border-t md:border-t-0 border-gray-200' : 'sm:border-b-0'}`}
                        >
                            <loan.icon className="w-12 h-12 text-primary flex-shrink-0" strokeWidth={1} />
                            <div className="text-left">
                                <h3 className="text-4xl font-bold text-primary">{loan.rate}</h3>
                                <small className="text-xs font-semibold text-foreground uppercase tracking-wider">{loan.title}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LoanRates;