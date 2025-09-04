import { db } from '@/db';
import { testimonials } from '@/db/schema';

async function main() {
    const sampleTestimonials = [
        {
            name: 'Rajesh Kumar',
            designation: 'Business Owner',
            company: 'Kumar Enterprises',
            rating: 5,
            review: 'Abhishek Financial Solutions made my business loan approval incredibly smooth. Their team processed my application in just 3 days, which was much faster than other lenders. The interest rates were competitive and the staff was extremely helpful throughout the process.',
            imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
            isFeatured: true,
            createdAt: new Date('2024-11-15').toISOString(),
            updatedAt: new Date('2024-11-15').toISOString(),
        },
        {
            name: 'Dr. Priya Sharma',
            designation: 'Medical Practitioner',
            company: 'City Hospital',
            rating: 5,
            review: 'I needed a personal loan for medical equipment and Abhishek Financial Solutions delivered exactly what I needed. The documentation process was hassle-free and their customer service team was always available to answer my queries. Highly recommended!',
            imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
            isFeatured: false,
            createdAt: new Date('2024-11-20').toISOString(),
            updatedAt: new Date('2024-11-20').toISOString(),
        },
        {
            name: 'Amit Patel',
            designation: 'Software Engineer',
            company: 'TechCorp Solutions',
            rating: 4,
            review: 'Getting my home loan approved was a breeze with Abhishek Financial Solutions. They offered competitive rates and the entire process was transparent. The team guided me through each step and made sure I understood all terms clearly.',
            imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            isFeatured: true,
            createdAt: new Date('2024-11-25').toISOString(),
            updatedAt: new Date('2024-11-25').toISOString(),
        },
        {
            name: 'CA Meera Gupta',
            designation: 'Chartered Accountant',
            company: 'Gupta & Associates',
            rating: 5,
            review: 'As a CA, I appreciate attention to detail and professionalism. Abhishek Financial Solutions exceeded my expectations with their business loan services. Quick processing, minimal paperwork, and excellent customer support made the experience outstanding.',
            imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
            isFeatured: true,
            createdAt: new Date('2024-12-01').toISOString(),
            updatedAt: new Date('2024-12-01').toISOString(),
        },
        {
            name: 'Suresh Agarwal',
            designation: 'Restaurant Owner',
            company: 'Spice Garden Restaurant',
            rating: 4,
            review: 'I approached Abhishek Financial Solutions for expanding my restaurant business. Their team understood my requirements perfectly and helped me secure a business loan with favorable terms. The processing was quick and staff was very supportive.',
            imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            isFeatured: false,
            createdAt: new Date('2024-12-05').toISOString(),
            updatedAt: new Date('2024-12-05').toISOString(),
        },
        {
            name: 'Neha Singh',
            designation: 'Marketing Manager',
            company: 'Digital Ventures Pvt Ltd',
            rating: 5,
            review: 'Abhishek Financial Solutions helped me get a personal loan for my wedding expenses. The interest rates were very competitive and the approval process was incredibly fast. Their customer service team was always responsive and helpful.',
            imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b3fd?w=150&h=150&fit=crop&crop=face',
            isFeatured: false,
            createdAt: new Date('2024-12-08').toISOString(),
            updatedAt: new Date('2024-12-08').toISOString(),
        },
        {
            name: 'Vikram Malhotra',
            designation: 'Civil Engineer',
            company: 'Malhotra Construction',
            rating: 4,
            review: 'I was looking for a home loan with the best rates in the market. Abhishek Financial Solutions not only provided competitive rates but also ensured a smooth documentation process. Their team is knowledgeable and genuinely cares about customer satisfaction.',
            imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
            isFeatured: false,
            createdAt: new Date('2024-12-12').toISOString(),
            updatedAt: new Date('2024-12-12').toISOString(),
        },
        {
            name: 'Anjali Reddy',
            designation: 'Boutique Owner',
            company: 'Fashion Forward Boutique',
            rating: 5,
            review: 'Starting my boutique required significant capital and Abhishek Financial Solutions made it possible with their excellent business loan services. The process was transparent, rates were affordable, and their staff provided exceptional guidance throughout.',
            imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            isFeatured: false,
            createdAt: new Date('2024-12-15').toISOString(),
            updatedAt: new Date('2024-12-15').toISOString(),
        }
    ];

    await db.insert(testimonials).values(sampleTestimonials);
    
    console.log('✅ Testimonials seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});