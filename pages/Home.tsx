
import React from 'react';
import { Link } from 'react-router-dom';
import { PROBLEM_GRID, HOW_WE_WORK_STEPS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] py-32 flex items-center bg-clinical-deep overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-clinical-blue transform skew-x-12 translate-x-1/4 opacity-20"></div>

        <div className="container mx-auto px-6 relative z-10 mt-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold uppercase tracking-widest text-clinical-gold-dark border border-clinical-gold/20 rounded-sm bg-black/10">
              STABILIZING INDEPENDENT PRACTICES
            </span>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6 leading-none tracking-tight">
              Clinical Governance <br className="hidden md:block" />
              For the Modern Era.
            </h1>
            <p className="text-xl text-clinical-slate mb-14 leading-relaxed font-light max-w-3xl">
              Independent practices shouldn't have to sacrifice administrative sanity for clinical excellence. We provide the <span className="font-bold text-white tracking-widest uppercase text-sm">Assess. Fix. Govern.</span> framework to secure your data and your future.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-white/5 bg-[#16274a]/80 backdrop-blur-sm p-8 rounded-sm hover:bg-[#1f3660]/90 transition-all duration-300 group shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-clinical-gold mb-3 block">Priority Campaign 01</span>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tighter">2026 Annual HIPAA Hub</h3>
                <p className="text-sm text-clinical-slate mb-8 leading-relaxed font-medium">Mandatory Training ($599 Base) & NPP Updates due Feb 16.</p>
                <Link to="/hipaa-hub" className="text-[11px] font-bold text-white uppercase tracking-[0.2em] flex items-center group-hover:text-clinical-gold transition-colors">
                  ENTER HUB <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform text-clinical-gold"></i>
                </Link>
              </div>

              <div className="border border-white/5 bg-[#16274a]/80 backdrop-blur-sm p-8 rounded-sm hover:bg-[#1f3660]/90 transition-all duration-300 group shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-clinical-gold mb-3 block">Priority Campaign 02</span>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tighter">M365 PHI Leak Audit</h3>
                <p className="text-sm text-clinical-slate mb-8 leading-relaxed font-medium">Secure your cloud infrastructure against unauthorized disclosure.</p>
                <Link to="/m365-audit" className="text-[11px] font-bold text-white uppercase tracking-[0.2em] flex items-center group-hover:text-clinical-gold transition-colors">
                  LEARN MORE... <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform text-clinical-gold"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white py-12 border-b border-clinical-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center opacity-70">
            <div className="w-full md:w-auto text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-clinical-slate font-bold uppercase tracking-widest text-sm">Specialized Expertise For:</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all">
                <i className="fas fa-users-medical text-2xl text-clinical-blue"></i>
                <span className="font-bold text-clinical-deep">1-20 Providers</span>
              </div>
              <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all">
                <i className="fas fa-clinic-medical text-2xl text-clinical-blue"></i>
                <span className="font-bold text-clinical-deep">Outpatient Clinics</span>
              </div>
              <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all">
                <i className="fas fa-file-invoice-dollar text-2xl text-clinical-blue"></i>
                <span className="font-bold text-clinical-deep">Revenue Cycle</span>
              </div>
              <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all">
                <i className="fas fa-lock text-2xl text-clinical-blue"></i>
                <span className="font-bold text-clinical-deep">HIPAA Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Grid */}
      <section className="py-24 bg-clinical-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-clinical-gold mb-4">Core Focus Areas</h2>
            <h3 className="text-4xl font-serif font-bold text-clinical-deep mb-6">Strategic Solutions for Modern Medicine</h3>
            <p className="text-lg text-clinical-slate">Healthcare is clinical. Management should be too. We tackle the systemic gaps that prevent high-performing clinics from scaling.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROBLEM_GRID.map((item, idx) => (
              <div key={idx} className="glass-card p-10 hover-lift rounded-sm">
                <div className="w-14 h-14 bg-clinical-light rounded-sm flex items-center justify-center mb-6">
                  <i className={`fas ${item.icon} text-2xl text-clinical-blue`}></i>
                </div>
                <h4 className="text-xl font-bold text-clinical-deep mb-4">{item.title}</h4>
                <p className="text-clinical-slate leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Preview */}
      <section className="py-24 bg-clinical-deep text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="max-w-xl mb-10 md:mb-0">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-clinical-gold mb-4">Methodology</h2>
              <h3 className="text-4xl font-serif font-bold mb-6">The 4-Stage Governance Model</h3>
              <p className="text-clinical-accent text-lg">We don't just provide advice. We implement frameworks that ensure your clinic remains compliant and profitable long after we leave.</p>
            </div>
            <Link to="/how-we-work" className="text-clinical-gold font-bold flex items-center hover:underline group">
              Explore Our Process <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {HOW_WE_WORK_STEPS.map((step, idx) => (
              <div key={idx} className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
                <span className="text-5xl font-serif font-bold text-white/10 block mb-6">{step.step}</span>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-clinical-accent text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-clinical-gold">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-clinical-deep mb-8">Ready to assess your clinic's performance?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-clinical-deep text-white px-10 py-4 rounded-sm font-bold hover:bg-clinical-blue transition-all">
              Request a Preliminary Audit
            </Link>
            <Link to="/what-we-fix" className="bg-white text-clinical-deep px-10 py-4 rounded-sm font-bold hover:bg-clinical-light transition-all border border-clinical-deep/10">
              Identify Pain Points
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
