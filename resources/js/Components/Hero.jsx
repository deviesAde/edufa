import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
// import ApplicationLogo from '@/Components/ApplicationLogo';
import { AnimatedText } from '@/Components/ui/animated-underline-text-one';
// import { BlurTextEffect } from '@/Components/ui/blur-text-effect';
import FloatingShapes from '@/Components/FloatingShapes';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Copy, Check, ClipboardCheck, HeartPulse, GraduationCap, Baby, Users, School, Briefcase, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { BlurFade } from '@/Components/ui/blur-fade';
import { Link } from '@inertiajs/react';
import { Typewriter } from '@/Components/ui/typewriter';

const serviceLinks = [
    { title: "Asesmen Psikologi", routeName: 'pelayanan.asesmen', icon: <ClipboardCheck size={16} /> },
    { title: "Terapi", routeName: 'pelayanan.terapi', icon: <HeartPulse size={16} /> },
    { title: "Pelatihan", routeName: 'pelayanan.pelatihan', icon: <GraduationCap size={16} /> },
    { title: "PAUD EDUfa Kids", routeName: 'pelayanan.paud', icon: <Baby size={16} /> },
    { title: "Konseling", routeName: 'pelayanan.konseling', icon: <Users size={16} /> },
    { title: "Pendampingan ABK", routeName: 'pelayanan.pendampingan', icon: <School size={16} /> },
    { title: "Balai Latihan Kerja", routeName: 'pelayanan.balai', icon: <Briefcase size={16} /> },
];

const typewriterWords = ["asesmen", "terapi", "program pembelajaran"];

