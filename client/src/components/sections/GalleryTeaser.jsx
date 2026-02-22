import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';

const images = [
  { src: '/RR_15.jpg',  alt: 'Exterior View' },
  { src: '/RR_3.jpg',   alt: 'Lobby & Amenities' },
  { src: '/RR_135.jpg', alt: 'Lifestyle Spaces' },
];

function GalleryTeaser() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-yellow-700 font-semibold mb-3">Gallery</p>
          <h2 className="text-3xl font-serif font-semibold text-gray-900">
            See It <span className="text-yellow-700">For Yourself</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">Exterior · Interior · Amenities</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={img.src} className={`rounded-2xl overflow-hidden ${i === 2 ? 'hidden md:block' : ''}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-700 text-white font-semibold rounded-xl hover:bg-yellow-800 transition"
          >
            View Full Gallery <MdArrowForward className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GalleryTeaser;
