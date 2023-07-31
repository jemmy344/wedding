import React, { useState } from "react";
import Model from './Model';
import Image from "next/image";

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
    <div className="hero min-h-screen bg-[#f7f1e2]">
      <div className="hero-content flex-col lg:flex-row">
        <Image src="/images/couple-photo1.jpg" className="rounded-lg shadow-2xl animate-fadeInOut opacity-100 hover:[url('/images/couple-photo2.jpg')]" width={500} height={800} alt="couple" />
        <div>
          <h1 className="text-5xl font-bold text-primary font-primary">19th August 2023</h1>
          <p className="py-6 text-2x1 text-primary font-primary">{siteMetadata.couplesDetails.hisName} and {siteMetadata.couplesDetails.herName} are having a small celebration! We&apos;re excited to say &quot;I do&quot;, in the eyes of God, here in Abuja, Nigeria.</p>
          <button className="btn btn-primary" onClick={handleOpenModal}>Map</button>
        </div>
      </div>
      {showModal && <Model onClose={handleCloseModal} />}
    </div>
  );
}

export default WhenWhere;
