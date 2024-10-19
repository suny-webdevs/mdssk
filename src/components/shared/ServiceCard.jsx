import PropTypes from "prop-types";
import TextGradient from "./TextGradient";

const ServiceCard = ({ index, title, description }) => {
  return (
    <div className="animate-gradient w-full rounded-xl bg-gradient-to-r from-[#F761E0] via-[#7613F1] to-[#520E9D] transition-all duration-100 ease-in-out hover:p-[2px] md:h-[170px]">
      <div className="grid h-full w-full grid-cols-1 items-center gap-3 rounded-xl bg-[#181a1c] px-7 py-5 md:grid-cols-5">
        <p className="col-span-2 flex items-center gap-2 text-3xl font-medium md:gap-5 md:text-2xl">
          <TextGradient className="text-3xl">
            {index < 10 ? "0" : ""}
            {index + 1}/
          </TextGradient>{" "}
          <span>{title}</span>
        </p>
        <p className="col-span-3 font-light md:text-lg">{description}</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
