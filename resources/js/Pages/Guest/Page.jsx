import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import ServiceCards from '@/Components/ServiceCards';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head } from '@inertiajs/react';

export default function Page() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
            <Head title="Biro Psikologi & Pusat Layanan Terapi EDUfa" />
            
            <Header />

            <main>
                <Hero />

                <ServiceCards />

                <div className="bg-gray-50 py-16 sm:py-24 overflow-hidden relative">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-edufa-yellow/5 rounded-full blur-3xl"></div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-start">
                            <div>
                                <h2 className="text-base font-bold leading-7 text-edufa-blue uppercase tracking-widest bg-edufa-blue/5 inline-block px-4 py-1 rounded-full mb-6">Visi Kami</h2>
                                <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
                                    Membantu Orang Tua, Pendidik, dan Institusi untuk <span className="text-edufa-blue">Optimalisasi Potensi</span>
                                </p>
                                <p className="mt-6 text-xl leading-8 text-gray-600 italic border-l-4 border-edufa-yellow pl-6">
                                    "Membantu Orang Tua / Pendidik / Institusi dalam mengembangkan potensi anak / peserta didik / tenaga kerja secara optimal"
                                </p>
                            </div>
                            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 ring-1 ring-gray-900/5">
                                <h2 className="text-base font-bold leading-7 text-edufa-yellow uppercase tracking-widest mb-6">Misi Kami</h2>
                                <ul className="space-y-6">
                                    {[
                                        "Menyediakan jasa layanan secara lengkap.",
                                        "Memiliki sumberdaya manusia yang kredibel dan kompeten serta dilengkapi sarana prasarana yang memadai.",
                                        "Dijalankan dalam satu sistem manajemen yang terpusat, terarah dan bertujuan."
                                    ].map((misi, index) => (
                                        <li key={index} className="flex gap-x-4">
                                            <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-edufa-yellow/20 text-edufa-blue font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-700 font-medium leading-relaxed">{misi}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tentang EDUfa Centre</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-600">
                                Berdiri sejak <span className="font-bold text-edufa-blue underline decoration-edufa-yellow decoration-2 underline-offset-4">31 Mei 2012 di Bandung</span>, kami hadir sebagai solusi terpadu untuk pendidikan dan psikologi.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                            <div className="p-8 rounded-3xl bg-edufa-blue/5 border border-edufa-blue/10 relative overflow-hidden group hover:bg-edufa-blue/10 transition-colors">
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-edufa-blue/10 rounded-full blur-2xl group-hover:bg-edufa-blue/20"></div>
                                <h3 className="text-2xl font-bold text-edufa-blue mb-4">Yayasan EDUfa Salamanca</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Fokus pada menyediakan <span className="font-bold">pendidikan inklusi</span> untuk semua anak, memastikan setiap anak mendapatkan kesempatan belajar yang setara dan bermartabat.
                                </p>
                                <p className="mt-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
                                    No. Akte Yayasan: <span className="text-edufa-blue">AHU-AH.01.06-0040306</span>
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-edufa-yellow/5 border border-edufa-yellow/10 relative overflow-hidden group hover:bg-edufa-yellow/10 transition-colors">
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-edufa-yellow/10 rounded-full blur-2xl group-hover:bg-edufa-yellow/20"></div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Biro Psikologi EDUfa Counseling</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Fokus pada membantu <span className="font-bold text-edufa-blue">mengembangkan potensi</span> anak, peserta didik, hingga tenaga kerja secara profesional dan optimal.
                                </p>
                                <p className="mt-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
                                    SIPP No: <span className="text-edufa-blue">201220017-2025-04-0720</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-100">
                            <div className="w-24 h-24 rounded-full bg-edufa-blue/10 flex items-center justify-center flex-none ring-4 ring-white shadow-sm">
                                <svg className="w-12 h-12 text-edufa-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-edufa-blue uppercase tracking-widest mb-1">Penanggung Jawab & Ketua Yayasan</h4>
                                <p className="text-xl font-bold text-gray-900">Dr. Ernie C. Siregar, S.Psi, M.Pd, Psikolog</p>
                                <p className="text-gray-500 text-sm mt-1">Kepemimpinan yang berlandaskan pada keahlian psikologi dan pendidikan yang mendalam.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* KEUNGGULAN KAMI */}
                <div className="bg-edufa-blue py-24 sm:py-32 relative overflow-hidden">
                    <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-edufa-yellow/10 blur-[120px] rounded-full"></div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="mx-auto max-w-2xl lg:text-center mb-16">
                            <h2 className="text-base font-bold leading-7 text-edufa-yellow uppercase tracking-widest">Alasan Memilih Kami</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Keunggulan EDUfa Centre</p>
                        </div>
                        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { title: "Layanan Lengkap", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
                                { title: "Tempat Nyaman", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                                { title: "SDM Kredibel", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                                { title: "Manajemen Terpusat", icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/20 transition-all hover:-translate-y-1">
                                    <div className="w-16 h-16 rounded-2xl bg-edufa-yellow/20 flex items-center justify-center mb-6 ring-1 ring-edufa-yellow/30 shadow-lg shadow-edufa-yellow/10">
                                        <svg className="w-8 h-8 text-edufa-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${item.icon}" />` }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white text-center">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <footer className="border-t border-gray-100 bg-white py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex items-center">
                            <ApplicationLogo className="h-8 w-auto" />
                            <span className="ml-2 text-lg font-bold">EDU<span className="text-edufa-blue">fa</span></span>
                        </div>
                        <p className="text-sm leading-5 text-gray-500">
                            &copy; 2024 EDUfa Centre. Menumbuhkan Harapan, Mencapai Masa Depan Terpercaya.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}