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
    <div className="grid grid-cols-1 gap-8 rounded-2xl bg-primary p-1 md:gap-10 md:p-10">
      <div className="px-5 pt-5 md:px-0 md:pt-0">
        <SectionTitle
          icon={<BsFolderFill className="text-lg" />}
          tag="portfolio"
          title="recent"
          gradientText="works"
        />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map(({ image, title, category, link }, index) => (
          <PortFolioCard
            key={index}
            image={image}
            title={title}
            category={category}
            visitLink={link}
            detailsLink="#link"
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
