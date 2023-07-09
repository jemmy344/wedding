import Header from "@/app/components/Header";
import CircularText from "../app/components/CircularText";
import OurStory from "@/app/components/OurStory";
import WhenWhere from "@/app/components/WhenWhere";




function LandingPage() {
    return (
        <div className="w-full">
           <Header />
           <OurStory />
           <WhenWhere />
        </div>
    );
}

export default LandingPage;