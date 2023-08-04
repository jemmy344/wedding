/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { siteMetadata } from "@/data/siteMetadata";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import "./css/style.css";

export default function Payment() {
  const [showAccountModal, setShowAccountModal] = useState(false);
  return (
    <div className="flex justify-center items-center w-full">
      {showAccountModal && <Modal onClose={setShowAccountModal} />}
      <div className="w-[78%]">
        <div className="card ">
          <img src="/images/gift.gif" height={"100px"} width={"100px"} />
          <p className="heading font-primary text-rose-gold">Gifts</p>
          <p className="para">
            We have most things we need for life and love. if you want to bless
            us with a gift, we can always use cash gifts as we move to our new
            place. we will appreciate your prayers and well wishes as we start
            this journey together.
          </p>
          <div className="overlay"></div>
          <div className="flex w-[20%] justify-center items-center gap-7 z-[0]">
            {siteMetadata.couplesDetails.paymentLinks.map((links) => (
              <Link
                passHref={true}
                href={links.link}
                key={links.link}
                className="btn  card-btn"
              >
                <links.providerLogo></links.providerLogo>
              </Link>
            ))}
            <button
              onClick={() => setShowAccountModal(true)}
              className="btn  card-btn"
            >
              <p className="text-base">Account</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
