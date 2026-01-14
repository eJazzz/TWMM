
import React, { useState, useEffect } from 'react';

interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  fileUrl: string;
  type: 'pdf' | 'video' | 'alert';
  embedId?: string; // Added for YouTube embeds
}

const CORE_RESOURCES: Resource[] = [
  {
    id: 'hipaa-checklist',
    title: 'HIPAA 2025 Audit Readiness Checklist',
    category: 'Compliance',
    description: 'A 42-point administrative and technical safeguard assessment for outpatient clinics.',
    icon: 'fa-shield-halved',
    fileUrl: '#',
    type: 'pdf'
  },
  {
    id: 'rcm-integrity',
    title: 'Revenue Integrity Scan Guide',
    category: 'Finance',
    description: 'Learn how to identify the top 5 coding leaks that are costing your clinic 15%+ in lost revenue.',
    icon: 'fa-chart-pie',
    fileUrl: '#',
    type: 'pdf'
  },
  {
    id: 'clinic-sop-template',
    title: 'Front-Desk Master SOP Template',
    category: 'Operations',
    description: 'Standardize patient intake and eligibility verification to reduce front-end claim denials.',
    icon: 'fa-file-signature',
    fileUrl: '#',
    type: 'pdf'
  },
  {
    id: 'vendor-sla',
    title: 'The Vendor Governance Toolkit',
    category: 'Governance',
    description: 'Templates for managing IT, RCM, and EHR vendors to ensure SLA compliance.',
    icon: 'fa-handshake',
    fileUrl: '#',
    type: 'pdf'
  }
];

const BONUS_MATERIALS: Resource[] = [
  {
    id: 'hipaa-2026-alert',
    title: 'HIPAA 2026 Compliance Alert',
    category: 'Regulatory Alert',
    description: 'Essential 2026 Roadmap. Covers the $9B prescriptive Security Rule overhaul, the critical new 15-day breach reporting window, and 2024 encryption mandates.',
    icon: 'fa-triangle-exclamation',
    fileUrl: '\HIPAA_Poster_TWMM_202_V2.pdf',
    type: 'alert'
  },
  {
    id: 'video-workshop-1',
    title: 'AI Primer for Physicians',
    category: 'Video Guides',
    fileUrl: 'https://youtu.be/1DPoRWDCEBc?si=OS5yMeveOhtnSzyx', 
    embedId: '1DPoRWDCEBc',
    description: 'Whether you’re a busy clinician, a healthcare leader, or simply curious about how AI can make your life easier, this short video gives you a practical, jargon‑free overview of what’s possible today. In this quick guide, you’ll learn how modern AI tools can support you in your professional and personal life.',
    icon: 'fa-play-circle',
    type: 'video'
  }
  /*
  {
    id: 'bonus-cyber-guide',
    title: 'Employee Cyber-Hygiene Handbook',
    category: 'Manual',
    description: 'A printable guide for staff on preventing social engineering, phishing attacks, and credential harvesting.',
    icon: 'fa-user-lock',
    fileUrl: '#',
    type: 'pdf'
  },
  {
    id: 'video-workshop-2',
    title: 'Payer Negotiation Strategies',
    category: 'Video Workshop',
    description: 'Learn how to leverage clinical quality data to secure better reimbursement rates from commercial payers.',
    icon: 'fa-video',
    fileUrl: '#',
    type: 'video'
  } */
];

