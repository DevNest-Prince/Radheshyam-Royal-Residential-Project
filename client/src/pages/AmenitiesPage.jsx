import React from 'react';
import Amenities from '../components/Amenities';
import Features from '../components/Features';

function AmenitiesPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <Features />
      <Amenities />
    </div>
  );
}

export default AmenitiesPage;
