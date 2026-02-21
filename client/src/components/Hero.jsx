import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div id="home" className="relative pt-20 min-h-screen flex items-center bg-linear-to-br from-yellow-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>OC Received • MAHARERA Approved</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-yellow-700">Radheshyam</span>
                <br />
                <span className="text-gray-800">Royal</span>
              </h1>
              <p className="text-xl text-gray-600 mt-4">Premium Residential Living in the Heart of Connectivity</p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md border border-yellow-300">
                <div className="text-yellow-700 text-3xl font-bold">12 Min</div>
                <div className="text-gray-600 text-sm">From Ghansoli Station</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border border-yellow-300">
                <div className="text-yellow-700 text-3xl font-bold">1 Min</div>
                <div className="text-gray-600 text-sm">From Metro Station</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border border-yellow-300">
                <div className="text-yellow-700 text-3xl font-bold">G+7</div>
                <div className="text-gray-600 text-sm">Storey Towers</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border border-yellow-300">
                <div className="text-yellow-700 text-3xl font-bold">20 Min</div>
                <div className="text-gray-600 text-sm">From Airport</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/floor-plans" 
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-700 text-white font-semibold rounded-full hover:bg-yellow-800 transition shadow-lg hover:shadow-xl"
              >
                Explore Floor Plans
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-semibold rounded-full border-2 border-yellow-700 hover:bg-yellow-50 transition"
              >
                Schedule Site Visit
              </Link>
            </div>

            {/* Starting Price */}
            <div className="bg-linear-to-r from-yellow-700 to-yellow-600 text-white p-6 rounded-xl">
              <div className="text-sm font-semibold uppercase tracking-wide">Starting From</div>
              <div className="text-4xl font-bold mt-1">₹39.99 Lacs*</div>
              <div className="text-sm mt-2 opacity-90">1 BHK - 395 sq.ft carpet area</div>
            </div>
          </div>

          {/* Right Content - Image/Stats */}
          <div className="relative">
            {/* Placeholder for building image */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
              <div className="aspect-video bg-linear-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto text-yellow-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-gray-500 mt-4">Premium Residential Project</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-700">2</div>
                <div className="text-sm text-gray-600">Towers</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-700">7</div>
                <div className="text-sm text-gray-600">Floors</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-700">24/7</div>
                <div className="text-sm text-gray-600">Security</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-700">100%</div>
                  <div className="text-sm text-gray-600">Vastu</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-700 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12">
              <div className="font-bold">Ready to Move</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}

export default Hero;
