
import React from 'react';
import { Link } from 'react-router-dom';
import { PROBLEM_GRID, HOW_WE_WORK_STEPS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center bg-clinical-deep overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-clinical-blue transform skew-x-12 translate-x-1/4 opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 mb-6 text-xs font-bold uppercase tracking-widest text-clinical-gold border border-clinical-gold/30 rounded-full">
              Medical Management & Governance
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Assess. <span className="text-clinical-gold">Fix.</span> Govern.
            </h1>
            <p className="text-xl md:text-2xl text-clinical-accent mb-10 leading-relaxed font-light">
              We provide clinical-grade operations and HIPAA governance for clinics with 1–20 providers. Achieve audit readiness and peak revenue performance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="bg-clinical-gold text-clinical-deep px-8 py-4 rounded-sm font-bold text-lg hover:bg-white transition-all text-center">
                Request Consult
              </Link>
              <Link to="/packages" className="border-2 border-white/20 text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white/10 transition-all text-center">
                View Packages
              </Link>
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
