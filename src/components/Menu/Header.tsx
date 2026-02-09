import { useEffect, useState } from "react";
import { FiAtSign, FiBriefcase, FiCodesandbox, FiFolder } from "react-icons/fi";

import {
  Avatar,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";

import { useIsMobile } from "@/hooks/useIsMobile";

import { DownloadCV } from "./DownloadCV";

const MENU_ITEMS = [
  { label: "Technologies", href: "#technologies-section", Icon: FiCodesandbox },
  { label: "Projects", href: "#projects-section", Icon: FiFolder },
  { label: "Companies", href: "#companies-section", Icon: FiBriefcase },
  { label: "Contact", href: "#contact-section", Icon: FiAtSign },
];

export const Header = () => {
  const isMobile = useIsMobile();

  const [showAvatar, setShowAvatar] = useState(false);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 100;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sentinel = document.getElementById("top-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowAvatar(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <Navbar
        className="h-20 px-8 bg-[#0a0a0a]/50 rounded-full"
        maxWidth="full"
      >
        {isMobile ? (
          <NavbarContent>
            <NavbarMenuToggle className="md:hidden" />
          </NavbarContent>
        ) : (
          <NavbarContent className="flex flex-row gap-6" justify="start">
            <NavbarItem>
              <Link
                href="https://www.linkedin.com/in/gianseneda"
                target="_blank"
              >
                <span className="font-bold text-stone-200 text-sm">
                  LinkedIn
                </span>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="https://github.com/gianseneda"
                target="_blank"
                className="flex flex-row gap-2"
              >
                <span className="text-stone-200 font-bold text-sm">Github</span>
              </Link>
            </NavbarItem>
            <DownloadCV />
          </NavbarContent>
        )}

        <NavbarContent justify="end" className="ml-8">
          <motion.div layout className="flex items-center gap-4">
            {MENU_ITEMS.map(({ label, href, Icon }, index) => (
              <NavbarItem key={index}>
                <Link
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(href);
                  }}
                  className="flex flex-row gap-2"
                >
                  <span className="hidden md:block text-stone-200 font-bold text-sm">
                    {label}
                  </span>
                  <Icon className="block md:hidden text-stone-200 font-bold text-xl" />
                </Link>
              </NavbarItem>
            ))}

            <AnimatePresence mode="popLayout">
              {showAvatar && (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <Avatar
                    isBordered
                    color="primary"
                    src="./assets/images/avatar.png"
                    className="cursor-pointer"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </NavbarContent>
        <NavbarMenu>
          {isMobile && (
            <NavbarContent
              className="flex flex-col gap-6 mt-[60px]"
              justify="start"
            >
              <NavbarMenuItem>
                <Link
                  href="https://www.linkedin.com/in/gianseneda"
                  target="_blank"
                >
                  <span className="font-bold text-stone-200 text-sm">
                    LinkedIn
                  </span>
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link
                  href="https://github.com/gianseneda"
                  target="_blank"
                  className="flex flex-row gap-2"
                >
                  <span className="text-stone-200 font-bold text-sm">
                    Github
                  </span>
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <DownloadCV />
              </NavbarMenuItem>
            </NavbarContent>
          )}
        </NavbarMenu>
      </Navbar>
    </header>
  );
};
