import { siteMetadata } from "@/data/siteMetadata";
import { getFormattedDate, hasDateElapsed } from "@/utils/utils";
import CountdownComponent from "./Countdown";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

const CircleSvg = () => {
  const [hasDateElapsedValue, setHasDateElapsedValue] = useState(false);

  useEffect(() => {
    const value = hasDateElapsed(siteMetadata.couplesDetails.weddingDate);
    setHasDateElapsedValue(value);
  }, []);

  const containerVariants = {
    initial: {
      rotate: 0,

      transition: {
        duration: 8,

        ease: "linear",

        repeat: Infinity,
      },
    },

    animate: {
      rotate: 360,

      transition: {
        duration: 8,

        ease: "linear",

        repeat: Infinity,
      },
    },
  };

  return (
    <div
      className=""
      data-scroll="true"
      data-scroll-speed="1"
      style={{
        transform:
          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 33.3425, 0, 1)",
      }}
    >
      <div
        id="circle"
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "100%",
          overflow: "hidden",
          WebkitAnimationDelay: "1s",
          animationDelay: "1s",
        }}
      >
        <motion.svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="20%"
          height="20%"
          viewBox="0 0 300 300"
          enableBackground="new 0 0 300 300"
          xmlSpace="preserve"
          style={{ transformOrigin: "50% 50%" }}
          className=" w-[400px] h-[400px]"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <defs>
            <path
              id="circlePath"
              d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            ></path>
          </defs>

          <circle cx="150" cy="100" r="75" fill="none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              preserveAspectRatio="xMidYMid meet"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="m256 512c-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02s-26.629 132.667-74.98 181.02c-48.353 48.351-112.64 74.98-181.02 74.98zm0-472c-119.103 0-216 96.897-216 216s96.897 216 216 216 216-96.897 216-216-96.897-216-216-216zm93.737 260.188c-9.319-5.931-21.681-3.184-27.61 6.136-.247.387-25.137 38.737-67.127 38.737s-66.88-38.35-67.127-38.737c-5.93-9.319-18.291-12.066-27.61-6.136s-12.066 18.292-6.136 27.61c1.488 2.338 37.172 57.263 100.873 57.263s99.385-54.924 100.873-57.263c5.93-9.319 3.183-21.68-6.136-27.61zm-181.737-135.188c13.807 0 25 11.193 25 25s-11.193 25-25 25-25-11.193-25-25 11.193-25 25-25zm150 25c0 13.807 11.193 25 25 25s25-11.193 25-25-11.193-25-25-25z"
                  fill="#e29e84"
                ></path>
              </g>
            </svg>
          </circle>

          <g>
            <use href="#circlePath" fill="none"></use>

            <text
              style={{
                fill: "#eea187",
                transition: "fill .3 ease",
                transform: "scale(.777)",
                transformOrigin: "center",
              }}
              fill="#000"
            >
              {hasDateElapsedValue ? (
                <textPath
                  className="font-secondary font-bold text-[18px]"
                  href="#circlePath"
                >
                  We did it - We got married ♡ Praise Jesus.
                </textPath>
              ) : (
                <textPath
                  className="font-q font-bold text-[18px]"
                  href="#circlePath"
                >
                  We are getting married on{" "}
                  {`${getFormattedDate(
                    siteMetadata.couplesDetails.weddingDate
                  )}`}{" "}
                  &nbsp;
                </textPath>
              )}
            </text>
          </g>
        </motion.svg>
      </div>

      <div className="countdown-wrapper">
        {hasDateElapsedValue ? (
          <div
            className="spinning-smiley is-inview"
            data-scroll="true"
            data-scroll-speed="2"
            style={{
              transform:
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 53.2103, 0, 1)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              preserveAspectRatio="xMidYMid meet"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="m256 512c-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02s-26.629 132.667-74.98 181.02c-48.353 48.351-112.64 74.98-181.02 74.98zm0-472c-119.103 0-216 96.897-216 216s96.897 216 216 216 216-96.897 216-216-96.897-216-216-216zm93.737 260.188c-9.319-5.931-21.681-3.184-27.61 6.136-.247.387-25.137 38.737-67.127 38.737s-66.88-38.35-67.127-38.737c-5.93-9.319-18.291-12.066-27.61-6.136s-12.066 18.292-6.136 27.61c1.488 2.338 37.172 57.263 100.873 57.263s99.385-54.924 100.873-57.263c5.93-9.319 3.183-21.68-6.136-27.61zm-181.737-135.188c13.807 0 25 11.193 25 25s-11.193 25-25 25-25-11.193-25-25 11.193-25 25-25zm150 25c0 13.807 11.193 25 25 25s25-11.193 25-25-11.193-25-25-25-25 11.193-25 25z"
                  fill="#e29e84"
                ></path>
              </g>
            </svg>
          </div>
        ) : (
          <div className="countdown-col-element">
            <CountdownComponent />
          </div>
        )}
      </div>
    </div>
  );
};
export default CircleSvg;
