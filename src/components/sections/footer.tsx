"use client";

import React from "react";
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, CreditCard, Lock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const footerSections = [
    {
      title: "Loan Products",
      links: [
        { name: "Home Loans", href: "/home-loan" },
        { name: "Personal Loans", href: "/personal-loan" },
        { name: "Business Loans", href: "/business-loan" },
        { name: "Education Loans", href: "/education-loan" },
        { name: "Car Loans", href: "/car-loan" },
        { name: "Loan Against Property", href: "/lap" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "EMI Calculator", href: "/calculator" },
        { name: "Interest Rates", href: "/rates" },
        { name: "Documentation", href: "/documents" },
        { name: "FAQs", href: "/faq" },
        { name: "Blog", href: "/blog" },
        { name: "Download App", href: "/app" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Why Choose Us", href: "/why-us" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "Contact Us", href: "/contact" },
        { name: "Branch Locator", href: "/branches" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Customer Support", href: "/support" },
        { name: "Track Application", href: "/track" },
        { name: "Grievance", href: "/grievance" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "CIBIL Score", href: "/cibil" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" }
  ];

  const trustBadges = [
    { icon: Shield, text: "RBI Approved", color: "text-green-500" },
    { icon: Lock, text: "Secure & Safe", color: "text-blue-500" },
    { icon: Award, text: "ISO Certified", color: "text-yellow-500" },
    { icon: CreditCard, text: "PCI Compliant", color: "text-purple-500" }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] // Butter smooth easing
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1] // Butter smooth easing
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing
          }}
          className="absolute top-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1.4, 1.2],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        />

        {/* Floating icons */}
        <motion.div
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -35, 35, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute top-1/4 left-1/4"
        >
          <Shield className="w-6 h-6 text-white/10" />
        </motion.div>
        <motion.div
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute bottom-1/3 right-1/3"
        >
          <CreditCard className="w-8 h-8 text-white/10" />
        </motion.div>
      </div>

      <div className="relative z-10" ref={ref}>
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-6 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
              >
                <div className="relative">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.15, 1]
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Shield className="w-10 h-10 text-accent" />
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 bg-accent/20 rounded-full blur-sm"
                    animate={{ 
                      opacity: [0.3, 0.7, 0.3],
                      scale: [1, 1.4, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Abhishek Financial Solutions
                  </h3>
                  <p className="text-accent text-sm">Your Future, Financed</p>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-white/80 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.3, 
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                Making your financial dreams come true with personalized loan solutions, competitive rates, and exceptional customer service. Your trusted partner in achieving financial goals.
              </motion.p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center space-x-3 text-white/80 hover:text-accent transition-colors duration-300"
                  whileHover={{ 
                    x: 8,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 98765 43210</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 text-white/80 hover:text-accent transition-colors duration-300"
                  whileHover={{ 
                    x: 8,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                >
                  <Mail className="w-5 h-5" />
                  <span>support@abhishekfinance.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 text-white/80 hover:text-accent transition-colors duration-300"
                  whileHover={{ 
                    x: 8,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                >
                  <MapPin className="w-5 h-5" />
                  <span>Multiple locations across India</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div 
                key={section.title}
                variants={itemVariants}
                className="lg:col-span-1"
              >
                <motion.h4 
                  className="text-xl font-semibold text-white mb-6 relative"
                  initial={{ opacity: 0, y: -15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 0.4 + sectionIndex * 0.08, 
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  {section.title}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-accent"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "60%" } : {}}
                    transition={{ 
                      delay: 0.6 + sectionIndex * 0.08, 
                      duration: 1,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                  />
                </motion.h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={link.name}
                      variants={linkVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      transition={{ 
                        delay: 0.5 + sectionIndex * 0.08 + linkIndex * 0.03,
                        ease: [0.23, 1, 0.32, 1]
                      }}
                    >
                      <motion.a
                        href={link.href}
                        className="text-white/70 hover:text-accent transition-colors duration-300 flex items-center group"
                        whileHover={{ 
                          x: 8,
                          transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                      >
                        <span>{link.name}</span>
                        <motion.div
                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ x: -15 }}
                          whileHover={{ 
                            x: 0,
                            transition: { type: "spring", stiffness: 400, damping: 25 }
                          }}
                        >
                          <ArrowRight className="w-3 h-3" />
                        </motion.div>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            className="mt-16 pt-8 border-t border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              delay: 1.2, 
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <h4 className="text-xl font-semibold text-white mb-6 text-center">
              Trusted & Secure Platform
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  className="flex items-center justify-center space-x-3 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 1.4 + index * 0.08, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    y: -3,
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 12, -12, 0],
                      scale: [1, 1.15, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: index * 0.3
                    }}
                  >
                    <badge.icon className={`w-6 h-6 ${badge.color}`} />
                  </motion.div>
                  <span className="text-sm font-medium text-white">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-primary/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 1.6, 
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <div className="text-center md:text-left">
                <p className="text-white/80 text-sm">
                  © 2025 Abhishek Financial Solutions. All rights reserved.
                </p>
                <p className="text-white/60 text-xs mt-1">
                  Licensed by RBI | NBFC Registration No: XXXX-XXXX-XXXX
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-white/60 text-sm mr-2">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-white/20 transition-all duration-300 ${social.color}`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ 
                      delay: 1.8 + index * 0.06, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      y: -3,
                      backgroundColor: "rgba(255, 255, 255, 0.25)",
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.div 
              className="mt-6 pt-4 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 2, 
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <p className="text-white/50 text-xs text-center leading-relaxed">
                *Terms and conditions apply. All loan products are subject to credit approval. Interest rates and processing fees may vary based on individual credit profile. 
                Please read all terms and conditions carefully before applying. Abhishek Financial Solutions is committed to responsible lending practices.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;