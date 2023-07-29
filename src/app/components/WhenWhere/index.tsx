import React from "react";
import { siteMetadata } from "@/data/siteMetadata";
import GoogleMap from './GoogleMap';

const WhenWhere = () => {
  return (
    <div className="flex justify-center">
      <div className="p-5">
        <div className="flex row">
          <div className="col-6">
            <a href="#" className="block max-w-sm p-6 bg-brown border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h1>August</h1>
            </a>
          </div>
          <div className="col-6">
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="text-9xl font-bold">19th</div>
            </a>
          </div>
        </div>
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <GoogleMap />
        </a>
      </div>
    </div>
  );
}

export default WhenWhere;
