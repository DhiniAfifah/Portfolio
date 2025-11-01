import { useState } from "react";
import SplitTextComponent from "./SplitText";
import SplitTextAdvanced from "./SplitTextAdvanced";
import VariableProximity from "./VariableProximity";

interface PortfolioTextProps {
  containerRef: React.RefObject<HTMLDivElement>;
  variant?: "split" | "advanced" | "proximity" | "combined";
}

export default function PortfolioText({
  containerRef,
  variant = "split",
}: PortfolioTextProps) {
  const [showSubtitle, setShowSubtitle] = useState(false);

  const baseClassName = "font-zariantz text-[190px] uppercase tracking-wider";

  const handleMainTextComplete = () => {
    setShowSubtitle(true);
  };

  switch (variant) {
    case "split":
      return (
        <div className="text-center">
          <SplitTextComponent
            className={baseClassName}
            animationType="fadeInUp"
            stagger={0.1}
            delay={0.5}
            splitBy="chars"
            onComplete={handleMainTextComplete}
          >
            PORTFOLIO
          </SplitTextComponent>
          {showSubtitle && (
            <SplitTextComponent
              className="text-2xl mt-4 text-gray-300"
              animationType="fadeInUp"
              stagger={0.05}
              delay={0.2}
              splitBy="words"
            >
              Creative Developer & Designer
            </SplitTextComponent>
          )}
        </div>
      );

    case "advanced":
      return (
        <div className="text-center">
          <SplitTextAdvanced
            className={baseClassName}
            animationType="wave"
            stagger={0.1}
            delay={0.5}
            repeat={true}
            repeatDelay={5}
            onComplete={handleMainTextComplete}
          >
            PORTFOLIO
          </SplitTextAdvanced>
          {showSubtitle && (
            <SplitTextAdvanced
              className="text-2xl mt-4 text-gray-300"
              animationType="typewriter"
              stagger={0.1}
              delay={0.5}
            >
              Creative Developer & Designer
            </SplitTextAdvanced>
          )}
        </div>
      );

    case "proximity":
      return (
        <div className="text-center">
          <VariableProximity
            label="PORTFOLIO"
            className={baseClassName}
            fromFontVariationSettings="'wght' 500, 'wdth' 100"
            toFontVariationSettings="'wght' 900, 'wdth' 150"
            radius={100}
            falloff="gaussian"
            containerRef={containerRef}
          />
        </div>
      );

    case "combined":
      return (
        <div className="text-center">
          <div className="relative">
            <SplitTextComponent
              className={`${baseClassName} absolute inset-0 opacity-0`}
              animationType="fadeInUp"
              stagger={0.1}
              delay={0.5}
              splitBy="chars"
            >
              PORTFOLIO
            </SplitTextComponent>
            <VariableProximity
              label="PORTFOLIO"
              className={`${baseClassName} opacity-100`}
              fromFontVariationSettings="'wght' 500, 'wdth' 100"
              toFontVariationSettings="'wght' 900, 'wdth' 150"
              radius={100}
              falloff="gaussian"
              containerRef={containerRef}
            />
          </div>
          {showSubtitle && (
            <SplitText
              className="text-2xl mt-4 text-gray-300"
              animationType="fadeInLeft"
              stagger={0.05}
              delay={0.2}
              splitBy="words"
            >
              Creative Developer & Designer
            </SplitText>
          )}
        </div>
      );

    default:
      return null;
  }
}
