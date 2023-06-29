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
  weddingColor: string;
  weddingDate: Date;
  howDidWeMeet: string;
  memorableStory: string;
  theProposal: string;
}

const couplesDetails: CouplesDetails = {
  hisName: "Nick Fury",
  herName: "Carol Danvers",
  preferredThemeForEvent: "Our Inforgettable Wedding",
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
  contactEmail: "nickcarol@everyplanet.com",
  venueLocation: "On the Dark Side of the Moon",
  weddingColor: "teal",
  weddingDate: new Date(),
  howDidWeMeet: "",
  memorableStory: "",
  theProposal: "",
};

interface SiteMetadata {
  title: string;

  headerTitle: string;
  description: string;
  language: string;
  theme: "system" | "dark" | "light";
  siteUrl: string;
  siteLogo: string;
  locale: string;
  analytics: {
    plausibleDataDomain: string;
    simpleAnalytics: boolean;
    umamiWebsiteId: string;
    googleAnalyticsId: string;
    posthogAnalyticsId: string;
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
};

export { siteMetadata, couplesDetails };
