import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FloatingWhatsApp Component
 * A highly visible, eye-catching floating WhatsApp button with an interactive-looking chat preview.
 */
export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);
    const [showChat, setShowChat] = useState(false);
    
    const waLink = "https://wa.me/6281234567890?text=Halo%20EDUfa,%20saya%20ingin%20konsultasi%20dan%20daftar";

    useEffect(() => {
        // Show after a short delay
        const timer = setTimeout(() => {
            setIsVisible(true);
            // Auto-open chat after another short delay to grab attention
            setTimeout(() => setShowChat(true), 1200);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-6 pointer-events-none">
                    {/* Interactive Chat Preview */}
                    <AnimatePresence>
                        {showChat && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                className="w-80 sm:w-96 bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(34,197,94,0.3)] border border-gray-100 overflow-hidden pointer-events-auto flex flex-col"
                            >
                                {/* Chat Header */}
                                <div className="bg-green-600 p-5 flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center border border-white/30 backdrop-blur-sm">
                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-green-600 rounded-full animate-pulse"></span>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-black text-white leading-tight">Admin EDUfa Center</h4>
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-300"></span>
                                            <p className="text-[11px] text-green-100 font-bold uppercase tracking-wider">Online Sekarang</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShowChat(false);
                                        }}
                                        className="ml-auto w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all shadow-inner"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Chat Body */}
                                <div className="p-6 bg-[#f0ede9] min-h-[140px] flex flex-col gap-4 relative">
                                    {/* Agent Message */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: -10, y: 10 }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                                        className="bg-white p-4 rounded-[1.5rem] rounded-tl-none shadow-md max-w-[90%] relative group"
                                    >
                                        <p className="text-sm text-gray-800 font-bold leading-relaxed">
                                            Halo Ayah/Bunda! 👋 <br />
                                            Ada yang bisa kami bantu seputar layanan tumbuh kembang anak di EDUfa?
                                        </p>
                                        <div className="flex items-center justify-end gap-1 mt-2">
                                            <span className="text-[10px] text-gray-400 font-medium">09:41</span>
                                            <svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                                        </div>
                                    </motion.div>

                                    {/* Fake User Input / Placeholder */}
                                    <div className="mt-4 pt-4 border-t border-gray-300/30">
                                        <a 
                                            href={waLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/input block w-full bg-white rounded-full px-5 py-3 text-sm text-gray-400 italic shadow-inner border border-gray-100 hover:text-gray-600 hover:border-green-200 transition-all"
                                        >
                                            <span className="flex items-center justify-between">
                                                Ketik pesan di sini...
                                                <svg className="w-5 h-5 text-gray-300 group-hover/input:text-green-500 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                {/* Bottom Link */}
                                <a 
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white hover:bg-green-50 text-center transition-all border-t border-gray-100 group/footer"
                                >
                                    <span className="text-sm font-black text-green-600 uppercase tracking-[0.15em] flex items-center justify-center gap-3">
                                        HUBUNGI WHATSAPP KAMI
                                        <motion.svg 
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                            className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M5 12h16" />
                                        </motion.svg>
                                    </span>
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Bottom Container: Text + Button */}
                    <div className="flex items-center gap-5">
                        {/* Idle Tooltip Text - BIGGER & MORE PROMINENT */}
                        <AnimatePresence>
                            {!showChat && (
                                <motion.div
                                    initial={{ opacity: 0, x: 30, scale: 0.8 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 30, scale: 0.8 }}
                                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                                    className="relative group pointer-events-auto"
                                >
                                    {/* Ambient Glow */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-edufa-blue rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                    
                                    <button 
                                        onClick={() => setShowChat(true)}
                                        className="relative bg-white px-8 py-4 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border-2 border-green-500/10 flex items-center gap-3 transition-all hover:scale-105 hover:border-green-500 active:scale-95"
                                    >
                                        <span className="flex h-3 w-3 relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                        </span>
                                        <p className="text-base sm:text-lg font-black text-gray-800 whitespace-nowrap tracking-tight">
                                            Ingin mulai konsultasi sekarang?
                                        </p>
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Main Button Container */}
                        <div className="relative pointer-events-auto">
                            {/* Notification Badge */}
                            {!showChat && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute -top-1 -right-1 z-10"
                                >
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-[12px] font-black text-white shadow-xl ring-4 ring-white animate-bounce">1</span>
                                </motion.div>
                            )}

                            {/* Main Button - LARGER */}
                            <motion.button
                                onClick={() => setShowChat(!showChat)}
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="group relative flex h-20 w-20 items-center justify-center rounded-[2rem] bg-green-500 shadow-[0_15px_40px_-10px_rgba(34,197,94,0.5)] transition-all ring-4 ring-white/80 backdrop-blur-sm"
                            >
                                {/* Aggressive Pulse Effect */}
                                <span className="absolute inset-0 rounded-[2rem] bg-green-500 animate-[ping_2s_linear_infinite] opacity-30"></span>
                                <span className="absolute -inset-2 rounded-[2.5rem] border-2 border-green-500/20 animate-pulse"></span>
                                
                                {/* Icon Toggle */}
                                <AnimatePresence mode="wait">
                                    {showChat ? (
                                        <motion.svg 
                                            key="close"
                                            initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                            exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                                            className="h-9 w-9 text-white" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                                        </motion.svg>
                                    ) : (
                                        <motion.svg 
                                            key="wa"
                                            initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
                                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                            exit={{ opacity: 0, rotate: -180, scale: 0.5 }}
                                            className="h-11 w-11 text-white" 
                                            fill="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.658 1.43 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </motion.svg>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}
