import React, { useState, useEffect } from 'react';

const HipaaHub = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0 });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const campaignEnforcementDate = new Date("Feb 16, 2026 00:00:00").getTime();
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = campaignEnforcementDate - now;

            if (difference < 0) {
                clearInterval(timer);
                return;
            }

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

            setTimeLeft({ d, h, m });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        setIsSubmitting(true);
    };

    return (
        <div className={`font-sans overflow-x-hidden ${darkMode ? 'bg-clinical-deep text-white' : 'bg-clinical-light text-clinical-deep'}`}>
            <style>{`
        .hero-gradient { background: radial-gradient(circle at top right, #112240 0%, #0A192F 100%); }
        .urgent-pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.05); opacity: 0.8; } 100% { transform: scale(1); opacity: 1; } }
        .strikethrough { position: relative; display: inline-block; }
        .strikethrough::after { content: ''; position: absolute; left: 0; top: 50%; width: 100%; height: 2px; background: #ef4444; transform: rotate(-10deg); }
        .glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1); }
      `}</style>

            {/* Urgency Banner */}
            <div className="bg-red-700 text-white py-3 px-4 text-center text-xs md:text-sm font-bold uppercase tracking-[0.2em] sticky top-0 z-50 shadow-md">
                <i className="fas fa-exclamation-triangle mr-2"></i> 2026 Training Now Due: Compliance Enforcement Active
            </div>

            {/* Navigation */}
            <nav className={`backdrop-blur-md border-b py-4 px-6 md:px-12 flex justify-between items-center z-40 relative ${darkMode ? 'bg-clinical-deep/95 border-white/5' : 'bg-white border-clinical-deep/10'}`}>
                <div className="flex items-center">
                    <img src="/media/TWMMMinLogo_200x200px.png" alt="TWMM Logo" className={`h-12 w-auto mr-4 ${darkMode ? 'brightness-100' : 'brightness-0'}`} />
                    <div className="leading-none">
                        <span className={`font-bold tracking-tighter text-base md:text-lg uppercase ${darkMode ? 'text-white' : 'text-clinical-deep'}`}>Transworld <span className="text-clinical-gold">Medical</span></span>
                        <span className={`text-[10px] md:text-xs block tracking-[0.3em] uppercase mt-1 ${darkMode ? 'text-clinical-white' : 'text-clinical-slate-light'}`}>Management</span>
                    </div>
                </div>

                <div className="flex items-center space-x-4 md:space-x-10">
                    <div className={`hidden lg:flex space-x-8 text-[11px] font-bold uppercase tracking-widest ${darkMode ? 'text-clinical-white' : 'text-clinical-slate-light'}`}>
                        <a href="https://twmm.transworldmm.com/pricing" className="hover:text-clinical-gold transition-colors">Annual Training</a>
                        <a href="#governance" className="hover:text-clinical-gold transition-colors">SRA & Governance</a>
                        <a href="https://twmm.transworldmm.com/pricing" className="bg-clinical-gold text-clinical-deep px-6 py-2.5 rounded-sm hover:bg-clinical-blue hover:text-white transition-all text-center">Enroll Now</a>
                    </div>

                    <button onClick={() => setDarkMode(!darkMode)} className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${darkMode ? 'border-white/10 hover:bg-white/5' : 'border-clinical-deep/10 hover:bg-clinical-light'}`}>
                        <i className={`fas ${darkMode ? 'fa-sun text-clinical-gold' : 'fa-moon text-clinical-deep'}`}></i>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className={`py-12 md:py-16 relative overflow-hidden ${darkMode ? 'hero-gradient text-white' : 'bg-clinical-blue text-white'}`}>
                <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className={`inline-block border px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6 ${darkMode ? 'bg-red-600/20 text-red-400 border-red-500/30' : 'bg-red-600/20 text-red-200 border-red-500/30'}`}>2026 MANDATE STATUS: ACTIVE</div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">2026 Annual HIPAA Training is Now Due.</h1>
                        <p className="text-lg md:text-xl text-clinical-white mb-10 max-w-xl font-medium leading-relaxed">Standardized, online training for all clinicians and support staff. Notice of Privacy Practice (NPP) required to be implemented by February 16, 2026.</p>

                        {/* The Offer Card */}
                        <div className={`border p-8 rounded-sm mb-10 inline-block shadow-2xl relative overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-white/5 border-white/10' : 'bg-white/10 border-white/10'}`}>
                            <div className="absolute top-0 right-0 bg-green-600 text-white px-5 py-1.5 text-[12px] font-bold uppercase tracking-widest">Early Bird Pricing - Use Code "HIPAA2026" for $100 off</div>
                            <div className="flex items-baseline space-x-4 mb-4">
                                <span className="text-clinical-gold text-6xl font-bold tracking-tighter">$599</span>
                                <span className="strikethrough text-clinical-white text-2xl font-bold">$699</span>
                            </div>
                            <p className="text-sm font-bold uppercase tracking-widest text-clinical-gold mb-6 italic">Base HIPAA Compliance Package</p>
                            <ul className={`text-xs md:text-sm space-y-4 font-semibold uppercase tracking-wider ${darkMode ? 'text-clinical-white' : 'text-white'}`}>
                                <li><i className="fas fa-users text-green-400 mr-3"></i> Includes 10 Seats ($25 for each additional)</li>
                                <li><i className="fas fa-file-signature text-green-400 mr-3"></i> Free NPP Template (Updated for Feb 16, 2026)</li>
                                <li><i className="fas fa-history text-green-400 mr-3"></i> 6-Year Records Retention Included</li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://twmm.transworldmm.com/pricing" className="bg-clinical-gold text-clinical-deep px-10 py-5 font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-white transition-all text-center shadow-lg urgent-pulse">Sign Up & Start Immediately</a>
                            <a href="#governance" className="border border-white/20 hover:bg-white/5 px-10 py-5 font-bold uppercase tracking-widest text-xs md:text-sm transition-all text-center">Inquire SRA & BAA</a>
                        </div>
                    </div>

                    {/* Countdown Sidebar */}
                    <div className="lg:col-span-5">
                        <div className={`p-10 rounded-sm shadow-2xl text-clinical-deep border-b-8 border-clinical-gold relative ${darkMode ? 'bg-white' : 'bg-white'}`}>
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-700 text-white px-5 py-1.5 text-xs font-bold uppercase tracking-widest shadow-md">Critical Enforcement</div>
                            <h3 className="font-serif font-bold text-3xl mb-2 text-center text-clinical-deep">NPP Redistribution</h3>
                            <p className="text-xs text-center text-clinical-slate-dark uppercase tracking-[0.2em] mb-8 font-bold">Deadline: February 16, 2026</p>

                            <div className="flex justify-around mb-10 border-y border-clinical-light py-8">
                                <div className="text-center"><span className="block text-4xl md:text-5xl font-bold text-clinical-deep">{timeLeft.d < 10 ? '0' + timeLeft.d : timeLeft.d}</span><span className="text-[11px] uppercase font-bold text-clinical-slate-dark mt-2 block">Days</span></div>
                                <div className="text-center font-bold text-4xl opacity-20 text-clinical-deep">:</div>
                                <div className="text-center"><span className="block text-4xl md:text-5xl font-bold text-clinical-deep">{timeLeft.h < 10 ? '0' + timeLeft.h : timeLeft.h}</span><span className="text-[11px] uppercase font-bold text-clinical-slate-dark mt-2 block">Hrs</span></div>
                                <div className="text-center font-bold text-4xl opacity-20 text-clinical-deep">:</div>
                                <div className="text-center"><span className="block text-4xl md:text-5xl font-bold text-clinical-deep">{timeLeft.m < 10 ? '0' + timeLeft.m : timeLeft.m}</span><span className="text-[11px] uppercase font-bold text-clinical-slate-dark mt-2 block">Min</span></div>
                            </div>

                            <div className="bg-clinical-light p-5 rounded-sm">
                                <h4 className="text-xs font-bold uppercase mb-3 text-clinical-deep tracking-wider">Required Action:</h4>
                                <p className="text-sm text-clinical-slate-dark leading-relaxed font-medium">Reproductive health privacy rules require an NPP redistribution to all active patients. Failure is an automatic audit trigger for OCR.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Training Bytes Section */}
            <section id="training" className={`py-24 ${darkMode ? 'bg-clinical-deep' : 'bg-white'}`}>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h4 className={`font-bold uppercase tracking-[0.4em] mb-4 text-xs ${darkMode ? 'text-clinical-gold' : 'text-clinical-gold-dark'}`}>Administrative Efficiency</h4>
                        <h3 className={`text-4xl font-serif font-bold ${darkMode ? 'text-white' : 'text-clinical-deep'}`}>Enterprise-Grade Staff Training</h3>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: 'fa-desktop', title: 'Online & Self-Paced', desc: 'Focused knowledge transfer followed by a rigorous quiz and instant certificate download.' },
                            { icon: 'fa-database', title: '6-Year Retention', desc: 'We retain all training records online for the legally mandated 6-year window for you.' },
                            { icon: 'fa-columns', title: 'Admin Dashboard', desc: 'Centralized portal to add trainees, monitor progress, and manage compliance proof.' },
                            { icon: 'fa-sync', title: 'Future Updates', desc: 'Free training updates for major regulatory changes and reduced new-hire training pricing.' }
                        ].map((item, idx) => (
                            <div key={idx} className={`p-10 border-t-2 border-clinical-gold shadow-sm ${darkMode ? 'bg-clinical-blue' : 'bg-clinical-light'}`}>
                                <i className={`fas ${item.icon} text-3xl mb-8 ${darkMode ? 'text-clinical-gold' : 'text-clinical-gold-dark'}`}></i>
                                <h5 className={`font-bold text-sm uppercase tracking-widest mb-4 ${darkMode ? 'text-clinical-gold' : 'text-clinical-deep'}`}>{item.title}</h5>
                                <p className={`text-sm leading-relaxed font-medium ${darkMode ? 'text-clinical-white' : 'text-clinical-slate-dark'}`}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Governance & Workflows */}
            <section id="governance" className="py-24 bg-clinical-blue text-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h4 className="text-clinical-gold font-bold uppercase tracking-[0.3em] text-sm mb-4">Risk Mitigation Reports</h4>
                            <h3 className="text-4xl font-serif font-bold text-clinical-gold mb-8 ">SRA & BAA Optimization.</h3>
                            <p className="text-lg text-clinical-white mb-12 leading-relaxed">Move beyond standard training into deep-dive clinical governance. Special pricing available for comprehensive risk analysis and vendor oversight.</p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors text-center sm:text-left">
                                    <h5 className="font-bold text-xs text-clinical-gold uppercase tracking-widest mb-4">Custom BAA Templates</h5>
                                    <p className="text-sm text-clinical-white">Liability-focused vendor contracts updated for 2026 regulations.</p>
                                </div>
                                <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors text-center sm:text-left">
                                    <h5 className="font-bold text-xs text-clinical-gold uppercase tracking-widest mb-4">Security Risk Analysis</h5>
                                    <p className="text-sm text-clinical-white">Mandatory annual SRA with full mitigation roadmap for clinicians.</p>
                                </div>
                            </div>
                        </div>

                        {/* Custom Workflows */}
                        <div className="bg-white text-clinical-deep p-10 md:p-14 shadow-2xl relative">
                            <div className="absolute top-0 right-0 bg-clinical-gold text-clinical-deep px-5 py-1.5 text-[10px] font-bold uppercase tracking-wider">Custom Policies</div>
                            <h4 className="font-serif font-bold text-3xl mb-10 text-clinical-deep">Clinical Workflow Design</h4>
                            <div className="space-y-10">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-sm bg-clinical-light flex items-center justify-center text-clinical-gold mr-5 shrink-0 font-bold shadow-inner">A</div>
                                    <div>
                                        <h5 className="font-bold text-sm uppercase tracking-widest mb-2 text-clinical-deep">Front Desk Manuals</h5>
                                        <p className="text-sm text-clinical-slate-dark font-medium leading-relaxed">Operational forms and standardized intake procedures.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-sm bg-clinical-light flex items-center justify-center text-clinical-gold mr-5 shrink-0 font-bold shadow-inner">B</div>
                                    <div>
                                        <h5 className="font-bold text-sm uppercase tracking-widest mb-2 text-clinical-deep">Onboarding Workflows</h5>
                                        <p className="text-sm text-clinical-slate-dark font-medium leading-relaxed">Seamless, compliant protocols for all new clinical hires.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-sm bg-clinical-light flex items-center justify-center text-clinical-gold mr-5 shrink-0 font-bold shadow-inner">C</div>
                                    <div>
                                        <h5 className="font-bold text-sm uppercase tracking-widest mb-2 text-clinical-deep">Offboarding Protocol</h5>
                                        <p className="text-sm text-clinical-slate-dark font-medium leading-relaxed">Secure termination forms and system access revocation flows.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA & Form */}
            <section id="contact" className={`py-24 ${darkMode ? 'bg-clinical-deep' : 'bg-clinical-light'}`}>
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h3 className={`text-4xl font-serif font-bold mb-4 ${darkMode ? 'text-white' : 'text-clinical-deep'}`}>Initialize Practice Enrollment</h3>
                        <p className={`text-lg max-w-xl mx-auto italic font-bold tracking-tight ${darkMode ? 'text-clinical-gold' : 'text-clinical-slate-dark'}`}>Locked-in pricing: $599 Base Package + $25 per additional seat.</p>
                    </div>

                    <div className={`shadow-2xl p-8 md:p-16 border-t-8 ${darkMode ? 'bg-clinical-blue border-clinical-gold' : 'bg-white border-clinical-deep'}`}>
                        <form onSubmit={handleSubmit} action="https://formspree.io/f/mbdjbkvv" method="POST" className="grid md:grid-cols-2 gap-10">
                            <div className="space-y-3">
                                <label className={`text-[11px] font-bold uppercase tracking-[0.2em] ${darkMode ? 'text-clinical-white' : 'text-clinical-slate-dark'}`}>Practitioner/Admin Name</label>
                                <input type="text" name="name" className={`w-full p-5 border-none outline-none text-base focus:ring-1 focus:ring-clinical-gold ${darkMode ? 'bg-clinical-deep text-white placeholder-slate-600' : 'bg-clinical-light placeholder-slate-300'}`} placeholder="Jane Smith, MD" required />
                            </div>
                            <div className="space-y-3">
                                <label className={`text-[11px] font-bold uppercase tracking-[0.2em] ${darkMode ? 'text-clinical-white' : 'text-clinical-slate-dark'}`}>Clinical Practice Name</label>
                                <input type="text" name="practice" className={`w-full p-5 border-none outline-none text-base focus:ring-1 focus:ring-clinical-gold ${darkMode ? 'bg-clinical-deep text-white placeholder-slate-600' : 'bg-clinical-light placeholder-slate-300'}`} placeholder="Main Street Medical" required />
                            </div>
                            <div className="space-y-3 md:col-span-2">
                                <label className={`text-[11px] font-bold uppercase tracking-[0.2em] ${darkMode ? 'text-clinical-white' : 'text-clinical-slate-dark'}`}>Professional Email</label>
                                <input type="email" name="email" className={`w-full p-5 border-none outline-none text-base focus:ring-1 focus:ring-clinical-gold ${darkMode ? 'bg-clinical-deep text-white placeholder-slate-600' : 'bg-clinical-light placeholder-slate-300'}`} placeholder="admin@practice.com" required />
                            </div>
                            <div className="space-y-3 md:col-span-2">
                                <label className={`text-[11px] font-bold uppercase tracking-[0.2em] ${darkMode ? 'text-clinical-white' : 'text-clinical-slate-dark'}`}>Enrollment Tier</label>
                                <select name="package" className={`w-full p-5 border-none outline-none text-base focus:ring-1 focus:ring-clinical-gold cursor-pointer ${darkMode ? 'bg-clinical-deep text-white' : 'bg-clinical-light'}`}>
                                    <option value="Base_599">$599 Base HIPAA Package (10 Seats + NPP Template)</option>
                                    <option value="SRA_Governance">SRA & Risk Mitigation Report Inquiry</option>
                                    <option value="Workflow_Custom">Custom Workflow & Policy Design Suite</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 pt-8 text-center">
                                <button type="submit" className={`w-full py-6 font-bold uppercase tracking-[0.3em] text-sm md:text-base transition-all shadow-xl urgent-pulse ${darkMode ? 'bg-clinical-gold text-clinical-deep hover:bg-white hover:text-clinical-deep' : 'bg-clinical-deep text-white hover:bg-clinical-blue'} ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}>
                                    {isSubmitting ? <span><i className="fas fa-spinner fa-spin mr-3"></i> PROCESSING ENROLLMENT...</span> : 'Purchase & Initialize Dashboard'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-clinical-deep py-20 text-white border-t border-white/5">
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
                    <div className="text-center md:text-left">
                        <p className="text-xs uppercase tracking-[0.3em] text-clinical-white mb-3">Transworld Medical Management, LLC.</p>
                        <p className="text-xs uppercase tracking-widest text-clinical-white">Palm Harbor, Florida | Tampa Bay Region</p>
                    </div>

                    <div className="text-center md:text-left space-y-4">
                        <h5 className="text-clinical-gold font-bold uppercase tracking-widest text-xs">Clinical Resources</h5>
                        <ul className="text-clinical-slate text-xs space-y-2 uppercase tracking-widest">
                            <li><a href="#training" className="hover:text-white transition-colors">Annual Training</a></li>
                            <li><a href="#governance" className="hover:text-white transition-colors">Risk Mitigation</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Support Hub</a></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left space-y-4">
                        <h5 className="text-clinical-gold font-bold uppercase tracking-widest text-xs">Legal Governance</h5>
                        <ul className="text-clinical-slate text-xs space-y-2 uppercase tracking-widest">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HipaaHub;
