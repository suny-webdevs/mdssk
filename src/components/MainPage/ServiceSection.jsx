import ServiceCard from "../shared/Cards/ServiceCard";
import PageWrapper from "../shared/PageWrapper";
import SectionTitle from "../shared/SectionTitle";
import { HiChip } from "react-icons/hi";

const services = [
  {
    title: "Front-end",
    description:
      "Building intuitive, responsive, and user-friendly web interfaces with clean and efficient code.",
  },
  {
    title: "Back-end",
    description:
      "Powering seamless experiences with efficient, secure, and scalable backend solutions.",
  },
  {
    title: "Full Stack",
    description:
      "Bridging front and back—crafting seamless, scalable, and dynamic web solutions.",
  },
];

const ServiceSection = () => {
  return (
    <section id="services">
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
    </section>
  );
};

export default ServiceSection;
