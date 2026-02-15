import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
  size: number;
}

const emojis = ["✨", "⭐", "🌟", "💫", "🌸", "🍃"];

const ClickSparkle = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleClick = useCallback((e: MouseEvent) => {
    const newParticles: Particle[] = Array.from({ length: 3 }, (_, i) => ({
      id: Date.now() + i,
      x: e.clientX + (Math.random() - 0.5) * 40,
      y: e.clientY + (Math.random() - 0.5) * 40,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      size: 12 + Math.random() * 12,
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 800);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 1, scale: 0, x: p.x, y: p.y }}
          animate={{ opacity: 0, scale: 1.5, y: p.y - 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed"
          style={{ fontSize: p.size }}
        >
          {p.emoji}
        </motion.span>
      ))}
    </div>
  );
};

export default ClickSparkle;
