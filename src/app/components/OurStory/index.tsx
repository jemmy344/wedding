import { siteMetadata } from "@/data/siteMetadata";
import React from "react";
import Item from "./components/Item";
import style from "./css/style.module.css";
const OurStory = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const handleMouseOver = (index: number) => {
    console.log("clicked" + index);

    setActiveIndex(index);
  };

  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1064%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(200%2c 162%2c 200%2c 1)'%3e%3c/rect%3e%3cuse xlink:href='%23SvgjsSymbol1071' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1071' x='720' y='0'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1064'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1067'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1068'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1065'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1069'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1066'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1070'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1071'%3e%3cuse xlink:href='%23SvgjsPath1065' x='30' y='30' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='30' y='90' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='30' y='150' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1068' x='30' y='210' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='30' y='270' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='30' y='330' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='30' y='390' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='30' y='450' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='30' y='510' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='30' y='570' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='90' y='30' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='90' y='90' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1068' x='90' y='150' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='90' y='210' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='90' y='270' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='90' y='330' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1070' x='90' y='390' stroke='rgba(120%2c 69%2c 53%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1068' x='90' y='450' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='90' y='510' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='90' y='570' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='150' y='30' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='150' y='90' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='150' y='150' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1068' x='150' y='210' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='150' y='270' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='150' y='330' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='150' y='390' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1068' x='150' y='450' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='150' y='510' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='150' y='570' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='210' y='30' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='210' y='90' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='210' y='150' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1068' x='210' y='210' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='210' y='270' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1068' x='210' y='330' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='210' y='390' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='210' y='450' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='210' y='510' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='210' y='570' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='270' y='30' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='270' y='90' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='270' y='150' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='270' y='210' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='270' y='270' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='270' y='330' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='270' y='390' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1068' x='270' y='450' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='270' y='510' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='270' y='570' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='330' y='30' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='330' y='90' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='330' y='150' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='330' y='210' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='330' y='270' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1070' x='330' y='330' stroke='rgba(120%2c 69%2c 53%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='330' y='390' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1068' x='330' y='450' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='330' y='510' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='330' y='570' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='390' y='30' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='390' y='90' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='390' y='150' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1068' x='390' y='210' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='390' y='270' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1068' x='390' y='330' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='390' y='390' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='390' y='450' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='390' y='510' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1070' x='390' y='570' stroke='rgba(120%2c 69%2c 53%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='450' y='30' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='450' y='90' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='450' y='150' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='450' y='210' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='450' y='270' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='450' y='330' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='450' y='390' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='450' y='450' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='450' y='510' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='450' y='570' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='510' y='30' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='510' y='90' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='510' y='150' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1068' x='510' y='210' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='510' y='270' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='510' y='330' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='510' y='390' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='510' y='450' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='510' y='510' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='510' y='570' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='570' y='30' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='570' y='90' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='570' y='150' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='570' y='210' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='570' y='270' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1070' x='570' y='330' stroke='rgba(120%2c 69%2c 53%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='570' y='390' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1068' x='570' y='450' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='570' y='510' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='570' y='570' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='630' y='30' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='630' y='90' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='630' y='150' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='630' y='210' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='630' y='270' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='630' y='330' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='630' y='390' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='630' y='450' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1070' x='630' y='510' stroke='rgba(120%2c 69%2c 53%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='630' y='570' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='690' y='30' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='690' y='90' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1069' x='690' y='150' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='690' y='210' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1066' x='690' y='270' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='690' y='330' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1067' x='690' y='390' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1065' x='690' y='450' stroke='rgba(120%2c 69%2c 53%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1070' x='690' y='510' stroke='rgba(120%2c 69%2c 53%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1070' x='690' y='570' stroke='rgba(120%2c 69%2c 53%2c 1)' stroke-width='3'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e")`,
      }}
      className="w-full min-h-screen text-white flex items-center justify-center p-10"
    >
      <div className={`${style.container} h-full`}>
        {siteMetadata.couplesDetails.story.map((stories, index, story) => {
          return (
            <Item
              currentIndex={index}
              goNext={() => handleMouseOver(index + 1)}
              goPrev={() => handleMouseOver(index - 1)}
              key={stories.title}
              imageUrl={`/images/pic${index + 1}.jpg`}
              title={stories.title}
              content={stories.content}
              isActive={activeIndex === index}
              onClick={() => handleMouseOver(index)}
              lastIndex={story.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurStory;