export default function Hero() {
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showServicesMenu, setShowServicesMenu] = useState(false);
    const [copied, setCopied] = useState(false);
    const email = "admin@edufa.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <div className="relative min-h-[70svh] flex items-center pointer-events-none">
                
                {/* Background Layer (z-0) - Stays behind ServiceCards */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-edufa-blue -z-30"></div>
                    <FloatingShapes />
                    {/* Background Video */}
                    <video 
                        className="absolute inset-0 w-full h-full object-cover -z-20 opacity-60"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        preload="metadata"
                    >
                        <source src="/hero/edufa.webm" type="video/webm" />
                    </video>

                    {/* Branded Overlays */}
                    <div className="absolute inset-0 bg-edufa-blue/60 mix-blend-multiply -z-10"></div>
                    
                    {/* Grid Pattern Layer */}
                    <div 
                        className="absolute inset-0 -z-10 opacity-[0.15]"
                        style={{
                            backgroundImage: `linear-gradient(to right, #1A1953 1px, transparent 1px), linear-gradient(to bottom, #1A1953 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    ></div>

                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-edufa-yellow/40 -z-10"></div>
                    <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/30 -z-10"></div>
                    <div className="absolute inset-0 bg-edufa-blue/20 -z-10"></div>
                </div>

                {/* Content Layer (z-50) - Explicitly flex-col for perfect centering */}
                <div className="mx-auto max-w-7xl px-6 py-[clamp(4rem,12vh,9rem)] flex flex-col lg:px-8 relative z-50 w-full pointer-events-none items-center justify-center">
                    <div className="mx-auto max-w-5xl pointer-events-auto text-center flex flex-col items-center">
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
                            <span className="rounded-full bg-edufa-blue px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-edufa-blue/30 border border-white/10">
                                Growing Together, Improving Better
                            </span>
                            <span className="text-sm font-bold text-white uppercase tracking-widest drop-shadow-sm opacity-60">
                                Est. 2012
                            </span>
                        </div>
                        
                        <div className="space-y-6 sm:space-y-8">
                            <AnimatedText
                                text={<>Biro Psikologi<br /><span className="whitespace-nowrap">& Pusat Layanan Terapi EDUfa</span></>}
                                textClassName="text-[clamp(1.75rem,7vw,6.5rem)] font-black tracking-tight text-white leading-[1.1] drop-shadow-md text-center"
                                underlineClassName="text-edufa-yellow w-[105%] -left-[2.5%] h-[clamp(0.75rem,3vw,2rem)]"
                                className="items-center justify-center"
                            />
                            
                            <div className="mt-8 max-w-4xl mx-auto px-4">
                                <p className="text-[clamp(1rem,2.2vw,1.6rem)] font-medium leading-relaxed text-blue-50 drop-shadow-md">
                                    Mendampingi anak, remaja, dan dewasa dengan kebutuhan khusus melalui{' '}
                                    <Typewriter
                                        text={typewriterWords}
                                        speed={70}
                                        className="text-edufa-yellow font-black"
                                        waitTime={2000}
                                        deleteSpeed={40}
                                        showCursor={false}
                                    />
                                </p>
                            </div>
                        </div>

                        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full sm:w-auto">
                            <motion.button
                                onClick={() => setShowEmailModal(true)}
                                whileHover={{ scale: 1.05, rotate: -1 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative overflow-hidden rounded-full bg-edufa-yellow px-14 py-5 text-base font-black text-edufa-blue shadow-2xl shadow-edufa-yellow/40 transition-all w-full sm:w-auto"
                            >
                                <span className="relative z-10">Hubungi Kami</span>
                                <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.button>

                            <div className="relative w-full sm:w-auto">
                                <motion.button 
                                    onClick={() => setShowServicesMenu(!showServicesMenu)}
                                    whileHover={{ scale: 1.05, rotate: 1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-center gap-4 text-base font-black text-white group bg-white/20 backdrop-blur-sm px-10 py-4 rounded-full hover:bg-white/40 transition-all border border-white/30 shadow-xl shadow-black/5 w-full sm:w-auto"
                                >
                                    <span className="relative">
                                        Cari Tahu Lebih Lanjut
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                                    </span>
                                    <motion.div animate={{ rotate: showServicesMenu ? 180 : 0 }}>
                                        <ChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </motion.button>

                                <AnimatePresence>
                                    {showServicesMenu && (
                                        <>
                                            {/* Backdrop */}
                                            <motion.div 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150]" 
                                                onClick={() => setShowServicesMenu(false)}
                                            />
                                            {/* Popup — centered on mobile, dropdown on desktop */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                                                transition={{ type: "spring", damping: 28, stiffness: 320 }}
                                                className={
                                                    // Mobile: centered modal
                                                    // Desktop: dropdown below the button
                                                    "lg:absolute " +
                                                    "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " +
                                                    "lg:top-full lg:left-0 lg:translate-x-0 lg:translate-y-0 lg:mt-4 " +
                                                    "w-[90vw] max-w-[340px] lg:w-72 " +
                                                    "max-h-[70vh] lg:max-h-none " +
                                                    "bg-white rounded-2xl shadow-2xl overflow-hidden z-[200] border border-gray-100 flex flex-col"
                                                }
                                            >
                                                {/* Compact Header */}
                                                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-edufa-yellow"></div>
                                                        <h4 className="font-black text-edufa-blue uppercase tracking-[0.15em] text-[11px]">Pilih Layanan</h4>
                                                    </div>
                                                    <button 
                                                        onClick={() => setShowServicesMenu(false)} 
                                                        className="p-1.5 bg-gray-50 hover:bg-gray-100 text-gray-400 rounded-full transition-all active:scale-90"
                                                        aria-label="Close menu"
                                                    >
                                                        <X size={14} strokeWidth={2.5} />
                                                    </button>
                                                </div>

                                                {/* Scrollable list */}
                                                <div className="flex-1 overflow-y-auto no-scrollbar">
                                                    {serviceLinks.map((item, idx) => (
                                                        <Link 
                                                            key={idx}
                                                            href={route(item.routeName)}
                                                            onClick={() => setShowServicesMenu(false)}
                                                            className="flex items-center gap-3 px-4 py-3.5 hover:bg-edufa-blue/5 active:bg-edufa-blue/10 text-gray-700 hover:text-edufa-blue font-semibold text-[13px] transition-colors border-b border-gray-50 last:border-0 group/link"
                                                        >
                                                            <span className="p-2 rounded-xl bg-gray-50 text-gray-400 group-hover/link:bg-edufa-blue/10 group-hover/link:text-edufa-blue transition-colors flex-shrink-0">
                                                                {React.cloneElement(item.icon, { size: 16, strokeWidth: 2.5 })}
                                                            </span>
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Email Modal Using Portal */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {showEmailModal && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowEmailModal(false)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
                            >
                                {/* Decorative background for modal */}
                                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-32 h-32 bg-edufa-blue/10 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-24 h-24 bg-edufa-yellow/10 rounded-full blur-xl"></div>

                                <button 
                                    onClick={() => setShowEmailModal(false)}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>

                                <div className="text-center">
                                    <div className="mx-auto w-16 h-16 bg-edufa-blue/10 rounded-2xl flex items-center justify-center mb-6">
                                        <Mail className="w-8 h-8 text-edufa-blue" />
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">Kirim Pesan</h3>
                                    <p className="text-gray-500 mb-8 font-medium">Hubungi kami melalui email resmi EDUfa Centre</p>

                                    <div className="relative group mb-8">
                                        <div className="flex items-center justify-between bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 transition-all group-hover:border-edufa-blue/20">
                                            <span className="text-lg font-bold text-gray-700 font-mono">{email}</span>
                                            <button 
                                                onClick={handleCopy}
                                                className="p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 text-edufa-blue"
                                            >
                                                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                                            </button>
                                        </div>
                                        <AnimatePresence>
                                            {copied && (
                                                <motion.span 
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-green-500 uppercase tracking-widest"
                                                >
                                                    Berhasil Disalin!
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <a 
                                        href={`mailto:${email}`}
                                        className="block w-full py-4 bg-edufa-blue text-white font-black rounded-2xl shadow-xl shadow-edufa-blue/20 hover:bg-blue-800 transition-all active:scale-[0.98] uppercase tracking-widest text-sm"
                                    >
                                        Buka Aplikasi Email
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}

