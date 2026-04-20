import React from 'react';
import { cn } from '@/lib/utils';
import { RevealCardContainer } from '@/Components/ui/animated-profile-card';

const services = [
    {
        title: "ASESMEN",
        description: "Evaluasi psikologis & diagnostik",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
        accentColor: "#0f59bc", 
        textColor: "text-edufa-blue",
        lightBg: "bg-edufa-blue/5",
    },
    {
        title: "TERAPI",
        description: "Layanan terapi terpadu",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        accentColor: "#ffd900", // edufa-yellow
        textColor: "text-amber-600",
        lightBg: "bg-amber-50",
    },
    {
        title: "PELATIHAN",
        description: "Pengembangan kompetensi & SDM",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        accentColor: "#6cc02f", // edufa-green
        textColor: "text-edufa-green",
        lightBg: "bg-edufa-green/5",
    },
    {
        title: "PAUD",
        description: "Pendidikan anak usia dini",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        accentColor: "#ff0000", // edufa-red
        textColor: "text-edufa-red",
        lightBg: "bg-edufa-red/5",
    }
];

const ServiceCardBody = ({ service, isAccent = false }) => {

    const isYellow = isAccent && service.title === "TERAPI";
    const titleColor = isYellow ? "text-gray-900" : (isAccent ? "text-white" : "text-gray-900");
    const descColor = isYellow ? "text-gray-800" : (isAccent ? "text-white/90" : "text-gray-600");
    const iconBg = isYellow ? "bg-black/10 text-gray-900" : (isAccent ? "bg-white/20 text-white" : cn(service.lightBg, service.textColor));

    return (
        <div className={cn(
            "flex flex-col h-full p-6",
            isAccent ? "bg-[var(--accent-color)] text-[var(--on-accent-foreground)]" : "bg-white text-gray-900",
        )}>
            <div className="flex flex-col items-start gap-4 mb-3">
                <div className={cn(
                    "p-3 rounded-xl transition-colors duration-300",
                    iconBg
                )}>
                    {service.icon}
                </div>
                <h3 className={cn(
                    "text-lg font-bold tracking-tight",
                    titleColor
                )}>
                    {service.title}
                </h3>
            </div>
            
            <p className={cn(
                "text-sm leading-relaxed font-medium",
                descColor
            )}>
                {service.description}
            </p>
        </div>
    );
};

export default function ServiceCards() {
    return (
        <section className="relative z-30 -mt-16 sm:-mt-24 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
                    {services.map((service, index) => {
                        const isYellow = service.title === "TERAPI";
                        const textOnAccent = isYellow ? "#1f2937" : "#ffffff";
                        const mutedOnAccent = isYellow ? "rgba(31,41,55,0.8)" : "rgba(255,255,255,0.8)";
                        
                        return (
                            <RevealCardContainer
                                key={index}
                                accent={service.accentColor}
                                textOnAccent={textOnAccent}
                                mutedOnAccent={mutedOnAccent}
                                className="border-gray-100/50 ring-1 ring-gray-900/5 shadow-sm hover:shadow-md transition-shadow h-full min-h-[220px]"
                                base={
                                    <ServiceCardBody service={service} />
                                }
                                overlay={
                                    <ServiceCardBody service={service} isAccent={true} />
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
