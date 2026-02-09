import {
  SiExpo,
  SiFigma,
  SiGithub,
  SiJest,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import Image from "next/image";

import LogoLoop from "./LogoLoop/LogoLoop";
import TrueFocus from "./TrueFocus/TrueFocus";

export const Technologies = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiExpo />,
      title: "Expo",
      href: "https://expo.dev/",
    },
    {
      node: <SiFigma />,
      title: "Expo",
      href: "https://www.figma.com/",
    },
    {
      node: <SiGithub />,
      title: "Git Hub",
      href: "https://github.com/",
    },
    {
      node: <SiJest />,
      title: "Jest",
      href: "https://jestjs.io/",
    },
    {
      node: <VscAzureDevops />,
      title: "Azure",
      href: "https://azure.microsoft.com/pt-br",
    },
  ];

  return (
    <section
      className="relative min-h-[420px] overflow-hidden bg-neutral-900 mt-20 scroll-mt-24"
      id="technologies-section"
    >
      <Image
        src="./assets/backgrounds/gradients-desktop.png"
        alt="Background"
        fill
        priority={false}
        className="object-cover"
      />
      <div className="flex relative z-10 p-10 flex-col gap-30">
        <TrueFocus words={["React", "React Native"]} />
        <LogoLoop logos={techLogos} scaleOnHover />
      </div>
    </section>
  );
};
