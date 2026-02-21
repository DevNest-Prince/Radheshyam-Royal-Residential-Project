import React from 'react';

function Location() {
  const nearbyPlaces = [
    {
      category: 'Schools',
      icon: '🏫',
      places: ['DAV Public School', 'Ryan International', 'Kendriya Vidyalaya'],
      distance: 'Within 2 km'
    },
    {
      category: 'Healthcare',
      icon: '🏥',
      places: ['MGM Hospital', 'Apollo Clinic', 'LifeCare Hospital'],
      distance: 'Within 3 km'
    },
    {
      category: 'Shopping Malls',
      icon: '🏢',
      places: ['Orion Mall', 'Phoenix Market City', 'Inorbit Mall'],
      distance: 'Within 5 km'
    },
    {
      category: 'Petrol Pumps',
      icon: '⛽',
      places: ['HP Petrol Pump', 'Bharat Petroleum', 'Indian Oil'],
      distance: 'Within 1 km'
    },
    {
      category: 'Markets',
      icon: '🌽',
      places: ['Local Bazaar', 'Vegetable Market', 'Supermarket'],
      distance: 'Within 500m'
    },
    {
      category: 'Mountain View',
      icon: '⛰️',
      places: ['Scenic Green Views', 'Peaceful Environment', 'Fresh Air'],
      distance: 'From Home'
    }
  ];

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Prime <span className="text-yellow-700">Location</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located on Kalyan-Shilphata Highway with excellent connectivity
          </p>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-linear-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-20 h-20 mx-auto text-yellow-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 font-medium">Kalyan-Shilphata Highway</p>
                  <p className="text-sm text-gray-500 mt-2">Near Ghansoli Station</p>
                  <button className="mt-4 px-6 py-2 bg-yellow-700 text-white rounded-full hover:bg-yellow-800 transition">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Address & Connectivity */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Address</h3>
                <p className="text-gray-700 leading-relaxed">
                  Radheshyam Royal<br />
                  Kalyan-Shilphata Highway<br />
                  12 Minutes from Ghansoli Station<br />
                  Navi Mumbai, Maharashtra
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-4">Quick Access to:</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">🚉 Ghansoli Station</span>
                    <span className="font-semibold text-yellow-700">12 min</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-yellow-200 pt-3">
                    <span className="text-gray-700">🚇 Metro Station</span>
                    <span className="font-semibold text-yellow-700">1 min</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-yellow-200 pt-3">
                    <span className="text-gray-700">✈️ D B Patil Airport</span>
                    <span className="font-semibold text-yellow-700">20 min</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-yellow-200 pt-3">
                    <span className="text-gray-700">🛣️ Main Highway</span>
                    <span className="font-semibold text-yellow-700">On Road</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Transportation</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">🚍 NMMT Bus</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">🚌 KDMC Bus</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">🚖 Easy Cab Access</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">🛵 Auto Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Places */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Location <span className="text-yellow-700">Advantages</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyPlaces.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-yellow-200 hover:border-yellow-400"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{item.category}</h4>
                    <p className="text-sm text-yellow-700 font-medium">{item.distance}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.places.map((place, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-yellow-700 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{place}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Banner */}
        <div className="mt-16 bg-linear-to-r from-yellow-700 to-yellow-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Everything You Need, Close to Home</h3>
          <p className="text-yellow-50 text-lg mb-6 max-w-3xl mx-auto">
            Located in a well-developed area with schools, hospitals, shopping centers, and entertainment options 
            within easy reach. Experience the perfect blend of urban convenience and peaceful living.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-yellow-700 font-semibold rounded-full hover:bg-yellow-50 transition"
          >
            Schedule a Site Visit
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Location;
