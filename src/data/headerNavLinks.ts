import { siteMetadata } from "./siteMetadata";

export const headerNavLinks: HeaderNavLinks[] = [
  { href: "#our-story", title: "Our Story" },
  { href: "#photo-album", title: "Photo Album" },
  { href: `mailto:${siteMetadata.couplesDetails.contactEmail}`, title: "Contact" },
  // { href: '/about', title: 'About' },
];

export interface HeaderNavLinks {
  href: string;
  title: string;
}
