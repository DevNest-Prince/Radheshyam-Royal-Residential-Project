import React from 'react';
import SEOHead from '../components/SEOHead';
import Amenities from '../components/Amenities';
import Features from '../components/Features';

function AmenitiesPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEOHead
        title="Amenities & Features"
        description="Radheshyam Royal amenities include landscaped gardens, children's play area, clubhouse, gym, and more. Premium living features in Upper Ghansoli, Navi Mumbai."
        keywords="Radheshyam Royal amenities, clubhouse gym Ghansoli residential, features 1 BHK 2 BHK Navi Mumbai"
        canonical="/amenities"
      />
      <Features />
      <Amenities />
    </div>
  );
}

export default AmenitiesPage;
