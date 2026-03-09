import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail } from "lucide-react";
import supportImg from "@/assets/support-illustration.png";

const QueriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted relative overflow-visible min-h-0" ref={ref}>
      <div className="container mx-auto pb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-card rounded-3xl shadow-card p-6 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">
                For <span className="text-foreground">More </span>
                <span className="gradient-text">Queries</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-pink-500 rounded-full mt-3 mb-8" />

              <p className="text-foreground font-semibold text-lg mb-4">Ashwariya Sheth</p>

              <div className="space-y-3">
                <a
                  href="tel:+918976014640"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone size={18} />
                  +91-8976014640
                </a>
                <a
                  href="mailto:ashwariya@observenow.co.in"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail size={18} />
                  ashwariya@observenow.co.in
                </a>
              </div>
            </div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-muted rounded-2xl p-6 max-w-xs">
                <img
                  src={supportImg}
                  alt="Customer support illustration"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QueriesSection;
