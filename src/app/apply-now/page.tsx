"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/sections/navigation";
import { 
  Home, 
  Building2, 
  GraduationCap, 
  CreditCard, 
  User, 
  MapPin, 
  Briefcase, 
  IndianRupee,
  Upload,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';
import { toast } from "sonner";

interface FormData {
  // Loan Type
  loanType: string;
  loanAmount: number;
  purpose: string;
  
  // Personal Information
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  panNumber: string;
  maritalStatus: string;
  
  // Address Information
  currentAddress: {
    street: string;
    city: string;
    state: string;
    pinCode: string;
  };
  yearsAtAddress: number;
  housingStatus: string;
  monthlyRentEmi: number;
  
  // Employment & Income
  employmentType: string;
  companyName: string;
  monthlyIncome: number;
  yearsOfExperience: number;
  annualIncome: number;
  
  // Financial Information
  existingLoans: string;
  monthlyExpenses: number;
  bankAccountDetails: string;
  investments: string;
  
  // Co-applicant
  hasCoApplicant: boolean;
  coApplicant?: Partial<FormData>;
  
  // Documents
  documents: {
    incomeProof: File | null;
    identityProof: File | null;
    addressProof: File | null;
    bankStatements: File | null;
  };
  
  // Terms
  consentTerms: boolean;
  consentCredit: boolean;
  consentMarketing: boolean;
}

const initialFormData: FormData = {
  loanType: '',
  loanAmount: 500000,
  purpose: '',
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  panNumber: '',
  maritalStatus: '',
  currentAddress: {
    street: '',
    city: '',
    state: '',
    pinCode: ''
  },
  yearsAtAddress: 1,
  housingStatus: '',
  monthlyRentEmi: 0,
  employmentType: '',
  companyName: '',
  monthlyIncome: 50000,
  yearsOfExperience: 1,
  annualIncome: 600000,
  existingLoans: '',
  monthlyExpenses: 20000,
  bankAccountDetails: '',
  investments: '',
  hasCoApplicant: false,
  documents: {
    incomeProof: null,
    identityProof: null,
    addressProof: null,
    bankStatements: null
  },
  consentTerms: false,
  consentCredit: false,
  consentMarketing: false
};

const steps = [
  { id: 1, title: 'Loan Type', description: 'Select your loan type and amount' },
  { id: 2, title: 'Personal Info', description: 'Your personal details' },
  { id: 3, title: 'Address', description: 'Current address information' },
  { id: 4, title: 'Employment', description: 'Employment and income details' },
  { id: 5, title: 'Financial', description: 'Financial information' },
  { id: 6, title: 'Co-applicant', description: 'Add co-applicant (optional)' },
  { id: 7, title: 'Documents', description: 'Upload required documents' },
  { id: 8, title: 'Review', description: 'Terms and submission' }
];

const loanTypes = [
  { value: 'home', label: 'Home Loan', icon: Home, description: 'Purchase or construct your dream home' },
  { value: 'business', label: 'Business Loan', icon: Building2, description: 'Grow your business with flexible financing' },
  { value: 'education', label: 'Education Loan', icon: GraduationCap, description: 'Invest in your educational future' },
  { value: 'personal', label: 'Personal Loan', icon: CreditCard, description: 'Meet your personal financial needs' }
];

export default function LoanApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const progress = (currentStep / steps.length) * 100;

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    switch (step) {
      case 1:
        if (!formData.loanType) newErrors.loanType = 'Please select a loan type';
        if (!formData.purpose.trim()) newErrors.purpose = 'Please describe the purpose';
        break;
      case 2:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        if (!formData.panNumber.trim()) newErrors.panNumber = 'PAN number is required';
        if (!formData.maritalStatus) newErrors.maritalStatus = 'Marital status is required';
        break;
      case 3:
        if (!formData.currentAddress.street.trim()) newErrors.street = 'Street address is required';
        if (!formData.currentAddress.city.trim()) newErrors.city = 'City is required';
        if (!formData.currentAddress.state.trim()) newErrors.state = 'State is required';
        if (!formData.currentAddress.pinCode.trim()) newErrors.pinCode = 'PIN code is required';
        if (!formData.housingStatus) newErrors.housingStatus = 'Housing status is required';
        break;
      case 4:
        if (!formData.employmentType) newErrors.employmentType = 'Employment type is required';
        if (!formData.companyName.trim()) newErrors.companyName = 'Company/Business name is required';
        break;
      case 8:
        if (!formData.consentTerms) newErrors.consentTerms = 'You must accept the terms and conditions';
        if (!formData.consentCredit) newErrors.consentCredit = 'Credit check consent is required';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleFileUpload = (field: keyof FormData['documents'], file: File) => {
    updateFormData({
      documents: {
        ...formData.documents,
        [field]: file
      }
    });
  };

  const handleSubmit = async () => {
    if (!validateStep(8)) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Application submitted successfully! You will receive a confirmation email shortly.');
      
      // Reset form or redirect
      setCurrentStep(1);
      setFormData(initialFormData);
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <Label className="text-lg font-semibold mb-6 block">Select Loan Type</Label>
              <RadioGroup 
                value={formData.loanType} 
                onValueChange={(value) => updateFormData({ loanType: value })}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {loanTypes.map((type) => (
                  <div key={type.value}>
                    <RadioGroupItem value={type.value} id={type.value} className="sr-only" />
                    <Label
                      htmlFor={type.value}
                      className={`flex items-center space-x-4 p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        formData.loanType === type.value
                          ? 'border-accent bg-accent/5 shadow-lg'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <type.icon className={`h-8 w-8 ${formData.loanType === type.value ? 'text-accent' : 'text-muted-foreground'}`} />
                      <div>
                        <div className="font-semibold">{type.label}</div>
                        <div className="text-sm text-muted-foreground">{type.description}</div>
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {errors.loanType && <p className="text-destructive text-sm mt-2">{errors.loanType}</p>}
            </div>

            <div>
              <Label className="text-lg font-semibold mb-4 block">Loan Amount</Label>
              <div className="space-y-4">
                <Slider
                  value={[formData.loanAmount]}
                  onValueChange={(value) => updateFormData({ loanAmount: value[0] })}
                  max={10000000}
                  min={50000}
                  step={50000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₹50,000</span>
                  <span className="text-xl font-bold text-primary">₹{formData.loanAmount.toLocaleString('en-IN')}</span>
                  <span>₹1,00,00,000</span>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="purpose">Purpose/Description</Label>
              <Textarea
                id="purpose"
                placeholder="Please describe the purpose of the loan..."
                value={formData.purpose}
                onChange={(e) => updateFormData({ purpose: e.target.value })}
                className="mt-2"
                rows={4}
              />
              {errors.purpose && <p className="text-destructive text-sm mt-2">{errors.purpose}</p>}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData({ firstName: e.target.value })}
                  className="mt-2"
                />
                {errors.firstName && <p className="text-destructive text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  value={formData.middleName}
                  onChange={(e) => updateFormData({ middleName: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData({ lastName: e.target.value })}
                  className="mt-2"
                />
                {errors.lastName && <p className="text-destructive text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData({ email: e.target.value })}
                  className="mt-2"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData({ phone: e.target.value })}
                  className="mt-2"
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => updateFormData({ dateOfBirth: e.target.value })}
                  className="mt-2"
                />
                {errors.dateOfBirth && <p className="text-destructive text-sm mt-1">{errors.dateOfBirth}</p>}
              </div>
              <div>
                <Label htmlFor="panNumber">PAN Number *</Label>
                <Input
                  id="panNumber"
                  value={formData.panNumber}
                  onChange={(e) => updateFormData({ panNumber: e.target.value.toUpperCase() })}
                  placeholder="ABCDE1234F"
                  className="mt-2"
                />
                {errors.panNumber && <p className="text-destructive text-sm mt-1">{errors.panNumber}</p>}
              </div>
              <div>
                <Label htmlFor="maritalStatus">Marital Status *</Label>
                <Select value={formData.maritalStatus} onValueChange={(value) => updateFormData({ maritalStatus: value })}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
                {errors.maritalStatus && <p className="text-destructive text-sm mt-1">{errors.maritalStatus}</p>}
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <Label className="text-lg font-semibold mb-4 block">Current Address</Label>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="street">Street Address *</Label>
                  <Input
                    id="street"
                    value={formData.currentAddress.street}
                    onChange={(e) => updateFormData({
                      currentAddress: { ...formData.currentAddress, street: e.target.value }
                    })}
                    className="mt-2"
                  />
                  {errors.street && <p className="text-destructive text-sm mt-1">{errors.street}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.currentAddress.city}
                      onChange={(e) => updateFormData({
                        currentAddress: { ...formData.currentAddress, city: e.target.value }
                      })}
                      className="mt-2"
                    />
                    {errors.city && <p className="text-destructive text-sm mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={formData.currentAddress.state}
                      onChange={(e) => updateFormData({
                        currentAddress: { ...formData.currentAddress, state: e.target.value }
                      })}
                      className="mt-2"
                    />
                    {errors.state && <p className="text-destructive text-sm mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <Label htmlFor="pinCode">PIN Code *</Label>
                    <Input
                      id="pinCode"
                      value={formData.currentAddress.pinCode}
                      onChange={(e) => updateFormData({
                        currentAddress: { ...formData.currentAddress, pinCode: e.target.value }
                      })}
                      className="mt-2"
                    />
                    {errors.pinCode && <p className="text-destructive text-sm mt-1">{errors.pinCode}</p>}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="yearsAtAddress">Years at Current Address</Label>
                <Slider
                  value={[formData.yearsAtAddress]}
                  onValueChange={(value) => updateFormData({ yearsAtAddress: value[0] })}
                  max={30}
                  min={1}
                  step={1}
                  className="mt-4"
                />
                <div className="text-center mt-2 font-semibold">{formData.yearsAtAddress} years</div>
              </div>
              
              <div>
                <Label htmlFor="housingStatus">Housing Status *</Label>
                <Select value={formData.housingStatus} onValueChange={(value) => updateFormData({ housingStatus: value })}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select housing status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="own">Own</SelectItem>
                    <SelectItem value="rent">Rent</SelectItem>
                    <SelectItem value="parents">Living with Parents</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.housingStatus && <p className="text-destructive text-sm mt-1">{errors.housingStatus}</p>}
              </div>
            </div>

            {(formData.housingStatus === 'rent' || formData.housingStatus === 'other') && (
              <div>
                <Label htmlFor="monthlyRentEmi">Monthly Rent/EMI</Label>
                <Input
                  id="monthlyRentEmi"
                  type="number"
                  value={formData.monthlyRentEmi}
                  onChange={(e) => updateFormData({ monthlyRentEmi: Number(e.target.value) })}
                  className="mt-2"
                />
              </div>
            )}
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="employmentType">Employment Type *</Label>
                <Select value={formData.employmentType} onValueChange={(value) => updateFormData({ employmentType: value })}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select employment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salaried">Salaried</SelectItem>
                    <SelectItem value="self-employed">Self-employed</SelectItem>
                    <SelectItem value="business">Business Owner</SelectItem>
                    <SelectItem value="retired">Retired</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.employmentType && <p className="text-destructive text-sm mt-1">{errors.employmentType}</p>}
              </div>
              
              <div>
                <Label htmlFor="companyName">Company/Business Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => updateFormData({ companyName: e.target.value })}
                  className="mt-2"
                />
                {errors.companyName && <p className="text-destructive text-sm mt-1">{errors.companyName}</p>}
              </div>
            </div>

            <div>
              <Label className="text-lg font-semibold mb-4 block">Monthly Income</Label>
              <Slider
                value={[formData.monthlyIncome]}
                onValueChange={(value) => updateFormData({ 
                  monthlyIncome: value[0],
                  annualIncome: value[0] * 12
                })}
                max={500000}
                min={10000}
                step={5000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>₹10,000</span>
                <span className="text-xl font-bold text-primary">₹{formData.monthlyIncome.toLocaleString('en-IN')}</span>
                <span>₹5,00,000</span>
              </div>
            </div>

            <div>
              <Label className="text-lg font-semibold mb-4 block">Years of Experience</Label>
              <Slider
                value={[formData.yearsOfExperience]}
                onValueChange={(value) => updateFormData({ yearsOfExperience: value[0] })}
                max={40}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="text-center mt-2 font-semibold">{formData.yearsOfExperience} years</div>
            </div>

            <div>
              <Label htmlFor="annualIncome">Annual Income</Label>
              <Input
                id="annualIncome"
                type="number"
                value={formData.annualIncome}
                onChange={(e) => updateFormData({ annualIncome: Number(e.target.value) })}
                className="mt-2"
                readOnly
              />
              <p className="text-sm text-muted-foreground mt-1">Calculated based on monthly income</p>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <Label htmlFor="existingLoans">Existing Loans/EMIs</Label>
              <Textarea
                id="existingLoans"
                placeholder="Please list any existing loans, credit cards, or EMIs..."
                value={formData.existingLoans}
                onChange={(e) => updateFormData({ existingLoans: e.target.value })}
                className="mt-2"
                rows={3}
              />
            </div>

            <div>
              <Label className="text-lg font-semibold mb-4 block">Monthly Expenses</Label>
              <Slider
                value={[formData.monthlyExpenses]}
                onValueChange={(value) => updateFormData({ monthlyExpenses: value[0] })}
                max={100000}
                min={5000}
                step={1000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>₹5,000</span>
                <span className="text-xl font-bold text-primary">₹{formData.monthlyExpenses.toLocaleString('en-IN')}</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            <div>
              <Label htmlFor="bankAccountDetails">Bank Account Details</Label>
              <Textarea
                id="bankAccountDetails"
                placeholder="Bank name, account type, account number (last 4 digits only)..."
                value={formData.bankAccountDetails}
                onChange={(e) => updateFormData({ bankAccountDetails: e.target.value })}
                className="mt-2"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="investments">Investments & Assets</Label>
              <Textarea
                id="investments"
                placeholder="Mutual funds, fixed deposits, property, stocks, etc..."
                value={formData.investments}
                onChange={(e) => updateFormData({ investments: e.target.value })}
                className="mt-2"
                rows={3}
              />
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <Checkbox
                id="hasCoApplicant"
                checked={formData.hasCoApplicant}
                onCheckedChange={(checked) => updateFormData({ hasCoApplicant: !!checked })}
              />
              <Label htmlFor="hasCoApplicant" className="text-lg font-semibold">
                Add Co-applicant
              </Label>
            </div>

            {formData.hasCoApplicant ? (
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Co-applicant Information</CardTitle>
                  <CardDescription>
                    Adding a co-applicant can improve your loan eligibility
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="coFirstName">First Name</Label>
                      <Input
                        id="coFirstName"
                        placeholder="Co-applicant first name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="coLastName">Last Name</Label>
                      <Input
                        id="coLastName"
                        placeholder="Co-applicant last name"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="coEmail">Email</Label>
                      <Input
                        id="coEmail"
                        type="email"
                        placeholder="Co-applicant email"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="coPhone">Phone</Label>
                      <Input
                        id="coPhone"
                        type="tel"
                        placeholder="Co-applicant phone"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="coRelationship">Relationship</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="p-8 text-center border-dashed">
                <div className="text-muted-foreground">
                  <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No co-applicant selected</p>
                  <p className="text-sm">You can add a co-applicant to improve your loan eligibility</p>
                </div>
              </Card>
            )}
          </motion.div>
        );

      case 7:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { key: 'incomeProof', label: 'Income Proof', description: 'Salary slips, ITR, Form 16' },
                { key: 'identityProof', label: 'Identity Proof', description: 'Aadhaar, PAN, Passport, Voter ID' },
                { key: 'addressProof', label: 'Address Proof', description: 'Utility bills, Aadhaar, Passport' },
                { key: 'bankStatements', label: 'Bank Statements', description: 'Last 6 months statements' }
              ].map((doc) => (
                <Card key={doc.key} className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold">{doc.label}</h4>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                    {formData.documents[doc.key as keyof FormData['documents']] && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                  
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PDF, JPG, PNG up to 5MB
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleFileUpload(doc.key as keyof FormData['documents'], file);
                        }
                      }}
                      className="hidden"
                    />
                  </div>
                  
                  {formData.documents[doc.key as keyof FormData['documents']] && (
                    <p className="text-sm text-green-600 mt-2">
                      ✓ {formData.documents[doc.key as keyof FormData['documents']]?.name}
                    </p>
                  )}
                </Card>
              ))}
            </div>
            
            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900">Document Security</h4>
                  <p className="text-sm text-blue-700">
                    All uploaded documents are encrypted and stored securely. 
                    We follow strict data protection protocols to ensure your information remains confidential.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        );

      case 8:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Application Summary</CardTitle>
                <CardDescription>Please review your application details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="font-semibold">Loan Type</Label>
                    <p className="text-muted-foreground capitalize">{formData.loanType} Loan</p>
                  </div>
                  <div>
                    <Label className="font-semibold">Loan Amount</Label>
                    <p className="text-muted-foreground">₹{formData.loanAmount.toLocaleString('en-IN')}</p>
                  </div>
                  <div>
                    <Label className="font-semibold">Applicant Name</Label>
                    <p className="text-muted-foreground">{formData.firstName} {formData.lastName}</p>
                  </div>
                  <div>
                    <Label className="font-semibold">Monthly Income</Label>
                    <p className="text-muted-foreground">₹{formData.monthlyIncome.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consentTerms"
                  checked={formData.consentTerms}
                  onCheckedChange={(checked) => updateFormData({ consentTerms: !!checked })}
                />
                <Label htmlFor="consentTerms" className="text-sm">
                  I agree to the <button className="text-accent underline">Terms and Conditions</button> *
                </Label>
              </div>
              {errors.consentTerms && <p className="text-destructive text-sm">{errors.consentTerms}</p>}

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consentCredit"
                  checked={formData.consentCredit}
                  onCheckedChange={(checked) => updateFormData({ consentCredit: !!checked })}
                />
                <Label htmlFor="consentCredit" className="text-sm">
                  I consent to credit checks and verification of information *
                </Label>
              </div>
              {errors.consentCredit && <p className="text-destructive text-sm">{errors.consentCredit}</p>}

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consentMarketing"
                  checked={formData.consentMarketing}
                  onCheckedChange={(checked) => updateFormData({ consentMarketing: !!checked })}
                />
                <Label htmlFor="consentMarketing" className="text-sm">
                  I agree to receive marketing communications (optional)
                </Label>
              </div>
            </div>

            <Card className="p-6 bg-green-50 border-green-200">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900">What happens next?</h4>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Application review within 24-48 hours</li>
                    <li>• Document verification call</li>
                    <li>• Loan approval notification</li>
                    <li>• Disbursement process begins</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-muted">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Loan Application
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Complete your loan application in simple steps. Our secure process ensures 
              quick approval and competitive rates for your financial needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              
              <Progress value={progress} className="h-2 mb-4" />
              
              <div className="flex justify-between text-xs text-muted-foreground">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex flex-col items-center ${
                      index + 1 <= currentStep ? 'text-accent font-medium' : ''
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-colors ${
                        index + 1 < currentStep
                          ? 'bg-accent text-white'
                          : index + 1 === currentStep
                          ? 'bg-accent/20 text-accent border-2 border-accent'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {index + 1 < currentStep ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <span>{step.id}</span>
                      )}
                    </div>
                    <span className="hidden md:block text-center">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form Card */}
            <Card className="glassmorphism border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {steps[currentStep - 1].title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {steps[currentStep - 1].description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <AnimatePresence mode="wait">
                  {renderStepContent()}
                </AnimatePresence>
              </CardContent>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center p-6 border-t">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous</span>
                </Button>

                {currentStep === steps.length ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="btn-smooth flex items-center space-x-2 bg-gradient-to-r from-primary to-accent"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </Button>
                ) : (
                  <Button
                    onClick={nextStep}
                    className="btn-smooth flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 hidden xl:block"
      >
        <Card className="w-80 glassmorphism border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-accent" />
              <span>Why Choose Us?</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-semibold">Quick Approval</h4>
                <p className="text-sm text-muted-foreground">
                  Get approved in 24-48 hours
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <IndianRupee className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-semibold">Competitive Rates</h4>
                <p className="text-sm text-muted-foreground">
                  Starting from 8.5% per annum
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-purple-500 mt-0.5" />
              <div>
                <h4 className="font-semibold">Secure Process</h4>
                <p className="text-sm text-muted-foreground">
                  Bank-grade security & encryption
                </p>
              </div>
            </div>

            <Separator />
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Need help with your application?
              </p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us: +91 98765 43210
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Support
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}