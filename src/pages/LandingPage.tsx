import TopSection from "@/app/components/Header";
import ParticlesComponent from "@/app/components/Particles";




function LandingPage() {
    return (
        <div className="w-full ">
            <ParticlesComponent />
            <TopSection />
            {/* <OurStory /> */}
            {/* <WhenWhere /> */}
        </div>
    );
}

export default LandingPage;