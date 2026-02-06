"use client";

import { useState } from "react";

import {
  AnimatedContent,
  Companies,
  Contact,
  Header,
  Profile,
  Projects,
  Tecnologies,
  Title,
} from "@/components";
import { Presentation } from "@/components/Presentation";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <main
      className={`w-full ${showContent ? "min-h-screen" : "h-screen -mt-30 overflow-hidden"}`}
    >
      <div id="top-sentinel" className="absolute top-0 h-px w-full" />
      {showContent ? (
        <>
          <Header />
          <AnimatedContent>
            <Title />
            <Profile />
            <Tecnologies />
            <Projects />
            <Companies />
            <Contact />
          </AnimatedContent>
        </>
      ) : (
        <Presentation onFinishAnimation={setShowContent} />
      )}
    </main>
  );
}
