import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 bg-secondary/30">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-primary text-sm font-body uppercase tracking-[0.3em]"
        >
          Get in Touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6"
        >
          Let's Create
          <br />
          <span className="text-gradient-accent">Something Great</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="font-body text-muted-foreground text-lg mb-12 max-w-lg mx-auto"
        >
          Whether it's a design project, a website, or a creative collaboration — I'm always open to new opportunities.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:aditya@example.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-full hover:glow-accent transition-all duration-300"
        >
          <Mail className="w-5 h-5" />
          Say Hello
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>

        {/* Marquee */}
        <div className="mt-24 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="font-display text-6xl md:text-8xl font-bold text-border mx-8">
                Aditya Singh •
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
