
import React from 'react';
import { Link } from 'react-router-dom';
import { PACKAGES, SERVICE_LIBRARY } from '../constants';

const Packages: React.FC = () => {
  return (
    <div className="bg-clinical-light py-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-sm font-bold uppercase tracking-[0.4em] text-clinical-gold mb-4">Investment Levels</h1>
          <h2 className="text-5xl font-serif font-bold text-clinical-deep mb-8">Designed for Growth.</h2>
          <p className="text-xl text-clinical-slate leading-relaxed font-light">
            Our packages are structured around the maturity of your clinic. Whether you're fixing a crisis or preparing to exit, we have a governance model that fits.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid lg:grid-cols-3 gap-10 mb-32">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="bg-white p-12 rounded-sm shadow-sm hover:shadow-2xl transition-all border-t-8 border-clinical-deep flex flex-col h-full">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-clinical-gold mb-6">{pkg.level}</span>
              <h3 className="text-4xl font-serif font-bold text-clinical-deep mb-4">{pkg.name}</h3>
              
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase text-clinical-accent block mb-2 tracking-widest">BEST FOR</span>
                <p className="text-clinical-deep font-semibold leading-snug">{pkg.bestFor}</p>
              </div>

              <div className="mb-8 p-6 bg-clinical-light border-l-2 border-clinical-gold rounded-sm">
                <span className="text-[10px] font-bold uppercase text-clinical-gold block mb-2 tracking-widest">PRIMARY OUTCOME</span>
                <p className="text-clinical-deep font-medium italic text-sm">"{pkg.outcome}"</p>
              </div>

              <div className="mb-8 border-b border-clinical-light pb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold uppercase text-clinical-accent tracking-widest">TIMELINE</span>
                  <span className="text-sm font-bold text-clinical-deep">{pkg.timeline}</span>
                </div>
              </div>

              <div className="flex-grow mb-10">
                <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-clinical-deep">Core Deliverables:</h4>
                <ul className="space-y-4">
                  {pkg.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-clinical-slate">
                      <i className="fas fa-check text-clinical-gold mt-1 mr-4"></i>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="text-center mb-6">
                  <span className="text-2xl font-serif font-bold text-clinical-deep">{pkg.pricing}</span>
                </div>
                <Link 
                  to="/contact" 
                  className="block w-full bg-clinical-deep text-white text-center py-5 rounded-sm font-bold tracking-widest text-sm hover:bg-clinical-gold hover:text-clinical-deep transition-all duration-300 uppercase shadow-md"
                >
                  Request Consult
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Service Library */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-clinical-gold mb-4">A/B/C CODING</h2>
            <h3 className="text-4xl font-serif font-bold text-clinical-deep">The Service Library</h3>
            <p className="text-clinical-slate mt-4">Custom configurations available using our modular framework.</p>
          </div>

          <div className="space-y-6">
            {SERVICE_LIBRARY.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-sm border-l-4 flex flex-col md:flex-row md:items-center gap-8 border-clinical-accent hover:border-clinical-gold shadow-sm transition-colors group">
                <div className="flex items-center space-x-6 md:w-1/3">
                  <div className="w-16 h-16 bg-clinical-deep text-white flex items-center justify-center font-serif font-bold text-2xl rounded-sm transition-colors group-hover:bg-clinical-gold group-hover:text-clinical-deep">
                    {item.code}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-clinical-gold tracking-[0.2em] mb-1">{item.category}</div>
                    <h4 className="font-bold text-clinical-deep text-lg leading-tight">{item.title}</h4>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-clinical-slate text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-clinical-slate mb-8 font-light italic">Need a custom service configuration for your practice?</p>
            <Link to="/contact" className="inline-block border-2 border-clinical-deep text-clinical-deep px-12 py-4 font-bold tracking-widest uppercase text-sm hover:bg-clinical-deep hover:text-white transition-all">
              Build a Custom Scope
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
