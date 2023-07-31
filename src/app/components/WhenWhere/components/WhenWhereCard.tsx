import { siteMetadata } from "@/data/siteMetadata";
import moment from "moment";
import * as React from "react";
import { MouseEventHandler } from "react";
import Button3d from "./3dObjects/Button";
import styles from "./css/WhenWhere.module.css";
interface IAppProps {}

const WhenWhereCard: React.FunctionComponent<IAppProps> = () => {
  const handeClick: MouseEventHandler<HTMLButtonElement> = (evt) => {
    console.log("it worked");
  };
  return (
    <>
      <div className={styles.parent}>
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
              {moment(siteMetadata.couplesDetails.weddingDate).format("MMM")}
            </span>
            <span className={styles["date"]}>
              {siteMetadata.couplesDetails.weddingDate.getDay()}
            </span>
          </div>
        </div>
      </div>
      <Button3d text="See Map" onCLickEvt={handeClick} />
    </>
  );
};

export default WhenWhereCard;
