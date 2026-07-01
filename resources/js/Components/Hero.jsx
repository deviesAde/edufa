import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
// import ApplicationLogo from '@/Components/ApplicationLogo';
import { AnimatedText } from '@/Components/ui/animated-underline-text-one';
// import { BlurTextEffect } from '@/Components/ui/blur-text-effect';
import FloatingShapes from '@/Components/FloatingShapes';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ClipboardCheck, HeartPulse, GraduationCap, Baby, Users, School, Briefcase, ChevronDown } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);
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

const typewriterWords = [
    "Asesmen Psikologi", 
    "Pelatihan", 
    "Konseling", 
    "Terapi", 
    "PAUD", 
    "Pendampingan ABK Di Sekolah", 
    "Balai Latihan Kerja & Kehidupan"
];

export default function Hero() {
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showServicesMenu, setShowServicesMenu] = useState(false);

    const waMessage = encodeURIComponent("Halo EDUfa, saya ingin mendapatkan informasi");
    const waAdmins = [
        { label: "Admin 1", phone: "0811-1116-0600", waNumber: "6281111160600" },
        { label: "Admin 2", phone: "0878-3390-0800", waNumber: "6287833900800" },
    ];

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
                    <div className="mx-auto max-w-6xl pointer-events-auto text-center flex flex-col items-center">
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
                                underlineClassName="hidden"
                                className="items-center justify-center"
                            />
                            
                            <div className="mt-8 max-w-5xl mx-auto px-4">
                                <div className="text-[clamp(1rem,2.2vw,1.6rem)] font-medium leading-relaxed text-blue-50 drop-shadow-md flex flex-col items-center justify-center gap-1 sm:gap-2">
                                    <span>Mendampingi Individu Berkebutuhan Khusus melalui</span>
                                    <span className="inline-grid grid-cols-1 grid-rows-1 items-center">
                                        <span className="invisible row-start-1 col-start-1 pointer-events-none font-black whitespace-pre text-center">
                                            {typewriterWords.reduce((a, b) => a.length > b.length ? a : b)}
                                        </span>
                                        <Typewriter
                                            text={typewriterWords}
                                            speed={70}
                                            className="text-edufa-yellow font-black row-start-1 col-start-1 text-center"
                                            waitTime={2000}
                                            deleteSpeed={40}
                                            showCursor={false}
                                        />
                                    </span>
                                </div>
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

            {/* WhatsApp Modal Using Portal */}
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
                                {/* Decorative background */}
                                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-24 h-24 bg-edufa-yellow/10 rounded-full blur-xl"></div>

                                <button 
                                    onClick={() => setShowEmailModal(false)}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>

                                <div className="text-center">
                                    <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                                        <WhatsAppIcon className="w-9 h-9 text-green-600" />
                                    </div>
                                    <p className="text-gray-500 mb-8 font-medium">Hubungi admin EDUfa Centre via WhatsApp</p>

                                    <div className="space-y-4 mb-2">
                                        {waAdmins.map((admin) => (
                                            <a
                                                key={admin.label}
                                                href={`https://wa.me/${admin.waNumber}?text=${waMessage}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 hover:border-green-400 hover:bg-green-50 transition-all group"
                                            >
                                                <div className="text-left">
                                                    <span className="text-xs font-black text-green-600 uppercase tracking-widest">{admin.label}</span>
                                                    <p className="text-lg font-bold text-gray-700 font-mono">{admin.phone}</p>
                                                </div>
                                                <div className="p-3 bg-[#25D366] rounded-xl text-white group-hover:scale-110 transition-transform">
                                                    <WhatsAppIcon className="w-6 h-6" />
                                                </div>
                                            </a>
                                        ))}
                                    </div>

                                    <p className="text-xs text-gray-400 mt-6">
Pesan otomatis: <span className="italic">"Halo EDUfa, saya ingin mendapatkan informasi"</span>
                                    </p>
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

