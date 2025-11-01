import { useState, useEffect } from "react";
import Shuffle from "../components/sections/Shuffle";
import BlurText from "../components/sections/BlurText";

export default function WelcomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white text-gray-900 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-gray-300 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-2 h-20 bg-gray-300 animate-bounce-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Main Title with Shuffle Effect */}
        <div className="mb-8">
          <Shuffle
            text="PORTFOLIO"
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-800"
            shuffleDirection="right"
            duration={0.6}
            maxDelay={0.8}
            shuffleTimes={3}
            animationMode="evenodd"
            stagger={0.1}
            scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*"
            colorFrom="#9CA3AF"
            colorTo="#1F2937"
            triggerOnHover={true}
            onShuffleComplete={() => setShowContent(true)}
          />
        </div>

        {/* Subtitle */}
        {showContent && (
          <div className="mb-12">
            <BlurText
              text={
                <span className="text-lg md:text-xl tracking-wide">
                  <span className="font-bold text-gray-800">
                    Creative Web & Software Developer
                  </span>
                  <span className="font-light text-gray-600">
                    {" "}
                    — Code. Create. Innovate.
                  </span>
                </span>
              }
              animateBy="words"
              delay={100}
              direction="top"
              threshold={0.1}
              stepDuration={0.4}
            />
          </div>
        )}

        {/* Call to Action */}
        {showContent && (
          <div className="animate-fade-in">
            <a
              href="/home"
              className="group relative inline-block px-8 py-3 bg-transparent border-2 border-gray-300 text-gray-700 font-medium tracking-wider uppercase transition-all duration-300 hover:border-gray-800 hover:text-gray-900 overflow-hidden text-decoration-none"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        )}
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full gap-4 p-8">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border border-gray-200"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
