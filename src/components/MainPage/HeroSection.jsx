import Image from "next/image"
import Link from "next/link"
import { GoArrowUpRight } from "react-icons/go"
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
} from "react-icons/si"

const HeroSection = () => {
  return (
    <div>
      <div className="py-20">
        <h1 className="text-5xl md:text-9xl text-center font-bold text-transparent capitalize font-outline-2">
          md suny shaikh
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 md:mb-20">
        {/* Bio section */}
        <div className="order-2 md:order-1 flex flex-col gap-10">
          <div>
            <h3 className="text-lg font-medium uppercase tracking-widest">
              biography
            </h3>
            <p className="text-lg font-light text-white/70 tracking-wide capitalize mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              quidem impedit dolor libero, sed soluta deleniti eum dignissimos
              facilis reiciendis?
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium uppercase tracking-widest">
              skills
            </h3>
            <ul className="text-lg font-light text-white/70 tracking-wide capitalize mt-2">
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
            <div className="text-lg font-light text-white/70 tracking-wide capitalize flex items-center gap-2 mt-2">
              <Link
                href="https://github.com/suny-webdevs"
                target="_blank"
                className="group text-white md:text-white/50 md:hover:text-white flex items-center gap-2 transition-all duration-150"
              >
                <SiGithub className="text-white md:text-white/50 md:group-hover:text-white" />{" "}
                GitHub{" "}
                <GoArrowUpRight className="md:hidden md:group-hover:flex text-white" />
              </Link>
              <span>&bull;</span>
              <Link
                href="https://www.linkedin.com/in/mdsunyshaikh/"
                target="_blank"
                className="group text-white md:text-white/50 md:hover:text-white flex items-center gap-2 transition-all duration-150"
              >
                <SiLinkedin className="text-[#0077B5] md:text-white/50 md:group-hover:text-[#0077B5]" />{" "}
                LinkedIn{" "}
                <GoArrowUpRight className="md:hidden md:group-hover:flex text-white" />
              </Link>
              <span>&bull;</span>
              <Link
                href="https://facebook.com/mdsunyshaikh"
                target="_black"
                className="group text-white md:text-white/50 md:hover:text-white flex items-center gap-2 transition-all duration-150"
              >
                <SiFacebook className="text-[#0866FF] md:text-white/50 md:group-hover:text-[#0866FF]" />{" "}
                Facebook{" "}
                <GoArrowUpRight className="md:hidden md:group-hover:flex text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 flex flex-col items-center justify-center">
          <Image
            src={"/profile.jpg"}
            alt="profile"
            width={1920}
            height={1080}
            className="w-[300px] h-[300px] rounded-full"
          />
        </div>

        {/* Scores */}
        <div className="order-3 md:order-3 text-center md:text-right flex md:flex-col items-end justify-center gap-5 md:gap-14">
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
    </div>
  )
}

export default HeroSection
