import { createPortal } from "react-dom";
import MapModalHeader from "./MapModalHeader";
import styles from "./css/modal.module.css";
interface IGoogleMapProps {
  onClose: () => void;
}
const GoogleMap = ({ onClose }: IGoogleMapProps) => {
  return createPortal(
    <div className={`${styles.modalBackground} opacity-90`} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <MapModalHeader onClose={onClose} />
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3940.7041395330602!2d7.477120874454164!3d8.999347889453562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAGNL%20Gardens%20Abuja!5e0!3m2!1sen!2sng!4v1690400712709!5m2!1sen!2sng"
          className="w-full h-full"
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>,
    document.body
  );
};

export default GoogleMap;
