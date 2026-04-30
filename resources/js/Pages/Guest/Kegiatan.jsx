import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIcon, Video, Play, CheckCircle2, X } from 'lucide-react';

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
   COMPONENT HELPERS
───────────────────────────────────────────── */

function SectionHeading({ icon, title, subtitle }) {
    return (
        <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-edufa-blue flex items-center justify-center flex-shrink-0 shadow-lg shadow-edufa-blue/20 text-white">
                {icon}
            </div>
            <div>
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">{title}</h2>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{subtitle}</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-100 to-transparent ml-4 hidden sm:block" />
        </div>
    );
}

function GalleryCard({ item, onClick }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="group relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white border border-gray-100"
            onClick={() => onClick(item)}
        >
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <div className="absolute inset-0 bg-edufa-blue/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-white/20 mb-4 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ImageIcon className="w-6 h-6" />
                </div>
                <p className="text-white text-xl font-black leading-tight mb-2">{item.title}</p>
                <p className="text-blue-50 text-sm line-clamp-3 font-medium">{item.desc}</p>
            </div>
            <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-edufa-yellow text-gray-900 shadow-lg">
                    {item.kategori}
                </span>
            </div>
            <div className="p-6">
                <h3 className="text-lg font-black text-gray-900 truncate leading-none mb-1">{item.title}</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.kategori}</p>
            </div>
        </motion.div>
    );
}

function VideoCard({ item, onClick }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="group relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white border border-gray-100"
            onClick={() => onClick(item)}
        >
            <div className="aspect-video overflow-hidden relative">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/60 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-edufa-yellow text-gray-900 flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                        <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                </div>
                <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-edufa-blue text-white shadow-lg">
                        VIDEO
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-lg font-black text-gray-900 truncate leading-none mb-1">{item.title}</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.kategori}</p>
            </div>
        </motion.div>
    );
}

