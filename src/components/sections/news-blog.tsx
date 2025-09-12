"use client";

import React from "react";
import { Calendar, User, ArrowRight, BookOpen, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const NewsBlog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const newsData = [
    {
      id: 1,
      title: "Understanding Personal Loan Interest Rates: A Complete Guide",
      excerpt: "Learn how personal loan interest rates are calculated and discover tips to secure the best rates for your financial needs in 2025.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/professional-financial-blog-cover-image--6c08d34c-20250905164014.jpg?",
      date: "September 15, 2025",
      author: "Abhishek Sharma",
      category: "Personal Finance",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Home Loan Pre-Approval: Benefits and Process Explained",
      excerpt: "Discover the advantages of getting pre-approved for a home loan and how it can streamline your home buying journey.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/professional-financial-services-blog-cov-b4327e36-20250905164025.jpg?",
      date: "August 28, 2025",
      author: "Priya Patel",
      category: "Home Loans",
      readTime: "7 min read"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1], // Butter smooth easing
        staggerChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9,
      rotateY: -20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1] // Butter smooth easing
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.3, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] // Butter smooth easing
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 via-white to-accent/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing
          }}
          className="absolute top-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1.4, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />

        {/* Floating content elements */}
        <motion.div
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -35, 35, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute top-1/3 right-1/4"
        >
          <BookOpen className="w-8 h-8 text-accent/20" />
        </motion.div>
        <motion.div
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute bottom-1/3 left-1/4"
        >
          <TrendingUp className="w-6 h-6 text-primary/20" />
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
            <BookOpen className="w-10 h-10 text-accent" />
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{
                rotate: [0, -360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 7,
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
            Latest Financial Insights & News
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
            Stay updated with the latest trends, tips, and insights from the world of finance to make informed decisions about your loans and investments.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {newsData.map((article, index) => (
            <motion.article
              key={article.id}
              variants={cardVariants}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              whileHover={{ 
                y: -20,
                scale: 1.03,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25 
                }
              }}
            >
              {/* Glowing background effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: index * 0.3
                }}
              />

              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                  variants={imageVariants}
                />
                
                {/* Category badge */}
                <motion.div 
                  className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8, x: -25 }}
                  animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
                  transition={{ 
                    delay: 0.8 + index * 0.15, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    transition: { type: "spring", stiffness: 500, damping: 20 }
                  }}
                >
                  {article.category}
                </motion.div>

                {/* Read time */}
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8, x: 25 }}
                  animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
                  transition={{ 
                    delay: 0.9 + index * 0.15, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                >
                  {article.readTime}
                </motion.div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-8 relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300 line-clamp-2"
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 1 + index * 0.15, 
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  {article.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground mb-6 leading-relaxed line-clamp-3"
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 1.1 + index * 0.15, 
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  {article.excerpt}
                </motion.p>

                {/* Meta information */}
                <motion.div 
                  className="flex items-center justify-between text-sm text-muted-foreground mb-6"
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 1.2 + index * 0.15, 
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="flex items-center space-x-1"
                      whileHover={{ 
                        scale: 1.08, 
                        color: "var(--color-accent)",
                        transition: { type: "spring", stiffness: 400, damping: 25 }
                      }}
                    >
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-1"
                      whileHover={{ 
                        scale: 1.08, 
                        color: "var(--color-accent)",
                        transition: { type: "spring", stiffness: 400, damping: 25 }
                      }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Read more button */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 1.3 + index * 0.15, 
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  <motion.button
                    className="group/btn flex items-center space-x-2 text-accent font-semibold hover:text-primary transition-colors duration-300"
                    whileHover={{ 
                      x: 8,
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Read More</span>
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </div>

              {/* Floating decorative elements */}
              <motion.div 
                className="absolute top-8 right-8 w-3 h-3 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, -25, 0],
                  opacity: inView ? [0.3, 0.7, 0.3] : 0,
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: index * 0.3
                }}
              />
              <motion.div 
                className="absolute bottom-8 left-8 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, 20, 0],
                  opacity: inView ? [0.3, 0.6, 0.3] : 0,
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: (index * 0.3) + 1.2
                }}
              />
            </motion.article>
          ))}
        </motion.div>

        {/* Call to action */}
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
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-accent to-primary text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.08,
              y: -3,
              boxShadow: "0 25px 50px rgba(47, 110, 243, 0.4)",
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsBlog;