import React from 'react';
import SEOHead from '../components/SEOHead';

function TermsPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <SEOHead
        title="Terms & Conditions"
        description="Read the Terms and Conditions for Radheshyam Royal. Understand the terms of use for our website and real estate services."
        canonical="/terms"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-yellow-700 font-semibold mb-2">Legal</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Terms &amp; Conditions</h1>
          <p className="text-gray-500 text-sm">Last updated: February 2026</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-600 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the Radheshyam Royal website (<strong>www.radheshyamroyal.com</strong>), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use this website.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. About the Project</h2>
            <p>Radheshyam Royal is a residential real estate project located on Kalyan-Shilphata Highway, Upper Ghansoli, Maharashtra. The project is registered with the Maharashtra Real Estate Regulatory Authority (MahaRERA) under registration number <strong>P51700006917</strong>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. Website Use</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>The content on this website is for general informational purposes only.</li>
              <li>All prices, configurations, and specifications mentioned are indicative and subject to change without prior notice.</li>
              <li>Images, renders, and floor plans displayed are representative and may not depict actual finished product.</li>
              <li>You may not reproduce, distribute, or commercially exploit any content from this website without written permission.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Enquiries & Contact</h2>
            <p>Submitting an enquiry form or contacting us via phone/WhatsApp does not constitute a booking or reservation. All bookings are subject to a formal agreement and applicable terms as per Maharashtra RERA guidelines.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Disclaimer</h2>
            <p>The information on this website is provided in good faith. Radheshyam Royal and its representatives are not liable for any loss or damage arising from reliance on this information. Prospective buyers are advised to verify all details independently and consult legal/financial advisors before making any purchase decision.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Third-Party Links</h2>
            <p>This website may contain links to third-party websites (e.g., MahaRERA portal, Google Maps). We are not responsible for the content or privacy practices of those websites.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in Mumbai, Maharashtra.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">8. Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">9. Contact Us</h2>
            <p>For any queries regarding these terms, please contact us at:</p>
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

export default TermsPage;
