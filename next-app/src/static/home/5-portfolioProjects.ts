import comingSoonImage from "@/assets/images/comingSoon.png"

const projects = [
  {
    company: "Personal Project",
    year: "2025",
    title: "AI-Powered Web App Studio",
    results: [
      {
        title:
          "Building an interactive platform where users can chat with AI to generate, edit, and manage web applications in real time.",
      },
      {
        title:
          "Integrating a live sandbox environment to instantly preview and test front-end and full-stack code within the browser.",
      },
      {
        title:
          "Designing a modular system using reusable components and blueprints for rapid drag-and-drop app development.",
      },
      {
        title:
          "Automating cloud deployment workflows to enable seamless publishing with minimal setup or DevOps overhead.",
      },
    ],
    link: "",
    image: comingSoonImage,
    cta: "In progress",
  },
];

const keywords = [
  "Scalable",
  "Reliable",
  "Optimized",
  "Distributed",
  "Automated",
  "Secure",
  "Fault Tolerant",
  "Efficient",
  "Maintainable",
  "Cloud-Native",
  "Data-Driven",
];

export const PORTFOLIO_PROJECTS = {
  sectionHeader: {
    eyebrow:"Real-world Results",
    title:"Featured Projects",
    description:"See how I transformed concepts into engaging digital experiences."
  },
  projects: projects,
  keywords: keywords
}
