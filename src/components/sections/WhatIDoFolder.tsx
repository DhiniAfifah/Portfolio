import React from "react";
import Folder from "../ui/Folder";

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

const WhatIDoFolder: React.FC = () => {
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

  const folderColors = [
    "#5227FF",
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
  ];

  const createProjectCard = (project: ProjectData, index: number) => (
    <div
      key={index}
      className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 h-full"
    >
      <div className="flex items-center mb-3">
        <img
          src={project.image}
          alt={project.title}
          className="w-12 h-12 rounded-lg object-cover mr-3"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iI0Y3RjhGQSIvPgo8cGF0aCBkPSJNMjQgMzJDMjguNDE4MyAzMiAzMiAyOC40MTgzIDMyIDI0QzMyIDE5LjU4MTcgMjguNDE4MyAxNiAyNCAxNkMxOS41ODE3IDE2IDE2IDE5LjU4MTcgMTYgMjRDMTYgMjguNDE4MyAxOS41ODE3IDMyIDI0IDMyWiIgZmlsbD0iI0Q1RDlERiIvPgo8L3N2Zz4K";
          }}
        />
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">
            {project.title}
          </h4>
          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      <p className="text-gray-600 text-xs leading-relaxed">
        {project.description}
      </p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            style={{ height: "200px", position: "relative" }}
            className="mb-4"
          >
            <Folder
              size={1.5}
              color={folderColors[index % folderColors.length]}
              items={[
                createProjectCard(project, index),
                <div
                  key="extra1"
                  className="bg-gray-50 rounded-lg p-3 h-full flex items-center justify-center"
                >
                  <span className="text-gray-400 text-xs">Project Details</span>
                </div>,
                <div
                  key="extra2"
                  className="bg-gray-50 rounded-lg p-3 h-full flex items-center justify-center"
                >
                  <span className="text-gray-400 text-xs">Resources</span>
                </div>,
              ]}
              className="folder-project"
            />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 mb-1">
              {project.title}
            </h3>
            <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatIDoFolder;
