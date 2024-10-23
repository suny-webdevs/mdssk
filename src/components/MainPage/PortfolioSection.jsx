import PortFolioCard from "../shared/Cards/PortFolioCard";
import PageWrapper from "../shared/PageWrapper";
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
    category: "Tour Management System",
    link: "https://tourmasterpro.web.app",
  },
];

const PortfolioSection = () => {
  return (
    <div className="flex flex-col gap-8 bg-primary py-10 md:gap-14 md:py-20">
      <PageWrapper>
        <div className="px-5 pt-5 md:px-0 md:pt-0">
          <SectionTitle
            icon={<BsFolderFill className="text-lg" />}
            tag="portfolio"
            title="recent"
            gradientText="works"
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-2">
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
      </PageWrapper>
    </div>
  );
};

export default PortfolioSection;
