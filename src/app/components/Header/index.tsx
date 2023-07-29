"use client";

import ParticlesComponent from "../Particles";
import CircleSvg from "./CircleSvg";
import Header from "./Header";
import Name from "./Name";
import "./style.css";

const TopSection = () => {
  return (
    <ParticlesComponent>
      <div className="h-screen">
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
    </ParticlesComponent>
  );
};

export default TopSection;
