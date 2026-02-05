import TiltedCard from "./TiltedCard/TiltedCard";

export const Profile = () => {
  return (
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
      overlayContent={<p className="tilted-card-demo-text">I am Gian Seneda</p>}
    />
  );
};
