import PropTypes from "prop-types"
import TextGradient from "./TextGradient"

const SectionTitle = ({ icon, tag, title, gradientText, description }) => {
  return (
    <div>
      <p className="flex items-center gap-2 text-base text-white/50 font-medium uppercase tracking-widest">
        {icon} {tag}
      </p>
      <h1 className="text-6xl text-white font-medium capitalize mt-2">
        {title} <TextGradient>{gradientText}</TextGradient>
      </h1>
      {description && (
        <p className="text-base text-white/70 font-light">{description}</p>
      )}
    </div>
  )
}

SectionTitle.propTypes = {
  tag: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
  gradientText: PropTypes.string,
  description: PropTypes.string,
}

export default SectionTitle
