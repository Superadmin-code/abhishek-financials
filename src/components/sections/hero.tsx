import React from 'react';
import { ArrowRight, Play, Shield, TrendingUp, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-16 min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
      
      {/* Abstract Financial Shapes */}
      <div className="absolute top-32 right-20 opacity-10">
        <div className="w-16 h-16 border-2 border-accent rounded-lg rotate-45 animate-pulse"></div>
      </div>
      <div className="absolute bottom-32 right-32 opacity-10">
        <TrendingUp className="w-20 h-20 text-primary animate-bounce" />
      </div>
      <div className="absolute top-48 left-20 opacity-10">
        <Award className="w-12 h-12 text-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 glassmorphism rounded-full text-sm font-medium text-primary">
                <Shield className="w-4 h-4 mr-2 text-accent" />
                Trusted by 10,000+ customers
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Find Your Best
                <span className="text-accent block">Loan Partner</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Experience our transparent process with lightning-fast approvals. 
                Get the financing you need with competitive rates and personalized service.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/apply"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 hover-lift group"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 glassmorphism text-primary font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 hover-lift group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Explore Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">₹500Cr+</div>
                <div className="text-sm text-muted-foreground">Loans Disbursed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24hrs</div>
                <div className="text-sm text-muted-foreground">Quick Approval</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="glassmorphism rounded-2xl p-8 card-shadow-lg hover-lift">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-primary">Loan Application</h3>
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-muted-foreground">Application Status</span>
                      <span className="text-success font-medium">Approved ✓</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-muted-foreground">Processing Time</span>
                      <span className="text-primary font-medium">2 minutes</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-muted-foreground">Interest Rate</span>
                      <span className="text-accent font-medium">From 8.5%</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-4/5 animate-pulse"></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Processing... 80% complete</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 glassmorphism rounded-xl flex items-center justify-center animate-pulse">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 glassmorphism rounded-full flex items-center justify-center animate-bounce">
              <Award className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;