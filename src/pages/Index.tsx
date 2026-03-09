import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ThemesSection from "@/components/ThemesSection";
import AgendaSection from "@/components/AgendaSection";
import WhyAttendSection from "@/components/WhyAttendSection";
import RegistrationSection from "@/components/RegistrationSection";
import QueriesSection from "@/components/QueriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <AgendaSection />
      <WhyAttendSection />
      <RegistrationSection />
      <QueriesSection />
      <Footer />
    </div>
  );
};

export default Index;
