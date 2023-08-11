import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { device } from "../../../../utils/exports"; // Import your custom breakpoints

interface ExpandableTextProps {
  textContent: string;
  maxLength: number;
}

const calculateFontSize = (screenWidth: number): string => {
  // Your font size calculation algorithm here
  // Adjust the formula and breakpoints as needed
  if (screenWidth >= device.large) {
    return "2.1rem"; // Large screens
  } else if (screenWidth >= device.medium) {
    return "1.8rem"; // Medium screens
  } else {
    return "1rem"; // Small screens
  }
};

const calculateContainerHeight = (
  screenWidth: number,
  expanded: boolean
): string => {
  let containerHeight: string;

  switch (true) {
    case screenWidth >= device.large:
      containerHeight = expanded ? "auto" : "auto";
      break;

    case screenWidth >= device.medium:
      containerHeight = expanded ? "300px" : "200px";
      break;

    case screenWidth >= device.small:
      containerHeight = expanded ? "450px" : "400px";
      break;

    default:
      containerHeight = "";
      break;
  }

  return containerHeight;
};

const ExpandableText: React.FC<ExpandableTextProps> = ({
  textContent,
  maxLength,
}) => {
  const [expanded, setExpanded] = useState(false);
  const textContainerRef = useRef<HTMLParagraphElement | null>(null);
  const [renderText, setRenderText] = useState("");
  const [containerHeight, setContainerHeight] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [classString, setClassString] = useState("");

  const isSmallScreen = useMediaQuery({
    query: `(max-width: ${device.medium - 1}px)`,
  });

  const isMediumScreen = useMediaQuery({
    query: `(min-width: ${device.medium}px) and (max-width: ${
      device.large - 1
    }px)`,
  });

  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${device.large}px)`,
  });

  const toggleExpand = () => {
    setExpanded(!expanded);

    if (!expanded && textContainerRef.current) {
      textContainerRef.current.focus();
    }
  };

  useEffect(() => {
    const string = `text-chocolate-brown p-5 font-mono backdrop-opacity-20 rounded-lg backdrop-invert bg-white/30 ${
      isLargeScreen
        ? ` leading-[40px] overflow-y-hidden`
        : isMediumScreen
        ? ` overflow-hidden`
        : isSmallScreen
        ? `overflow-y-scroll`
        : "text-base"
    }`;
    setClassString(string);
  }, [expanded, isLargeScreen, isMediumScreen, isSmallScreen]);
  useEffect(() => {
    setFontSize(calculateFontSize(window.innerWidth));
    setContainerHeight(calculateContainerHeight(window.innerWidth, expanded));
    console.log({ containerHeight });
  }, [containerHeight, expanded, isLargeScreen, isMediumScreen, isSmallScreen]);
  useEffect(() => {
    setRenderText(
      expanded
        ? textContent
        : isLargeScreen || isMediumScreen
        ? textContent
        : textContent.substring(0, maxLength + 1)
    );
  }, [expanded, isLargeScreen, isMediumScreen, maxLength, textContent]);

  return (
    <div className={`relative`}>
      <p
        ref={textContainerRef}
        className={classString}
        style={{ fontSize, maxHeight: containerHeight }}
      >
        {renderText}
      </p>
      {textContent.length > maxLength && !isLargeScreen && !isMediumScreen && (
        <p
          onClick={toggleExpand}
          className="absolute hover:ring-black bottom-2 cursor-pointer underline right-2 text-sm text-gray-500 hover:text-gray-700"
        >
          {expanded ? "See Less" : "See More"}
        </p>
      )}
    </div>
  );
};

export default ExpandableText;
