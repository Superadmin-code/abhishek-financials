"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface LoanProduct {
  iconUrl: string;
  title: string;
  description: string;
  href: string;
}

const loanProductsData: LoanProduct[] = [
  {
    iconUrl: 'https://rvfinserve.in/wp-content/uploads/2017/01/mortgage.svg',
    title: 'Home Loan',
    description: 'Get your dream home with our easy and flexible home loan options. Quick approval process!',
    href: '#',
  },
  {
    iconUrl: 'https://rvfinserve.in/wp-content/uploads/2017/01/piggy-bank.svg',
    title: 'Education Loan',
    description: 'Achieve your study goals with our easy education loans. Quick approval and flexible terms!',
    href: '#',
  },
  {
    iconUrl: 'https://rvfinserve.in/wp-content/uploads/2017/01/loan.svg',
    title: 'Business Loan',
    description: 'Grow your business with our easy business loans. Quick approval and flexible repayment options!',
    href: '#',
  },
];

const LoanProductCard = ({ iconUrl, title, description, href, index }: LoanProduct & { index: number }) => {
  const [cardRef, cardInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div 
      ref={cardRef}
      className="bg-card text-center p-10 rounded-lg shadow-lg border border-border group"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={cardInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1 
      } : { 
        opacity: 0, 
        y: 50, 
        scale: 0.9 
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      whileHover={{ 
        y: -20,
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
        transition: { 
          duration: 0.3,
          type: "spring",
          stiffness: 300
        }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className="mb-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={cardInView ? { 
          scale: 1, 
          rotate: 0 
        } : { 
          scale: 0, 
          rotate: -180 
        }}
        transition={{
          duration: 0.8,
          delay: 0.3 + index * 0.2,
          type: "spring",
          stiffness: 200
        }}
        whileHover={{ 
          scale: 1.2,
          rotate: [0, -10, 10, 0],
          transition: { duration: 0.6 }
        }}
      >
        <Image
          src={iconUrl}
          alt={`${title} icon`}
          width={64}
          height={64}
          className="mx-auto"
        />
      </motion.div>
      
      <motion.h3 
        className="text-2xl font-semibold text-primary mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{
          duration: 0.5,
          delay: 0.5 + index * 0.2,
        }}
        whileHover={{ 
          scale: 1.05,
          color: "#2F6EF3",
          transition: { duration: 0.2 }
        }}
      >
        <Link href={href} className="hover:text-accent transition-colors">
          {title}
        </Link>
      </motion.h3>
      
      <motion.p 
        className="text-foreground leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.5,
          delay: 0.7 + index * 0.2,
        }}
      >
        {description}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{
          duration: 0.4,
          delay: 0.9 + index * 0.2,
        }}
      >
        <Link 
          href={href} 
          className="font-medium text-primary border-b border-primary pb-0.5 hover:text-accent hover:border-accent transition-colors inline-block group-hover:translate-x-2 transition-transform duration-300"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.span>
        </Link>
      </motion.div>
      
      {/* Floating background elements */}
      <motion.div
        className="absolute top-4 right-4 w-3 h-3 bg-accent/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-2 h-2 bg-primary/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1 + index * 0.5,
        }}
      />
    </motion.div>
  );
};

const LoanProducts = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-5" ref={ref}>
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl font-semibold text-primary mb-6"
            variants={headerVariants}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(47, 110, 243, 0.3)"
            }}
          >
            Find Loan Products We Offers
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We will match you with a loan program that meet your financial need. In short term liquidity, by striving to make funds available to them{' '}
            <motion.strong 
              className="font-semibold text-slate-800"
              whileHover={{
                color: "#2F6EF3",
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              within 24 hours of application.
            </motion.strong>
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {loanProductsData.map((product, index) => (
            <LoanProductCard key={product.title} {...product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LoanProducts;