import { db } from '@/db';
import { messages } from '@/db/schema';

async function main() {
    const sampleMessages = [
        {
            name: 'Priya Sharma',
            email: 'priya.sharma@gmail.com',
            phone: '+91 9876543210',
            subject: 'Home Loan Eligibility Query',
            message: 'Hello, I am interested in applying for a home loan. My monthly income is Rs. 65,000 and I am looking for a loan amount of Rs. 45 lakhs. Could you please let me know about the eligibility criteria and required documents? Also, what would be the approximate EMI for this amount?',
            isRead: false,
            createdAt: new Date('2024-12-20T10:30:00.000Z').toISOString(),
            updatedAt: new Date('2024-12-20T10:30:00.000Z').toISOString(),
        },
        {
            name: 'Rajesh Kumar',
            email: 'rajesh.kumar@business.com',
            phone: '+91 9123456789',
            subject: 'Business Loan Documentation Help',
            message: 'I need guidance on the documentation required for a business loan. My company has been running for 3 years and I need Rs. 15 lakhs for expansion. What are the mandatory documents I need to submit?',
            isRead: true,
            createdAt: new Date('2024-12-18T14:45:00.000Z').toISOString(),
            updatedAt: new Date('2024-12-18T16:20:00.000Z').toISOString(),
        },
        {
            name: 'Anita Desai',
            email: 'anita.desai@yahoo.com',
            subject: 'EMI Calculation for Personal Loan',
            message: 'Can you help me calculate the EMI for a personal loan of Rs. 8 lakhs for 5 years? What would be the interest rate and total amount payable?',
            isRead: false,
            createdAt: new Date('2024-12-19T09:15:00.000Z').toISOString(),
            updatedAt: new Date('2024-12-19T09:15:00.000Z').toISOString(),
        },
        {
            name: 'Suresh Patel',
            email: 'suresh.patel@gmail.com',
            phone: '+91 8765432109',
            subject: 'Branch Location in Mumbai',
            message: 'I am looking for your branch locations in Mumbai. I need to visit for loan application submission. Please share the address and contact details.',
            isRead: false,
            createdAt: new Date('2024-12-21T11:20:00.000Z').toISOString(),
            updatedAt: new Date('2024-12-21T11:20:00.000Z').toISOString(),
        },
        {
            name: 'Meena Singh',
            email: 'meena.singh@outlook.com',
            phone: '+91 7654321098',
            subject: 'Education Loan Interest Rates',
            message: 'My daughter got admission in engineering college and the fees is Rs. 12 lakhs for 4 years. What are your current interest rates for education loans? Do you have any special schemes for girl students?',
            isRead: false,
            createdAt: new Date('2024-12-17T16:30:00.000Z').toISOString(),
            updatedAt: new Date('2024-12-17T16:30:00.000Z').toISOString(),
        },
        {
            name: 'Vikram Agarwal',
            email: 'vikram.agarwal@tech.com',
            subject: 'Loan Processing Time Query',
            message: 'I have submitted my home loan application last week. How long does it typically take for loan approval? Can I track the status online?',
            isRead: true,
            createdAt: new Date('2024-12-16T13:10:00.000Z').toISOString(),
            updatedAt: new Date('2024-12-16T17:45:00.000Z').toISOString(),
        },
        {
            name: 'Deepika Reddy',
            email: 'deepika.reddy@gmail.com',
            phone: '+91 9988776655',
            subject: 'Joint Home Loan Application',
            message: 'My husband and I want to apply for a joint home loan. Our combined monthly income is Rs. 1.2 lakhs and we are looking for Rs. 75 lakhs loan. What are the benefits of joint application and what documents do we both need to provide?',
            isRead: false,
            createdAt: new Date('2024-12-22T08:45:00.000Z').toISOString(),
            updatedAt: new Date('2024-12-22T08:45:00.000Z').toISOString(),
        },
        {
            name: 'Amit Joshi',
            email: 'amit.joshi@finance.com',
            subject: 'Prepayment Charges',
            message: 'I have an existing personal loan and want to close it early. What are the prepayment charges? Is there any minimum tenure before I can prepay?',
            isRead: true,
            createdAt: new Date('2024-12-15T12:00:00.000Z').toISOString(),
            updatedAt: new Date('2024-12-15T14:30:00.000Z').toISOString(),
        }
    ];

    await db.insert(messages).values(sampleMessages);
    
    console.log('✅ Messages seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});