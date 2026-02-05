import { SiGithub, SiLinkedin } from "react-icons/si";

import { Link,Navbar, NavbarContent, NavbarItem } from "@heroui/react";

import { DownloadCV } from "./DownloadCV";
import GooeyNav from "./GooeyNav/GooeyNav";

const MENU_ITEMS = [
  { label: "Tecnologies", href: "#tecnologies-section" },
  { label: "Projects", href: "#projects-section" },
  { label: "Companies", href: "#companies-section" },
  { label: "Contact", href: "#contact-section" },
];

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-[#0a0a0a]/90 backdrop-blur z-50">
      <Navbar
        className="h-20 w-full px-8 border-b border-b-stone-700"
        maxWidth="full"
      >
        <NavbarContent className="flex flex-row gap-4" justify="start">
          <NavbarItem className="p-2 rounded-lg border border-blue-600 items-center">
            <Link
              href="https://www.linkedin.com/in/gianseneda"
              target="_blank"
              className="flex flex-row gap-2"
            >
              <SiLinkedin size={24} className="text-blue-600" />
              <span className="text-blue-600 font-bold text-sm">LinkedIn</span>
            </Link>
          </NavbarItem>
          <NavbarItem className="p-2 rounded-lg border border-stone-200 items-center">
            <Link
              href="https://github.com/gianseneda"
              target="_blank"
              className="flex flex-row gap-2"
            >
              <SiGithub size={24} className="text-stone-200" />
              <span className="text-stone-200 font-bold text-sm">Github</span>
            </Link>
          </NavbarItem>
          <DownloadCV />
        </NavbarContent>

        <NavbarContent justify="end">
          <GooeyNav
            items={MENU_ITEMS}
            particleCount={5}
            particleDistances={[50, 10]}
          />
        </NavbarContent>
      </Navbar>
    </header>
  );
};
