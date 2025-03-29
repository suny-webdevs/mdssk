import PropTypes from "prop-types";
import TextGradient from "./TextGradient";
import { useRouter } from "next/navigation";

const MenuLinks = ({ menuStyle, linkStyle, links, icon }) => {
  const router = useRouter();

  const handleNavRoute = (link) => {
    router.push(`#${link}`);
    document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={menuStyle}>
      {links.map((link, index) => (
        <button
          key={index}
          onClick={() => handleNavRoute(link?.href)}
          className={linkStyle}
        >
          {icon && icon} <TextGradient hover>{link?.title}</TextGradient>
        </button>
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
