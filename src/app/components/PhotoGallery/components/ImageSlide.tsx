import { SpringValue, animated } from "@react-spring/web";
import React from "react";

interface ImageSlideProps {
  src: string;
  scale: SpringValue<number>;
}

const ImageSlide: React.FC<ImageSlideProps> = ({ src, scale }) => {
  return (
    <animated.div className="flex opacity-100 relative justify-center items-center w-full h-full">
      <animated.div
        className="h-full w-full"
        style={{ scale, backgroundImage: `url(${src})` }}
      />
      {/* <animated.div
        className={`${styles.imageSlide} bg- bg-no-repeat rounded-lg`}
        style={{ backgroundImage: `url(${src})`, width, height }}
      >
        
      </animated.div> */}
    </animated.div>
  );
};

export default ImageSlide;
