import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t-4 border-yellow-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Radheshyam Royal</h3>
            <p className="text-gray-400 mb-4">
              Premium residential project with OC Received. Located on Kalyan-Shilphata Highway, 
              just 12 minutes from Ghansoli Station.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61588571031493" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/radheshyamroyalhomes?igsh=MTg1am16cXE5d3FmZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-yellow-500 transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-500 transition">About</Link></li>
              <li><Link to="/amenities" className="text-gray-400 hover:text-yellow-500 transition">Amenities</Link></li>
              <li><Link to="/floor-plans" className="text-gray-400 hover:text-yellow-500 transition">Floor Plans</Link></li>
              
              <li><Link to="/gallery" className="text-gray-400 hover:text-yellow-500 transition">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kalyan-Shilphata Highway, 12 Min from Ghansoli Station</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 8879984043</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@radheshyamroyal.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RERA Section */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-800/50 border border-yellow-700/25 rounded-xl px-5 py-4">

            {/* QR */}
            <a
              href="https://maharerait.mahaonline.gov.in/ProjectSummaryView/ProjectSummaryQRCodeView?id=Q2VydGlmaWNhdGVObz1QNTE3MDAwMDY5MTcmU2NhbnR5cGU9RXh0ZW5zaW9uQ2VydGlmaWNhdGVRUlNjYW4="
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-white p-1.5 rounded-lg ring-2 ring-yellow-600/40 hover:ring-yellow-400 transition"
            >
              <img src="/RERA-QR-code.jpeg" alt="MahaRERA QR Code" className="w-24 h-24 object-contain block" />
            </a>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">MahaRERA Registered</span>
              </div>
              <p className="text-white font-mono font-bold text-base tracking-widest">P51700006917</p>
              <p className="text-gray-500 text-xs mt-0.5">Maharashtra Real Estate Regulatory Authority</p>
            </div>

            {/* Button */}
            <a
              href="https://maharerait.mahaonline.gov.in/ProjectSummaryView/ProjectSummaryQRCodeView?id=Q2VydGlmaWNhdGVObz1QNTE3MDAwMDY5MTcmU2NhbnR5cGU9RXh0ZW5zaW9uQ2VydGlmaWNhdGVRUlNjYW4="
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 bg-yellow-600 hover:bg-yellow-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition whitespace-nowrap"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View on MahaRERA
            </a>

          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Radheshyam Royal. All rights reserved.</p>
          <p>MahaRERA Reg. No: <span className="text-gray-300 font-mono">P51700006917</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
