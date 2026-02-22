import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Pages
import Home from '../pages/Home';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import FloorPlansPage from '../pages/FloorPlansPage';
import AmenitiesPage from '../pages/AmenitiesPage';
import ContactPage from '../pages/ContactPage';
import GalleryPage from '../pages/GalleryPage';

function AppRoutes() {
  return (
    <Routes>
      {/* Single Page Home (All sections) */}
      <Route path="/home-single" element={<Home />} />
      
      {/* Multi-Page Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/floor-plans" element={<FloorPlansPage />} />
      <Route path="/amenities" element={<AmenitiesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      
      {/* 404 Page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

// 404 Not Found Page
function NotFoundPage() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-amber-600">404</h1>
        <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default AppRoutes;
