import React from "react";
import SEOHead from "../components/SEOHead";
import Hero from "../components/Hero";
import AboutSection from "../components/sections/AboutSection";
import LocationSection from "../components/sections/LocationSection";
import ProjectFeatures from "../components/sections/ProjectFeatures";
import GalleryTeaser from "../components/sections/GalleryTeaser";

function HomePage() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="1 & 2 BHK Flats in Upper Ghansoli, Navi Mumbai"
        description="Radheshyam Royal — premium 1 BHK (395–435 sqft) & 2 BHK (511–699 sqft) flats on Kalyan-Shilphata Highway, Upper Ghansoli. OC Received. MahaRERA P51700006917. Starting ₹39.99 Lacs*."
        keywords="Radheshyam Royal, 1 BHK flats Upper Ghansoli, 2 BHK flats Navi Mumbai, Kalyan Shilphata Highway property, affordable flats Ghansoli, MahaRERA P51700006917"
        canonical="/"
      />
      <Hero />
      <AboutSection />
      <LocationSection />
      <ProjectFeatures />
      <GalleryTeaser />
    </div>
  );
}

export default HomePage;
