import Navbar from "@/components/Navbar";
import AgencyIntro from "@/components/AgencyIntro";
import TeamSection from "@/components/TeamSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AgencyIntro />
      <TeamSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
