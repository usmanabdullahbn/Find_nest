import React from "react";
import SiteHeader from "./component/SiteHeader";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import Footer from "./component/Footer";
import VideoSection from "./component/VideoSection";
import GallerySection from "./component/GallerySection";
import AgentsSection from "./component/AgentsSection";
import DiscoverSection from "./component/DiscoverSection";
import LocationsSection from "./component/LocationsSection";
import StatsSection from "./component/StatsSection";
import BenefitsSection from "./component/BenefitsSection";

const App = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <LocationsSection />
        <GallerySection />
        <BenefitsSection />
        <VideoSection />
        <AgentsSection />
        <DiscoverSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;
