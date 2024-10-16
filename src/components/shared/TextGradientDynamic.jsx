import PropTypes from "prop-types"
import classNames from "classnames"

const TextGradientDynamic = ({
  children,
  className,
  hover,
  direction = "to-r",
  fromColor = "pink-600",
  viaColor,
  toColor = "violet-600",
}) => {
  const baseGradient = `bg-gradient-to-${direction} from-${fromColor} to-${toColor}`
  // Conditionally add via if provided
  const viaGradient = viaColor ? `via-${viaColor}` : ""

  // Class for hover, if enabled
  const hoverClass = hover
    ? `hover:bg-gradient-to-${direction} hover:from-${fromColor} hover:to-${toColor} ${
        viaColor ? `hover:via-${viaColor}` : ""
      }`
    : ""

  return (
    <span
      className={classNames(
        baseGradient,
        viaGradient,
        {
          [hoverClass]: hover,
        },
        "text-transparent inline-block bg-clip-text", // Required classes for gradient text
        className // Additional custom classes
      )}
    >
      {children}
    </span>
  )
}

TextGradientDynamic.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hover: PropTypes.bool,
  direction: PropTypes.string,
  fromColor: PropTypes.string,
  viaColor: PropTypes.string,
}

export default TextGradientDynamic
