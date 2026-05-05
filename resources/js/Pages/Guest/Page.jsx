import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import ServiceCards from '@/Components/ServiceCards';
import ApplicationLogo from '@/Components/ApplicationLogo';
import BranchSection from '@/Components/BranchSection';
import FloatingShapes from '@/Components/FloatingShapes';
import SEO from '@/Components/SEO';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const RevealText = ({ text, className = "", delay = 0 }) => {
    const words = text.split(" ");
    return (
        <span className={`inline-block ${className}`}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: delay + i * 0.1,
                        ease: [0.2, 0.65, 0.3, 0.9]
                    }}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
};

export default function Page({ branches }) {
    // const schema = {
    //     "@context": "https://schema.org",
    //     "@type": "LocalBusiness",
    //     "name": "EDUfa Centre",
    //     "image": "https://edufa.com/hero/logo.png",
    //     "@id": "https://edufa.com",
    //     "url": "https://edufa.com",
    //     "address": {
    //         "@type": "PostalAddress",
    //         "addressLocality": "Bandung",
    //         "addressRegion": "Jawa Barat",
    //         "addressCountry": "ID"
    //     }
    // };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
            <SEO
                title="Beranda"
                description="EDUfa Centre adalah Biro Psikologi & Pusat Layanan Terapi di Bandung. Kami melayani asesmen psikologi, pelatihan, konseling, dan terapi ABK."
                // schema={schema}
            />

            <Header />

            <main>
                <Hero />

                <ServiceCards />


                <div className="bg-white py-24 sm:py-32 overflow-hidden relative">
                    {/* Artistic Background Elements */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {/* Grid Pattern */}
                        <div 
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage: `radial-gradient(#1A1953 0.5px, transparent 0.5px)`,
                                backgroundSize: '24px 24px'
                            }}
                        ></div>
                        
                        {/* Colorful Blobs */}
                        <motion.div 
                            animate={{ 
                                x: [0, 50, 0],
                                y: [0, 30, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-24 -left-24 w-96 h-96 bg-edufa-blue/10 blur-[100px] rounded-full"
                        ></motion.div>
                        <motion.div 
                            animate={{ 
                                x: [0, -40, 0],
                                y: [0, 60, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 -right-24 w-80 h-80 bg-edufa-yellow/10 blur-[90px] rounded-full"
                        ></motion.div>
                        <motion.div 
                            animate={{ 
                                x: [0, 30, 0],
                                y: [0, -50, 0]
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-24 left-1/3 w-[500px] h-[500px] bg-edufa-green/5 blur-[120px] rounded-full"
                        ></motion.div>
                        <motion.div 
                            animate={{ 
                                scale: [1, 1.15, 1],
                                rotate: [0, 45, 0]
                            }}
                            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/4 left-1/2 w-72 h-72 bg-edufa-red/5 blur-[80px] rounded-full"
                        ></motion.div>

                        {/* Floating Shapes */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute top-40 left-[10%] w-12 h-12 border-2 border-edufa-blue/10 rounded-xl"
                        ></motion.div>
                        <motion.div 
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-20 right-[15%] w-8 h-8 bg-edufa-yellow/10 rounded-full"
                        ></motion.div>
                    </div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        {/* Title and Intro */}
                        <div className="mx-auto max-w-3xl text-center mb-20">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-sm font-black tracking-[0.3em] text-edufa-blue uppercase mb-6 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-edufa-blue/10 to-transparent border border-edufa-blue/10 shadow-sm backdrop-blur-sm"
                            >
                                <span className="w-2 h-2 rounded-full bg-edufa-blue animate-ping"></span>
                                Tentang Kami
                            </motion.h2>
                            <h3 className="text-[clamp(2rem,6vw,3.5rem)] font-black tracking-tighter text-gray-900 mb-8">
                                <RevealText text="TENTANG EDUfa Centre" />
                            </h3>
                            <p className="text-xl md:text-2xl leading-relaxed text-gray-600 font-medium">
                                <RevealText 
                                    text="Yayasan EDUfa Salamanca dan Biro Psikologi EDUfa Counseling berdiri pada tanggal" 
                                    delay={0.5} 
                                />
                                <span className="text-edufa-blue font-bold px-1 relative inline-block mx-2">
                                    <span className="relative z-10">31 Mei 2012</span>
                                    <motion.span 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.5, duration: 0.8 }}
                                        className="absolute bottom-1 left-0 h-3 bg-edufa-yellow/40 -z-10 rounded-sm"
                                    ></motion.span>
                                </span> 
                                <RevealText text="di Bandung." delay={1.8} />
                            </p>
                        </div>

                        {/* Two Pillars Setup */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 relative">
                            {/* Connector line for large screens */}
                            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

                            {/* Salamanca Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -15, scale: 1.02, rotate: -1 }}
                                transition={{ 
                                    initial: { duration: 0.8 },
                                    whileHover: { type: "spring", stiffness: 300, damping: 15 }
                                }}
                                className="bg-white rounded-[2.5rem] p-[clamp(1.5rem,5vw,2.5rem)] shadow-2xl shadow-edufa-blue/10 ring-1 ring-gray-900/5 group relative overflow-hidden flex flex-col justify-between border-b-8 border-edufa-blue"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-edufa-blue/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                    <svg className="w-32 h-32 text-edufa-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z" /></svg>
                                </div>
                                <div className="relative z-10 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-edufa-blue/10 flex items-center justify-center mb-8">
                                        <svg className="w-8 h-8 text-edufa-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">
                                        Yayasan EDUfa Salamanca
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Fokus pada menyediakan <span className="font-bold text-edufa-blue">pendidikan inklusi</span> untuk semua anak.
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-gray-100 relative z-10">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Nomor Akte Yayasan</p>
                                    <p className="text-sm font-mono text-edufa-blue font-bold">AHU-AH.01.06-0040306</p>
                                </div>
                            </motion.div>

                            {/* Counseling Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -15, scale: 1.02, rotate: 1 }}
                                transition={{ 
                                    initial: { duration: 0.8 },
                                    whileHover: { type: "spring", stiffness: 300, damping: 15 }
                                }}
                                className="bg-white rounded-[2.5rem] p-[clamp(1.5rem,5vw,2.5rem)] shadow-2xl shadow-edufa-yellow/10 ring-1 ring-gray-900/5 group relative overflow-hidden flex flex-col justify-between border-b-8 border-edufa-yellow"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-edufa-yellow/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                    <svg className="w-32 h-32 text-edufa-yellow" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                                </div>
                                <div className="relative z-10 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-edufa-yellow/10 flex items-center justify-center mb-8">
                                        <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">
                                        Biro Psikologi EDUfa Counseling
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Fokus pada membantu <span className="font-bold text-[#ffd900]">mengembangkan potensi</span> anak / peserta didik / tenaga kerja secara optimal.
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-gray-100 relative z-10">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">SIPP No</p>
                                    <p className="text-sm font-mono text-[#ffd900] font-bold">201220017-2025-04-0720</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Leader Section */}
                        <div className="mt-32 max-w-5xl mx-auto px-4 sm:px-6">
                            <div className="text-center mb-16">
                                <motion.h3 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-2xl sm:text-3xl font-black text-edufa-blue uppercase tracking-[0.2em]"
                                >
                                    Pimpinan Kami
                                </motion.h3>
                                <div className="mt-4 h-1 w-20 bg-edufa-yellow mx-auto rounded-full"></div>
                            </div>
                            {[
                                {
                                    name: "Dr. Ernie C. Siregar, S.Psi., M.Pd., Psikolog",
                                    image: "/penanggung/ernie-siregar.png",
                                    role: "Pimpinan sekaligus Psikolog di Biro Psikologi dan Pusat Layanan Terapi EDUfa"
                                }
                            ].map((leader, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="group relative"
                                >
                                    <div className="relative flex flex-col items-center md:flex-row gap-10 lg:gap-16 bg-edufa-blue rounded-[3.5rem] p-[clamp(1.5rem,8vw,4rem)] shadow-3xl shadow-edufa-blue/40 overflow-hidden ring-1 ring-white/10 transition-all duration-500 hover:ring-white/20 hover:shadow-edufa-blue/30">
                                        {/* Background Decor */}
                                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[80px] -mr-24 -mt-24 group-hover:bg-white/20 transition-all duration-700"></div>
                                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-edufa-yellow/10 blur-[60px] -ml-16 -mb-16"></div>
                                        
                                        <div className="relative flex-none">
                                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2rem] overflow-hidden ring-8 ring-white/5 shadow-2xl relative z-10">
                                                <img 
                                                    src={leader.image} 
                                                    alt={leader.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-115"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </div>
                                            {/* Decorative aura behind image */}
                                            <div className="absolute -inset-6 bg-gradient-to-tr from-edufa-blue/30 via-transparent to-edufa-yellow/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-0"></div>
                                        </div>

                                        <div className="flex-1 text-center md:text-left relative z-10">
                                            <div className="mb-4 flex justify-center md:justify-start">
                                                <span className="inline-flex items-center text-[10px] font-black text-edufa-yellow uppercase tracking-[0.25em] bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-edufa-yellow mr-2 animate-pulse"></span>
                                                    Leadership
                                                </span>
                                            </div>
                                            <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3 leading-tight group-hover:text-edufa-yellow transition-colors duration-300">
                                                {leader.name}
                                            </h4>
                                            <div className="h-px w-12 bg-gradient-to-r from-white/30 to-transparent mb-4 mx-auto md:mx-0"></div>
                                            <p className="text-xs sm:text-[13px] font-bold text-blue-100/80 leading-relaxed uppercase tracking-wider max-w-[280px] mx-auto md:mx-0">
                                                {leader.role}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* KEUNGGULAN KAMI */}
                <div className="bg-edufa-blue py-24 sm:py-32 relative overflow-hidden">
                    {/* Artistic Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#grid)" />
                        </svg>
                    </div>
                    <div className="absolute -bottom-1/4 left-1/4 w-full max-w-5xl h-[600px] bg-edufa-yellow/20 blur-[150px] rounded-full pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full pointer-events-none"></div>
                    
                    {/* Floating Decorative Shapes */}
                    <motion.div 
                        animate={{ y: [0, -30, 0], rotate: [0, 90, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute top-20 right-[5%] w-24 h-24 border border-white/20 rounded-full hidden lg:block"
                    />
                    <motion.div 
                        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-40 left-[5%] w-16 h-16 bg-edufa-yellow/10 rounded-2xl hidden lg:block"
                    />

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                            {/* Left Content: More Informative & Bold */}
                            <div className="lg:col-span-5 relative">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-edufa-yellow text-xs font-black uppercase tracking-[0.3em] mb-6 shadow-xl backdrop-blur-sm"
                                >
                                    <span className="w-2 h-2 rounded-full bg-edufa-yellow animate-ping"></span>
                                    Alasan Memilih Kami
                                </motion.div>

                                <h3 className="text-[clamp(2.5rem,8vw,4.5rem)] font-black tracking-tighter text-white mb-10 leading-[1] uppercase">
                                    <RevealText text="KEUNGGULAN" /> <br />
                                    <span className="text-edufa-yellow"><RevealText text="KAMI" delay={0.3} /></span>
                                </h3>

                                <div className="relative space-y-8">
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                        className="text-lg md:text-xl leading-relaxed text-blue-50 font-medium border-l-4 border-edufa-yellow pl-6 text-justify"
                                    >
                                        <p>
                                            Menghadirkan layanan yang <strong className="text-edufa-yellow">lengkap, terintegrasi, dan berkelanjutan</strong> dari proses asesmen awal hingga program kemandirian.
                                        </p>
                                    </motion.div>
                                    
                                    <motion.p 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 }}
                                        className="text-base text-blue-100/80 leading-relaxed font-medium text-justify"
                                    >
                                        Didukung tenaga profesional yang kredibel, pendekatan terstruktur, dan jaringan cabang yang luas, kami hadir sebagai mitra orang tua, pendidik, dan institusi untuk mengembangkan potensi anak secara optimal.
                                    </motion.p>

                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.9 }}
                                        className="p-1 inline-block bg-gradient-to-tr from-edufa-yellow to-white/20 rounded-2xl"
                                    >
                                        <div className="bg-edufa-blue px-6 py-3 rounded-[0.9rem] flex items-center gap-4">
                                            <img src="/hero/logo edufa putih.png" alt="EDUfa Logo" className="h-12 w-auto" />
                                            <div>
                                                <p className="text-[9px] font-black uppercase tracking-widest text-edufa-yellow mb-0.5">Terpercaya Sejak</p>
                                                <p className="text-xl font-black text-white leading-none">2012</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                            
                            {/* Right Grid: Memory Wall */}
                            <div className="lg:col-span-7 flex flex-col justify-center">
                                {/* Memory Wall / Gallery Strip - LARGER */}
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-edufa-yellow/10 to-blue-400/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    <div className="relative w-full h-[400px] sm:h-[480px] overflow-hidden rounded-[3rem] bg-black/20 border border-white/10 shadow-3xl">
                                        <style dangerouslySetInnerHTML={{__html: `
                                            @keyframes slideGaleri {
                                                0% { transform: translateX(0); }
                                                100% { transform: translateX(-50%); }
                                            }
                                            .animate-slide-galeri {
                                                animation: slideGaleri 50s linear infinite;
                                            }
                                            .group:hover .animate-slide-galeri {
                                                animation-play-state: paused;
                                            }
                                        `}} />
                                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-edufa-blue to-transparent z-10 pointer-events-none"></div>
                                        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-edufa-blue to-transparent z-10 pointer-events-none"></div>
                                        
                                        {(() => {
                                            const images = [
                                                { src: "/images/Salinan IMG_0871.jpg", alt: "1" },
                                                { src: "/images/Salinan IMG_0899.jpg", alt: "2" },
                                                { src: "/images/Salinan IMG_0981.jpg", alt: "3" },
                                                { src: "/images/Salinan IMG_1025.jpg", alt: "4" },
                                                { src: "/images/Salinan IMG_1295.jpg", alt: "5" },
                                                { src: "/images/IMG_0937.jpg", alt: "6" },
                                            ];
                                            return (
                                                <div className="flex h-full w-max animate-slide-galeri items-center">
                                                    {[...images, ...images].map((img, i) => (
                                                        <div key={i} className="h-full w-[320px] sm:w-[400px] p-4">
                                                            <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative shadow-2xl group/img">
                                                                <div className="absolute inset-0 bg-edufa-blue/20 mix-blend-overlay group-hover/img:bg-transparent transition-all duration-500 z-10"></div>
                                                                <img 
                                                                    src={img.src}
                                                                    alt={img.alt}
                                                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        })()}
                                    </div>
                                    {/* Gallery Caption Label */}
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-8 py-3 bg-edufa-yellow rounded-full shadow-2xl">
                                        <p className="text-xs font-black text-gray-900 uppercase tracking-[0.2em]">Dokumentasi Kegiatan</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Artikel Hook Section */}
                <div className="bg-white py-24 relative overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[3rem] bg-edufa-blue px-8 py-16 sm:px-16 sm:py-24 shadow-3xl shadow-edufa-blue/20 overflow-hidden"
                        >
                            {/* Decorative background for the hook */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-edufa-yellow/20 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>

                            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                                <div className="text-center lg:text-left max-w-2xl">
                                    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-6 leading-tight">
                                        Dapatkan Informasi & Edukasi <br className="hidden sm:block" /> Seputar Tumbuh Kembang Anak
                                    </h2>
                                    <p className="text-lg text-blue-100 leading-relaxed mb-8">
                                        Kami secara rutin membagikan artikel bermanfaat, tips parenting, dan informasi terbaru seputar layanan psikologi di EDUfa Centre.
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Link 
                                        href={route('artikel')}
                                        className="inline-flex items-center px-10 py-5 bg-edufa-yellow text-gray-900 font-black rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-edufa-yellow/20 group"
                                    >
                                        Jelajahi Artikel
                                        <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>


                <BranchSection branches={branches} />

            </main>

            <footer className="border-t border-gray-100 bg-white py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex items-center">
                            <ApplicationLogo className="h-8 w-auto" />
                            <span className="ml-2 text-lg font-bold">EDU<span className="text-edufa-blue">fa</span></span>
                        </div>
                        <p className="text-sm leading-5 text-gray-500">
                            &copy; 2024 EDUfa Centre. Menumbuhkan Harapan, Mencapai Masa Depan Terpercaya.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}