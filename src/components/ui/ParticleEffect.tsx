import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

interface ParticleEffectProps {
  isActive: boolean;
  mouseX: number;
  mouseY: number;
  color: string;
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({
  isActive,
  mouseX,
  mouseY,
  color,
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!isActive) {
      setParticles([]);
      return;
    }

    const interval = setInterval(() => {
      setParticles((prev) => {
        // Remove dead particles
        const alive = prev.filter((p) => p.life > 0);

        // Add new particles
        const newParticles: Particle[] = [];
        for (let i = 0; i < 3; i++) {
          newParticles.push({
            id: Date.now() + i,
            x: mouseX + (Math.random() - 0.5) * 20,
            y: mouseY + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            life: 1,
            color: color,
          });
        }

        // Update existing particles
        const updated = alive.map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 0.02,
          vy: p.vy + 0.1, // gravity
        }));

        return [...updated, ...newParticles].slice(0, 50); // Limit particles
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isActive, mouseX, mouseY, color]);

  if (!isActive || particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color,
            opacity: particle.life,
            transform: `scale(${particle.life})`,
            transition: "all 0.1s ease-out",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleEffect;
