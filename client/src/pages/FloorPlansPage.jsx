import React from 'react';
import SEOHead from '../components/SEOHead';
import FloorPlans from '../components/FloorPlans';

function FloorPlansPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <SEOHead
        title="Floor Plans — 1 & 2 BHK Configurations"
        description="Explore Radheshyam Royal floor plans: 1 BHK (395–435 sqft) starting ₹39.99 Lacs* and 2 BHK (511–699 sqft) starting ₹53.99 Lacs*. Upper Ghansoli, Navi Mumbai."
        keywords="Radheshyam Royal floor plans, 1 BHK floor plan Ghansoli, 2 BHK floor plan Navi Mumbai, carpet area 511 sqft 562 sqft 699 sqft"
        canonical="/floor-plans"
      />
      <FloorPlans />
    </div>
  );
}

export default FloorPlansPage;
