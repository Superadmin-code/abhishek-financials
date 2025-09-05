"use client";

import React from 'react';
import { Home, User, Car, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LoanRates = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };

    return (
        <section className="bg-white">
            <div className="container mx-auto" ref={ref}>
                <motion.div 
                    className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 md:grid-cols-4 md:divide-x md:divide-y-0"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {loanData.map((loan, index) => (
                        <motion.div 
                           key={loan.title} 
                           className={`flex items-center justify-center space-x-4 p-6 ${index > 1 ? 'sm:border-t md:border-t-0 border-gray-200' : 'sm:border-b-0'}`}
                           variants={itemVariants}
                           whileHover={{ 
                               scale: 1.05,
                               backgroundColor: "rgba(47, 110, 243, 0.02)",
                               transition: { duration: 0.2 }
                           }}
                           whileTap={{ scale: 0.98 }}
                        >
                            <motion.div
                                initial={{ rotate: 0, scale: 1 }}
                                animate={inView ? { 
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1]
                                } : {}}
                                transition={{ 
                                    duration: 2,
                                    delay: index * 0.3,
                                    repeat: Infinity,
                                    repeatDelay: 5
                                }}
                                whileHover={{ 
                                    rotate: 360,
                                    scale: 1.2,
                                    transition: { duration: 0.6 }
                                }}
                            >
                                <loan.icon className="w-12 h-12 text-primary flex-shrink-0" strokeWidth={1} />
                            </motion.div>
                            <div className="text-left">
                                <motion.h3 
                                    className="text-4xl font-bold text-primary"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                                    transition={{ 
                                        delay: 0.3 + index * 0.2, 
                                        duration: 0.8,
                                        type: "spring",
                                        stiffness: 300
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        color: "#2F6EF3",
                                        textShadow: "0 0 8px rgba(47, 110, 243, 0.5)"
                                    }}
                                >
                                    {loan.rate}
                                </motion.h3>
                                <motion.small 
                                    className="text-xs font-semibold text-foreground uppercase tracking-wider"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ 
                                        delay: 0.5 + index * 0.2, 
                                        duration: 0.5 
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        color: "#2F6EF3"
                                    }}
                                >
                                    {loan.title}
                                </motion.small>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LoanRates;