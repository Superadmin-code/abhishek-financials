"use client";

import React from 'react';
import { Eye, Zap, Heart, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const FeatureCard: React.FC<FeatureCardProps & { index: number }> = ({ icon: Icon, title, description, features, index }) => {
  const [cardRef, cardInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <motion.div 
      ref={cardRef}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate={cardInView ? "visible" : "hidden"}
      whileHover={{ 
        y: -15,
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
        transition: { 
          duration: 0.3,
          type: "spring",
          stiffness: 300
        }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        {/* Icon */}
        <motion.div 
          className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto"
          initial={{ scale: 0, rotate: -180 }}
          animate={cardInView ? { 
            scale: 1, 
            rotate: 0 
          } : { 
            scale: 0, 
            rotate: -180 
          }}
          transition={{
            duration: 0.8,
            delay: 0.3 + index * 0.2,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -10, 10, 0],
            boxShadow: "0 0 30px rgba(47, 110, 243, 0.4)",
            transition: { duration: 0.6 }
          }}
        >
          <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <motion.h3 
          className="text-2xl font-bold text-primary"
          initial={{ opacity: 0, x: -20 }}
          animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{
            duration: 0.6,
            delay: 0.5 + index * 0.2,
          }}
          whileHover={{
            scale: 1.05,
            color: "#2F6EF3",
            textShadow: "0 0 10px rgba(47, 110, 243, 0.3)",
            transition: { duration: 0.2 }
          }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          className="text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: 0.7 + index * 0.2,
          }}
        >
          {description}
        </motion.p>

        {/* Features List */}
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.9 + index * 0.2,
          }}
        >
          {features.map((feature, featureIndex) => (
            <motion.div 
              key={featureIndex} 
              className="flex items-center justify-center space-x-2 text-sm text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 0.4,
                delay: 1.1 + index * 0.2 + featureIndex * 0.1,
              }}
              whileHover={{ 
                x: 10,
                scale: 1.05,
                color: "#2F6EF3",
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-accent rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: featureIndex * 0.3,
                }}
              />
              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Glassmorphism effect border */}
      <motion.div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-4 right-4 w-3 h-3 bg-accent/20 rounded-full"
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
        className="absolute bottom-4 left-4 w-2 h-2 bg-primary/20 rounded-full"
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
  );
};

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [statsRef, statsInView] = useInView({
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

  const statsData = [
    { value: "10,000+", label: "Happy Customers" },
    { value: "₹500Cr+", label: "Loans Disbursed" },
    { value: "4.9/5", label: "Customer Rating" }
  ];

  return (
    <section id="why-us" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 bg-primary/5 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-7xl" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-center mb-4"
            variants={headerVariants}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(47, 110, 243, 0.3)"
            }}
          >
            Why Choose Abhishek Financial Solutions?
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We built our foundation on three core principles that make us the trusted choice for thousands of customers.
          </motion.p>
        </motion.div>

        {/* Trust Factor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustFactors.map((factor, index) => (
            <FeatureCard key={factor.title} {...factor} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="text-center"
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {statsData.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="space-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  delay: 0.4 + index * 0.2, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="text-3xl font-bold text-primary"
                  animate={statsInView ? {
                    textShadow: [
                      "0 0 0px rgba(47, 110, 243, 0)", 
                      "0 0 10px rgba(47, 110, 243, 0.5)", 
                      "0 0 0px rgba(47, 110, 243, 0)"
                    ]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1 + index * 0.5
                  }}
                  whileHover={{
                    scale: 1.2,
                    color: "#2F6EF3",
                    textShadow: "0 0 15px rgba(47, 110, 243, 0.6)"
                  }}
                >
                  {stat.value}
                </motion.div>
                <motion.div 
                  className="text-muted-foreground"
                  whileHover={{
                    color: "#2F6EF3",
                    scale: 1.05
                  }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;