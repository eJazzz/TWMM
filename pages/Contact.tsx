
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-[80vh] flex flex-col items-center justify-center py-16 animate-fade-in">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-clinical-gold mb-4">Request Consultation</h1>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-clinical-deep mb-6">Let's talk about your clinic.</h2>
          <p className="text-xl text-clinical-slate leading-relaxed mb-10">
            Professional governance starts with a conversation. Fill out the form to request a preliminary operational scan.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-clinical-light rounded-sm flex items-center justify-center text-clinical-blue">
                <i className="fas fa-map-marker-alt text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-clinical-deep">Headquarters</h4>
                <p className="text-clinical-slate text-sm">Transworld Medical Management, LLC<br />Available Nationwide</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-clinical-light rounded-sm flex items-center justify-center text-clinical-blue">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-clinical-deep">General Inquiries</h4>
                <p className="text-clinical-slate text-sm">admin@twmedicalmgmt.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-sm shadow-2xl relative border-t-8 border-clinical-gold">
          {submitted ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-3xl"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Request Received</h3>
              <p className="text-clinical-slate">An advisor will reach out within 24 business hours to schedule your preliminary scan.</p>
            </div>
          ) : (
            <>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
                <h5 className="text-red-800 font-bold text-xs uppercase tracking-widest mb-1 flex items-center">
                  <i className="fas fa-exclamation-triangle mr-2"></i> Important: No PHI Warning
                </h5>
                <p className="text-red-700 text-xs">
                  Do not include Protected Health Information (PHI) in this form. This channel is for administrative inquiries only.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-clinical-slate mb-2">Full Name</label>
                    <input required type="text" className="w-full bg-clinical-light border-none p-4 text-sm focus:ring-2 focus:ring-clinical-gold outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-clinical-slate mb-2">Clinic Name</label>
                    <input required type="text" className="w-full bg-clinical-light border-none p-4 text-sm focus:ring-2 focus:ring-clinical-gold outline-none" placeholder="Advanced Medical LLC" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-clinical-slate mb-2">Professional Email</label>
                  <input required type="email" className="w-full bg-clinical-light border-none p-4 text-sm focus:ring-2 focus:ring-clinical-gold outline-none" placeholder="john@clinic.com" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-clinical-slate mb-2">Provider Count</label>
                  <select className="w-full bg-clinical-light border-none p-4 text-sm focus:ring-2 focus:ring-clinical-gold outline-none">
                    <option>1-5 Providers</option>
                    <option>6-10 Providers</option>
                    <option>11-20 Providers</option>
                    <option>20+ Providers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-clinical-slate mb-2">Primary Pain Point</label>
                  <textarea rows={4} className="w-full bg-clinical-light border-none p-4 text-sm focus:ring-2 focus:ring-clinical-gold outline-none resize-none" placeholder="E.g. High denial rates, HIPAA audit concerns, or EHR burnout..."></textarea>
                </div>

                <button type="submit" className="w-full bg-clinical-deep text-white py-4 font-bold text-lg hover:bg-clinical-blue transition-colors rounded-sm">
                  Request Consultation <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
