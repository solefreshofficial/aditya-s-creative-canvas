import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Film, Code, Terminal, Microscope, Globe } from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Brand identities, posters, social media graphics, and visual storytelling with tools like Photoshop & Illustrator.",
  },
  {
    icon: Film,
    title: "Video Editing",
    desc: "Cinematic edits, motion graphics, color grading — turning raw footage into compelling narratives.",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Modern, responsive websites built with clean code and an eye for design.",
  },
  {
    icon: Terminal,
    title: "Python",
    desc: "Scripting, automation, data analysis — leveraging Python for practical problem-solving.",
  },
  {
    icon: Microscope,
    title: "Zoology",
    desc: "Deep understanding of biological systems, ecology, and the natural world through academic study.",
  },
  {
    icon: Code,
    title: "Creative Coding",
    desc: "Bridging design and technology through experimental visual projects and prototypes.",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 bg-secondary/30">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-primary text-sm font-body uppercase tracking-[0.3em]"
        >
          What I Do
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl font-bold mt-4 mb-16"
        >
          Skills & <span className="text-gradient-accent">Services</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-glow transition-all duration-500 hover:glow-accent"
            >
              <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{skill.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
