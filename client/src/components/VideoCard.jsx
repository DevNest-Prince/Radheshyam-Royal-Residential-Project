import React, { useState, useRef } from 'react';

/**
 * VideoCard — shows a branded thumbnail with play button overlay.
 * Clicking the overlay starts the video and hides the thumbnail.
 */
function VideoCard({ src, title, subtitle, thumbnail }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    // Small delay so the overlay fades before play starts
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
      <div className="relative aspect-video bg-black">
        {/* Video element */}
        <video
          ref={videoRef}
          src={src}
          controls={playing}
          preload="none"
          className="w-full h-full object-cover"
        />

        {/* Thumbnail overlay — hidden once playing */}
        {!playing && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
            onClick={handlePlay}
            style={{
              background: thumbnail
                ? `url(${thumbnail}) center/cover no-repeat`
                : 'linear-gradient(135deg, #1a1a2e 0%, #2d1a00 100%)',
            }}
          >
            {/* Dark overlay for gradient effect over thumbnail */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

            {/* Branding */}
            <div className="relative z-10 text-center px-4">
              <p className="text-yellow-400 text-xs uppercase tracking-widest font-semibold mb-4">
                Radheshyam Royal
              </p>

              {/* Play button */}
              <div className="w-16 h-16 rounded-full bg-amber-600 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center mx-auto shadow-2xl">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              <p className="text-white font-semibold text-base mt-4 drop-shadow">{title}</p>
            </div>
          </div>
        )}
      </div>

      {/* Card info */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
        {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}

export default VideoCard;
