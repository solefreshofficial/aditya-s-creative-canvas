import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import avatarPixel from "@/assets/avatar-pixel.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: "⭐", num: "20+", label: "Quests Done" },
    { icon: "📅", num: "3+", label: "Seasons Exp" },
    { icon: "😊", num: "15+", label: "Happy Villagers" },
    { icon: "💡", num: "∞", label: "Curiosity" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="text-2xl">📜</span>
          <h2 className="font-pixel text-sm md:text-base text-foreground text-shadow-pixel">About the Farmer</h2>
        </motion.div>

        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          {/* Avatar card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="pixel-box p-4 flex flex-col items-center gap-3 mx-auto md:mx-0"
          >
            <div className="inventory-slot w-32 h-32">
              <img
                src={avatarPixel}
                alt="Aditya pixel avatar"
                className="w-full h-full object-cover"
                style={{ imageRendering: "auto" }}
              />
            </div>
            <div className="text-center">
              <p className="font-pixel text-[10px] text-foreground">Aditya Singh</p>
              <p className="font-game text-lg text-primary">Lv. 21 Creative</p>
            </div>
            {/* XP Bar */}
            <div className="w-full">
              <p className="font-pixel text-[7px] text-muted-foreground mb-1">EXP</p>
              <div className="w-full h-3 bg-muted border-2 border-pixel rounded-sm overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "72%" } : {}}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          </motion.div>

          {/* Info box */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="pixel-box p-5"
            >
              <p className="font-game text-xl md:text-2xl text-foreground leading-relaxed">
                🌿 Hello there! I'm Aditya — a BSc Zoology student who believes the natural world and the digital world aren't so different. Both require patience, observation, and a whole lot of creativity.
              </p>
              <p className="font-game text-lg text-muted-foreground leading-relaxed mt-3">
                🎨 When I'm not studying the fascinating world of living organisms, I'm crafting visual designs, editing cinematic videos, building websites, or writing Python scripts. Every skill is a new tool in my inventory!
              </p>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="pixel-box p-3 text-center"
                >
                  <span className="text-2xl">{stat.icon}</span>
                  <p className="font-pixel text-sm text-accent mt-1">{stat.num}</p>
                  <p className="font-pixel text-[7px] text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
