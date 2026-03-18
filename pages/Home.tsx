
import React from 'react';
import { Link } from 'react-router-dom';
import { PROBLEM_GRID, HOW_WE_WORK_STEPS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] py-16 flex items-center bg-slate-50 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-[15%] w-[1200px] h-[700px] bg-blue-600/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-[10%] right-[10%] w-[900px] h-[600px] bg-violet-600/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-[-10%] right-[30%] w-[800px] h-[500px] bg-cyan-600/10 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-4">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-[11px] font-bold uppercase tracking-widest text-slate-600 border border-blue-600/20 rounded-full bg-blue-50/50 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Clinic Operations • IT & Security • RCM • VBC/MIPS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-slate-900 mb-5 leading-tight tracking-tight">
              Clinical Governance <br className="hidden md:block" />
              For the Modern Era.
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-3xl">
              We help small and mid-sized practices identify operational gaps and provide the <span className="font-bold text-slate-900 uppercase text-sm tracking-wide">Assess. Fix. Govern.</span> framework to secure your data and your future.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-slate-200 bg-white/90 backdrop-blur-md p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-slate-200/50">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 block">Priority Campaign 01</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">2026 Annual HIPAA Hub</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed font-medium">Mandatory Training ($599 Base) & NPP Updates due Feb 16.</p>
                <Link to="/hipaa-hub" className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.2em] flex items-center group-hover:text-violet-600 transition-colors">
                  ENTER HUB <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>

              <div className="border border-slate-200 bg-white/90 backdrop-blur-md p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-slate-200/50">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 block">Priority Campaign 02</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">M365 PHI Leak Audit</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed font-medium">Secure your cloud infrastructure against unauthorized disclosure.</p>
                <Link to="/m365-audit" className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.2em] flex items-center group-hover:text-violet-600 transition-colors">
                  LEARN MORE <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white py-8 border-b border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center opacity-80">
            <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-slate-500 font-bold uppercase tracking-widest text-xs">Specialized Expertise For:</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                <i className="fas fa-users-medical text-xl text-blue-600"></i>
                <span className="font-bold text-slate-700 text-sm">1-20 Providers</span>
              </div>
              <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                <i className="fas fa-clinic-medical text-xl text-blue-600"></i>
                <span className="font-bold text-slate-700 text-sm">Outpatient Clinics</span>
              </div>
              <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                <i className="fas fa-file-invoice-dollar text-xl text-blue-600"></i>
                <span className="font-bold text-slate-700 text-sm">Revenue Cycle</span>
              </div>
              <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                <i className="fas fa-lock text-xl text-blue-600"></i>
                <span className="font-bold text-slate-700 text-sm">HIPAA Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Grid */}
      <section className="py-16 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-3">Core Focus Areas</h2>
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Strategic Solutions</h3>
            <p className="text-base text-slate-600">Healthcare is clinical. Management should be too. We tackle the systemic gaps that prevent high-performing clinics from scaling.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {PROBLEM_GRID.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <i className={`fas ${item.icon} text-xl text-blue-600`}></i>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Preview */}
      <section className="py-16 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <div className="max-w-xl mb-6 md:mb-0">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-2">Methodology</h2>
              <h3 className="text-3xl font-serif font-bold mb-3 text-white">The 4-Stage Governance Model</h3>
              <p className="text-blue-100/70 text-base">We don't just provide advice. We implement frameworks that ensure your clinic remains compliant and profitable.</p>
            </div>
            <Link to="/how-we-work" className="text-blue-400 text-sm font-bold flex items-center hover:text-white group transition-colors">
              Explore Process <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {HOW_WE_WORK_STEPS.map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                <span className="text-4xl font-serif font-bold text-white/20 block mb-4">{step.step}</span>
                <h4 className="text-lg font-bold mb-2 text-white">{step.title}</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8">Ready to assess your clinic's performance?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 hover:shadow-lg transition-all border border-transparent">
              Request Preliminary Audit
            </Link>
            <Link to="/what-we-fix" className="bg-blue-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all border border-blue-500 hover:border-blue-400">
              Identify Pain Points
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
