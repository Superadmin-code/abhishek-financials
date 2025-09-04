"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown, Shield } from "lucide-react";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Shield className="w-8 h-8 text-accent" />
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-sm"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary tracking-tight">
                AGFineserve
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Your Future, Financed
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.subItems ? (
                  <div>
                    <button
                      className="flex items-center space-x-1 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 glassmorphism rounded-lg shadow-lg py-2 z-50">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-primary hover:text-accent hover:bg-white/20 transition-colors duration-200"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="/apply"
              className="px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 hover-lift"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glassmorphism border-t border-white/20">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.subItems ? (
                    <div>
                      <button
                        className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-primary"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 space-y-1">
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm font-medium text-primary hover:text-accent"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <a
                  href="/apply"
                  className="block w-full text-center px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-200"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;