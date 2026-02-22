import React from "react";
import Hero from "../components/Hero";
import HighlightsStrip from "../components/sections/HighlightsStrip";
import AboutSection from "../components/sections/AboutSection";
import LocationSection from "../components/sections/LocationSection";
import ProjectFeatures from "../components/sections/ProjectFeatures";
import GalleryTeaser from "../components/sections/GalleryTeaser";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HighlightsStrip />
      <AboutSection />
      <LocationSection />
      <ProjectFeatures />
      <GalleryTeaser />
    </div>
  );
}

export default HomePage;
