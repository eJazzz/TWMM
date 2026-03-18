
import { Link, useOutletContext } from 'react-router-dom';
import { PAIN_POINTS } from '../constants';
import { PlusCircle, MinusCircle, CheckCircle, MapPin, AlertTriangle } from 'lucide-react';

const PainPointCard: React.FC<{ point: typeof PAIN_POINTS[0], darkMode: boolean }> = ({ point, darkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className={`p-6 md:p-8 cursor-pointer transition-all duration-300 border-l-4 rounded-xl ${
        isExpanded 
          ? 'border-clinical-gold shadow-2xl scale-[1.01] ' + (darkMode ? 'bg-slate-800/80' : 'bg-white')
          : (darkMode ? 'bg-slate-800/40 border-slate-700 hover:border-clinical-gold shadow-none' : 'bg-white border-slate-200 hover:border-clinical-gold shadow-lg shadow-slate-200/40')
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-grow">
          <span className="text-[10px] uppercase font-black tracking-[0.2em] text-clinical-gold mb-3 block">{point.title}</span>
          <h3 className={`text-xl font-black mb-2 flex items-center tracking-tight leading-tight uppercase ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            <span className={`mr-3 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-clinical-gold' : 'text-slate-400'}`}>
              {isExpanded ? <MinusCircle size={22} /> : <PlusCircle size={22} />}
            </span>
            {point.symptom}
          </h3>
        </div>
      </div>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
        <div className={`pt-6 border-t space-y-5 ${darkMode ? 'border-white/10' : 'border-slate-100'}`}>
          <div>
            <span className={`text-[11px] font-black uppercase tracking-widest block mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Likely Root Cause (The Gap):</span>
            <p className={`text-lg leading-relaxed italic font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>"{point.rootCause}"</p>
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-clinical-gold block mb-2">The TWMM Solution:</span>
            <span className={`inline-flex items-center gap-2 px-4 py-2 font-black text-xs rounded-lg uppercase tracking-wider ${
              darkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-50 text-blue-600'
            }`}>
              <CheckCircle size={14} /> {point.solution}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatWeFix: React.FC = () => {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  return (
    <div className={`py-12 md:py-16 animate-fade-in transition-colors duration-300 ${darkMode ? 'bg-[#0A192F] text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h1 className="text-[11px] font-black uppercase tracking-[0.4em] text-clinical-gold mb-4">Diagnosis & Remediation</h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black mb-8 leading-[1.1] tracking-tighter uppercase">
            Relatable <span className="text-clinical-gold">Friction,</span>
            <br />
            Practical Solutions.
          </h2>
          <p className={`text-xl leading-relaxed mb-10 font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Many clinic owners attribute operational friction to "just the way healthcare is." We disagree. Most symptoms have specific, fixable root causes in governance and alignment.
          </p>
          <div className={`border-l-4 border-clinical-gold p-6 rounded-r-2xl backdrop-blur-sm ${
            darkMode ? 'bg-white/5' : 'bg-white shadow-xl shadow-slate-200/50'
          }`}>
            <p className="text-lg font-bold flex items-center gap-3">
              <MapPin className="text-clinical-gold fill-clinical-gold/20" />
              We specialize in the unique operational challenges of Florida-based independent practices.
            </p>
          </div>
        </div>

        {/* Symptoms vs. Root Cause Interactive Cards */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b pb-4 border-dashed border-slate-700/30">
            <h3 className="text-2xl font-black tracking-tight uppercase">Identify Your Gaps</h3>
            <p className={`text-[10px] font-black uppercase tracking-[0.2em] italic ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              Click a symptom to reveal the root cause
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {PAIN_POINTS.map((point, idx) => (
              <PainPointCard key={idx} point={point} darkMode={darkMode} />
            ))}
          </div>

          <div className={`mt-12 p-10 rounded-2xl text-center shadow-2xl relative overflow-hidden ${
            darkMode ? 'bg-blue-600' : 'bg-blue-600 text-white'
          }`}>
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
             <div className="relative z-10">
              <h4 className="text-2xl md:text-3xl font-black mb-4 tracking-tight uppercase flex items-center justify-center gap-3">
                <AlertTriangle size={32} className="text-clinical-gold" /> The "Call to Awareness"
              </h4>
              <p className="text-xl text-blue-100 font-medium mb-8">
                If you recognized <span className="text-clinical-gold font-black underline decoration-2 underline-offset-4 uppercase">3+ of these</span>, your clinic is currently at risk.
              </p>
              <Link to="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-black uppercase text-sm tracking-widest hover:bg-slate-50 hover:shadow-2xl transition-all active:scale-95">
                Request a Strategic Consult
              </Link>
             </div>
          </div>
        </div>

        {/* Detail Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`p-8 rounded-2xl border-l-8 border-clinical-gold transition-all ${
            darkMode ? 'bg-slate-800/40 border-white/5' : 'bg-white shadow-xl shadow-slate-200/50'
          }`}>
            <h3 className="text-2xl font-black mb-6 tracking-tight uppercase">Administrative Governance</h3>
            <p className={`mb-8 font-medium leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              When leadership roles are undefined, the clinic drifts. We implement a management rhythm that moves the organization from reactive "firefighting" to proactive strategy.
            </p>
            <ul className="space-y-4">
              {["Clear accountability mapping", "Financial performance visibility", "Staffing model optimization"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-black uppercase tracking-tight">
                  <CheckCircle size={18} className="text-clinical-gold" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`p-8 rounded-2xl border-l-8 border-blue-600 transition-all ${
            darkMode ? 'bg-slate-800/40 border-white/5' : 'bg-white shadow-xl shadow-slate-200/50'
          }`}>
            <h3 className="text-2xl font-black mb-6 tracking-tight uppercase">Revenue Cycle Resilience</h3>
            <p className={`mb-8 font-medium leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Billing isn't just a back-office task; it starts at the front desk and ends with the clinician's note. We unify these steps to stop technical denials.
            </p>
            <ul className="space-y-4">
              {["Denial management automation", "Coding audit & education", "Payer contract renegotiation"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-black uppercase tracking-tight">
                  <CheckCircle size={18} className="text-blue-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeFix;
