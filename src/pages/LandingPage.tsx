import Footer from "@/app/components/Footer";
import TopSection from "@/app/components/Header";
import OurStory from "@/app/components/OurStory";
import PhotoGallery from "@/app/components/PhotoGallery";
import WhenWhere from "@/app/components/WhenWhere";
import { ParallaxProvider } from "react-scroll-parallax";

function LandingPage() {
  return (
    <div className="w-full ">
      <ParallaxProvider scrollAxis="vertical">
        <TopSection />
      </ParallaxProvider>
      <OurStory />
      <WhenWhere />
      <PhotoGallery />
      <Footer />
    </div>
  );
}

export default LandingPage;
