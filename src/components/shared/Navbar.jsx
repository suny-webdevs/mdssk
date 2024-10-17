"use client"
import Link from "next/link"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { GoDotFill } from "react-icons/go"
import { HiArrowUpRight } from "react-icons/hi2"
import Button from "./Button"
import { usePathname, useRouter } from "next/navigation"
import PageWrapper from "./PageWrapper"

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  if (pathname.includes("menu")) return

  return (
    <PageWrapper className="flex items-center justify-between mb-3 py-5">
      <Link
        href={"/"}
        className="text-3xl text-white font-outline-2 font-bold font-outfit tracking-widest"
      >
        {"<SWD/>"}
      </Link>
      <div className="flex gap-3">
        {/* Button: Lets Talk */}
        <Button
          className={
            "group bg-white/10 hover:bg-white/20 text-white hidden md:flex items-center gap-1"
          }
        >
          let&apos;s talk{" "}
          <HiArrowUpRight className="hidden group-hover:flex text-xl group-hover:transition-all group-hover:duration-200" />
          <GoDotFill className="text-white/50 group-hover:hidden" />
        </Button>
        {/* Button: Menu */}
        <Button
          onClick={() => router.push("/menu")}
          className={"group bg-white text-black flex items-center gap-1"}
        >
          menu{" "}
          <HiOutlineArrowNarrowRight className="hidden group-hover:flex text-xl group-hover:transition-all group-hover:duration-200" />
          <GoDotFill className="text-black/30 group-hover:hidden" />
        </Button>
      </div>
    </PageWrapper>
  )
}

export default Navbar
