import React from 'react';
import { Link } from 'react-router-dom';
import { FaSubway, FaTrain, FaRoad, FaPlane, FaSchool, FaHospital } from 'react-icons/fa';

const points = [
  { icon: FaSubway,   text: '1 Min from Upcoming Metro' },
  { icon: FaTrain,    text: '12 Min from Ghansoli Station' },
  { icon: FaRoad,     text: 'Kalyan-Shilphata Highway Touch' },
  { icon: FaPlane,    text: '20 Min from Airport' },
  { icon: FaSchool,   text: 'Nearby Schools & Colleges' },
  { icon: FaHospital, text: 'Hospitals & Malls Nearby' },
];

function LocationSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
        <div className="space-y-7">
          <div>
            <p className="text-xs uppercase tracking-widest text-yellow-700 font-semibold mb-3">Connectivity</p>
            <h2 className="text-3xl font-serif font-semibold text-gray-900">
              Perfectly <span className="text-yellow-700">Connected</span>
            </h2>
            <p className="text-gray-500 mt-3 leading-relaxed">
              Situated on Kalyan-Shilphata Highway, Navi Mumbai — offering unmatched connectivity
              to railways, metro, airports and business hubs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {points.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 bg-white border border-yellow-100 rounded-xl px-4 py-3 text-sm text-gray-700 hover:border-yellow-300 transition">
                <Icon className="w-5 h-5 text-yellow-600 shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <Link to="/location" className="inline-flex items-center gap-2 text-yellow-700 font-semibold hover:gap-4 transition-all text-sm">
            View Full Location Details →
          </Link>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-yellow-200 h-96">
          <iframe
            title="Radheshyam Royal Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.460440396423!2d73.07!3d19.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0a9a1673de9%3A0x9631e4b5f3e0d8c2!2sKalyan-Shilphata%20Rd%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
