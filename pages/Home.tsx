
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROBLEM_GRID, HOW_WE_WORK_STEPS } from '../constants';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'standard',
      badge: 'Medical Management & Governance',
      title: 'Assess. <span class="text-clinical-gold">Fix.</span> Govern.',
      desc: 'We provide clinical-grade operations and HIPAA governance for clinics with 1–20 providers. Achieve audit readiness and peak revenue performance.',
      ctaPrimary: { text: 'Request Consult', link: '/contact' },
      ctaSecondary: { text: 'Our Methodology', link: '/how-we-work' },
      bgClass: 'bg-clinical-deep',
      rightCard: {
        title: '2026 REGULATORY WATCH',
        subtitle: 'The Security Rule Overhaul',
        body: 'New 15-day breach reporting windows and prescriptive encryption mandates start soon. Is your 2026 Roadmap ready?',
        btnText: 'View 2026 Roadmap',
        btnLink: '/resources',
        accent: 'border-clinical-gold',
        icon: 'fa-shield-halved'
      }
    },
    {
      type: 'urgent',
      badge: '2025 COMPLIANCE DEADLINE',
      title: 'Mandatory <span class="text-clinical-gold">SRA & Training</span>.',
      desc: 'Annual Security Risk Assessments and Staff Training are not optional. We implement the full framework in under 30 days.',
      ctaPrimary: { text: 'Lock In My Audit', link: '/contact' },
      ctaSecondary: { text: 'View Packages', link: '/packages' },
      bgClass: 'bg-[#0a192f]',
      rightCard: {
        title: 'URGENT BUNDLE',
        subtitle: 'Annual Compliance Pack',
        body: 'Includes mandatory SRA, Staff Certifications, and Policy Manual updates. Flat-fee implementation available now.',
        btnText: 'Secure My Bundle',
        btnLink: '/packages#security-risk-assessment',
        accent: 'border-red-500',
        icon: 'fa-certificate'
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="animate-fade-in">
      {/* Hero Slider Section */}
      <section className="relative min-h-[90vh] lg:h-[90vh] flex items-center overflow-hidden transition-colors duration-1000">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full flex items-center transition-opacity duration-1000 z-10 ${index === currentSlide ? 'opacity-100 visible' : 'opacity-0 invisible'} ${slide.bgClass}`}
          >
            {/* Abstract background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-clinical-blue transform skew-x-12 translate-x-1/4 opacity-10"></div>
            {slide.type === 'urgent' && (
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent pointer-events-none"></div>
            )}
            
            <div className="container mx-auto px-6 relative z-10 pt-20 lg:pt-0">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Left Side Content */}
                <div className="lg:col-span-7">
                  <span className={`inline-block px-4 py-1 mb-6 text-xs font-bold uppercase tracking-widest rounded-full border ${slide.type === 'urgent' ? 'text-red-400 border-red-400/30 animate-pulse' : 'text-clinical-gold border-clinical-gold/30'}`}>
                    {slide.badge}
                  </span>
                  <h1 
                    className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  ></h1>
                  <p className="text-xl md:text-2xl text-clinical-accent mb-10 leading-relaxed font-light max-w-2xl">
                    {slide.desc}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link to={slide.ctaPrimary.link} className="bg-white text-clinical-deep px-8 py-4 rounded-sm font-bold text-lg hover:bg-clinical-gold transition-all text-center shadow-lg border-b-4 border-clinical-gold">
                      {slide.ctaPrimary.text}
                    </Link>
                    <Link to={slide.ctaSecondary.link} className="border-2 border-white/20 text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white/10 transition-all text-center">
                      {slide.ctaSecondary.text}
                    </Link>
                  </div>
                </div>

                {/* Right Side Alert Card */}
                <div className="lg:col-span-5">
                  <div className={`glass-card p-8 md:p-10 rounded-sm border-t-8 ${slide.rightCard.accent} shadow-2xl transform lg:translate-x-4 animate-float`}>
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-sm flex items-center justify-center text-2xl mr-4 ${slide.type === 'urgent' ? 'bg-red-500/10 text-red-500' : 'bg-clinical-gold/10 text-clinical-gold'}`}>
                        <i className={`fas ${slide.rightCard.icon}`}></i>
                      </div>
                      <div>
                        <h4 className="text-clinical-deep font-black text-xs uppercase tracking-widest mb-1">{slide.rightCard.title}</h4>
                        <p className="text-clinical-slate font-serif font-bold text-lg">{slide.rightCard.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-clinical-slate text-sm leading-relaxed mb-8">
                      {slide.rightCard.body}
                    </p>
                    <Link 
                      to={slide.rightCard.btnLink}
                      className={`block w-full text-center py-4 rounded-sm font-bold text-sm uppercase tracking-widest transition-all ${slide.type === 'urgent' ? 'bg-clinical-deep text-white hover:bg-red-600' : 'bg-clinical-gold text-clinical-deep hover:bg-clinical-deep hover:text-white'}`}
                    >
                      {slide.rightCard.btnText} <i className="fas fa-arrow-right ml-2 text-[10px]"></i>
                    </Link>
                    <div className="mt-6 flex items-center justify-center space-x-4 opacity-40 text-[9px] font-bold uppercase tracking-tighter text-clinical-slate">
                      <span><i className="fas fa-clock mr-1"></i> Immediate Implementation</span>
                      <span className="w-1 h-1 bg-clinical-slate rounded-full"></span>
                      <span><i className="fas fa-shield mr-1"></i> Audit-Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${i === currentSlide ? 'w-12 bg-clinical-gold' : 'w-3 bg-white/20 hover:bg-white/40'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white py-12 border-b border-clinical-light relative z-20">
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
