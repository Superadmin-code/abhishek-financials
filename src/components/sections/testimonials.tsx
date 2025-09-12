"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/professional-headshot-of-a-confident-ind-44dd8b1a-20250905160208.jpg?",
      content: "Abhishek Financial Solutions made my home loan process incredibly smooth. Their team was supportive throughout, and I got the best interest rates in the market.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer", 
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/professional-headshot-of-a-confident-ind-e9f0b5c4-20250905160221.jpg?",
      content: "I needed urgent funds for my business expansion. Their quick approval process and flexible terms helped me achieve my goals without any hassle.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Entrepreneur",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/professional-headshot-of-a-confident-ind-9c8e7f2d-20250905160232.jpg?",
      content: "The personal loan helped me consolidate my debts and get back on track financially. Professional service with transparent terms and competitive rates.",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1], // Butter smooth easing
        staggerChildren: 0.12,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: -15
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

  const quoteVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: { 
      scale: 1, 
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.4
      }
    }
  };

  const starVariants = {
    hidden: { scale: 0, opacity: 0, y: -10 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + i * 0.08,
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    })
  };

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-accent/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.3, 1, 1.3],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 1,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -45, opacity: 0 }}
            animate={inView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20,
              delay: 0.2 
            }}
            className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6"
          >
            <Quote className="w-8 h-8 text-accent" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.175, 0.885, 0.32, 1.275] // Elastic easing
            }}
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.7, 
              delay: 0.4,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            Real stories from satisfied customers who achieved their financial goals with us
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="group relative"
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25 
                }
              }}
            >
              {/* Glowing background effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />

              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-accent/20">
                {/* Quote icon */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center"
                  variants={quoteVariants}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.3,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 20 
                    }
                  }}
                >
                  <Quote className="w-4 h-4 text-white" />
                </motion.div>

                {/* Stars rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      variants={starVariants}
                      custom={i}
                      whileHover={{ 
                        scale: 1.4, 
                        rotate: 180,
                        transition: { 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 20 
                        }
                      }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial content */}
                <motion.p 
                  className="text-gray-600 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 0.8 + index * 0.1, 
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  "{testimonial.content}"
                </motion.p>

                {/* Profile */}
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="relative"
                    whileHover={{ 
                      scale: 1.15,
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                  >
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                      initial={{ scale: 0, rotate: -180, opacity: 0 }}
                      animate={inView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
                      transition={{ 
                        delay: 1 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                  
                  <div>
                    <motion.h4 
                      className="font-semibold text-primary"
                      initial={{ opacity: 0, x: -25 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        delay: 1.1 + index * 0.08, 
                        duration: 0.5,
                        ease: [0.23, 1, 0.32, 1]
                      }}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <motion.p 
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -25 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        delay: 1.2 + index * 0.08, 
                        duration: 0.5,
                        ease: [0.23, 1, 0.32, 1]
                      }}
                    >
                      {testimonial.role}
                    </motion.p>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-2 h-2 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -12, 0],
                    opacity: inView ? [0.3, 0.8, 0.3] : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, 10, 0],
                    opacity: inView ? [0.3, 0.6, 0.3] : 0,
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.7
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            delay: 1.5, 
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ 
                scale: 1.08, 
                color: "var(--color-accent)",
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
            >
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>4.9/5 Average Rating</span>
            </motion.div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <motion.span
              whileHover={{ 
                scale: 1.08, 
                color: "var(--color-accent)",
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
            >
              500+ Happy Customers
            </motion.span>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <motion.span
              whileHover={{ 
                scale: 1.08, 
                color: "var(--color-accent)",
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
            >
              99% Approval Rate
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;