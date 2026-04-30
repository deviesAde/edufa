import ApplicationLogo from '@/Components/ApplicationLogo';
import { AnimatedText } from '@/Components/ui/animated-underline-text-one';
import { BlurTextEffect } from '@/Components/ui/blur-text-effect';
import FloatingShapes from '@/Components/FloatingShapes';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 min-h-[85vh] flex items-center">
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
            <div className="absolute inset-0 bg-edufa-yellow/60 mix-blend-multiply -z-10"></div>
            
            {/* Grid Pattern Layer */}
            <div 
                className="absolute inset-0 -z-10 opacity-[0.15]"
                style={{
                    backgroundImage: `linear-gradient(to right, #0f59bc 1px, transparent 1px), linear-gradient(to bottom, #0f59bc 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-edufa-yellow/40 -z-10"></div>
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/30 -z-10"></div>
            <div className="absolute inset-0 bg-edufa-yellow/10 -z-10"></div>

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:px-8 relative z-10 w-full">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl">
                    <div className="flex items-center space-x-6 mb-8">
                        <span className="rounded-full bg-edufa-blue px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-edufa-blue/30">
                            EDUFA MELAYANI DENGAN HATI 
                        </span>
                        <span className="h-0.5 w-12 bg-edufa-yellow animate-width-grow"></span>
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest drop-shadow-sm">
                            Est. 2012
                        </span>
                    </div>
                    
                    <div className="space-y-8">
                        <AnimatedText
                            text="Biro Psikologi & Pusat Layanan Terapi EDUfa"
                            textClassName="text-5xl font-black tracking-tight text-white sm:text-7xl text-left leading-[1.1] drop-shadow-sm"
                            underlineClassName="text-edufa-yellow w-[105%] -left-[2.5%] h-4 sm:h-8"
                            className="items-start justify-start"
                        />
                        
                        <div className="space-y-6">
                            <p className="text-2xl sm:text-3xl font-black text-white leading-tight drop-shadow-md">
                                <BlurTextEffect>
                                    Menumbuhkan Harapan, Meraih Masa Depan Terpercaya.
                                </BlurTextEffect>
                            </p>
                            <p className="text-lg sm:text-xl font-medium leading-relaxed text-blue-50/90 max-w-2xl drop-shadow-sm border-l-4 border-edufa-blue pl-6">
                                Kami hadir memberikan solusi edukasi dan pengembangan potensi individu yang dilakukan secara profesional dan terencana.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center gap-8">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05, rotate: -1 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative overflow-hidden rounded-full bg-edufa-blue px-12 py-5 text-sm font-black text-white shadow-2xl shadow-edufa-blue/40 transition-all bg-gradient-to-r from-edufa-blue to-blue-700"
                        >
                            <span className="relative z-10">Mulai Konsultasi</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></div>
                        </motion.a>
                        
                        <motion.a 
                            href="#" 
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 text-sm font-black text-white group bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/40 transition-all border border-white/30 shadow-xl shadow-black/5"
                        >
                            <span className="relative">
                                Cari Tahu Lebih Lanjut
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                            </span>
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    );
}
