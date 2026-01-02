
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-clinical-deep shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/TWMM_Logo_103.png" 
            alt="Transworld Medical Management Logo" 
            className="h-16 w-auto" 
          />
           {/* 
           <div className="w-10 h-18 bg-clinical-gold rounded-sm flex items-center justify-center font-bold text-clinical-deep">TWM</div>
          <div className="flex flex-col leading-tight">
            <span className={`font-serif font-bold text-xl tracking-tight ${isScrolled ? 'text-white' : 'text-clinical-deep'}`}>TransWorld</span>
            <span className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-clinical-accent' : 'text-clinical-slate'}`}>Medical Management</span>
          </div> 
          */} 
          </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-clinical-gold ${
                location.pathname === item.path 
                  ? 'text-clinical-gold' 
                  : (isScrolled ? 'text-white' : 'text-clinical-deep')
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="bg-clinical-gold text-clinical-deep px-5 py-2 rounded-sm text-sm font-bold hover:bg-white transition-all">
            Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-clinical-deep" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl ${isScrolled ? 'text-white' : 'text-clinical-deep'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-clinical-deep p-6 border-t border-white/10 flex flex-col space-y-4 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-medium border-b border-white/10 pb-2"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-clinical-gold text-clinical-deep px-5 py-3 text-center rounded-sm font-bold">
            Request Consult
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
