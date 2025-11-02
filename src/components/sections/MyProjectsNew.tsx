import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import logos
import ATELogo from "../../assets/images/ATEL.png";
import BRNLogo from "../../assets/images/BRNL.png";
import ICLogo from "../../assets/images/IC1.png";
import MPLogo from "../../assets/images/MPL.png";
import GameLogo from "../../assets/images/GameL.png";
import WKLogo from "../../assets/images/WKL.png";

// Import project detail images
import ATE1 from "../../assets/images/ATE.png";
import ATE2 from "../../assets/images/ATE2.png";
import BRN1 from "../../assets/images/BRN.png";
import BRN2 from "../../assets/images/BRN1.png";
import IC1 from "../../assets/images/IC1.png";
import IC2 from "../../assets/images/IC2.png";
import MP1 from "../../assets/images/MP.png";
import MP2 from "../../assets/images/MP1.png";
import Game1 from "../../assets/images/Game.png";
import Game2 from "../../assets/images/Game1.png";
import WK1 from "../../assets/images/WK.png";
import WK2 from "../../assets/images/WK1.png";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  description: string;
  logo: string;
  category: string;
  status: "Completed" | "In Progress" | "Live";
  color: string;
  images: string[];
  fullDescription: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: "ate",
    title: "ATE",
    description: "Advanced Technology Enhancement",
    fullDescription:
      "A comprehensive platform designed to enhance technological workflows with modern UI/UX principles and advanced functionality.",
    logo: ATELogo,
    category: "Web App",
    status: "Completed",
    color: "#6366f1",
    images: [ATE1, ATE2],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    id: "brn",
    title: "BRN",
    description: "Business Resource Network",
    fullDescription:
      "Enterprise-level resource management system with real-time analytics, reporting, and collaborative features for business optimization.",
    logo: BRNLogo,
    category: "Enterprise",
    status: "Live",
    color: "#10b981",
    images: [BRN1, BRN2],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    id: "ic",
    title: "IC",
    description: "Integrated Communication",
    fullDescription:
      "Seamless communication platform that integrates multiple channels and provides unified messaging experience for teams.",
    logo: ICLogo,
    category: "Communication",
    status: "In Progress",
    color: "#f59e0b",
    images: [IC1, IC2],
    technologies: ["React Native", "Socket.io", "Express", "Redis"],
  },
  {
    id: "mp",
    title: "MP",
    description: "Multi-purpose Application",
    fullDescription:
      "Cross-platform application designed for versatility and performance, offering multiple functionalities in a single interface.",
    logo: MPLogo,
    category: "Mobile",
    status: "Completed",
    color: "#ef4444",
    images: [MP1, MP2],
    technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
  },
  {
    id: "game",
    title: "GAME",
    description: "Interactive Gaming Experience",
    fullDescription:
      "Immersive gaming platform with advanced mechanics, real-time multiplayer capabilities, and engaging user experience.",
    logo: GameLogo,
    category: "Gaming",
    status: "Live",
    color: "#8b5cf6",
    images: [Game1, Game2],
    technologies: ["Unity", "C#", "Photon", "WebGL"],
  },
  {
    id: "wk",
    title: "WK",
    description: "Workflow Management",
    fullDescription:
      "Comprehensive workflow management framework that enhances productivity through automation and intelligent task management.",
    logo: WKLogo,
    category: "Framework",
    status: "Completed",
    color: "#06b6d4",
    images: [WK1, WK2],
    technologies: ["Next.js", "GraphQL", "Prisma", "AWS"],
  },
];

