"use client";

import ParticlesComponent from "../Particles";
import CircleSvg from "./CircleSvg";
import Header from "./Header";
import Name from "./Name";

const TopSection = () => {
  return (
    <>
      <Header />
      <ParticlesComponent>
        <div className="h-screen">
          <div className="absolute z-[-1] inset-0 bg-topImage  bg-cover bg-center lg:bg-top bg-no-repeat w-full" />
          <div className="w-full">
            <Name />
            <div className="absolute inset-0 w-full flex flex-col justify-center items-center top-[90%]">
              <CircleSvg />
            </div>
          </div>
        </div>
      </ParticlesComponent>
    </>
  );
};

export default TopSection;
