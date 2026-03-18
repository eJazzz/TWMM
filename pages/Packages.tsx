import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { PACKAGES, SERVICE_LIBRARY } from '../constants';
import { Check, ArrowRight, Zap, Target, Clock, Shield } from 'lucide-react';

const Packages: React.FC = () => {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  return (
    <div className={`py-12 md:py-20 animate-fade-in transition-colors duration-300 ${darkMode ? 'bg-[#0A192F] text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-[11px] font-black uppercase tracking-[0.4em] text-clinical-gold mb-4">Investment Levels</h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black mb-8 leading-tight tracking-tighter uppercase">
            Designed for <span className="text-clinical-gold">Growth.</span>
          </h2>
          <p className={`text-xl leading-relaxed font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Our packages are structured around the maturity of your clinic. Whether you're fixing a crisis or preparing to exit, we have a governance model that fits.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className={`p-10 rounded-2xl transition-all flex flex-col h-full border-t-8 ${
              darkMode 
                ? 'bg-slate-800/40 border-blue-600 hover:bg-slate-800/60' 
                : 'bg-white border-blue-600 shadow-xl shadow-slate-200/50 hover:shadow-2xl'
            }`}>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-clinical-gold mb-6">{pkg.level}</span>
              <h3 className="text-3xl font-black mb-6 tracking-tight uppercase leading-none">{pkg.name}</h3>
              
              <div className="mb-8">
                <span className={`text-[10px] font-black uppercase tracking-widest block mb-2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>BEST FOR</span>
                <p className="font-bold leading-snug uppercase text-sm tracking-tight">{pkg.bestFor}</p>
              </div>

              <div className={`mb-8 p-6 rounded-xl border-l-4 border-clinical-gold ${
                darkMode ? 'bg-white/5' : 'bg-slate-50'
              }`}>
                <span className="text-[10px] font-black uppercase text-clinical-gold block mb-2 tracking-widest">PRIMARY OUTCOME</span>
                <p className="font-bold italic text-sm leading-relaxed">"{pkg.outcome}"</p>
              </div>

              <div className={`mb-8 border-b pb-6 ${darkMode ? 'border-white/10' : 'border-slate-100'}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>TIMELINE</span>
                  <div className="flex items-center gap-2 font-black text-xs uppercase tracking-tight">
                    <Clock size={14} className="text-clinical-gold" /> {pkg.timeline}
                  </div>
                </div>
              </div>

              <div className="flex-grow mb-10">
                <h4 className="font-black text-[10px] uppercase tracking-widest mb-6 opacity-60">Core Deliverables:</h4>
                <ul className="space-y-4">
                  {pkg.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs font-bold uppercase tracking-tight">
                      <Check size={14} className="text-clinical-gold mt-0.5 mr-3 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="text-center mb-8">
                  <span className="text-3xl font-black text-clinical-gold tracking-tighter uppercase whitespace-nowrap">{pkg.pricing}</span>
                </div>
                <Link 
                  to="/contact" 
                  className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-black tracking-widest text-xs uppercase transition-all duration-300 shadow-xl ${
                    darkMode 
                      ? 'bg-blue-600 hover:bg-clinical-gold hover:text-blue-900 text-white' 
                      : 'bg-blue-600 text-white hover:bg-slate-900 translate-y-0 hover:-translate-y-1'
                  }`}
                >
                  Request Consult <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Service Library */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-clinical-gold mb-4">A/B/C CODING</h2>
            <h3 className="text-4xl font-sans font-black uppercase tracking-tight">The Service Library</h3>
            <p className={`mt-4 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Custom configurations available using our modular framework.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {SERVICE_LIBRARY.map((item, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border-l-[6px] flex gap-6 transition-all group ${
                darkMode 
                  ? 'bg-slate-800/40 border-slate-700 hover:border-clinical-gold' 
                  : 'bg-white border-slate-100 shadow-lg shadow-slate-200/40 hover:border-clinical-gold'
              }`}>
                <div className={`w-14 h-14 shrink-0 flex items-center justify-center font-sans font-black text-xl rounded-xl transition-all ${
                  darkMode ? 'bg-blue-600/20 text-blue-400 group-hover:bg-clinical-gold group-hover:text-blue-900' : 'bg-blue-600 text-white group-hover:bg-clinical-gold group-hover:text-blue-900'
                }`}>
                  {item.code}
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-clinical-gold tracking-[0.2em] mb-1">{item.category}</div>
                  <h4 className="font-black text-lg leading-tight uppercase tracking-tight mb-2">{item.title}</h4>
                  <p className={`text-xs font-medium leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`mt-20 text-center p-12 rounded-3xl border-2 border-dashed ${
            darkMode ? 'border-white/10' : 'border-slate-200'
          }`}>
            <p className={`mb-8 font-black uppercase tracking-widest text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Need a custom service configuration for your practice?
            </p>
            <Link to="/contact" className={`inline-flex items-center gap-3 px-12 py-5 font-black tracking-widest uppercase text-xs rounded-xl transition-all ${
              darkMode 
                ? 'bg-white text-blue-600 hover:bg-clinical-gold hover:text-blue-900' 
                : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}>
              Build a Custom Scope <Zap size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
