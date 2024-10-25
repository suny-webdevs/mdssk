import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import ServiceSection from "./ServiceSection";

const MainPage = () => {
  return (
    <div className="flex flex-col gap-10 py-10 md:gap-14">
      <HeroSection />
      <ServiceSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default MainPage;
