import { LINKS } from "./0-siteConfig";

const footerMainLinks = [
  {
    title: "Github",
    type: "external",
    href: LINKS.Github,
  },
  {
    title: "LinkedIn",
    type: "external",
    href: LINKS.LinkedIn,
  },
  {
    title: "YouTube",
    type: "external",
    href: LINKS.YouTube,
  },
];

const footerSecondaryLinks = [
  {
    title: "Privacy Policy",
    type: "internal",
    href: "/privacy-policy",
  },
  {
    title: "Terms of Services",
    type: "internal",
    href: "/terms-of-services",
  },
];

export const FOOTER_ITEMS = {
  mainLinks: footerMainLinks,
  secondaryLinks: footerSecondaryLinks,
};
export const CONTACT_CTA = {
  heading: "Let's Turn Vision Into Reality",
  description:
    "Have an idea worth building? I'd love to collaborate and bring your next project to life through data-driven, scalable solutions.",
};
