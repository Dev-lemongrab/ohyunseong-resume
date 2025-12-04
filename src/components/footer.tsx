import { Button, IconButton } from "@material-tailwind/react";
import Typography from "@/components/common/Typography";
import Image from "next/image";

const LINKS = ["About", "Blog", "Contact"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
      <div className="grid place-items-center px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
            <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase">
            Connect me on :)
            </Typography>
            <div className="gap-2 lg:flex">
            <a
                href="https://link.rmbr.in/rzcvwy"
                target="_blank"
                rel=""
            >
            <IconButton variant="text" color="gray">
                <Image
                    src="/image/remember.png"
                    alt="Remember"
                    width={30}
                    height={30}
                  />
            </IconButton>
            </a>
            <a
                href="https://www.linkedin.com/in/%EC%9C%A4%EC%84%B1-%EC%98%A4-a4397a344/"
                target="_blank"
                rel=""
            >
            <IconButton variant="text" color="gray">
                <i className="fa-brands fa-linkedin text-xl"></i>
            </IconButton>
            </a>
            <a
                href="https://github.com/Dev-lemongrab"
                target="_blank"
                rel=""
            >
            <IconButton variant="text" color="gray">
                <i className="fa-brands fa-github text-xl" />
            </IconButton>
            </a>
            </div>
            </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
            {/*<Button color="gray">subscribe</Button>*/}
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
