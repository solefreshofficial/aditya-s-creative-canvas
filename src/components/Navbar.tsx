import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["About", "Skills", "Work", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 surface-glass"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="font-display text-xl font-bold tracking-tight text-foreground">
          AS<span className="text-primary">.</span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6"
        >
          <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }} className="block h-0.5 w-full bg-foreground" />
          <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="block h-0.5 w-full bg-foreground" />
          <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }} className="block h-0.5 w-full bg-foreground" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden surface-glass"
          >
            <ul className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="font-body text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
