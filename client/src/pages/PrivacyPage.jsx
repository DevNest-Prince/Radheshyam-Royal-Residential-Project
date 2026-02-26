import React from 'react';
import SEOHead from '../components/SEOHead';

function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <SEOHead
        title="Privacy Policy"
        description="Read the Privacy Policy for Radheshyam Royal. Learn how we collect, use, and protect your personal information."
        canonical="/privacy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-yellow-700 font-semibold mb-2">Legal</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: February 2026</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-600 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>Radheshyam Royal ("we", "our", "us") is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights regarding that data when you visit <strong>www.radheshyamroyal.com</strong> or contact us.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-2">We may collect the following personal information when you submit an enquiry or contact us:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full name</li>
              <li>Phone number / WhatsApp number</li>
              <li>Email address</li>
              <li>BHK preference and budget range</li>
              <li>Any message or query you submit</li>
            </ul>
            <p className="mt-3">We also collect non-personal data such as browser type, pages visited, and device information through standard web analytics tools.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To respond to your enquiries and schedule site visits</li>
              <li>To send you project updates, pricing, and relevant offers</li>
              <li>To improve our website and customer experience</li>
              <li>To comply with legal or regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal information to third parties. Your data may be shared only with our authorized sales team or legal advisors strictly for the purpose of fulfilling your request.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Cookies</h2>
            <p>Our website may use cookies to enhance user experience and analyse traffic. You can disable cookies in your browser settings, though some features of the website may not function properly as a result.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Data Security</h2>
            <p>We take reasonable technical and organisational measures to protect your personal data from unauthorized access, loss, or misuse. However, no method of internet transmission is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact us at <a href="mailto:info@radheshyamroyal.com" className="text-yellow-700 hover:underline">info@radheshyamroyal.com</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">8. Third-Party Services</h2>
            <p>Our website uses Google Maps for location display. Please refer to Google's Privacy Policy for information on how they handle data.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Your continued use of the website constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">10. Contact Us</h2>
            <p>For any privacy-related concerns, please reach us at:</p>
            <div className="mt-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="font-semibold text-gray-800">Radheshyam Royal</p>
              <p>Kalyan-Shilphata Highway, Upper Ghansoli, Maharashtra</p>
              <p>Phone: <a href="tel:+918879984043" className="text-yellow-700 hover:underline">+91 8879984043</a></p>
              <p>Email: <a href="mailto:info@radheshyamroyal.com" className="text-yellow-700 hover:underline">info@radheshyamroyal.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default PrivacyPage;
