import React from "react";
import Wedding from "../../../assets/img/Wedding.png";

const OurStory = () => {
  return (
    <div className="flex">
      <div className="flex font-bold text-6xl max-h-2 w-1/4 p-6">
        <p>SAVE THE DATE</p>
      </div>

      <div className="flex mt-4">
        <div className="bg-white rounded-lg shadow-md p-6 mr-4">
          <img src="image1.jpg" alt="Image 1" />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mr-4">
          <img src="image2.jpg" alt="Image 2" />
        </div>
        <div className="card bg-white rounded-lg shadow-md p-6 mr-4">
        <img src={Wedding} alt="wedding" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
