"use client"
import Link from "next/link"
import { useState } from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { GoDotFill } from "react-icons/go"
import { HiArrowUpRight } from "react-icons/hi2"
import Button from "./Button"
import { usePathname, useRouter } from "next/navigation"

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const [menuMouseOver, setMenuMouseOver] = useState(false)
  const [talkMouseOver, setTalkMouseOver] = useState(false)

  if (pathname.includes("menu")) return

  return (
    <div className="flex items-center justify-between mb-3 py-5">
      <Link
        href={"/"}
        className="text-2xl md:text-3xl text-black bg-white font-bold font-outfit tracking-widest border border-white"
      >
        {"<SWD/>"}
      </Link>
      <div className="flex gap-3">
        {/* Button: Lets Talk */}
        <Button
          mouseIn={() => setTalkMouseOver(true)}
          mouseOut={() => setTalkMouseOver(false)}
          className={
            "group bg-white/10 hover:bg-white/20 text-white hidden md:flex items-center gap-1"
          }
        >
          let&apos;s talk{" "}
          {talkMouseOver ? (
            <HiArrowUpRight className="text-xl group-hover:transition-all group-hover:duration-200" />
          ) : (
            <GoDotFill className="text-white/50" />
          )}
        </Button>
        {/* Button: Menu */}
        <Button
          onClick={() => router.push("/menu")}
          mouseIn={() => setMenuMouseOver(true)}
          mouseOut={() => setMenuMouseOver(false)}
          className={"group bg-white text-black flex items-center gap-1"}
        >
          menu{" "}
          {menuMouseOver ? (
            <HiOutlineArrowNarrowRight className="text-xl group-hover:transition-all group-hover:duration-200" />
          ) : (
            <GoDotFill className="text-black/30" />
          )}
        </Button>
      </div>
    </div>
  )
}

export default Navbar
