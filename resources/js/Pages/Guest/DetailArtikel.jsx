import React, { useMemo, useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { motion, useScroll, useSpring } from 'framer-motion';
// Removed static constants

/* ─────────────────────────────────────────────
   AVATAR COMPONENT
───────────────────────────────────────────── */
function Avatar({ name, size = 'md' }) {
    const initials = name ? name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase() : 'A';
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
function Sidebar({ article, related = [], waLink }) {
    const authorName = article.author_name || "Dr. Ernie C. Siregar";
    const authorRole = article.author_role || "Psikolog Klinis";
    const authorBio = article.author_bio || "Berdedikasi dalam mendampingi tumbuh kembang anak dan memberikan solusi psikologis terbaik bagi keluarga Indonesia selama lebih dari satu dekade.";
    const showExpert = !!article.show_expert_voice;

    return (
        <aside className="lg:col-span-1 space-y-10">
            {/* Spacer to keep layout consistent if Expert Voice is hidden */}
            {!showExpert && <div className="hidden lg:block h-32" />}

            {/* Author Profile */}
            {showExpert && (
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
                            <Avatar name={authorName} />
                            <div>
                                <p className="text-xl font-black text-gray-900 tracking-tight leading-none mb-1">{authorName}</p>
                                <p className="text-[10px] text-edufa-blue font-black uppercase tracking-widest bg-blue-50 inline-block px-2 py-0.5 rounded-md">{authorRole}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed font-medium">
                            {authorBio}
                        </p>
                    </div>
                </motion.div>
            )}

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
                    {related.map((item) => (
                        <Link 
                            key={item.id} 
                            href={route('artikel.show', item.slug)}
                            className="group flex gap-6 items-start"
                        >
                            <div className="w-20 h-20 rounded-3xl overflow-hidden flex-shrink-0 ring-1 ring-gray-100 shadow-xl transition-all duration-500 group-hover:shadow-edufa-blue/20">
                                <img 
                                    src={item.thumbnail_path ? `/storage/${item.thumbnail_path}` : 'https://via.placeholder.com/200'} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h5 className="text-sm font-black text-gray-900 leading-snug line-clamp-2 group-hover:text-edufa-blue transition-colors duration-300">
                                    {item.title}
                                </h5>
                                <div className="flex items-center gap-3 mt-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-edufa-yellow shadow-sm shadow-edufa-yellow/50" />
                                    <p className="text-[9px] text-gray-400 font-black uppercase tracking-[0.1em]">
                                        {new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                                    </p>
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
                    </a>
                </div>
            </motion.div>
        </aside>
    );
}

/* ─────────────────────────────────────────────
   DETAIL PAGE COMPONENT
───────────────────────────────────────────── */
export default function DetailArtikel({ article, relatedArticles = [] }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const waLink = "https://wa.me/6281234567890?text=Halo%20EDUfa,%20saya%20ingin%20tanya%20tentang%20" + encodeURIComponent(article.title);

    const formattedDate = new Date(article.created_at).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

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
                <div className="relative pt-24 pb-48 lg:pt-32 lg:pb-72 bg-edufa-blue overflow-hidden rounded-b-[5rem] lg:rounded-b-[8rem]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-10 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-edufa-yellow opacity-10 rounded-full blur-[140px] -translate-x-1/2 translate-y-1/2" />
                    </div>

                    <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-center mb-12"
                        >
                            <span className="px-6 py-2 rounded-full backdrop-blur-xl border border-white/20 text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl bg-edufa-yellow text-gray-900">
                                {article.category || 'Expert Insight'}
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                            className="text-4xl sm:text-5xl lg:text-[4.5rem] font-black text-white leading-[1] tracking-tight text-center mb-16 max-w-5xl mx-auto"
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
                                <span>
                                    {!!article.show_expert_voice ? (article.author_name || "Dr. Ernie C. Siregar") : (article.user?.name || "Admin")}
                                </span>
                            </div>
                            <div className="hidden sm:block w-2 h-2 rounded-full bg-edufa-yellow animate-pulse" />
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-xl ring-1 ring-white/20">
                                    <svg className="w-6 h-6 text-edufa-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span>{formattedDate}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-32 lg:-mt-56 pb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                        <motion.article 
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-2 bg-white rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] ring-1 ring-gray-100 overflow-hidden"
                        >
                            <div className="aspect-[16/9] overflow-hidden bg-gray-100 relative group">
                                <img 
                                    src={article.thumbnail_path ? `/storage/${article.thumbnail_path}` : 'https://via.placeholder.com/1200x800'} 
                                    alt={article.title} 
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                />
                            </div>

                            <div className="p-10 sm:p-16 lg:p-24">
                                <div 
                                    className="prose prose-2xl max-w-none 
                                    prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-gray-900
                                    prose-h2:text-4xl prose-h2:mt-24 prose-h2:mb-10 prose-h2:pb-4 prose-h2:border-b-4 prose-h2:border-edufa-blue/10
                                    prose-p:text-gray-600 prose-p:leading-[1.9] prose-p:mb-10 prose-p:font-medium
                                    prose-blockquote:border-l-[10px] prose-blockquote:border-edufa-blue prose-blockquote:bg-gradient-to-r prose-blockquote:from-blue-50/50 prose-blockquote:to-transparent prose-blockquote:px-12 prose-blockquote:py-10 prose-blockquote:rounded-r-[3rem] prose-blockquote:not-italic prose-blockquote:font-black prose-blockquote:text-gray-800 prose-blockquote:text-2xl"
                                    dangerouslySetInnerHTML={{ __html: article.content }}
                                />
                            </div>
                        </motion.article>

                        <Sidebar article={article} related={relatedArticles} waLink={waLink} />
                    </div>
                </div>
            </main>

            <footer className="bg-gray-50 pt-32 pb-20 border-t border-gray-100 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-12 sm:flex-row">
                        <div className="flex items-center">
                            <ApplicationLogo className="h-12 w-auto" />
                            <span className="ml-4 text-3xl font-black tracking-tighter">EDU<span className="text-edufa-blue">fa</span></span>
                        </div>
                        <p className="text-xs font-black text-gray-300">
                            &copy; {new Date().getFullYear()} EDUfa Centre. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
