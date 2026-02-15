const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-body text-sm text-muted-foreground">
        © 2025 Aditya Singh. All rights reserved.
      </p>
      <div className="flex gap-6">
        {["Instagram", "LinkedIn", "GitHub"].map((link) => (
          <a
            key={link}
            href="#"
            className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
