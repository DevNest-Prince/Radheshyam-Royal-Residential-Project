import React from 'react';
import SEOHead from '../components/SEOHead';
import Contact from '../components/Contact';

function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEOHead
        title="Contact Us — Book a Site Visit"
        description="Get in touch with Radheshyam Royal. Book a free site visit for 1 & 2 BHK flats in Upper Ghansoli, Navi Mumbai. Call +91 8879984043."
        keywords="contact Radheshyam Royal, book site visit Ghansoli flat, enquiry 1 BHK 2 BHK Navi Mumbai"
        canonical="/contact"
      />
      <Contact />
    </div>
  );
}

export default ContactPage;
