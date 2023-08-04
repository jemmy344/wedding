import { siteMetadata } from "./siteMetadata";

export const headerNavLinks: HeaderNavLinks[] = [
  { href: "#our-story", title: "Our Story" },
  { href: "#when-where", title: "When & Where" },
  { href: "#gift", title: "Gifts" },
  { href: "#photo-album", title: "Photo Album" },
  { href: `mailto:${siteMetadata.couplesDetails.contactEmail}`, title: "Contact" },
  // { href: '/about', title: 'About' },
];

export interface HeaderNavLinks {
  href: string;
  title: string;
}
