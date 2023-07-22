import TopSection from "@/app/components/Header";
import ParticlesComponent from "@/app/components/Particles";
import OurStory from "@/app/components/OurStory";
import WhenWhere from "@/app/components/WhenWhere";




function LandingPage() {
    return (
        <div className="w-full ">
            <TopSection />
            <OurStory /> 
            <WhenWhere /> 
        </div>
    );
}

export default LandingPage;