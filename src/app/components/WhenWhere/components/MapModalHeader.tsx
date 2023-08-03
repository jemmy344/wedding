import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./css/WhenWhere.module.css";
export interface IMapModalHeaderProps {
  onClose: () => void;
}

export default function MapModalHeader(props: IMapModalHeaderProps) {
  return (
    <div className={styles.modalHeader}>
      <button
        className={`${styles.closeButton} z-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  bg-white w-8 h-8 rounded-full shadow-2xl`}
        onClick={props.onClose}
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="transition ease-in-out delay-150 hover:-rotate-45  hover:text-primary duration-300"
        />
      </button>
    </div>
  );
}