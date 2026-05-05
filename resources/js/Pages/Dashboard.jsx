import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { MapPin, User, Globe, ChevronRight, FileText, Layout, Plus, ArrowUpRight, Camera, PenSquare } from 'lucide-react';

export default function Dashboard({ stats, recentArticles, recentActivities }) {
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
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Stat Card 1 */}
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 rounded-2xl bg-blue-50 text-edufa-blue">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full uppercase tracking-widest">Active</span>
                        </div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Cabang</p>
                        <p className="text-3xl font-black text-gray-900">{stats.totalBranches}</p>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-500">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 rounded-2xl bg-yellow-50 text-edufa-yellow">
                                <User className="h-5 w-5" />
                            </div>
                            <span className="text-[10px] font-black text-blue-500 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-widest">Staff</span>
                        </div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Anggota Tim</p>
                        <p className="text-3xl font-black text-gray-900">{stats.totalTeamMembers}</p>
                    </div>

                    {/* Stat Card 3 */}
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50 hover:shadow-xl hover:shadow-edufa-blue/5 transition-all duration-500">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 rounded-2xl bg-edufa-blue/5 text-edufa-blue">
                                <FileText className="h-5 w-5" />
                            </div>
                            <Link href={route('admin.articles.index')} className="text-edufa-blue hover:underline text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                                Kelola <ArrowUpRight className="h-3 w-3" />
                            </Link>
                        </div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Artikel</p>
                        <p className="text-3xl font-black text-gray-900">{stats.totalArticles}</p>
                    </div>

                    {/* Stat Card 4 */}
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50 hover:shadow-xl hover:shadow-edufa-yellow/5 transition-all duration-500">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 rounded-2xl bg-edufa-yellow/10 text-amber-600">
                                <Camera className="h-5 w-5" />
                            </div>
                            <Link href={route('admin.activities.index')} className="text-amber-600 hover:underline text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                                Kelola <ArrowUpRight className="h-3 w-3" />
                            </Link>
                        </div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Dokumentasi</p>
                        <p className="text-3xl font-black text-gray-900">{stats.totalActivities}</p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Activities Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between px-1">
                            <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">Aktivitas Terbaru</h3>
                            <div className="flex gap-2">
                                <Link href={route('admin.articles.index')} className="text-[10px] font-bold text-gray-400 hover:text-edufa-blue transition-colors">Semua Artikel</Link>
                                <span className="text-gray-300">•</span>
                                <Link href={route('admin.activities.index')} className="text-[10px] font-bold text-gray-400 hover:text-edufa-yellow transition-colors">Semua Kegiatan</Link>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm shadow-gray-200/50 overflow-hidden">
                            <div className="divide-y divide-gray-50">
                                {recentArticles.length === 0 && recentActivities.length === 0 ? (
                                    <div className="p-12 text-center">
                                        <Layout className="h-12 w-12 text-gray-100 mx-auto mb-4" />
                                        <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Belum ada aktivitas</p>
                                    </div>
                                ) : (
                                    <>
                                        {recentArticles.map((article) => (
                                            <div key={`art-${article.id}`} className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-edufa-blue">
                                                        <FileText className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-gray-900 line-clamp-1">{article.title}</p>
                                                        <div className="flex items-center gap-2 mt-0.5">
                                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{new Date(article.created_at).toLocaleDateString('id-ID')}</span>
                                                            <span className="text-gray-200">•</span>
                                                            <span className="text-[10px] font-bold text-edufa-blue uppercase bg-edufa-blue/5 px-2 py-0.5 rounded">Artikel</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href={route('admin.articles.index')} className="h-8 w-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:border-edufa-blue hover:text-edufa-blue transition-all">
                                                    <ChevronRight className="h-4 w-4" />
                                                </Link>
                                            </div>
                                        ))}
                                        {recentActivities.map((activity) => (
                                            <div key={`act-${activity.id}`} className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-12 w-12 rounded-2xl bg-edufa-yellow/10 flex items-center justify-center text-amber-600">
                                                        <Camera className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-gray-900 line-clamp-1">{activity.title}</p>
                                                        <div className="flex items-center gap-2 mt-0.5">
                                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{new Date(activity.created_at).toLocaleDateString('id-ID')}</span>
                                                            <span className="text-gray-200">•</span>
                                                            <span className="text-[10px] font-bold text-amber-600 uppercase bg-edufa-yellow/10 px-2 py-0.5 rounded">Dokumentasi</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href={route('admin.activities.index')} className="h-8 w-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:border-edufa-yellow hover:text-edufa-yellow transition-all">
                                                    <ChevronRight className="h-4 w-4" />
                                                </Link>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Quick Nav & Sidebar Section */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest px-1">Navigasi Cepat</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <Link 
                                href={route('admin.branches.index')}
                                className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border-edufa-blue/30 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-edufa-blue/10 flex items-center justify-center text-edufa-blue group-hover:bg-edufa-blue group-hover:text-white transition-colors">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-black text-gray-900">Kelola Cabang</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Lokasi & Peta</p>
                                    </div>
                                </div>
                                <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-edufa-blue transform group-hover:translate-x-1 transition-all" />
                            </Link>

                            <Link 
                                href={route('admin.articles.index')}
                                className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-yellow-500/5 hover:border-edufa-blue/30 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-edufa-blue/5 flex items-center justify-center text-edufa-blue group-hover:bg-edufa-blue group-hover:text-white transition-colors">
                                        <PenSquare className="h-6 w-6" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-black text-gray-900">Tulis Artikel</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Edufa Insight</p>
                                    </div>
                                </div>
                                <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-edufa-blue transform group-hover:translate-x-1 transition-all" />
                            </Link>

                            <Link 
                                href={route('profile.edit')}
                                className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-yellow-500/5 hover:border-edufa-yellow/30 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-edufa-yellow/10 flex items-center justify-center text-edufa-yellow group-hover:bg-edufa-yellow group-hover:text-white transition-colors">
                                        <User className="h-6 w-6" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-black text-gray-900">Akun Saya</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Info & Sandi</p>
                                    </div>
                                </div>
                                <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-edufa-yellow transform group-hover:translate-x-1 transition-all" />
                            </Link>
                        </div>

                        {/* Welcome Info */}
                        <div className="bg-gray-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                                <Globe className="h-20 w-20" />
                            </div>
                            <h3 className="text-lg font-black mb-3 relative z-10">
                                Dashboard Siap! 👋
                            </h3>
                            <p className="text-gray-400 text-xs leading-relaxed font-medium relative z-10 mb-6">
                                Semua perubahan akan langsung sinkron dengan situs utama.
                            </p>
                            <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
                                Lihat Web Publik <ArrowUpRight className="h-3 w-3" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
