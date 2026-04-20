import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import Dropdown from '@/Components/Dropdown';
import { Link } from '@inertiajs/react';

export default function Header() {
    const [showingNavigationMenu, setShowingNavigationMenu] = useState(false);
    const [showingPelayananMenu, setShowingPelayananMenu] = useState(false);

    const waLink = "https://wa.me/6281234567890?text=Halo%20EDUfa,%20saya%20ingin%20konsultasi%20dan%20daftar";

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md transition-all duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center">
                        <div className="flex shrink-0 items-center">
                            <Link href="/" className="relative group">
                                <div className="absolute -top-4 left-0 z-50 flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-100 bg-white p-3 shadow-xl shadow-gray-200/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-edufa-yellow/30 sm:-top-6 sm:h-32 sm:w-32 sm:rounded-3xl sm:p-4">
                                    <ApplicationLogo className="h-16 w-16 object-contain sm:h-24 sm:w-24" />
                                </div>
                                {/* Spacer to prevent following elements from overlapping the hanging logo */}
                                <div className="h-20 w-24 sm:w-32"></div>
                            </Link>
                        </div>

                        <div className="hidden space-x-4 sm:-my-px sm:ml-10 sm:flex lg:ml-16 lg:space-x-10">
                            <NavLink href={route('home')} active={route().current('home')}>
                                Home
                            </NavLink>
                            <NavLink href="#">Cabang</NavLink>
                            <NavLink href={route('terapis')} active={route().current('terapis')}>Terapis</NavLink>
                            <NavLink href={route('cabang')} active={route().current('cabang')}>
                                Cabang
                            </NavLink>
                            <NavLink href="#">Terapis</NavLink>
                            <NavLink href="#">Kegiatan</NavLink>
                            <NavLink href="#">Artikel</NavLink>
                            
                            {/* Dropdown for Pelayanan */}
                            <div className="inline-flex items-center">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-semibold leading-5 text-gray-500 transition duration-150 ease-in-out hover:border-edufa-yellow hover:text-gray-900 focus:outline-none">
                                            Pelayanan
                                            <svg className="ml-1 h-4 w-4 fill-current text-edufa-blue" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content contentClasses="w-64 bg-white py-1">
                                        <Dropdown.Link href={route('pelayanan.asesmen')} className="hover:bg-edufa-blue hover:text-white font-medium transition-colors">Asesmen Psikologi</Dropdown.Link>
                                        <Dropdown.Link href={route('pelayanan.pelatihan')} className="hover:bg-edufa-blue hover:text-white font-medium transition-colors">Pelatihan</Dropdown.Link>
                                        <Dropdown.Link href={route('pelayanan.konseling')} className="hover:bg-edufa-blue hover:text-white font-medium transition-colors">Konseling</Dropdown.Link>
                                        <Dropdown.Link href={route('pelayanan.terapi')} className="hover:bg-edufa-blue hover:text-white font-medium transition-colors">Terapi</Dropdown.Link>
                                        <Dropdown.Link href={route('pelayanan.paud')} className="hover:bg-edufa-blue hover:text-white font-medium transition-colors">PAUD EDUfa Kids</Dropdown.Link>
                                        <Dropdown.Link href={route('pelayanan.pendampingan')} className="hover:bg-edufa-blue hover:text-white font-medium transition-colors">Pendampingan ABK di Sekolah</Dropdown.Link>
                                        <Dropdown.Link href={route('pelayanan.balai')} className="hover:bg-edufa-blue hover:text-white font-medium transition-colors">Balai Latihan Kerja dan Kehidupan</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:ml-4 sm:flex sm:items-center space-x-4">
                         <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-x-2 rounded-full bg-edufa-yellow px-7 py-3 text-sm font-bold text-gray-900 shadow-lg shadow-edufa-yellow/30 hover:bg-edufa-yellow/90 hover:scale-[1.02] transition-all active:scale-95 whitespace-nowrap ring-1 ring-edufa-yellow/50"
                        >
                            <svg className="h-5 w-5 text-edufa-blue" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.658 1.43 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Konsultasi | Daftar Sekarang
                        </a>
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setShowingNavigationMenu((previousState) => !previousState)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                        >
                            <svg className="h-6 w-6 text-edufa-blue" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={!showingNavigationMenu ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={showingNavigationMenu ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={(showingNavigationMenu ? 'block' : 'hidden') + ' sm:hidden bg-white border-t border-gray-100'}>
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
    
    <button className="block w-full border-l-4 border-transparent py-3 pl-3 pr-4 text-left text-base font-medium text-gray-600 transition duration-150 ease-in-out hover:border-edufa-yellow hover:bg-edufa-yellow/5 hover:text-gray-900">
        Terapis
    </button>
    
    <button className="block w-full border-l-4 border-transparent py-3 pl-3 pr-4 text-left text-base font-medium text-gray-600 transition duration-150 ease-in-out hover:border-edufa-yellow hover:bg-edufa-yellow/5 hover:text-gray-900">
        Kegiatan
    </button>
    
    <button className="block w-full border-l-4 border-transparent py-3 pl-3 pr-4 text-left text-base font-medium text-gray-600 transition duration-150 ease-in-out hover:border-edufa-yellow hover:bg-edufa-yellow/5 hover:text-gray-900">
        Artikel
    </button>
    
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

            <div className="border-t border-gray-100 pt-4 pb-1 px-4 text-center">
                <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-full bg-edufa-yellow py-4 text-center text-base font-bold text-gray-900 shadow-md hover:bg-edufa-yellow/90 transition-all active:scale-95"
                >
                    Konsultasi | Daftar Sekarang
                </a>
            </div>
        </div>

            </div>
        </nav>
    );
}
