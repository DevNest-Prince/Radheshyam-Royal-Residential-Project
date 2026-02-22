import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const highlights = [
  'MAHARERA Approved Project',
  '2 Residential Towers (G+7)',
  'Natural Ventilation Design',
  'Vastu Compliant Homes',
  '20+ Lifestyle Amenities',
  'Kalyan-Shilphata Highway',
  'OC Received – Ready to Move',
  'Grand Entrance Lobby',
];

const pricing = [
  { type: '1 BHK', area: '395 – 435 sqft', price: '₹39.99 Lacs*', filled: true },
  { type: '2 BHK', area: '511 – 562 sqft', price: '₹53.99 Lacs*', filled: false },
];

function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top: Image + Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">

          {/* Left – Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/RR_15.jpg"
              alt="Radheshyam Royal"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right – Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                About Radheshyam Royal
              </h2>
              <div className="mt-2 w-14 h-1 bg-yellow-600 rounded-full" />
            </div>

            <p className="text-gray-600 leading-relaxed">
              Radheshyam Royal is developed by a trusted builder with a strong track record of delivering
              quality residential projects. Located on the Kalyan-Shilphata Highway, Navi Mumbai, this
              MAHARERA-approved project offers premium 1 &amp; 2 BHK homes with OC received — move in
              right away.
            </p>

            <div>
              <p className="font-bold text-gray-900 mb-4">Key Highlights</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-yellow-700 font-semibold text-sm hover:gap-3 transition-all"
            >
              Know More About the Project →
            </Link>
          </div>
        </div>

        {/* Bottom: Pricing Cards */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {pricing.map((p) => (
            <Link
              to="/contact"
              key={p.type}
              className={`flex items-center justify-between px-7 py-5 rounded-2xl transition shadow-sm hover:shadow-lg ${
                p.filled
                  ? 'bg-yellow-600 text-white'
                  : 'bg-white text-gray-900 border-2 border-yellow-600 hover:bg-yellow-50'
              }`}
            >
              <div>
                <div className={`text-xl font-bold ${p.filled ? 'text-white' : 'text-gray-900'}`}>
                  {p.type}
                </div>
                <div className={`text-xs mt-0.5 ${p.filled ? 'text-yellow-100' : 'text-gray-500'}`}>
                  {p.area}
                </div>
              </div>
              <div className={`text-xl font-bold ${p.filled ? 'text-white' : 'text-gray-900'}`}>
                {p.price}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