const ProjectModal: React.FC<{
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ project, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isOpen || !project) return;

    const modal = modalRef.current;
    const overlay = overlayRef.current;
    if (!modal || !overlay) return;

    // Initial state
    gsap.set(overlay, { opacity: 0 });
    gsap.set(modal, { scale: 0.9, opacity: 0, y: 30 });

    // Animate in
    gsap.to(overlay, { opacity: 1, duration: 0.3 });
    gsap.to(modal, {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.4,
      delay: 0.1,
      ease: "power3.out",
    });

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, project]);

  const handleClose = () => {
    const modal = modalRef.current;
    const overlay = overlayRef.current;
    if (!modal || !overlay) return;

    gsap.to(modal, {
      scale: 0.9,
      opacity: 0,
      y: 30,
      duration: 0.3,
      ease: "power3.in",
    });
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.3,
      delay: 0.1,
      onComplete: onClose,
    });
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-white rounded-3xl max-w-6xl w-full h-[80vh] overflow-hidden shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex h-full">
          {/* Image Section - Left Side (60%) */}
          <div className="w-3/5 relative bg-gray-50 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center p-8">
              <div className="relative">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} Screenshot ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[500px] object-contain rounded-2xl shadow-lg"
                />

                {/* Image Navigation */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === 0 ? project.images.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
                    >
                      <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === project.images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
                    >
                      <svg
                        className="w-6 h-6 text-gray-700"
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
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Image Indicators */}
            {project.images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? "bg-gray-800 scale-110"
                        : "bg-gray-400 hover:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content Section - Right Side (40%) */}
          <div className="w-2/5 bg-white flex flex-col">
            {/* Header */}
            <div className="p-8 border-b border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  <img
                    src={project.logo}
                    alt={`${project.title} Logo`}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 font-medium">
                    {project.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div
                  className={`w-2 h-2 rounded-full ${
                    project.status === "Live"
                      ? "bg-green-400"
                      : project.status === "In Progress"
                      ? "bg-yellow-400"
                      : "bg-blue-400"
                  }`}
                />
                <span className="text-sm font-medium text-gray-600">
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Technologies */}
            <div className="p-8 flex-1">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Tech Stack
              </h4>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 rounded-xl text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  className="w-full py-3 px-6 rounded-2xl font-medium text-white transition-colors"
                  style={{ backgroundColor: project.color }}
                >
                  View Live Project
                </button>
                <button className="w-full py-3 px-6 bg-gray-100 text-gray-700 rounded-2xl font-medium hover:bg-gray-200 transition-colors">
                  View Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProjectCard: React.FC<{
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}> = ({ project, index, onOpenModal }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const logo = logoRef.current;
    if (!card || !logo) return;

    // Initial state - cards start from different positions for organic feel
    const startY = index % 2 === 0 ? 60 : 40;
    const startRotation = ((index % 3) - 1) * 2; // -2, 0, 2 degrees

    gsap.set(card, {
      y: startY,
      opacity: 0,
      rotation: startRotation,
      scale: 0.9,
    });

    gsap.set(logo, {
      scale: 0.8,
      rotation: -startRotation,
    });

    // Animation on scroll with organic timing
    ScrollTrigger.create({
      trigger: card,
      start: "top 90%",
      onEnter: () => {
        gsap.to(card, {
          y: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 1.2,
          delay: index * 0.15,
          ease: "power3.out",
        });

        gsap.to(logo, {
          scale: 1,
          rotation: 0,
          duration: 1.2,
          delay: index * 0.15 + 0.3,
          ease: "back.out(1.7)",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === card) {
          trigger.kill();
        }
      });
    };
  }, [index]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    const card = cardRef.current;
    const logo = logoRef.current;
    if (!card || !logo) return;

    gsap.to(card, {
      y: -12,
      scale: 1.03,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(logo, {
      scale: 1.1,
      rotation: 5,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const card = cardRef.current;
    const logo = logoRef.current;
    if (!card || !logo) return;

    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(logo, {
      scale: 1,
      rotation: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleClick = () => {
    onOpenModal(project);
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-400";
      case "In Progress":
        return "bg-yellow-400";
      case "Completed":
        return "bg-blue-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div
      ref={cardRef}
      className="group relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Main Card */}
      <div
        className="relative bg-white rounded-3xl p-6 border border-gray-100 overflow-hidden"
        style={{
          boxShadow: isHovered
            ? `0 20px 40px ${project.color}20`
            : "0 4px 20px rgba(0, 0, 0, 0.06)",
          transition: "box-shadow 0.4s ease",
        }}
      >
        {/* Floating Color Accent */}
        <div
          className="absolute -top-2 -right-2 w-16 h-16 rounded-full opacity-10"
          style={{ backgroundColor: project.color }}
        />

        {/* Logo */}
        <div
          ref={logoRef}
          className="relative w-16 h-16 mx-auto mb-4 flex items-center justify-center"
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-10"
            style={{ backgroundColor: project.color }}
          />
          <img
            src={project.logo}
            alt={`${project.title} Logo`}
            className="relative w-10 h-10 object-contain z-10"
          />
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
            <div
              className={`w-2 h-2 rounded-full ${getStatusDot(project.status)}`}
            />
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            {project.description}
          </p>

          <div className="text-xs font-medium text-gray-500">
            {project.category}
          </div>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 rounded-3xl transition-opacity duration-400 ${
            isHovered ? "opacity-5" : "opacity-0"
          }`}
          style={{ backgroundColor: project.color }}
        />
      </div>
    </div>
  );
};

const FloatingDot: React.FC<{ delay: number; color: string }> = ({
  delay,
  color,
}) => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    gsap.set(dot, { scale: 0, opacity: 0 });

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(dot, {
      scale: 1,
      opacity: 0.6,
      duration: 2,
      delay,
      ease: "power2.inOut",
    })
      .to(
        dot,
        {
          y: -20,
          duration: 3,
          ease: "power1.inOut",
        },
        0
      )
      .to(dot, {
        scale: 0.5,
        opacity: 0.2,
        duration: 1.5,
        ease: "power2.inOut",
      });

    return () => {
      tl.kill();
    };
  }, [delay]);

  return (
    <div
      ref={dotRef}
      className="absolute w-2 h-2 rounded-full"
      style={{ backgroundColor: color }}
    />
  );
};

const MyProjects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (!section || !title || !subtitle) return;

    // Initial states
    gsap.set([title, subtitle], {
      y: 40,
      opacity: 0,
    });

    // Title animation with split text effect
    ScrollTrigger.create({
      trigger: section,
      start: "top 85%",
      onEnter: () => {
        gsap.to(title, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        });

        gsap.to(subtitle, {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 bg-white overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingDot delay={0} color="#6366f1" />
        <FloatingDot delay={1} color="#10b981" />
        <FloatingDot delay={2} color="#f59e0b" />
        <FloatingDot delay={3} color="#ef4444" />
        <FloatingDot delay={4} color="#8b5cf6" />
        <FloatingDot delay={5} color="#06b6d4" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            My Projects
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Creative solutions crafted with passion and precision
          </p>
        </div>

        {/* Projects Masonry Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${index === 1 || index === 4 ? "md:mt-12" : ""} ${
                index === 2 || index === 5 ? "lg:mt-24" : ""
              }`}
            >
              <ProjectCard
                project={project}
                index={index}
                onOpenModal={handleOpenModal}
              />
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        {/* Simple CTA */}
        <div className="text-center mt-24">
          <div className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer group">
            <span className="text-lg font-medium">Explore all projects</span>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
