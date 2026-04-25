import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import ServiceCards from '@/Components/ServiceCards';
import ApplicationLogo from '@/Components/ApplicationLogo';
import BranchSection from '@/Components/BranchSection';
import { Head } from '@inertiajs/react';

export default function Page({ branches }) {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
            <Head title="Biro Psikologi & Pusat Layanan Terapi EDUfa" />
            
            <Header />

            <main>
                <Hero />

                <ServiceCards />

                
                <div className="bg-white py-24 sm:py-32 overflow-hidden relative">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-edufa-yellow/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-edufa-blue/5 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        {/* Title and Intro */}
                        <div className="mx-auto max-w-3xl text-center mb-20">
                            <h2 className="text-sm font-bold tracking-widest text-edufa-blue uppercase mb-4 inline-block px-4 py-1.5 rounded-full bg-edufa-blue/10">
                                Tentang Kami
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-8">
                                TENTANG EDUfa Centre
                            </h3>
                            <p className="text-xl md:text-2xl leading-relaxed text-gray-600 font-medium">
                                Yayasan EDUfa Salamanca dan Biro Psikologi EDUfa Counseling berdiri pada tanggal <span className="text-edufa-blue font-bold px-1 relative inline-block"><span className="relative z-10">31 Mei 2012</span><span className="absolute bottom-1 left-0 w-full h-3 bg-edufa-yellow/40 -z-10 rounded-sm"></span></span> di Bandung.
                            </p>
                        </div>

                        {/* Two Pillars Setup */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 relative">
                            {/* Connector line for large screens */}
                            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

                            {/* Salamanca Card */}
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-gray-200/40 ring-1 ring-gray-900/5 group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden flex flex-col justify-between">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                    <svg className="w-32 h-32 text-edufa-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z"/></svg>
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
                            </div>

                            {/* Counseling Card */}
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-gray-200/40 ring-1 ring-gray-900/5 group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden flex flex-col justify-between">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                    <svg className="w-32 h-32 text-edufa-yellow" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
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
                            </div>
                        </div>

                        {/* Leader Section */}
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 relative overflow-visible mt-20">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex items-center justify-center flex-none ring-4 ring-white shadow-xl relative z-20 overflow-hidden">
                                <div className="flex items-center justify-center w-full h-full bg-gradient-to-tr from-edufa-blue/20 to-edufa-yellow/20">
                                     <svg className="w-12 h-12 text-edufa-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                                </div>
                            </div>
                            
                            <div className="text-center md:text-left relative z-10 flex-1 bg-gray-900 rounded-3xl p-6 md:p-8 md:-ml-12 shadow-xl shadow-gray-900/10 w-full pl-6 md:pl-16">
                                <div className="inline-flex flex-wrap gap-2 items-center justify-center md:justify-start mb-3">
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-edufa-blue/80 px-2 py-0.5 rounded border border-edufa-blue">
                                        Ketua Yayasan
                                    </span>
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-amber-600/80 px-2 py-0.5 rounded border border-amber-500">
                                        Penanggungjawab Biro
                                    </span>
                                </div>
                                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                    Dr. Ernie C. Siregar, S.Psi, M.Pd, Psikolog
                                </p>
                            </div>
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
                            <div className="lg:col-span-6 relative">
                                <h2 className="text-sm font-black leading-7 text-edufa-yellow uppercase tracking-[0.2em] mb-4">
                                    Alasan Memilih Kami
                                </h2>
                                
                                <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl mb-8 leading-[1.1]">
                                    Keunggulan Kami
                                </h3>

                                <div className="mb-10 inline-block relative group">
                                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl p-6 md:p-8 relative z-10 group-hover:-translate-y-2 transition-all duration-300">
                                        <img src="/logo.png" alt="EDUfa Logo" className="h-16 md:h-20 w-auto object-contain drop-shadow-lg brightness-0 invert" />
                                    </div>
                                </div>
                                
                                <div className="text-lg leading-relaxed text-blue-100">
                                    <p>
                                        EDUfa hadir sebagai mitra terpercaya dengan <strong className="text-white font-bold">layanan yang lengkap dan terintegrasi</strong>. Didukung oleh tenaga profesional yang kompeten, kami siap membantu mengembangkan potensi setiap anak secara optimal.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Right Side: Features & Gallery */}
                            <div className="lg:col-span-6 flex flex-col gap-6 md:gap-8">
                                {/* 4 Small Icons */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
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