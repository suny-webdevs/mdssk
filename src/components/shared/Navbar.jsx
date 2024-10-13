import { btnMd, sectionStyle } from "@/lib/styles"
import Link from "next/link"

const Navbar = () => {
  return (
    <div
      className={`${sectionStyle} flex items-center justify-between py-5 mb-3`}
    >
      <Link
        href={"/"}
        className="text-3xl text-white font-bold uppercase"
      >
        mdssk
      </Link>
      <div className="flex gap-3">
        <button
          type="button"
          className={`${btnMd} bg-white/10 hover:bg-white/20 text-white`}
        >
          let&apos;s talk
        </button>
        <button
          type="button"
          className={`${btnMd} bg-white text-black hover:bg-white/90`}
        >
          menu
        </button>
      </div>
    </div>
  )
}

export default Navbar
