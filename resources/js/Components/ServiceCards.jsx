import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const services = [
    {
        title: "ASESMEN",
        description: "Evaluasi psikologis & diagnostik",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
        color: "bg-edufa-blue",
        textColor: "text-edufa-blue",
        lightBg: "bg-edufa-blue/10",
        accent: "group-hover:text-edufa-blue"
    },
    {
        title: "TERAPI",
        description: "Layanan terapi terpadu",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        color: "bg-edufa-yellow",
        textColor: "text-amber-600",
        lightBg: "bg-edufa-yellow/10",
        accent: "group-hover:text-amber-600"
    },
    {
        title: "PELATIHAN",
        description: "Pengembangan kompetensi & SDM",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        color: "bg-edufa-green",
        textColor: "text-edufa-green",
        lightBg: "bg-edufa-green/10",
        accent: "group-hover:text-edufa-green"
    },
    {
        title: "PAUD",
        description: "Pendidikan anak usia dini",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: "bg-edufa-red",
        textColor: "text-edufa-red",
        lightBg: "bg-edufa-red/10",
        accent: "group-hover:text-edufa-red"
    }
];

export default function ServiceCards() {
    return (
        <section className="relative z-30 -mt-20 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.95 },
                                show: { 
                                    opacity: 1, 
                                    y: 0, 
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        duration: 0.8,
                                        bounce: 0.3
                                    }
                                }
                            }}
                            whileHover={{ 
                                y: -12,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative h-full"
                        >
                            {/* Card Glow Effect */}
                            <div className={cn(
                                "absolute -inset-1 rounded-[2.5rem] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20",
                                service.color
                            )}></div>

                            <div className="relative h-full bg-white/90 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 shadow-2xl shadow-black/5 border border-white/50 flex flex-col items-center text-center group-hover:bg-white transition-colors duration-300">
                                <div className={cn(
                                    "w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg",
                                    service.lightBg,
                                    service.textColor
                                )}>
                                    <div className="scale-75 md:scale-100">
                                        {service.icon}
                                    </div>
                                </div>
                                
                                <h3 className={cn(
                                    "text-lg md:text-xl font-black tracking-tighter mb-2 transition-colors duration-300",
                                    "text-gray-900"
                                )}>
                                    {service.title}
                                </h3>
                                
                                <p className="text-xs md:text-sm font-bold text-gray-500 leading-tight">
                                    {service.description}
                                </p>

                                <div className="mt-6 flex gap-1">
                                    <div className={cn("h-1.5 w-1.5 rounded-full", service.color)}></div>
                                    <div className={cn("h-1.5 w-1.5 rounded-full opacity-40", service.color)}></div>
                                    <div className={cn("h-1.5 w-1.5 rounded-full opacity-20", service.color)}></div>
                                </div>

                                {/* Hover Shine Effect */}
                                <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
