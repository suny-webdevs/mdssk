"use client"
import { btnMd, container } from "@/lib/styles"
import Link from "next/link"
import { useState } from "react"
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowSmRight,
} from "react-icons/hi"
import { GoDotFill } from "react-icons/go"
import { HiArrowUpRight } from "react-icons/hi2"

const Navbar = () => {
  const [menuMouseOver, setMenuMouseOver] = useState(false)
  const [talkMouseOver, setTalkMouseOver] = useState(false)

  return (
    <div className={`${container} flex items-center justify-between py-5 mb-3`}>
      <Link
        href={"/"}
        className="text-3xl text-white font-bold uppercase"
      >
        mdssk
      </Link>
      <div className="flex gap-3">
        <button
          onMouseEnter={() => setTalkMouseOver(true)}
          onMouseLeave={() => setTalkMouseOver(false)}
          type="button"
          className={`${btnMd} bg-white/10 hover:bg-white/20 text-white transition-all duration-200 flex items-center gap-1`}
        >
          let&apos;s talk{" "}
          {talkMouseOver ? (
            <HiArrowUpRight className="text-xl" />
          ) : (
            <GoDotFill className="text-white/50" />
          )}
        </button>
        <button
          onMouseEnter={() => setMenuMouseOver(true)}
          onMouseLeave={() => setMenuMouseOver(false)}
          type="button"
          className={`${btnMd} bg-white text-black transition-all duration-200 flex items-center gap-1`}
        >
          menu{" "}
          {menuMouseOver ? (
            <HiOutlineArrowNarrowRight className="text-xl" />
          ) : (
            <GoDotFill className="text-black/30" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Navbar
