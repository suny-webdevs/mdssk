"use client"
import Button from "@/components/shared/Button"
import MenuLinks from "@/components/shared/MenuLinks"
import { useRouter } from "next/navigation"
import { GoDotFill } from "react-icons/go"
import { HiArrowUpRight } from "react-icons/hi2"

const MenuPage = () => {
  const router = useRouter()

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
    <div data-aos="fade-left">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 h-screen">
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute top-5 right-5 text-lg text-white hover:bg-white hover:text-black px-3 py-1 border-2 border-white"
        >
          X
        </button>

        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/Blush.png")' }}
        ></div>

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
                  "group bg-white/10 hover:bg-white/20 text-white flex items-center gap-1"
                }
              >
                let&apos;s talk{" "}
                <HiArrowUpRight className="hidden group-hover:flex text-xl group-hover:transition-all group-hover:duration-200" />
                <GoDotFill className="text-white/50 group-hover:hidden" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuPage
