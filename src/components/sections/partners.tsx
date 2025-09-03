import Image from 'next/image';

interface Partner {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const partnersList: Partner[] = [
  { name: 'Global Community Investor Group', logo: 'https://rvfinserve.in/wp-content/uploads/2016/11/logo-1.png', width: 160, height: 41 },
  { name: 'OSM Worldwide', logo: 'https://rvfinserve.in/wp-content/uploads/2016/11/logo-2.png', width: 154, height: 41 },
  { name: 'FOAL Investor', logo: 'https://rvfinserve.in/wp-content/uploads/2016/11/logo-3.png', width: 150, height: 41 },
  { name: 'Bullsize Investment', logo: 'https://rvfinserve.in/wp-content/uploads/2016/11/logo-4.png', width: 151, height: 41 },
  { name: 'Platinum Finance Sector', logo: 'https://rvfinserve.in/wp-content/uploads/2016/11/logo-5.png', width: 161, height: 41 },
  { name: 'Global Community Investor Group', logo: 'https://rvfinserve.in/wp-content/uploads/2016/11/logo-1.png', width: 160, height: 41 },
];

const Partners = () => {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 sm:grid-cols-3 lg:grid-cols-6 items-center">
          {partnersList.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="flex justify-center">
              <a href="#">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="filter grayscale opacity-70 transition duration-300 ease-in-out hover:filter-none hover:opacity-100"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;