function PhotoModal({ item, onClose }) {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-md" />
            <motion.div
                className="relative z-10 bg-white rounded-[3rem] overflow-hidden shadow-2xl w-full max-w-4xl"
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors">
                    <X className="w-6 h-6 text-gray-900" />
                </button>
                <div className="lg:flex">
                    <div className="lg:w-2/3 aspect-square lg:aspect-auto">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="lg:w-1/3 p-8 sm:p-10 flex flex-col justify-center">
                        <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-edufa-yellow text-gray-900 mb-6 w-fit">{item.kategori}</span>
                        <h2 className="text-3xl font-black text-gray-900 mb-4 leading-tight">{item.title}</h2>
                        <p className="text-gray-500 font-medium leading-relaxed">{item.desc || 'Tidak ada deskripsi.'}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function VideoModal({ item, onClose }) {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-gray-950/95 backdrop-blur-xl" />
            <motion.div
                className="relative z-10 bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl w-full max-w-5xl"
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                    <X className="w-6 h-6 text-white" />
                </button>
                <div className="aspect-video w-full bg-black">
                    <iframe
                        src={item.src + '?autoplay=1&rel=0'}
                        title={item.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="p-8 sm:p-10 border-t border-white/5">
                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-edufa-blue text-white mb-4">{item.kategori}</span>
                    <h2 className="text-2xl font-black text-white mb-2">{item.title}</h2>
                    <p className="text-gray-400 font-medium text-sm leading-relaxed">{item.desc || 'Tidak ada deskripsi.'}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */

export default function Kegiatan({ activities = [] }) {
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const categories = ['Semua', 'Kegiatan di Kelas', 'Terapi'];

    const getEmbedUrl = (url) => {
        if (!url) return '';
        const ytMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|.+\/|)([a-zA-Z0-9_-]{11})/);
        if (ytMatch && ytMatch[1]) return `https://www.youtube.com/embed/${ytMatch[1]}`;
        const driveMatch = url.match(/https?:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
        if (driveMatch && driveMatch[1]) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
        return url;
    };

    const getThumbnailUrl = (item) => {
        if (item.media_type === 'photo') return `/storage/${item.media_path}`;
        const ytMatch = item.media_path.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|.+\/|)([a-zA-Z0-9_-]{11})/);
        if (ytMatch && ytMatch[1]) return `https://img.youtube.com/vi/${ytMatch[1]}/maxresdefault.jpg`;
        return 'https://via.placeholder.com/1280x720/0f59bc/ffffff?text=Video+EDUfa';
    };

    const displayActivities = activities.map(item => ({
        ...item,
        display_type: item.type === 'kelas' ? 'Kegiatan di Kelas' : 'Terapi',
        thumbnail: getThumbnailUrl(item),
        embed_url: item.media_type === 'video' ? getEmbedUrl(item.media_path) : null
    }));

    const filteredActivities = activeCategory === 'Semua'
        ? displayActivities
        : displayActivities.filter((k) => k.display_type === activeCategory);

    const photos = filteredActivities.filter(item => item.media_type === 'photo');
    const videos = filteredActivities.filter(item => item.media_type === 'video');

    return (
        <div className="min-h-screen bg-gray-50/50 font-sans text-gray-900 antialiased selection:bg-edufa-blue selection:text-white">
            <Head title="Kegiatan EDUfa - Centre Psikologi & Terapi" />
            <Header />

            <main className="pb-24">
                {/* Hero Section */}
                <div className="relative py-20 lg:py-32 overflow-hidden bg-white">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-edufa-yellow/10 rounded-full blur-[120px]" />
                        <div className="absolute top-0 -right-24 w-[700px] h-[700px] bg-edufa-blue/10 rounded-full blur-[150px]" />
                    </div>
                    
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center justify-center px-6 py-2 mb-8 rounded-full bg-edufa-blue text-white text-[10px] font-black tracking-[0.3em] uppercase shadow-xl shadow-edufa-blue/20"
                        >
                            Dokumentasi Kegiatan
                        </motion.div>
                        
                        <h1 className="text-5xl font-black tracking-tight text-gray-900 sm:text-7xl lg:text-8xl leading-none">
                            <RevealText text="Momen" className="text-gray-900" />{' '}
                            <span className="text-edufa-blue">
                                <RevealText text="Berharga" delay={0.5} />
                            </span>
                        </h1>
                        <p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto font-bold leading-relaxed">
                            Jelajahi galeri kegiatan kami, mulai dari sesi terapi intensif hingga keceriaan belajar di dalam kelas.
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-8 relative z-20">
                    {/* Tabs */}
                    <div className="flex flex-wrap gap-4 justify-center mb-24">
                        {categories.map((cat) => (
                            <button 
                                key={cat} 
                                onClick={() => setActiveCategory(cat)}
                                className={`px-10 py-4 rounded-3xl text-sm font-black tracking-wider transition-all duration-500 shadow-sm ${activeCategory === cat ? 'bg-edufa-blue text-white shadow-2xl shadow-edufa-blue/40 scale-105' : 'bg-white text-gray-500 hover:bg-gray-100 ring-1 ring-gray-100 hover:scale-105'}`}
                            >
                                {cat.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* FOTO SECTION */}
                    <SectionHeading
                        icon={<ImageIcon className="w-6 h-6" />}
                        title="Galeri Foto"
                        subtitle={`${photos.length} momen tertangkap kamera`}
                    />

                    {photos.length === 0 ? (
                        <div className="text-center py-24 bg-white rounded-[4rem] border border-gray-100 mb-24 shadow-sm">
                            <ImageIcon className="h-20 w-20 text-gray-100 mx-auto mb-6" />
                            <p className="text-gray-300 text-xl font-black uppercase tracking-widest">Belum ada foto</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
                            <AnimatePresence>
                                {photos.map((item) => (
                                    <GalleryCard 
                                        key={item.id} 
                                        item={{
                                            ...item,
                                            img: item.thumbnail,
                                            desc: item.description,
                                            kategori: item.display_type
                                        }} 
                                        onClick={setSelectedPhoto} 
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    )}

                    {/* VIDEO SECTION */}
                    <SectionHeading
                        icon={<Play className="w-6 h-6" />}
                        title="Galeri Video"
                        subtitle={`${videos.length} dokumentasi visual`}
                    />

                    {videos.length === 0 ? (
                        <div className="text-center py-24 bg-gray-900 rounded-[4rem] text-white shadow-2xl mb-24">
                            <Video className="h-20 w-20 text-white/10 mx-auto mb-6" />
                            <p className="text-white/20 text-xl font-black uppercase tracking-widest">Belum ada video</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            <AnimatePresence>
                                {videos.map((item) => (
                                    <VideoCard 
                                        key={item.id} 
                                        item={{
                                            ...item,
                                            src: item.embed_url,
                                            desc: item.description,
                                            kategori: item.display_type
                                        }} 
                                        onClick={setSelectedVideo} 
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </main>

            <footer className="bg-white py-20 border-t border-gray-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <ApplicationLogo className="h-12 w-auto mx-auto mb-8 opacity-20" />
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em]">
                        &copy; {new Date().getFullYear()} EDUFA CENTRE • ALL RIGHTS RESERVED
                    </p>
                </div>
            </footer>

            <AnimatePresence>
                {selectedPhoto && <PhotoModal item={selectedPhoto} onClose={() => setSelectedPhoto(null)} />}
                {selectedVideo && <VideoModal item={selectedVideo} onClose={() => setSelectedVideo(null)} />}
            </AnimatePresence>
        </div>
    );
}
