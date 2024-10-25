import Link from "next/link";
import PageWrapper from "../shared/PageWrapper";
import SectionTitle from "../shared/SectionTitle";
import TextGradient from "../shared/TextGradient";
import Button from "../shared/Button";
import { BsArrowRight, BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { GrContact } from "react-icons/gr";

const ContactSection = () => {
  return (
    <div id="contact">
      <PageWrapper className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <SectionTitle
          icon={<GrContact />}
          tag="Contact"
          title="Let's"
          gradientText="talk"
        />
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <p className="flex items-center gap-3 uppercase md:text-xl">
                <IoMdMail className="" /> Email{" "}
              </p>
              <Link
                href={"mailto:mdsunyshaikh@gmail.com"}
                className="text-2xl font-medium"
              >
                <TextGradient hover>mdsunyshaikh@gmail.com</TextGradient>
              </Link>
            </div>
            <div>
              <p className="flex items-center gap-3 uppercase md:text-xl">
                <BsFillTelephoneOutboundFill className="text-base" /> Call
              </p>
              <Link
                href={"tel:+8801920827037"}
                className="text-2xl font-medium"
              >
                <TextGradient hover>+88 01923-827037</TextGradient>
              </Link>
            </div>
          </div>
          <form className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md border border-white/10 bg-primary px-3 py-2 outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-white/10 bg-primary px-3 py-2 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-md border border-white/10 bg-primary px-3 py-2 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                placeholder="Message"
                rows="8"
                className="w-full resize-none rounded-md border border-white/10 bg-primary px-3 py-2 outline-none"
              ></textarea>
            </div>
            <div className="flex items-center justify-start md:col-span-2 md:justify-end">
              <Button
                large
                className={
                  "flex items-center gap-2 bg-primary/50 backdrop-blur-lg hover:bg-primary"
                }
              >
                send message <BsArrowRight className="text-xl" />
              </Button>
            </div>
          </form>
        </div>
      </PageWrapper>
    </div>
  );
};

export default ContactSection;
