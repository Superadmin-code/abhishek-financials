"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HelpContact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us", 
      description: "Speak with our loan experts",
      info: "+91 98765 43210",
      action: "Call Now",
      color: "accent",
      gradient: "from-accent/20 to-accent/30"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant assistance",
      info: "Available 24/7",
      action: "Start Chat",
      color: "primary",
      gradient: "from-primary/20 to-primary/30"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your queries",
      info: "support@abhishekfinance.com",
      action: "Send Email",
      color: "green-500",
      gradient: "from-green-500/20 to-green-500/30"
    },
    {
      icon: MapPin,
      title: "Visit Office",
      description: "Meet us in person",
      info: "Multiple locations across India",
      action: "Find Location",
      color: "purple-500",
      gradient: "from-purple-500/20 to-purple-500/30"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers", icon: Users },
    { number: "24/7", label: "Customer Support", icon: Clock },
    { number: "15+", label: "Years Experience", icon: MessageCircle },
    { number: "99%", label: "Satisfaction Rate", icon: Phone }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1], // Butter smooth easing
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: -20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.9,
        ease: [0.23, 1, 0.32, 1] // Butter smooth easing
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: { 
      scale: 1, 
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-accent/5 to-primary/5 relative overflow-hidden">
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
          className="absolute top-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
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
          className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />

        {/* Floating communication icons */}
        <motion.div
          animate={{
            x: [0, 35, -35, 0],
            y: [0, -25, 25, 0],
            rotate: [0, 45, -45, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute top-1/4 left-1/4"
        >
          <MessageCircle className="w-8 h-8 text-accent/20" />
        </motion.div>
        <motion.div
          animate={{
            x: [0, -45, 45, 0],
            y: [0, 35, -35, 0],
            rotate: [0, -90, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute bottom-1/3 right-1/3"
        >
          <Phone className="w-6 h-6 text-primary/20" />
        </motion.div>
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
            <MessageCircle className="w-10 h-10 text-accent" />
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-accent/30"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.25, 1]
              }}
              transition={{
                duration: 6,
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
            Need Help? We're Here for You
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.7, 
              delay: 0.4,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            Our dedicated support team is ready to assist you with all your loan queries and financial needs. Reach out to us through any of these convenient channels.
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              variants={cardVariants}
              className="group relative"
              whileHover={{ 
                y: -15,
                scale: 1.03,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25 
                }
              }}
            >
              {/* Glowing background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${method.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: index * 0.3
                }}
              />

              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-accent/20 text-center">
                {/* Icon */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl mb-6 relative`}
                  variants={iconVariants}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 360,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25 
                    }
                  }}
                >
                  <method.icon className={`w-8 h-8 text-${method.color}`} />
                  <motion.div 
                    className={`absolute inset-0 rounded-2xl border-2 border-${method.color}/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
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

                {/* Content */}
                <motion.h3 
                  className="text-xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 0.8 + index * 0.08, 
                    duration: 0.5,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  {method.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground mb-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 0.9 + index * 0.08, 
                    duration: 0.5,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  {method.description}
                </motion.p>
                
                <motion.p 
                  className={`text-sm font-semibold text-${method.color} mb-4`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 1 + index * 0.08, 
                    duration: 0.5,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  {method.info}
                </motion.p>

                {/* Action button */}
                <motion.button
                  className={`px-6 py-2 bg-${method.color} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    delay: 1.1 + index * 0.08, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    y: -2,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {method.action}
                </motion.button>

                {/* Floating particles */}
                <motion.div 
                  className={`absolute top-4 right-4 w-2 h-2 bg-${method.color}/40 rounded-full opacity-0 group-hover:opacity-100`}
                  animate={{
                    y: [0, -18, 0],
                    opacity: inView ? [0.4, 0.8, 0.4] : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: index * 0.2
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            delay: 1.5, 
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  delay: 1.7 + index * 0.08, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
                whileHover={{ 
                  scale: 1.08,
                  y: -3,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3"
                  whileHover={{ 
                    rotate: 360,
                    backgroundColor: "rgba(47, 110, 243, 0.2)",
                    scale: 1.1,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25 
                    }
                  }}
                >
                  <stat.icon className="w-6 h-6 text-accent" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-primary mb-1"
                  animate={inView ? {
                    scale: [1, 1.15, 1],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: index * 0.4
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            delay: 2, 
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <motion.div 
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl shadow-lg"
            whileHover={{ 
              scale: 1.08,
              y: -5,
              boxShadow: "0 25px 50px rgba(239, 68, 68, 0.4)",
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            animate={{
              boxShadow: [
                "0 4px 20px rgba(239, 68, 68, 0.2)",
                "0 12px 40px rgba(239, 68, 68, 0.35)",
                "0 4px 20px rgba(239, 68, 68, 0.2)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.div
              animate={{ rotate: [0, 12, -12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Phone className="w-6 h-6" />
            </motion.div>
            <div>
              <div className="font-semibold">Emergency Loan Support</div>
              <div className="text-sm opacity-90">Call: 1800-123-4567 (Toll Free)</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HelpContact;