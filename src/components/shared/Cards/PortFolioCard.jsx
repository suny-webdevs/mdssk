"use client";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "../Button";

const PortFolioCard = ({ image, title, category, link }) => {
  return (
    <div className="w-full rounded-xl bg-gradient-to-r from-[#F761E0] via-[#7613F1] to-[#520E9D] p-[.125rem]">
      <div className="flex flex-col justify-center gap-4 rounded-xl bg-primary p-5">
        <div className="h-[15rem] w-full">
          <Image
            src={image}
            alt={title}
            width={1920}
            height={1080}
            className="h-full w-full rounded-xl"
          />
        </div>
        <div className="flex h-full w-full flex-col justify-center gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-lg font-light text-white">{category}</p>
            <h1 className="text-4xl font-medium text-white">{title}</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href={link}>
              <Button className={"bg-black/20 text-white backdrop-blur-lg"}>
                Learn More
              </Button>
            </Link>
            <Link href={link}>
              <Button>Visit Site</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

PortFolioCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  link: PropTypes.string,
};

export default PortFolioCard;
