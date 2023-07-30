import React, { useState } from "react";
import Model from './Model';
import { topImage } from "../../../assets/index";
import { siteMetadata } from "@/data/siteMetadata";

const WhenWhere = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">19th August 2023</h1>
          <p className="py-6">{siteMetadata.couplesDetails.hisName} and {siteMetadata.couplesDetails.herName} are having a small celebration! We&apos;re excited to say &quot;I do&quot;, in the eyes of God, here in Abuja, Nigeria.</p>
          <button className="btn btn-primary" onClick={handleOpenModal}>Map</button>
        </div>
      </div>
      {showModal && <Model onClose={handleCloseModal} />}
    </div>
  );
}

export default WhenWhere;
