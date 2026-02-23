import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/sections/AboutSection";
import LocationSection from "../components/sections/LocationSection";
import ProjectFeatures from "../components/sections/ProjectFeatures";
import GalleryTeaser from "../components/sections/GalleryTeaser";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <LocationSection />
      <ProjectFeatures />
      <GalleryTeaser />
    </div>
  );
}

export default HomePage;
