import Link from "next/link";
import TextGradient from "./TextGradient";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-center py-10">
      <p className="tracking-wide md:text-lg">
        &copy; All right reserved{" "}
        <TextGradient>
          <Link href={"/"}>Suny-webDevs</Link>
        </TextGradient>
      </p>
    </div>
  );
};

export default Footer;
