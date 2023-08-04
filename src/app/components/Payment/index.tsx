import { siteMetadata } from "@/data/siteMetadata";
import Link from "next/link";
import "./style.css";
export interface IPaymentProps {}

export default function Payment(props: IPaymentProps) {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-[78%]">
        <div className="card ">
          <p className="heading font-primary text-rose-gold">Gifts</p>
          <p className="para">
            We have most things we need for life and love. if you want to bless
            us with a gift, we can always use cash gifts as we move to our new
            place. we will appreciate your prayers and well wishes as we start
            this journey together.
          </p>
          <div className="overlay"></div>
          <div className="flex w-[20%] justify-center items-center gap-7">
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
          </div>
        </div>
      </div>
    </div>
  );
}
