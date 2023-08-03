import { faPause, faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "./css/ModalHeader.module.css";

interface ModalHeaderProps {
  onClose: () => void;
  onPlay: () => void;
  isPlaying: boolean;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
  onClose,
  onPlay,
  isPlaying,
}) => {
  return (
    <div className={styles.modalHeader}>
      <button
        className={`${styles.closeButton} z-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  bg-white w-8 h-8 rounded-full shadow-2xl`}
        onClick={onClose}
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="transition ease-in-out delay-150 hover:-rotate-45  hover:text-primary duration-300"
        />
      </button>
      <button
        onClick={onPlay}
        className={`${styles.playButton} z-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  bg-white w-8 h-8 rounded-full shadow-2xl flex justify-center items-center`}
      >
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          className="transition ease-in-out delay-150 hover:-rotate-45  hover:text-primary duration-300"
        />
      </button>
    </div>
  );
};

export default ModalHeader;
