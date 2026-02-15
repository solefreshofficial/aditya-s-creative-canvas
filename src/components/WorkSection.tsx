import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Brand Identity Design",
    category: "Graphic Design",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Documentary Edit",
    category: "Video Editing",
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "E-Commerce Website",
    category: "Web Development",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Data Visualization Tool",
    category: "Python",
    color: "from-accent/20 to-accent/5",
  },
];

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-primary text-sm font-body uppercase tracking-[0.3em]"
        >
          Selected Work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl font-bold mt-4 mb-16"
        >
          Featured <span className="text-gradient-accent">Projects</span>
        </motion.h2>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group flex items-center justify-between p-6 md:p-8 rounded-xl border border-border hover:border-glow bg-card transition-all duration-500 hover:glow-accent"
            >
              <div className="flex items-center gap-6">
                <span className="font-display text-muted-foreground/30 text-2xl font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="font-body text-sm text-muted-foreground">{project.category}</span>
                </div>
              </div>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
