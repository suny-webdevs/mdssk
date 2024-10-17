import PropTypes from "prop-types"

const Button = ({
  type = "button",
  className,
  children,
  onClick,
  mouseIn,
  mouseOut,
  large = false,
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={mouseIn}
      onMouseLeave={mouseOut}
      className={`${
        large ? "text-xl md:text-2xl" : "text-sm md:text-base"
      } font-outfit font-medium tracking-widest rounded-3xl uppercase px-5 py-1.5 md:px-6 md:py-1.5 ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  mouseIn: PropTypes.func,
  mouseOut: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  large: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  props: PropTypes.object,
}

export default Button
