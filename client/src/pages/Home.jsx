import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Amenities from '../components/Amenities';
import FloorPlans from '../components/FloorPlans';
import Contact from '../components/Contact';

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Amenities />
      <FloorPlans />
      <Contact />
    </div>
  );
}

export default Home;
