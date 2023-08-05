import { siteMetadata } from "@/data/siteMetadata";
import { createPortal } from "react-dom";
import ModalHeader from "./ModalHeader";
import styles from "./css/modal.module.css";
interface IGoogleMapProps {
  onClose: (bool: boolean) => void;
}
const Modal = ({ onClose }: IGoogleMapProps) => {
  return createPortal(
    <div className={`${styles.modalBackground} opacity-90 z-20`}>
      <div className={styles.modalContent}>
        <ModalHeader onClose={() => onClose(false)} />
        <div className="flex flex-col justify-center items-center gap-5 font-bold text-lg ">
          <div className="capitalize">
            <siteMetadata.couplesDetails.accountDetails.bankLogo />
          </div>
          <label>{siteMetadata.couplesDetails.accountDetails.bankName}</label>
          <label className="capitalize">
            {siteMetadata.couplesDetails.accountDetails.accountName}
          </label>
          <label className="capitalize">
            {siteMetadata.couplesDetails.accountDetails.accountNumber}
          </label>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
