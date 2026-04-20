import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { LeafletMap } from '@/Components/ui/LeafletMap';
export default function BranchSection({ branches = [] }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCity, setSelectedCity] = useState(null);

    const filteredBranches = branches.filter(branch => 
        branch.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
        branch.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white py-24 sm:py-32 relative overflow-hidden">
            {/* Ambient gradients light mode */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-edufa-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-edufa-yellow/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Left: Map & Title */}
                    <div className="flex flex-col h-full h-[600px] lg:h-[700px]">
                        <div className="mb-8">
                            <h2 className="text-sm font-black leading-7 text-edufa-blue uppercase tracking-[0.2em] mb-2 bg-edufa-blue/10 inline-block px-4 py-1 rounded-full">
                                Jaringan Cabang
                            </h2>
                            <h3 className="text-3xl font-black tracking-tight text-gray-900 md:text-5xl lg:text-6xl mb-6">
                                Temukan EDUfa di Kotamu!
                            </h3>
                            <p className="text-lg text-gray-600 font-medium">
                                Berkomitmen untuk dapat menjangkau dan membantu lebih banyak anak & keluarga, EDUfa telah hadir dengan puluhan cabang strategis.
                            </p>
                        </div>
                        
                        <div className="flex-1 w-full rounded-3xl overflow-hidden ring-1 ring-gray-900/5 shadow-xl shadow-gray-200/50 bg-gray-50 border border-gray-100">
                            {typeof window !== 'undefined' && (
                                <LeafletMap branches={branches} selectedCity={selectedCity} onSelectCity={setSelectedCity} />
                            )}
                        </div>
                    </div>

                    {/* Right: Scrollable Locations */}
                    <div className="flex flex-col bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xl shadow-gray-200/50 h-[600px] lg:h-[700px]">
                        <div className="mb-6">
                            <div className="relative">
                                <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                <input 
                                    type="text" 
                                    placeholder="Cari Kota atau Daerah..." 
                                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-edufa-blue focus:border-transparent transition-all placeholder:text-gray-400"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-4 space-y-4 custom-scrollbar">
                            {filteredBranches.map((branch, idx) => {
                                const isSelected = selectedCity === branch.city;
                                return (
                                    <div 
                                        key={idx} 
                                        onClick={() => setSelectedCity(branch.city)}
                                        className={cn(
                                            "group bg-white hover:bg-gray-50 border p-5 rounded-2xl transition-all cursor-pointer shadow-sm hover:shadow-md",
                                            isSelected ? "border-edufa-blue ring-1 ring-edufa-blue bg-blue-50/50" : "border-gray-100"
                                        )}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={cn(
                                                "w-12 h-12 rounded-xl overflow-hidden flex-none border-2 transition-all",
                                                isSelected ? "border-edufa-blue shadow-lg shadow-edufa-blue/20 scale-110" : "border-gray-50"
                                            )}>
                                                {branch.photo_url ? (
                                                    <img src={branch.photo_url} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className={cn(
                                                        "w-full h-full flex items-center justify-center transition-colors",
                                                        isSelected ? "bg-edufa-blue text-white" : "bg-edufa-blue/10 text-edufa-blue group-hover:bg-edufa-blue group-hover:text-white"
                                                    )}>
                                                        <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                                    <h4 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                                                        {branch.city}
                                                    </h4>
                                                    {branch.type && (
                                                        <span className="text-[10px] bg-edufa-yellow text-amber-900 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                                                            {branch.type}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                                    {branch.address}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {filteredBranches.length === 0 && (
                                <div className="text-center py-12 text-gray-500">
                                    Pencarian kota "{searchTerm}" tidak ditemukan.
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.02);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(0, 0, 0, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </div>
    );
}
