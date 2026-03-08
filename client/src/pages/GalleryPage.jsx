import React, { useState, useEffect, useCallback } from 'react';
import SEOHead from '../components/SEOHead';
import VideoCard from '../components/VideoCard';

// Cloudinary thumbnail helper — serves auto-compressed, resized images for the grid
const thumb = (url) => url.replace('/upload/', '/upload/w_700,q_auto,f_auto/');

// gallery images using cloudinary
const IMAGES = [
  // ── Drone Photos ────────────────────────────────────────────────
  { id: 1,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782657/DJI_20250320173728_0051_D_pla3qv.jpg', title: 'Drone View 1',  category: 'Drone' },
  { id: 2,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782656/DJI_20250320173820_0056_D_lttmx7.jpg', title: 'Drone View 2',  category: 'Drone' },
  { id: 3,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782655/DJI_20250320174335_0077_D_rxgblb.jpg', title: 'Drone View 3',  category: 'Drone' },
  { id: 4,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782649/DJI_20250320173918_0062_D_facbaj.jpg', title: 'Drone View 4',  category: 'Drone' },
  { id: 5,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782647/DJI_20250320173918_0062_D-2_ajyu9m.jpg', title: 'Drone View 5', category: 'Drone' },
  { id: 6,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782644/DJI_20250320173534_0038_D-12_wrz7t9.jpg', title: 'Drone View 6', category: 'Drone' },
  { id: 99, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782642/DJI_20250320173618_0041_D_azeer0.jpg', title: 'Drone View 7',  category: 'Drone' },
  { id: 100, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782641/DJI_20250320173441_0034_D_lcgjtk.jpg', title: 'Drone View 8', category: 'Drone' },
  { id: 101, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782638/DJI_20250320173534_0038_D-10.JPG_sx6wau.jpg', title: 'Drone View 9', category:'Drone'},
  // ── Interiors ──────────────────────────────────────────────────
  { id: 300, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782743/RR_46_qlu85o.jpg',   title: 'Interior 1',  category: 'Interiors' },
  { id: 301, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782742/RR_49_axhpxt.jpg',   title: 'Interior 1',  category: 'Interiors' },
  { id: 302, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782745/RR_51_oxkv8t.jpg',   title: 'Interior 1',  category: 'Interiors' },
  { id: 7,   src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782852/RR_132_xoldmj.jpg',  title: 'Interior 2',  category: 'Interiors' },
  { id: 8,   src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782844/RR_125_j0wlnj.jpg',  title: 'Interior 3',  category: 'Interiors' },
  { id: 9,   src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782849/RR_127_hyjjw0.jpg',  title: 'Interior 4',  category: 'Interiors' },
  { id: 10,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782843/RR_124_hiuspa.jpg',  title: 'Interior 5',  category: 'Interiors' },
  { id: 11,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782838/RR_120_upd1dd.jpg',  title: 'Interior 6',  category: 'Interiors' },
  { id: 12,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782838/RR_123_jnjtuz.jpg',  title: 'Interior 7',  category: 'Interiors' },
  { id: 13,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782833/RR_116_kyckph.jpg',  title: 'Interior 8',  category: 'Interiors' },
  { id: 14,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782832/RR_115_jppy5o.jpg',  title: 'Interior 9',  category: 'Interiors' },
  { id: 15,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782825/RR_110_py8k9e.jpg',  title: 'Interior 10', category: 'Interiors' },
  { id: 16,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782823/RR_111_wfzn4o.jpg',  title: 'Interior 11', category: 'Interiors' },
  { id: 303,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782751/RR_55_nazwns.jpg',  title: 'Interior 11', category: 'Interiors' },
  { id: 304,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782748/RR_54_agvvnj.jpg',  title: 'Interior 11', category: 'Interiors' },
  { id: 17,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782821/RR_106_npoi5n.jpg',  title: 'Interior 12', category: 'Interiors' },
  { id: 306,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782832/RR_114_kglrop.jpg',  title: 'Interior 12', category: 'Interiors' },
  { id: 308,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782843/RR_124_hiuspa.jpg',  title: 'Interior 12', category: 'Interiors' },
  { id: 309,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782837/RR_122_bfgwcc.jpg',  title: 'Interior 12', category: 'Interiors' },
  { id: 18,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782810/RR_97_minkpl.jpg',   title: 'Interior 13', category: 'Interiors' },
  { id: 305,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782760/RR_64_mc6bu1.jpg',   title: 'Interior 13', category: 'Interiors' },
  { id: 25,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782802/RR_92_kljdpt.jpg',   title: 'Interior 14', category: 'Interiors' },
  { id: 20,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782810/RR_103_vsvtgm.jpg',  title: 'Interior 15', category: 'Interiors' },
  { id: 21,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782803/RR_94_nlxddi.jpg',   title: 'Interior 16', category: 'Interiors' },
  { id: 22,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782799/RR_96_nkwub2.jpg',   title: 'Interior 17', category: 'Interiors' },
  { id: 23,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782798/RR_95_s2gfjb.jpg',   title: 'Interior 18', category: 'Interiors' },
  { id: 24,  src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782785/RR_80_vhwhts.jpg',   title: 'Interior 19', category: 'Interiors' },
  // ── Exterior ──────────────────────────────────────────────────
  { id: 30, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782803/RR_93_n052br.jpg',  title: 'Exterior 1',  category: 'Exterior' },
  { id: 307, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782770/RR_70_loep0u.jpg',  title: 'Exterior 1',  category: 'Exterior' },
  { id: 29, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782820/RR_108_j0ojkz.jpg', title: 'Exterior 2',  category: 'Exterior' },
  { id: 31, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782717/RR_29_r1jv5e.jpg',  title: 'Exterior 3',  category: 'Exterior' },
  { id: 32, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782708/RR_27_gj7sm1.jpg',  title: 'Exterior 4',  category: 'Exterior' },
  { id: 33, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782705/RR_26_aplsrn.jpg',  title: 'Exterior 5',  category: 'Exterior' },
  { id: 34, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782689/RR_25_e38z2u.jpg',  title: 'Exterior 6',  category: 'Exterior' },
  { id: 35, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782856/RR_134_fsaaji.jpg', title: 'Exterior 7',  category: 'Exterior' },
  { id: 36, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782684/RR_24_tshbeq.jpg',  title: 'Exterior 8',  category: 'Exterior' },
  { id: 38, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782684/RR_23_omaayv.jpg',  title: 'Exterior 9',  category: 'Exterior' },
  { id: 39, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782681/RR_20_ihrmvg.jpg',  title: 'Exterior 10', category: 'Exterior' },
  { id: 41, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782678/RR_19_zbxuk3.jpg',  title: 'Exterior 11', category: 'Exterior' },
  { id: 42, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782819/RR_107_tkj1ax.jpg', title: 'Exterior 12', category: 'Exterior' },
  { id: 45, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782780/RR_75_pql5mn.jpg',  title: 'Exterior 13', category: 'Exterior' },
  { id: 46, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782770/RR_70_loep0u.jpg',  title: 'Exterior 14', category: 'Exterior' },
  { id: 47, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782763/RR_65_iabp5o.jpg',  title: 'Exterior 15', category: 'Exterior' },
  { id: 49, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782735/RR_44_yvrzui.jpg',  title: 'Exterior 16', category: 'Exterior' },
  { id: 54, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782677/RR_14_vg5lui.jpg',  title: 'Exterior 17', category: 'Exterior' },
  { id: 55, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782666/RR_8_xuddg1.jpg',   title: 'Exterior 18', category: 'Exterior' },
  { id: 57, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782714/RR_33_r1koyx.jpg',  title: 'Exterior 19', category: 'Exterior' },
  { id: 58, src: 'https://res.cloudinary.com/dkjpkbgxc/image/upload/v1772782716/RR_34_nawxsx.jpg',  title: 'Exterior 20', category: 'Exterior' },
];





//   youtube.com/watch?v=XXXXXXXXXXX
const VIDEOS = [
  {
    youtubeId: 'bE479c_gsSI', // Sample Flat — 1 BHK Tour
    title: 'Sample Flat — 1 BHK Tour',
    category: 'Sample Flat',
  },
  {
    youtubeId: 'tUdCDfJCvoE', // Sample Flat — 2 BHK Tour
    title: 'Sample Flat — 2 BHK Tour',
    category: 'Sample Flat',
  },
  {
    youtubeId: 'VtrD0j2Ryps', //  Interview — Part 1
    title: ' interview with Radheshyam Royal - 1',
    category: 'Interview',
  },
  {
    youtubeId: 'LZqV35VdWSE', //  Interview — Part 2
    title: 'interview with Radheshyam Royal - 2',
    category: 'Interview',
  },
];

const CATEGORIES = ['All','Interiors','Exterior', 'Drone','Sample Flat', 'Interview'];

function GalleryPage() {
  const [selected, setSelected] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filteredImages = IMAGES.filter(
    img => (selected === 'All' || img.category === selected) && img.src !== 'PASTE_CLOUDINARY_URL_HERE'
  );

  const filteredVideos = VIDEOS.filter(
    v => (selected === 'All' || v.category === selected) && v.youtubeId !== 'PASTE_YOUTUBE_ID_HERE'
  );

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const goPrev = useCallback((e) => { e?.stopPropagation(); setLightboxIdx(i => (i - 1 + filteredImages.length) % filteredImages.length); }, [filteredImages.length]);
  const goNext = useCallback((e) => { e?.stopPropagation(); setLightboxIdx(i => (i + 1) % filteredImages.length); }, [filteredImages.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIdx, closeLightbox, goPrev, goNext]);

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
            {filteredImages.map((image, idx) => (
              <div
                key={image.id}
                onClick={() => setLightboxIdx(idx)}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden bg-amber-50">
                  <img
                    src={thumb(image.src)}
                    alt={image.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    {/* Fullscreen / expand icon */}
                    <svg className="w-12 h-12 text-white mx-auto mb-2 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
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
                  key={video.youtubeId || video.title}
                  youtubeId={video.youtubeId}
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
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white hover:text-amber-400 transition z-10"
            onClick={closeLightbox}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-amber-600 text-white rounded-full p-3 transition z-10"
            onClick={goPrev}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={filteredImages[lightboxIdx].src}
            alt={filteredImages[lightboxIdx].title}
            className="max-w-full max-h-[90vh] rounded-xl object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-amber-600 text-white rounded-full p-3 transition z-10"
            onClick={goNext}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIdx + 1} / {filteredImages.length}
          </span>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;

 