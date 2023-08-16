import { siteMetadata } from "@/data/siteMetadata";
import { daysUntil, getEndOfDayTime } from "@/utils/utils"; // Assuming you have a utility function for getting the end of the day time
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from './style.module.css';
const CountdownComponent: React.FC = () => {
  const memoizedWeddingDate = useMemo(
    () => new Date(siteMetadata.couplesDetails.weddingDate),
    [] // Empty dependency array, so it's only initialized once
  );

  const [counter, setCounter] = useState<number>(
    daysUntil(memoizedWeddingDate)
  );
  const counterElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateCounterAtMidnight = () => {
      const now = new Date();
      const endOfDay = getEndOfDayTime(now); // Get the end of the day time for the current date
      const timeDifference = endOfDay.getTime() - now.getTime();

      // Update the counter at midnight (end of the day)
      if (timeDifference <= 1000) {
        // Check if the time difference is less than or equal to 1 second
        const newDays = daysUntil(memoizedWeddingDate);
        setCounter(newDays);
      }
    };

    // Set up an interval to check if it's midnight and update the counter accordingly
    const interval = setInterval(updateCounterAtMidnight, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [memoizedWeddingDate]);

  // Update the CSS custom property '--value' when counter changes
  useEffect(() => {
    if (counterElementRef.current) {
      counterElementRef.current.style.setProperty(
        "--value",
        counter.toString()
      );
    }
  }, [counter]);

  return (

<div className="flex flex-col justify-center items-center text-rose-gold">
      <span className="countdown font-marhey text-6xl ">
        <span
          ref={counterElementRef}
          style={{
            ...{ "--value": counter },
          }}
        ></span>
      </span>
      <p className="font-primary -mt-4">Days</p>
    </div>
    
  );
};
export default CountdownComponent;
