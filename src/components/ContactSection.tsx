import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setMessage("");
    }
  };

  const socials = [
    { icon: "📸", label: "Instagram", url: "#" },
    { icon: "💼", label: "LinkedIn", url: "#" },
    { icon: "🐙", label: "GitHub", url: "#" },
    { icon: "📧", label: "Email", url: "mailto:aditya@example.com" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-earth/10">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-2 mb-8"
        >
          <span className="text-2xl">💌</span>
          <h2 className="font-pixel text-sm md:text-base text-foreground text-shadow-pixel">Send a Letter</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="pixel-box p-6 md:p-8"
        >
          {/* NPC Dialog */}
          <div className="flex items-start gap-4 mb-6">
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl flex-shrink-0"
            >
              🧑‍🌾
            </motion.span>
            <div className="pixel-box p-4 flex-1 relative">
              <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-card border-b-8 border-b-transparent" />
              <p className="font-game text-xl text-foreground">
                {sent
                  ? "✨ Thanks for your message! I'll get back to you faster than a Speed-Gro crop! 🌱"
                  : "Hey there, friend! Want to collaborate or just say hi? Drop me a message below! 📬"}
              </p>
            </div>
          </div>

          {/* Message box */}
          <div className="space-y-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="w-full h-28 p-4 font-game text-lg bg-muted border-3 border-pixel text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ borderWidth: "3px" }}
            />
            <button
              onClick={handleSend}
              className="pixel-btn text-[10px] px-6 py-3 bg-primary text-primary-foreground w-full sm:w-auto"
            >
              📮 Send Letter
            </button>
          </div>

          {/* Social links */}
          <div className="mt-8 pt-6 border-t-2 border-border">
            <p className="font-pixel text-[8px] text-muted-foreground mb-4">Find me at the town square:</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="inventory-slot w-14 h-14 group hover:border-primary transition-colors"
                  title={social.label}
                >
                  <motion.span
                    whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                    className="text-2xl"
                  >
                    {social.icon}
                  </motion.span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
