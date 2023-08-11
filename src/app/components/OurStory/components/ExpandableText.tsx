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
    return "1.45rem"; // Large screens
  } else if (screenWidth >= device.medium) {
    return "1.1rem"; // Medium screens
  } else {
    return "1rem"; // Small screens
  }
};

const calculateContainerHeight = (
  screenWidth: number,
  expanded: boolean
): string => {
  // Your container height calculation algorithm here
  // Adjust the formula and breakpoints as needed
  if (expanded && screenWidth >= device.large) {
    return "auto"; // Expanded on large screens
  } else if (expanded) {
    return "500px"; // Expanded on small/medium screens
  } else {
    return "300px"; // Unexpanded height
  }
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
        ? `text-[120px] leading-[40px] overflow-y-hidden ${
            expanded ? "h-auto" : "h-auto"
          }`
        : isMediumScreen
        ? `text-4xl overflow-hidden ${expanded ? "h-auto" : "h-auto"}`
        : isSmallScreen
        ? "text-sm"
        : "text-base"
    }`;
    setClassString(string);
  }, [expanded, isLargeScreen, isMediumScreen, isSmallScreen]);
  useEffect(() => {
    setFontSize(calculateFontSize(window.innerWidth));
    setContainerHeight(calculateContainerHeight(window.innerWidth, expanded));
  }, [expanded]);
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
        style={{ fontSize, height: containerHeight }}
      >
        {renderText}
      </p>
      {textContent.length > maxLength && !isLargeScreen && (
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
