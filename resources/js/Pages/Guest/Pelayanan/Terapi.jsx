import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { motion } from 'framer-motion';

export default function Terapi() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 antialiased overflow-hidden">
            <Head title="Layanan Terapi - EDUfa Centre" />
            
            <Header />

            <main className="pt-20 pb-0">
                {/* Hero Section */}
                <div className="relative bg-edufa-blue py-20 lg:py-28 overflow-hidden rounded-b-[3rem] shadow-sm">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-edufa-yellow/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="mx-auto max-w-3xl text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-edufa-yellow text-sm font-bold tracking-widest uppercase"
                            >
                                Pelayanan Kami
                            </motion.div>
                            <motion.h1 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance"
                            >
                                Layanan <br className="hidden sm:block" />
                                <span className="text-edufa-yellow relative inline-block mt-2">
                                    Terapi
                                    <div className="absolute -bottom-2 left-0 w-full h-2 bg-edufa-yellow/30 rounded-full"></div>
                                </span>
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mt-8 text-lg sm:text-xl leading-8 text-blue-50 text-balance"
                            >
                                Intervensi terapeutik terstruktur untuk mengatasi gangguan perkembangan, perilaku, dan mengoptimalkan kemampuan adaptasi.
                            </motion.p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Mendukung Tumbuh Kembang Optimal</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                EDUfa Centre menyediakan program terapi komprehensif yang dirancang secara khusus sesuai dengan hasil asesmen tiap individu. Ditangani oleh terapis ahli dan tersertifikasi.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Terapi Wicara (Speech Therapy)",
                                    "Terapi Okupasi (Occupational Therapy)",
                                    "Terapi Perilaku (Behavior Therapy)",
                                    "Terapi Sensori Integrasi"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-edufa-blue/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-edufa-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                        </div>
                                        <span className="text-gray-800 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a 
                                href="https://wa.me/6281234567890?text=Halo%20EDUfa,%20saya%20ingin%20info%20tentang%20Layanan%20Terapi" 
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block bg-edufa-yellow text-gray-900 font-bold py-3 px-8 rounded-xl shadow-lg shadow-edufa-yellow/30 hover:bg-edufa-yellow/90 transition-all hover:-translate-y-1"
                            >
                                Konsultasi Terapi
                            </a>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="absolute inset-0 bg-edufa-blue/10 rounded-[3rem] transform -translate-x-4 translate-y-4 -z-10"></div>
                            <div className="aspect-square w-full rounded-[3rem] overflow-hidden bg-gray-100 ring-1 ring-gray-900/5">
                                <img 
                                    src="https://images.unsplash.com/photo-1601598851547-4302969d0614?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Layanan Terapi Anak" 
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
