"use client";
import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";
import Button from "../Button";

const PortFolioCard = ({ image, title, category, visitLink, detailsLink }) => {
  return (
    <div className="group w-full rounded-xl from-[#F761E0] via-[#7613F1] to-[#520E9D] md:bg-gradient-to-r md:p-[.125rem]">
      <div className="flex flex-col justify-center gap-4 rounded-xl border bg-primary p-5 md:border-none">
        <div className="h-[16rem] w-full overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            width={1920}
            height={1080}
            className="h-full w-full transition-transform duration-150 group-hover:scale-105"
          />
        </div>
        <div className="flex h-full w-full flex-col justify-center gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-lg font-light text-white">{category}</p>
            <h1 className="text-4xl font-medium text-white">{title}</h1>
          </div>
          <div className="flex flex-col justify-center gap-4 md:flex-row md:items-center">
            <Link href={detailsLink}>
              <Button
                className={
                  "w-full bg-black/20 text-white backdrop-blur-lg hover:bg-black/50"
                }
              >
                Learn More
              </Button>
            </Link>
            <Link href={visitLink}>
              <Button
                className={
                  "w-full border border-white bg-gradient-to-bl from-from via-via to-to hover:bg-gradient-to-tr"
                }
              >
                Visit Site
              </Button>
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
  detailsLink: PropTypes.string,
  visitLink: PropTypes.string,
};

export default PortFolioCard;
