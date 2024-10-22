import PortFolioCard from "../shared/Cards/PortFolioCard";
import SectionTitle from "../shared/SectionTitle";
import { BsFolderFill } from "react-icons/bs";

const projects = [
  {
    image: "https://i.ibb.co.com/g3HBHtp/taj-apart.png",
    title: "Taj Apart",
    category: "Building Management System",
    link: "https://taj-apart.web.app",
  },
  {
    image: "https://i.ibb.co.com/D1qRky2/tour-master-pro.png",
    title: "Tour Master Pro",
    category: "Travel Agency",
    link: "https://tourmasterpro.web.app",
  },
];

const PortfolioSection = () => {
  return (
    <div className="grid grid-cols-1 gap-5 rounded-2xl bg-primary p-5 md:gap-10 md:p-10">
      <div>
        <SectionTitle
          icon={<BsFolderFill className="text-lg" />}
          tag="portfolio"
          title="recent"
          gradientText="works"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
        {projects.map(({ image, title, category, link }, index) => (
          <PortFolioCard
            key={index}
            image={image}
            title={title}
            category={category}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
