import React from "react";

interface HeroBackgroundProps {
  children: React.ReactNode;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/30 to-blue-100/40 animate-pulse"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Circle */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-linear-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl animate-float"></div>

        {/* Medium Circle */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-linear-to-tr from-purple-200/20 to-pink-300/20 rounded-full blur-2xl animate-float-delayed"></div>

        {/* Small Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-indigo-400/25 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-purple-400/40 rounded-full animate-ping-slow"></div>

        {/* Hexagon Shapes */}
        <div className="absolute top-20 right-1/3 w-8 h-8 bg-blue-300/20 transform rotate-45 animate-spin-very-slow"></div>
        <div className="absolute bottom-40 left-1/3 w-6 h-6 bg-indigo-300/20 transform rotate-12 animate-spin-reverse-slow"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="heroWaveGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(249, 250, 251, 0)" />
              <stop offset="100%" stopColor="rgba(249, 250, 251, 1)" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="url(#heroWaveGradient)"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroBackground;
