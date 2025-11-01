import React from "react";
import CardNav from "../components/navigation/CardNav";
import ProjectsPreview from "../components/sections/ProjectsPreview";
import SkillsShowcase from "../components/sections/SkillsShowcase";
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

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
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

      {/* Page Header */}
      <div className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my work showcasing different technologies and
            creative solutions
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <SkillsShowcase />

      {/* Projects Section */}
      <ProjectsPreview />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;
