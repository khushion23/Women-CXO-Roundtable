import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const images = [about1, about2, gallery1, gallery2, gallery3];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section-padding bg-muted relative overflow-hidden" ref={ref}>
      <div className="floating-orb w-80 h-80 bg-lavender -top-40 -right-40" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-4">About the Event</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Empowering Women
              <br />
              <span className="gradient-text">Leaders</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              An exclusive leadership dialogue for women CXOs organized by{" "}
              <strong className="text-foreground">ObserveNow Media</strong> in collaboration with{" "}
              <strong className="text-foreground">GoKwik</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              This intimate roundtable focuses on the growth mechanics, capital dynamics, trust architecture,
              and ecosystem design that power women-led enterprises. Join fellow leaders in shaping
              the future of inclusive business leadership.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Growth Mechanics", "Capital Dynamics", "Trust Architecture", "Ecosystem Design"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Auto-rotating images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Women leaders event ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    i === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentImage ? "bg-accent w-8" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
