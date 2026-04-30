import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import ServiceCards from '@/Components/ServiceCards';
import ApplicationLogo from '@/Components/ApplicationLogo';
import BranchSection from '@/Components/BranchSection';
import FloatingShapes from '@/Components/FloatingShapes';
import SEO from '@/Components/SEO';
import { motion } from 'framer-motion';

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
                    <FloatingShapes />
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-edufa-yellow/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-edufa-blue/5 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        {/* Title and Intro */}
                        <div className="mx-auto max-w-3xl text-center mb-20">
                            <motion.h2 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="text-sm font-bold tracking-widest text-edufa-blue uppercase mb-4 inline-block px-4 py-1.5 rounded-full bg-edufa-blue/10"
                            >
                                Tentang Kami
                            </motion.h2>
                            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-8">
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
                                whileHover={{ y: -15, scale: 1.02, rotate: -1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-gray-200/40 ring-1 ring-gray-900/5 group relative overflow-hidden flex flex-col justify-between"
                            >
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
                                whileHover={{ y: -15, scale: 1.02, rotate: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-gray-200/40 ring-1 ring-gray-900/5 group relative overflow-hidden flex flex-col justify-between"
                            >
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
                                        Fokus pada membantu <span className="font-bold text-amber-600">mengembangkan potensi</span> anak / peserta didik / tenaga kerja secara optimal.
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-gray-100 relative z-10">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">SIPP No</p>
                                    <p className="text-sm font-mono text-amber-600 font-bold">201220017-2025-04-0720</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Leader Section */}
                        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 sm:px-6">
                            {[
                                {
                                    name: "Dr. Ernie C. Siregar, S.Psi., M.Pd., Psikolog",
                                    image: "/penanggung/ernie-siregar.png",
                                    role: "Pimpinan dan Psikolog Biro Psikologi dan Pusat Layanan Terapi EDUfa"
                                },
                                {
                                    name: "Dr. Yoga Budi Santoso, M.Pd.",
                                    image: "/penanggung/yoga-budi-santoso.jpg",
                                    role: "Pimpinan dan Psikolog Biro Psikologi dan Pusat Layanan Terapi EDUfa"
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
                                    <div className="relative flex flex-col items-center md:flex-row gap-8 bg-edufa-blue rounded-[3rem] p-8 md:p-10 shadow-3xl shadow-edufa-blue/40 overflow-hidden ring-1 ring-white/10 transition-all duration-500 hover:ring-white/20 hover:shadow-edufa-blue/30">
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
                    <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-edufa-yellow/10 blur-[120px] rounded-full pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                            {/* Left Text Detail */}
                            <div className="lg:col-span-5 relative">
                                <h2 className="text-sm font-black leading-7 text-edufa-yellow uppercase tracking-[0.2em] mb-4">
                                    <RevealText text="Alasan Memilih Kami" />
                                </h2>

                                <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl mb-8 leading-[1.1]">
                                    <RevealText text="Keunggulan Kami" delay={0.2} />
                                </h3>

                                <div className="mb-10 inline-block relative group">
                                    <div className="relative z-10 group-hover:-translate-y-2 transition-all duration-300">
                                        <img src="/hero/logo edufa putih.png" alt="EDUfa Logo" className="h-28 w-auto" />
                                    </div>
                                </div>
                                
                                <div className="text-lg leading-relaxed text-blue-100 space-y-6">
                                    <p>
                                        EDUfa hadir sebagai mitra terpercaya dengan <strong className="text-white font-bold">layanan yang lengkap dan terintegrasi</strong>. Didukung oleh tenaga profesional yang kompeten, kami siap membantu mengembangkan potensi setiap anak secara optimal.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Right Grid Icons */}
                            <div className="lg:col-span-7">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    {[
                                        { title: "Layanan Lengkap", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
                                        { title: "Jangkauan Luas", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                                        { title: "Profesional", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                                        { title: "Terstruktur", icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex flex-col items-center justify-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group text-center">
                                            <div className="w-12 h-12 rounded-xl bg-edufa-yellow/10 flex items-center justify-center mb-3 ring-1 ring-edufa-yellow/30 group-hover:scale-110 group-hover:bg-edufa-yellow/20 transition-all duration-300">
                                                <svg className="w-6 h-6 text-edufa-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${item.icon}" />` }} />
                                            </div>
                                            <h3 className="text-sm font-bold text-white leading-tight">{item.title}</h3>
                                        </div>
                                    ))}
                                </div>

                                {/* 7 Images Gallery (Auto Slider) */}
                                <div className="relative w-full h-56 sm:h-72 md:h-[340px] overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 group mt-auto">
                                    <style dangerouslySetInnerHTML={{__html: `
                                        @keyframes slideGaleri {
                                            0% { transform: translateX(0); }
                                            100% { transform: translateX(-50%); }
                                        }
                                        .animate-slide-galeri {
                                            animation: slideGaleri 35s linear infinite;
                                        }
                                        .group:hover .animate-slide-galeri {
                                            animation-play-state: paused;
                                        }
                                    `}} />
                                    {/* Gradient edges for smooth fade */}
                                    <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-edufa-blue to-transparent z-10 pointer-events-none rounded-l-[2rem]"></div>
                                    <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-edufa-blue to-transparent z-10 pointer-events-none rounded-r-[2rem]"></div>
                                    
                                    {(() => {
                                        const images = [
                                            { src: "/images/Salinan IMG_0871.jpg", alt: "Kegiatan Terapi 1" },
                                            { src: "/images/Salinan IMG_0899.jpg", alt: "Kegiatan Terapi 2" },
                                            { src: "/images/Salinan IMG_0981.jpg", alt: "Kegiatan Terapi 3" },
                                            { src: "/images/Salinan IMG_1025.jpg", alt: "Kegiatan Terapi 4" },
                                            { src: "/images/Salinan IMG_1295.jpg", alt: "Kegiatan Terapi 5" },
                                            { src: "/images/IMG_4822.jpg", alt: "Kegiatan EDUfa 6" },
                                        ];
                                        return (
                                            <div className="flex h-full w-max animate-slide-galeri items-center py-4">
                                                {[...images, ...images].map((img, i) => (
                                                    <div key={i} className="h-full w-[240px] sm:w-[320px] md:w-[380px] flex-shrink-0 px-2 sm:px-3">
                                                        <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-lg group/item">
                                                            <div className="absolute inset-0 bg-edufa-blue/20 mix-blend-multiply group-hover/item:bg-transparent transition-all duration-300 z-10"></div>
                                                            <img 
                                                                src={img.src}
                                                                alt={img.alt}
                                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                                                                loading="lazy"
                                                                decoding="async"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                    })()}
                                </div>
                            </div>

                        </div>
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