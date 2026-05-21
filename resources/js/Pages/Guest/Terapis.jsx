import React, { useState } from 'react';
import SEO from '@/Components/SEO';
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

export default function Terapis({ teamMembers = [] }) {
    const [selectedPerson, setSelectedPerson] = useState(null);

    // Filter therapists from database
    const therapists = teamMembers.filter(member => member.type === 'terapis').map(member => ({
        ...member,
        image: member.photo_url || '/default.svg'
    }));

    // Filter staff members from database
    const staffs = teamMembers.filter(member => member.type === 'staf').map(member => ({
        ...member,
        image: member.photo_url || '/default.svg'
    }));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
            <SEO 
                title="Tim Terapis & Staf" 
                description="Mengenal lebih dekat tim terapis profesional dan staf manajemen yang berdedikasi tinggi di EDUfa Centre."
            />
            
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
                    
                    {/* Floating Decorative Elements */}
                    <motion.div 
                        animate={{ y: [0, -20, 0], rotate: [0, 45, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 left-[10%] w-12 h-12 border-4 border-edufa-yellow/30 rounded-2xl hidden md:block"
                    />
                    <motion.div 
                        animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-20 right-[15%] w-16 h-16 border-4 border-edufa-blue/20 rounded-full hidden md:block"
                    />

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="mx-auto max-w-4xl text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-edufa-blue/5 border border-edufa-blue/10 text-edufa-blue text-xs font-black tracking-widest uppercase shadow-sm"
                            >
                                <span className="w-2 h-2 rounded-full bg-edufa-blue mr-3 animate-pulse"></span>
                                Tim Ahli & Profesional
                            </motion.div>
                            
                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]"
                            >
                                <span className="relative inline-block">
                                    <RevealText text="Tim Edufa Pusat" className="text-edufa-blue" />
                                    <motion.svg 
                                        viewBox="0 0 300 20" 
                                        className="absolute -bottom-2 left-0 w-full h-4 text-edufa-yellow"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ delay: 0.8, duration: 1 }}
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
                                Kami bangga memiliki tim yang tidak hanya kompeten, tetapi juga memiliki <span className="text-edufa-blue font-bold">hati dan dedikasi</span> untuk membantu setiap individu tumbuh maksimal.
                            </motion.p>
                        </div>
                    </div>
                </div>

                {/* Terapis Section */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative">
                        <div className="absolute -left-12 top-0 w-24 h-24 bg-edufa-yellow/20 rounded-full blur-2xl -z-10"></div>
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center gap-3">
                                <RevealText text="Tim Terapis" />
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                                <RevealText text="Para terapis berpengalaman kami siap mendampingi perjalanan perkembangan dan optimalisasi potensi Anda." delay={0.5} />
                            </p>
                        </div>
                        <div className="inline-flex items-center justify-center rounded-2xl bg-edufa-blue/5 px-6 py-3 text-sm font-bold text-edufa-blue ring-1 ring-inset ring-edufa-blue/10 whitespace-nowrap">
                            <span className="w-2 h-2 rounded-full bg-edufa-blue mr-2 animate-pulse"></span>
                            {therapists.length} Terapis Aktif
                        </div>
                    </div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-wrap justify-center gap-x-3 gap-y-6 sm:gap-x-8 sm:gap-y-12"
                    >
                        {therapists.map((person) => (
                            <motion.div 
                                key={`terapis-${person.id}`} 
                                variants={itemVariants} 
                                className="group relative flex flex-col h-full w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-1.334rem)] lg:w-[calc(25%-1.5rem)]"
                            >
                                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-50 relative mb-3 sm:mb-5 ring-1 ring-gray-900/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-edufa-blue/10">
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="h-full w-full object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                                        loading="lazy"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                        <button 
                                            onClick={() => setSelectedPerson(person)}
                                            className="w-full bg-white text-edufa-blue font-bold py-2 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-sm shadow-lg hover:bg-edufa-yellow hover:text-gray-900 transition-colors"
                                        >
                                            Perbesar
                                        </button>
                                    </div>
                                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-[-10px] group-hover:translate-y-0">
                                        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md text-edufa-blue">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow flex flex-col justify-start px-2">
                                    <h3 className="text-sm sm:text-xl font-bold text-gray-900 group-hover:text-edufa-blue transition-colors line-clamp-1" title={person.name}>{person.name}</h3>
                                    <p className="text-xs sm:text-sm font-semibold text-edufa-yellow mt-1">{person.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Staf Section */}
                <div className="mt-32 bg-gray-50 py-24 border-t border-gray-100 relative overflow-hidden rounded-t-[3rem]">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-edufa-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-edufa-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>
                    
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
                            <div className="mx-auto md:mx-0">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    <RevealText text="Tim Staf & Manajemen" />
                                </h2>
                                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto md:mx-0 text-balance">
                                    <RevealText text="Tulang punggung operasional yang memastikan setiap layanan EDUfa berjalan lancar, nyaman, dan terpusat." delay={0.5} />
                                </p>
                            </div>
                            <div className="inline-flex items-center justify-center rounded-2xl bg-edufa-yellow/10 px-6 py-3 text-sm font-bold text-amber-700 ring-1 ring-inset ring-edufa-yellow/30 mx-auto md:mx-0 whitespace-nowrap">
                                <span className="w-2 h-2 rounded-full bg-edufa-yellow mr-2 animate-pulse"></span>
                                {staffs.length} Staf Ahli
                            </div>
                        </div>

                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12"
                        >
                            {staffs.map((person) => (
                                <motion.div key={`staf-${person.id}`} variants={itemVariants} className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(20%-2rem)] group relative bg-white p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] shadow-sm ring-1 ring-gray-900/5 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-3 transition-all duration-300">
                                    <div className="absolute top-0 right-0 translate-x-2 -translate-y-2 w-12 h-12 bg-edufa-yellow/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="w-16 h-16 sm:w-28 sm:h-28 mx-auto overflow-hidden rounded-full bg-gray-50 mb-4 sm:mb-6 ring-2 sm:ring-4 ring-gray-50 group-hover:ring-edufa-yellow/30 transition-all duration-300 relative">
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="text-center relative z-10">
                                        <h3 className="text-xs sm:text-base font-bold text-gray-900 group-hover:text-edufa-blue transition-colors leading-tight">{person.name}</h3>
                                        <p className="text-[10px] sm:text-xs font-semibold text-gray-500 mt-1 sm:mt-2 bg-gray-50 py-1 sm:py-1.5 px-2 sm:px-3 rounded-md sm:rounded-lg inline-block leading-tight">{person.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </main>

            <footer className="bg-white py-12">
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

            {/* Modal Perbesar Foto */}
            <AnimatePresence>
                {selectedPerson && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/80 backdrop-blur-sm"
                        onClick={() => setSelectedPerson(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-2xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setSelectedPerson(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-900/10 backdrop-blur-md rounded-full text-gray-900 hover:bg-edufa-yellow hover:text-gray-900 transition-colors shadow-sm"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                            <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[400px] bg-gray-50 flex-shrink-0">
                                <img src={selectedPerson.image} alt={selectedPerson.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                                <div className="inline-block px-3 py-1 bg-edufa-yellow/20 text-amber-700 text-xs font-bold rounded-lg mb-4 w-fit">
                                    {selectedPerson.role}
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedPerson.name}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {selectedPerson.description || 'Anggota profesional dari tim EDUfa Centre yang berdedikasi untuk memberikan layanan dan pendampingan terbaik bagi Anda.'}
                                </p>
                                <button onClick={() => setSelectedPerson(null)} className="w-full py-3 px-6 rounded-xl bg-gray-100 text-gray-900 font-bold hover:bg-gray-200 transition-colors shadow-sm">
                                    Tutup
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
