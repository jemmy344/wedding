import CircularText from "../app/components/CircularText";
import OurStory from "@/app/components/OurStory";
import WhenWhere from "@/app/components/WhenWhere";
import TopSection from "@/app/components/Header";
import ParticlesComponent from "@/app/components/Particles";




function LandingPage() {
    return (
        <div className="w-full">
            <ParticlesComponent />
            <TopSection />
            {/* <OurStory /> */}
            {/* <WhenWhere /> */}
        </div>
    );
}

export default LandingPage;