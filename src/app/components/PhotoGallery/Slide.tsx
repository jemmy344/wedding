import { animated, useSprings } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import clamp from "lodash.clamp";
import { useRef } from "react";

import styles from "./styles.module.css";

interface ViewPagerProps {
  pages: Array<string>;
}

function Viewpager({ pages }: ViewPagerProps) {
  const index = useRef(0);
  const height = window.innerHeight;

  const [props, api] = useSprings(pages.length, (i) => ({
    y: i * height,
    scale: 1,
    display: "block",
  }));
  const bind = useDrag(
    ({ active, movement: [, my], direction: [, yDir], cancel }) => {
      if (active && Math.abs(my) > height / 2) {
        index.current = clamp(
          index.current + (yDir > 0 ? -1 : 1),
          0,
          pages.length - 1
        );
        cancel();
      }
      api.start((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const y = (i - index.current) * height + (active ? my : 0);
        const scale = active ? 1 - Math.abs(my) / height / 2 : 1;
        return { y, scale, display: "block" };
      });
    }
  );

  return (
    <div className={styles.wrapper}>
      {props.map(({ y, display, scale }, i) => (
        <animated.div
          className={styles.page}
          {...bind()}
          key={i}
          style={{ display, y }}
        >
          <animated.div
            style={{ scale, backgroundImage: `url(${pages[i]})` }}
          />
        </animated.div>
      ))}
    </div>
  );
}
