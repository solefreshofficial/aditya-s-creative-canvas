import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const seasons = [
  { name: "Spring", icon: "🌸", time: "6:00 AM" },
  { name: "Summer", icon: "☀️", time: "12:00 PM" },
  { name: "Fall", icon: "🍂", time: "6:00 PM" },
  { name: "Winter", icon: "❄️", time: "10:00 PM" },
];

const Footer = () => {
  const [currentSeason, setCurrentSeason] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSeason((prev) => (prev + 1) % seasons.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const season = seasons[currentSeason];

  return (
    <footer className="pixel-box border-b-0 border-x-0 rounded-b-none py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <motion.span
            key={season.name}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-xl"
          >
            {season.icon}
          </motion.span>
          <p className="font-pixel text-[8px] text-muted-foreground">
            {season.name} — {season.time}
          </p>
        </div>

        <p className="font-pixel text-[7px] text-muted-foreground">
          © Year 3 — Aditya's Farm 🌱
        </p>

        <div className="flex gap-2">
          {["🐔", "🐄", "🐑", "🐈"].map((animal, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              className="text-lg cursor-default"
              title="Farm animals!"
            >
              {animal}
            </motion.span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
