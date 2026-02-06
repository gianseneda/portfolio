import { useState } from "react";

import { Avatar, Button } from "@heroui/react";

import { AnimatedContent, SplitText } from "@/components";

type PresentationProps = {
  onFinishAnimation: (val: boolean) => void;
};

export const Presentation = ({ onFinishAnimation }: PresentationProps) => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full overflow-hidden">
      <AnimatedContent className="relative flex flex-col justify-center items-center">
        <div className="absolute top-[45%] left-[10%] w-[400px] h-[300px] bg-neutral-900 blur-3xl opacity-75 rounded-full z-2" />
        <Avatar
          src="./assets/images/avatar.png"
          className="cursor-pointer w-48 h-48 -mb-8"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        <SplitText
          text="Hello, I am Gian!"
          className="text-6xl font-semibold text-center text-stone-300 z-3"
          onLetterAnimationComplete={() => setShowButtons(true)}
        />
      </AnimatedContent>
      {showButtons && (
        <AnimatedContent className="z-10 flex flex-row gap-2 mt-4">
          <Button
            onPress={() => onFinishAnimation(true)}
            variant="light"
            size="lg"
            className="text-stone-300"
          >
            EN
          </Button>
          <Button
            variant="light"
            size="lg"
            onPress={() => onFinishAnimation(true)}
            className="text-stone-300 line-through"
            disabled
          >
            PT-BR
          </Button>
        </AnimatedContent>
      )}
    </div>
  );
};
