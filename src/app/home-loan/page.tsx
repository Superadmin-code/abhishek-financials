"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Home,
  TrendingUp,
  Clock,
  Shield,
  FileText,
  CheckCircle,
  Calculator,
  Phone,
  MessageCircle,
  Star,
  Hammer,
  Building,
  MapPin,
  RefreshCw,
  Percent,
  CreditCard,
  Award,
  Users,
  HeadphonesIcon,
  MapPinIcon
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function HomeLoanPage() {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [tenure, setTenure] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [emi, setEmi] = useState(0);

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [typesRef, typesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [eligibilityRef, eligibilityInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [documentsRef, documentsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ratesRef, ratesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [calculatorRef, calculatorInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const calculateEMI = () => {
      const principal = loanAmount;
      const monthlyRate = interestRate / (12 * 100);
      const months = tenure * 12;
      
      const emiAmount = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                       (Math.pow(1 + monthlyRate, months) - 1);
      
      setEmi(Math.round(emiAmount));
    };

    calculateEMI();
  }, [loanAmount, tenure, interestRate]);

  const features = [
    {
      icon: Percent,
      title: "Low Interest Rates",
      description: "Starting from 8.50% p.a. with competitive rates for all profiles"
    },
    {
      icon: TrendingUp,
      title: "High Loan Amount",
      description: "Get loan up to ₹5 Crores based on your eligibility"
    },
    {
      icon: Clock,
      title: "Quick Approval",
      description: "Fast processing with approval in 7-10 working days"
    },
    {
      icon: Shield,
      title: "Flexible Tenure",
      description: "Repayment tenure up to 30 years for comfortable EMIs"
    },
    {
      icon: FileText,
      title: "Minimal Documentation",
      description: "Simple paperwork with digital document verification"
    },
    {
      icon: CheckCircle,
      title: "No Hidden Charges",
      description: "Transparent pricing with no surprise charges"
    }
  ];

  const loanTypes = [
    {
      icon: Home,
      title: "Purchase Loan",
      description: "For buying ready-to-move-in residential properties",
      benefits: ["Up to 90% funding", "Competitive rates", "Quick disbursement"]
    },
    {
      icon: Hammer,
      title: "Construction Loan",
      description: "For constructing your dream home on owned land",
      benefits: ["Stage-wise disbursement", "Flexible repayment", "Construction monitoring"]
    },
    {
      icon: Building,
      title: "Home Extension Loan",
      description: "For renovation, repair, or extension of existing property",
      benefits: ["Quick approval", "Minimal documentation", "Competitive rates"]
    },
    {
      icon: MapPin,
      title: "Plot Purchase Loan",
      description: "For purchasing residential plots in approved layouts",
      benefits: ["Up to 80% funding", "Flexible tenure", "Easy processing"]
    },
    {
      icon: RefreshCw,
      title: "Balance Transfer",
      description: "Transfer your existing home loan for better rates",
      benefits: ["Lower interest rates", "Top-up facility", "Reduced EMI"]
    }
  ];

  const eligibilityCriteria = [
    "Age: 21 to 65 years at loan maturity",
    "Minimum Income: ₹25,000/month (Salaried), ₹2 Lakh/year (Self-employed)",
    "Employment: Minimum 2 years experience",
    "Credit Score: 750 and above preferred",
    "Property: Clear title in approved projects"
  ];

  const salariedDocuments = [
    "Salary slips (last 3 months)",
    "Bank statements (last 6 months)",
    "Form 16 or IT Returns (last 2 years)",
    "Employment certificate",
    "Property documents",
    "Identity & address proof"
  ];

  const selfEmployedDocuments = [
    "IT Returns (last 3 years)",
    "Profit & Loss statement",
    "Balance sheet (last 2 years)",
    "Bank statements (last 12 months)",
    "Business license/registration",
    "Property documents",
    "Identity & address proof"
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Apply Online",
      description: "Fill the application form with basic details"
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Upload required documents through our portal"
    },
    {
      step: 3,
      title: "Verification",
      description: "Our team verifies your profile and documents"
    },
    {
      step: 4,
      title: "Property Valuation",
      description: "Technical and legal verification of property"
    },
    {
      step: 5,
      title: "Approval & Disbursement",
      description: "Loan approval and amount disbursement"
    }
  ];

  const benefits = [
    {
      icon: CreditCard,
      title: "Tax Benefits",
      description: "Save up to ₹3.5 Lakhs annually under Section 80C & 24(b)"
    },
    {
      icon: Shield,
      title: "Repayment Flexibility",
      description: "Choose from various repayment options that suit your cash flow"
    },
    {
      icon: RefreshCw,
      title: "Part-Prepayment",
      description: "Make partial prepayments without any charges after 1 year"
    },
    {
      icon: Award,
      title: "Insurance Benefits",
      description: "Comprehensive insurance coverage for borrower and property"
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Approval in 7-10 days with minimal documentation"
    },
    {
      icon: Percent,
      title: "Competitive Rates",
      description: "Best-in-class interest rates starting from 8.50% p.a."
    },
    {
      icon: Users,
      title: "Dedicated Manager",
      description: "Personal relationship manager for end-to-end support"
    },
    {
      icon: Home,
      title: "Door-step Service",
      description: "Document collection and verification at your convenience"
    },
    {
      icon: MapPinIcon,
      title: "Wide Network",
      description: "Partnerships with leading builders and developers"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your queries"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      comment: "Abhishek Financial made my home buying journey incredibly smooth. The interest rates were competitive and the processing was very fast.",
      image: "/testimonials/rajesh.jpg"
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      comment: "Excellent service! They helped me get the best home loan deal with minimal documentation. Highly recommended for first-time home buyers.",
      image: "/testimonials/priya.jpg"
    },
    {
      name: "Amit Patel",
      location: "Pune",
      rating: 5,
      comment: "Professional team with great expertise. They guided me through the entire process and ensured quick loan disbursement.",
      image: "/testimonials/amit.jpg"
    }
  ];

  const faqData = [
    {
      question: "What is the minimum and maximum loan amount available?",
      answer: "We offer home loans starting from ₹5 Lakhs up to ₹5 Crores, subject to eligibility and property value."
    },
    {
      question: "What are the current interest rates?",
      answer: "Our home loan interest rates start from 8.50% p.a. The actual rate depends on your credit profile, loan amount, and tenure."
    },
    {
      question: "How long does the approval process take?",
      answer: "Typically, we process and approve home loans within 7-10 working days from the submission of complete documentation."
    },
    {
      question: "What is the maximum loan tenure available?",
      answer: "We offer flexible repayment tenure up to 30 years, allowing you to choose EMIs that fit your budget."
    },
    {
      question: "Are there any prepayment charges?",
      answer: "There are no charges for part-prepayment after completing 1 year of regular EMI payments. Full prepayment charges may apply as per terms."
    },
    {
      question: "What percentage of property value can be financed?",
      answer: "We finance up to 90% of the property value for purchase loans and up to 80% for plot purchase loans."
    },
    {
      question: "Can I get a loan for under-construction property?",
      answer: "Yes, we provide construction loans for under-construction properties with stage-wise disbursement linked to construction progress."
    },
    {
      question: "What is the minimum credit score required?",
      answer: "While we consider applications with credit scores from 650, a score of 750 and above significantly improves your chances of approval at better rates."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      >
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold text-primary mb-6"
              >
                Home Loan
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground mb-8"
              >
                Turn your homeownership dreams into reality with our competitive rates and hassle-free processing
              </motion.p>
              
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="glassmorphism p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-accent">8.50%</div>
                  <div className="text-sm text-muted-foreground">Starting Rate p.a.</div>
                </div>
                <div className="glassmorphism p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-accent">₹5 Cr</div>
                  <div className="text-sm text-muted-foreground">Max Loan Amount</div>
                </div>
                <div className="glassmorphism p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-accent">7-10 Days</div>
                  <div className="text-sm text-muted-foreground">Quick Processing</div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="gradient-primary hover:opacity-90 transition-opacity">
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Call Now
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="glassmorphism p-8 rounded-2xl">
                <Home className="w-24 h-24 text-accent mx-auto mb-4" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">Your Dream Home Awaits</h3>
                  <p className="text-muted-foreground">Get started with your home loan application today</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-16 md:py-24"
      >
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Our Home Loans?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the best-in-class features designed to make your home buying journey smooth and affordable
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover-lift border-0 card-shadow">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <feature.icon className="w-8 h-8 text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Loan Types Section */}
      <motion.section
        ref={typesRef}
        initial="hidden"
        animate={typesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-16 md:py-24 bg-secondary/50"
      >
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Types of Home Loans</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our diverse range of home loan products tailored to meet your specific needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover-lift border-0 card-shadow">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4"
                    >
                      <type.icon className="w-8 h-8 text-accent" />
                    </motion.div>
                    <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Eligibility Criteria */}
      <motion.section
        ref={eligibilityRef}
        initial="hidden"
        animate={eligibilityInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-16 md:py-24"
      >
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Eligibility Criteria</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Check if you meet our eligibility requirements for a home loan
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <Card className="border-0 card-shadow">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                      <CheckCircle className="w-6 h-6 text-success mr-3" />
                      Basic Requirements
                    </h3>
                    <ul className="space-y-4">
                      {eligibilityCriteria.map((criteria, index) => (
                        <motion.li
                          key={index}
                          whileHover={{ x: 5 }}
                          className="flex items-start"
                        >
                          <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{criteria}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="glassmorphism p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-4">Quick Eligibility Check</h4>
                    <p className="text-muted-foreground mb-4">
                      Want to know your loan eligibility instantly? Use our online calculator.
                    </p>
                    <Button className="w-full gradient-primary">
                      <Calculator className="w-4 h-4 mr-2" />
                      Check Eligibility
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Documents Required */}
      <motion.section
        ref={documentsRef}
        initial="hidden"
        animate={documentsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-16 md:py-24 bg-secondary/50"
      >
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Documents Required</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple documentation process with minimal paperwork required
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="h-full border-0 card-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-accent" />
                    Salaried Individuals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {salariedDocuments.map((doc, index) => (
                      <motion.li
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center"
                      >
                        <FileText className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{doc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="h-full border-0 card-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-accent" />
                    Self-Employed Individuals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {selfEmployedDocuments.map((doc, index) => (
                      <motion.li
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center"
                      >
                        <FileText className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{doc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Interest Rates & Charges */}
      <motion.section
        ref={ratesRef}
        initial="hidden"
        animate={ratesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-16 md:py-24"
      >
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Interest Rates & Charges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing with competitive rates and minimal charges
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
            <Card className="border-0 card-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Loan Amount</th>
                        <th className="px-6 py-4 text-left font-semibold">Interest Rate (p.a.)</th>
                        <th className="px-6 py-4 text-left font-semibold">Processing Fee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-secondary/50 transition-colors">
                        <td className="px-6 py-4">Up to ₹30 Lakhs</td>
                        <td className="px-6 py-4 text-accent font-semibold">8.50% - 9.00%</td>
                        <td className="px-6 py-4">0.50% of loan amount</td>
                      </tr>
                      <tr className="hover:bg-secondary/50 transition-colors">
                        <td className="px-6 py-4">₹30 Lakhs - ₹75 Lakhs</td>
                        <td className="px-6 py-4 text-accent font-semibold">8.75% - 9.25%</td>
                        <td className="px-6 py-4">0.50% of loan amount</td>
                      </tr>
                      <tr className="hover:bg-secondary/50 transition-colors">
                        <td className="px-6 py-4">Above ₹75 Lakhs</td>
                        <td className="px-6 py-4 text-accent font-semibold">9.00% - 9.50%</td>
                        <td className="px-6 py-4">0.50% of loan amount</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="p-6 bg-secondary/30">
                  <h4 className="text-lg font-semibold text-primary mb-3">Additional Charges</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Valuation Charges:</span>
                      <span className="text-muted-foreground ml-2">₹2,500 - ₹5,000</span>
                    </div>
                    <div>
                      <span className="font-medium">Legal Charges:</span>
                      <span className="text-muted-foreground ml-2">₹3,000 - ₹10,000</span>
                    </div>
                    <div>
                      <span className="font-medium">Stamp Duty:</span>
                      <span className="text-muted-foreground ml-2">As per state govt.</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    *Interest rates are subject to change based on RBI guidelines and borrower profile
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* EMI Calculator */}
      <motion.section
        ref={calculatorRef}
        initial="hidden"
        animate={calculatorInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-16 md:py-24 bg-secondary/50"
      >
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">EMI Calculator</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Calculate your monthly EMI and plan your home loan better
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <Card className="border-0 card-shadow">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="loanAmount" className="text-base font-medium">Loan Amount</Label>
                      <div className="mt-2">
                        <Input
                          id="loanAmount"
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="text-lg"
                        />
                        <input
                          type="range"
                          min="500000"
                          max="10000000"
                          step="100000"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="w-full mt-2"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>₹5L</span>
                          <span>₹1Cr</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="tenure" className="text-base font-medium">Tenure (Years)</Label>
                      <div className="mt-2">
                        <Input
                          id="tenure"
                          type="number"
                          value={tenure}
                          onChange={(e) => setTenure(Number(e.target.value))}
                          className="text-lg"
                        />
                        <input
                          type="range"
                          min="5"
                          max="30"
                          step="1"
                          value={tenure}
                          onChange={(e) => setTenure(Number(e.target.value))}
                          className="w-full mt-2"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>5 Years</span>
                          <span>30 Years</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="interestRate" className="text-base font-medium">Interest Rate (%)</Label>
                      <div className="mt-2">
                        <Input
                          id="interestRate"
                          type="number"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="text-lg"
                        />
                        <input
                          type="range"
                          min="6"
                          max="15"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-full mt-2"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>6%</span>
                          <span>15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="text-center glassmorphism p-8 rounded-2xl">
                      <Calculator className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-primary mb-2">Monthly EMI</h3>
                      <motion.div
                        key={emi}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-4xl font-bold text-accent mb-4"
                      >
                        ₹{emi.toLocaleString()}
                      </motion.div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div>Principal: ₹{loanAmount.toLocaleString()}</div>
                        <div>Interest: ₹{((emi * tenure * 12) - loanAmount).toLocaleString()}</div>
                        <div>Total: ₹{(emi * tenure * 12).toLocaleString()}</div>
                      </div>
                      <Button asChild className="w-full mt-6 gradient-primary">
                        <Link href="/apply">Apply for this Loan</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Application Process */}
      <motion.section
        ref={processRef}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-16 md:py-24"
      >
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Simple Application Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get your home loan approved in just 5 easy steps
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-accent/20 hidden md:block"></div>
              
              <div className="space-y-8">
                {applicationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="relative"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 relative z-10">
                        {step.step}
                      </div>
                      <div className="flex-grow glassmorphism p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-16 md:py-24 bg-secondary/50"
      >
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Additional Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enjoy exclusive benefits that make your home loan even more valuable
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover-lift border-0 card-shadow text-center">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <benefit.icon className="w-8 h-8 text-accent" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-primary mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        ref={whyChooseRef}
        initial="hidden"
        animate={whyChooseInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-16 md:py-24"
      >
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Abhishek Financial?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with our customer-centric approach and industry expertise
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover-lift border-0 card-shadow">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <reason.icon className="w-8 h-8 text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-16 md:py-24 bg-secondary/50"
      >
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Read success stories from homeowners who trusted us with their home loan journey
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover-lift border-0 card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.comment}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-accent font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-16 md:py-24"
      >
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our home loan products and processes
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <Card className="border-0 card-shadow">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-primary hover:text-accent">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-16 md:py-24 gradient-primary"
      >
        <div className="container text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Your Home Loan?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of happy homeowners who chose Abhishek Financial for their home loan needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="secondary" className="min-w-[200px]">
                <Link href="/apply">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary">
                <Phone className="w-4 h-4 mr-2" />
                Call +91 98765 43210
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}