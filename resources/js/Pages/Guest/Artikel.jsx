import React, { useState, useMemo } from 'react';
import { Head, Link } from '@inertiajs/react';
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

import { ARTICLES, CATEGORIES } from '@/constants/articles';

const PER_PAGE = 6;
const PLACEHOLDER = 'https://via.placeholder.com/600/0f59bc/ffffff?text=EDUfa';


/* ─────────────────────────────────────────────
   BADGE COLOR MAP
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
   AVATAR INITIALS
───────────────────────────────────────────── */
function Avatar({ name }) {
    const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
    return (
        <div className="w-9 h-9 rounded-full bg-edufa-blue flex items-center justify-center flex-shrink-0 ring-2 ring-white shadow text-white text-xs font-bold">
            {initials}
        </div>
    );
}

/* ─────────────────────────────────────────────
   ARTICLE CARD
───────────────────────────────────────────── */
function ArticleCard({ article }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35 }}
            className="group flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl ring-1 ring-gray-900/5 overflow-hidden transition-all duration-300 hover:-translate-y-1"
        >
            {/* Thumbnail */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    onError={(e) => { e.target.src = PLACEHOLDER; }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />

                {/* Category badge */}
                <span className={`absolute top-3 right-3 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow ${badgeClass(article.category)}`}>
                    {article.category}
                </span>

                {/* Read time */}
                <span className="absolute bottom-3 left-3 text-[10px] font-semibold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
                {/* Author row */}
                <div className="flex items-center gap-3 mb-4">
                    <Avatar name={article.author.name} />
                    <div className="min-w-0">
                        <p className="text-xs font-bold text-gray-900 truncate">{article.author.name}</p>
                        <p className="text-[10px] text-gray-400">{article.author.role} · {article.date}</p>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-extrabold text-gray-900 leading-snug line-clamp-3 mb-2 group-hover:text-edufa-blue transition-colors duration-200">
                    {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1 mb-5">
                    {article.description}
                </p>

                {/* Read More */}
                <Link
                    href={`/artikel/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-edufa-blue hover:text-white hover:bg-edufa-blue border-2 border-edufa-blue rounded-xl px-4 py-2 transition-all duration-200 self-start group/btn"
                >
                    Baca Selengkapnya
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   FEATURED CARD (article[0])
───────────────────────────────────────────── */
function FeaturedCard({ article }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl ring-1 ring-gray-900/5 overflow-hidden mb-12 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
        >
            {/* Image */}
            <div className="relative lg:w-1/2 aspect-[16/9] lg:aspect-auto overflow-hidden flex-shrink-0">
                <img
                    src={article.image}
                    alt={article.title}
                    onError={(e) => { e.target.src = PLACEHOLDER; }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg bg-edufa-yellow text-gray-900">
                    ✨ Pilihan Redaksi
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-10 lg:w-1/2">
                <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 self-start ${badgeClass(article.category)}`}>
                    {article.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug mb-4 group-hover:text-edufa-blue transition-colors duration-200">
                    {article.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3">{article.description}</p>
                <div className="flex items-center gap-3 mb-6">
                    <Avatar name={article.author.name} />
                    <div>
                        <p className="text-sm font-bold text-gray-900">{article.author.name}</p>
                        <p className="text-xs text-gray-400">{article.author.role} · {article.date} · {article.readTime}</p>
                    </div>
                </div>
                <Link
                    href={`/artikel/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white bg-edufa-blue hover:bg-blue-800 rounded-xl px-6 py-3 transition-all duration-200 self-start shadow-md hover:shadow-edufa-blue/30 hover:-translate-y-0.5 group/btn"
                >
                    Baca Selengkapnya
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Artikel() {
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const filtered = useMemo(() => {
        return ARTICLES.filter((a) => {
            const matchCat = activeCategory === 'Semua' || a.category === activeCategory;
            const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
                                a.description.toLowerCase().includes(search.toLowerCase());
            return matchCat && matchSearch;
        });
    }, [activeCategory, search]);

    const paginated = filtered.slice(0, page * PER_PAGE);
    const hasMore = paginated.length < filtered.length;

    // Featured = first article of full unfiltered list (only shown when no filter/search)
    const showFeatured = activeCategory === 'Semua' && search === '' && page === 1;
    const featuredArticle = ARTICLES[0];
    const gridArticles = showFeatured ? paginated.filter(a => a.id !== featuredArticle.id) : paginated;

    function handleCategoryChange(cat) {
        setActiveCategory(cat);
        setPage(1);
    }

    function handleSearch(e) {
        setSearch(e.target.value);
        setPage(1);
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 antialiased">
            <Head title="Artikel & Blog - EDUfa Centre" />
            <Header />

            <main>
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
                            Pengetahuan & Edukasi
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]"
                        >
                            <RevealText text="Artikel &" className="text-gray-900" />{' '}
                            <span className="relative inline-block mt-2">
                                <RevealText text="Blog EDUfa" className="text-edufa-blue" delay={0.5} />
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
                            Temukan informasi, tips, dan pengetahuan seputar psikologi, terapi, dan tumbuh kembang anak dari para ahli EDUfa.
                        </motion.p>

                        {/* Search bar integrated */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="mt-10 max-w-md mx-auto"
                        >
                            <div className="relative group">
                                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-edufa-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    value={search}
                                    onChange={handleSearch}
                                    placeholder="Cari artikel menarik..."
                                    className="w-full pl-12 pr-12 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-edufa-blue focus:bg-white transition-all text-sm font-medium shadow-sm"
                                />
                                {search && (
                                    <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-rose-500 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── Content ── */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">

                    {/* Filter tabs */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                        className="flex flex-wrap gap-3 justify-center mb-12">
                        {CATEGORIES.map((cat) => {
                            const count = cat === 'Semua' ? ARTICLES.length : ARTICLES.filter(a => a.category === cat).length;
                            return (
                                <button key={cat} onClick={() => handleCategoryChange(cat)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-200 shadow-sm ${activeCategory === cat ? 'bg-edufa-blue text-white shadow-edufa-blue/30 scale-105' : 'bg-white text-gray-600 hover:bg-gray-100 ring-1 ring-gray-200 hover:scale-105'}`}>
                                    {cat}
                                    <span className={`ml-2 text-[10px] rounded-full px-1.5 py-0.5 ${activeCategory === cat ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </motion.div>

                    {/* Featured article */}
                    {showFeatured && <FeaturedCard article={featuredArticle} />}

                    {/* Results info */}
                    {(search || activeCategory !== 'Semua') && (
                        <p className="text-sm text-gray-500 mb-6">
                            Menampilkan <span className="font-bold text-gray-900">{filtered.length}</span> artikel
                            {search && <> untuk "<span className="font-bold text-edufa-blue">{search}</span>"</>}
                            {activeCategory !== 'Semua' && <> dalam kategori <span className="font-bold text-edufa-blue">{activeCategory}</span></>}
                        </p>
                    )}

                    {/* Article grid */}
                    {filtered.length === 0 ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24 text-gray-400">
                            <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-lg font-semibold mb-1">Artikel tidak ditemukan</p>
                            <p className="text-sm">Coba kata kunci lain atau pilih kategori berbeda.</p>
                            <button onClick={() => { setSearch(''); setActiveCategory('Semua'); }}
                                className="mt-4 px-5 py-2 rounded-full bg-edufa-blue text-white text-sm font-bold hover:bg-blue-800 transition-colors">
                                Reset Filter
                            </button>
                        </motion.div>
                    ) : (
                        <>
                            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                <AnimatePresence>
                                    {gridArticles.map((article) => (
                                        <ArticleCard key={article.id} article={article} />
                                    ))}
                                </AnimatePresence>
                            </motion.div>

                            {/* Load More */}
                            {hasMore && (
                                <div className="text-center mt-14">
                                    <motion.button
                                        whileTap={{ scale: 0.96 }}
                                        onClick={() => setPage(p => p + 1)}
                                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-edufa-blue text-white font-bold text-sm shadow-lg shadow-edufa-blue/20 hover:bg-blue-800 hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        Muat Lebih Banyak
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </motion.button>
                                    <p className="mt-3 text-xs text-gray-400">
                                        Menampilkan {paginated.length} dari {filtered.length} artikel
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white py-12 border-t border-gray-100 mt-8">
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
        </div>
    );
}
