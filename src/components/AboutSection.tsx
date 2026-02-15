import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6">
      <div ref={ref} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-body uppercase tracking-[0.3em]"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl font-bold mt-4 leading-tight"
          >
            Where Science
            <br />
            Meets <span className="text-gradient-accent">Creativity</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <p className="font-body text-muted-foreground leading-relaxed text-lg">
            I'm Aditya Singh, a BSc Zoology student with a passion that extends far beyond the classroom. While I study the intricate world of living organisms, I channel that same curiosity into digital creation.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            From designing striking visuals and editing cinematic videos to building websites and writing Python scripts — I thrive at the intersection of science and technology. Every project is an experiment, and every design is an evolution.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { num: "20+", label: "Projects Done" },
              { num: "3+", label: "Years Experience" },
              { num: "15+", label: "Happy Clients" },
              { num: "∞", label: "Curiosity" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="p-4 rounded-lg bg-secondary/50"
              >
                <span className="font-display text-2xl font-bold text-primary">{stat.num}</span>
                <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
