import PropTypes from "prop-types";
import TextGradient from "../TextGradient";

const ServiceCard = ({ index, title, description }) => {
  return (
    <div className="w-full animate-gradient rounded-xl bg-gradient-to-r from-from via-via to-to pb-[.125rem] transition-transform duration-200 ease-in-out hover:transform md:h-[10.5rem] md:hover:translate-x-3">
      <div className="grid h-full w-full grid-cols-1 items-center gap-3 rounded-xl bg-[#181a1c] px-7 py-5 md:grid-cols-5">
        <h3 className="col-span-2 flex flex-col gap-2 text-3xl font-medium md:flex-row md:items-center md:gap-5 md:text-2xl">
          <TextGradient className="text-3xl">
            {index < 10 ? "0" : ""}
            {index + 1}/
          </TextGradient>{" "}
          <span>{title}</span>
        </h3>
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
