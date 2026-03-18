
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC<{ darkMode?: boolean }> = ({ darkMode }) => {
  return (
    <footer className={`transition-colors duration-300 py-12 ${darkMode ? 'bg-slate-900 border-t border-white/5' : 'bg-white border-t border-slate-200'}`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <img src="/twmm-logo.png" alt="TWMM Logo" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" />
              <span className={`font-serif font-bold text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>Transworld Medical Management</span>
            </div>
            <p className={`max-w-sm mb-6 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Strategic operations, HIPAA compliance, and revenue governance for the modern outpatient clinic. Serving 1-20 provider practices nationwide.
            </p>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="text-blue-600 hover:text-blue-500 transition-colors"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-blue-600 hover:text-blue-500 transition-colors"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className={`font-black mb-6 text-xs uppercase tracking-[0.2em] ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Quick Links</h4>
            <ul className={`space-y-4 text-sm font-bold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <li><Link to="/what-we-fix" className="hover:text-blue-500 transition-colors">What We Fix</Link></li>
              <li><Link to="/how-we-work" className="hover:text-blue-500 transition-colors">Methodology</Link></li>
              <li><Link to="/packages" className="hover:text-blue-500 transition-colors">Service Packages</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className={`font-black mb-6 text-xs uppercase tracking-[0.2em] ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Legal</h4>
            <ul className={`space-y-4 text-sm font-bold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
              <li className={`pt-4 italic border-t ${darkMode ? 'border-white/10' : 'border-slate-100'}`}>
                <span className="text-[10px] opacity-70">No PHI Warning: This site does not collect or store Protected Health Information.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-12 pt-8 border-t text-center text-[10px] font-bold uppercase tracking-widest ${darkMode ? 'border-white/10 text-slate-500' : 'border-slate-100 text-slate-400'}`}>
          &copy; {new Date().getFullYear()} Transworld Medical Management, LLC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
