import { getFirstNames } from "@/utils/utils";
import Tilt from "react-parallax-tilt";
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

export default Name;
