/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { siteMetadata } from "@/data/siteMetadata";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import style from "./style.module.css";
import { AccountSVG } from "./KudaSvg";

export default function Payment() {
  const [showAccountModal, setShowAccountModal] = useState(false);
  return (
    <div id="gift" className="flex justify-center items-center w-full">
      {showAccountModal && <Modal onClose={setShowAccountModal} />}
      <div className="w-[78%]">
        <div className={`${style.card}`}>
          <img src="/images/gift.gif" height={"100px"} width={"100px"} />
          <p className={`${style.heading} font-primary text-rose-gold`}>
            Gifts
          </p>
          <p className={`${style.para}`}>
            We have most things we need for life and love. if you want to bless
            us with a gift, we can always use cash gifts as we move to our new
            place. we will appreciate your prayers and well wishes as we start
            this journey together.
          </p>
          <div className={`${style.overlay}`}></div>
          <div className="flex w-[20%] justify-center items-center gap-7 z-[0]">
            {siteMetadata.couplesDetails.paymentLinks.map((links) => (
              <Link
                passHref={true}
                href={links.link}
                key={links.link}
                className={`btn  ${style["card-btn"]}`}
              >
                <links.providerLogo></links.providerLogo>
              </Link>
            ))}
            <button
              onClick={() => setShowAccountModal(true)}
              className={`btn  ${style["card-btn"]}`}
            >
              <AccountSVG/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
