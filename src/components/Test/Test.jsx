import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
  ];

function Test(prop) {
    const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scrolling down
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else {
      // Scrolling up
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "400px",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          initial={{ opacity: 0, y: 100, scale: 0.2 }}
          animate={{ opacity: 1, y: 0 , scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.2 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AnimatePresence>
    </div>
  );
};


export default Test;
