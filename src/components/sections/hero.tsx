import React from 'react';

const HeroSection = () => {
  const bgImageUrl = "https://rvfinserve.in/wp-content/uploads/2025/02/main-slider-1-1-1.jpg";

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

      <div className="relative min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="max-w-[1200px] mx-auto px-5 w-full">
          <div className="max-w-xl text-left">
            <h1 className="text-5xl font-bold leading-tight text-white mb-6">
              Simple &amp; Secure Payment Process
            </h1>
            <a
              href="https://rvfinserve.in/?page_id=1904"
              className="inline-block bg-accent text-accent-foreground py-[15px] px-[30px] rounded-[4px] text-sm font-medium uppercase tracking-[0.5px] shadow-[0_2px_10px_rgba(233,60,146,0.3)] transition-all duration-300 ease-in-out hover:bg-[#d62d7e] hover:-translate-y-0.5"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;