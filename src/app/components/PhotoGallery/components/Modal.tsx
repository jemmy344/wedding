import { animated, useSprings } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import clamp from "lodash.clamp";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import ImageSlide from "./ImageSlide";
import ModalHeader from "./ModalHeader";
import styles from "./css/Modal.module.css";

interface ModalProps {
  images: { src: string; width: number; height: number }[];
  currentIndex: number;
  onClose: () => void;
}

const SlideModal: React.FC<ModalProps> = ({
  images,
  currentIndex,
  onClose,
}) => {
  const width = window.innerWidth;

  const index = useRef(currentIndex);
  const [playing, setPlaying] = useState(false);
  const [props, api] = useSprings(images.length, (i) => ({
    x: i * width,
    scale: 1,
    display: "block",
  }));

  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], cancel }) => {
      if (active && Math.abs(mx) > width / 2) {
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          images.length - 1
        );
        cancel();
      }
      api.start((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * width + (active ? mx : 0);
        const scale = active ? 1 - Math.abs(mx) / width / 2 : 1;
        return { x, scale, display: "block" };
      });
    }
  );

  useEffect(() => {
    let autoPlayInterval: NodeJS.Timeout;
    if (playing) {
      autoPlayInterval = setInterval(() => {
        index.current = clamp(index.current + 1, 0, images.length - 1);

        api.start((i) => {
          if (i < index.current - 1 || i > index.current + 1)
            return { display: "none" };

          const x = (i - index.current) * width;
          const scale = 1;
          return { x, scale, display: "block" };
        });

        // Check if we have reached the last image
        if (index.current === images.length - 1) {
          // If so, reset the index to the first image
          setTimeout(() => {
            index.current = 0;
          }, 3000); // Adjust the interval duration as needed
        }
      }, 3000); // Adjust the interval duration as needed
    }

    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [playing, images.length, api, width]);

  const startAutoPlay = () => {
    setPlaying((prevState) => !prevState);
  };
  return createPortal(
    <div className={`${styles.modalBackground} opacity-90`} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <ModalHeader
          onClose={onClose}
          onPlay={startAutoPlay}
          isPlaying={playing}
        />
        <div className={styles.modalBody}>
          {props.map(({ x, display, scale }, i) => (
            <animated.div
              {...bind()}
              key={uuidv4()}
              className={`${styles.imageSlideWrapper}`}
              style={{ display, x }}
            >
              <ImageSlide src={images[i].src} scale={scale} />
            </animated.div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SlideModal;
