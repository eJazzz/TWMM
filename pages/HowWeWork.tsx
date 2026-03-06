
import React from 'react';
import { HOW_WE_WORK_STEPS } from '../constants';

const HowWeWork: React.FC = () => {
  return (
    <div className="bg-white py-16 animate-fade-in">
      <div className="container mx-auto px-6">
        {/* Intro Section */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-clinical-gold mb-4">The Methodology</h1>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-clinical-deep mb-6">Evidence-Based Management.</h2>
          <p className="text-xl text-clinical-slate leading-relaxed">
            We don't believe in generic consulting decks. Our approach is clinical: we diagnose through data, treat through implementation, and monitor through governance.
          </p>
        </div>

        {/* Timeline Visualization - MOVED TO TOP */}
        <div className="bg-clinical-deep text-white p-12 rounded-sm shadow-2xl mb-20">
          <h3 className="text-3xl font-serif font-bold mb-12 text-center">Project Engagement Timeline</h3>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2"></div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { time: "Days 1-7", event: "Quick Scan & Discovery", color: "bg-clinical-gold" },
                { time: "Weeks 2-4", event: "Gap Assessment & Priority Roadmap", color: "bg-clinical-accent" },
                { time: "Weeks 4-12", event: "Remediation & Implementation", color: "bg-clinical-blue" },
                { time: "Ongoing", event: "Governance & Maintenance", color: "bg-clinical-gold" },
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 text-center">
                  <div className={`w-6 h-6 ${item.color} mx-auto rounded-full border-4 border-clinical-deep mb-4`}></div>
                  <div className="font-bold text-xl mb-1">{item.time}</div>
                  <div className="text-clinical-accent text-sm">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engagement Framework */}
        <section className="py-20 bg-clinical-light -mx-6 px-6 mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-clinical-gold mb-4">Engagement Framework</h2>
              <h3 className="text-4xl font-serif font-bold text-clinical-deep">Transparency in Collaboration</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Inputs */}
              <div className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-clinical-blue">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-clinical-blue/10 rounded-full flex items-center justify-center text-clinical-blue mr-4">
                    <i className="fas fa-sign-in-alt text-xl"></i>
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-clinical-deep">What We Need From You (Inputs)</h4>
                </div>
                <p className="text-clinical-slate mb-8 leading-relaxed">
                  To ensure a successful engagement with minimal disruption to your clinic, we require:
                </p>
                <ul className="space-y-6">
                  {[
                    "Minimal read-only access to EHR/PM systems and financial reporting portals.",
                    "A current list of third-party vendors (IT, Billing, Lab, etc.).",
                    "Existing policy and procedure documents (even if outdated).",
                    "Designated points of contact for administrative and clinical workflows."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-chevron-right text-clinical-gold mt-1.5 mr-4 text-xs"></i>
                      <span className="text-clinical-slate font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="bg-clinical-deep p-8 md:p-12 shadow-xl border-t-4 border-clinical-gold">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-clinical-gold rounded-full flex items-center justify-center text-clinical-deep mr-4">
                    <i className="fas fa-file-export text-xl"></i>
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-white">What You Receive From Us (Deliverables)</h4>
                </div>
                <p className="text-clinical-accent mb-8 leading-relaxed">
                  Every engagement results in tangible, audit-ready documentation:
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Clinic Scorecards", desc: "Clear, data-driven benchmarks of your current operational health." },
                    { title: "The Remediation Roadmap", desc: "A prioritized step-by-step plan to fix identified gaps." },
                    { title: "Standard Operating Procedures (SOPs)", desc: "Custom-built \"Playbooks\" for your specific clinical staff." },
                    { title: "Governance Dashboards", desc: "PowerBI-driven visual reporting for revenue and performance monitoring." },
                    { title: "Compliance Evidence Packs", desc: "Organized documentation for HIPAA and regulatory audit readiness." }
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <h5 className="text-clinical-gold font-bold flex items-center mb-1">
                        <i className="fas fa-check-circle mr-3 text-sm opacity-50 group-hover:opacity-100 transition-opacity"></i>
                        {item.title}
                      </h5>
                      <p className="text-clinical-accent text-sm ml-6">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Stage Detail */}
        <div className="space-y-24">
          {HOW_WE_WORK_STEPS.map((step, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2">
                <div className="text-8xl font-serif font-bold text-clinical-light mb-4">{step.step}</div>
                <h3 className="text-3xl font-serif font-bold text-clinical-deep mb-6">{step.title}</h3>
                <p className="text-clinical-slate text-lg mb-8 leading-relaxed">
                  {idx === 0 && "We begin with a data harvest. We look at your AR aging, coding distributions, security logs, and employee satisfaction to build a clear 'As-Is' picture."}
                  {idx === 1 && "Comparing your current performance against MGMA benchmarks and HIPAA mandates. We identify the specific gaps that represent your highest risk and largest opportunity."}
                  {idx === 2 && "The 'Fix' phase. We embed into your team to update SOPs, reconfigure EHR settings, and train staff on new protocols. We fix what is broken, physically and digitally."}
                  {idx === 3 && "Sustainability. We establish the reporting dashboards and meeting cadences required to ensure compliance remains a habit, not a project."}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-clinical-light p-4 rounded-sm">
                    <span className="text-xs uppercase font-bold text-clinical-gold block mb-2">Process Focus</span>
                    <span className="text-sm font-medium text-clinical-deep">
                      {idx === 0 && "Data Harvesting"}
                      {idx === 1 && "Gap Analysis"}
                      {idx === 2 && "Remediation"}
                      {idx === 3 && "Sustained Governance"}
                    </span>
                  </div>
                  <div className="bg-clinical-deep p-4 rounded-sm">
                    <span className="text-xs uppercase font-bold text-clinical-accent block mb-2 text-white/50">Primary Goal</span>
                    <span className="text-sm font-medium text-white">
                      {idx === 0 && "Contextual Insight"}
                      {idx === 1 && "Risk Prioritization"}
                      {idx === 2 && "Structural Fixes"}
                      {idx === 3 && "Operational Habit"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-clinical-light aspect-video flex items-center justify-center rounded-sm overflow-hidden">
                 <img src={`https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800`} alt={step.title} className="rounded-sm shadow-xl object-cover w-full h-full opacity-90" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
