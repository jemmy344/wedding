import { createPortal } from "react-dom";
import styles from "./modal.css";
interface IGoogleMapProps {
  onClose: (bool: boolean) => void;
}
const Modal = ({ onClose }: IGoogleMapProps) => {
  return createPortal(
    <div className={`${styles.modalBackground} opacity-90 z-20`}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <ModalHeader onClose={onClose} />
        
      </div>
    </div>,
    document.body
  );
};

export default Modal;
