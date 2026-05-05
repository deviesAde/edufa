import { useState, useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import Dropdown from '@/Components/Dropdown';
import FloatingWhatsApp from '@/Components/ui/FloatingWhatsApp';
import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [showingNavigationMenu, setShowingNavigationMenu] = useState(false);
    const [showingPelayananMenu, setShowingPelayananMenu] = useState(false);

    return (
        <>
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="sticky top-0 z-[100] border-b border-gray-100 bg-white/95 backdrop-blur-md transition-all duration-300"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 sm:h-24 items-center justify-between">
                        {/* Logo Section */}
                        <div className="flex shrink-0 items-center">
                            <Link href="/" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                                <ApplicationLogo className="h-16 w-auto sm:h-20 object-contain" />
                            </Link>
                        </div>

                        {/* Centered Navigation Section */}
                        <div className="hidden flex-1 justify-center sm:flex">
                            <div className="flex items-center space-x-2 lg:space-x-8">
                                {[
                                    { name: 'Home', href: route('home'), active: route().current('home') },
                                    { name: 'Cabang', href: route('cabang'), active: route().current('cabang') },
                                    { name: 'Terapis', href: route('terapis'), active: route().current('terapis') },
                                    { name: 'Kegiatan', href: route('kegiatan'), active: route().current('kegiatan') },
                                    { name: 'Artikel', href: route('artikel'), active: route().current('artikel') },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                    >
                                        <NavLink 
                                            href={item.href} 
                                            active={item.active}
                                            className="text-base lg:text-lg font-bold"
                                        >
                                            {item.name}
                                        </NavLink>
                                    </motion.div>
                                ))}
                                
                                <motion.div 
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="inline-flex items-center"
                                >
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <button className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-base lg:text-lg font-bold leading-5 text-gray-500 transition duration-150 ease-in-out hover:border-edufa-yellow hover:text-gray-900 focus:outline-none">
                                                Pelayanan
                                                <svg className="ml-1 h-5 w-5 fill-current text-edufa-blue" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content contentClasses="w-72 bg-white py-2 shadow-2xl rounded-2xl border border-gray-100">
                                            <Dropdown.Link href={route('pelayanan.asesmen')} className="hover:bg-edufa-blue hover:text-white font-bold transition-colors py-3">Asesmen Psikologi</Dropdown.Link>
                                            <Dropdown.Link href={route('pelayanan.pelatihan')} className="hover:bg-edufa-blue hover:text-white font-bold transition-colors py-3">Pelatihan</Dropdown.Link>
                                            <Dropdown.Link href={route('pelayanan.konseling')} className="hover:bg-edufa-blue hover:text-white font-bold transition-colors py-3">Konseling</Dropdown.Link>
                                            <Dropdown.Link href={route('pelayanan.terapi')} className="hover:bg-edufa-blue hover:text-white font-bold transition-colors py-3">Terapi</Dropdown.Link>
                                            <Dropdown.Link href={route('pelayanan.paud')} className="hover:bg-edufa-blue hover:text-white font-bold transition-colors py-3">PAUD EDUfa Kids</Dropdown.Link>
                                            <Dropdown.Link href={route('pelayanan.pendampingan')} className="hover:bg-edufa-blue hover:text-white font-bold transition-colors py-3">Pendampingan ABK di Sekolah</Dropdown.Link>
                                            <Dropdown.Link href={route('pelayanan.balai')} className="hover:bg-edufa-blue hover:text-white font-bold transition-colors py-3">Balai Latihan Kerja dan Kehidupan</Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Section (Mobile Menu / Placeholder) */}
                        <div className="flex items-center sm:hidden lg:flex lg:w-[200px] justify-end">
                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() => setShowingNavigationMenu((previousState) => !previousState)}
                                    className="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none ring-1 ring-gray-100"
                                >
                                    <svg className="h-7 w-7 text-edufa-blue" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path
                                            className={!showingNavigationMenu ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={showingNavigationMenu ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {showingNavigationMenu && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="sm:hidden bg-white border-t border-gray-100 overflow-hidden"
                        >
                            <div className="space-y-1 pb-3 pt-2">
                                <Link
                                    href={route('home')}
                                    className={`block w-full border-l-4 py-3 pl-3 pr-4 text-left text-base transition duration-150 ease-in-out ${route().current('home') ? 'border-edufa-yellow font-bold text-gray-900 bg-edufa-yellow/10' : 'border-transparent font-medium text-gray-600 hover:border-edufa-yellow hover:bg-edufa-yellow/5 hover:text-gray-900'}`}
                                >
                                    Home
                                </Link>
                                
                                <Link href={route('cabang')} className={`block w-full border-l-4 py-3 pl-3 pr-4 text-left text-base transition duration-150 ease-in-out ${route().current('cabang') ? 'border-edufa-yellow font-bold text-gray-900 bg-edufa-yellow/10' : 'border-transparent font-medium text-gray-600 hover:border-edufa-yellow hover:bg-edufa-yellow/5 hover:text-gray-900'}`}>
                                    Cabang
                                </Link>
                                
                                <Link
                                    href={route('terapis')}
                                    className={`block w-full border-l-4 py-3 pl-3 pr-4 text-left text-base transition duration-150 ease-in-out ${route().current('terapis') ? 'border-edufa-yellow font-bold text-gray-900 bg-edufa-yellow/10' : 'border-transparent font-medium text-gray-600 hover:border-edufa-yellow hover:bg-edufa-yellow/5 hover:text-gray-900'}`}
                                >
                                    Terapis
                                </Link>
                                
                                <Link
                                    href={route('kegiatan')}
                                    className={`block w-full border-l-4 py-3 pl-3 pr-4 text-left text-base transition duration-150 ease-in-out ${route().current('kegiatan') ? 'border-edufa-yellow font-bold text-gray-900 bg-edufa-yellow/10' : 'border-transparent font-medium text-gray-600 hover:border-edufa-yellow hover:bg-edufa-yellow/5 hover:text-gray-900'}`}
                                >
                                    Kegiatan
                                </Link>
                                
                                <Link
                                    href={route('artikel')}
                                    className={`block w-full border-l-4 py-3 pl-3 pr-4 text-left text-base transition duration-150 ease-in-out ${route().current('artikel') ? 'border-edufa-yellow font-bold text-gray-900 bg-edufa-yellow/10' : 'border-transparent font-medium text-gray-600 hover:border-edufa-yellow hover:bg-edufa-yellow/5 hover:text-gray-900'}`}
                                >
                                    Artikel
                                </Link>
                                
                                <div className="bg-gray-50 py-2 border-y border-gray-100">
                                    <button 
                                        onClick={() => setShowingPelayananMenu(!showingPelayananMenu)}
                                        className="w-full flex items-center justify-between px-4 py-2 text-left hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="text-sm font-bold text-edufa-blue uppercase tracking-widest">Pelayanan</span>
                                        <svg className={`h-5 w-5 text-edufa-blue transition-transform duration-200 ${showingPelayananMenu ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showingPelayananMenu ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                        <Link href={route('pelayanan.asesmen')} className="block py-3 pl-8 pr-4 text-sm font-medium text-gray-600 hover:bg-edufa-blue hover:text-white transition-colors">Asesmen Psikologi</Link>
                                        <Link href={route('pelayanan.pelatihan')} className="block py-3 pl-8 pr-4 text-sm font-medium text-gray-600 hover:bg-edufa-blue hover:text-white transition-colors">Pelatihan</Link>
                                        <Link href={route('pelayanan.konseling')} className="block py-3 pl-8 pr-4 text-sm font-medium text-gray-600 hover:bg-edufa-blue hover:text-white transition-colors">Konseling</Link>
                                        <Link href={route('pelayanan.terapi')} className="block py-3 pl-8 pr-4 text-sm font-medium text-gray-600 hover:bg-edufa-blue hover:text-white transition-colors">Terapi</Link>
                                        <Link href={route('pelayanan.paud')} className="block py-3 pl-8 pr-4 text-sm font-medium text-gray-600 hover:bg-edufa-blue hover:text-white transition-colors">PAUD EDUfa Kids</Link>
                                        <Link href={route('pelayanan.pendampingan')} className="block py-3 pl-8 pr-4 text-sm font-medium text-gray-600 hover:bg-edufa-blue hover:text-white transition-colors">Pendampingan ABK di Sekolah</Link>
                                        <Link href={route('pelayanan.balai')} className="block py-3 pl-8 pr-4 text-sm font-medium text-gray-600 hover:bg-edufa-blue hover:text-white transition-colors">Balai Latihan Kerja dan Kehidupan</Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            <FloatingWhatsApp />
        </>
    );
}
