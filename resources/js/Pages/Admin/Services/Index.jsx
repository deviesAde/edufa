import * as React from "react"
import { Head, useForm, router } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { ExternalLink, Save, Link as LinkIcon, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

function ServiceLinkRow({ service }) {
    const { data, setData, put, processing, recentlySuccessful } = useForm({
        google_form_url: service.google_form_url || "",
    })

    const submit = (e) => {
        e.preventDefault()
        put(route('admin.services.update', service.id), {
            preserveScroll: true
        })
    }

    const isActive = data.google_form_url && data.google_form_url.startsWith('http');

    return (
        <tr className="hover:bg-gray-50/50 transition-colors group text-sm">
            <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                    <div className={cn(
                        "h-2 w-2 rounded-full",
                        isActive ? "bg-emerald-500 animate-pulse" : "bg-gray-300"
                    )} />
                    <div>
                        <p className="font-bold text-gray-900 leading-tight mb-1">{service.title}</p>
                        <div className="flex items-center gap-2">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{service.slug}</p>
                            {isActive && (
                                <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded uppercase tracking-tighter">Live on Web</span>
                            )}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-5">
                <form onSubmit={submit} className="flex items-center gap-3">
                    <div className="relative flex-1 group/input">
                        <LinkIcon className={cn(
                            "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 transition-colors",
                            isActive ? "text-edufa-blue" : "text-gray-400"
                        )} />
                        <Input 
                            value={data.google_form_url}
                            onChange={e => setData("google_form_url", e.target.value)}
                            placeholder="https://docs.google.com/forms/..."
                            className={cn(
                                "pl-9 h-10 bg-white border-gray-100 rounded-xl text-sm transition-all focus:ring-edufa-blue",
                                isActive && "border-emerald-100 focus:border-emerald-500"
                            )}
                        />
                    </div>
                    <Button 
                        type="submit" 
                        disabled={processing}
                        className={cn(
                            "h-10 px-4 rounded-xl font-bold transition-all duration-300 shadow-sm",
                            recentlySuccessful 
                                ? "bg-emerald-500 hover:bg-emerald-600 text-white scale-95 shadow-emerald-200" 
                                : "bg-edufa-blue hover:bg-edufa-blue/90 text-white"
                        )}
                    >
                        {recentlySuccessful ? (
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                        ) : (
                            <Save className="h-4 w-4 mr-2" />
                        )}
                        {recentlySuccessful ? "Saved!" : "Save Changes"}
                    </Button>
                    <a 
                        href={data.google_form_url} 
                        target="_blank" 
                        rel="noreferrer"
                        className={cn(
                            "h-10 w-10 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-edufa-blue hover:border-edufa-blue transition-all",
                            !data.google_form_url && "opacity-20 pointer-events-none"
                        )}
                        title="Buka Link di Tab Baru"
                    >
                        <ExternalLink className="h-4 w-4" />
                    </a>
                </form>
            </td>
        </tr>
    )
}

export default function Index({ services }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-black leading-tight text-gray-900 tracking-tight">
                    Pengaturan Link Pendaftaran (G-Form)
                </h2>
            }
        >
            <Head title="Pengaturan Link Layanan" />

            <div className="space-y-6">
                <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-[2rem]">
                    <h3 className="text-sm font-black text-edufa-blue uppercase tracking-widest mb-2">Informasi</h3>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                        Halaman ini digunakan untuk memperbarui link Google Form pendaftaran pada setiap layanan. 
                        Pastikan link yang dimasukkan adalah link valid (dimulai dengan http:// atau https://).
                    </p>
                </div>

                <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm shadow-gray-200/50 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Nama Layanan</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Google Form URL</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {services.map((service) => (
                                    <ServiceLinkRow key={service.id} service={service} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
