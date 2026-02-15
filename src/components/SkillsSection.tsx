import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skills = [
  {
    icon: "🎨",
    title: "Graphic Design",
    level: 8,
    desc: "Brand identities, posters, social media graphics & visual storytelling.",
    tools: ["Photoshop", "Illustrator", "Figma"],
  },
  {
    icon: "🎬",
    title: "Video Editing",
    level: 7,
    desc: "Cinematic edits, motion graphics, color grading & compelling narratives.",
    tools: ["Premiere Pro", "After Effects", "DaVinci"],
  },
  {
    icon: "🌐",
    title: "Web Development",
    level: 7,
    desc: "Modern responsive websites with clean code and pixel-perfect design.",
    tools: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    icon: "🐍",
    title: "Python",
    level: 6,
    desc: "Scripting, automation, data analysis & practical problem-solving.",
    tools: ["Flask", "Pandas", "Automation"],
  },
  {
    icon: "🔬",
    title: "Zoology",
    level: 9,
    desc: "Deep understanding of biological systems, ecology & the natural world.",
    tools: ["Research", "Lab Work", "Field Study"],
  },
  {
    icon: "💡",
    title: "Creative Coding",
    level: 5,
    desc: "Experimental visual projects bridging design and technology.",
    tools: ["Processing", "p5.js", "Prototyping"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 px-6 bg-earth/10">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-2 mb-8"
        >
          <span className="text-2xl">⚔️</span>
          <h2 className="font-pixel text-sm md:text-base text-foreground text-shadow-pixel">Skills & Inventory</h2>
        </motion.div>

        {/* Inventory grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              onMouseEnter={() => setHoveredSkill(i)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="pixel-box p-5 cursor-pointer group relative"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="inventory-slot w-12 h-12 flex-shrink-0">
                  <motion.span
                    animate={hoveredSkill === i ? { rotate: [0, -10, 10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-2xl"
                  >
                    {skill.icon}
                  </motion.span>
                </div>
                <div>
                  <h3 className="font-pixel text-[10px] text-foreground">{skill.title}</h3>
                  <p className="font-game text-sm text-muted-foreground">Skill Item</p>
                </div>
              </div>

              {/* Skill level bar */}
              <div className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-[7px] text-muted-foreground">LEVEL</span>
                  <span className="font-pixel text-[7px] text-accent">{skill.level}/10</span>
                </div>
                <div className="w-full h-2.5 bg-muted border-2 border-pixel rounded-sm overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level * 10}%` } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>

              <p className="font-game text-base text-muted-foreground leading-relaxed">{skill.desc}</p>

              {/* Tool tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-pixel text-[7px] px-2 py-1 bg-muted text-muted-foreground border border-border"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
