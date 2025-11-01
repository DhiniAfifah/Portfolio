import React from "react";
import WhatIDoCards from "./WhatIDoCards";
import WhatIDoBackground from "../ui/WhatIDoBackground";

const WhatIDo: React.FC = () => {
  return (
    <WhatIDoBackground>
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects and experiences that showcase my
              skills and passion for development
            </p>
          </div>

          {/* Content */}
          <WhatIDoCards />
        </div>
      </section>
    </WhatIDoBackground>
  );
};

export default WhatIDo;
