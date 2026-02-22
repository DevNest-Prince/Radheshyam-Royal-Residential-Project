import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const slides = [
    {
      title: 'Grand Facade View',
      subtitle: 'Signature golden accents',
      image: '/hero/RR_15.jpg'
    },
    {
      title: 'Lobby & Arrival',
      subtitle: 'Premium finishes throughout',
      image: '/hero/RR_3.jpg'
    },
    {
      title: 'Lifestyle Spaces',
      subtitle: 'Curated amenities & comfort',
      image: '/hero/RR_135.jpg'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative h-full min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-8 lg:px-16">
        
        {/* Top Section - Brand Badge */}
        <div className="flex justify-start">
          <div className="inline-flex items-center gap-2 bg-yellow-300/20 text-yellow-300 px-4 py-2 rounded-full text-xs font-semibold tracking-wide backdrop-blur-sm border border-yellow-300/30">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
            OC Received • MAHARERA Approved
          </div>
        </div>

        {/* Middle Section - Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 max-w-xl">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-semibold font-serif text-white leading-tight">
                Radheshyam <span className="text-yellow-400">Royal</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                A refined residential address in Navi Mumbai, curated for calm, comfort, and connectivity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                '12 min to Ghansoli',
                '1 min to Metro',
                'G+7 Towers',
                '20 min to Airport'
              ].map((item) => (
                <div key={item} className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-sm text-white font-medium">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/floor-plans"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-600 text-white font-semibold rounded-xl hover:bg-yellow-700 transition shadow-lg text-base"
              >
                Explore Floor Plans →
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/15 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/25 transition backdrop-blur-sm text-base"
              >
                Schedule Site Visit
              </Link>
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-5">
            {/* Stats Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl">
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { value: '2', label: 'Towers' },
                  { value: '7', label: 'Floors' },
                  { value: '24/7', label: 'Security' }
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-3xl font-bold text-yellow-300">{item.value}</div>
                    <div className="text-sm text-gray-200 mt-2">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl">
              <div className="text-xs uppercase tracking-widest text-yellow-300 font-semibold opacity-90">Starting from</div>
              <div className="text-5xl font-bold text-white mt-3">₹39.99 Lacs*</div>
              <div className="text-sm text-gray-200 mt-3">1 BHK - 395 sq.ft carpet area</div>
              <div className="mt-6 p-4 bg-yellow-400/20 border border-yellow-400/30 rounded-lg">
                <p className="text-xs text-gray-100">Premium finishes & modern amenities included</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Carousel Controls */}
        <div className="flex items-center justify-between">
          <div className="text-white font-serif text-sm tracking-wider">
            {slides[activeIndex].title}
          </div>
          
          <div className="flex items-center space-x-3">
            {slides.map((slide, index) => (
              <button
                key={`${slide.title}-dot`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition duration-300 ${
                  index === activeIndex 
                    ? 'bg-yellow-300 w-8 h-3' 
                    : 'bg-white/40 w-3 h-3 hover:bg-white/60'
                }`}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-xs text-gray-300 uppercase tracking-wide">
            {activeIndex + 1} / {slides.length}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
