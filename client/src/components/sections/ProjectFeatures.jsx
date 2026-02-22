import React from 'react';
import { FaBuilding, FaDoorOpen, FaShieldAlt, FaHome, FaWind } from 'react-icons/fa';
import { MdElevator } from 'react-icons/md';

const features = [
  { icon: FaBuilding,  title: '2 Towers',     sub: 'G+7 Structure' },
  { icon: FaDoorOpen,  title: 'Grand Lobby',  sub: 'Entrance Lobby' },
  { icon: FaShieldAlt, title: '24/7 Security',sub: 'Round the Clock' },
  { icon: FaHome,      title: 'Security Cabin',sub: 'Manned Entry' },
  { icon: FaWind,      title: 'Ventilation',  sub: 'Natural Airflow' },
];

function ProjectFeatures() {
  return (
    <section className="py-16 bg-gray-900 text-white ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-yellow-400 font-semibold mb-3">Specifications</p>
          <h2 className="text-3xl font-serif font-semibold">
            Project <span className="text-yellow-400">Features</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
          {features.map(({ icon, title, sub }) => {
            const Icon = icon;
            return (
            <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition flex flex-col items-center gap-2 sm:gap-3">
              <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-400" />
              <div className="text-xs sm:text-sm font-semibold text-white">{title}</div>
              <div className="text-[10px] sm:text-xs text-gray-400">{sub}</div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectFeatures;
