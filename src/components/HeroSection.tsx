import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />

      {/* Floating orbs */}
      <div className="floating-orb w-96 h-96 bg-accent top-20 -left-48" />
      <div className="floating-orb w-72 h-72 bg-lavender bottom-20 -right-36" style={{ animationDelay: "3s" }} />
      <div className="floating-orb w-48 h-48 bg-accent top-1/2 left-1/3" style={{ animationDelay: "5s" }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lavender text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6"
        >
          An Exclusive Leadership Dialogue
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground leading-tight mb-6"
        >
          Women's CXO
          <br />
          <span className="gradient-text">Roundtable</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light"
        >
          The Multiplier Effect: Scaling Beyond the Glass Ceiling
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 bg-primary-foreground/10 rounded-xl px-6 py-3 mb-10 shadow-lg backdrop-blur-sm border border-primary-foreground/10"
        >
          <span className="flex items-center gap-2 font-semibold text-primary-foreground text-base md:text-lg">
            <span className="text-xl md:text-2xl">📅</span>
            <span>24 March 2026</span>
          </span>
          <span className="flex items-center gap-2 font-semibold text-primary-foreground text-base md:text-lg">
            <span className="text-xl md:text-2xl">⏰</span>
            <span>11:00 AM – 2:00 PM</span>
          </span>
          <span className="flex items-center gap-2 font-semibold text-primary-foreground text-base md:text-lg">
            <span className="text-xl md:text-2xl">📍</span>
            <span>Mumbai</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#register"
            className="btn-glow inline-block px-10 py-4 rounded-full text-primary-foreground font-semibold text-lg tracking-wide"
          >
            Register Now
          </a>
        </motion.div>
      </div>

      {/* ...scroll indicator removed... */}
    </section>
  );
};

export default HeroSection;
