import React, { useState, useEffect } from "react";

interface MicroInteractionsProps {
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}

const MicroInteractions: React.FC<MicroInteractionsProps> = ({
  isActive,
  children,
  className = "",
}) => {
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);

  const createRipple = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onClick={createRipple}
    >
      {children}

      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
          }}
        >
          <div className="w-12 h-12 bg-white/30 rounded-full animate-ping"></div>
        </div>
      ))}

      {/* Hover Glow */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-pulse"></div>
      )}
    </div>
  );
};

export default MicroInteractions;
