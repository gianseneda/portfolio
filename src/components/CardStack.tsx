import { useEffect, useState } from "react";

import { Image } from "@heroui/react";
import { motion } from "framer-motion";

interface CardStackProps {
  images: string[];
  maxVisible?: number;
  autoplayDelay?: number;
}

export default function CardStack({
  images,
  maxVisible = 3,
  autoplayDelay = 3000,
}: CardStackProps) {
  const [cards, setCards] = useState(
    images.map((src, index) => ({ id: index, src })),
  );

  const sendToBack = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const topCard = newCards.pop();
      if (topCard) {
        newCards.unshift(topCard);
      }
      return newCards;
    });
  };

  useEffect(() => {
    if (cards.length > 1) {
      const interval = setInterval(() => {
        sendToBack();
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [cards, autoplayDelay]);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {cards.slice(0, maxVisible).map((card, index) => {
        const reverseIndex = cards.length - index - 1;

        return (
          <motion.div
            key={card.id}
            className="absolute"
            initial={false}
            animate={{
              scale: 1 - reverseIndex * 0.05,
              y: reverseIndex * 10,
              opacity: 1,
              rotateZ: reverseIndex * 2,
              zIndex: cards.length - index,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            style={{
              zIndex: cards.length - index,
            }}
          >
            <Image
              src={card.src}
              alt={`Card ${index + 1}`}
              className="w-[200px] h-[300px] object-cover rounded-2xl shadow-2xl"
              draggable={false}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
