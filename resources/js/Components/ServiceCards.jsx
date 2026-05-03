import React from 'react';
import { cn } from '@/lib/utils';
import { FlippingCard } from '@/Components/ui/flipping-card';
import { 
    ClipboardCheck, 
    HeartPulse, 
    GraduationCap, 
    Baby, 
    Users, 
    School, 
    Briefcase,
    ArrowRight
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

const CardFront = ({ service }) => (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
        <div className={cn(
            "w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-inner border-4 border-white transition-all duration-500 group-hover/flipping-card:rotate-12 group-hover/flipping-card:scale-110",
            service.lightBg, service.iconColor
        )}>
            {React.cloneElement(service.icon, { size: 36, strokeWidth: 2.5 })}
        </div>
        <h3 className="text-[10px] font-black tracking-[0.1em] uppercase leading-tight text-white bg-black/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
            {service.title}
        </h3>
    </div>
);

const CardBack = ({ service }) => {
    const isYellow = service.accentColor === "#ffd900";
    return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className={cn(
                "mb-4 p-3 rounded-full shadow-inner",
                service.lightBg, service.iconColor
            )}>
                {React.cloneElement(service.icon, { size: 28, strokeWidth: 2.5 })}
            </div>
            <p className={cn(
                "text-[12px] font-black leading-relaxed mb-5",
                isYellow ? "text-amber-900" : "text-white"
            )}>
                {service.description}
            </p>
            <button className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-lg",
                isYellow ? "bg-amber-900 text-white hover:bg-amber-800" : "bg-white text-gray-900 hover:bg-gray-100"
            )}>
                Cek Yuk! <ArrowRight size={12} />
            </button>
        </div>
    );
};

export default function ServiceCards() {
    return (
        <section className="relative z-30 -mt-28 px-4">
            <div className="mx-auto max-w-[1400px]">
                <div className="flex flex-nowrap overflow-x-auto pb-8 gap-4 no-scrollbar snap-x snap-mandatory justify-start lg:justify-center">
                    {services.map((service, index) => (
                        <div key={index} className="flex-shrink-0 snap-center">
                            <FlippingCard
                                width={180}
                                height={240}
                                accentColor={service.accentColor}
                                className="border-0 shadow-lg shadow-black/5"
                                frontContent={<CardFront service={service} />}
                                backContent={<CardBack service={service} />}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </section>
    );
}
