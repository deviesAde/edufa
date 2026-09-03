import React, { useState } from 'react';
import SEO from '@/Components/SEO';
import Header from '@/Components/Header';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export default function Konsultan() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "/portofolio/porto%20bu%20ernie%20dan%20pak%20yoga_pages-to-jpg-0001.jpg",
        "/portofolio/porto%20bu%20ernie%20dan%20pak%20yoga_pages-to-jpg-0002.jpg"
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 antialiased selection:bg-edufa-yellow/30">
            <SEO
                title="Konsultan - EDUfa Centre"
                description="Profil Konsultan EDUfa Centre."
                keywords="konsultan edufa centre, konsultan, portofolio"
                breadcrumbs={[
                    { name: "Beranda", url: "/" },
                    { name: "Konsultan", url: "/konsultan" }
                ]}
            />
            
            <Header />

            <main className="py-12 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Konsultan EDUfa Centre</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Mengenal lebih dekat profil dan pengalaman tim konsultan ahli kami.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {images.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
                                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 p-2 cursor-pointer relative group"
                                onClick={() => setSelectedImage(src)}
                            >
                                <img 
                                    src={src} 
                                    alt={`Profil Konsultan ${index + 1}`} 
                                    className="w-full h-auto rounded-2xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-2 bg-gray-900/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <button 
                                        className="bg-white text-gray-900 px-4 py-2 rounded-xl font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gray-100"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage(src);
                                        }}
                                    >
                                        <ZoomIn className="w-5 h-5" />
                                        Perbesar
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Lightbox / Modal Perbesar Gambar */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8 bg-gray-900/95 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button 
                            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={selectedImage}
                            alt="Portofolio Perbesar"
                            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <footer className="border-t border-gray-100 bg-white py-12 mt-12 relative z-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex items-center">
                            <ApplicationLogo className="h-8 w-auto" />
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
