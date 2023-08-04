import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";

const SoundSwitcher: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleSwitchToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
    // You can perform any other actions here based on the switcher state
  };
  useEffect(() => {
    const audioElement = document.getElementById(
      "soundSwitcherAudio"
    ) as HTMLAudioElement;
    if (audioElement) {
      if (isOn) {
        audioElement.src = "/dandelions.ogg"; // Replace with the path to your "on" sound file
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [isOn]);

  return (
    <label className="swap swap-flip cursor-pointer z-[1501]">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" checked={isOn} onChange={handleSwitchToggle} />

      {/* sun icon */}
      <Bars
        height="30"
        width="90"
        color="#B76E79"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass="swap-on fill-current w-10 h-10"
        visible={isOn}
      />

      {/* moon icon */}
      <svg
        className={`swap-off  w-10 h-10 ${isOn ? "hidden" : "block"}`}
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="#B76E79"
        // stroke="#FF9C34"
      >
        <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
      </svg>
      <audio id="soundSwitcherAudio" preload="auto">
        <source src="" type="audio/ogg" />
        {/* Add additional source elements here for other audio formats */}
      </audio>
    </label>
  );
};

export default SoundSwitcher;
