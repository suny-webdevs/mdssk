import PropTypes from "prop-types";
import MenuLinks from "./MenuLinks";
import Button from "./Button";
import { HiArrowUpRight } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";

const Menus = ({ className }) => {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "about",
    },
    {
      title: "Services",
      href: "services",
    },
    {
      title: "Portfolio",
      href: "portfolio",
    },
    {
      title: "Contact",
      href: "contact",
    },
  ];

  return (
    <div
      className={`rounded-xl border border-white/10 bg-black p-5 ${className}`}
    >
      <MenuLinks
        links={links}
        menuStyle="flex flex-col justify-center gap-4"
        linkStyle="text-xl uppercase"
      />
      <Button
        className={
          "group flex items-center justify-between bg-white/10 text-white hover:bg-white/20 md:hidden"
        }
      >
        let&apos;s talk{" "}
        <HiArrowUpRight className="hidden text-xl group-hover:flex group-hover:transition-all group-hover:duration-200" />
        <GoDotFill className="text-white/50 group-hover:hidden" />
      </Button>
    </div>
  );
};

Menus.propTypes = {
  className: PropTypes.string,
};

export default Menus;
