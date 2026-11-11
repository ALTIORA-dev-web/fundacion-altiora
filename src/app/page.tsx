import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import MissionAndValues from "@/components/MissionAndValues";
import ActionAreas from "@/components/ActionAreas";
import FeaturedProjects from "@/components/FeaturedProjects";
import VolunteerSection from "@/components/VolunteerSection";
import DonationSection from "@/components/DonationSection";
import TransparencySection from "@/components/TransparencySection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ImpactStats />
        <MissionAndValues />
        <ActionAreas />
        <FeaturedProjects />
        <VolunteerSection />
        <DonationSection />
        <TransparencySection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
