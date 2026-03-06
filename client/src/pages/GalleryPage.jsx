import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import VideoCard from '../components/VideoCard';

// ─── Cloudinary base URL ────────────────────────────────────────────────────
// Format: https://res.cloudinary.com/dkjpkbgxc/image/upload/w_800,q_auto,f_auto/FOLDER/FILENAME
// Replace PASTE_CLOUDINARY_URL_HERE with the full Cloudinary URL of each image

const IMAGES = [
  // ── Drone Photos ────────────────────────────────────────────────
  { id: 1,  src: 'PASTE_CLOUDINARY_URL_HERE', title: 'Drone View 1',   category: 'Drone' },
  { id: 2,  src: 'PASTE_CLOUDINARY_URL_HERE', title: 'Drone View 2',   category: 'Drone' },
  { id: 3,  src: 'PASTE_CLOUDINARY_URL_HERE', title: 'Drone View 3',   category: 'Drone' },
  { id: 4,  src: 'PASTE_CLOUDINARY_URL_HERE', title: 'Drone View 4',   category: 'Drone' },
  { id: 5,  src: 'PASTE_CLOUDINARY_URL_HERE', title: 'Drone View 5',   category: 'Drone' },
  { id: 6,  src: 'PASTE_CLOUDINARY_URL_HERE', title: 'Drone View 6',   category: 'Drone' },
  // ── RR Interiors / Building ──────────────────────────────────────
  { id: 7,  src: 'PASTE_CLOUDINARY_URL_HERE', title: 'Interior 1',     category: 'Interiors' },
  { id: 8,  src: 'PASTE_CLOUDINARY_URL_HERE', title: 'Interior 2',     category: 'Interiors' },
  { id: 9,  src: 'PASTE_CLOUDINARY_URL_HERE', title: 'Interior 3',     category: 'Interiors' },
  { id: 10, src: 'PASTE_CLOUDINARY_URL_HERE', title: 'Interior 4',     category: 'Interiors' },
  { id: 11, src: 'PASTE_CLOUDINARY_URL_HERE', title: 'Interior 5',     category: 'Interiors' },
  { id: 12, src: 'PASTE_CLOUDINARY_URL_HERE', title: 'Interior 6',     category: 'Interiors' },
];

// ─── Local videos (uploaded to /public) ─────────────────────────────────────
const VIDEOS = [
  { 
    src: '/sample-flat-videos/Sample flat-1BHK-video.mov', 
    title: 'Sample Flat — 1 BHK Tour',
    category: 'Sample Flat',
    thumbnail: '/thumbnails/1bhk-thumb.jpg' // Replace with your thumbnail path
  },
  { 
    src: '/sample-flat-videos/Sample Flat-2 BHK-video.mov', 
    title: 'Sample Flat — 2 BHK Tour',
    category: 'Sample Flat',
    thumbnail: '/thumbnails/2bhk-thumb.jpg' // Replace with your thumbnail path
  },
  { 
    src: '/interview-video/Cover-interview-1.mov',
    title: 'Developer Interview — Part 1',
    category: 'Interview',
    thumbnail: '/thumbnails/interview-1-thumb.jpg' // Replace with your thumbnail path
  },
  { 
    src: '/interview-video/Cover-interview-2.mov',
    title: 'Developer Interview — Part 2',
    category: 'Interview',
    thumbnail: '/thumbnails/interview-2-thumb.jpg' // Replace with your thumbnail path
  },
];

const CATEGORIES = ['All', 'Drone', 'Interiors', 'Sample Flat', 'Interview'];

function GalleryPage() {
  const [selected, setSelected] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filteredImages = IMAGES.filter(
    img => (selected === 'All' || img.category === selected) && img.src !== 'PASTE_CLOUDINARY_URL_HERE'
  );

  const filteredVideos = VIDEOS.filter(
    v => selected === 'All' || v.category === selected
  );

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <SEOHead
        title="Project Gallery"
        description="View photos of Radheshyam Royal — building exterior, interiors, amenities, and sample flats. Premium 1 & 2 BHK project in Upper Ghansoli, Navi Mumbai."
        keywords="Radheshyam Royal gallery, photos flats Upper Ghansoli, sample flat images Navi Mumbai"
        canonical="/gallery"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Project <span className="text-amber-600">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the beauty and elegance of Radheshyam Royal through our collection
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selected === cat
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        {filteredImages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setLightbox(image.src)}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden bg-amber-50">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <svg className="w-10 h-10 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="inline-block bg-amber-600 text-white px-4 py-1 rounded-full text-sm">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {filteredVideos.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {filteredVideos.map((video) => (
                <VideoCard
                  key={video.src}
                  src={video.src}
                  title={video.title}
                  subtitle={video.category}
                />
              ))}
            </div>
          </>
        )}

        {/* Empty state */}
        {filteredImages.length === 0 && filteredVideos.length === 0 && (
          <p className="text-center text-gray-400 py-16 text-lg">No items in this category yet.</p>
        )}

        {/* CTA */}
        <div className="mt-8 bg-linear-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
          <p className="text-amber-50 text-lg mb-6 max-w-2xl mx-auto">
            Schedule a site visit to experience Radheshyam Royal in person
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-full hover:bg-amber-50 transition"
          >
            Schedule Site Visit
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white hover:text-amber-400 transition"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox}
            alt="Full view"
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default GalleryPage;

 