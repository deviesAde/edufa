import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { motion, AnimatePresence } from 'framer-motion';

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

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const categories = ['Semua', 'Kegiatan di Kelas', 'Terapi'];

const kegiatanData = [
    { id: 1, title: 'Sesi Terapi ABA', desc: 'Sesi terapi Applied Behavior Analysis bersama terapis berpengalaman.', kategori: 'Terapi', img: '/images/Salinan IMG_0871.jpg' },
    { id: 2, title: 'Kegiatan Bermain Sensori', desc: 'Anak-anak mengembangkan kemampuan sensorik melalui aktivitas bermain.', kategori: 'Terapi', img: '/images/Salinan IMG_0899.jpg' },
    { id: 3, title: 'Kelas Interaktif', desc: 'Kegiatan belajar interaktif yang menyenangkan di dalam kelas.', kategori: 'Kegiatan di Kelas', img: '/images/Salinan IMG_0981.jpg' },
    { id: 4, title: 'Sesi Konsultasi', desc: 'Diskusi dan konsultasi bersama tenaga psikolog profesional.', kategori: 'Kegiatan di Kelas', img: '/images/Salinan IMG_1025.jpg' },
    { id: 5, title: 'Aktivitas Bersama', desc: 'Kebersamaan antara terapis dan anak dalam suasana yang hangat.', kategori: 'Terapi', img: '/images/Salinan IMG_1295.jpg' },
    { id: 6, title: 'Program PAUD', desc: 'Kegiatan pendidikan anak usia dini dengan metode yang menyenangkan.', kategori: 'Kegiatan di Kelas', img: '/images/IMG_4822.jpg' },
];

// Ganti src dengan link YouTube embed atau path video lokal
// Ganti thumbnail dengan gambar dari folder public/images
const videoData = [
    {
        id: 1,
        title: 'Sesi Terapi Sensorik',
        desc: 'Dokumentasi sesi terapi sensorik bersama terapis EDUfa.',
        kategori: 'Terapi',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/images/Salinan IMG_0871.jpg',
    },
    {
        id: 2,
        title: 'Kegiatan Belajar di Kelas',
        desc: 'Dokumentasi kegiatan belajar interaktif di kelas EDUfa.',
        kategori: 'Kegiatan di Kelas',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/images/Salinan IMG_0981.jpg',
    },
    {
        id: 3,
        title: 'Program PAUD EDUfa',
        desc: 'Momen kebersamaan dalam program PAUD EDUfa Kids.',
        kategori: 'Kegiatan di Kelas',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/images/Salinan IMG_1025.jpg',
    },
];

const PLACEHOLDER = 'https://via.placeholder.com/600/0f59bc/ffffff?text=EDUfa';

