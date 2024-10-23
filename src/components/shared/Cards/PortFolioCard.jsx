"use client";
import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";
import Button from "../Button";
import { BsArrowUpRight, BsExclamationLg } from "react-icons/bs";
import { useRouter } from "next/navigation";

const PortFolioCard = ({ image, title, category, visitLink, detailsLink }) => {
  const router = useRouter();

  return (
    <div className="group w-full rounded-xl">
      <div className="flex flex-col justify-center gap-4 rounded-xl border border-primary bg-primary p-5">
        <div className="h-[16rem] w-full overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            width={1920}
            height={1080}
            className="h-full w-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex h-full w-full flex-col justify-center gap-8">
          <div className="">
            <span className="text-sm font-light text-white backdrop-blur-lg md:text-lg">
              {category}
            </span>
            <div className="flex items-center justify-between">
              <h1 className="flex items-center gap-3 text-2xl font-medium text-white md:text-4xl">
                {title}
              </h1>
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => router.push(detailsLink)}
                  round
                  className={"bg-white text-primary"}
                >
                  <BsExclamationLg className="text-xl md:text-2xl" />
                </Button>

                <Link href={visitLink} target="_blank">
                  <Button
                    round
                    className={"border hover:bg-white hover:text-primary"}
                  >
                    <BsArrowUpRight className="text-xl md:text-2xl" />
                  </Button>
                </Link>
              </div>
            </div>
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
  detailsLink: PropTypes.string,
  visitLink: PropTypes.string,
};

export default PortFolioCard;
