"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { label: "HOME", href: "/" },
    {
      label: "SERVICES",
      href: "#",
      subItems: [
        { label: "Home Loan", href: "/home-loan" },
        { label: "Business Loan", href: "/business-loan" },
        { label: "Education Loan", href: "/education-loan" },
        { label: "Personal Loan", href: "/personal-loan" }
      ]
    },
    { label: "WHY US", href: "#why-us" },
    { label: "DOCUMENTS", href: "#documents" },
    { label: "CALCULATOR", href: "/calculator" },
    { label: "CONTACT", href: "/contact" }
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -10,
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-white/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Shield className="w-8 h-8 text-accent" />
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-accent/20 rounded-full blur-sm"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <div className="flex flex-col">
              <motion.span 
                className="text-xl font-bold text-primary tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Abhishek Financial Solutions
              </motion.span>
              <motion.span 
                className="text-xs text-muted-foreground -mt-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Your Future, Financed
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.label} 
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {item.subItems ? (
                  <div>
                    <motion.button
                      className="flex items-center space-x-1 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
                      onClick={() => toggleDropdown(item.label)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{item.label}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div 
                          className="absolute top-full left-0 mt-2 w-48 glassmorphism rounded-lg shadow-lg py-2 z-50"
                          variants={dropdownVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <motion.a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-primary hover:text-accent hover:bg-white/20 transition-colors duration-200"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                              whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                            >
                              {subItem.label}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.a
                    href={item.href}
                    className="text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a
              href="/apply"
              className="px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg transition-all duration-200"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(47, 110, 243, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0 glassmorphism border-t border-white/20"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div key={item.label} variants={itemVariants}>
                    {item.subItems ? (
                      <div>
                        <motion.button
                          className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-primary"
                          onClick={() => toggleDropdown(item.label)}
                          whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        >
                          <span>{item.label}</span>
                          <motion.div
                            animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </motion.button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div 
                              className="ml-4 space-y-1"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.subItems.map((subItem, subIndex) => (
                                <motion.a
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subIndex * 0.05 }}
                                  whileHover={{ x: 5 }}
                                >
                                  {subItem.label}
                                </motion.a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.a
                        href={item.href}
                        className="block px-4 py-2 text-sm font-medium text-primary hover:text-accent"
                        whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      >
                        {item.label}
                      </motion.a>
                    )}
                  </motion.div>
                ))}
                <motion.div className="px-4 pt-4" variants={itemVariants}>
                  <motion.a
                    href="/apply"
                    className="block w-full text-center px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Now
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;