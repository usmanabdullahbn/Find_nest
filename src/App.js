import React from "react";
import AboutSection from "./component/AboutSection";
import AgentsSection from "./component/AgentsSection";
import BenefitsSection from "./component/BenefitsSection";
import Footer from "./component/Footer";
import GallerySection from "./component/GallerySection";
import HeroSection from "./component/HeroSection";
import LocationsSection from "./component/LocationsSection";
import SiteHeader from "./component/SiteHeader";
import StatsSection from "./component/StatsSection";
import VideoSection from "./component/VideoSection";


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
        {/* <DiscoverSection /> */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
