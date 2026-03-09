import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const agendaItems = [
  { time: "11:00 AM", activity: "Registrations", icon: "📋" },
  { time: "11:30 AM", activity: "Welcome Note", icon: "👋" },
  { time: "11:40 AM", activity: "GoKwik Presentation", icon: "📊" },
  { time: "12:55 PM", activity: "Networking Discussion", icon: "💬" },
  { time: "1:55 PM", activity: "Closing Remarks", icon: "🎤" },
  { time: "2:10 PM", activity: "Networking Lunch", icon: "🍽️" },
];

const AgendaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="agenda" className="section-padding bg-[#eaf2fb] relative overflow-hidden px-2 md:px-0" ref={ref}>
      <div className="floating-orb w-96 h-96 bg-accent/20 top-0 right-0 blur-2xl" />
      <div className="floating-orb w-64 h-64 bg-lavender/20 bottom-0 left-20 blur-2xl" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-bold text-base tracking-[0.25em] uppercase mb-3">
            Schedule
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-lg mb-2">
            Event Agenda
          </h2>
          <p className="text-primary/70 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Discover the flow of the day and key moments to connect, learn, and grow.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-primary/30 origin-top shadow-lg"
          />

          {agendaItems.map((item, i) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className={`relative flex items-center mb-6 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-xl shadow-xl border-2 border-white">
                  {item.icon}
                </div>
              </div>

              {/* Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                <div className="bg-white/90 backdrop-blur-lg rounded-xl p-4 shadow-md border border-primary/10 hover:scale-[1.03] hover:shadow-xl transition-transform duration-300">
                  <span className="text-accent font-bold text-sm tracking-wide block mb-0.5">{item.time}</span>
                  <h3 className="text-primary font-heading font-bold text-base md:text-lg mb-0.5">
                    {item.activity}
                  </h3>
                  <div className="h-0.5 w-8 bg-gradient-to-r from-accent to-primary rounded-full mb-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
