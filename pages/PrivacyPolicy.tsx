
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-clinical-light py-20 animate-fade-in min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white p-12 shadow-sm border-t-8 border-clinical-deep">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-clinical-gold mb-4">Legal Framework</h1>
          <h2 className="text-4xl font-serif font-bold text-clinical-deep mb-8">Privacy Policy</h2>
          
          <div className="prose prose-clinical max-w-none text-clinical-slate space-y-8">
            <section>
              <h3 className="text-xl font-bold text-clinical-deep mb-4">1. Commitment to Privacy</h3>
              <p className="leading-relaxed">
                Transworld Medical Management, LLC ("TWMM", "we", "us") is committed to protecting the privacy of our website visitors and clients. This Privacy Policy outlines how we collect, use, and safeguard the information provided through this website.
              </p>
            </section>

            <section className="bg-red-50 p-6 border-l-4 border-red-500 rounded-sm">
              <h3 className="text-lg font-bold text-red-800 mb-2 uppercase tracking-wide">2. Critical: No Protected Health Information (PHI)</h3>
              <p className="text-red-700 text-sm italic">
                TWMM does NOT provide clinical care to patients. Our services are strictly for clinic administration and governance. <strong>Do not submit Protected Health Information (PHI) through our contact forms.</strong> Any PHI inadvertently received will be immediately destroyed in accordance with HIPAA data destruction standards.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-clinical-deep mb-4">3. Information Collection</h3>
              <p className="leading-relaxed mb-4">
                We collect information that you voluntarily provide when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Submit an inquiry through our contact form.</li>
                <li>Request a preliminary audit or consultation.</li>
                <li>Subscribe to our newsletters or updates.</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                This may include your name, clinical entity name, professional email address, and general administrative pain points.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-clinical-deep mb-4">4. Use of Information</h3>
              <p className="leading-relaxed">
                Information collected is used solely for the purpose of communicating with you regarding our services, assessing your practice's eligibility for our consulting programs, and improving our service offerings. We do not sell or lease your information to third-party marketing entities.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-clinical-deep mb-4">5. Data Security</h3>
              <p className="leading-relaxed">
                We implement industry-standard technical safeguards to protect information submitted via our website. However, no internet transmission is 100% secure. By using this site, you acknowledge that you provide information at your own risk.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-clinical-deep mb-4">6. Contact Information</h3>
              <p className="leading-relaxed">
                For questions regarding this policy, please contact us at:<br />
                <span className="font-bold">Transworld Medical Management, LLC</span><br />
                admin@twmedicalmgmt.com
              </p>
            </section>
          </div>
          
          <div className="mt-12 pt-8 border-t border-clinical-light text-xs text-clinical-accent italic text-center">
            Last Updated: February 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
