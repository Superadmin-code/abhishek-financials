import { db } from '@/db';
import { blogPosts } from '@/db/schema';

async function main() {
    const sampleBlogPosts = [
        {
            title: '5 Essential Tips for Accurate EMI Calculation Before Applying for a Loan',
            slug: '5-essential-tips-accurate-emi-calculation-loan-application',
            excerpt: 'Learn how to calculate your EMI accurately and avoid financial surprises. Our comprehensive guide helps you understand the key factors that affect your monthly payments.',
            content: 'Calculating your Equated Monthly Installment (EMI) accurately is crucial before applying for any loan. Many borrowers make the mistake of underestimating their monthly financial commitment, leading to payment difficulties later. Here are five essential tips to ensure accurate EMI calculation. First, always factor in the processing fees and other charges that banks add to your principal amount. These can increase your total loan amount significantly. Second, consider variable interest rates and their potential impact on your EMI over time. Fixed rates provide certainty, but variable rates might start lower. Third, use multiple EMI calculators to cross-verify your results. Different lenders may have slightly different calculation methods. Fourth, account for your existing EMIs and monthly expenses to determine your actual repayment capacity. Finally, always keep a buffer of at least 20% above your calculated EMI to handle unexpected financial situations. Remember, a lower EMI might seem attractive, but it often means a longer tenure and higher total interest payment.',
            author: 'Priya Sharma, Financial Advisor',
            featuredImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
            category: 'Finance Tips',
            tags: ['emi-calculator', 'financial-planning', 'interest-rates'],
            isPublished: true,
            publishedAt: new Date('2024-11-15').toISOString(),
            createdAt: new Date('2024-11-10').toISOString(),
            updatedAt: new Date('2024-11-15').toISOString(),
        },
        {
            title: 'Complete Guide to Home Loan Eligibility Criteria in 2024',
            slug: 'complete-guide-home-loan-eligibility-criteria-2024',
            excerpt: 'Understand the latest home loan eligibility requirements and boost your chances of approval. Get insights into income requirements, credit scores, and documentation needed.',
            content: 'Home loan eligibility has evolved significantly in 2024, with lenders becoming more stringent about creditworthiness while also introducing flexible schemes for different income segments. Your monthly income should typically be at least 3-4 times your proposed EMI amount. Most lenders prefer a minimum credit score of 750, though some may approve loans with scores as low as 650 with higher interest rates. Age is another crucial factor - you should be between 21-65 years for salaried individuals and 25-70 years for self-employed applicants. Employment stability matters significantly; salaried individuals need at least 2 years of work experience, while self-employed individuals should have a stable business for minimum 3 years. Your existing debt-to-income ratio should not exceed 40-50%. Property-related factors include clear title, approved construction, and proper documentation. Additionally, your down payment capacity (typically 10-20% of property value) and relationship with the bank can influence approval. Co-applicants can help improve eligibility by combining incomes and sharing repayment responsibility.',
            author: 'Rajesh Kumar, Home Loan Specialist',
            featuredImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
            category: 'Loans',
            tags: ['home-loans', 'documentation', 'financial-planning'],
            isPublished: true,
            publishedAt: new Date('2024-11-20').toISOString(),
            createdAt: new Date('2024-11-18').toISOString(),
            updatedAt: new Date('2024-11-20').toISOString(),
        },
        {
            title: 'Business Loan Documentation Checklist: Everything You Need to Know',
            slug: 'business-loan-documentation-checklist-complete-guide',
            excerpt: 'Navigate business loan applications with confidence using our comprehensive documentation checklist. Avoid delays and rejections with proper paperwork preparation.',
            content: 'Business loan documentation can be overwhelming, but proper preparation ensures faster approval and better terms. Essential documents include business registration certificates, GST registration, and trade licenses relevant to your industry. Financial documents are critical - provide audited financial statements for the last 2-3 years, including profit & loss statements, balance sheets, and cash flow statements. Bank statements for business and personal accounts (last 6-12 months) showcase your transaction history and cash flow patterns. Income tax returns for both business and promoters demonstrate tax compliance and income consistency. Project reports and detailed business plans help lenders understand your growth strategy and repayment capacity. For manufacturing businesses, provide pollution clearance certificates and factory licenses. Partnership firms need partnership deeds, while private limited companies require MOA and AOA. Personal guarantees from promoters and collateral documents (if applicable) provide additional security to lenders. Keep all documents updated and properly notarized. Digital copies should be clear and readable. Having a well-organized document folder can significantly speed up the approval process.',
            author: 'Meera Patel, Business Finance Consultant',
            featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
            category: 'Documentation',
            tags: ['documentation', 'financial-planning'],
            isPublished: false,
            publishedAt: null,
            createdAt: new Date('2024-11-22').toISOString(),
            updatedAt: new Date('2024-11-22').toISOString(),
        },
        {
            title: 'Personal Finance Planning: Building Wealth Through Smart Loan Management',
            slug: 'personal-finance-planning-wealth-building-loan-management',
            excerpt: 'Master the art of using loans strategically to build wealth. Learn how to balance debt and investments for optimal financial growth.',
            content: 'Strategic loan management is a cornerstone of effective personal finance planning. The key is understanding good debt versus bad debt. Home loans and education loans are typically considered good debt as they either appreciate in value or increase earning potential. Personal loans for consumption should be minimized. Create a comprehensive debt repayment strategy - prioritize high-interest debt while maintaining minimum payments on others. Consider debt consolidation if you have multiple high-interest loans. Emergency funds are crucial - maintain 6-12 months of expenses before taking additional loans. Investment timing matters; if you can earn returns higher than your loan interest rate (after tax), consider investing while continuing loan payments. Tax benefits on home loans (up to ₹2 lakhs on principal and ₹2 lakhs on interest) can significantly reduce your effective interest cost. Regular prepayments can save substantial interest, but ensure you have adequate liquidity first. Monitor your credit utilization and maintain a healthy credit mix. Use loan proceeds wisely - avoid lifestyle inflation and focus on wealth-building assets.',
            author: 'Suresh Gupta, Certified Financial Planner',
            featuredImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e',
            category: 'Finance Tips',
            tags: ['financial-planning', 'interest-rates'],
            isPublished: true,
            publishedAt: new Date('2024-12-01').toISOString(),
            createdAt: new Date('2024-11-28').toISOString(),
            updatedAt: new Date('2024-12-01').toISOString(),
        },
        {
            title: 'Loan Interest Rates Comparison 2024: Finding the Best Deals',
            slug: 'loan-interest-rates-comparison-2024-best-deals',
            excerpt: 'Compare current loan interest rates across different lenders and loan types. Make informed decisions with our detailed rate analysis and tips for securing better rates.',
            content: 'Interest rates vary significantly across lenders and loan types, making comparison crucial for borrowers. Home loan rates currently range from 8.5% to 11.5% depending on your profile and lender. Public sector banks often offer lower rates but have stricter eligibility criteria, while private banks and NBFCs provide faster processing with slightly higher rates. Personal loan rates range from 10.5% to 24%, largely dependent on your credit score and income stability. Business loan rates typically fall between 11% to 20% for secured loans and can go up to 30% for unsecured business loans. Several factors influence the rates you receive: credit score (750+ gets best rates), income stability, existing relationship with lender, loan amount, and tenure. To secure better rates, maintain a high credit score, provide comprehensive income proof, and consider co-applicants. Negotiate with multiple lenders and leverage existing banking relationships. Consider floating rates if you expect rates to decline, but choose fixed rates in rising rate environments. Processing fees, prepayment charges, and other costs should factor into your total cost comparison.',
            author: 'Anita Verma, Loan Advisor',
            featuredImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
            category: 'Loans',
            tags: ['interest-rates', 'home-loans'],
            isPublished: true,
            publishedAt: new Date('2024-12-05').toISOString(),
            createdAt: new Date('2024-12-03').toISOString(),
            updatedAt: new Date('2024-12-05').toISOString(),
        },
        {
            title: 'Maximizing Tax Benefits on Loans: A Complete Guide for 2024-25',
            slug: 'maximizing-tax-benefits-loans-complete-guide-2024-25',
            excerpt: 'Unlock maximum tax savings with strategic loan planning. Comprehensive guide covering Section 80C, 24(b), and other tax benefits available on different types of loans.',
            content: 'Tax benefits on loans can significantly reduce your effective borrowing cost, making them powerful wealth-building tools when used strategically. Home loans offer the most substantial benefits - Section 80C allows deduction up to ₹1.5 lakhs on principal repayment, while Section 24(b) permits up to ₹2 lakhs deduction on interest payments. For first-time homebuyers, additional deduction of ₹50,000 under Section 80EE is available for loans up to ₹35 lakhs. Education loans provide complete interest deduction under Section 80E with no upper limit for 8 years or until repayment completion. Business loans offer interest deductions as business expenses, reducing taxable business income. Personal loans generally do not qualify for tax benefits unless used for specific purposes like home renovation or business needs. To maximize benefits, time your loan disbursements and repayments strategically. Consider joint ownership to claim benefits for multiple family members. Maintain proper documentation and receipts for all claims. Pre-EMI interest during construction can be claimed once construction completes. Remember, tax benefits should supplement, not drive, your borrowing decisions.',
            author: 'Vikram Singh, Tax Consultant',
            featuredImage: 'https://images.unsplash.com/photo-1554224154-26032fced8bd',
            category: 'Tax Planning',
            tags: ['financial-planning', 'home-loans'],
            isPublished: false,
            publishedAt: null,
            createdAt: new Date('2024-12-07').toISOString(),
            updatedAt: new Date('2024-12-07').toISOString(),
        }
    ];

    await db.insert(blogPosts).values(sampleBlogPosts);
    
    console.log('✅ Blog posts seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});