"use client";

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Youtube, Twitter, Linkedin, MapPin, Phone, ArrowRight, DollarSign } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--footer)', color: 'var(--footer-foreground)' }}>
            <div className="container mx-auto px-4 pt-16 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pb-12">
                    <div className="flex items-center">
                        <div className="bg-primary p-3 rounded-full mr-4 shrink-0">
                            <DollarSign className="text-primary-foreground" size={24} />
                        </div>
                        <span className="text-4xl font-bold text-white">RV Finserve</span>
                    </div>
                    <div className="w-full">
                        <h3 className="text-xl font-semibold mb-3 text-left lg:text-right">Signup Our Newsletter</h3>
                        <form className="flex w-full max-w-md ml-auto">
                            <Input
                                type="email"
                                placeholder="Write E-Mail Address"
                                className="bg-white border-none text-gray-900 placeholder:text-gray-500 rounded-r-none focus-visible:ring-offset-0 focus-visible:ring-accent"
                                style={{ borderRadius: '4px 0 0 4px', height: '50px' }}
                            />
                            <Button
                                type="submit"
                                className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 font-bold rounded-l-none"
                                style={{ borderRadius: '0 4px 4px 0', height: '50px' }}
                            >
                                GO!
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-700"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-12">
                    <div className="lg:col-span-5">
                       <p className="text-gray-400 mb-6 leading-relaxed">
                            Welcome to RV Finserve, your one-stop solution for various loans with competitive interest rates from leading banks. Your financial goals, our priority
                        </p>
                        <div className="flex items-start mb-4 space-x-3">
                            <MapPin className="text-primary mt-1 shrink-0" size={20} />
                            <p className="text-gray-400">Office No 207 2nd Floor, Commercial Complex, Chandra Bhavan, Old Mumbai - Pune Hwy, Pimpri-Chinchwad, Maharashtra 411018</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="text-primary shrink-0" size={20} />
                            <p className="text-gray-400">8208918825</p>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:justify-self-end">
                        <ul className="space-y-3">
                            <li><Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"><ArrowRight size={14} className="mr-2 text-primary" />Home</Link></li>
                            <li><Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"><ArrowRight size={14} className="mr-2 text-primary" />Services</Link></li>
                            <li><Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"><ArrowRight size={14} className="mr-2 text-primary" />About Us</Link></li>
                            <li><Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"><ArrowRight size={14} className="mr-2 text-primary" />News</Link></li>
                            <li><Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"><ArrowRight size={14} className="mr-2 text-primary" />FAQ</Link></li>
                            <li><Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"><ArrowRight size={14} className="mr-2 text-primary" />Contact Us</Link></li>
                        </ul>
                    </div>
                    
                    <div className="lg:col-span-2 lg:justify-self-end">
                        <ul className="space-y-3">
                            <li><Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"><ArrowRight size={14} className="mr-2 text-primary" />Terms & Conditions</Link></li>
                            <li><Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"><ArrowRight size={14} className="mr-2 text-primary" />Privacy Policy</Link></li>
                            <li><Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"><ArrowRight size={14} className="mr-2 text-primary" />Disclaimer</Link></li>
                            <li><Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"><ArrowRight size={14} className="mr-2 text-primary" />Refund Policy</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3 lg:justify-self-end">
                        <ul className="space-y-4">
                            <li><Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 font-medium"><Facebook className="mr-4" />FACEBOOK</Link></li>
                            <li><Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 font-medium"><Youtube className="mr-4" />YOUTUBE</Link></li>
                            <li><Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 font-medium"><Twitter className="mr-4" />TWITTER</Link></li>
                            <li><Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 font-medium"><Linkedin className="mr-4" />LINKEDIN</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700">
                <div className="container mx-auto px-4 py-5">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-gray-500">
                        <p>Copyright 2026 | RV Finserve</p>
                        <div className="mt-2 md:mt-0">
                            <Link href="#" className="hover:text-white transition-colors duration-200">Terms of use</Link>
                            <span className="mx-2">|</span>
                            <Link href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;