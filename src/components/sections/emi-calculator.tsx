"use client";

import React, { useState, useCallback, useMemo } from 'react';
import { Calculator } from 'lucide-react';

interface EMICalculatorState {
  loanAmount: number;
  tenure: number;
  interestRate: number;
}

interface EMIResult {
  monthlyEMI: number;
  totalInterest: number;
  totalAmount: number;
}

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-IN').format(num);
};

export default function QuickEMICalculator() {
  const [values, setValues] = useState<EMICalculatorState>({
    loanAmount: 1000000, // ₹10L default
    tenure: 15, // 15 years default
    interestRate: 10.5, // 10.5% default
  });

  const calculateEMI = useCallback((principal: number, rate: number, tenure: number): EMIResult => {
    const monthlyRate = rate / 12 / 100;
    const numberOfMonths = tenure * 12;
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) / 
                (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
    
    const totalAmount = emi * numberOfMonths;
    const totalInterest = totalAmount - principal;
    
    return {
      monthlyEMI: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
    };
  }, []);

  const emiResult = useMemo(() => 
    calculateEMI(values.loanAmount, values.interestRate, values.tenure),
    [values, calculateEMI]
  );

  const handleSliderChange = useCallback((field: keyof EMICalculatorState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(event.target.value);
    setValues(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleInputChange = useCallback((field: keyof EMICalculatorState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = parseFloat(event.target.value.replace(/,/g, '')) || 0;
    
    // Apply bounds
    if (field === 'loanAmount') {
      value = Math.max(100000, Math.min(10000000, value));
    } else if (field === 'tenure') {
      value = Math.max(1, Math.min(30, value));
    } else if (field === 'interestRate') {
      value = Math.max(5, Math.min(20, value));
    }
    
    setValues(prev => ({ ...prev, [field]: value }));
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-[#0F1E3A] via-[#1a2a4a] to-[#2F6EF3]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Quick EMI Calculator
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Calculate your loan EMI instantly with our smart calculator. 
            Adjust loan amount, tenure, and interest rate to find the perfect plan.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - Input Controls */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                    <Calculator className="w-6 h-6 text-white" />
                    <span className="text-white font-semibold">Loan Calculator</span>
                  </div>
                </div>

                {/* Loan Amount Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-white font-semibold text-lg">Loan Amount</label>
                    <input
                      type="text"
                      value={formatNumber(values.loanAmount)}
                      onChange={handleInputChange('loanAmount')}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white text-right w-32 focus:outline-none focus:ring-2 focus:ring-[#2F6EF3] transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="100000"
                      max="10000000"
                      step="50000"
                      value={values.loanAmount}
                      onChange={handleSliderChange('loanAmount')}
                      className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-blue-100 mt-2">
                      <span>₹1L</span>
                      <span>₹1Cr</span>
                    </div>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-white font-semibold text-lg">Loan Tenure</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="1"
                        max="30"
                        value={values.tenure}
                        onChange={handleInputChange('tenure')}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white text-right w-20 focus:outline-none focus:ring-2 focus:ring-[#2F6EF3] transition-all duration-300"
                      />
                      <span className="text-blue-100">years</span>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      value={values.tenure}
                      onChange={handleSliderChange('tenure')}
                      className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-blue-100 mt-2">
                      <span>1 Yr</span>
                      <span>30 Yrs</span>
                    </div>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-white font-semibold text-lg">Interest Rate</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="5"
                        max="20"
                        step="0.1"
                        value={values.interestRate}
                        onChange={handleInputChange('interestRate')}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white text-right w-20 focus:outline-none focus:ring-2 focus:ring-[#2F6EF3] transition-all duration-300"
                      />
                      <span className="text-blue-100">%</span>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="5"
                      max="20"
                      step="0.1"
                      value={values.interestRate}
                      onChange={handleSliderChange('interestRate')}
                      className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-blue-100 mt-2">
                      <span>5%</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - EMI Results */}
              <div className="space-y-6">
                {/* Monthly EMI Display */}
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                  <div className="text-blue-100 text-lg font-medium mb-2">Monthly EMI</div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
                    {formatCurrency(emiResult.monthlyEMI)}
                  </div>
                  <div className="text-blue-200 text-sm">per month for {values.tenure} years</div>
                </div>

                {/* Breakdown */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold text-xl mb-4">Loan Breakdown</h4>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Principal Amount</span>
                      <span className="text-white font-semibold">{formatCurrency(values.loanAmount)}</span>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Total Interest</span>
                      <span className="text-white font-semibold">{formatCurrency(emiResult.totalInterest)}</span>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Total Amount Payable</span>
                      <span className="text-white font-bold text-lg">{formatCurrency(emiResult.totalAmount)}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-[#2F6EF3] to-[#4785FF] hover:from-[#1E5FE0] hover:to-[#2F6EF3] text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Calculate Detailed Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}