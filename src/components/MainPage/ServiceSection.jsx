import SectionTitle from "../shared/SectionTitle"
import { HiChip } from "react-icons/hi"

const ServiceSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <SectionTitle
          icon={<HiChip className="text-lg" />}
          tag="services"
          title="what i"
          gradientText="do"
        />
      </div>
      <div></div>
    </div>
  )
}

export default ServiceSection
