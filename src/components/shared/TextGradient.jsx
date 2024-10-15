import PropTypes from "prop-types"

const TextGradient = ({
  children,
  className,
  direction,
  hover = false,
  from,
  via,
  to,
}) => {
  return (
    <span
      className={`${
        hover
          ? `hover:bg-gradient-to-${direction} hover:from-${from} ${
              via && `hover:via-${via}`
            } hover:to-${to} hover:inline-block hover:text-transparent hover:bg-clip-text`
          : `bg-gradient-to-${direction} from-${from} ${
              via && `via-${via}`
            } to-${to} text-transparent inline-block bg-clip-text`
      } ${className}`}
    >
      {children}
    </span>
  )
}

TextGradient.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.string,
  hover: PropTypes.bool,
  from: PropTypes.string,
  via: PropTypes.string,
  to: PropTypes.string,
}

export default TextGradient
