import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Heart, DollarSign, Globe, Cpu, Users } from "lucide-react";

const themes = [
  {
    icon: TrendingUp,
    title: "Growth Architecture",
    description: "Exploring growth architecture in women-led organizations and scaling strategies.",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-500/10",
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Heart,
    title: "Trust-Driven CX",
    description: "Trust-driven customer experience in the evolving D2C economy.",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-500/10",
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    icon: DollarSign,
    title: "Capital Strategies",
    description: "Capital strategies and scaling timelines for sustainable growth.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500/10",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Globe,
    title: "Distribution Challenges",
    description: "Distribution challenges and platform dependency in modern markets.",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-500/10",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Cpu,
    title: "Technology Leverage",
    description: "Leveraging technology for scaling brands and driving innovation.",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-500/10",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: Users,
    title: "Ecosystem Strengthening",
    description: "Strengthening the ecosystem for women-led enterprises.",
    color: "from-fuchsia-500 to-purple-600",
    bgColor: "bg-fuchsia-500/10",
    iconBg: "bg-fuchsia-500/20",
    iconColor: "text-fuchsia-400",
  },
];

const ThemesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="themes" className="section-padding relative overflow-hidden bg-primary" ref={ref}>
      {/* Background decorations */}
      <div className="floating-orb w-96 h-96 bg-accent bottom-0 left-0 opacity-10" />
      <div className="floating-orb w-72 h-72 bg-lavender top-20 right-10 opacity-10" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-lavender font-semibold text-sm tracking-[0.3em] uppercase mb-4">
            What We'll Discuss
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
            Key Discussion{" "}
            <span className="gradient-text">Themes</span>
          </h2>
          <p className="text-primary-foreground/50 mt-4 max-w-xl mx-auto">
            Deep-dive into the strategies and frameworks shaping the future of women-led enterprises
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Glow effect behind card on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${theme.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

              <div className="relative glass-card p-4 h-full hover:-translate-y-2 transition-all duration-500 hover:border-white/30">
                {/* Number badge */}
                <span className="absolute top-4 right-4 text-3xl font-heading font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg ${theme.iconBg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500`}>
                  <theme.icon className={`w-5 h-5 ${theme.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-base font-heading font-semibold text-primary-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                  {theme.title}
                </h3>
                <p className="text-primary-foreground/50 leading-relaxed text-xs">
                  {theme.description}
                </p>

                {/* Bottom accent line */}
                <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${theme.color} mt-6 transition-all duration-500 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
