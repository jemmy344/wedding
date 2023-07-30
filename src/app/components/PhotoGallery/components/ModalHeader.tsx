import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "./ModalHeader.module.css";

interface ModalHeaderProps {
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => {
  return (
    <div className={styles.modalHeader}>
      <button className={styles.closeButton} onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <button className={styles.playButton}>
        <FontAwesomeIcon icon={faPlay} />
      </button>
    </div>
  );
};

export default ModalHeader;
