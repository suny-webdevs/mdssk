"use client"
import Link from "next/link"
import { useState } from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { GoDotFill } from "react-icons/go"
import { HiArrowUpRight } from "react-icons/hi2"
import PageWrapper from "./PageWrapper"
import Button from "./Button"

const Navbar = () => {
  const [menuMouseOver, setMenuMouseOver] = useState(false)
  const [talkMouseOver, setTalkMouseOver] = useState(false)

  return (
    <PageWrapper className="flex items-center justify-between mb-3 py-5">
      <Link
        href={"/"}
        className="text-3xl text-white font-bold font-outfit tracking-widest"
      >
        {"<Suny-webDevs/>"}
      </Link>
      <div className="flex gap-3">
        {/* Button: Lets Talk */}
        <Button
          mouseIn={() => setTalkMouseOver(true)}
          mouseOut={() => setTalkMouseOver(false)}
          className={
            "bg-white/10 hover:bg-white/20 text-white transition-all ease-in-out duration-200 flex items-center gap-1"
          }
        >
          let&apos;s talk{" "}
          {talkMouseOver ? (
            <HiArrowUpRight className="text-xl" />
          ) : (
            <GoDotFill className="text-white/50" />
          )}
        </Button>
        {/* Button: Menu */}
        <Button
          mouseIn={() => setMenuMouseOver(true)}
          mouseOut={() => setMenuMouseOver(false)}
          className={
            "bg-white text-black transition-all ease-in-out duration-200 flex items-center gap-1"
          }
        >
          menu{" "}
          {menuMouseOver ? (
            <HiOutlineArrowNarrowRight className="text-xl" />
          ) : (
            <GoDotFill className="text-black/30" />
          )}
        </Button>
      </div>
    </PageWrapper>
  )
}

export default Navbar
