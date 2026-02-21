import React, { useState } from 'react';

function FloorPlans() {
  const [selectedPlan, setSelectedPlan] = useState(0);

  const plans = [
    {
      type: '1 BHK',
      carpetArea: '395 sq.ft',
      price: '₹39.99 Lacs*',
      features: ['1 Bedroom', '1 Bathroom', 'Kitchen', 'Living Area', 'Balcony'],
      highlight: 'Best for Young Professionals'
    },
    {
      type: '1 BHK',
      carpetArea: '435 sq.ft',
      price: '₹44.99 Lacs*',
      features: ['1 Bedroom', '1 Bathroom', 'Spacious Kitchen', 'Living Area', 'Balcony'],
      highlight: 'Perfect for Small Families'
    },
    {
      type: '2 BHK',
      carpetArea: '511 sq.ft',
      price: '₹53.99 Lacs*',
      features: ['2 Bedrooms', '2 Bathrooms', 'Kitchen', 'Living Area', 'Balcony'],
      highlight: 'Ideal for Growing Families'
    },
    {
      type: '2 BHK',
      carpetArea: '562 sq.ft',
      price: 'Price on Request',
      features: ['2 Bedrooms', '2 Bathrooms', 'Spacious Kitchen', 'Large Living Area', 'Balcony'],
      highlight: 'Premium Family Living'
    }
  ];

  return (
    <section id="floor-plans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Floor <span className="text-yellow-700">Plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our thoughtfully designed configurations to suit your lifestyle
          </p>
        </div>

        {/* Configuration Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {plans.map((plan, index) => (
            <button
              key={index}
              onClick={() => setSelectedPlan(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedPlan === index
                  ? 'bg-yellow-700 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {plan.type} - {plan.carpetArea}
            </button>
          ))}
        </div>

        {/* Selected Plan Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Plan Visualization */}
          <div className="order-2 lg:order-1">
            <div className="bg-linear-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 shadow-xl">
              <div className="aspect-square bg-white rounded-xl flex items-center justify-center p-8 shadow-inner">
                {/* Floor plan placeholder */}
                <div className="w-full h-full border-4 border-dashed border-yellow-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-24 h-24 mx-auto text-yellow-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p className="text-gray-500 font-medium">
                      {plans[selectedPlan].type} Layout
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Floor plan illustration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Details */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {plans[selectedPlan].highlight}
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">
                {plans[selectedPlan].type}
              </h3>
              <p className="text-2xl text-yellow-700 font-semibold mb-1">
                {plans[selectedPlan].price}
              </p>
              <p className="text-gray-600">
                Carpet Area: <span className="font-semibold">{plans[selectedPlan].carpetArea}</span>
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 text-lg">Key Features:</h4>
              {plans[selectedPlan].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-yellow-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 p-6 rounded-xl space-y-3">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-600">Configuration</span>
                <span className="font-semibold text-gray-900">{plans[selectedPlan].type}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-600">Tower</span>
                <span className="font-semibold text-gray-900">G+7 Storey</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-600">Status</span>
                <span className="font-semibold text-green-600">OC Received</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">RERA</span>
                <span className="font-semibold text-gray-900">Approved</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="flex-1 text-center px-6 py-4 bg-yellow-700 text-white font-semibold rounded-lg hover:bg-yellow-800 transition shadow-lg"
              >
                Download Brochure
              </a>
              <a 
                href="#contact" 
                className="flex-1 text-center px-6 py-4 bg-white text-yellow-700 font-semibold rounded-lg border-2 border-yellow-700 hover:bg-yellow-50 transition"
              >
                Get Price Details
              </a>
            </div>
          </div>
        </div>

        {/* Quick Comparison */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Quick Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-yellow-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Configuration</th>
                  <th className="px-6 py-4 text-left font-semibold">Carpet Area</th>
                  <th className="px-6 py-4 text-left font-semibold">Price</th>
                  <th className="px-6 py-4 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-yellow-50 transition">
                    <td className="px-6 py-4 font-semibold text-gray-900">{plan.type}</td>
                    <td className="px-6 py-4 text-gray-700">{plan.carpetArea}</td>
                    <td className="px-6 py-4 text-yellow-700 font-semibold">{plan.price}</td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => {
                          setSelectedPlan(index);
                          document.getElementById('floor-plans').scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="text-yellow-700 hover:text-yellow-800 font-semibold"
                      >
                        View Details →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-gray-500 text-sm mt-8">
          * Prices are subject to change. Please contact us for the latest pricing and offers.
        </p>
      </div>
    </section>
  );
}

export default FloorPlans;
