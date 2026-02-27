import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaHome, FaSubway, FaTrain, FaPlane, FaRoad } from "react-icons/fa";

const highlights = [
  { icon: FaCheckCircle, text: "MAHARERA Approved" },
  { icon: FaHome,        text: "OC Received" },
  { icon: FaSubway,      text: "1 Min Upcoming Metro" },
  { icon: FaTrain,       text: "12 Min Ghansoli Station" },
  { icon: FaPlane,       text: "20 Min Airport" },
  { icon: FaRoad,        text: "Highway Touch Location" },
];

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
    <>
    {/* ── Mobile: promotional image only ── */}
    <div className="sm:hidden w-full pt-20">
      <img
        src="/Mobile hero image .jpeg"
        alt="Radheshyam Royal – 1 & 2 BHK Premium Residences, Ready Possession OC Received"
        className="w-full h-auto object-cover"
      />
    </div>

    {/* ── Desktop: full slideshow hero ── */}
    <section className="hidden sm:block relative w-full h-screen min-h-125 max-h-225 overflow-hidden">

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
      <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/55 to-black/70" />

      {/* Centre content — pt-20 clears the fixed 80px navbar */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-20">

        {/* Badge */}
        <div className="flex items-center gap-2 bg-yellow-500/15 border border-yellow-400/30 text-yellow-300 text-[9px] sm:text-[10px] lg:text-xs font-semibold uppercase tracking-widest px-3 sm:px-4 py-1 sm:py-1.5 rounded-full backdrop-blur-sm mb-3 sm:mb-4">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
          OC Received &nbsp;·&nbsp; MAHARERA Approved
        </div>

        {/* Location sub-label */}
        <p className="text-yellow-300 text-[9px] sm:text-xs lg:text-sm uppercase tracking-[0.18em] sm:tracking-[0.25em] font-bold mb-2 sm:mb-3">
          Upper Ghansoli &nbsp;·&nbsp; Kalyan-Shilphata Highway
        </p>

        {/* Main heading */}
        <h1 className="font-serif font-bold text-white leading-[1.08]
          text-[clamp(2rem,8vw,3.5rem)]
          sm:text-5xl
          md:text-6xl
          lg:text-6xl
          xl:text-7xl
          2xl:text-8xl
          mb-3 sm:mb-4 lg:mb-5">
          Radheshyam<br />
          <span className="text-yellow-400">Royal</span>
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg max-w-70 sm:max-w-md lg:max-w-lg leading-relaxed mb-5 sm:mb-6 lg:mb-4">
          Premium 1 &amp; 2 BHK homes in Upper Ghansoli — designed for comfort, crafted with quality.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-65 sm:max-w-none">
          <Link
            to="/floor-plans"
            className="px-6 py-3 sm:px-7 sm:py-3.5 lg:px-8 lg:py-4 bg-yellow-600 hover:bg-yellow-500 active:scale-95 text-white font-semibold rounded-full transition-all shadow-xl text-xs sm:text-sm tracking-wide"
          >
            Explore Floor Plans
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 sm:px-7 sm:py-3.5 lg:px-8 lg:py-4 bg-white/10 hover:bg-white/20 active:scale-95 border border-white/40 text-white font-semibold rounded-full transition-all text-xs sm:text-sm tracking-wide"
          >
            Book a Site Visit
          </Link>
        </div>

      </div>

      {/* Slide dots — sit above the highlights strip (~56px tall) */}
      <div className="absolute bottom-17 sm:bottom-18 inset-x-0 flex justify-center gap-2.5">
        {slides.map((s, i) => (
          <button
            key={s.image}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-7 h-2 bg-yellow-400" : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Highlights strip — pinned to hero bottom */}
      <div className="absolute bottom-0 inset-x-0 bg-yellow-700 text-white py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-5 sm:gap-x-8 gap-y-2">
            {highlights.map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 text-yellow-100 text-[10px] sm:text-xs lg:text-sm font-medium whitespace-nowrap">
                {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />}
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
    </>
  );
}

export default Hero;
