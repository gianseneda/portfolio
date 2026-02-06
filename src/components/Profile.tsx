import { motion } from "framer-motion";

import TiltedCard from "./TiltedCard/TiltedCard";

export const Profile = () => {
  return (
    <section className="flex flex-row justify-center">
      <TiltedCard
        imageSrc="./assets/images/profile.jpg"
        altText="Profile Pic"
        containerHeight="500px"
        containerWidth="100vw"
        imageHeight="500px"
        imageWidth="500px"
        rotateAmplitude={12}
        scaleOnHover={1.05}
        showMobileWarning={false}
        displayOverlayContent
        overlayContent={
          <p className="tilted-card-demo-text">I am Gian Seneda</p>
        }
      />
      <div className="flex w-[100%] items-center mr-20">
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.25, ease: "easeOut", delay: 0.25 }}
          className="whitespace-pre-line"
        >
          {
            "I’m Gian Paulo Seneda, a Software Developer with strong experience in React and React Native, working across web and mobile products in global, remote-first teams.\n\n I’ve worked end to end on digital products — from UI design and implementation to API integration, testing, and delivery — always prioritizing performance, usability, and business impact.\n\n I’m comfortable collaborating with cross-functional teams, working with legacy codebases, and delivering scalable, maintainable solutions. I’m particular interested in teams that value product thinking, clean code, and continuous improvement, and I’d be excited to bring my experience to your organization."
          }
        </motion.p>
      </div>
    </section>
  );
};
