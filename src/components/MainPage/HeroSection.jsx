import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiLinkedin,
  SiFacebook,
} from "react-icons/si";
import PageWrapper from "../shared/PageWrapper";

const HeroSection = () => {
  return (
    <section id="about">
      <PageWrapper>
        <div className="py-20">
          <h1 className="font-outline-2 text-center text-7xl font-bold capitalize text-transparent md:text-9xl">
            md suny shaikh
          </h1>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-10 md:mb-20 md:grid-cols-3">
          {/* Bio section */}
          <div className="order-2 flex flex-col gap-10 md:order-1">
            <div>
              <h3 className="text-lg font-medium uppercase tracking-widest">
                biography
              </h3>
              <p className="mt-2 text-lg font-light capitalize tracking-wide text-white/70">
                Motivated MERN Stack Developer skilled in building dynamic,
                scalable web applications. Passionate about clean code,
                performance optimization, and seamless user experiences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase tracking-widest">
                skills
              </h3>
              <ul className="mt-2 text-lg font-light capitalize tracking-wide text-white/70">
                <li className="flex items-center gap-2">
                  <SiTailwindcss className="text-[#3EBFF8]" /> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <SiMongodb className="text-[#08EE69]" /> MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <SiExpress className="text-white" /> Express js
                </li>
                <li className="flex items-center gap-2">
                  <SiReact className="text-[#08D9FF]" /> React js
                </li>
                <li className="flex items-center gap-2">
                  <SiNodedotjs className="text-[#417E38]" /> Node js
                </li>
                <li className="flex items-center gap-2">
                  <SiNextdotjs className="text-white" /> Next js
                </li>
                <li className="flex items-center gap-2">
                  <SiGit className="text-[#F54D27]" /> Git
                </li>
                <li className="flex items-center gap-2">
                  <SiGithub className="text-white" /> GitHub
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase tracking-widest">
                connect
              </h3>
              <div className="mt-2 flex items-center gap-2 text-lg font-light capitalize tracking-wide text-white/70">
                <Link
                  href="https://github.com/suny-webdevs"
                  target="_blank"
                  className="group flex items-center gap-2 text-white transition-all duration-150 md:text-white/50 md:hover:text-white"
                >
                  <SiGithub className="text-white md:text-white/50 md:group-hover:text-white" />{" "}
                  GitHub{" "}
                  <GoArrowUpRight className="hidden text-white md:group-hover:flex" />
                </Link>
                <span>&bull;</span>
                <Link
                  href="https://www.linkedin.com/in/mdsunyshaikh/"
                  target="_blank"
                  className="group flex items-center gap-2 text-white transition-all duration-150 md:text-white/50 md:hover:text-white"
                >
                  <SiLinkedin className="text-[#0077B5] md:text-white/50 md:group-hover:text-[#0077B5]" />{" "}
                  LinkedIn{" "}
                  <GoArrowUpRight className="hidden text-white md:group-hover:flex" />
                </Link>
                <span>&bull;</span>
                <Link
                  href="https://facebook.com/mdsunyshaikh"
                  target="_black"
                  className="group flex items-center gap-2 text-white transition-all duration-150 md:text-white/50 md:hover:text-white"
                >
                  <SiFacebook className="text-[#0866FF] md:text-white/50 md:group-hover:text-[#0866FF]" />{" "}
                  Facebook{" "}
                  <GoArrowUpRight className="hidden text-white md:group-hover:flex" />
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 flex flex-col items-center justify-center md:order-2">
            <Image
              src={"/profile.jpg"}
              alt="profile"
              width={1920}
              height={1080}
              className="h-[300px] w-[300px] rounded-full"
            />
          </div>

          {/* Scores */}
          <div className="order-3 flex items-end justify-center gap-5 text-center md:order-3 md:flex-col md:gap-14 md:text-right">
            <div className="flex flex-col gap-1">
              <p className="text-6xl font-light">10</p>
              <h3 className="font-medium uppercase">projects done</h3>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-6xl font-light">1+</p>
              <h3 className="font-medium uppercase">years of experience</h3>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-6xl font-light">10+</p>
              <h3 className="font-medium uppercase">technology expertise</h3>
            </div>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
};

export default HeroSection;
