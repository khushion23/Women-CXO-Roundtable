import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

const RegistrationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", company: "", designation: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registration submitted successfully! We'll be in touch shortly.");
    setForm({ name: "", email: "", company: "", designation: "" });
  };

  return (
    <section
      id="register"
      className="section-padding relative overflow-hidden"
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #001D4B 0%, #7C5CFF 50%, #E058FF 100%)",
      }}
    >
      <div className="floating-orb w-96 h-96 bg-lavender top-0 right-0 opacity-10" />
      <div className="floating-orb w-64 h-64 bg-accent bottom-0 left-0 opacity-10" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-lavender font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Join Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Register Now
          </h2>
          <p className="text-primary-foreground/60 text-lg">Secure your seat at this exclusive roundtable</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Form on the left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-6 md:p-8 lg:p-10 flex-1 flex flex-col justify-center"
            style={{ minHeight: '100%' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col justify-center">
              {[
                { key: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
                { key: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
                { key: "company", label: "Company", type: "text", placeholder: "Your company name" },
                { key: "designation", label: "Designation", type: "text", placeholder: "Your designation" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-primary-foreground/80 text-sm font-medium mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent focus:shadow-glow transition-all duration-300"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="btn-glow w-full py-4 rounded-xl text-primary-foreground font-semibold text-lg tracking-wide"
                style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
              >
                Register Now
              </button>
            </form>
          </motion.div>
          {/* Video on the right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full flex-1 flex justify-center items-center"
            style={{ minHeight: '100%' }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <video
                src="/7592140-hd-1920-1080-25fps-crop-videobolt.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-lg max-w-full max-h-[500px] aspect-square border border-white/20 bg-black object-cover"
                poster=""
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              >
                Sorry, your browser does not support embedded videos.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
