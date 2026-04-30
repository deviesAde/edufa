import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import ApplicationLogo from '@/Components/ApplicationLogo';
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

export default function Balai({ service }) {
    const gFormUrl = service?.google_form_url || "https://wa.me/6281234567890?text=Halo%20EDUfa,%20saya%20ingin%20info%20program%20BLK";
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 antialiased overflow-hidden">
            <Head title="Balai Latihan Kerja - EDUfa Centre" />
            
            <Header />

            <main className="pb-0">
                {/* New Creative Hero Section */}
                <div className="relative py-12 lg:py-20 overflow-hidden bg-white">
                    {/* Background Mesh/Blobs */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                        <motion.div 
                            animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0],
                                opacity: [0.1, 0.15, 0.1]
                            }}
                            transition={{ duration: 20, repeat: Infinity }}
                            className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-edufa-yellow rounded-full blur-[120px]"
                        />
                        <motion.div 
                            animate={{ 
                                scale: [1, 1.3, 1],
                                rotate: [0, -90, 0],
                                opacity: [0.05, 0.1, 0.05]
                            }}
                            transition={{ duration: 25, repeat: Infinity }}
                            className="absolute top-0 -right-24 w-[600px] h-[600px] bg-edufa-blue rounded-full blur-[150px]"
                        />
                    </div>
                    
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-edufa-blue/5 border border-edufa-blue/10 text-edufa-blue text-xs font-black tracking-widest uppercase shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-edufa-blue mr-3 animate-pulse"></span>
                            Pelayanan Kami
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]"
                        >
                            <RevealText text="Balai Latihan" className="text-gray-900" />{' '}
                            <span className="relative inline-block mt-2">
                                <RevealText text="Kerja & Kehidupan" className="text-edufa-blue" delay={0.5} />
                                <motion.svg 
                                    viewBox="0 0 450 20" 
                                    className="absolute -bottom-2 left-0 w-full h-4 text-edufa-yellow"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 1 }}
                                >
                                    <motion.path 
                                        d="M5 15 Q 225 5 445 15" 
                                        fill="transparent" 
                                        stroke="currentColor" 
                                        strokeWidth="8" 
                                        strokeLinecap="round" 
                                    />
                                </motion.svg>
                            </span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="mt-6 text-base sm:text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto font-medium"
                        >
                            Memberikan keterampilan praktis vokasional dan kemandirian agar setiap individu siap menghadapi tantangan dunia kerja dan kehidupan nyata.
                        </motion.p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Mengenal Balai Latihan Kerja</h2>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed text-justify">
                                <strong>BLKK EDUfa</strong> adalah tempat dimana Individu dengan Autisme yang menginjak usia diatas 13 tahun belajar bekerja dan membantu dirinya sendiri dan dapat berfungsi secara sosial dan ekonomi.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                                Semua program untuk mengajarkan bekerja dan membantu diri dirancang dengan pendekatan yang terstruktur dan individual, serta didampingi oleh tim profesional dari EDUfa Autism Therapy Centre.
                            </p>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Kelas :</h3>
                            <ul className="space-y-4 mb-8">
                                {[
                                    { title: "Kelas Bantu Diri", desc: "Belajar merawat dan mengatur diri sendiri" },
                                    { title: "Kelas Musik / Seni", desc: "Menyalurkan emosi dan hobi secara positif" },
                                    { title: "Kelas Memasak", desc: "Kemandirian dan keterampilan praktis" },
                                    { title: "Kelas Peternakan / Pertanian", desc: "Melatih tanggung jawab dan rutinitas" },
                                    { title: "Kelas Komputer / Percetakan / Finansial / Media", desc: "Kemampuan kerja dan kreativitas" },
                                    { title: "Kelas Kerajinan Tangan", desc: "Meningkatkan fokus dan motorik halus" }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-edufa-yellow/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <div>
                                            <span className="text-gray-900 font-bold block">{item.title}</span>
                                            <span className="text-gray-600 text-sm block">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <a 
                                href={gFormUrl} 
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block bg-edufa-blue text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-blue-800 hover:shadow-edufa-blue/30 transition-all hover:-translate-y-1"
                            >
                                Info Pendaftaran Sekarang
                            </a>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-edufa-yellow/20 rounded-[3rem] transform translate-x-4 translate-y-4 -z-10"></div>
                            <div className="aspect-square w-full rounded-[3rem] overflow-hidden bg-gray-100 ring-1 ring-gray-900/5">
                                <img 
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Balai Latihan Kerja dan Kehidupan" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <footer className="bg-white py-12 border-t border-gray-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex items-center group cursor-pointer">
                            <ApplicationLogo className="h-8 w-auto group-hover:scale-105 transition-transform" />
                            <span className="ml-2 text-lg font-bold">EDU<span className="text-edufa-blue">fa</span></span>
                        </div>
                        <p className="text-sm leading-5 text-gray-500 font-medium">
                            &copy; {new Date().getFullYear()} EDUfa Centre. Menumbuhkan Harapan, Mencapai Masa Depan Terpercaya.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
