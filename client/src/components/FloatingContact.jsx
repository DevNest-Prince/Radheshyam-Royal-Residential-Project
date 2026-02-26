import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp, FaCommentDots } from "react-icons/fa";

const PHONE = "8879984043";
const WHATSAPP_MSG = "Hello, I'm interested in Radheshyam Royal. Please share details.";

function FloatingContact() {
  const whatsappUrl = `https://wa.me/91${PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

  return (
    <>
      {/* ── Mobile bottom bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 bg-green-600 active:bg-green-700 text-white py-2 border-r border-green-700"
        >
          <FaWhatsapp className="w-4 h-4" />
          <span className="text-xs font-semibold tracking-wide">Whatsapp</span>
        </a>

        {/* Call */}
        <a
          href={`tel:${PHONE}`}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 bg-green-600 active:bg-green-700 text-white py-2 border-r border-green-700"
        >
          <FaPhone className="w-3.5 h-3.5" />
          <span className="text-xs font-semibold tracking-wide">{PHONE}</span>
        </a>

        {/* Enquiry */}
        <Link
          to="/contact"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 bg-green-600 active:bg-green-700 text-white py-2"
        >
          <FaCommentDots className="w-4 h-4" />
          <span className="text-xs font-semibold tracking-wide">Enquiry</span>
        </Link>
      </div>

      {/* ── Desktop side buttons ── */}
      <div className="fixed right-4 bottom-8 z-50 hidden md:flex flex-col gap-3">
        <a
          href={`tel:${PHONE}`}
          aria-label="Call us"
          className="flex items-center justify-center rounded-full bg-green-600 hover:bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
          style={{ width: 52, height: 52 }}
        >
          <FaPhone className="w-5 h-5" />
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp us"
          className="flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-lg transition-transform hover:scale-110"
          style={{ width: 52, height: 52 }}
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}

export default FloatingContact;
