import { SpringValue, animated } from "@react-spring/web";
import React from "react";
import style from "./css/ImageSlide.module.css";
interface ImageSlideProps {
  src: string;
  scale: SpringValue<number>;
}

const ImageSlide: React.FC<ImageSlideProps> = ({ src, scale }) => {
  return (
    <animated.div className="flex opacity-100 relative justify-center items-center w-full h-full">
      <animated.div
        className={`h-full w-full ${style.imageContainer}`}
        style={{ scale, backgroundImage: `url(${src})` }}
      />
    </animated.div>
  );
};

export default ImageSlide;
