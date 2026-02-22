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

        <div className="flex flex-wrap justify-center gap-4">
          {features.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition flex flex-col items-center gap-3 w-40">
              <Icon className="w-8 h-8 text-yellow-400" />
              <div className="text-sm font-semibold text-white">{title}</div>
              <div className="text-xs text-gray-400">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectFeatures;
