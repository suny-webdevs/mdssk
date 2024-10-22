import PropTypes from "prop-types";
import TextGradient from "./TextGradient";
const SectionTitle = ({ icon, tag, title, gradientText, description }) => {
  return (
    <div>
      <p className="flex items-center gap-2 text-base font-medium uppercase tracking-widest text-white/50">
        {icon} {tag}
      </p>
      <h1 className="mt-2 text-5xl font-medium capitalize text-white">
        {title} <TextGradient>{gradientText}</TextGradient>
      </h1>
      {description && (
        <p className="text-base font-light text-white/70">{description}</p>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  tag: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
  gradientText: PropTypes.string,
  description: PropTypes.string,
};

export default SectionTitle;
