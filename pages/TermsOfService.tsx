
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-clinical-light py-20 animate-fade-in min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white p-12 shadow-sm border-t-8 border-clinical-deep">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-clinical-gold mb-4">Service Agreement</h1>
          <h2 className="text-4xl font-serif font-bold text-clinical-deep mb-8">Terms of Service</h2>
          
          <div className="prose prose-clinical max-w-none text-clinical-slate space-y-8">
            <section>
              <h3 className="text-xl font-bold text-clinical-deep mb-4">1. Acceptance of Terms</h3>
              <p className="leading-relaxed">
                By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-clinical-deep mb-4">2. Nature of Services</h3>
              <p className="leading-relaxed">
                Transworld Medical Management, LLC (TWMM) provides operational, compliance, and revenue cycle consulting services. <strong>TWMM does not provide medical, legal, or tax advice.</strong> All governance frameworks provided are intended for administrative improvement and regulatory adherence based on information provided by the client practice.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-clinical-deep mb-4">3. Professional Liability</h3>
              <p className="leading-relaxed">
                While TWMM strives for the highest accuracy in its assessments and remediation plans, we make no guarantees regarding the ultimate financial outcomes or audit results of any practice. Compliance is an ongoing operational habit that remains the responsibility of the practice owners and providers.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-clinical-deep mb-4">4. Intellectual Property</h3>
              <p className="leading-relaxed">
                All content, SOP templates, and governance frameworks displayed on this site or provided as part of our service library are the intellectual property of TWMM. Unauthorized reproduction or redistribution is strictly prohibited.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-clinical-deep mb-4">5. Governing Law</h3>
              <p className="leading-relaxed">
                Any claim relating to TWMM's website or services shall be governed by the laws of the State of Florida, without regard to its conflict of law provisions. Any legal action shall be brought in the courts of Hillsborough County, Florida (Tampa Bay Area).
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-clinical-deep mb-4">6. Modifications</h3>
              <p className="leading-relaxed">
                TWMM may revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Service.
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

export default TermsOfService;
