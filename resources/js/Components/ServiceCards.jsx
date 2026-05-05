import React from 'react';
import { cn } from '@/lib/utils';
import { FlippingCard } from '@/Components/ui/flipping-card';
import { Link } from '@inertiajs/react';
import { 
    ClipboardCheck, 
    HeartPulse, 
    GraduationCap, 
    Baby, 
    Users, 
    School, 
    Briefcase,
    ArrowRight,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const services = [
    {
        title: "ASESMEN PSIKOLOGI",
        description: "Evaluasi psikologis & diagnostik mendalam untuk memahami potensi unik anak.",
        icon: <ClipboardCheck />,
        accentColor: "#0f59bc", 
        lightBg: "bg-blue-50",
        iconColor: "text-edufa-blue",
        href: route('pelayanan.asesmen')
    },
    {
        title: "TERAPI",
        description: "Layanan terapi terpadu yang dirancang khusus sesuai kebutuhan tumbuh kembang.",
        icon: <HeartPulse />,
        accentColor: "#ffd900", 
        lightBg: "bg-amber-50",
        iconColor: "text-amber-600",
        href: route('pelayanan.terapi')
    },
    {
        title: "PELATIHAN",
        description: "Program pengembangan kompetensi untuk guru, orang tua, dan profesional.",
        icon: <GraduationCap />,
        accentColor: "#6cc02f", 
        lightBg: "bg-green-50",
        iconColor: "text-edufa-green",
        href: route('pelayanan.pelatihan')
    },
    {
        title: "PAUD",
        description: "Pendidikan anak usia dini dengan pendekatan inklusi dan kasih sayang.",
        icon: <Baby />,
        accentColor: "#ff0000", 
        lightBg: "bg-red-50",
        iconColor: "text-edufa-red",
        href: route('pelayanan.paud')
    },
    {
        title: "KONSELING",
        description: "Dukungan psikologis profesional untuk individu, pasangan, dan keluarga.",
        icon: <Users />,
        accentColor: "#0f59bc", 
        lightBg: "bg-blue-50",
        iconColor: "text-edufa-blue",
        href: route('pelayanan.konseling')
    },
    {
        title: "PENDAMPINGAN ABK",
        description: "Dukungan penuh untuk anak berkebutuhan khusus di lingkungan sekolah reguler.",
        icon: <School />,
        accentColor: "#ffd900", 
        lightBg: "bg-amber-50",
        iconColor: "text-amber-600",
        href: route('pelayanan.pendampingan')
    },
    {
        title: "BALAI LATIHAN KERJA",
        description: "Pelatihan kemandirian dan keterampilan kerja untuk masa depan yang lebih baik.",
        icon: <Briefcase />,
        accentColor: "#6cc02f", 
        lightBg: "bg-green-50",
        iconColor: "text-edufa-green",
        href: route('pelayanan.balai')
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
        <div className="relative flex flex-col items-center justify-between p-[clamp(1.5rem,4vw,2.5rem)] h-full text-center">
            <div className={cn(
                "mb-6 p-3 rounded-full shadow-inner",
                service.lightBg, service.iconColor
            )}>
                {React.cloneElement(service.icon, { size: 28, strokeWidth: 2.5 })}
            </div>
            <Link href={service.href} className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-lg",
                isYellow ? "bg-amber-900 text-white hover:bg-amber-800" : "bg-white text-gray-900 hover:bg-gray-100"
            )}>
                Cek Yuk! <ArrowRight size={12} />
            </Link>
        </div>
    );
};

export default function ServiceCards() {
    return (
        <section id="layanan" className="relative z-30 -mt-[clamp(2.5rem,8vh,7rem)] px-0 lg:px-4">
            <div className="mx-auto max-w-[1400px]">
                <div 
                    id="service-scroll-container"
                    className="flex flex-nowrap overflow-x-auto pb-8 pt-4 px-6 gap-5 no-scrollbar snap-x snap-mandatory justify-start lg:justify-center touch-pan-x scroll-smooth"
                >
                    {services.map((service, index) => {
                        const isYellow = service.accentColor === "#ffd900";
                        return (
                            <div key={index} className="flex-shrink-0 snap-center group">
                                {/* Desktop: Flipping Card */}
                                <div className="hidden lg:block">
                                    <FlippingCard
                                        width={180}
                                        height={240}
                                        accentColor={service.accentColor}
                                        className="border-0 shadow-lg shadow-black/5"
                                        frontContent={<CardFront service={service} />}
                                        backContent={<CardBack service={service} />}
                                    />
                                </div>
                                
                                {/* Mobile: Static Card with Button */}
                                <Link href={service.href} className="lg:hidden flex flex-col items-center justify-center w-[160px] h-[210px] rounded-[2.5rem] p-5 text-center shadow-xl bg-white border border-gray-100 relative overflow-hidden hover:scale-105 transition-transform active:scale-95">
                                    {/* Background Accent for Mobile */}
                                    <div className="absolute top-0 left-0 w-full h-1.5" style={{ backgroundColor: service.accentColor }}></div>
                                    
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-inner border border-white",
                                        service.lightBg, service.iconColor
                                    )}>
                                        {React.cloneElement(service.icon, { size: 28, strokeWidth: 2.5 })}
                                    </div>
                                    <h3 className="text-xs font-black tracking-[0.05em] uppercase leading-tight text-gray-800 mb-4 px-1">
                                        {service.title}
                                    </h3>
                                    <span className={cn(
                                        "flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md transition-transform",
                                        isYellow ? "bg-edufa-yellow text-gray-900" : "bg-edufa-blue text-white"
                                    )}>
                                        Cek <ArrowRight size={14} />
                                    </span>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Navigation Controls - Refined touch targets and spacing */}
                <div className="flex lg:hidden items-center justify-center gap-6 mt-2 mb-8">
                    <button 
                        onClick={() => {
                            const container = document.getElementById('service-scroll-container');
                            container.scrollBy({ left: -240, behavior: 'smooth' });
                        }}
                        className="p-5 rounded-full bg-white shadow-lg border border-gray-100 text-edufa-blue active:scale-90 transition-transform touch-manipulation min-w-[50px] min-h-[50px] flex items-center justify-center"
                        aria-label="Slide left"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    
                    {/* Visual Indicator Dots */}
                    <div className="flex gap-2.5">
                        {services.map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-gray-200 transition-colors"></div>
                        ))}
                    </div>

                    <button 
                        onClick={() => {
                            const container = document.getElementById('service-scroll-container');
                            container.scrollBy({ left: 240, behavior: 'smooth' });
                        }}
                        className="p-4 rounded-full bg-white shadow-xl border border-gray-100 text-edufa-blue active:scale-90 transition-transform touch-manipulation"
                        aria-label="Slide right"
                    >
                        <ChevronRight size={24} />
                    </button>
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
