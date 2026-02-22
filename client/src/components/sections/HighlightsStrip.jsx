import React from 'react';
import { FaCheckCircle, FaHome, FaSubway, FaTrain, FaPlane, FaRoad } from 'react-icons/fa';

const highlights = [
  { icon: FaCheckCircle, text: 'MAHARERA Approved' },
  { icon: FaHome,        text: 'OC Received' },
  { icon: FaSubway,      text: '1 Min Upcoming Metro' },
  { icon: FaTrain,       text: '12 Min Ghansoli Station' },
  { icon: FaPlane,       text: '20 Min Airport' },
  { icon: FaRoad,        text: 'Highway Touch Location' },
];

function HighlightsStrip() {
  return (
    <div className="bg-yellow-700 text-white py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {highlights.map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-2 text-yellow-100 text-sm font-medium whitespace-nowrap">
              <Icon className="w-4 h-4 shrink-0" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HighlightsStrip;
