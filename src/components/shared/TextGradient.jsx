import PropTypes from "prop-types"

const TextGradient = ({ children, className, hover = false }) => {
  const gradient = `bg-gradient-to-tr from-[#D761F7] via-[#7613F1] to-[#520E9D]`
  const gradientHover =
    "hover:bg-gradient-to-tr hover:from-[#D761F7] hover:via-[#7613F1] hover:to-[#520E9D]"

  return (
    <span
      className={`${
        hover ? `${gradientHover} bg-white` : gradient
      } text-transparent inline-block bg-clip-text ${className}`}
    >
      {children}
    </span>
  )
}

TextGradient.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
}

export default TextGradient
