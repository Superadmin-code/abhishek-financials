import Image from 'next/image';
import Link from 'next/link';

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

const LoanProductCard = ({ iconUrl, title, description, href }: LoanProduct) => (
  <div className="bg-card text-center p-10 rounded-lg shadow-lg border border-border transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
    <div className="mb-10">
      <Image
        src={iconUrl}
        alt={`${title} icon`}
        width={64}
        height={64}
        className="mx-auto"
      />
    </div>
    <h3 className="text-2xl font-semibold text-primary mb-4">
      <Link href={href} className="hover:text-accent transition-colors">
        {title}
      </Link>
    </h3>
    <p className="text-foreground leading-relaxed mb-6">
      {description}
    </p>
    <Link href={href} className="font-medium text-primary border-b border-primary pb-0.5 hover:text-accent hover:border-accent transition-colors">
      Read More
    </Link>
  </div>
);

const LoanProducts = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-semibold text-primary mb-6">
            Find Loan Products We Offers
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            We will match you with a loan program that meet your financial need. In short term liquidity, by striving to make funds available to them{' '}
            <strong className="font-semibold text-slate-800">within 24 hours of application.</strong>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanProductsData.map((product) => (
            <LoanProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanProducts;