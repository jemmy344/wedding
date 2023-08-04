import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./css/WhenWhere.module.css";
export interface IMapModalHeaderProps {
  onClose: (bool: boolean) => void;
}

export default function ModalHeader(props: IMapModalHeaderProps) {
  return (
    <div className={styles.modalHeader}>
      <button
        className={`${styles.closeButton} z-[30000] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  bg-white w-8 h-8 rounded-full shadow-2xl`}
        onClick={() => props.onClose(false)}
      >
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => props.onClose(false)}
          className="transition ease-in-out delay-150 hover:-rotate-45  hover:text-primary duration-300"
        />
      </button>
    </div>
  );
}
