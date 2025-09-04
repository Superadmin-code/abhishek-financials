import { db } from '@/db';
import { settings } from '@/db/schema';

async function main() {
    const sampleSettings = [
        // Contact Category
        {
            key: 'phone',
            value: '+91-11-4567-8901',
            category: 'contact',
            description: 'Primary business phone number',
            createdAt: new Date('2024-01-10').toISOString(),
            updatedAt: new Date('2024-01-10').toISOString(),
        },
        {
            key: 'email',
            value: 'info@abhishekfinancial.com',
            category: 'contact',
            description: 'Primary business email address',
            createdAt: new Date('2024-01-10').toISOString(),
            updatedAt: new Date('2024-01-10').toISOString(),
        },
        {
            key: 'whatsapp_number',
            value: '+91-98765-43210',
            category: 'contact',
            description: 'WhatsApp business number for quick support',
            createdAt: new Date('2024-01-10').toISOString(),
            updatedAt: new Date('2024-01-10').toISOString(),
        },
        {
            key: 'toll_free_number',
            value: '1800-123-4567',
            category: 'contact',
            description: 'Toll-free customer support number',
            createdAt: new Date('2024-01-10').toISOString(),
            updatedAt: new Date('2024-01-10').toISOString(),
        },

        // Office Category
        {
            key: 'address',
            value: 'B-204, Sector 18, Noida, Uttar Pradesh',
            category: 'office',
            description: 'Complete office address',
            createdAt: new Date('2024-01-11').toISOString(),
            updatedAt: new Date('2024-01-11').toISOString(),
        },
        {
            key: 'city',
            value: 'Noida',
            category: 'office',
            description: 'Office city',
            createdAt: new Date('2024-01-11').toISOString(),
            updatedAt: new Date('2024-01-11').toISOString(),
        },
        {
            key: 'state',
            value: 'Uttar Pradesh',
            category: 'office',
            description: 'Office state',
            createdAt: new Date('2024-01-11').toISOString(),
            updatedAt: new Date('2024-01-11').toISOString(),
        },
        {
            key: 'pincode',
            value: '201301',
            category: 'office',
            description: 'Office postal code',
            createdAt: new Date('2024-01-11').toISOString(),
            updatedAt: new Date('2024-01-11').toISOString(),
        },
        {
            key: 'landmark',
            value: 'Near Metro Station, Opposite City Centre Mall',
            category: 'office',
            description: 'Office landmark for easy location',
            createdAt: new Date('2024-01-11').toISOString(),
            updatedAt: new Date('2024-01-11').toISOString(),
        },
        {
            key: 'office_hours',
            value: 'Monday to Saturday: 9:00 AM - 6:00 PM',
            category: 'office',
            description: 'Regular business hours',
            createdAt: new Date('2024-01-11').toISOString(),
            updatedAt: new Date('2024-01-11').toISOString(),
        },
        {
            key: 'branch_timing',
            value: 'Mon-Fri: 9:30 AM - 5:30 PM, Sat: 10:00 AM - 4:00 PM, Sun: Closed',
            category: 'office',
            description: 'Detailed branch operating hours',
            createdAt: new Date('2024-01-11').toISOString(),
            updatedAt: new Date('2024-01-11').toISOString(),
        },

        // Social Category
        {
            key: 'facebook_url',
            value: 'https://www.facebook.com/abhishekfinancial',
            category: 'social',
            description: 'Official Facebook page URL',
            createdAt: new Date('2024-01-12').toISOString(),
            updatedAt: new Date('2024-01-12').toISOString(),
        },
        {
            key: 'twitter_url',
            value: 'https://www.twitter.com/abhishek_finance',
            category: 'social',
            description: 'Official Twitter profile URL',
            createdAt: new Date('2024-01-12').toISOString(),
            updatedAt: new Date('2024-01-12').toISOString(),
        },
        {
            key: 'linkedin_url',
            value: 'https://www.linkedin.com/company/abhishek-financial-solutions',
            category: 'social',
            description: 'Official LinkedIn company page URL',
            createdAt: new Date('2024-01-12').toISOString(),
            updatedAt: new Date('2024-01-12').toISOString(),
        },
        {
            key: 'instagram_url',
            value: 'https://www.instagram.com/abhishekfinancial',
            category: 'social',
            description: 'Official Instagram profile URL',
            createdAt: new Date('2024-01-12').toISOString(),
            updatedAt: new Date('2024-01-12').toISOString(),
        },
        {
            key: 'youtube_url',
            value: 'https://www.youtube.com/c/AbhishekFinancialSolutions',
            category: 'social',
            description: 'Official YouTube channel URL',
            createdAt: new Date('2024-01-12').toISOString(),
            updatedAt: new Date('2024-01-12').toISOString(),
        },

        // General Category
        {
            key: 'company_name',
            value: 'Abhishek Financial Solutions',
            category: 'general',
            description: 'Official company name',
            createdAt: new Date('2024-01-13').toISOString(),
            updatedAt: new Date('2024-01-13').toISOString(),
        },
        {
            key: 'established_year',
            value: '2015',
            category: 'general',
            description: 'Year company was established',
            createdAt: new Date('2024-01-13').toISOString(),
            updatedAt: new Date('2024-01-13').toISOString(),
        },
        {
            key: 'license_number',
            value: 'NBFC-MFI-2015/AFS/001234',
            category: 'general',
            description: 'RBI license number for financial services',
            createdAt: new Date('2024-01-13').toISOString(),
            updatedAt: new Date('2024-01-13').toISOString(),
        },
        {
            key: 'tagline',
            value: 'Your Trusted Partner for Financial Growth',
            category: 'general',
            description: 'Company tagline or slogan',
            createdAt: new Date('2024-01-13').toISOString(),
            updatedAt: new Date('2024-01-13').toISOString(),
        },
        {
            key: 'about_text',
            value: 'Abhishek Financial Solutions has been serving customers since 2015, providing comprehensive financial services including home loans, business loans, education loans, and personal loans. With over 9 years of experience, we pride ourselves on transparent processes, competitive interest rates, and exceptional customer service. Our team of certified financial advisors helps clients make informed decisions for their financial future.',
            category: 'general',
            description: 'Complete about us text for the company',
            createdAt: new Date('2024-01-13').toISOString(),
            updatedAt: new Date('2024-01-13').toISOString(),
        }
    ];

    await db.insert(settings).values(sampleSettings);
    
    console.log('✅ Settings seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});