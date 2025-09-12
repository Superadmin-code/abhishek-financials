import { Navigation } from "@/components/sections/navigation";
import { HeroSection } from "@/components/sections/hero";
import { LoanRates } from "@/components/sections/loan-rates";
import { LoanProducts } from "@/components/sections/loan-products";
import { ApplicationProcess } from "@/components/sections/application-process";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Partners } from "@/components/sections/partners";
import { NewsBlog } from "@/components/sections/news-blog";
import { HelpContact } from "@/components/sections/help-contact";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <LoanRates />
        <LoanProducts />
        <ApplicationProcess />
        <WhyChooseUs />
        <Testimonials />
        <Partners />
        <NewsBlog />
        <HelpContact />
      </main>
      <Footer />
    </div>
  );
}