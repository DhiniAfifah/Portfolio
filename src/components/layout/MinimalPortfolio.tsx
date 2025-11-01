import { useState, useEffect } from "react";
import SplitText from "./SplitText";

export default function MinimalPortfolio() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-screen h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center text-sm text-gray-500">
        <div>
          {currentTime.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div className="font-mono">
          {currentTime.toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Main Title */}
          <div className="mb-16">
            <SplitText
              text="PORTFOLIO"
              className="text-7xl md:text-9xl lg:text-[12rem] font-light tracking-[0.3em] text-gray-800"
              delay={80}
              duration={0.8}
              ease="power4.out"
              splitType="chars"
              from={{ opacity: 0, y: 100, rotationX: -90 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
              tag="h1"
            />
          </div>

          {/* Subtitle */}
          <div className="mb-20">
            <SplitText
              text="A curated collection of creative work"
              className="text-lg md:text-xl text-gray-500 font-light tracking-[0.2em]"
              delay={50}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              tag="p"
            />
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
            <SplitText
              text="ABOUT"
              className="text-sm tracking-[0.3em] text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer border-b border-transparent hover:border-gray-300 pb-2"
              delay={30}
              duration={0.4}
              splitType="chars"
              from={{ opacity: 0, scale: 0.8 }}
              to={{ opacity: 1, scale: 1 }}
              tag="p"
            />
            <SplitText
              text="WORK"
              className="text-sm tracking-[0.3em] text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer border-b border-transparent hover:border-gray-300 pb-2"
              delay={30}
              duration={0.4}
              splitType="chars"
              from={{ opacity: 0, scale: 0.8 }}
              to={{ opacity: 1, scale: 1 }}
              tag="p"
            />
            <SplitText
              text="CONTACT"
              className="text-sm tracking-[0.3em] text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer border-b border-transparent hover:border-gray-300 pb-2"
              delay={30}
              duration={0.4}
              splitType="chars"
              from={{ opacity: 0, scale: 0.8 }}
              to={{ opacity: 1, scale: 1 }}
              tag="p"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-xs text-gray-400">
        <div>© 2024 Portfolio</div>
        <div className="flex gap-6">
          <span className="hover:text-gray-600 transition-colors cursor-pointer">
            Instagram
          </span>
          <span className="hover:text-gray-600 transition-colors cursor-pointer">
            LinkedIn
          </span>
          <span className="hover:text-gray-600 transition-colors cursor-pointer">
            GitHub
          </span>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 left-4 w-px h-32 bg-gray-200 opacity-50"></div>
      <div className="absolute bottom-1/4 right-4 w-px h-24 bg-gray-200 opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full opacity-30"></div>
    </div>
  );
}
