import React from 'react';

function Amenities() {
  const amenities = [
    {
      icon: '☘️',
      title: 'Beautiful Landscape Garden',
      description: 'Lush green spaces for relaxation'
    },
    {
      icon: '🛝',
      title: "Children's Play Area",
      description: 'Safe and fun play zone for kids'
    },
    {
      icon: '👨‍🦯',
      title: "Senior Citizen's Haven",
      description: 'Dedicated space for elderly residents'
    },
    {
      icon: '🛕',
      title: 'Sai Baba Temple',
      description: 'Spiritual space within premises'
    },
    {
      icon: '🧘‍♀️',
      title: 'Yoga Space',
      description: 'Dedicated area for yoga and meditation'
    },
    {
      icon: '🤩',
      title: 'Recreational Area',
      description: 'Entertainment and leisure facilities'
    },
    {
      icon: '👮‍♂️',
      title: 'Security Cabin',
      description: 'Round-the-clock security personnel'
    },
    {
      icon: '🌬️',
      title: 'Natural Ventilation',
      description: 'Well-designed cross ventilation'
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            World-Class <span className="text-yellow-700">Amenities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully curated facilities designed for a luxurious lifestyle
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-yellow-200 hover:border-yellow-400 text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {amenity.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Highlights */}
        <div className="bg-linear-to-r from-yellow-700 to-yellow-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4">Experience Luxury Living</h3>
              <p className="text-yellow-50 text-lg mb-6">
                Every amenity has been thoughtfully designed to enhance your lifestyle and provide comfort, security, and convenience for you and your family.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Eco-Friendly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Family-Oriented</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Modern Design</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-flex flex-col items-center md:items-end space-y-4">
                <div className="bg-white text-yellow-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg">
                  20+ Amenities
                </div>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-white hover:text-yellow-100 transition font-semibold"
                >
                  Schedule a Visit
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amenities;
