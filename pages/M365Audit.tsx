import React, { useState, useEffect } from 'react';
import {
    Shield, CheckCircle, AlertTriangle, FileText, Clock,
    ArrowRight, ShieldCheck, Mail, Users, Share2,
    Lock, Zap, Sun, Moon, MapPin, AlertCircle, Info, XCircle,
    ArrowUp
} from 'lucide-react';

const APP_NAME = "TRANSWORLD MEDICAL";
const SUB_NAME = "MANAGEMENT";

const M365Audit = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Monitor scroll position to show/hide the scroll-to-top button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-[#0a1128] text-white' : 'bg-slate-50 text-slate-900'}`}>

            {/* 1. Urgency Banner */}
            <div className="bg-[#b91c1c] text-white py-2.5 px-4 text-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] flex items-center justify-center gap-3">
                <AlertTriangle size={14} fill="white" className="text-[#b91c1c]" />
                2026 AUDIT CYCLE ACTIVE: COMPLIANCE ENFORCEMENT ACTIVE
                <AlertTriangle size={14} fill="white" className="text-[#b91c1c]" />
            </div>

            {/* 2. Navigation */}
            <nav className={`sticky top-0 w-full z-50 border-b backdrop-blur-md transition-colors ${darkMode ? 'bg-[#0a1128]/95 border-white/5' : 'bg-white/95 border-slate-200'}`}>
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className={`p-1 border-2 ${darkMode ? 'border-[#c5a059]' : 'border-blue-900'}`}>
                            <Shield className={`w-7 h-7 ${darkMode ? 'text-white' : 'text-blue-900'}`} fill={darkMode ? "#c5a059" : "currentColor"} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black text-lg tracking-tighter leading-none">{APP_NAME}</span>
                            <span className={`text-[9px] tracking-[0.4em] font-bold ${darkMode ? 'text-[#c5a059]' : 'text-slate-500'}`}>{SUB_NAME}</span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
                        <button onClick={() => scrollToSection('why')} className="hover:text-[#c5a059] transition-colors">Risk Profile</button>
                        <button onClick={() => scrollToSection('scope')} className="hover:text-[#c5a059] transition-colors">Audit Scope</button>
                        <button onClick={() => scrollToSection('process')} className="hover:text-[#c5a059] transition-colors">Process</button>
                        <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-md border ${darkMode ? 'border-white/10 text-yellow-500' : 'border-slate-200 text-slate-600'}`}>
                            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
                        </button>
                        <button className="bg-[#c5a059] hover:bg-[#b08d48] text-[#0a1128] px-6 py-3 font-black transition-all shadow-lg active:scale-95">
                            BOOK AUDIT NOW
                        </button>
                    </div>
                </div>
            </nav>

            {/* 3. Hero Section */}
            <section className="relative pt-24 pb-24 px-4 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-block bg-[#b91c1c]/10 border border-[#b91c1c]/30 text-[#ff4d4d] px-4 py-1 text-[14px] font-black uppercase tracking-[0.2em] mb-8">
                        One hour of expert oversight can prevent a six-figure HIPAA penalty.
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-[0.95]">
                        Stop Accidental PHI Leaks in <span className="text-[#c5a059]">Microsoft 365.</span>
                    </h1>
                    <p className={`text-xl md:text-1xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Most clinics use M365 with default settings that leave patient data exposed.<br /> Our 60-minute remote audit identifies your top risks and gives you a prioritized fix list.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="bg-[#c5a059] hover:bg-[#b08d48] text-[#0a1128] px-10 py-5 rounded-sm text-lg font-black shadow-2xl transition-all flex items-center justify-center gap-3 group"
                        >
                            BOOK M365 LEAK CHECK ($199) <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => scrollToSection('scope')}
                            className={`px-10 py-5 rounded-sm text-lg font-black border transition-all ${darkMode ? 'border-white/10 hover:bg-white/5' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}`}
                        >
                            What's Included<br />and What's Not
                        </button>
                    </div>
                    <div className="mt-16 flex items-center justify-center gap-8 opacity-40 grayscale">
                        <span className="text-[14px] font-black uppercase tracking-[0.3em]">Serving Tampa Bay Medical Corridor</span>
                    </div>
                </div>
            </section>

            {/* 4. Why Critical Section */}
            <section id="why" className={`py-24 px-4 transition-colors ${darkMode ? 'bg-[#0d1633] border-y border-white/5' : 'bg-slate-100 border-y border-slate-200'}`}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter italic">Why M365 PHI Leak Audit is Critical</h2>
                        <div className="h-1 w-20 bg-[#c5a059] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: Share2,
                                title: "Overshared Files",
                                desc: "Default settings allow 'Anyone with the link' access, making patient folders indexable by search engines."
                            },
                            {
                                icon: Users,
                                title: "Guest Access Bloat",
                                desc: "Former vendors and contractors often retain high-level access to your SharePoint environment indefinitely."
                            },
                            {
                                icon: Mail,
                                title: "Hidden Forwarding",
                                desc: "Malicious or accidental rules can send copies of clinical emails to external personal accounts undetected."
                            }
                        ].map((risk, i) => (
                            <div key={i} className={`p-10 border-t-4 border-[#b91c1c] transition-all ${darkMode ? 'bg-[#121d3a] border-white/5 shadow-2xl' : 'bg-white border-slate-200 shadow-sm'}`}>
                                <div className="w-12 h-12 bg-[#b91c1c]/10 rounded-sm flex items-center justify-center mb-8">
                                    <risk.icon className="w-6 h-6 bg-[#121d3a] text-[#1cbaba]" />
                                </div>
                                <h4 className="text-xl font-black uppercase tracking-tight mb-4 leading-none">{risk.title}</h4>
                                <p className={`text-sm leading-relaxed font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{risk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Audit Scope Section */}
            <section id="scope" className="py-24 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter italic text-[#c5a059]">The 60-Minute Product</h2>
                        <p className={`text-xl mb-10 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            We bypass the 50-page reports and focus on the technical gaps that lead directly to HIPAA breaches.
                        </p>

                        <div className="space-y-6">
                            {[
                                { label: "Identity & MFA Audit", desc: "Admin role privilege review and MFA enforcement validation." },
                                { label: "SharePoint External Audit", desc: "Detection of 'Anyone' links and external sharing link expiration." },
                                { label: "Teams Security Review", desc: "Guest chat permissions, meeting recording storage, and team creation." },
                                { label: "Exchange Flow Detection", desc: "External auto-forwarding audit and shared mailbox permission check." },
                                { label: "Purview Audit Logging", desc: "Verification that global audit recording is active and searchable." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 group">
                                    <div className="mt-1 bg-green-500/20 p-1.5 rounded-sm transition-transform group-hover:scale-110">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                    </div>
                                    <div>
                                        <h5 className="font-black text-xs uppercase tracking-[0.15em] mb-1">{item.label}</h5>
                                        <p className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`p-10 border-b-8 border-[#c5a059] shadow-2xl ${darkMode ? 'bg-[#121d3a] border-white/5' : 'bg-white border-slate-200'}`}>
                        <div className="flex items-center gap-4 mb-8">
                            <AlertTriangle className="text-[#b91c1c] w-8 h-8" />
                            <h3 className="text-2xl font-black uppercase tracking-tight leading-none">Important: Out of Scope</h3>
                        </div>
                        <ul className={`space-y-5 text-sm font-bold uppercase tracking-tight ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            <li className="flex items-start gap-4">
                                <XCircle size={18} className="text-[#b91c1c] shrink-0" />
                                A full 200-point HIPAA Security Rule audit.
                            </li>
                            <li className="flex items-start gap-4">
                                <XCircle size={18} className="text-[#b91c1c] shrink-0" />
                                Legal advice or certification of "Compliance."
                            </li>
                            <li className="flex items-start gap-4">
                                <XCircle size={18} className="text-[#b91c1c] shrink-0" />
                                Internal policy writing or staff HIPAA training.
                            </li>
                            <li className="flex items-start gap-4">
                                <XCircle size={18} className="text-[#b91c1c] shrink-0" />
                                Physical security or hardware assessments.
                            </li>
                        </ul>
                        <div className={`mt-10 pt-8 border-t text-xs font-black uppercase tracking-[0.2em]  ${darkMode ? 'border-white/10' : 'border-slate-100'}`}>
                            This is a focused technical M365 leak check.
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Process Section */}
            <section id="process" className={`py-24 px-4 transition-colors ${darkMode ? 'bg-[#0d1633]' : 'bg-slate-50'}`}>
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter italic">How it Works</h2>
                    <div className="h-1 w-20 bg-[#c5a059] mx-auto"></div>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                    {[
                        { step: "01", title: "Book & Sign", desc: "Select your time, fill the intake portal, and sign the digital consent." },
                        { step: "02", title: "Remote Audit", desc: "We join you on a 60-min screen share. You drive the mouse, we audit the config." },
                        { step: "03", title: "Apply Fixes", desc: "Receive your PDF Snapshot same-day and apply the prioritized remediation." }
                    ].map((item, i) => (
                        <div key={i} className="relative text-center group">
                            <div className="text-8xl font-black text-white opacity-5 mb-4 tracking-tighter group-hover:opacity-10 transition-opacity">{item.step}</div>
                            <h4 className="text-2xl font-black uppercase tracking-tight mb-4 -mt-14">{item.title}</h4>
                            <p className={`text-sm leading-relaxed font-bold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. Deliverables / Snapshot */}
            <section className="py-24 px-4 bg-white text-[#0a1128]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block p-4 bg-[#c5a059]/10 rounded-sm mb-8">
                        <FileText className="w-12 h-12 text-[#c5a059]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter italic">The Deliverable</h2>
                    <p className="text-xl mb-12 font-medium text-slate-600 leading-relaxed">
                        We don't leave you with questions. You receive a 1-page **Risk Snapshot** summarizing our findings and a clear path to resolution.
                    </p>

                    <div className="mx-auto max-w-lg border-4 border-dashed border-slate-200 p-8 rounded-sm bg-slate-50/50 shadow-inner">
                        <div className="flex flex-col gap-3 text-left opacity-30 select-none">
                            <div className="h-6 bg-slate-300 rounded w-1/2 mb-6"></div>
                            <div className="h-3 bg-[#b91c1c] rounded w-full"></div>
                            <div className="h-3 bg-slate-300 rounded w-full"></div>
                            <div className="h-3 bg-slate-300 rounded w-3/4 mb-4"></div>
                            <div className="h-16 border-2 border-slate-200 rounded flex items-center justify-center font-black text-xs uppercase tracking-widest">SAMPLE SNAPSHOT PREVIEW</div>
                            <div className="h-3 bg-green-500 rounded w-full mt-4"></div>
                            <div className="h-3 bg-slate-300 rounded w-5/6"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-left">
                        <div className="flex gap-4 p-6 border border-slate-100 rounded-sm">
                            <CheckCircle className="text-green-600 shrink-0" size={24} />
                            <p className="text-sm font-bold uppercase leading-relaxed tracking-tight text-slate-700"><strong>Top 5 Critical Risks:</strong> Plain English explanation of your environment's exposure points.</p>
                        </div>
                        <div className="flex gap-4 p-6 border border-slate-100 rounded-sm">
                            <CheckCircle className="text-green-600 shrink-0" size={24} />
                            <p className="text-sm font-bold uppercase leading-relaxed tracking-tight text-slate-700"><strong>24hr/7day Plan:</strong> Step-by-step instructions to harden your tenant immediately.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Pricing CTA Section */}
            <section className="py-24 px-4 bg-[#b91c1c] text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <Zap className="w-14 h-14 mx-auto mb-8 opacity-80" />
                    <h2 className="text-4xl md:text-4xl font-black mb-8 uppercase tracking-tighter italic leading-none">Ready to Audit?</h2>
                    <p className="text-xl md:text-2xl font-medium mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto">
                        One hour of expert oversight can prevent a six-figure HIPAA penalty. Serving Florida's Suncoast Clinics.
                    </p>
                    <button
                        className="bg-white text-[#b91c1c] hover:bg-slate-100 px-12 py-6 rounded-sm text-xl font-black shadow-2xl transition-all flex items-center justify-center gap-3 mx-auto uppercase tracking-tight"
                    >
                        BOOK YOUR SESSION NOW<br /> Only $199<ArrowRight size={24} />
                    </button>
                    <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">
                        Requires M365 Global Administrator access.
                    </p>
                </div>
            </section>

            {/* 9. Footer */}
            <footer className={`py-16 border-t transition-colors ${darkMode ? 'bg-[#0a1128] border-white/5 text-slate-500' : 'bg-white border-slate-200 text-slate-400'}`}>
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex items-center gap-4 opacity-40 grayscale">
                        <Shield size={32} />
                        <div className="flex flex-col">
                            <span className="text-xs font-black uppercase tracking-widest leading-none">{APP_NAME}</span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.4em] leading-none">{SUB_NAME}</span>
                        </div>
                    </div>

                    <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em]">
                        <a href="#" className="hover:text-[#c5a059] transition-colors">Risk Profile</a>
                        <a href="#" className="hover:text-[#c5a059] transition-colors">Privacy</a>
                        <a href="#" className="hover:text-[#c5a059] transition-colors">Agreement</a>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1">Tampa Bay • Palm Harbor • Clearwater</p>
                        <p className="text-[10px] font-medium">© 2026 TRANSWORLD MEDICAL MANAGEMENT, LLC.</p>
                    </div>
                </div>
            </footer>

            {/* 10. Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 ${darkMode
                            ? 'bg-[#c5a059] text-[#0a1128] hover:bg-[#b08d48]'
                            : 'bg-[#0a1128] text-white hover:bg-slate-800'
                        }`}
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} strokeWidth={3} />
                </button>
            )}
        </div>
    );
};

export default M365Audit;
