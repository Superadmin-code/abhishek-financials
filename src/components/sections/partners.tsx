"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, TrendingUp } from "lucide-react";

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    {
      name: "Global Community Investor Group",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/modern-professional-financial-company-lo-78a84e62-20250905163727.jpg?",
      category: "Investment Banking"
    },
    {
      name: "OSM Worldwide",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/professional-financial-services-logo-for-6a27c0a2-20250905163736.jpg?",
      category: "Financial Services"
    },
    {
      name: "FOAL Investor",
      logo: "https://v3.fal.media/files/penguin/x7iQjKKig7NlcwyY7u_yk_output.png",
      category: "Investment Management"
    },
    {
      name: "Bullsize Investment",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/professional-investment-company-logo-for-76fce098-20250905163756.jpg?",
      category: "Investment Solutions"
    },
    {
      name: "Platinum Finance Sector",
      logo: "https://v3.fal.media/files/kangaroo/XBMt1ZPHe_CpZoH1dAn1y_output.png",
      category: "Corporate Finance"
    },
    {
      name: "Premium Capital Partners",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/professional-financial-services-logo-for-360a7bd6-20250905163823.jpg?",
      category: "Capital Management"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      }
    }
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30,
      rotateY: -90
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-secondary/20 to-accent/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
        />
        
        {/* Floating decorative elements */}
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-accent/20 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 30, -30, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.2 
            }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mb-6 relative"
          >
            <Shield className="w-10 h-10 text-accent" />
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-accent/30"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Trusted Partners
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We collaborate with leading financial institutions and investment firms to provide you with the best loan products and competitive rates in the market.
          </motion.p>

          <motion.div 
            className="flex items-center justify-center space-x-8 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05, color: "var(--color-accent)" }}
            >
              <TrendingUp className="w-4 h-4" />
              <span>15+ Banking Partners</span>
            </motion.div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <motion.span
              whileHover={{ scale: 1.05, color: "var(--color-accent)" }}
            >
              ₹500+ Crores Disbursed
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={logoVariants}
              className="group relative flex flex-col items-center"
              whileHover={{ 
                scale: 1.08,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Glowing background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-4"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              />

              {/* Logo container */}
              <motion.div 
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-accent/30 w-full aspect-square flex items-center justify-center"
                variants={floatingVariants}
                animate="animate"
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              >
                <motion.img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ 
                    delay: 0.6 + index * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                />

                {/* Rotating border */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>

              {/* Partner info */}
              <motion.div 
                className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 0, y: 0 } : {}}
                whileHover={{ opacity: 1 }}
              >
                <h4 className="text-sm font-semibold text-primary mb-1">
                  {partner.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {partner.category}
                </p>
              </motion.div>

              {/* Floating particles */}
              <motion.div 
                className="absolute -top-2 -right-2 w-2 h-2 bg-accent/40 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, -15, 0],
                  opacity: inView ? [0.4, 0.8, 0.4] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              />
              <motion.div 
                className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, 12, 0],
                  opacity: inView ? [0.4, 0.6, 0.4] : 0,
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (index * 0.2) + 0.5
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badge */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-3 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Shield className="w-6 h-6 text-accent" />
            </motion.div>
            <div className="text-sm">
              <span className="font-semibold text-primary">RBI Approved</span>
              <span className="text-muted-foreground ml-2">• Secure & Trusted Platform</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;