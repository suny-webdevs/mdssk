"use client";
import Button from "@/components/shared/Button";
import MenuLinks from "@/components/shared/MenuLinks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GoDotFill } from "react-icons/go";
import { HiArrowUpRight } from "react-icons/hi2";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

const MenuPage = () => {
  const router = useRouter();

  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div data-aos="fade-left">
      <div className="relative grid h-screen grid-cols-1 gap-5 md:grid-cols-2">
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute right-5 top-5 z-10 border-2 border-white px-3 py-1 text-lg text-white hover:bg-white hover:text-black"
        >
          X
        </button>

        <div
          style={{ backgroundImage: 'url("/Blush.png")' }}
          className="bg-cover bg-center bg-no-repeat"
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-white/30 py-5 backdrop-blur-lg md:gap-5">
            <h1 className="text-4xl font-bold tracking-wide text-white md:text-7xl">
              {"<SDW/>"}
            </h1>
            <div className="flex items-center gap-4 md:gap-5">
              <Link href={"https://github.com/suny-webdevs"}>
                <SiGithub className="text-2xl md:text-4xl" />
              </Link>
              <Link href={"https://linkedin.com/in/mdsunyshaikh"}>
                <SiLinkedin className="text-2xl md:text-4xl" />
              </Link>
              <Link href={"https://facebook.com/mdsunyshaikh"}>
                <SiFacebook className="text-2xl md:text-4xl" />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-10 pt-10 md:pl-10">
            <MenuLinks
              links={links}
              menuStyle="flex flex-col justify-center items-center md:items-start gap-5"
              linkStyle="text-3xl md:text-5xl font-medium uppercase hover:scale-105 md:hover:translate-x-4 transition-transform duration-200"
            />

            <div className="flex justify-center md:hidden">
              <Button
                large
                className={
                  "group flex items-center gap-1 bg-white/10 text-white hover:bg-white/20"
                }
              >
                let&apos;s talk{" "}
                <HiArrowUpRight className="hidden text-xl group-hover:flex group-hover:transition-all group-hover:duration-200" />
                <GoDotFill className="text-white/50 group-hover:hidden" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
