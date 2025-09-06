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
        duration: 1,
        ease: [0.23, 1, 0.32, 1], // Butter smooth easing
        staggerChildren: 0.08,
      }
    }
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 40,
      rotateY: -45
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.9,
        ease: [0.23, 1, 0.32, 1] // Butter smooth easing
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -18, 0],
      rotate: [0, 6, -6, 0],
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
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing
          }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
        />
        
        {/* Floating decorative elements */}
        <motion.div
          animate={{
            x: [0, 35, -35, 0],
            y: [0, -25, 25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-accent/20 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -45, 45, 0],
            y: [0, 35, -35, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 1,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={inView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20,
              delay: 0.2 
            }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mb-6 relative"
          >
            <Shield className="w-10 h-10 text-accent" />
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-accent/30"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8, y: 25 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.175, 0.885, 0.32, 1.275] // Elastic easing
            }}
          >
            Our Trusted Partners
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.7, 
              delay: 0.4,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            We collaborate with leading financial institutions and investment firms to provide you with the best loan products and competitive rates in the market.
          </motion.p>

          <motion.div 
            className="flex items-center justify-center space-x-8 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.6, 
              delay: 0.5,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ 
                scale: 1.08, 
                color: "var(--color-accent)",
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
            >
              <TrendingUp className="w-4 h-4" />
              <span>15+ Banking Partners</span>
            </motion.div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <motion.span
              whileHover={{ 
                scale: 1.08, 
                color: "var(--color-accent)",
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
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
                scale: 1.12,
                y: -8,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25 
                }
              }}
            >
              {/* Glowing background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-4"
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: index * 0.3
                }}
              />

              {/* Logo container */}
              <motion.div 
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-accent/30 w-full aspect-square flex items-center justify-center"
                variants={floatingVariants}
                animate="animate"
                transition={{
                  duration: 4 + index * 0.3,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: index * 0.2
                }}
              >
                <motion.img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ 
                    delay: 0.7 + index * 0.08,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, 6, -6, 0],
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25 
                    }
                  }}
                />

                {/* Rotating border */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>

              {/* Partner info */}
              <motion.div 
                className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={inView ? { opacity: 0, y: 0, scale: 1 } : {}}
                whileHover={{ 
                  opacity: 1, 
                  y: -5,
                  transition: { 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 25 
                  }
                }}
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
                  y: [0, -18, 0],
                  opacity: inView ? [0.4, 0.8, 0.4] : 0,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: index * 0.15
                }}
              />
              <motion.div 
                className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, 15, 0],
                  opacity: inView ? [0.4, 0.6, 0.4] : 0,
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: (index * 0.15) + 0.8
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badge */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            delay: 1.8, 
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <motion.div 
            className="inline-flex items-center space-x-3 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100"
            whileHover={{ 
              scale: 1.08,
              y: -3,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 12,
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