import React from 'react';
import { cn } from '@/lib/utils';
import { RevealCardContainer } from '@/Components/ui/animated-profile-card';
import { 
    ClipboardCheck, 
    HeartPulse, 
    GraduationCap, 
    Baby, 
    Users, 
    School, 
    Briefcase,
    ArrowUpRight
} from 'lucide-react';

const services = [
    {
        title: "ASESMEN PSIKOLOGI",
        description: "Evaluasi psikologis & diagnostik mendalam untuk memahami potensi unik anak.",
        icon: <ClipboardCheck />,
        accentColor: "#0f59bc", 
        lightBg: "bg-blue-50",
        iconColor: "text-edufa-blue",
    },
    {
        title: "TERAPI",
        description: "Layanan terapi terpadu yang dirancang khusus sesuai kebutuhan tumbuh kembang.",
        icon: <HeartPulse />,
        accentColor: "#ffd900", 
        lightBg: "bg-amber-50",
        iconColor: "text-amber-600",
    },
    {
        title: "PELATIHAN",
        description: "Program pengembangan kompetensi untuk guru, orang tua, dan profesional.",
        icon: <GraduationCap />,
        accentColor: "#6cc02f", 
        lightBg: "bg-green-50",
        iconColor: "text-edufa-green",
    },
    {
        title: "PAUD",
        description: "Pendidikan anak usia dini dengan pendekatan inklusi dan kasih sayang.",
        icon: <Baby />,
        accentColor: "#ff0000", 
        lightBg: "bg-red-50",
        iconColor: "text-edufa-red",
    },
    {
        title: "KONSELING",
        description: "Dukungan psikologis profesional untuk individu, pasangan, dan keluarga.",
        icon: <Users />,
        accentColor: "#9333ea", 
        lightBg: "bg-purple-50",
        iconColor: "text-purple-600",
    },
    {
        title: "PENDAMPINGAN ABK",
        description: "Dukungan penuh untuk anak berkebutuhan khusus di lingkungan sekolah reguler.",
        icon: <School />,
        accentColor: "#ea580c", 
        lightBg: "bg-orange-50",
        iconColor: "text-orange-600",
    },
    {
        title: "BALAI LATIHAN KERJA",
        description: "Pelatihan kemandirian dan keterampilan kerja untuk masa depan yang lebih baik.",
        icon: <Briefcase />,
        accentColor: "#0d9488", 
        lightBg: "bg-teal-50",
        iconColor: "text-teal-600",
    }
];

const ServiceCardBody = ({ service, isAccent = false }) => {
    return (
        <div className={cn(
            "flex flex-col h-full p-6 transition-all duration-500",
            isAccent ? "bg-[var(--accent-color)]" : "bg-white",
        )}>
            <div className="flex justify-between items-start mb-6">
                <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm",
                    isAccent ? "bg-white/20 text-white rotate-6" : cn(service.lightBg, service.iconColor)
                )}>
                    {React.cloneElement(service.icon, { size: 24, strokeWidth: 2.5 })}
                </div>
                {!isAccent && (
                    <div className="opacity-20 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-5 h-5 text-gray-400" />
                    </div>
                )}
            </div>

            <div className="flex-grow">
                <h3 className={cn(
                    "text-lg font-black tracking-tight mb-3 leading-tight",
                    isAccent ? "text-[var(--on-accent-foreground)]" : "text-gray-900"
                )}>
                    {service.title}
                </h3>
                <p className={cn(
                    "text-sm leading-relaxed font-medium",
                    isAccent ? "text-[var(--on-accent-foreground)]/90" : "text-gray-500"
                )}>
                    {service.description}
                </p>
            </div>
            
            {isAccent && (
                <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/70">
                        Explore Detail
                    </span>
                </div>
            )}
        </div>
    );
};

export default function ServiceCards() {
    return (
        <section className="relative z-30 -mt-20 sm:-mt-28 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-wrap justify-center gap-6 items-stretch">
                    {services.map((service, index) => {
                        const isYellow = service.accentColor === "#ffd900";
                        const textOnAccent = isYellow ? "#422006" : "#ffffff";
                        const mutedOnAccent = isYellow ? "rgba(66,32,6,0.6)" : "rgba(255,255,255,0.7)";
                        
                        return (
                            <RevealCardContainer
                                key={index}
                                accent={service.accentColor}
                                textOnAccent={textOnAccent}
                                mutedOnAccent={mutedOnAccent}
                                className={cn(
                                    "w-full sm:w-[calc(50%-1.5rem)] lg:w-[280px] min-h-[220px] rounded-[2rem] border-0 ring-1 ring-black/5 shadow-xl shadow-gray-200/20 hover:shadow-2xl transition-all duration-500"
                                )}
                                base={<ServiceCardBody service={service} />}
                                overlay={<ServiceCardBody service={service} isAccent={true} />}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
