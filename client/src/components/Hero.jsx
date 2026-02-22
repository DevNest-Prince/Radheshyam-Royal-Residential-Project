import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  { image: "/RR_15.jpg" },
  { image: "/RR_3.jpg" },
  { image: "/RR_135.jpg" },
];

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">

      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.image} alt="" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/75" />

      {/* Top ribbon */}
      <div className="absolute top-23 sm:top-27 inset-x-0 flex justify-center px-4">
        <div className="flex items-center gap-2 bg-yellow-500/15 border border-yellow-400/30 text-yellow-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-sm">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          OC Received &nbsp;·&nbsp; MAHARERA Approved
        </div>
      </div>

      {/* Centre content */}
      <div className="relative h-[85vh] flex flex-col items-center justify-center text-center px-6">
          <p className="text-yellow-300 text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mb-3 sm:mb-5">
            Navi Mumbai &nbsp;·&nbsp; Kalyan-Shilphata Highway
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-4 sm:mb-6">
            Radheshyam<br />
            <span className="text-yellow-400">Royal</span>
          </h1>

          <p className="text-gray-200 text-sm sm:text-lg max-w-xs sm:max-w-lg leading-relaxed mb-7 sm:mb-10">
            Premium 1 &amp; 2 BHK homes in Navi Mumbai — designed for comfort, crafted with quality.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none">
            <Link
              to="/floor-plans"
              className="px-7 py-3.5 sm:px-8 sm:py-4 bg-yellow-600 hover:bg-yellow-500 active:scale-95 text-white font-semibold rounded-full transition-all shadow-xl text-sm tracking-wide"
            >
              Explore Floor Plans
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 active:scale-95 border border-white/40 text-white font-semibold rounded-full transition-all text-sm tracking-wide"
            >
              Book a Site Visit
            </Link>
          </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center gap-2.5">
        {slides.map((s, i) => (
          <button
            key={s.image}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-8 h-2.5 bg-yellow-400" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;
