import { db } from '@/db';
import { emiCalculations } from '@/db/schema';

async function main() {
    // EMI Calculation Formula: [P x R x (1+R)^N] / [(1+R)^N-1]
    // Where P = Principal, R = Monthly Interest Rate, N = Number of months
    
    function calculateEMI(principal: number, annualRate: number, months: number) {
        const monthlyRate = annualRate / (12 * 100);
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                   (Math.pow(1 + monthlyRate, months) - 1);
        const totalAmount = emi * months;
        const totalInterest = totalAmount - principal;
        
        return {
            emiAmount: Math.round(emi * 100) / 100,
            totalAmount: Math.round(totalAmount * 100) / 100,
            totalInterest: Math.round(totalInterest * 100) / 100
        };
    }

    const sampleCalculations = [
        {
            amount: 500000,
            tenureMonths: 60,
            interestRate: 10.5,
            userIp: '192.168.1.15',
            createdAt: new Date('2024-12-05T14:30:00.000Z').toISOString(),
            ...calculateEMI(500000, 10.5, 60)
        },
        {
            amount: 1000000,
            tenureMonths: 120,
            interestRate: 9.2,
            userIp: '203.145.67.89',
            createdAt: new Date('2024-12-08T09:15:00.000Z').toISOString(),
            ...calculateEMI(1000000, 9.2, 120)
        },
        {
            amount: 2000000,
            tenureMonths: 180,
            interestRate: 8.5,
            userIp: '106.51.78.142',
            createdAt: new Date('2024-12-12T16:45:00.000Z').toISOString(),
            ...calculateEMI(2000000, 8.5, 180)
        },
        {
            amount: 3500000,
            tenureMonths: 240,
            interestRate: 11.0,
            userIp: '157.32.104.225',
            createdAt: new Date('2024-12-15T11:20:00.000Z').toISOString(),
            ...calculateEMI(3500000, 11.0, 240)
        },
        {
            amount: 5000000,
            tenureMonths: 360,
            interestRate: 8.5,
            userIp: '49.207.45.168',
            createdAt: new Date('2024-12-18T13:10:00.000Z').toISOString(),
            ...calculateEMI(5000000, 8.5, 360)
        },
        {
            amount: 1500000,
            tenureMonths: 36,
            interestRate: 13.5,
            userIp: '122.161.89.203',
            createdAt: new Date('2024-12-20T08:30:00.000Z').toISOString(),
            ...calculateEMI(1500000, 13.5, 36)
        },
        {
            amount: 750000,
            tenureMonths: 84,
            interestRate: 12.0,
            userIp: '175.101.23.67',
            createdAt: new Date('2024-12-22T15:25:00.000Z').toISOString(),
            ...calculateEMI(750000, 12.0, 84)
        },
        {
            amount: 2500000,
            tenureMonths: 144,
            interestRate: 9.8,
            userIp: '114.79.156.234',
            createdAt: new Date('2024-12-25T10:45:00.000Z').toISOString(),
            ...calculateEMI(2500000, 9.8, 144)
        },
        {
            amount: 800000,
            tenureMonths: 24,
            interestRate: 11.5,
            userIp: '61.95.187.112',
            createdAt: new Date('2024-12-28T17:15:00.000Z').toISOString(),
            ...calculateEMI(800000, 11.5, 24)
        },
        {
            amount: 4200000,
            tenureMonths: 300,
            interestRate: 9.0,
            userIp: '182.73.248.91',
            createdAt: new Date('2024-12-30T12:00:00.000Z').toISOString(),
            ...calculateEMI(4200000, 9.0, 300)
        }
    ];

    await db.insert(emiCalculations).values(sampleCalculations);
    
    console.log('✅ EMI calculations seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});