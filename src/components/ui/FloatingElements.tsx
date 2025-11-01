import React from "react";

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Minimal Tech Elements */}
      <div className="absolute top-24 right-24 animate-subtle-float">
        <div className="w-3 h-3 bg-blue-400/20 rounded-full animate-tech-pulse"></div>
      </div>

      <div
        className="absolute top-1/3 left-16 animate-subtle-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-2 h-2 bg-green-400/25 rounded-full animate-tech-pulse"></div>
      </div>

      <div
        className="absolute bottom-1/3 right-16 animate-subtle-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-4 h-4 bg-purple-400/15 rounded-full animate-tech-pulse"></div>
      </div>

      <div
        className="absolute bottom-24 left-24 animate-subtle-float"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="w-1.5 h-1.5 bg-orange-400/30 rounded-full animate-tech-pulse"></div>
      </div>

      {/* Subtle Code Elements */}
      <div
        className="absolute top-1/2 right-8 animate-subtle-float"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="w-6 h-6 bg-gray-100/50 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <div className="w-2 h-2 bg-blue-400/40 rounded-sm"></div>
        </div>
      </div>

      <div
        className="absolute top-20 left-1/3 animate-subtle-float"
        style={{ animationDelay: "2.5s" }}
      >
        <div className="w-5 h-5 bg-gray-100/40 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <div className="w-1 h-1 bg-green-400/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;
