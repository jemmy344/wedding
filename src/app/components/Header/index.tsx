"use client";

import { HeaderNavLinks, headerNavLinks } from "@/data/headerNavLinks";

import { siteMetadata } from "@/data/siteMetadata";

import { classNames, getFirstNames, hasDateElapsed } from "@/utils/utils";

import { motion } from "framer-motion";

import { Bars } from "react-loader-spinner";

import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import ParticlesComponent from "../Particles";
import CountdownComponent from "./Countdown";
import "./style.css";
const Header = () => {
  return (
    <div className="navbar relative z-[200] p-10 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-[#FF9C34]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu

                    menu-sm dropdown-content mt-3 z-[301]

                    p-2 shadow bg-base-100 rounded-box w-52"
          >
            {headerNavLinks.map((navItem: HeaderNavLinks) => (
              <li key={navItem.title}>
                <a href={navItem.href}>{navItem.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <a
          className={classNames(
            `lg:text-2xl text-3xl text-[#FF9C34] font-secondary`,

            `normal-case`
          )}
        >
          {" "}
          {siteMetadata.couplesDetails.preferredThemeForEvent.length < 7
            ? siteMetadata.couplesDetails.preferredThemeForEvent
            : siteMetadata.siteLogo}
        </a>
      </div>

      <div className="navbar-center hidden lg:flex text-white">
        {headerNavLinks.map((navItem: HeaderNavLinks) => (
          <div
            className="hover:text-secondary active:text-secondary

                             focus:text-secondary"
            key={navItem.title}
          >
            <a
              className="btn btn-ghost font-normal font-secondary normal-case text-lg"
              href={navItem.href}
            >
              {navItem.title}
            </a>
          </div>
        ))}
      </div>

      <div className="navbar-end">
        <a className="">
          <Bars
            height="30"
            width="90"
            color="#FF9C34"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </a>
      </div>
    </div>
  );
};

const Name = () => {
  const coupleNames = getFirstNames();

  return (
    <div className="">
      <div className="absolute inset-0 bg-gradient-to-r from-[#4e2a05] via-[#2b1d0b] to-[#2b1d0b] opacity-[70%]" />

      <div className="absolute inset-0 flex flex-col justify-center items-center z-[100] w-full">
        <Tilt gyroscope={true} perspective={2000}>
          <div
            data-scroll="true"
            data-scroll-speed="3"
            className="is-inview w-full"
            style={{
              transform:
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -95.9694, 0, 1)",
            }}
          >
            <div
              className="wow is-inview w-full"
              data-scroll="true"
              data-scroll-speed="2"
              data-scroll-delay="0.6"
              style={{
                transform:
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -50.6319, 0, 1)",
              }}
            >
              <div
                className="w-full flex justify-center items-center"
                style={{
                  transformStyle: "preserve-3d",

                  position: "relative",

                  willChange: "transform",

                  transform: `perspective(500px) rotateX(0.73deg)

                                    rotateY(7.48deg) scale3d(1, 1, 1)`,
                }}
              >
                <div className="lg:text-6xl shadow-sm lg:mt-40 text-5xl flex justify-center items-center inset-0 font-primary w-full  h-[40px] flex-wrap">
                  <p className="text-[#f7f1e2]">{coupleNames.hisFirstName}</p>

                  <p className="text-[#e15f35]">&nbsp;&&nbsp;</p>

                  <p className="text-[#f7f1e2]">{coupleNames.herFirstName}</p>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

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
                fontFamily: "Helvetica Neue,Arial",
                fontSize: "18.7px",
                fontWeight: 700,
                fill: "#eea187",
                transition: "fill .3 ease",
                transform: "scale(.777)",
                transformOrigin: "center",
              }}
              fill="#000"
            >
              {hasDateElapsedValue ? (
                <textPath href="#circlePath">
                  We did it - We got married ♡ Praise Jesus.
                </textPath>
              ) : (
                <textPath href="#circlePath">You are invited.</textPath>
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

const TopSection = () => {
  return (
    <div className="h-screen">
      <ParticlesComponent />

      <div className="w-full">
        <Header />

        <div className="absolute inset-0 bg-topImage  bg-cover bg-center lg:bg-top bg-no-repeat w-full">
          <div className="h-screen w-full relative cursor-context-menu">
            <Name />
            <div className="absolute inset-0 w-full flex flex-col justify-center items-center top-[90%]">
              <CircleSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
