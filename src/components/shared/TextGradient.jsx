import PropTypes from "prop-types";

const TextGradient = ({ children, className, hover = false }) => {
  const gradient = `gradient-text animate-gradient`;
  const gradientHover =
    "hover:bg-gradient-to-tr hover:from-[#F761E0] hover:via-[#7613F1] hover:to-[#520E9D]";

  return (
    <span
      className={`${
        hover ? `${gradientHover} bg-white` : gradient
      } inline-block bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
};

TextGradient.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
};

export default TextGradient;
