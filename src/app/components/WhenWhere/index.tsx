import { useState } from "react";

import WhenWhereCard from "./components/WhenWhereCard";

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
      <WhenWhereCard />
    </div>
  );
};

export default WhenWhere;
