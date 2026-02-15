import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", icon: "📜" },
  { label: "Skills", icon: "⚔️" },
  { label: "Work", icon: "🎒" },
  { label: "Contact", icon: "💌" },
];

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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 pixel-box border-t-0 rounded-t-none"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="font-pixel text-xs text-foreground flex items-center gap-2">
          <span className="text-lg">🌱</span>
          <span className="text-shadow-pixel">Aditya</span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollTo(item.label)}
                className="font-pixel text-[10px] text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1.5 group"
              >
                <span className="group-hover:animate-bounce-pixel">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          {isOpen ? "❌" : "📋"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card"
          >
            <ul className="px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.label)}
                    className="font-pixel text-[10px] text-foreground hover:text-primary flex items-center gap-2"
                  >
                    <span>{item.icon}</span> {item.label}
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
