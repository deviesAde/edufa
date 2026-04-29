import React, { useMemo, useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ARTICLES } from '@/constants/articles';

/* ─────────────────────────────────────────────
   THEME CONSTANTS
───────────────────────────────────────────── */
const BADGE_COLORS = {
    Info:      'bg-edufa-blue text-white',
    Terapi:    'bg-edufa-green text-white',
    Autisme:   'bg-edufa-red text-white',
    Konseling: 'bg-purple-600 text-white',
    default:   'bg-gray-600 text-white',
};

function badgeClass(cat) {
    return BADGE_COLORS[cat] ?? BADGE_COLORS.default;
}

/* ─────────────────────────────────────────────
   AVATAR COMPONENT
───────────────────────────────────────────── */
function Avatar({ name, size = 'md' }) {
    const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
    const sizeClasses = size === 'sm' ? 'w-10 h-10 text-[10px]' : 'w-16 h-16 text-sm';
    
    return (
        <div className={`${sizeClasses} rounded-2xl bg-gradient-to-br from-edufa-blue via-blue-700 to-indigo-800 flex items-center justify-center flex-shrink-0 ring-4 ring-white shadow-2xl text-white font-black tracking-tighter`}>
            {initials}
        </div>
    );
}

/* ─────────────────────────────────────────────
   SIDEBAR COMPONENT
───────────────────────────────────────────── */
function Sidebar({ currentSlug, waLink }) {
    const related = useMemo(() => {
        return ARTICLES.filter(a => a.slug !== currentSlug).slice(0, 3);
    }, [currentSlug]);

    return (
        <aside className="lg:col-span-1 space-y-10">
            {/* Author Profile */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-gray-200/50 ring-1 ring-gray-100 overflow-hidden relative group"
            >
                <div className="absolute top-0 right-0 w-40 h-40 bg-edufa-blue/5 rounded-full -mr-20 -mt-20 blur-3xl transition-transform duration-1000 group-hover:scale-150" />
                <div className="relative z-10">
                    <h4 className="text-[10px] font-black text-edufa-blue uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                        <span className="w-10 h-[2px] bg-edufa-blue/20" />
                        Expert Voice
                    </h4>
                    <div className="flex items-center gap-6 mb-8">
                        <Avatar name="Dr. Ernie C. Siregar" />
                        <div>
                            <p className="text-xl font-black text-gray-900 tracking-tight leading-none mb-1">Dr. Ernie C. Siregar</p>
                            <p className="text-[10px] text-edufa-blue font-black uppercase tracking-widest bg-blue-50 inline-block px-2 py-0.5 rounded-md">Psikolog Klinis</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                        Berdedikasi dalam mendampingi tumbuh kembang anak dan memberikan solusi psikologis terbaik bagi keluarga Indonesia selama lebih dari satu dekade.
                    </p>
                    <div className="mt-8 pt-8 border-t border-gray-100 flex gap-4">
                        {['IG', 'LN', 'TW'].map(social => (
                            <button key={social} className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-[10px] font-black text-gray-400 hover:bg-edufa-blue hover:text-white transition-all duration-300">
                                {social}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Related content */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-gray-200/50 ring-1 ring-gray-100"
            >
                <h4 className="text-[10px] font-black text-edufa-yellow uppercase tracking-[0.3em] mb-10 flex items-center gap-4">
                    <span className="w-10 h-[2px] bg-edufa-yellow/30" />
                    Wajib Baca
                </h4>
                <div className="space-y-10">
                    {related.map((article) => (
                        <Link 
                            key={article.id} 
                            href={`/artikel/${article.slug}`}
                            className="group flex gap-6 items-start"
                        >
                            <div className="w-20 h-20 rounded-3xl overflow-hidden flex-shrink-0 ring-1 ring-gray-100 shadow-xl transition-all duration-500 group-hover:shadow-edufa-blue/20">
                                <img 
                                    src={article.image} 
                                    alt={article.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h5 className="text-sm font-black text-gray-900 leading-snug line-clamp-2 group-hover:text-edufa-blue transition-colors duration-300">
                                    {article.title}
                                </h5>
                                <div className="flex items-center gap-3 mt-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-edufa-yellow shadow-sm shadow-edufa-yellow/50" />
                                    <p className="text-[9px] text-gray-400 font-black uppercase tracking-[0.1em]">{article.date}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <Link 
                    href="/artikel"
                    className="mt-12 flex items-center justify-center w-full py-5 rounded-[2rem] bg-gray-900 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-edufa-blue transition-all duration-500 shadow-xl shadow-gray-900/10 hover:shadow-edufa-blue/30"
                >
                    Lihat Semua Insight
                    <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </motion.div>
            
            {/* Consultation Card */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#0a1a3a] via-edufa-blue to-[#081530] rounded-[3rem] p-10 relative overflow-hidden text-white shadow-2xl shadow-edufa-blue/30 group"
            >
                {/* High-end accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-[0.03] rounded-full -mr-16 -mt-16 blur-2xl" />
                
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/5 backdrop-blur-3xl rounded-2xl flex items-center justify-center ring-1 ring-white/10 mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                        <svg className="w-8 h-8 text-edufa-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-black mb-6 leading-tight tracking-tight">
                        Langkah Tepat,<br/>Masa Depan Cerah.
                    </h3>
                    <p className="text-blue-100/60 text-sm leading-relaxed mb-10 font-medium">
                        Konsultasikan setiap keraguan Anda. Tim ahli EDUfa Centre siap memberikan panduan personal.
                    </p>
                    <a 
                        href={waLink}
                        target="_blank"
                        className="group relative inline-flex items-center justify-center w-full gap-4 px-8 py-5 bg-white text-gray-900 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 hover:bg-edufa-yellow hover:scale-105 active:scale-95 shadow-xl"
                    >
                        Mulai Konsultasi
                        <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.658 1.43 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                    </a>
                </div>
            </motion.div>
        </aside>
    );
}

/* ─────────────────────────────────────────────
   DETAIL PAGE COMPONENT
───────────────────────────────────────────── */
export default function DetailArtikel({ slug }) {
    const article = useMemo(() => {
        return ARTICLES.find(a => a.slug === slug) || ARTICLES[0];
    }, [slug]);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const waLink = "https://wa.me/6281234567890?text=Halo%20EDUfa,%20saya%20ingin%20tanya%20tentang%20" + encodeURIComponent(article.title);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-edufa-yellow selection:text-gray-900">
            <Head title={`${article.title} - EDUfa Centre`} />
            <Header />

            {/* Reading Progress Bar */}
            <motion.div 
                className="fixed top-20 left-0 right-0 h-1.5 bg-edufa-yellow z-[60] origin-left"
                style={{ scaleX }}
            />

            <main>
                {/* ── Dynamic Hero Header ── */}
                <div className="relative pt-24 pb-48 lg:pt-32 lg:pb-72 bg-edufa-blue overflow-hidden rounded-b-[5rem] lg:rounded-b-[8rem]">
                    {/* Artistic Background Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-10 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-edufa-yellow opacity-10 rounded-full blur-[140px] -translate-x-1/2 translate-y-1/2" />
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    </div>

                    <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-center mb-12"
                        >
                            <span className={`px-6 py-2 rounded-full backdrop-blur-xl border border-white/20 text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl ${badgeClass(article.category)}`}>
                                {article.category}
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                            className="text-4xl sm:text-5xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tight text-center mb-16 max-w-5xl mx-auto"
                        >
                            {article.title}
                        </motion.h1>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap items-center justify-center gap-10 text-[10px] font-black text-blue-100 tracking-[0.25em] uppercase"
                        >
                            <div className="flex items-center gap-4 group cursor-default">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-xl transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 group-hover:rotate-6 ring-1 ring-white/20">
                                    <svg className="w-6 h-6 text-edufa-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <span>{article.author.name}</span>
                            </div>
                            <div className="hidden sm:block w-2 h-2 rounded-full bg-edufa-yellow animate-pulse" />
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-xl ring-1 ring-white/20">
                                    <svg className="w-6 h-6 text-edufa-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span>{article.date}</span>
                            </div>
                            <div className="hidden sm:block w-2 h-2 rounded-full bg-edufa-yellow opacity-30" />
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-xl ring-1 ring-white/20">
                                    <svg className="w-6 h-6 text-edufa-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span>{article.readTime}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── Main Content Body ── */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-32 lg:-mt-56 pb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                        
                        {/* Article Main Content */}
                        <motion.article 
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-2 bg-white rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] ring-1 ring-gray-100 overflow-hidden"
                        >
                            {/* Feature-rich Header Image */}
                            <div className="aspect-[16/9] overflow-hidden bg-gray-100 relative group">
                                <img 
                                    src={article.image} 
                                    alt={article.title} 
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                {/* Image Overlay Badge */}
                                <div className="absolute bottom-8 left-8">
                                    <div className="bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2 rounded-2xl text-[10px] font-black text-white uppercase tracking-[0.2em] shadow-2xl">
                                        Capture moments of growth
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 sm:p-16 lg:p-24">
                                {/* Article Content Renderer */}
                                <div 
                                    className="prose prose-2xl max-w-none 
                                    prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-gray-900
                                    prose-h2:text-4xl prose-h2:mt-24 prose-h2:mb-10 prose-h2:pb-4 prose-h2:border-b-4 prose-h2:border-edufa-blue/10
                                    prose-h3:text-2xl prose-h3:mt-16 prose-h3:mb-6 prose-h3:text-edufa-blue
                                    prose-p:text-gray-600 prose-p:leading-[1.9] prose-p:mb-10 prose-p:font-medium
                                    prose-strong:text-gray-950 prose-strong:font-black
                                    prose-blockquote:border-l-[10px] prose-blockquote:border-edufa-blue prose-blockquote:bg-gradient-to-r prose-blockquote:from-blue-50/50 prose-blockquote:to-transparent prose-blockquote:px-12 prose-blockquote:py-10 prose-blockquote:rounded-r-[3rem] prose-blockquote:not-italic prose-blockquote:font-black prose-blockquote:text-gray-800 prose-blockquote:text-2xl
                                    prose-li:text-gray-600 prose-li:marker:text-edufa-blue prose-li:marker:font-black
                                    prose-img:rounded-[3rem] prose-img:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] prose-img:my-16"
                                    dangerouslySetInnerHTML={{ __html: article.content }}
                                />

                                {/* Social Tags */}
                                <div className="mt-24 pt-12 border-t border-gray-100 flex flex-wrap gap-4">
                                    {['Expert Insight', 'EDUfa Life', article.category, 'Growth Mindset'].map((tag) => (
                                        <span key={tag} className="px-8 py-4 rounded-3xl bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gray-900 hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer shadow-sm">
                                            #{tag.replace(/\s/g, '')}
                                        </span>
                                    ))}
                                </div>


                            </div>
                        </motion.article>

                        {/* Sidebar */}
                        <Sidebar currentSlug={article.slug} waLink={waLink} />

                    </div>
                </div>
            </main>

            {/* Premium Footer */}
            <footer className="bg-gray-50 pt-32 pb-20 border-t border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-edufa-blue/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-12 sm:flex-row">
                        <div className="flex flex-col items-center sm:items-start gap-4">
                            <div className="flex items-center">
                                <ApplicationLogo className="h-12 w-auto" />
                                <span className="ml-4 text-3xl font-black tracking-tighter">EDU<span className="text-edufa-blue">fa</span></span>
                            </div>
                            <p className="text-sm font-bold text-gray-400 max-w-xs text-center sm:text-left">
                                Menumbuhkan harapan, membangun masa depan dengan kasih dan edukasi terpercaya.
                            </p>
                        </div>
                        <div className="flex flex-col items-center sm:items-end gap-6">
                            <div className="flex gap-8">
                                {['Layanan', 'Cabang', 'Terapis', 'Kontak'].map(item => (
                                    <span key={item} className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-edufa-blue cursor-pointer transition-colors">{item}</span>
                                ))}
                            </div>
                            <p className="text-xs font-black text-gray-300">
                                &copy; {new Date().getFullYear()} EDUfa Centre. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
