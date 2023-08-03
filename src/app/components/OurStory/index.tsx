import { siteMetadata } from "@/data/siteMetadata";

const OurStory = () => {
  return (
    <div id="our-story" className="w-full min-h-screen bg-primary text-white flex items-center justify-center">
      <p className="m-10 px-8 text-justify lg:px-20 xl:px-32 font-primary text-2xl">
        {siteMetadata.couplesDetails.howDidWeMeet}
      </p>
    </div>
  );
};

export default OurStory;