const Resources: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const registered = localStorage.getItem('twmm_resources_access');
    if (registered === 'true') {
      setIsRegistered(true);
    }
  }, []);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    formData.append('_subject', 'New Resource Vault Lead');

    try {
      const response = await fetch('https://formspree.io/f/mbdjbkvv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        localStorage.setItem('twmm_resources_access', 'true');
        setIsRegistered(true);
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeVideo = () => setActiveVideo(null);

  return (
    <div className="bg-clinical-light min-h-[90vh] py-16 animate-fade-in">
      {/* Video Modal Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-clinical-deep/95 backdrop-blur-md animate-fade-in">
          <button 
            onClick={closeVideo}
            className="absolute top-8 right-8 text-white text-3xl hover:text-clinical-gold transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="w-full max-w-5xl aspect-video shadow-2xl bg-black rounded-sm overflow-hidden">
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">
        {!isRegistered ? (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-sm font-bold uppercase tracking-[0.4em] text-clinical-gold mb-4">The Advisor Vault</h1>
              <h2 className="text-5xl font-serif font-bold text-clinical-deep mb-6">Expert Resources for Independent Clinics.</h2>
              <p className="text-xl text-clinical-slate max-w-2xl mx-auto">
                Access our library of clinical governance frameworks, SOP templates, and compliance checklists designed for 1-20 provider practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-0 shadow-2xl rounded-sm overflow-hidden border border-clinical-blue/10">
              {/* Value Side */}
              <div className="bg-clinical-deep p-12 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-serif font-bold mb-8">What's Inside the Vault:</h3>
                <ul className="space-y-6">
                  {[
                    { icon: 'fa-check-double', text: 'Step-by-step HIPAA Audit Evidence Packs' },
                    { icon: 'fa-chart-line', text: 'Revenue Integrity & Billing Checklists' },
                    { icon: 'fa-clipboard-list', text: 'Pre-built Operational SOPs' },
                    { icon: 'fa-video', text: 'Bonus Workshop Video Masterclasses' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-8 h-8 bg-clinical-gold/20 rounded-full flex items-center justify-center text-clinical-gold mr-4 flex-shrink-0">
                        <i className={`fas ${item.icon} text-sm`}></i>
                      </div>
                      <span className="text-clinical-accent font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-8 border-t border-white/10 italic text-clinical-accent text-sm">
                  "Our goal is to give clinic owners the same governance tools used by enterprise health systems."
                </div>
              </div>

              {/* Form Side */}
              <div className="bg-white p-12">
                <div className="mb-6 flex justify-center">
                  <img src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/transworld-logo.png" alt="Logo" className="h-10 opacity-50 grayscale" />
                </div>
                <h4 className="text-xl font-serif font-bold text-clinical-deep mb-2">Unlock Instant Access</h4>
                <p className="text-sm text-clinical-slate mb-8">Register once to unlock the entire resource library.</p>
                
                {error && (
                  <div className="mb-6 p-4 bg-red-50 text-red-700 text-xs rounded-sm border-l-4 border-red-500">
                    {error}
                  </div>
                )}

                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-clinical-slate mb-2">Full Name</label>
                    <input 
                      required 
                      name="name"
                      type="text" 
                      className="w-full bg-clinical-light border-none p-4 text-sm focus:ring-1 focus:ring-clinical-gold outline-none" 
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-clinical-slate mb-2">Clinic Name</label>
                    <input 
                      required 
                      name="clinic"
                      type="text" 
                      className="w-full bg-clinical-light border-none p-4 text-sm focus:ring-1 focus:ring-clinical-gold outline-none" 
                      placeholder="Coastal Medical Group"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-clinical-slate mb-2">Professional Email</label>
                    <input 
                      required 
                      name="email"
                      type="email" 
                      className="w-full bg-clinical-light border-none p-4 text-sm focus:ring-1 focus:ring-clinical-gold outline-none" 
                      placeholder="jane@clinic.com"
                    />
                  </div>
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full bg-clinical-deep text-white py-4 font-bold rounded-sm transition-all flex items-center justify-center ${isSubmitting ? 'opacity-50' : 'hover:bg-clinical-gold hover:text-clinical-deep'}`}
                    >
                      {isSubmitting ? <i className="fas fa-spinner fa-spin"></i> : 'Unlock Resources'}
                    </button>
                    <p className="text-[10px] text-center text-clinical-accent mt-4">
                      By registering, you agree to receive professional insights from TWMM. <br />No PHI should be shared.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h1 className="text-sm font-bold uppercase tracking-[0.4em] text-clinical-gold mb-4">Resource Vault Unlocked</h1>
                <h2 className="text-4xl font-serif font-bold text-clinical-deep mb-4">Core Governance Assets</h2>
                <p className="text-clinical-slate">Foundational frameworks for independent medical practice leadership.</p>
              </div>
              <button 
                onClick={() => {
                  localStorage.removeItem('twmm_resources_access');
                  setIsRegistered(false);
                }}
                className="text-xs font-bold text-clinical-accent hover:text-clinical-gold transition-colors uppercase tracking-widest"
              >
                Sign Out
              </button>
            </div>

            {/* Core Resources Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {CORE_RESOURCES.map((resource) => (
                <div key={resource.id} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all border-b-4 border-clinical-light hover:border-clinical-gold group flex flex-col h-full">
                  <div className="w-12 h-12 bg-clinical-light rounded-sm flex items-center justify-center text-clinical-blue mb-6 group-hover:bg-clinical-gold group-hover:text-clinical-deep transition-colors">
                    <i className={`fas ${resource.icon} text-xl`}></i>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-clinical-gold mb-2">{resource.category}</span>
                  <h3 className="text-xl font-serif font-bold text-clinical-deep mb-4 leading-tight">{resource.title}</h3>
                  <p className="text-sm text-clinical-slate mb-8 leading-relaxed flex-grow">
                    {resource.description}
                  </p>
                  <a 
                    href={resource.fileUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between font-bold text-xs uppercase tracking-widest text-clinical-deep border-t border-clinical-light pt-6 hover:text-clinical-gold transition-colors"
                  >
                    Download PDF <i className="fas fa-download ml-2"></i>
                  </a>
                </div>
              ))}
            </div>

            {/* Bonus Materials Section */}
            <div className="mb-12">
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-clinical-gold mb-4">Premium Bonus Content</h2>
              <h3 className="text-3xl font-serif font-bold text-clinical-deep mb-8">Video Workshops & Advanced Guides</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {BONUS_MATERIALS.map((bonus) => (
                  <div key={bonus.id} className="bg-white overflow-hidden rounded-sm shadow-sm hover:shadow-lg transition-all border border-clinical-light flex flex-col group">
                    {bonus.type === 'video' ? (
                      <button 
                        onClick={() => bonus.embedId && setActiveVideo(bonus.embedId)}
                        className="aspect-video bg-clinical-deep relative flex items-center justify-center overflow-hidden w-full"
                      >
                        {/* Video Placeholder Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-clinical-deep/80 to-transparent z-10"></div>
                        <i className="fas fa-play text-4xl text-white/40 group-hover:text-clinical-gold group-hover:scale-110 transition-all z-20"></i>
                        <div className="absolute bottom-4 left-4 z-20">
                          <span className="bg-clinical-gold text-clinical-deep text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-tighter">Watch Now</span>
                        </div>
                      </button>
                    ) : bonus.type === 'alert' ? (
                      <div className="aspect-video bg-orange-50 relative flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                        <i className="fas fa-triangle-exclamation text-5xl text-orange-500/30 group-hover:scale-110 group-hover:text-orange-500/50 transition-all"></i>
                        <div className="absolute top-4 right-4">
                          <span className="bg-red-600 text-white text-[9px] font-bold px-2 py-1 rounded-sm uppercase animate-pulse">Critical Update</span>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-video bg-clinical-light relative flex items-center justify-center">
                        <i className="fas fa-file-pdf text-4xl text-clinical-accent/30"></i>
                      </div>
                    )}
                    
                    <div className="p-8 flex-grow flex flex-col">
                      <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${bonus.type === 'alert' ? 'text-red-600' : 'text-clinical-accent'}`}>
                        {bonus.category}
                      </span>
                      <h4 className="text-xl font-serif font-bold text-clinical-deep mb-4 leading-tight">{bonus.title}</h4>
                      <p className="text-sm text-clinical-slate mb-8 leading-relaxed flex-grow">
                        {bonus.description}
                      </p>
                      
                      {bonus.type === 'video' ? (
                        <button 
                          onClick={() => bonus.embedId && setActiveVideo(bonus.embedId)}
                          className="flex items-center font-bold text-xs uppercase tracking-widest text-clinical-gold hover:text-clinical-deep transition-colors"
                        >
                          Watch Masterclass <i className="fas fa-play-circle ml-2"></i>
                        </button>
                      ) : bonus.type === 'alert' ? (
                        <a 
                          href={bonus.fileUrl} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center font-bold text-xs uppercase tracking-widest text-red-700 hover:text-clinical-deep transition-colors"
                        >
                          Download Alert Poster <i className="fas fa-download ml-2"></i>
                        </a>
                      ) : (
                        <a 
                          href={bonus.fileUrl} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center font-bold text-xs uppercase tracking-widest text-clinical-blue hover:text-clinical-gold transition-colors"
                        >
                          Access Document <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-24 bg-clinical-deep p-12 rounded-sm text-center relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Need help implementing these frameworks?</h3>
                <p className="text-clinical-accent mb-8 max-w-xl mx-auto">Our advisors can conduct a 1:1 gap analysis to tailor these resources to your specific clinic workflow.</p>
                <a href="#/contact" className="inline-block bg-clinical-gold text-clinical-deep px-10 py-4 font-bold rounded-sm hover:bg-white transition-all">
                  Request Implementation Support
                </a>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
