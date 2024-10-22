import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import ServiceSection from "./ServiceSection";

const MainPage = () => {
  return (
    <div className="my-10 flex flex-col gap-10 md:gap-14">
      <HeroSection />
      <ServiceSection />
      <PortfolioSection />
    </div>
  );
};

export default MainPage;
