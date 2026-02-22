import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const PHONE = "+918879514843";
const WHATSAPP_MSG = "Hello, I'm interested in Radheshyam Royal. Please share details.";

function FloatingContact() {
  const whatsappUrl = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

  return (
    <div className="fixed right-4 bottom-8 z-50 flex flex-col gap-3">
      {/* Call */}
      <a
        href={`tel:${PHONE}`}
        aria-label="Call us"
        className="flex items-center justify-center rounded-full bg-green-600 hover:bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
        style={{ width: 52, height: 52 }}
      >
        <FaPhone className="w-5 h-5" />
      </a>

      {/* WhatsApp */}
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
  );
}

export default FloatingContact;
