import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { LeafletMap } from '@/Components/ui/LeafletMap';
import { cn } from '@/lib/utils';

// Math function to calculate distance (in Kilometers) using Haversine formula
function getDistanceKM(lat1, lon1, lat2, lon2) {
    if (!lat1 || !lon1 || !lat2 || !lon2) return null;
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export default function Cabang({ branches = [] }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCity, setSelectedCity] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [isLocating, setIsLocating] = useState(false);
    const [locationError, setLocationError] = useState("");
    const [sortedBranches, setSortedBranches] = useState(branches);

   
    const filteredBranches = sortedBranches.filter(b => 
        b.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
        b.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const findNearest = () => {
        setIsLocating(true);
        setLocationError("");
        if (!navigator.geolocation) {
            setLocationError("Browser Anda tidak mendukung deteksi lokasi.");
            setIsLocating(false);
            return;
        }

        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setUserLocation({ lat, lng });
            
            // Calculate distance for all branches
            const locationsWithDistance = branches.map(branch => {
                const distance = getDistanceKM(lat, lng, branch.latitude, branch.longitude);
                return { ...branch, distance };
            }).sort((a, b) => {
                if (a.distance === null) return 1;
                if (b.distance === null) return -1;
                return a.distance - b.distance;
            });

            setSortedBranches(locationsWithDistance);
            setIsLocating(false);

            // Auto select nearest
            if (locationsWithDistance.length > 0) {
                setSelectedCity(locationsWithDistance[0].city);
            }
        }, (error) => {
            setLocationError("Gagal mengakses lokasi. Pastikan izin GPS aktif.");
            setIsLocating(false);
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 antialiased selection:bg-edufa-yellow/30">
            <Head title="Cabang Kami - Biografi & Peta | EDUfa Centre" />
            
            <Header />

            <main>
                {/* Hero Header */}
                <div className="relative bg-white py-16 md:py-24 border-b border-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-edufa-yellow/10 rounded-full blur-[100px]"></div>
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-edufa-blue/5 rounded-full blur-[100px]"></div>

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <span className="text-sm font-black text-edufa-blue tracking-[0.2em] uppercase bg-edufa-blue/10 px-4 py-1.5 rounded-full inline-block mb-6 shadow-sm border border-edufa-blue/20">Lokasi Kami</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6">
                            Temukan <span className="relative z-10 text-edufa-blue inline-block px-2">
                                <span className="relative z-10 text-white">Layanan EDUfa</span>
                                <span className="absolute inset-0 bg-edufa-blue -rotate-1 rounded-xl -z-10 shadow-lg shadow-edufa-blue/20"></span>
                            </span> <br className="hidden md:block" /> Terdekat di Kota Anda
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 font-medium">
                            Dengan puluhan jaringan kantor cabang di berbagai penjuru Nusantara, kami selalu hadir lebih dekat untuk mendampingi keluarga Anda.
                        </p>
                    </div>
                </div>

                {/* Map & Distance Control */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between border border-gray-100">
                        <div className="w-full md:w-auto flex-1">
                            <div className="relative">
                                <svg className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                <input 
                                    type="text" 
                                    className="w-full md:max-w-md bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-edufa-blue focus:border-edufa-blue transition-all placeholder:text-gray-400 font-medium"
                                    placeholder="Ketik untuk mencari cabang spesifik..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-auto hidden md:block w-px h-12 bg-gray-200"></div>

                        <div className="flex flex-col sm:flex-row items-center w-full md:w-auto gap-4">
                            <button 
                                onClick={findNearest}
                                disabled={isLocating}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-4 rounded-2xl font-bold hover:bg-edufa-blue transition-all disabled:opacity-50 group hover:-translate-y-1 shadow-lg hover:shadow-edufa-blue/30 active:scale-95"
                            >
                                {isLocating ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                ) : (
                                    <svg className="w-5 h-5 text-edufa-yellow group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                )}
                                Temukan Cabang Terdekat Saya
                            </button>
                        </div>
                    </div>
                    {locationError && (
                        <div className="mt-4 text-center text-sm font-semibold text-rose-500 bg-rose-50 py-3 rounded-xl border border-rose-100">
                            {locationError}
                        </div>
                    )}
                </div>

                <div className="py-12 md:py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                            
                            {/* Left: Map Container */}
                            <div className="lg:col-span-5 hidden md:block h-[500px] lg:h-[800px] sticky top-28 rounded-3xl overflow-hidden ring-4 ring-white shadow-2xl shadow-gray-200 bg-gray-100 relative group">
                                {typeof window !== 'undefined' && (
                                    <LeafletMap branches={filteredBranches} selectedCity={selectedCity} onSelectCity={setSelectedCity} />
                                )}
                                {/* Overlay indication */}
                                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-gray-100 text-sm font-medium text-gray-600 flex items-center justify-between z-[400] transition-opacity duration-300 opacity-60 group-hover:opacity-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-edufa-blue animate-pulse"></div>
                                        <span>Menampilkan {filteredBranches.length} titik lokasi</span>
                                    </div>
                                    <ApplicationLogo className="w-6 h-6 grayscale opacity-80" />
                                </div>
                            </div>

                            {/* Right: Card Grids */}
                            <div className="lg:col-span-7">
                                {userLocation && (
                                     <div className="mb-6 pb-4 border-b border-gray-200">
                                        <h3 className="text-xl font-bold text-gray-900">Hasil Pencarian Terdekat:</h3>
                                     </div>
                                )}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {filteredBranches.map((branch, idx) => {
                                        const isSelected = selectedCity === branch.city;
                                        // Dynamic illustration id based on string to keep it stable
                                        const hash = branch.city.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % 15;
                                        const imgId = [
                                            "1577896851231-70e6c0c451da", // building 1
                                            "1550592704-6c7bbe9d1df5", // building 2
                                            "1556816040-3b99676e1a65", // play room
                                            "1503676260728-1c00da094a0b", // learning
                                            "1572915830910-3882bbd1a499", // kid therapy
                                            "1497330752528-76159c952ff7", // kids playing outside
                                            "1585250495393-2ce16ef4213b", // school
                                            "1570125679585-6d0800dc05b2", // consulting
                                            "1580227220025-a131b2efbeed" // class
                                        ][hash % 9];

                                        return (
                                            <div 
                                                key={idx}
                                                id={`card-${branch.city}`}
                                                onClick={() => setSelectedCity(branch.city)}
                                                className={cn(
                                                    "bg-white rounded-3xl overflow-hidden border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 relative group flex flex-col",
                                                    isSelected ? "border-edufa-blue ring-1 ring-edufa-blue" : "border-gray-200"
                                                )}
                                            >
                                                {/* Distance Badge */}
                                                {branch.distance !== undefined && branch.distance !== null && (
                                                    <div className="absolute top-4 right-4 z-20 bg-gray-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 border border-white/20">
                                                        <svg className="w-3.5 h-3.5 text-edufa-yellow" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                                                        {branch.distance < 1 ? "< 1 KM" : `${Math.round(branch.distance)} KM`}
                                                    </div>
                                                )}

                                                <div className="h-48 w-full relative overflow-hidden bg-gray-100 flex-none">
                                                    <img 
                                                        src={branch.photo_url || `https://images.unsplash.com/photo-${imgId}?auto=format&fit=crop&q=80&w=600&h=400`} 
                                                        alt={`Cabang EDUfa ${branch.city}`} 
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        onError={(e) => {
                                                            if (branch.photo_url) {
                                                                e.target.src = `https://images.unsplash.com/photo-${imgId}?auto=format&fit=crop&q=80&w=600&h=400`;
                                                            }
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                                                    
                                                    {/* City Badge overlay */}
                                                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                                        <div>
                                                            <div className="text-white font-black text-2xl tracking-wide uppercase drop-shadow-lg leading-none">{branch.city}</div>
                                                            {branch.type && (
                                                                <div className="mt-2 inline-block bg-edufa-yellow text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest shadow-md">
                                                                    {branch.type}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="p-5 flex-1 flex flex-col justify-between">
                                                    <p className="text-sm font-medium text-gray-600 line-clamp-3 mb-4 leading-relaxed group-hover:text-gray-900 transition-colors">
                                                        {branch.address}
                                                    </p>
                                                    <a 
                                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address + " " + branch.city)}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="w-full text-center bg-gray-50 border border-gray-200 text-edufa-blue hover:bg-edufa-blue hover:text-white font-bold py-3 px-4 rounded-xl transition-colors text-sm"
                                                    >
                                                        Buka di Google Maps
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    {filteredBranches.length === 0 && (
                                        <div className="col-span-1 md:col-span-2 text-center py-20 bg-white border border-gray-200 border-dashed rounded-3xl">
                                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">Hasil Tidak Ditemukan</h3>
                                            <p className="text-gray-500">Cabang "{searchTerm}" tidak ada dalam daftar kami.</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </main>

            <footer className="border-t border-gray-100 bg-white py-12 mt-12 relative z-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex items-center">
                            <ApplicationLogo className="h-8 w-auto" />
                            <span className="ml-2 text-lg font-bold">EDU<span className="text-edufa-blue">fa</span></span>
                        </div>
                        <p className="text-sm leading-5 text-gray-500 font-medium">
                            &copy; {new Date().getFullYear()} EDUfa Centre. Menumbuhkan Harapan, Mencapai Masa Depan Terpercaya.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
