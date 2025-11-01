import React, { useState, useRef } from "react";
import { gsap } from "gsap";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  category: "web" | "mobile" | "fullstack";
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "Modern admin dashboard with real-time analytics and inventory management.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    category: "web",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management with drag-and-drop functionality.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "Beautiful weather app with location-based forecasts and animations.",
    tech: ["React Native", "API Integration", "Animations"],
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    category: "mobile",
  },
];

const ProjectsPreview: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Apps" },
    { key: "mobile", label: "Mobile Apps" },
    { key: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleProjectHover = (projectId: number, index: number) => {
    setHoveredProject(projectId);
    const card = cardRefs.current[index];
    if (card) {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleProjectLeave = (index: number) => {
    setHoveredProject(null);
    const card = cardRefs.current[index];
    if (card) {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A showcase of my recent work and creative solutions
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onMouseEnter={() => handleProjectHover(project.id, index)}
              onMouseLeave={() => handleProjectLeave(index)}
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">
                    Project Preview
                  </span>
                </div>

                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4">
                    <a
                      href={project.demoUrl}
                      className="px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