/* ─────────────────────────────────────────────
   PHOTO CARD
───────────────────────────────────────────── */
function GalleryCard({ item, onClick }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.35 }}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white ring-1 ring-gray-900/5"
            onClick={() => onClick(item)}
        >
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={item.img}
                    alt={item.title}
                    onError={(e) => { e.target.src = PLACEHOLDER; }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="absolute inset-0 bg-edufa-blue/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-white text-lg font-bold leading-tight mb-2 drop-shadow">{item.title}</p>
                <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
            </div>
            <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-edufa-yellow text-gray-900 shadow">
                    {item.kategori}
                </span>
            </div>
            <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 truncate">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.desc}</p>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   VIDEO CARD
───────────────────────────────────────────── */
function VideoCard({ item, onClick }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.35 }}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white ring-1 ring-gray-900/5"
            onClick={() => onClick(item)}
        >
            {/* Thumbnail */}
            <div className="aspect-video overflow-hidden relative">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    onError={(e) => { e.target.src = PLACEHOLDER; }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gray-950/40 group-hover:bg-gray-950/60 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 group-hover:bg-edufa-yellow">
                        <svg className="w-7 h-7 text-edufa-blue ml-1 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>

                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-edufa-blue text-white shadow">
                        Video
                    </span>
                </div>
                <div className="absolute top-3 right-3 z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/90 text-gray-700 shadow">
                        {item.kategori}
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 truncate">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.desc}</p>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   PHOTO MODAL
───────────────────────────────────────────── */
function PhotoModal({ item, onClose }) {
    if (!item) return null;
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm" />
            <motion.div
                className="relative z-10 bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-3xl"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 22, stiffness: 280 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="aspect-video w-full overflow-hidden">
                    <img src={item.img} alt={item.title} onError={(e) => { e.target.src = PLACEHOLDER; }} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 sm:p-8">
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-edufa-yellow text-gray-900 mb-4">{item.kategori}</span>
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-3">{item.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   VIDEO MODAL
───────────────────────────────────────────── */
function VideoModal({ item, onClose }) {
    if (!item) return null;
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-sm" />
            <motion.div
                className="relative z-10 bg-gray-950 rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 22, stiffness: 280 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Video player */}
                <div className="aspect-video w-full">
                    <iframe
                        src={item.src + '?autoplay=1&rel=0'}
                        title={item.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                {/* Info */}
                <div className="p-5 sm:p-6">
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-edufa-blue text-white mb-3">{item.kategori}</span>
                    <h2 className="text-xl font-extrabold text-white mb-1">{item.title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   SECTION HEADING
───────────────────────────────────────────── */
function SectionHeading({ icon, title, subtitle }) {
    return (
        <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-edufa-blue flex items-center justify-center flex-shrink-0 shadow-md">
                {icon}
            </div>
            <div>
                <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
                <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
            <div className="flex-1 h-px bg-gray-100 ml-4 hidden sm:block" />
        </div>
    );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Kegiatan() {
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const filteredPhotos = activeCategory === 'Semua'
        ? kegiatanData
        : kegiatanData.filter((k) => k.kategori === activeCategory);

    const filteredVideos = activeCategory === 'Semua'
        ? videoData
        : videoData.filter((v) => v.kategori === activeCategory);

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 antialiased">
            <Head title="Kegiatan EDUfa - Centre Psikologi & Terapi" />
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
                            Dokumentasi EDUfa
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]"
                        >
                            <RevealText text="Galeri" className="text-gray-900" />{' '}
                            <span className="relative inline-block mt-2">
                                <RevealText text="Kegiatan Kami" className="text-edufa-blue" delay={0.5} />
                                <motion.svg 
                                    viewBox="0 0 300 20" 
                                    className="absolute -bottom-2 left-0 w-full h-4 text-edufa-yellow"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 1 }}
                                >
                                    <motion.path 
                                        d="M5 15 Q 150 5 295 15" 
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
                            Berbagai momen kegiatan terapi, belajar, dan tumbuh kembang bersama EDUfa Centre.
                        </motion.p>
                    </div>
                </div>

                {/* ── Gallery Section ── */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">

                    {/* Filter Tabs */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-wrap gap-3 justify-center mb-14">
                        {categories.map((cat) => {
                            const count = cat === 'Semua'
                                ? kegiatanData.length + videoData.length
                                : kegiatanData.filter(k => k.kategori === cat).length + videoData.filter(v => v.kategori === cat).length;
                            return (
                                <button key={cat} onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-200 shadow-sm ${activeCategory === cat ? 'bg-edufa-blue text-white shadow-edufa-blue/30 scale-105' : 'bg-white text-gray-600 hover:bg-gray-100 ring-1 ring-gray-200 hover:scale-105'}`}>
                                    {cat}
                                    <span className={`ml-2 text-[10px] rounded-full px-1.5 py-0.5 ${activeCategory === cat ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </motion.div>

                    {/* ── FOTO SECTION ── */}
                    <SectionHeading
                        icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                        title="Galeri Foto"
                        subtitle={`${filteredPhotos.length} foto tersedia`}
                    />

                    {filteredPhotos.length === 0 ? (
                        <div className="text-center py-16 text-gray-400 mb-16">
                            <svg className="w-14 h-14 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="font-semibold">Belum ada foto untuk kategori ini.</p>
                        </div>
                    ) : (
                        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
                            <AnimatePresence>
                                {filteredPhotos.map((item) => (
                                    <GalleryCard key={item.id} item={item} onClick={setSelectedPhoto} />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}

                    {/* ── DIVIDER ── */}
                    <div className="relative my-4 mb-14">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                    </div>

                    {/* ── VIDEO SECTION ── */}
                    <SectionHeading
                        icon={<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>}
                        title="Galeri Video"
                        subtitle={`${filteredVideos.length} video tersedia — klik untuk memutar`}
                    />

                    {filteredVideos.length === 0 ? (
                        <div className="text-center py-16 text-gray-400">
                            <svg className="w-14 h-14 mx-auto mb-3 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <p className="font-semibold">Belum ada video untuk kategori ini.</p>
                        </div>
                    ) : (
                        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            <AnimatePresence>
                                {filteredVideos.map((item) => (
                                    <VideoCard key={item.id} item={item} onClick={setSelectedVideo} />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white py-12 border-t border-gray-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex items-center">
                            <ApplicationLogo className="h-8 w-auto" />
                            <span className="ml-2 text-lg font-bold">EDU<span className="text-edufa-blue">fa</span></span>
                        </div>
                        <p className="text-sm leading-5 text-gray-500">
                            &copy; {new Date().getFullYear()} EDUfa Centre. Menumbuhkan Harapan, Mencapai Masa Depan Terpercaya.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Photo Modal */}
            <AnimatePresence>
                {selectedPhoto && <PhotoModal item={selectedPhoto} onClose={() => setSelectedPhoto(null)} />}
            </AnimatePresence>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && <VideoModal item={selectedVideo} onClose={() => setSelectedVideo(null)} />}
            </AnimatePresence>
        </div>
    );
}
