import Image from 'next/image';

interface Partner {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const partnersList: Partner[] = [
  { 
    name: 'Global Community Investor Group', 
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/modern-professional-financial-company-lo-78a84e62-20250905163727.jpg', 
    width: 160, 
    height: 80 
  },
  { 
    name: 'OSM Worldwide', 
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/professional-financial-services-logo-for-6a27c0a2-20250905163736.jpg', 
    width: 154, 
    height: 80 
  },
  { 
    name: 'FOAL Investor', 
    logo: 'https://v3.fal.media/files/penguin/x7iQjKKig7NlcwyY7u_yk_output.png', 
    width: 150, 
    height: 80 
  },
  { 
    name: 'Bullsize Investment', 
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/professional-investment-company-logo-for-76fce098-20250905163756.jpg', 
    width: 151, 
    height: 80 
  },
  { 
    name: 'Platinum Finance Sector', 
    logo: 'https://v3.fal.media/files/kangaroo/XBMt1ZPHe_CpZoH1dAn1y_output.png', 
    width: 161, 
    height: 80 
  },
  { 
    name: 'Premium Capital Partners', 
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f545d951-a949-4c13-9eac-3c8cdaf207bc/generated_images/professional-financial-services-logo-for-360a7bd6-20250905163823.jpg', 
    width: 160, 
    height: 80 
  },
];

const Partners = () => {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Trusted Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading financial institutions to provide you with the best loan solutions and competitive rates.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 sm:grid-cols-3 lg:grid-cols-6 items-center">
          {partnersList.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="flex justify-center">
              <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="filter grayscale opacity-70 transition duration-300 ease-in-out hover:filter-none hover:opacity-100 object-contain"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;