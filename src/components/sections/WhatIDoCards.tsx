import React, { useState } from "react";

// Import images from assets
import VJDImage from "../../assets/images/VJD.png";
import JUICEImage from "../../assets/images/JUICE.png";
import CBMImage from "../../assets/images/CBM.png";
import PPIFImage from "../../assets/images/PPIF.png";
import FesofityImage from "../../assets/images/fesofity.png";
import IFWImage from "../../assets/images/IFW.png";

interface ProjectData {
  title: string;
  category: string;
  image: string;
  description: string;
}

const WhatIDoCards: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects: ProjectData[] = [
    {
      title: "Visual Journalism Day",
      category: "Web Development",
      image: VJDImage,
      description:
        "Collaborated with a team to develop a user-friendly website. Ensured design alignment, conducted functionality tests, and maintained the site for optimal performance and visitor engagement.",
    },
    {
      title: "UMN JUICE",
      category: "Web Development",
      image: JUICEImage,
      description:
        "Managed and updated website content to ensure data accuracy. Participated in resolving technical issues and improved the efficiency of data entry and website management processes.",
    },
    {
      title: "Mentoring UMN 2024",
      category: "Administration",
      image: CBMImage,
      description:
        "Managed attendance for 300+ committee members and ensured smooth event operations. Handled communications, student permissions, and coordinated administrative tasks.",
    },
    {
      title: "PPIF 2024",
      category: "Mentor",
      image: PPIFImage,
      description:
        "Guided new students through their orientation to the Informatics program. Led interactive activities and collaborated in planning events to ensure an engaging and informative experience.",
    },
    {
      title: "FeSoViTy 2024",
      category: "Education",
      image: FesofityImage,
      description:
        "Supervised elementary students, teaching eco-literacy and environmental awareness through interactive activities. Provided feedback and helped organize eco-friendly projects.",
    },
    {
      title: "IFW 2023",
      category: "Event Management",
      image: IFWImage,
      description:
        "Managed inventory, prepared event schedules, and handled volunteer attendance. Coordinated logistics and ensured smooth event operations through effective communication with the team.",
    },
  ];

  const categoryColors: {
    [key: string]: { bg: string; text: string; accent: string };
  } = {
    "Web Development": {
      bg: "bg-blue-50",
      text: "text-blue-700",
      accent: "bg-blue-500",
    },
    Administration: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      accent: "bg-purple-500",
    },
    Mentor: {
      bg: "bg-green-50",
      text: "text-green-700",
      accent: "bg-green-500",
    },
    Education: {
      bg: "bg-orange-50",
      text: "text-orange-700",
      accent: "bg-orange-500",
    },
    "Event Management": {
      bg: "bg-pink-50",
      text: "text-pink-700",
      accent: "bg-pink-500",
    },
  };

  const handleMouseEnter = (index: number) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => {
        const colorScheme =
          categoryColors[project.category] || categoryColors["Web Development"];

        return (
          <div
            key={index}
            className={`group relative bg-white rounded-2xl overflow-hidden cursor-pointer tech-card animate-clean-entrance stagger-delay-${
              index + 1
            } ${
              hoveredCard === index
                ? "shadow-xl scale-[1.02] -translate-y-1"
                : "shadow-md hover:shadow-lg"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              border:
                hoveredCard === index
                  ? `1px solid ${colorScheme.accent.replace(
                      "bg-",
                      "rgba(59, 130, 246, 0.2)"
                    )}`
                  : "1px solid rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <div
                className={`absolute inset-0 ${colorScheme.bg} opacity-10 transition-opacity duration-300`}
              ></div>
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                  hoveredCard === index ? "scale-105" : "scale-100"
                }`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDIwMCAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTkyIiBmaWxsPSIjRjdGOEZBIi8+CjxwYXRoIGQ9Ik0xMDAgMTI4QzExMC40NTcgMTI4IDExOSAxMTkuNDU3IDExOSAxMDlDMTE5IDk4LjU0MjkgMTEwLjQ1NyA5MCAxMDAgOTBDODkuNTQyOSA5MCA4MSA5OC41NDI5IDgxIDEwOUM4MSAxMTkuNDU3IDg5LjU0MjkgMTI4IDEwMCAxMjhaIiBmaWxsPSIjRDVEOURGIi8+Cjwvc3ZnPgo=";
                }}
              />

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${colorScheme.bg} ${colorScheme.text} backdrop-blur-sm transition-all duration-300`}
                >
                  {project.category}
                </span>
              </div>

              {/* Subtle Tech Indicator */}
              {hoveredCard === index && (
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-2 h-2 ${colorScheme.accent} rounded-full animate-pulse opacity-60`}
                  ></div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300">
                  {project.title}
                </h3>
                <div
                  className={`w-2 h-2 rounded-full ${
                    colorScheme.accent
                  } transition-all duration-300 ${
                    hoveredCard === index ? "opacity-100" : "opacity-40"
                  }`}
                ></div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </p>

              {/* Clean Progress Indicator */}
              <div className="flex items-center space-x-2">
                <div className="flex-1 h-0.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      colorScheme.accent
                    } rounded-full transition-all duration-500 ease-out ${
                      hoveredCard === index ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
                {hoveredCard === index && (
                  <svg
                    className={`w-4 h-4 ${colorScheme.text} transition-all duration-300`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Subtle Shine Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transform -skew-x-12 transition-all duration-700 ease-out ${
                hoveredCard === index
                  ? "translate-x-full opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default WhatIDoCards;
