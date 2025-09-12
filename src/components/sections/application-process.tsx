"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Clock, DollarSign } from 'lucide-react';

interface ProcessStepData {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const steps: ProcessStepData[] = [
  {
    number: "1",
    title: "Choose Loan Amount",
    description: "Select the loan amount that fits your needs. Flexible options are available for you!",
    icon: DollarSign,
  },
  {
    number: "2",
    title: "Approved Your Loan",
    description: "Get your loan approved quickly with our easy process. Fast and hassle-free approval!",
    icon: CheckCircle,
  },
  {
    number: "3",
    title: "Get Your Cash",
    description: "Receive your cash quickly after approval. Fast, easy, and hassle-free process!",
    icon: Clock,
  },
];

const ProcessStepCard: React.FC<ProcessStepData & { index: number }> = ({ 
  number, 
  title, 
  description, 
  icon: Icon, 
  index 
}) => {
  const [cardRef, cardInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div 
      ref={cardRef}
      className="relative pt-[30px] h-full"
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={cardInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1 
      } : { 
        opacity: 0, 
        y: 60, 
        scale: 0.8 
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.3,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
    >
      {/* Animated Number Circle */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[60px] bg-card border-2 border-[#e7ecf2] rounded-full flex items-center justify-center overflow-hidden"
        initial={{ scale: 0, rotate: -180 }}
        animate={cardInView ? { 
          scale: 1, 
          rotate: 0,
          borderColor: "#2F6EF3"
        } : { 
          scale: 0, 
          rotate: -180 
        }}
        transition={{
          duration: 0.8,
          delay: 0.2 + index * 0.3,
          type: "spring",
          stiffness: 200
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 20px rgba(47, 110, 243, 0.3)",
          backgroundColor: "#2F6EF3",
          color: "#ffffff"
        }}
      >
        <motion.span 
          className="text-2xl font-bold text-primary"
          animate={cardInView ? {
            color: ["#0F1E3A", "#2F6EF3", "#0F1E3A"]
          } : {}}
          transition={{
            duration: 2,
            delay: 1 + index * 0.3,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          {number}
        </motion.span>
        
        {/* Floating icon background */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-20"
          initial={{ scale: 0, rotate: 0 }}
          animate={cardInView ? { 
            scale: [0, 1.2, 0.8], 
            rotate: [0, 180, 360] 
          } : { scale: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5 + index * 0.3,
          }}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Main Card */}
      <motion.div 
        className="bg-card p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-border text-center h-full relative overflow-hidden group"
        whileHover={{ 
          y: -10,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
          borderColor: "#2F6EF3",
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Background gradient effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
        
        <div className="relative z-10">
          <motion.h3 
            className="text-[22px] font-semibold text-primary leading-tight mt-4"
            initial={{ opacity: 0, x: -20 }}
            animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{
              duration: 0.6,
              delay: 0.4 + index * 0.3,
            }}
            whileHover={{
              scale: 1.05,
              color: "#2F6EF3",
              transition: { duration: 0.2 }
            }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-foreground mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.6 + index * 0.3,
            }}
          >
            {description}
          </motion.p>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-accent/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-4 left-4 w-3 h-3 bg-primary/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1 + index * 0.5,
          }}
        />
      </motion.div>

      {/* Connection Line (except for last item) */}
      {index < steps.length - 1 && (
        <motion.div
          className="hidden md:block absolute top-[30px] left-[calc(50%+30px)] w-[calc(100%-60px)] h-[2px] bg-gradient-to-r from-accent/50 to-primary/50"
          initial={{ scaleX: 0 }}
          animate={cardInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: 1,
            delay: 0.8 + index * 0.3,
            ease: "easeOut"
          }}
          style={{ transformOrigin: "left" }}
        />
      )}
    </motion.div>
  );
};

const ApplicationProcess = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h1 
            className="text-[36px] font-semibold text-primary leading-tight"
            variants={headerVariants}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(47, 110, 243, 0.3)"
            }}
          >
            Fast & Easy Application Process
          </motion.h1>
          <motion.p 
            className="mt-4 text-base text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Apply our simple process quickly and easily. Get started in just a few easy steps!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-[60px] md:gap-y-0 relative">
          {steps.map((step, index) => (
            <ProcessStepCard key={index} {...step} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="https://rvfinserve.in/apply-now" 
              className="btn inline-block px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 hover-lift"
            >
              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Apply Now
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationProcess;