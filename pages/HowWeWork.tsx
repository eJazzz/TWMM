
import { useOutletContext } from 'react-router-dom';
import { HOW_WE_WORK_STEPS } from '../constants';
import { Search, BarChart3, Wrench, ShieldCheck, ChevronRight, CheckCircle2, FileInput, Laptop, Receipt, Briefcase } from 'lucide-react';

const HowWeWork: React.FC = () => {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  return (
    <div className={`py-12 md:py-16 animate-fade-in transition-colors duration-300 ${darkMode ? 'bg-[#0A192F] text-white' : 'bg-white text-slate-900'}`}>
      <div className="container mx-auto px-6">
        {/* Intro Section */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-[11px] font-black uppercase tracking-[0.4em] text-clinical-gold mb-4">The Methodology</h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black mb-8 leading-[1.1] tracking-tighter uppercase">
            Evidence-Based <span className="text-clinical-gold">Management.</span>
          </h2>
          <p className={`text-xl leading-relaxed font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            We don't believe in generic consulting decks. Our approach is clinical: we diagnose through data, treat through implementation, and monitor through governance.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className={`p-10 rounded-2xl shadow-2xl mb-24 relative overflow-hidden ${
          darkMode ? 'bg-slate-800/40 border border-white/5' : 'bg-blue-600 text-white'
        }`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <h3 className="text-3xl font-black mb-12 text-center uppercase tracking-tight relative z-10">Project Engagement Timeline</h3>
          <div className="relative z-10">
            <div className={`hidden md:block absolute top-[12px] left-0 w-full h-[2px] ${darkMode ? 'bg-white/10' : 'bg-white/20'}`}></div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { time: "Days 1-7", event: "Quick Scan & Discovery", color: "bg-clinical-gold", icon: Search },
                { time: "Weeks 2-4", event: "Gap Assessment", color: "bg-blue-400", icon: BarChart3 },
                { time: "Weeks 4-12", event: "Remediation", color: "bg-blue-500", icon: Wrench },
                { time: "Ongoing", event: "Governance", color: "bg-clinical-gold", icon: ShieldCheck },
              ].map((item, idx) => (
                <div key={idx} className="relative text-center group">
                  <div className={`w-6 h-6 ${item.color} mx-auto rounded-full border-4 ${darkMode ? 'border-slate-800' : 'border-blue-600'} mb-4 relative z-20 group-hover:scale-125 transition-transform`}></div>
                  <div className="font-black text-xl mb-1 uppercase tracking-tighter">{item.time}</div>
                  <div className={`text-sm font-bold uppercase tracking-widest ${darkMode ? 'text-slate-400' : 'text-blue-100'}`}>{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engagement Framework */}
        <section className={`py-16 -mx-6 px-6 mb-24 ${darkMode ? 'bg-white/5' : 'bg-slate-50'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-clinical-gold mb-4">Engagement Framework</h2>
              <h3 className="text-4xl font-sans font-black uppercase tracking-tight">Transparency in Collaboration</h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className={`p-8 md:p-10 rounded-2xl border-t-8 border-blue-600 transition-all ${
                darkMode ? 'bg-slate-800/40 border-white/5' : 'bg-white shadow-xl shadow-slate-200/50'
              }`}>
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${darkMode ? 'bg-blue-400/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    <FileInput size={24} />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight">What We Need (Inputs)</h4>
                </div>
                <p className={`mb-8 font-medium leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  To ensure a successful engagement with minimal disruption to your clinic, we require:
                </p>
                <ul className="space-y-5">
                  {[
                    "Minimal read-only access to EHR/PM systems and financial reporting portals.",
                    "A current list of third-party vendors (IT, Billing, Lab, etc.).",
                    "Existing policy and procedure documents (even if outdated).",
                    "Designated points of contact for administrative and clinical workflows."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <ChevronRight size={18} className="text-clinical-gold mt-0.5 shrink-0" />
                      <span className="font-bold text-sm uppercase tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className={`p-8 md:p-10 rounded-2xl border-t-8 border-clinical-gold transition-all ${
                darkMode ? 'bg-blue-600/10 border-white/5' : 'bg-blue-600 text-white shadow-2xl'
              }`}>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-clinical-gold rounded-xl flex items-center justify-center text-clinical-deep mr-4">
                    <Briefcase size={24} />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight">What You Receive (Deliverables)</h4>
                </div>
                <p className={`mb-8 font-medium leading-relaxed ${darkMode ? 'text-slate-400' : 'text-blue-100'}`}>
                  Every engagement results in tangible, audit-ready documentation:
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Clinic Scorecards", desc: "Data-driven benchmarks of your operational health.", icon: BarChart3 },
                    { title: "Remediation Roadmap", desc: "Step-by-step plan to fix identified gaps.", icon: ChevronRight },
                    { title: "Standard Operations (SOPs)", desc: "Customized \"Playbooks\" for your staff.", icon: Laptop },
                    { title: "Governance Dashboards", desc: "Visual reporting for revenue and performance.", icon: Receipt },
                    { title: "Compliance Evidence", desc: "Documentation for HIPAA audit readiness.", icon: ShieldCheck }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <item.icon size={20} className="text-clinical-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <h5 className="font-black uppercase text-xs tracking-widest mb-1">{item.title}</h5>
                        <p className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-blue-100/70'}`}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Stage Detail */}
        <div className="space-y-24 mb-12">
          {HOW_WE_WORK_STEPS.map((step, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2">
                <div className={`text-9xl font-sans font-black mb-4 opacity-5 uppercase tracking-tighter absolute -translate-y-16 -translate-x-8 select-none ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {step.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-black text-clinical-gold mb-6 uppercase tracking-tighter">{step.title}</h3>
                  <p className={`text-lg mb-10 leading-relaxed font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {idx === 0 && "We begin with a data harvest. We look at your AR aging, coding distributions, security logs, and employee satisfaction to build a clear 'As-Is' picture."}
                    {idx === 1 && "Comparing your current performance against MGMA benchmarks and HIPAA mandates. We identify the specific gaps that represent your highest risk and largest opportunity."}
                    {idx === 2 && "The 'Fix' phase. We embed into your team to update SOPs, reconfigure EHR settings, and train staff on new protocols. We fix what is broken, physically and digitally."}
                    {idx === 3 && "Sustainability. We establish the reporting dashboards and meeting cadences required to ensure compliance remains a habit, not a project."}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-xl border ${darkMode ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                      <span className="text-[10px] uppercase font-black text-clinical-gold block mb-2 tracking-widest">Process Focus</span>
                      <span className="text-xs font-black uppercase tracking-tight">
                        {idx === 0 && "Data Harvesting"}
                        {idx === 1 && "Gap Analysis"}
                        {idx === 2 && "Remediation"}
                        {idx === 3 && "Governance"}
                      </span>
                    </div>
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-blue-600/20' : 'bg-blue-600 text-white'}`}>
                      <span className={`text-[10px] uppercase font-black block mb-2 tracking-widest ${darkMode ? 'text-blue-400' : 'text-blue-200'}`}>Primary Goal</span>
                      <span className="text-xs font-black uppercase tracking-tight">
                        {idx === 0 && "Contextual Insight"}
                        {idx === 1 && "Risk Prioritization"}
                        {idx === 2 && "Structural Fixes"}
                        {idx === 3 && "Operational Habit"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`md:w-1/2 aspect-video relative rounded-2xl overflow-hidden group shadow-2xl ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                 <img src={`https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800`} alt={step.title} className="object-cover w-full h-full opacity-80 group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
