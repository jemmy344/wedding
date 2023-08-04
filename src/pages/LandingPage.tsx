import TopSection from "@/app/components/Header";
import OurStory from "@/app/components/OurStory";
import Payment from "@/app/components/Payment";
import PhotoGallery from "@/app/components/PhotoGallery";
import WhenWhere from "@/app/components/WhenWhere";
import { ParallaxProvider } from "react-scroll-parallax";
import style from "./landing.module.css";
function LandingPage() {
  return (
    <div className={`w-full ${style.scrollParent}`}>
      <div className={`${style.item}`}>
        <ParallaxProvider scrollAxis="vertical">
          <TopSection />
        </ParallaxProvider>
      </div>
      <div className={`${style.item}`}>
        <OurStory />
      </div>
      <div className={`${style.item}`}>
        <WhenWhere />
      </div>
      <div className={`${style.item}`}>
        <Payment />
      </div>
      <div className={`${style.item}`}>
        <PhotoGallery />
      </div>
    </div>
  );
}

export default LandingPage;
