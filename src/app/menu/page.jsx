"use client"
import Button from "@/components/shared/Button"
import PageWrapper from "@/components/shared/PageWrapper"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { GoDotFill } from "react-icons/go"
import { HiArrowUpRight } from "react-icons/hi2"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const MenuPage = () => {
  const [talkMouseOver, setTalkMouseOver] = useState(false)
  //   const [menuMouseOver, setMenuMouseOver] = useState(false)

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
  ]

  return (
    <div data-aos="fade-down">
      <PageWrapper className="grid grid-cols-1 md:grid-cols-2 gap-5 h-screen">
        <div className="hidden md:flex justify-end items-center">
          <Image
            src={"/Blush.png"}
            alt="menu-image"
            width={1920}
            height={1080}
            className="w-[300px] h-[95vh] rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-between md:justify-center items-center md:items-start gap-10 md:pb-2 py-10 md:py-0">
          <div className="flex md:hidden">
            <h1 className="text-3xl font-mono font-bold tracking-widest">
              {"<Suny-webDevs/>"}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start gap-5">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                // onMouseEnter={() => setMenuMouseOver(true)}
                // onMouseLeave={() => setMenuMouseOver(false)}
                className="text-3xl md:text-5xl font-medium sm:hover:scale-110 md:hover:translate-x-5 transition-transform duration-200 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-violet-600 hover:inline-block hover:text-transparent hover:bg-clip-text"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex md:hidden">
            <Button
              mouseIn={() => setTalkMouseOver(true)}
              mouseOut={() => setTalkMouseOver(false)}
              className={
                "group bg-white/10 hover:bg-white/20 text-white flex items-center gap-1"
              }
            >
              let&apos;s talk{" "}
              {talkMouseOver ? (
                <HiArrowUpRight className="text-xl group-hover:transition-all group-hover:duration-200" />
              ) : (
                <GoDotFill className="text-white/50" />
              )}
            </Button>
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}

export default MenuPage
