import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

const statusMessages = {
    404: {
        title: 'Halaman Tidak Ditemukan',
        description: 'Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.',
        emoji: '🔍',
    },
    410: {
        title: 'Halaman Sudah Tidak Tersedia',
        description: 'Halaman ini sudah dihapus secara permanen dan tidak lagi tersedia.',
        emoji: '🚫',
    },
    500: {
        title: 'Terjadi Kesalahan Server',
        description: 'Maaf, terjadi kesalahan pada server kami. Tim kami sedang memperbaikinya.',
        emoji: '⚙️',
    },
    503: {
        title: 'Situs Sedang Dalam Pemeliharaan',
        description: 'Kami sedang melakukan pemeliharaan. Silakan coba beberapa saat lagi.',
        emoji: '🛠️',
    },
};

export default function Error({ status = 404 }) {
    const { title, description, emoji } = statusMessages[status] || statusMessages[500];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
            <Head>
                <title>{title} | EDUfa Centre</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            {/* Simple Header without route() dependency */}
            <nav className="sticky top-0 z-[100] border-b border-gray-100 bg-white/95 backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 sm:h-24 items-center">
                        <a href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                            <img src="/logo.png" alt="EDUfa Centre" className="h-16 w-auto sm:h-20 object-contain" />
                        </a>
                        <div className="ml-auto">
                            <a
                                href="/"
                                className="text-sm font-bold text-edufa-blue hover:text-edufa-blue/80 transition-colors"
                            >
                                ← Kembali ke Beranda
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex flex-col items-center justify-center px-6 py-20 lg:py-32">
                {/* Animated Status Number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mb-8"
                >
                    <span className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-black leading-none bg-gradient-to-br from-edufa-blue via-edufa-blue/80 to-edufa-yellow bg-clip-text text-transparent select-none">
                        {status}
                    </span>
                    <motion.span
                        animate={{ 
                            y: [0, -15, 0],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 text-5xl sm:text-7xl"
                    >
                        {emoji}
                    </motion.span>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-center max-w-xl"
                >
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                        {title}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-500 mb-10 leading-relaxed">
                        {description}
                    </p>
                </motion.div>

                {/* Action Buttons - all using plain <a> tags for reliability */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-edufa-blue rounded-2xl shadow-lg shadow-edufa-blue/25 hover:shadow-xl hover:shadow-edufa-blue/30 hover:-translate-y-0.5 transition-all duration-200"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Kembali ke Beranda
                    </a>
                    <a
                        href="/artikel"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-edufa-blue bg-edufa-yellow/20 rounded-2xl border-2 border-edufa-yellow hover:bg-edufa-yellow hover:text-gray-900 hover:-translate-y-0.5 transition-all duration-200"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        Baca Artikel
                    </a>
                </motion.div>

                {/* Quick Links - plain <a> tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm text-gray-400 mb-4 font-medium uppercase tracking-widest">Atau kunjungi halaman ini</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { name: 'Cabang', href: '/cabang' },
                            { name: 'Terapis', href: '/terapis' },
                            { name: 'Kegiatan', href: '/kegiatan' },
                            { name: 'Asesmen', href: '/pelayanan/asesmen-psikologi' },
                            { name: 'Terapi', href: '/pelayanan/terapi' },
                        ].map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-50 rounded-xl hover:bg-edufa-blue hover:text-white transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
