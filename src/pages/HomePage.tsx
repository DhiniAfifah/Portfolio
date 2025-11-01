import CardNav from "../components/navigation/CardNav";
import InteractiveHero from "../components/sections/InteractiveHero";
import LargeChatBubble from "../components/chat/LargeChatBubble";
import WhatIDo from "../components/sections/WhatIDo";
import Footer from "../components/layout/Footer";

const cardNavItems = [
  {
    label: "About",
    bgColor: "#3b82f6",
    textColor: "#fff",
    links: [
      { label: "My Story", href: "/about/story", ariaLabel: "About My Story" },
      { label: "Skills", href: "/about/skills", ariaLabel: "About My Skills" },
      {
        label: "Experience",
        href: "/about/experience",
        ariaLabel: "About My Experience",
      },
    ],
  },
  {
    label: "Projects",
    bgColor: "#10b981",
    textColor: "#fff",
    links: [
      {
        label: "Web Apps",
        href: "/projects/web",
        ariaLabel: "Web Applications",
      },
      {
        label: "Mobile Apps",
        href: "/projects/mobile",
        ariaLabel: "Mobile Applications",
      },
      {
        label: "Open Source",
        href: "/projects/opensource",
        ariaLabel: "Open Source Projects",
      },
    ],
  },
  {
    label: "Contact",
    bgColor: "#f59e0b",
    textColor: "#fff",
    links: [
      {
        label: "Email",
        href: "mailto:dhiniafifah.work@gmail.com",
        ariaLabel: "Email Dhini Afifah",
      },
      {
        label: "GitHub",
        href: "https://github.com/DhiniAfifah",
        ariaLabel: "GitHub Profile",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/siti-maryama-ramadhini-afifah/",
        ariaLabel: "LinkedIn Profile",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/dhini_afifah/",
        ariaLabel: "Instagram Profile",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <CardNav
          items={cardNavItems}
          baseColor="#ffffff"
          menuColor="#333333"
          buttonBgColor="#111111"
          buttonTextColor="#ffffff"
          ease="power3.out"
        />
      </div>

      {/* Hero Section */}
      <InteractiveHero />

      {/* Large Chat Bubble */}
      <LargeChatBubble />

      {/* What I Do Section */}
      <WhatIDo />

      {/* Footer */}
      <Footer />
    </div>
  );
}
