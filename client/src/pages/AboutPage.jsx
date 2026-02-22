import React from 'react';
import LocationSection from '../components/sections/LocationSection';

function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">

      {/* Page Hero Banner */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <img
          src="/hero/RR_15.jpg"
          alt="Radheshyam Royal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs uppercase tracking-widest text-yellow-400 font-semibold mb-3">Navi Mumbai</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            About <span className="text-yellow-400">Radheshyam Royal</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Your dream home awaits in one of Navi Mumbai's most promising residential projects
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Project Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Radheshyam Royal is designed to provide premium residential living with a perfect blend 
                of modern amenities and traditional values. Located strategically on Kalyan-Shilphata Highway, 
                our project offers unmatched connectivity and convenience.
              </p>
              <p>
                With OC received and MAHARERA approval, we ensure complete transparency and legal compliance, 
                giving you peace of mind for your investment. Our 2 towers with G+7 storey buildings are 
                crafted with attention to detail and quality construction.
              </p>
              <p>
                We believe in creating not just homes, but a community where families can thrive, children 
                can play safely, and seniors can enjoy their golden years in comfort.
              </p>
            </div>
          </div>

          <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-500 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">OC Received</h4>
                  <p className="text-gray-600 text-sm">Project is ready to move with occupation certificate</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-500 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">MAHARERA Approved</h4>
                  <p className="text-gray-600 text-sm">Fully compliant with Maharashtra Real Estate Regulatory Authority</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-500 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Prime Location</h4>
                  <p className="text-gray-600 text-sm">12 minutes from Ghansoli Station, 1 minute from upcoming metro</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-500 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Construction</h4>
                  <p className="text-gray-600 text-sm">Built with premium materials and modern architecture</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-500 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Eco-Friendly</h4>
                  <p className="text-gray-600 text-sm">Solar energy, rainwater harvesting, and natural ventilation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-linear-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-white mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">2</div>
              <div className="text-amber-100">Towers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">7</div>
              <div className="text-amber-100">Floors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-amber-100">Amenities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-amber-100">Vastu Compliant</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose <span className="text-amber-600">Radheshyam Royal?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Location</h3>
              <p className="text-gray-600">
                Perfectly positioned on Kalyan-Shilphata Highway with excellent connectivity to major hubs, 
                metro, railway station, and airport.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Compliance</h3>
              <p className="text-gray-600">
                Complete transparency with OC received and MAHARERA approval. Your investment is 
                secure and legally compliant.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Luxury</h3>
              <p className="text-gray-600">
                Premium lifestyle at competitive prices. Starting from just ₹39.99 Lacs with flexible 
                payment plans available.
              </p>
            </div>
          </div>
        </div>
      </div>
      <LocationSection />
    </div>
  );
}

export default AboutPage;
