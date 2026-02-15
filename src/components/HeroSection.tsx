import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import heroFarm from "@/assets/hero-farm.png";

const crops = ["🌽", "🥕", "🍅", "🫐", "🌻", "🍓", "🥬", "🎃"];

const HeroSection = () => {
  const ref = useRef(null);
  const [grownCrops, setGrownCrops] = useState<Set<number>>(new Set());

  const toggleCrop = (index: number) => {
    setGrownCrops((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroFarm} alt="Pixel art farm" className="w-full h-full object-cover" style={{ imageRendering: "auto" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Floating clouds */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 8 + i * 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute text-4xl opacity-60"
          style={{ top: `${10 + i * 8}%`, left: `${20 + i * 25}%` }}
        >
          ☁️
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-16 pt-32">
        {/* Game-style dialog box */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
          className="pixel-box p-6 md:p-8 max-w-2xl"
        >
          <div className="flex items-start gap-4">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl md:text-5xl flex-shrink-0"
            >
              🧑‍🌾
            </motion.div>
            <div>
              <h1 className="font-pixel text-lg md:text-2xl text-foreground leading-relaxed text-shadow-pixel">
                Aditya Singh
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-0.5 bg-accent my-3"
              />
              <p className="font-game text-xl md:text-2xl text-muted-foreground leading-relaxed">
                A BSc Zoology student who cultivates creativity 🌱 — growing skills in Graphic Design, Video Editing, Web Development & Python.
              </p>
            </div>
          </div>

          {/* Skill tags as items */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["🎨 Designer", "🎬 Editor", "💻 Developer", "🐍 Python", "🔬 Zoologist"].map((tag) => (
              <span key={tag} className="pixel-btn text-[9px] cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Interactive crops row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-6 pixel-box p-4 max-w-2xl"
        >
          <p className="font-pixel text-[8px] text-muted-foreground mb-3">🌾 Click to grow crops!</p>
          <div className="flex gap-2 flex-wrap">
            {crops.map((crop, i) => (
              <button
                key={i}
                onClick={() => toggleCrop(i)}
                className="inventory-slot w-12 h-12 cursor-pointer group"
              >
                <motion.span
                  animate={{
                    scale: grownCrops.has(i) ? 1.3 : 0.6,
                    opacity: grownCrops.has(i) ? 1 : 0.4,
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="text-xl select-none"
                >
                  {grownCrops.has(i) ? crop : "🌱"}
                </motion.span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
