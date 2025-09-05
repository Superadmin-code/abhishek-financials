"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import {
  ArrowRight,
  CheckCircle,
  Calculator,
  Clock,
  Shield,
  Award,
  Users,
  TrendingUp,
  Building2,
  Factory,
  Briefcase,
  FileText,
  CreditCard,
  Banknote,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  Percent,
  IndianRupee,
  Calendar,
  Download,
  BadgeCheck,
  Zap,
  Target,
  DollarSign,
  PiggyBank,
  Handshake,
  Gauge
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function BusinessLoanPage() {
  const [loanAmount, setLoanAmount] = useState([2500000]);
  const [tenure, setTenure] = useState([36]);
  const [interestRate, setInterestRate] = useState([12.5]);
  const [businessType, setBusinessType] = useState("manufacturing");

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  // EMI Calculation
  const calculateEMI = () => {
    const principal = loanAmount[0];
    const rate = interestRate[0] / 12 / 100;
    const time = tenure[0];
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    return Math.round(emi);
  };

  const totalAmount = calculateEMI() * tenure[0];
  const totalInterest = totalAmount - loanAmount[0];

  // Hook refs
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

  const businessLoanTypes = [
    {
      title: "Working Capital Loans",
      description: "Fund your daily business operations and maintain cash flow",
      icon: <TrendingUp className="h-8 w-8" />,
      features: ["Quick disbursement", "Flexible repayment", "No collateral for smaller amounts", "Revolving credit facility"],
      rate: "10.50% p.a. onwards",
      amount: "Up to ₹50 Lakhs"
    },
    {
      title: "Term Loans",
      description: "Long-term financing for business expansion and equipment purchase",
      icon: <Building2 className="h-8 w-8" />,
      features: ["Long tenure options", "Competitive rates", "Fixed EMI structure", "Prepayment flexibility"],
      rate: "11.00% p.a. onwards",
      amount: "Up to ₹10 Crores"
    },
    {
      title: "Equipment Finance",
      description: "Specialized financing for machinery and equipment purchase",
      icon: <Factory className="h-8 w-8" />,
      features: ["Up to 90% financing", "Equipment as collateral", "Tax benefits", "Quick processing"],
      rate: "10.75% p.a. onwards",
      amount: "Up to ₹5 Crores"
    },
    {
      title: "Invoice Financing",
      description: "Get immediate cash against your pending invoices",
      icon: <FileText className="h-8 w-8" />,
      features: ["Instant liquidity", "No collateral required", "Digital process", "Flexible tenure"],
      rate: "12.00% p.a. onwards",
      amount: "Up to ₹2 Crores"
    },
    {
      title: "MSME Loans",
      description: "Tailored loans for Micro, Small & Medium Enterprises",
      icon: <Briefcase className="h-8 w-8" />,
      features: ["Government schemes", "Subsidized rates", "Minimal documentation", "Quick approval"],
      rate: "9.75% p.a. onwards",
      amount: "Up to ₹25 Crores"
    },
    {
      title: "Startup Loans",
      description: "Fuel your startup dreams with customized funding solutions",
      icon: <Target className="h-8 w-8" />,
      features: ["Flexible eligibility", "Mentor support", "No revenue requirement", "Growth-focused terms"],
      rate: "13.50% p.a. onwards",
      amount: "Up to ₹1 Crore"
    }
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick Disbursement",
      description: "Get funds in your account within 3-5 working days"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Flexible Repayment",
      description: "Choose from various repayment options that suit your cash flow"
    },
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: "No Collateral",
      description: "Loans up to ₹50 lakhs without any collateral requirement"
    },
    {
      icon: <Percent className="h-6 w-6" />,
      title: "Competitive Rates",
      description: "Interest rates starting from 10.50% p.a. for qualified businesses"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Minimal Documentation",
      description: "Simple documentation process with digital verification"
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Relationship Manager",
      description: "Dedicated relationship manager for personalized service"
    }
  ];

  const eligibilityCriteria = [
    {
      title: "Business Age",
      requirement: "Minimum 2 years in operation",
      icon: <Calendar className="h-5 w-5" />
    },
    {
      title: "Annual Turnover",
      requirement: "Minimum ₹40 Lakhs per annum",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Credit Score",
      requirement: "CIBIL Score 650 and above",
      icon: <Star className="h-5 w-5" />
    },
    {
      title: "Business Registration",
      requirement: "Valid business registration documents",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Profit Margin",
      requirement: "Positive cash flow for last 2 years",
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      title: "Bank Account",
      requirement: "Active current account for 12+ months",
      icon: <CreditCard className="h-5 w-5" />
    }
  ];

  const requiredDocuments = [
    {
      category: "Business Documents",
      documents: [
        "Certificate of Incorporation",
        "Memorandum & Articles of Association",
        "Partnership Deed (for partnerships)",
        "GST Registration Certificate",
        "Trade License",
        "Udyog Aadhaar/MSME Certificate"
      ]
    },
    {
      category: "Financial Documents",
      documents: [
        "Audited Financial Statements (2 years)",
        "Provisional Financial Statements",
        "Income Tax Returns (3 years)",
        "GST Returns (12 months)",
        "Bank Statements (12 months)",
        "Cash Flow Projections"
      ]
    },
    {
      category: "Project Documents",
      documents: [
        "Detailed Project Report",
        "Cost Estimates",
        "Quotations from Suppliers",
        "Technical Feasibility Report",
        "Environmental Clearances (if required)",
        "Land Documents (if applicable)"
      ]
    },
    {
      category: "Owner/Director Documents",
      documents: [
        "PAN Card",
        "Aadhaar Card",
        "Passport Size Photographs",
        "Address Proof",
        "Board Resolution",
        "Personal Bank Statements"
      ]
    }
  ];

  const interestRates = [
    {
      loanType: "Working Capital",
      amount: "Up to ₹25 Lakhs",
      rate: "10.50% - 13.50%",
      processing: "1.00%"
    },
    {
      loanType: "Working Capital",
      amount: "₹25 Lakhs - ₹1 Crore",
      rate: "11.00% - 14.00%",
      processing: "1.50%"
    },
    {
      loanType: "Term Loan",
      amount: "Up to ₹50 Lakhs",
      rate: "11.00% - 14.50%",
      processing: "1.25%"
    },
    {
      loanType: "Term Loan",
      amount: "₹50 Lakhs - ₹5 Crores",
      rate: "11.50% - 15.00%",
      processing: "1.75%"
    },
    {
      loanType: "Equipment Finance",
      amount: "Up to ₹2 Crores",
      rate: "10.75% - 13.75%",
      processing: "1.00%"
    },
    {
      loanType: "MSME Loan",
      amount: "Up to ₹10 Crores",
      rate: "9.75% - 12.75%",
      processing: "0.75%"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Discuss your business requirements with our loan expert",
      icon: <Phone className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit required business and financial documents",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Credit Assessment",
      description: "Our team evaluates your business creditworthiness",
      icon: <Shield className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Loan Approval",
      description: "Get loan approval with terms and conditions",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: 5,
      title: "Fund Disbursement",
      description: "Receive funds in your business account within 3-5 days",
      icon: <Banknote className="h-6 w-6" />
    }
  ];

  const benefits = [
    {
      title: "Tax Benefits",
      description: "Claim tax deductions on interest payments under Section 37(1)",
      icon: <PiggyBank className="h-6 w-6" />
    },
    {
      title: "No Prepayment Charges",
      description: "Prepay your loan anytime without any additional charges",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Flexible Tenure",
      description: "Choose repayment tenure from 12 months to 84 months",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: "Business Growth Support",
      description: "Get advisory support for business expansion and planning",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const whyChooseUs = [
    {
      title: "Industry Expertise",
      description: "15+ years of experience in business lending across various sectors",
      icon: <Award className="h-8 w-8" />
    },
    {
      title: "Quick Processing",
      description: "Streamlined approval process with decision in 48-72 hours",
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: "Dedicated Support",
      description: "Personal relationship manager for end-to-end loan assistance",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Flexible Terms",
      description: "Customized loan structures to match your business cash flow",
      icon: <Handshake className="h-8 w-8" />
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Kumar Manufacturing Ltd.",
      testimonial: "The working capital loan from Abhishek Financial helped us maintain smooth operations during the expansion phase. The process was quick and hassle-free.",
      rating: 5,
      loanAmount: "₹35 Lakhs"
    },
    {
      name: "Priya Sharma",
      business: "Sharma Textiles Pvt. Ltd.",
      testimonial: "Excellent service and competitive rates. The relationship manager understood our business needs and provided the perfect loan solution.",
      rating: 5,
      loanAmount: "₹1.2 Crores"
    },
    {
      name: "Amit Patel",
      business: "TechStart Solutions",
      testimonial: "As a startup, getting a business loan was challenging elsewhere. Abhishek Financial believed in our vision and provided the funding we needed.",
      rating: 5,
      loanAmount: "₹75 Lakhs"
    }
  ];

  const faqs = [
    {
      question: "What is the minimum turnover required for a business loan?",
      answer: "The minimum annual turnover required is ₹40 lakhs. However, for MSME loans and startup loans, we have more flexible criteria based on business potential and projections."
    },
    {
      question: "How quickly can I get the loan disbursed?",
      answer: "Once all documents are submitted and verified, loan disbursement typically takes 3-5 working days. For urgent requirements, we also offer express processing."
    },
    {
      question: "Do I need collateral for all business loans?",
      answer: "No, loans up to ₹50 lakhs can be provided without collateral based on your business profile and creditworthiness. For higher amounts, collateral may be required."
    },
    {
      question: "Can I get a loan for a new business or startup?",
      answer: "Yes, we offer specialized startup loans for new businesses. The eligibility criteria are more flexible, focusing on business plan viability and promoter background."
    },
    {
      question: "What are the tax benefits available on business loans?",
      answer: "Interest paid on business loans is tax-deductible under Section 37(1) of the Income Tax Act. This can significantly reduce your tax liability and improve cash flow."
    },
    {
      question: "Is there any penalty for early repayment?",
      answer: "No, we don't charge any prepayment penalty. You can prepay your loan partially or fully at any time without additional charges, helping you save on interest costs."
    },
    {
      question: "What factors affect my loan interest rate?",
      answer: "Interest rates depend on factors like business turnover, credit score, loan amount, tenure, business vintage, and industry risk profile. Better business metrics lead to more competitive rates."
    },
    {
      question: "Can I increase my loan amount later?",
      answer: "Yes, based on your repayment track record and business growth, you can apply for a top-up loan or enhancement of your existing credit facility."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-primary to-accent py-20 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div
          className="container relative z-10"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-8">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Business Loans Available
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Fuel Your Business Growth with
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {" "}Smart Financing
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Get business loans starting at 10.50% p.a. with quick disbursement and flexible repayment options. From working capital to expansion loans, we've got your business covered.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">10.50%</div>
                  <div className="text-sm text-white/80">Interest Rate p.a.*</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">₹10 Cr</div>
                  <div className="text-sm text-white/80">Max Loan Amount</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">3-5 Days</div>
                  <div className="text-sm text-white/80">Quick Processing</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <Link href="/apply">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Calculate EMI <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="relative">
              <div className="relative z-10">
                <Card className="glassmorphism p-8 border-white/20">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl text-white">Quick Loan Check</CardTitle>
                    <CardDescription className="text-white/80">
                      Get instant eligibility assessment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-white">Business Name</Label>
                      <Input placeholder="Enter your business name" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                    </div>
                    <div>
                      <Label className="text-white">Annual Turnover</Label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select turnover range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="40l-1cr">₹40 Lakhs - ₹1 Crore</SelectItem>
                          <SelectItem value="1cr-5cr">₹1 Crore - ₹5 Crores</SelectItem>
                          <SelectItem value="5cr-10cr">₹5 Crores - ₹10 Crores</SelectItem>
                          <SelectItem value="10cr+">₹10 Crores+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-white">Loan Requirement</Label>
                      <Input placeholder="₹ Enter loan amount" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                    </div>
                    <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold">
                      Check Eligibility
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-secondary/50">
        <motion.div
          className="container"
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Business Loans?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We understand that every business is unique. Our business loan solutions are designed to provide the flexibility and support your business needs to grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover-lift card-shadow border-0">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-accent/10 text-accent">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Loan Types Section */}
      <section ref={typesRef} className="py-20">
        <motion.div
          className="container"
          initial="hidden"
          animate={typesInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Loan Types</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From working capital to equipment financing, we offer a comprehensive range of business loan solutions tailored to meet your specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessLoanTypes.map((type, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover-lift card-shadow-lg border-0 group">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex p-4 rounded-full bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                        {type.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                      <p className="text-muted-foreground text-sm">{type.description}</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Interest Rate:</span>
                        <span className="text-sm font-semibold text-accent">{type.rate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Loan Amount:</span>
                        <span className="text-sm font-semibold">{type.amount}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-6" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Eligibility Section */}
      <section ref={eligibilityRef} className="py-20 bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          animate={eligibilityInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Eligibility Criteria</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Check if your business meets our eligibility requirements for a business loan. We have designed our criteria to be inclusive while maintaining prudent lending standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eligibilityCriteria.map((criteria, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover-lift card-shadow border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                        {criteria.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{criteria.title}</h3>
                        <p className="text-sm text-muted-foreground">{criteria.requirement}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Documents Section */}
      <section ref={documentsRef} className="py-20">
        <motion.div
          className="container"
          initial="hidden"
          animate={documentsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Required Documents</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Prepare these documents for a smooth and quick loan application process. Our team will guide you through each requirement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requiredDocuments.map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover-lift card-shadow border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-accent" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.documents.map((doc, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Card className="inline-block glassmorphism-dark p-6">
              <div className="flex items-center gap-4">
                <Download className="h-6 w-6 text-accent" />
                <div className="text-left">
                  <h3 className="font-semibold text-white">Document Checklist</h3>
                  <p className="text-sm text-white/80">Download our comprehensive document checklist</p>
                </div>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Download PDF
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Interest Rates Table */}
      <section ref={ratesRef} className="py-20 bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          animate={ratesInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interest Rates & Charges</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing with competitive interest rates. Rates may vary based on business profile, loan amount, and tenure.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden card-shadow-lg border-0">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-primary text-white">
                        <th className="text-left p-4 font-semibold">Loan Type</th>
                        <th className="text-left p-4 font-semibold">Loan Amount</th>
                        <th className="text-left p-4 font-semibold">Interest Rate (p.a.)</th>
                        <th className="text-left p-4 font-semibold">Processing Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {interestRates.map((rate, index) => (
                        <tr key={index} className="border-b hover:bg-secondary/50 transition-colors">
                          <td className="p-4 font-medium">{rate.loanType}</td>
                          <td className="p-4 text-muted-foreground">{rate.amount}</td>
                          <td className="p-4 font-semibold text-accent">{rate.rate}</td>
                          <td className="p-4 text-muted-foreground">{rate.processing}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                * Rates are indicative and subject to change based on RBI guidelines and individual business assessment.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* EMI Calculator */}
      <section ref={calculatorRef} className="py-20">
        <motion.div
          className="container"
          initial="hidden"
          animate={calculatorInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Loan EMI Calculator</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Calculate your monthly EMI and plan your business finances better. Adjust the loan amount, tenure, and interest rate to find the perfect loan structure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp}>
              <Card className="card-shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Calculator className="h-5 w-5 text-accent" />
                    Loan Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Label className="text-base font-medium">Loan Amount</Label>
                      <span className="font-semibold text-accent">₹{loanAmount[0].toLocaleString('en-IN')}</span>
                    </div>
                    <Slider
                      value={loanAmount}
                      onValueChange={setLoanAmount}
                      max={100000000}
                      min={500000}
                      step={100000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>₹5 Lakhs</span>
                      <span>₹10 Crores</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Label className="text-base font-medium">Tenure</Label>
                      <span className="font-semibold text-accent">{tenure[0]} months</span>
                    </div>
                    <Slider
                      value={tenure}
                      onValueChange={setTenure}
                      max={84}
                      min={12}
                      step={6}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>12 months</span>
                      <span>84 months</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Label className="text-base font-medium">Interest Rate</Label>
                      <span className="font-semibold text-accent">{interestRate[0]}% p.a.</span>
                    </div>
                    <Slider
                      value={interestRate}
                      onValueChange={setInterestRate}
                      max={20}
                      min={10}
                      step={0.25}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>10%</span>
                      <span>20%</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-4 block">Business Type</Label>
                    <Select value={businessType} onValueChange={setBusinessType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="trading">Trading</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="export">Export</SelectItem>
                        <SelectItem value="startup">Startup</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="card-shadow-lg border-0 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Gauge className="h-5 w-5 text-accent" />
                    EMI Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-8 border-2 border-dashed border-accent/20 rounded-lg bg-accent/5">
                    <div className="text-4xl font-bold text-accent mb-2">
                      ₹{calculateEMI().toLocaleString('en-IN')}
                    </div>
                    <div className="text-muted-foreground">Monthly EMI</div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
                      <span className="font-medium">Principal Amount</span>
                      <span className="font-semibold">₹{loanAmount[0].toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
                      <span className="font-medium">Total Interest</span>
                      <span className="font-semibold text-accent">₹{totalInterest.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-primary text-white rounded-lg">
                      <span className="font-medium">Total Amount</span>
                      <span className="font-semibold">₹{totalAmount.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="pt-6 space-y-3">
                    <Button className="w-full" size="lg">
                      Apply for This Loan
                    </Button>
                    <Button className="w-full" variant="outline" size="lg">
                      Download EMI Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Application Process */}
      <section ref={processRef} className="py-20 bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          animate={processInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple Application Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get your business loan in just 5 simple steps. Our streamlined process ensures quick approval and disbursement.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent to-accent opacity-20"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {applicationProcess.map((step, index) => (
                <motion.div key={index} variants={fadeInUp} className="relative">
                  <Card className="hover-lift card-shadow border-0 text-center">
                    <CardContent className="p-6">
                      <div className="relative mb-4">
                        <div className="w-16 h-16 mx-auto bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                          {step.step}
                        </div>
                        <div className="p-3 mx-auto w-fit bg-accent/10 text-accent rounded-lg">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Button size="lg" className="bg-gradient-primary">
              Start Your Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20">
        <motion.div
          className="container"
          initial="hidden"
          animate={benefitsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Beyond competitive rates and quick processing, our business loans come with additional benefits designed to support your business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover-lift card-shadow border-0 text-center">
                  <CardContent className="p-8">
                    <div className="p-4 mx-auto w-fit bg-accent/10 text-accent rounded-full mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyChooseRef} className="py-20 bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          animate={whyChooseInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Abhishek Financial?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're not just a lending institution; we're your business growth partner. Here's what sets us apart in the business lending space.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover-lift card-shadow-lg border-0 text-center group">
                  <CardContent className="p-8">
                    <div className="p-4 mx-auto w-fit bg-accent/10 text-accent rounded-full mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                      {reason.icon}
                    </div>
                    <h3 className="font-semibold mb-3">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20">
        <motion.div
          className="container"
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Business Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what business owners who have worked with us have to say about their experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover-lift card-shadow-lg border-0">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.testimonial}"
                    </p>
                    <div className="border-t pt-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground mb-1">{testimonial.business}</div>
                      <Badge variant="outline" className="text-xs">
                        Loan Amount: {testimonial.loanAmount}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          animate={faqInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get answers to the most common questions about our business loan products and application process.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 card-shadow">
                  <AccordionItem value={`item-${index}`} className="border-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="text-left font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <motion.div
          className="container text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Accelerate Your Business Growth?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of businesses who have achieved their growth ambitions with our flexible business loan solutions. Get started today and take your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link href="/apply">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Call +91 9876543210
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}