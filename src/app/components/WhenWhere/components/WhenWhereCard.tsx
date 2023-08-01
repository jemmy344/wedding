import { siteMetadata } from "@/data/siteMetadata";
import moment from "moment";
import * as React from "react";
import { MouseEventHandler, useState } from "react";
import Button3d from "./3dObjects/Button";
import GoogleMap from "./GoogleMap";
import styles from "./css/WhenWhere.module.css";
interface IAppProps {}

const WhenWhereCard: React.FunctionComponent<IAppProps> = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const handeClick: MouseEventHandler<HTMLButtonElement> = (evt) => {
    setIsMapOpen(false);
  };
  return (
    <>
      <div className={styles.parent}>
        {isMapOpen && <GoogleMap onClose={() => setIsMapOpen(false)} />}
        <div className={styles["when-card"]}>
          <div className={styles["content-box"]}>
            <span
              className={`${styles["card-title"]} font-primary font-semibold`}
            >
              Join Us
            </span>
            <p className={styles["card-content"]}>
              {siteMetadata.couplesDetails.whenWhereContent}
            </p>
          </div>
          <div className={styles["date-box"]}>
            <span className={styles["month"]}>
              {moment(siteMetadata.couplesDetails.weddingDate).format("MMMM")}
            </span>
            <span className={styles["date"]}>
              {siteMetadata.couplesDetails.weddingDate.getDate()}
            </span>
          </div>
        </div>
      </div>
      <Button3d text="See Map" onCLickEvt={handeClick} />
    </>
  );
};

export default WhenWhereCard;
