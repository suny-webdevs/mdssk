import Link from "next/link";
import PropTypes from "prop-types";
import TextGradient from "./TextGradient";

const MenuLinks = ({ menuStyle, linkStyle, links, icon }) => {
  return (
    <div className={menuStyle}>
      {links.map((link, index) => (
        <Link key={index} href={link.href} className={linkStyle}>
          {icon && icon} <TextGradient hover>{link.title}</TextGradient>
        </Link>
      ))}
    </div>
  );
};

MenuLinks.propTypes = {
  links: PropTypes.array,
  menuStyle: PropTypes.string,
  linkStyle: PropTypes.string,
  icon: PropTypes.node,
};

export default MenuLinks;
