import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Brand Identity Design",
    category: "Graphic Design",
    icon: "🎨",
    season: "Spring",
    seasonIcon: "🌸",
    desc: "Complete visual identity for a local startup",
    reward: "+150 XP",
  },
  {
    title: "Documentary Edit",
    category: "Video Editing",
    icon: "🎬",
    season: "Summer",
    seasonIcon: "☀️",
    desc: "Nature documentary with cinematic color grading",
    reward: "+200 XP",
  },
  {
    title: "E-Commerce Website",
    category: "Web Development",
    icon: "💻",
    season: "Fall",
    seasonIcon: "🍂",
    desc: "Full-stack online shop with cart & checkout",
    reward: "+250 XP",
  },
  {
    title: "Data Viz Dashboard",
    category: "Python",
    icon: "🐍",
    season: "Winter",
    seasonIcon: "❄️",
    desc: "Interactive data analysis & visualization tool",
    reward: "+180 XP",
  },
];

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-2 mb-8"
        >
          <span className="text-2xl">🎒</span>
          <h2 className="font-pixel text-sm md:text-base text-foreground text-shadow-pixel">Quest Log</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              onClick={() => setSelectedProject(selectedProject === i ? null : i)}
              className="pixel-box p-5 cursor-pointer group"
            >
              {/* Season tag */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-pixel text-[7px] text-muted-foreground flex items-center gap-1">
                  {project.seasonIcon} {project.season}
                </span>
                <span className="font-pixel text-[7px] text-primary">✅ COMPLETE</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="inventory-slot w-14 h-14 flex-shrink-0">
                  <motion.span
                    whileHover={{ rotate: [0, -15, 15, 0] }}
                    className="text-2xl"
                  >
                    {project.icon}
                  </motion.span>
                </div>
                <div className="flex-1">
                  <h3 className="font-pixel text-[10px] text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-game text-sm text-muted-foreground">{project.category}</p>
                </div>
              </div>

              {/* Expanded details */}
              <motion.div
                initial={false}
                animate={{ height: selectedProject === i ? "auto" : 0, opacity: selectedProject === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="pt-3 mt-3 border-t border-border">
                  <p className="font-game text-base text-foreground">{project.desc}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-pixel text-[8px] text-golden">Reward: {project.reward}</span>
                    <span className="font-pixel text-[8px] text-primary pixel-btn">View Quest →</span>
                  </div>
                </div>
              </motion.div>

              {selectedProject !== i && (
                <p className="font-pixel text-[7px] text-muted-foreground mt-3">Click to expand ▼</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
