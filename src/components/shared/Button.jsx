import PropTypes from "prop-types";

const Button = ({
  type = "button",
  className,
  children,
  onClick,
  onBlur,
  round = false,
  large = false,
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onBlur={onBlur}
      className={`${
        large ? "py-3" : "py-2"
      } ${round ? "rounded-full px-2 py-2" : "rounded-3xl px-5 md:px-6"} font-outfit text-sm font-medium uppercase tracking-widest md:text-base ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  round: PropTypes.bool,
  large: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  props: PropTypes.object,
};

export default Button;
