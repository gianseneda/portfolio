import { useEffect, useState } from "react";

import { Avatar, Link, Navbar, NavbarContent, NavbarItem } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";

import { DownloadCV } from "./DownloadCV";

const MENU_ITEMS = [
  { label: "Tecnologies", href: "#tecnologies-section" },
  { label: "Projects", href: "#projects-section" },
  { label: "Companies", href: "#companies-section" },
  { label: "Contact", href: "#contact-section" },
];

export const Header = () => {
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
        <NavbarContent className="flex flex-row gap-6" justify="start">
          <NavbarItem>
            <Link
              href="https://www.linkedin.com/in/gianseneda"
              target="_blank"
              className="flex flex-row gap-2"
            >
              <span className="font-bold text-stone-200 text-sm">LinkedIn</span>
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

        <NavbarContent justify="end" className="ml-8">
          <motion.div layout className="flex items-center gap-4">
            {MENU_ITEMS.map((item, index) => (
              <NavbarItem key={index}>
                <Link
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="flex flex-row gap-2"
                >
                  <span className="text-stone-200 font-bold text-sm">
                    {item.label}
                  </span>
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
      </Navbar>
    </header>
  );
};
