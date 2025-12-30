
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-clinical-deep text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-clinical-gold rounded-sm flex items-center justify-center font-bold text-clinical-deep text-xs">TW</div>
              <span className="font-serif font-bold text-xl">Transworld Medical Management</span>
            </div>
            <p className="text-clinical-accent max-w-sm mb-6">
              Strategic operations, HIPAA compliance, and revenue governance for the modern outpatient clinic. Serving 1-20 provider practices nationwide.
            </p>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-clinical-gold transition-colors" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-clinical-gold transition-colors" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-clinical-gold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-clinical-accent">
              <li><Link to="/what-we-fix" className="hover:text-white transition-colors">What We Fix</Link></li>
              <li><Link to="/how-we-work" className="hover:text-white transition-colors">Methodology</Link></li>
              <li><Link to="/packages" className="hover:text-white transition-colors">Service Packages</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-clinical-gold">Legal</h4>
            <ul className="space-y-4 text-sm text-clinical-accent">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li className="pt-4 italic border-t border-white/10">
                <span className="text-xs">No PHI Warning: This site does not collect or store Protected Health Information.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-clinical-accent">
          &copy; {new Date().getFullYear()} Transworld Medical Management, LLC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
