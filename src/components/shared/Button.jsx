import PropTypes from "prop-types"

const Button = ({
  type = "button",
  className,
  children,
  onClick,
  mouseIn,
  mouseOut,
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={mouseIn}
      onMouseLeave={mouseOut}
      className={`font-outfit font-medium tracking-widest rounded-3xl uppercase px-8 py-2 ${className}`}
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
  disabled: PropTypes.bool,
  className: PropTypes.string,
  props: PropTypes.object,
}

export default Button
