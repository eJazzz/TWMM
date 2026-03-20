
import React, { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { PROBLEM_GRID, HOW_WE_WORK_STEPS } from '../constants';
import { 
  ArrowRight, Shield, Activity, Users, Lock, FileText, CheckCircle, 
  AlertTriangle, X, Calendar, ShieldAlert, FileWarning, Zap 
} from 'lucide-react';

const Home: React.FC = () => {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const [showUrgencyModal, setShowUrgencyModal] = useState(false);

  useEffect(() => {
    // Show modal after a short delay to simulate "loading" popup
    const timer = setTimeout(() => {
      const hasSeenModal = sessionStorage.getItem('hasSeenUrgencyModal');
      if (!hasSeenModal) {
        setShowUrgencyModal(true);
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowUrgencyModal(false);
    sessionStorage.setItem('hasSeenUrgencyModal', 'true');
  };

  return (
    <div className={`animate-fade-in transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
      {/* Urgency Modal */}
      {showUrgencyModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10 animate-fade-in">
          <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            onClick={closeModal}
          ></div>
          
          <div className={`relative w-full max-w-2xl max-h-full overflow-y-auto rounded-3xl border-2 shadow-2xl transition-all duration-500 transform scale-100 ${
            darkMode 
              ? 'bg-[#0A192F] border-red-500/30' 
              : 'bg-white border-red-200'
          }`}>
            <button 
              onClick={closeModal}
              className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${
                darkMode ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-100 text-slate-500'
              }`}
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center animate-pulse shadow-lg shadow-red-600/20">
                  <AlertTriangle size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-red-600 mb-1">Mandatory Alert</h2>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none">2026 <span className="text-clinical-gold text-clinical-gold-dark italic">Mandates</span> Due.</h3>
                </div>
              </div>

              <p className={`text-lg mb-10 font-bold leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                CMS and OCR enforcement cycles for 2026 have been activated. The following items require immediate clinical oversight:
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { 
                    title: 'Annual HIPAA Training', 
                    desc: 'Mandatory 2026 cycle for all staff. Audit enforcement active.', 
                    link: '/hipaa-hub',
                    icon: Users
                  },
                  { 
                    title: '2026 Security Risk Assessment', 
                    desc: 'Annual SRA update required for MIPS/VBC and compliance.', 
                    link: '/#governance',
                    icon: ShieldAlert
                  },
                  { 
                    title: 'NPP Redistribution (2026)', 
                    desc: 'Updated Notice of Privacy Practices must be implemented by Feb 16.', 
                    link: '/hipaa-hub',
                    icon: FileWarning
                  },
                  { 
                    title: 'M365 PHI Leak Audit', 
                    desc: 'Critical security audit to prevent accidental data disclosure.', 
                    link: '/m365-audit',
                    icon: Lock
                  },
                  { 
                    title: 'P&P Updates (Reproductive Health)', 
                    desc: 'New federal privacy rules for reproductive health info are now in effect.', 
                    link: '/contact',
                    icon: FileText
                  }
                ].map((item, i) => (
                  <Link 
                    key={i} 
                    to={item.link} 
                    onClick={closeModal}
                    className={`flex items-start gap-4 p-5 rounded-2xl border transition-all hover:translate-x-1 ${
                      darkMode 
                        ? 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-blue-500/30' 
                        : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-blue-600/30 shadow-sm'
                    }`}
                  >
                    <div className={`mt-1 p-2 rounded-lg ${darkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-600/10 text-blue-600'}`}>
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-tight mb-1">{item.title}</h4>
                      <p className={`text-xs font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto opacity-40 shrink-0" />
                  </Link>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/hipaa-hub" 
                  onClick={closeModal}
                  className="flex-1 bg-red-600 text-white px-8 py-5 rounded-xl font-black uppercase text-xs tracking-[0.2em] hover:bg-red-700 transition-all text-center shadow-xl shadow-red-600/20"
                >
                  Apply 2026 Roadmap
                </Link>
                <button 
                  onClick={closeModal}
                  className={`flex-1 px-8 py-5 rounded-xl font-black uppercase text-xs tracking-[0.2em] border transition-all ${
                    darkMode ? 'border-white/10 hover:bg-white/5' : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Dismiss Warning
                </button>
              </div>
              
              <p className={`mt-8 text-[10px] text-center font-bold uppercase tracking-[0.3em] ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                Verified Compliance Verification Cycle: 2026-Q1
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className={`relative min-h-[80vh] py-12 md:py-20 flex items-center overflow-hidden ${darkMode ? 'bg-[#0A192F]' : 'bg-slate-50'}`}>
        {/* Background Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className={`absolute top-0 left-[10%] w-[1000px] h-[600px] rounded-full blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2 ${darkMode ? 'bg-blue-500' : 'bg-blue-400'}`}></div>
          <div className={`absolute bottom-0 right-[5%] w-[800px] h-[500px] rounded-full blur-[120px] opacity-15 translate-x-1/2 translate-y-1/2 ${darkMode ? 'bg-violet-500' : 'bg-violet-400'}`}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            {/* Left Column: Content */}
            <div className="max-w-3xl">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-[11px] font-black uppercase tracking-[0.2em] border rounded-full backdrop-blur-sm ${
                darkMode ? 'text-blue-400 border-blue-400/20 bg-blue-400/5' : 'text-blue-600 border-blue-600/20 bg-blue-600/5'
              }`}>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Clinic Operations • IT • Compliance • RCM
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-black mb-6 leading-[1.05] tracking-tight">
                Assess. <span className="text-clinical-gold">Fix.</span> Govern.
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl opacity-90 font-bold block mt-2 italic">Make your clinic audit-ready.</span>
              </h1>
              
              <p className={`text-lg md:text-xl mb-10 leading-relaxed max-w-2xl font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                We help small and mid-sized practices identify operational bottlenecks and implement the framework to secure your data and your future.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/20 transition-all active:scale-95 flex items-center gap-2">
                  Request Consultation <ArrowRight size={18} />
                </Link>
                <Link to="/packages" className={`px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider border transition-all active:scale-95 ${
                  darkMode ? 'border-white/10 hover:bg-white/5 text-white' : 'border-slate-200 hover:bg-slate-50 text-slate-900 shadow-sm'
                }`}>
                  Browse Services
                </Link>
              </div>

              <div className="flex flex-wrap gap-4">
                {['Based in Tampa Bay, FL', 'Serving 1-20 Providers'].map((tag, i) => (
                  <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold border ${
                    darkMode ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-white border-slate-200 text-slate-600 shadow-sm'
                  }`}>
                    <CheckCircle size={14} className="text-blue-600" /> {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Stats/Mini Panels */}
            <div className="grid gap-4">
              {[
                { label: 'Priority Campaign 01', title: '2026 HIPAA Hub', link: '/hipaa-hub', icon: Shield, desc: 'Mandatory Training & NPP Updates due Feb 16.' },
                { label: 'Priority Campaign 02', title: 'M365 Leak Audit', link: '/m365-audit', icon: Lock, desc: 'Secure cloud infrastructure against disclosure.' },
                { label: 'Core Methodology', title: 'The AFG Model', link: '/how-we-work', icon: Activity, desc: 'Assess. Fix. Govern. - Proven implementation.' }
              ].map((card, i) => (
                <Link 
                  key={i} 
                  to={card.link}
                  className={`group p-6 rounded-2xl border transition-all hover:-translate-y-1 ${
                    darkMode 
                      ? 'bg-slate-800/40 border-white/5 hover:bg-slate-800/60 hover:border-blue-400/30' 
                      : 'bg-white border-slate-200 hover:border-blue-600/30 shadow-xl shadow-slate-200/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-900/40 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                      <card.icon size={24} />
                    </div>
                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 block ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {card.label}
                      </span>
                      <h3 className="text-xl font-black mb-1 tracking-tight group-hover:text-blue-500 transition-colors uppercase">{card.title}</h3>
                      <p className={`text-sm leading-snug font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{card.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className={`py-8 border-b border-t ${darkMode ? 'bg-slate-900 border-white/5' : 'bg-white border-slate-100'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-90">
            <h3 className={`text-[11px] font-black uppercase tracking-widest ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              Specialized Expertise For:
            </h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {[
                { label: '1-20 Providers', icon: Users },
                { label: 'Outpatient Clinics', icon: Activity },
                { label: 'Revenue Cycle', icon: FileText },
                { label: 'HIPAA Compliance', icon: Shield }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 group cursor-default">
                  <item.icon size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="font-extrabold text-xs uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Grid */}
      <section id="governance" className={`py-16 ${darkMode ? 'bg-[#0A192F]' : 'bg-slate-50/50'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className={`text-[11px] font-black uppercase tracking-[0.3em] mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Core Focus Areas</h2>
            <h3 className="text-4xl font-sans font-black mb-4 tracking-tighter uppercase">Strategic Solutions</h3>
            <p className={`text-base font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Healthcare is clinical. Management should be too. We tackle the systemic gaps that prevent high-performing clinics from scaling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PROBLEM_GRID.map((item, idx) => (
              <div key={idx} className={`p-8 rounded-2xl border transition-all hover:shadow-2xl ${
                darkMode 
                  ? 'bg-slate-800/40 border-white/5 hover:border-blue-400/20 shadow-none' 
                  : 'bg-white border-slate-200 hover:border-blue-600/20 shadow-lg shadow-slate-200/40'
              }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  darkMode ? 'bg-blue-400/10 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <i className={`fas ${item.icon} text-2xl`}></i>
                </div>
                <h4 className="text-lg font-black mb-2 uppercase tracking-tight">{item.title}</h4>
                <p className={`text-sm leading-relaxed font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter uppercase">Ready to assess your clinic's performance?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-black uppercase text-sm tracking-widest hover:bg-slate-50 hover:shadow-2xl transition-all active:scale-95">
              Request Audit
            </Link>
            <Link to="/what-we-fix" className="bg-blue-700 text-white px-10 py-4 rounded-xl font-black uppercase text-sm tracking-widest border border-blue-500 hover:bg-blue-800 transition-all active:scale-95">
              Identify Pain Points
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
