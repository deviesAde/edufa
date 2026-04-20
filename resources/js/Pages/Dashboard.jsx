import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { MapPin, User, Globe, ChevronRight } from 'lucide-react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-black leading-tight text-gray-900 tracking-tight">
                    Ringkasan Dashboard
                </h2>
            }
        >
            <Head title="Admin Dashboard" />

            <div className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Stat Card 1 */}
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Cabang</p>
                        <p className="text-3xl font-black text-edufa-blue">35</p>
                    </div>
                    {/* Stat Card 2 */}
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Terapis</p>
                        <p className="text-3xl font-black text-edufa-yellow">124</p>
                    </div>
                    {/* Stat Card 3 */}
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Artikel Baru</p>
                        <p className="text-3xl font-black text-gray-900">12</p>
                    </div>
                </div>

                {/* Quick Navigation Section */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Navigasi Cepat</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link 
                            href={route('admin.branches.index')}
                            className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md hover:border-edufa-blue/30 transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-edufa-blue/10 flex items-center justify-center text-edufa-blue group-hover:bg-edufa-blue group-hover:text-white transition-colors">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-bold text-gray-900">Kelola Cabang</p>
                                    <p className="text-xs text-gray-500 font-medium whitespace-nowrap">Edit lokasi & koordinat peta</p>
                                </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-edufa-blue transform group-hover:translate-x-1 transition-all" />
                        </Link>

                        <Link 
                            href={route('profile.edit')}
                            className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md hover:border-edufa-yellow/30 transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-edufa-yellow/10 flex items-center justify-center text-edufa-yellow group-hover:bg-edufa-yellow group-hover:text-white transition-colors">
                                    <User className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-bold text-gray-900">Pengaturan Profil</p>
                                    <p className="text-xs text-gray-500 font-medium whitespace-nowrap">Ubah info akun & sandi</p>
                                </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-edufa-yellow transform group-hover:translate-x-1 transition-all" />
                        </Link>

                        <Link 
                            href="/"
                            className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md hover:border-gray-300 transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                                    <Globe className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-bold text-gray-900">Lihat Situs Utama</p>
                                    <p className="text-xs text-gray-500 font-medium whitespace-nowrap">Buka beranda publik</p>
                                </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-gray-900 transform group-hover:translate-x-1 transition-all" />
                        </Link>
                    </div>
                </div>

                {/* Welcome Info */}
                <div className="overflow-hidden bg-white shadow-sm shadow-gray-200/50 rounded-3xl border border-gray-100">
                    <div className="p-8 text-gray-900">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                            Selamat Datang Kembali! <span className="text-2xl animate-bounce">👋</span>
                        </h3>
                        <p className="text-gray-500 leading-relaxed font-medium">
                            Anda masuk ke dalam pusat kendali administratif EDUfa Centre. Semua perubahan yang Anda lakukan di sini akan langsung sinkron dengan situs utama dan peta lokasi.
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
