import { ReactChild } from "react";

export type Sections = 'about' | 'roadmap' | 'faq' | 'rabbit';

export type DesktopLinkType = {
  href: Sections;
  children: ReactChild;
  animationTimeout?: number;
}

export type MobileLinkType = {
  href: Sections;
  children: ReactChild;
  toggleNavMobile: () => void;
  handleClick: (href:Sections) => void;
  animationTimeout?: number;
}
