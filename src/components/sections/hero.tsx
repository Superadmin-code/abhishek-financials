"use client";

import React from 'react';
import { ArrowRight, Play, Shield, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1], // Butter smooth easing
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1], // Butter smooth easing
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-12, 12, -12],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing
      },
    },
  };

  return (
    <section className="relative overflow-hidden pt-16 min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
      
      {/* Abstract Financial Shapes */}
      <motion.div 
        className="absolute top-32 right-20 opacity-10"
        variants={floatingVariants}
        animate="animate"
      >
        <motion.div 
          className="w-16 h-16 border-2 border-accent rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 right-32 opacity-10"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
      >
        <TrendingUp className="w-20 h-20 text-primary" />
      </motion.div>
      <motion.div 
        className="absolute top-48 left-20 opacity-10"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 3 }}
      >
        <Award className="w-12 h-12 text-accent" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="space-y-6">
              <motion.div 
                className="inline-flex items-center px-4 py-2 glassmorphism rounded-full text-sm font-medium text-primary"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 12, -12, 0] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <Shield className="w-4 h-4 mr-2 text-accent" />
                </motion.div>
                Trusted by 10,000+ customers
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-primary leading-tight"
                variants={itemVariants}
              >
                Find Your Best
                <motion.span 
                  className="text-accent block"
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.95 }}
                  transition={{ 
                    delay: 1,
                    duration: 0.9,
                    ease: [0.175, 0.885, 0.32, 1.275] // Elastic easing
                  }}
                >
                  Loan Partner
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-muted-foreground max-w-lg"
                variants={itemVariants}
              >
                Experience our transparent process with lightning-fast approvals. 
                Get the financing you need with competitive rates and personalized service.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="/apply"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 20px 40px rgba(47, 110, 243, 0.4)",
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                Apply Now
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
              
              <motion.a
                href="#services"
                className="inline-flex items-center px-8 py-4 glassmorphism text-primary font-semibold rounded-lg transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.03,
                  y: -2,
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="mr-2"
                  whileHover={{ 
                    scale: 1.3,
                    transition: { type: "spring", stiffness: 500, damping: 20 }
                  }}
                >
                  <Play className="w-5 h-5" />
                </motion.div>
                Explore Services
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center space-x-8 pt-8 border-t border-gray-200"
              variants={itemVariants}
            >
              {[
                { value: "₹500Cr+", label: "Loans Disbursed" },
                { value: "24hrs", label: "Quick Approval" },
                { value: "4.9/5", label: "Customer Rating" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ 
                    delay: 1.5 + index * 0.2, 
                    duration: 0.7,
                    ease: [0.175, 0.885, 0.32, 1.275]
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-primary"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(47, 110, 243, 0)", 
                        "0 0 15px rgba(47, 110, 243, 0.4)", 
                        "0 0 0px rgba(47, 110, 243, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: index * 0.7,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 60, scale: 0.95 }}
            transition={{ 
              delay: 0.5, 
              duration: 1,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <div className="relative z-10">
              {/* Main Card */}
              <motion.div 
                className="glassmorphism rounded-2xl p-8 card-shadow-lg"
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)",
                  transition: { type: "spring", stiffness: 300, damping: 25 }
                }}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-primary">Loan Application</h3>
                    <motion.div 
                      className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    >
                      <Shield className="w-6 h-6 text-accent" />
                    </motion.div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { label: "Application Status", value: "Approved ✓", color: "text-success" },
                      { label: "Processing Time", value: "2 minutes", color: "text-primary" },
                      { label: "Interest Rate", value: "From 8.5%", color: "text-accent" }
                    ].map((item, index) => (
                      <motion.div 
                        key={item.label}
                        className="flex justify-between items-center py-3 border-b border-gray-100 rounded-lg"
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ 
                          delay: 1.2 + index * 0.2, 
                          duration: 0.6,
                          ease: [0.23, 1, 0.32, 1]
                        }}
                        whileHover={{ 
                          x: 15, 
                          backgroundColor: "rgba(47, 110, 243, 0.05)",
                          transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                      >
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className={`font-medium ${item.color}`}>{item.value}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    className="pt-4"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 2.2, duration: 0.6 }}
                  >
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className="bg-accent h-2 rounded-full"
                        initial={{ width: "0%" }}
                        animate={inView ? { width: "80%" } : { width: "0%" }}
                        transition={{ 
                          delay: 2.5, 
                          duration: 2,
                          ease: [0.23, 1, 0.32, 1]
                        }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Processing... 80% complete</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 glassmorphism rounded-xl flex items-center justify-center"
              animate={{ 
                y: [-8, 8, -8],
                rotate: [0, 8, -8, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                scale: 1.15,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
            >
              <TrendingUp className="w-8 h-8 text-accent" />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 glassmorphism rounded-full flex items-center justify-center"
              animate={{ 
                y: [8, -8, 8],
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                scale: 1.2,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
            >
              <Award className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;