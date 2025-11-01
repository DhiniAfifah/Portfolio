import React from "react";

interface WhatIDoBackgroundProps {
  children: React.ReactNode;
}

const WhatIDoBackground: React.FC<WhatIDoBackgroundProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Dark Tech-Inspired Background */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 via-slate-100 to-gray-200">
        <div className="absolute inset-0 bg-linear-to-tr from-slate-100/50 via-transparent to-blue-50/30"></div>
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(71, 85, 105, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(71, 85, 105, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(71, 85, 105, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(71, 85, 105, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px, 60px 60px, 20px 20px, 20px 20px",
          }}
        ></div>
      </div>

      {/* Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Code Brackets */}
        <div className="absolute top-20 left-10 text-6xl text-slate-300/10 font-mono select-none">
          {"{"}
        </div>
        <div className="absolute bottom-20 right-10 text-6xl text-slate-300/10 font-mono select-none">
          {"}"}
        </div>

        {/* Binary Numbers */}
        <div className="absolute top-1/4 right-20 text-slate-400/8 font-mono text-sm select-none transform -rotate-12">
          01001000 01100101 01101100 01101100 01101111
        </div>

        {/* Geometric Tech Shapes */}
        <div className="absolute top-32 right-1/4 w-12 h-12 border-2 border-slate-300/15 transform rotate-45 animate-spin-very-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-8 h-8 border border-blue-300/20 rounded-full animate-pulse-slow"></div>

        {/* Floating Dots */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-slate-400/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-2/3 right-1/5 w-3 h-3 bg-blue-400/15 rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-slate-500/25 rounded-full animate-pulse"></div>

        {/* Connection Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-300/10 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-linear-to-b from-transparent via-slate-300/10 to-transparent"></div>
      </div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Top Wave Transition */}
      <div className="absolute top-0 left-0 right-0 h-32">
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="whatIdoWaveGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(249, 250, 251, 1)" />
              <stop offset="100%" stopColor="rgba(249, 250, 251, 0)" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C300,0 900,120 1200,60 L1200,0 L0,0 Z"
            fill="url(#whatIdoWaveGradient)"
          />
        </svg>
      </div>
    </div>
  );
};

export default WhatIDoBackground;
