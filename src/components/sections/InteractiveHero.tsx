import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import HeroBackground from "../ui/HeroBackground";

const roles = [
  "Frontend Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Creative Coder",
];

const InteractiveHero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeText = async () => {
      const role = roles[currentRole];
      setIsTyping(true);

      // Typing effect
      for (let i = 0; i <= role.length; i++) {
        setDisplayText(role.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Pause
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Erasing effect
      for (let i = role.length; i >= 0; i--) {
        setDisplayText(role.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      setIsTyping(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    };

    typeText();
  }, [currentRole]);

  return (
    <HeroBackground>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-indigo-600">Dhini</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <span className="text-2xl md:text-4xl font-medium text-gray-600">
                {displayText}
                <span
                  className={`inline-block w-1 h-8 bg-indigo-600 ml-1 ${
                    isTyping ? "animate-pulse" : ""
                  }`}
                ></span>
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional web experiences.
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </HeroBackground>
  );
};

export default InteractiveHero;
