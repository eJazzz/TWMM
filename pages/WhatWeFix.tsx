
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PAIN_POINTS } from '../constants';

const PainPointCard: React.FC<{ point: typeof PAIN_POINTS[0] }> = ({ point }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className={`glass-card p-6 md:p-8 cursor-pointer transition-all duration-300 border-l-4 ${isExpanded ? 'border-clinical-gold shadow-lg scale-[1.02]' : 'border-clinical-blue hover:border-clinical-gold'}`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-grow">
          <span className="text-[10px] uppercase font-bold tracking-widest text-clinical-gold mb-2 block">{point.title}</span>
          <h3 className="text-xl font-bold text-clinical-deep mb-2 flex items-center">
            <i className={`fas ${isExpanded ? 'fa-minus-circle' : 'fa-plus-circle'} mr-3 text-clinical-accent transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}></i>
            {point.symptom}
          </h3>
        </div>
      </div>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
        <div className="pt-4 border-t border-clinical-light space-y-4">
          <div>
            <span className="text-xs font-bold uppercase text-clinical-slate block mb-1">Likely Root Cause (The Gap):</span>
            <p className="text-clinical-slate leading-relaxed italic">"{point.rootCause}"</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-clinical-gold block mb-1">The TWMM Solution:</span>
            <span className="inline-block px-3 py-1 bg-clinical-light text-clinical-deep font-bold text-xs rounded-sm">
              {point.solution}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatWeFix: React.FC = () => {
  return (
    <div className="bg-clinical-light py-16 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-clinical-gold mb-4">Diagnosis & Remediation</h1>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-clinical-deep mb-6 italic">Relatable Friction, Practical Solutions.</h2>
          <p className="text-xl text-clinical-slate leading-relaxed mb-4">
            Many clinic owners attribute operational friction to "just the way healthcare is." We disagree. Most symptoms have specific, fixable root causes in governance and alignment.
          </p>
          <div className="bg-white/50 border-l-4 border-clinical-gold p-4 mt-6">
            <p className="text-clinical-deep font-semibold">
              <i className="fas fa-location-dot mr-2 text-clinical-gold"></i>
              We specialize in the unique operational challenges of Florida-based independent practices.
            </p>
          </div>
        </div>

        {/* Symptoms vs. Root Cause Interactive Cards */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <h3 className="text-2xl font-serif font-bold text-clinical-deep">Identify Your Gaps</h3>
            <p className="text-sm text-clinical-accent italic uppercase tracking-wider">Click a symptom to reveal the root cause</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {PAIN_POINTS.map((point, idx) => (
              <PainPointCard key={idx} point={point} />
            ))}
          </div>

          <div className="mt-12 bg-clinical-deep text-white p-10 rounded-sm text-center shadow-xl">
            <h4 className="text-2xl font-serif font-bold mb-4">The "Call to Awareness"</h4>
            <p className="text-xl text-clinical-accent mb-8">
              If you recognized <span className="text-clinical-gold font-bold underline">3+ of these</span>, your clinic is currently at risk.
            </p>
            <Link to="/contact" className="inline-block bg-clinical-gold text-clinical-deep px-10 py-4 rounded-sm font-bold text-lg hover:bg-white transition-all">
              Request a Strategic Consult
            </Link>
          </div>
        </div>

        {/* Detail Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-white border-l-4 border-clinical-gold shadow-sm">
            <h3 className="text-2xl font-serif font-bold mb-4">Administrative Governance</h3>
            <p className="text-clinical-slate mb-4">
              When leadership roles are undefined, the clinic drifts. We implement a management rhythm that moves the organization from reactive "firefighting" to proactive strategy.
            </p>
            <ul className="space-y-2 text-sm text-clinical-slate">
              <li><i className="fas fa-check text-clinical-gold mr-2"></i> Clear accountability mapping</li>
              <li><i className="fas fa-check text-clinical-gold mr-2"></i> Financial performance visibility</li>
              <li><i className="fas fa-check text-clinical-gold mr-2"></i> Staffing model optimization</li>
            </ul>
          </div>

          <div className="p-8 bg-white border-l-4 border-clinical-blue shadow-sm">
            <h3 className="text-2xl font-serif font-bold mb-4">Revenue Cycle Resilience</h3>
            <p className="text-clinical-slate mb-4">
              Billing isn't just a back-office task; it starts at the front desk and ends with the clinician's note. We unify these steps to stop technical denials.
            </p>
            <ul className="space-y-2 text-sm text-clinical-slate">
              <li><i className="fas fa-check text-clinical-blue mr-2"></i> Denial management automation</li>
              <li><i className="fas fa-check text-clinical-blue mr-2"></i> Coding audit & education</li>
              <li><i className="fas fa-check text-clinical-blue mr-2"></i> Payer contract renegotiation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeFix;
