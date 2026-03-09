import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Lightbulb, MessageCircle, Gem } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Curated CXO Gathering",
    description: "An intimate gathering of women CXOs and senior leaders from top organizations.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Insights",
    description: "Deep-dive into strategies for scaling digital enterprises successfully.",
  },
  {
    icon: MessageCircle,
    title: "Peer-to-Peer Exchange",
    description: "Candid leadership exchange with fellow women executives and founders.",
  },
  {
    icon: Gem,
    title: "High-Value Networking",
    description: "Exclusive access to premium networking with influential industry leaders.",
  },
];

const WhyAttendSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted relative overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-4">Benefits</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Why <span className="gradient-text">Attend</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto mb-6 flex items-center justify-center animate-float" style={{ animationDelay: `${i * 1.5}s` }}>
                <feat.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{feat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
