import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import { Head, useForm, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Mail, Lock, Shield, ArrowRight, Home } from 'lucide-react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans antialiased flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
            <Head title="Admin Login" />

            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-edufa-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-edufa-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="w-full max-w-[1100px] grid lg:grid-cols-2 bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden relative z-10 border border-gray-100">
                
                {/* Left Side: Branding & Info */}
                <div className="hidden lg:flex flex-col justify-between p-12 bg-edufa-blue relative overflow-hidden text-white">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-edufa-yellow/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-10"
                    >
                        <Link href="/" className="inline-flex items-center gap-3 group">
                            <span className="text-2xl font-black tracking-tight">EDUFA<span className="text-edufa-yellow"> CENTER ADMIN</span></span>
                        </Link>
                    </motion.div>

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-edufa-yellow text-[10px] font-bold uppercase tracking-widest mb-6"
                        >
                            <Shield className="w-3 h-3" /> Dedicated Admin Portal
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl xl:text-5xl font-black leading-tight mb-6"
                        >
                            Manage Your <br />
                            <span className="text-edufa-yellow">Healthcare Excellence</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-blue-100 text-lg font-medium leading-relaxed max-w-sm"
                        >
                            Pusat kendali operasional EDUfa Centre. Kelola data terapis, staf, dan cabang dalam satu platform terpadu.
                        </motion.p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-blue-200 text-sm font-medium flex items-center gap-4"
                    >
                        <span>&copy; {new Date().getFullYear()} EDUfa Centre</span>
                        <div className="w-1 h-1 rounded-full bg-blue-300/30"></div>
                        <span>Privacy Policy</span>
                    </motion.div>
                </div>

                {/* Right Side: Login Form */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-sm w-full mx-auto"
                    >
                        <div className="lg:hidden flex justify-center mb-10">
                            <ApplicationLogo className="h-16 w-16" />
                        </div>

                        <div className="mb-10 text-center lg:text-left">
                            <h2 className="text-3xl font-black text-gray-900 mb-2">Welcome Back</h2>
                            <p className="text-gray-500 font-medium">Silakan masuk menggunakan akun Admin Anda.</p>
                        </div>

                        {status && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 rounded-2xl bg-green-50 border border-green-100 text-sm font-bold text-green-600 flex items-center gap-3"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                {status}
                            </motion.div>
                        )}

                        <form onSubmit={submit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-edufa-blue transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        autoFocus
                                        className="w-full h-14 pl-12 pr-4 bg-gray-50 border-gray-100 rounded-2xl focus:ring-4 focus:ring-edufa-blue/5 focus:border-edufa-blue focus:bg-white transition-all font-medium text-gray-900"
                                        placeholder="name@edufa.com"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />
                                </div>
                                {errors.email && <p className="text-xs font-bold text-rose-500 mt-1 ml-1">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between ml-1">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Password</label>
                                    <Link href={route('password.request')} className="text-xs font-bold text-edufa-blue hover:text-edufa-blue/70 transition-colors">Lupa sandi?</Link>
                                </div>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-edufa-blue transition-colors">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="w-full h-14 pl-12 pr-4 bg-gray-50 border-gray-100 rounded-2xl focus:ring-4 focus:ring-edufa-blue/5 focus:border-edufa-blue focus:bg-white transition-all font-medium text-gray-900"
                                        placeholder="••••••••"
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                    />
                                </div>
                                {errors.password && <p className="text-xs font-bold text-rose-500 mt-1 ml-1">{errors.password}</p>}
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                            className="w-5 h-5 rounded-lg border-gray-200 text-edufa-blue focus:ring-edufa-blue/20 cursor-pointer"
                                        />
                                    </div>
                                    <span className="ms-2 text-sm font-bold text-gray-500 group-hover:text-gray-700 transition-colors">
                                        Ingat saya
                                    </span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full h-14 bg-edufa-blue hover:bg-edufa-blue/90 text-white font-black text-lg rounded-2xl shadow-xl shadow-edufa-blue/20 flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none group"
                            >
                                {processing ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        Masuk Admin
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-10 pt-10 border-t border-gray-50 flex flex-col items-center gap-4">
                            <p className="text-sm font-bold text-gray-400">Kembali ke halaman utama?</p>
                            <Link 
                                href="/" 
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold rounded-xl transition-all border border-gray-100"
                            >
                                <Home className="w-4 h-4" /> Buka Beranda
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
