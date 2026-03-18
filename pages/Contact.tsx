
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Mail, MapPin, Send, CheckCircle2, AlertTriangle, Building2, User, Users, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`py-12 md:py-20 animate-fade-in transition-colors duration-300 min-h-[85vh] flex flex-col items-center justify-center ${darkMode ? 'bg-[#0A192F] text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start max-w-6xl">
        <div className="space-y-10">
          <div>
            <h1 className="text-[11px] font-black uppercase tracking-[0.4em] text-clinical-gold mb-4">Request Consultation</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black mb-8 leading-tight tracking-tighter uppercase">
              Let's talk about <span className="text-clinical-gold underline underline-offset-8 decoration-4">your clinic.</span>
            </h2>
            <p className={`text-xl leading-relaxed font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Professional governance starts with a conversation. Fill out the form to request a preliminary operational scan.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className={`flex items-start gap-6 p-6 rounded-2xl transition-all ${darkMode ? 'bg-white/5' : 'bg-white shadow-lg shadow-slate-200/50'}`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-black uppercase tracking-tight text-lg mb-1">Headquarters</h4>
                <p className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Transworld Medical Management, LLC<br />Available Nationwide</p>
              </div>
            </div>
            
            <div className={`flex items-start gap-6 p-6 rounded-2xl transition-all ${darkMode ? 'bg-white/5' : 'bg-white shadow-lg shadow-slate-200/50'}`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-clinical-gold/10 text-clinical-gold' : 'bg-yellow-50 text-clinical-gold'}`}>
                <Mail size={28} />
              </div>
              <div>
                <h4 className="font-black uppercase tracking-tight text-lg mb-1">General Inquiries</h4>
                <p className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>admin@twmedicalmgmt.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`p-8 md:p-12 rounded-3xl transition-all relative border-t-8 border-clinical-gold shadow-2xl ${
          darkMode ? 'bg-slate-800/40 border-white/5' : 'bg-white border-white'
        }`}>
          {submitted ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-clinical-gold">Request Received</h3>
              <p className={`font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                An advisor will reach out within 24 business hours to schedule your preliminary scan.
              </p>
            </div>
          ) : (
            <>
              <div className={`border-l-4 border-red-600 p-6 mb-8 rounded-r-2xl ${darkMode ? 'bg-red-600/10' : 'bg-red-50'}`}>
                <h5 className="text-red-600 font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                  <AlertTriangle size={18} /> Important: No PHI Warning
                </h5>
                <p className={`text-xs font-bold ${darkMode ? 'text-red-400' : 'text-red-700'}`}>
                  Do not include Protected Health Information (PHI) in this form. This channel is for administrative inquiries only.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-[10px] font-black uppercase tracking-widest mb-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Full Name</label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-clinical-gold" />
                      <input required type="text" className={`w-full border-none pl-12 pr-4 py-4 text-sm font-bold rounded-xl outline-none focus:ring-2 focus:ring-clinical-gold transition-all ${
                        darkMode ? 'bg-white/5 text-white' : 'bg-slate-50 text-slate-900'
                      }`} placeholder="John Doe" />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-[10px] font-black uppercase tracking-widest mb-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Clinic Name</label>
                    <div className="relative">
                      <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-clinical-gold" />
                      <input required type="text" className={`w-full border-none pl-12 pr-4 py-4 text-sm font-bold rounded-xl outline-none focus:ring-2 focus:ring-clinical-gold transition-all ${
                        darkMode ? 'bg-white/5 text-white' : 'bg-slate-50 text-slate-900'
                      }`} placeholder="Advanced Medical LLC" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className={`block text-[10px] font-black uppercase tracking-widest mb-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Professional Email</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-clinical-gold" />
                    <input required type="email" className={`w-full border-none pl-12 pr-4 py-4 text-sm font-bold rounded-xl outline-none focus:ring-2 focus:ring-clinical-gold transition-all ${
                      darkMode ? 'bg-white/5 text-white' : 'bg-slate-50 text-slate-900'
                    }`} placeholder="john@clinic.com" />
                  </div>
                </div>

                <div>
                  <label className={`block text-[10px] font-black uppercase tracking-widest mb-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Provider Count</label>
                  <div className="relative">
                    <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-clinical-gold" />
                    <select className={`w-full border-none pl-12 pr-4 py-4 text-sm font-bold rounded-xl outline-none focus:ring-2 focus:ring-clinical-gold transition-all appearance-none ${
                      darkMode ? 'bg-white/5 text-white' : 'bg-slate-50 text-slate-900'
                    }`}>
                      <option className="bg-slate-800">1-5 Providers</option>
                      <option className="bg-slate-800">6-10 Providers</option>
                      <option className="bg-slate-800">11-20 Providers</option>
                      <option className="bg-slate-800">20+ Providers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-[10px] font-black uppercase tracking-widest mb-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Primary Pain Point</label>
                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-4 top-4 text-clinical-gold" />
                    <textarea rows={4} className={`w-full border-none pl-12 pr-4 py-4 text-sm font-bold rounded-xl outline-none focus:ring-2 focus:ring-clinical-gold transition-all resize-none ${
                        darkMode ? 'bg-white/5 text-white' : 'bg-slate-50 text-slate-900'
                      }`} placeholder="E.g. High denial rates, HIPAA audit concerns, or EHR burnout..."></textarea>
                  </div>
                </div>

                <button type="submit" className={`flex items-center justify-center gap-2 w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl transition-all duration-300 ${
                  darkMode ? 'bg-blue-600 hover:bg-clinical-gold hover:text-blue-900' : 'bg-blue-600 text-white hover:bg-slate-900'
                }`}>
                  Request Consultation <Send size={20} />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
