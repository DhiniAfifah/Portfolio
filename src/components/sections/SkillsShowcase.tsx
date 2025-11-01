import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  { name: "React", level: 90, icon: "⚛️", color: "#61DAFB" },
  { name: "TypeScript", level: 85, icon: "📘", color: "#3178C6" },
  { name: "JavaScript", level: 95, icon: "🟨", color: "#F7DF1E" },
  { name: "CSS/SCSS", level: 88, icon: "🎨", color: "#1572B6" },
  { name: "Node.js", level: 80, icon: "🟢", color: "#339933" },
  { name: "Git", level: 85, icon: "📚", color: "#F05032" },
];

const SkillsShowcase: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate progress bars on mount
    progressRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { width: "0%" },
          {
            width: `${skills[index].level}%`,
            duration: 1.5,
            delay: index * 0.1,
            ease: "power2.out",
          }
        );
      }
    });
  }, []);

  const handleSkillHover = (skillName: string, index: number) => {
    setHoveredSkill(skillName);
    const card = cardRefs.current[index];
    if (card) {
      gsap.to(card, {
        scale: 1.05,
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleSkillLeave = (index: number) => {
    setHoveredSkill(null);
    const card = cardRefs.current[index];
    if (card) {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I love working with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 cursor-pointer"
              onMouseEnter={() => handleSkillHover(skill.name, index)}
              onMouseLeave={() => handleSkillLeave(index)}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">
                  {skill.name}
                </h3>
              </div>

              <div className="mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Proficiency</span>
                  <span className="text-sm font-medium text-gray-800">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    ref={(el) => {
                      progressRefs.current[index] = el;
                    }}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>

              {hoveredSkill === skill.name && (
                <div className="mt-3 text-sm text-gray-600">
                  Click to see projects using {skill.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
