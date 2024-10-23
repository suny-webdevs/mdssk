import ServiceCard from "../shared/Cards/ServiceCard";
import PageWrapper from "../shared/PageWrapper";
import SectionTitle from "../shared/SectionTitle";
import { HiChip } from "react-icons/hi";

const services = [
  {
    title: "Design",
    description:
      "I specialize in creating visually stunning and user-friendly designs. I specialize in creating visually stunning and user-friendly designs.",
  },
  {
    title: "Development",
    description:
      "I specialize in creating visually stunning and user-friendly designs. I specialize in creating visually stunning ",
  },
  {
    title: "Marketing",
    description:
      "I specialize in creating visually stunning and user-friendly designs. I specialize in creating visually stunning ",
  },
];

const ServiceSection = () => {
  return (
    <PageWrapper className="grid grid-cols-1 gap-10 md:grid-cols-3">
      <div>
        <SectionTitle
          icon={<HiChip className="text-lg" />}
          tag="services"
          title="what i"
          gradientText="do"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-5">
        {services.map(({ title, description }, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={title}
            description={description}
          />
        ))}
      </div>
    </PageWrapper>
  );
};

export default ServiceSection;
