import { useState } from "react";

import { Button, Link } from "@heroui/react";

import AnimatedContent from "./AnimatedContent";
import CardStack from "./CardStack";
import CardSwap, { Card } from "./CardSwap/CardSwap";

type ProjectItems = {
  index: number;
  title: string;
  subtitle: string;
  description?: string;
  link?: string;
  images?: string[];
};

const PROJECT_ITEMS: ProjectItems[] = [
  {
    index: 0,
    title: "Simple Farm",
    subtitle:
      "Multi-module integrated software (mobile and web) for agricultural management",
    description:
      "SIMPLEfarm is a web and mobile software developed by GAtec for agricultural management, composed of multiple integrated modules such as operational monitoring, inbound and outbound control of products and assets, and vehicle management in yards with weighing systems.\n\nThe project includes features like QR Code scanning for platform integration, camera-based monitoring, maps and geolocation, PDF generation, and integration with Bluetooth printers.\n\nOn the mobile side, the application architecture uses Realm (MongoDB) as the local database, following a structured approach with controllers, repositories, and services. The UI is built with card-based listing screens and forms for data entry and management.",
    link: "https://gatec.com.br/simplefarm-agronegocio/",
    images: ["simpleFarm.png", "simpleFarm2.png", "simpleFarm3.png"],
  },
  {
    index: 1,
    title: "Operis",
    subtitle: "Finished goods management and warehouse control software",
    description:
      "Operis is a web and mobile software developed by GAtec for finished goods management, widely used in warehouses and industrial plants. The solution enables label generation, maintenance tracking, product localization, and overall logistics and inventory control.\n\nThe system integrates platforms through QR Code scanning and also supports camera usage, barcode readers, and integration with industrial scales.\n\nOn the mobile application, the architecture is based on Realm (MongoDB), organized with controllers, repositories, and services. The interface includes card-based listing screens and forms for registering and updating data.\n\nPart of the project was designed by me in Figma, including screen and component creation, which were later translated into production-ready code.",
    link: "https://gatec.com.br/operis-agronegocio/",
    images: ["operis.png", "operis2.png"],
  },
  {
    index: 2,
    title: "Nespro",
    subtitle: "Sales and technical visit management software",
    description:
      "Nespro is an enterprise application developed for Nestlé by CI&T, focused on sales operations and technical visit management. The app provides listings of consumables for commercial coffee and chocolate machines, as well as equipment maintenance tracking.\n\nThe system features list-based screens and forms, along with integrations with the device camera and QR Code scanning for equipment identification and control.\n\nThe project was initially designed in Figma, where I contributed to the creation and maintenance of the UI. I later implemented the screens and components in code, supported by unit tests using Jest and integration tests to ensure application reliability.",
  },
  {
    index: 3,
    title: "Worldle",
    subtitle: "Geography Daily Game",
    description:
      "Worldle is a daily geography game in which users must identify countries based on their shapes. In addition to the main round, the game offers extra challenges focused on geographic data, characteristics, and curiosities.\n\nThe application consumes a RESTful API that provides round data in JSON and GeoJSON formats. On the frontend, the architecture is component-driven, enabling dynamic UI rendering based on the type of round presented to the user.\n\nThe UI leverages a company-maintained component library, documented and tested with Storybook to ensure consistency and reusability.",
    link: "https://worldle.teuteuf.fr/",
    images: ["worldle.png", "worldle2.png"],
  },
];

export const Projects = () => {
  const [showProject, setShowProject] = useState<number | undefined>(undefined);

  const selectedProject =
    showProject !== undefined
      ? PROJECT_ITEMS.find((p) => p.index === showProject)
      : null;

  return (
    <section
      id="projects-section"
      className="relative min-h-[420px] p-8 scroll-mt-24"
    >
      <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
      <div className="flex flex-row gap-8 h-[500px]">
        <div className="flex flex-1 pr-4">
          {selectedProject ? (
            <AnimatedContent
              key={selectedProject.index}
              className="flex flex-col gap-10"
            >
              <h3 className="text-xl font-medium">{selectedProject.title}</h3>
              <p className="whitespace-pre-line text-neutral-300">
                {selectedProject.description}
              </p>
              {selectedProject.link && (
                <Button
                  size="lg"
                  className="px-8 py-2 w-full bg-indigo-600 text-stone-200 shadow-lg cursor-pointer"
                  radius="md"
                >
                  <Link
                    href={selectedProject.link}
                    target="_blank"
                    className="text-decoration-none"
                  >
                    See more
                  </Link>
                </Button>
              )}
            </AnimatedContent>
          ) : (
            <p className="text-stone-200">
              Select a project to see the details
            </p>
          )}
        </div>

        <div className="flex flex-1 -translate-x-30">
          <CardSwap
            onCardClick={(cardIndex: number) => setShowProject(cardIndex)}
          >
            {PROJECT_ITEMS.map(({ title, subtitle, images, index }) => (
              <Card key={index} className="flex flex-col relative">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-neutral-400">{subtitle}</p>

                <CardStack
                  images={
                    images?.map((src) => `./assets/projects/${src}`) ?? []
                  }
                  maxVisible={3}
                  autoplayDelay={3000}
                />
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};
