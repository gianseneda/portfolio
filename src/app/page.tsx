"use client";

import { useState } from "react";

import {
  AnimatedContent,
  Companies,
  Contact,
  Profile,
  Projects,
  SplitText,
  Tecnologies,
  Title,
} from "@/components";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <main className="w-full min-h-screen">
      {showContent ? (
        <AnimatedContent>
          <Title />
          <Profile />
          <Tecnologies />
          <Projects />
          <Companies />
          <Contact />
        </AnimatedContent>
      ) : (
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <SplitText
            text="Hello, you!"
            className="text-6xl font-semibold text-center"
            onLetterAnimationComplete={() => setShowContent(true)}
          />
        </div>
      )}
    </main>
  );
}
