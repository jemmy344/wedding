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
          {siteMetadata.couplesDetails.accountDetails.map((acctDetails) => (
            <div
              key={acctDetails.accountNumber}
              className="bg-gradient-to-r w-[60%] from-blue-300 to-purple-400 rounded-lg shadow-xl p-8 mb-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{acctDetails.bankName}</h2>
                <span className="text-gray-600">
                  <i className="fas fa-university"></i>
                </span>
              </div>
              <div className="text-gray-700 mb-2">
                <p className="capitalize">{acctDetails.accountName}</p>
                <p className="uppercase">{acctDetails.accountNumber}</p>
              </div>
              <div className="text-gray-500">
                {acctDetails.sortCode && (
                  <p>Sort Code: {acctDetails.sortCode}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
