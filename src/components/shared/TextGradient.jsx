import PropTypes from "prop-types";

const TextGradient = ({ children, className, hover = false }) => {
  const gradient = `gradient-text animate-gradient`;
  const gradientHover =
    "hover:bg-gradient-to-tr hover:from-from hover:via-via hover:to-to";

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
