import PropTypes from "prop-types"

const PageWrapper = ({ children, className }) => {
  return (
    <div className={`container mx-auto px-5 md:px-0 ${className}`}>
      {children}
    </div>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default PageWrapper
