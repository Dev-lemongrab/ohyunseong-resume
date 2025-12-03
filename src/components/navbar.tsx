import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Typography from "@/components/common/Typography";

const NAV_MENU = [
  { label: "About", href: "/#", newTab: false},
  { label: "Blog", href: "https://velog.io/@oh_yunseong/posts", newTab: true},
  { label: "Portfolio", href: "https://ohyunseong.notion.site/yunseong-oh-portfolio", newTab: true},
];
function NavItem({ label, href, newTab = false }: { label: string; href: string; newTab?: boolean; }) {
  return (
    <li>
      <Typography
        as="a"
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {label}
      </Typography>
    </li>
  );
}
{/**
function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}
 */}
export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      fullWidth
      blurred={false}
      shadow={false}
      color="white"
      className="sticky top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href=""
          target="_blank"
          color="blue-gray"
          className="text-lg font-bold"
        >
          Oh! YunSeong
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((item) => (
            <NavItem key={item.label} label={item.label} href={item.href} newTab={item.newTab}/>
          ))}
        </ul>
        {/**
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((nav) => (
            <NavItem key={nav}>{nav}</NavItem>
          ))}
        </ul>
         */}
        {/*
        <div className="hidden items-center gap-2 lg:flex">

          <Button variant="text">
          login
          </Button>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color="gray">blocks</Button>
          </a>
        </div>
        */}

        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>

      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
        <ul className="flex flex-col gap-4">
          {NAV_MENU.map((item) => (
            <NavItem key={item.label} label={item.label} href={item.href} newTab={item.newTab}/>
          ))}
        </ul>
        {/**
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((nav) => (
              <NavItem key={nav}>{nav}</NavItem>
            ))}
          </ul>
           */}
          {/**
          <div className="mt-6 mb-4 flex items-center gap-2">
            <Button variant="text">Log in</Button>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button color="gray">blocks</Button>
            </a>
          </div>
          */}
        </div>
      </Collapse>
    </MTNavbar>

  );
}

export default Navbar;
