import { getInitials, getTitleFormat } from "@/utils/utils";

interface CouplesDetails {
  hisName: string;
  herName: string;
  preferredThemeForEvent: string;
  media: {
    preEngagementPictures: string[];
    postEngagementPictures: string[];
    videos: string[];
  };
  paymentLinks: {
    provider: string;
    providerLogo: string;
    link: string;
  }[];
  contactEmail: string;
  venueLocation: string;
  weddingColor: {
    colorText: string;
    colorCode: string;
  }[];
  weddingDate: Date;
  howDidWeMeet: string;
  memorableStory: string;
  theProposal: string;
  thankYouMessage: string;
}

const couplesDetails: CouplesDetails = {
  hisName: "Samuel Matthew",
  herName: "Priscilla Aremu",
  preferredThemeForEvent: "PSAM23",
  media: {
    preEngagementPictures: [],
    postEngagementPictures: [],
    videos: [],
  },
  paymentLinks: [
    {
      provider: "PayPal",
      providerLogo: "",
      link: "",
    },
    {
      provider: "Kuda",
      providerLogo: "",
      link: "",
    },
  ],
  contactEmail: "aremupriscilla@gmail.com",
  venueLocation: "AGNL Gardens Abuja",
  //wedding colors must be ordered by preference
  weddingColor: [
    {
      colorCode: "Rose Gold",
      colorText: "#b76e79",
    },
    {
      colorCode: "Lilac",
      colorText: "#C8A2C8",
    },
    {
      colorCode: "Chocolate Brown",
      colorText: "#7b3f00",
    },
  ],
  weddingDate: new Date(2023, 7, 19),
  howDidWeMeet:
    "The never-ending chronicles of the PSAM’s began sometime in November 2017 at the Nigerian Law school, Abuja Campus, when we met as strangers introduced by a mutual acquaintance. Coincidentally, we were placed in the same group though different subgroups.",
  memorableStory:
    "From being strangers we became casual friends, then reading partners. Let say at this time a seed was planted, but the germination and sprouting did not happen until a year later, November 2018 on Sam’s call to Bar day. He popped the question that was graced with an affirmative YES. We watered and tended to this our love-sprouting tree to survive the weathers and blossom into a mighty tree of great comfort, undoubted trust, pristine love and assured security.",
  theProposal:
    "Fours years ran so quickly, we looked at what we’ve built and found it beautiful, we saw how mighty our love- tree has grown, while we marvel at the journey we’ve walked, Sam surprisingly popped the big question “Will you marry me and walk forever with me?” with one knee down and a ring in his right hand waiting for a resounding YES that finally came after the shock and drama from Priscilla due to the unsuspected timing, circumstance and place.",
  thankYouMessage: `
  We would like to take this moment to express our heartfelt appreciation for your presence, \n
  warm and thoughtful wishes that has made our wedding day truly unforgettable. We are incredibly\n
   grateful for the love, support, and blessings you showered upon us. We feel incredibly blessed \n
   to have such amazing friends and family like you in our lives. Your kind words and joyful spirits \n
   filled our hearts with happiness. Thank you for making our special day even more special and we look \n
   forward to creating many more cherished memories with you in the future.
   #PSAM'23
  `,
};

interface SiteMetadata {
  title: string;
  couplesDetails: CouplesDetails;
  headerTitle: string;
  description: string;
  language: string;
  theme: "system" | "dark" | "light";
  siteUrl: string;
  siteLogo: string;
  locale: string;
  logoSize: string;
  logoColor:string;
  analytics: {
    plausibleDataDomain: string;
    simpleAnalytics: boolean;
    umamiWebsiteId: string;
    googleAnalyticsId: string;
    posthogAnalyticsId: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
}

const siteMetadata: SiteMetadata = {
  title: `${getTitleFormat(couplesDetails.hisName, couplesDetails.herName)}`,
  headerTitle: couplesDetails.preferredThemeForEvent,
  description: "",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: "",
  siteLogo: `${getInitials(couplesDetails.hisName, couplesDetails.herName)}`,
  logoSize: `2xl`,
  logoColor: `text-[${couplesDetails.weddingColor[2].colorCode}]`,
  locale: "en-US",
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: "", // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: "", // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: "", // e.g. UA-000000-2 or G-XXXXXXX
    posthogAnalyticsId: "", // posthog.init e.g. phc_5yXvArzvRdqtZIsHkEm3Fkkhm3d0bEYUXCaFISzqPSQ
  },
  couplesDetails: couplesDetails,
  fonts: {
    primary: "lily",
    secondary: "sen",
  },
};

export { siteMetadata, couplesDetails };
