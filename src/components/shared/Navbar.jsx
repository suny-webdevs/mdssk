"use client";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { HiArrowUpRight } from "react-icons/hi2";
import Button from "./Button";
import PageWrapper from "./PageWrapper";
import { useState } from "react";
import Menus from "./Menus";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-0 top-0 w-full bg-black/30 backdrop-blur-lg">
      <PageWrapper className="flex items-center justify-between py-4">
        <Link
          href={"/"}
          className="font-outline-2 font-outfit text-3xl font-bold tracking-widest text-white"
        >
          {"<SWD/>"}
        </Link>
        <div className="relative flex gap-3">
          {/* Button: Lets Talk */}
          <Button
            className={
              "group hidden items-center gap-1 bg-white/10 text-white hover:bg-white/20 md:flex"
            }
          >
            let&apos;s talk{" "}
            <HiArrowUpRight className="hidden text-xl group-hover:flex group-hover:transition-all group-hover:duration-200" />
            <GoDotFill className="text-white/50 group-hover:hidden" />
          </Button>
          {/* Button: Menu */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}
            className={"group flex items-center gap-1 bg-white text-black"}
          >
            menu{" "}
            <HiOutlineArrowNarrowRight className="hidden text-xl group-hover:flex group-hover:transition-all group-hover:duration-200" />
            <GoDotFill className="text-black/30 group-hover:hidden" />
          </Button>

          <Menus
            className={`absolute right-0 top-0 z-50 w-56 translate-y-14 ${isOpen ? "flex flex-col gap-4" : "hidden"}`}
          />
        </div>
      </PageWrapper>
    </div>
  );
};

export default Navbar;
