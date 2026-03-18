
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC<{ darkMode: boolean; setDarkMode: (val: boolean) => void }> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Global Alert Banner */}
      <div className="bg-[#b91c1c] text-white py-2 px-4 text-center text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] relative z-[60] flex flex-wrap items-center justify-center gap-3 w-full shadow-md">
        <i className="fas fa-shield-alt text-white/80"></i>
        ENFORCEMENT ALERT: 2026 HIPAA MANDATES & M365 SECURITY AUDITS NOW REQUIRED
      </div>

      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? (darkMode ? 'bg-slate-900/95 shadow-xl border-b border-white/5' : 'bg-white/95 shadow-lg border-b border-slate-200') 
          : (darkMode ? 'bg-[#0A192F] border-b border-white/5' : 'bg-slate-50 border-b border-slate-200')
      } backdrop-blur-md py-4`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="/twmm-logo.png" alt="TWMM Logo" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" />
            <div className="flex flex-col leading-tight">
              <span className={`font-serif font-bold text-xl tracking-tight transition-colors ${darkMode ? 'text-white' : 'text-slate-900'}`}>Transworld</span>
              <span className={`text-[10px] uppercase tracking-widest transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Medical Management</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold transition-all hover:translate-y-[-1px] ${
                  location.pathname === item.path
                    ? (darkMode ? 'text-blue-400' : 'text-blue-600')
                    : (darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all hover:rotate-12 ${
                darkMode ? 'bg-white/10 text-yellow-400 hover:bg-white/20' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link to="/contact" className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95">
              Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'text-yellow-400' : 'text-slate-700'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={`${darkMode ? 'text-white' : 'text-slate-900'}`} onClick={() => setIsOpen(!isOpen)}>
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden absolute top-full left-0 w-full p-6 border-t flex flex-col space-y-4 shadow-2xl animate-fade-in-down ${
            darkMode ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
          }`}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold border-b pb-2 ${
                  darkMode ? 'text-white border-white/10' : 'text-slate-900 border-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="bg-blue-600 text-white px-5 py-3 text-center rounded-xl font-bold shadow-lg"
            >
              Request Consult
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
