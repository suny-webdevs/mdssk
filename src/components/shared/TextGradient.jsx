import PropTypes from "prop-types"

const TextGradient = ({ children, className, hover = false }) => {
  const gradient = `bg-gradient-to-tr from-[#eb75b6] to-[#6e3deb]`
  const gradientHover =
    "hover:bg-gradient-to-tr hover:from-[#EF5F57] hover:to-[#6600FF]"

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
