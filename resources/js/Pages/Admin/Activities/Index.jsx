import * as React from "react"
import { Head, useForm, router } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { 
    Plus, 
    Search, 
    Edit2, 
    Trash2, 
    Video, 
    Image as ImageIcon,
    X,
    ExternalLink,
    Play,
    CheckCircle2
} from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/Components/ui/sheet"
import { Label } from "@/Components/ui/label"
import { cn } from "@/lib/utils"

export default function Index({ activities }) {
    const [searchTerm, setSearchTerm] = React.useState("")
    const [isSheetOpen, setIsSheetOpen] = React.useState(false)
    const [editingActivity, setEditingActivity] = React.useState(null)

    const filteredActivities = activities.filter(activity => 
        activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.type.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        type: "terapi",
        media_type: "photo",
        media_file: null,
        video_url: "",
        _method: "POST",
    })

    const openCreate = () => {
        setEditingActivity(null)
        reset()
        setData("_method", "POST")
        setIsSheetOpen(true)
    }

    const openEdit = (activity) => {
        setEditingActivity(activity)
        setData({
            title: activity.title,
            description: activity.description || "",
            type: activity.type,
            media_type: activity.media_type,
            video_url: activity.media_type === "video" ? activity.media_path : "",
            media_file: null,
            _method: "POST" // We use POST with _method=PUT for file uploads in Inertia
        })
        setIsSheetOpen(true)
    }

    const submit = (e) => {
        e.preventDefault()
        
        const config = {
            forceFormData: true,
            onSuccess: () => {
                setIsSheetOpen(false)
                reset()
            }
        }

        if (editingActivity) {
            // Use POST with _method=PUT because PHP doesn't handle files in PUT requests well
            const formData = { ...data, _method: "PUT" };
            router.post(route("admin.activities.update", editingActivity.id), formData, config);
        } else {
            post(route("admin.activities.store"), config)
        }
    }

    const deleteActivity = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus kegiatan ini?")) {
            router.delete(route("admin.activities.destroy", id))
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-black leading-tight text-gray-900 tracking-tight">
                        Manajemen Kegiatan
                    </h2>
                    <Button onClick={openCreate} className="bg-edufa-blue hover:bg-edufa-blue/90 text-white rounded-xl shadow-lg shadow-edufa-blue/20 px-6 font-bold">
                        <Plus className="mr-2 h-4 w-4" /> Tambah Kegiatan
                    </Button>
                </div>
            }
        >
            <Head title="Manajemen Kegiatan" />

            <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                        placeholder="Cari judul kegiatan..."
                        className="pl-10 h-11 bg-white border-gray-100 rounded-xl shadow-sm focus:ring-edufa-blue"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Table */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Media</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Judul & Tipe</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Deskripsi</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredActivities.map((activity) => (
                                    <tr key={activity.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="h-12 w-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-100 relative group/media">
                                                {activity.media_type === "photo" ? (
                                                    <img src={`/storage/${activity.media_path}`} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
                                                        <Video className="h-5 w-5" />
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div>
                                                <p className="font-bold text-gray-900 leading-tight mb-1">{activity.title}</p>
                                                <span className={cn(
                                                    "text-[10px] font-black uppercase px-2 py-0.5 rounded-full",
                                                    activity.type === "terapi" ? "bg-edufa-blue/10 text-edufa-blue" : "bg-edufa-yellow/10 text-amber-600"
                                                )}>
                                                    {activity.type === "terapi" ? "Terapi" : "Kegiatan di Kelas"}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <p className="text-sm text-gray-600 line-clamp-2 max-w-xs">{activity.description || "-"}</p>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button 
                                                    variant="ghost" 
                                                    size="icon"
                                                    onClick={() => openEdit(activity)}
                                                    className="h-9 w-9 rounded-lg hover:bg-edufa-blue/10 hover:text-edufa-blue transition-colors"
                                                >
                                                    <Edit2 className="h-4 w-4" />
                                                </Button>
                                                <Button 
                                                    variant="ghost" 
                                                    size="icon"
                                                    onClick={() => deleteActivity(activity.id)}
                                                    className="h-9 w-9 rounded-lg hover:bg-rose-50 hover:text-rose-600 transition-colors"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredActivities.length === 0 && (
                            <div className="py-20 text-center">
                                <CheckCircle2 className="h-12 w-12 text-gray-200 mx-auto mb-4" />
                                <p className="text-gray-500 font-medium">Belum ada kegiatan yang terdaftar.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Create/Edit Sheet */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetContent side="right" className="sm:max-w-md bg-white border-l overflow-y-auto">
                    <SheetHeader className="pb-8 border-b">
                        <SheetTitle className="text-2xl font-black tracking-tight">
                            {editingActivity ? "Edit Kegiatan" : "Tambah Kegiatan"}
                        </SheetTitle>
                        <SheetDescription>
                            Kelola detail kegiatan, mulai dari judul, kategori, hingga media pendukung.
                        </SheetDescription>
                    </SheetHeader>

                    <form onSubmit={submit} className="py-8 space-y-6 pb-20">
                        <div className="space-y-5">
                            <div className="grid gap-2">
                                <Label htmlFor="title" className="text-sm font-bold text-gray-700">Judul Kegiatan</Label>
                                <Input 
                                    id="title" 
                                    value={data.title}
                                    onChange={e => setData("title", e.target.value)}
                                    placeholder="Masukkan judul kegiatan..."
                                    className={cn("h-11 rounded-xl", errors.title && "border-rose-500")}
                                />
                                {errors.title && <p className="text-xs text-rose-500 font-medium">{errors.title}</p>}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="type" className="text-sm font-bold text-gray-700">Kategori Kegiatan</Label>
                                <select 
                                    id="type"
                                    value={data.type} 
                                    onChange={(e) => setData("type", e.target.value)}
                                    className="h-11 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-edufa-blue"
                                >
                                    <option value="terapi">Terapi</option>
                                    <option value="kelas">Kegiatan di Kelas</option>
                                </select>
                                {errors.type && <p className="text-xs text-rose-500 font-medium">{errors.type}</p>}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="description" className="text-sm font-bold text-gray-700">Deskripsi</Label>
                                <textarea 
                                    id="description" 
                                    value={data.description}
                                    onChange={e => setData("description", e.target.value)}
                                    rows={4}
                                    placeholder="Ceritakan tentang kegiatan ini..."
                                    className={cn(
                                        "w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-edufa-blue",
                                        errors.description && "border-rose-500"
                                    )}
                                />
                                {errors.description && <p className="text-xs text-rose-500 font-medium">{errors.description}</p>}
                            </div>

                            <div className="grid gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <Label className="text-sm font-black text-gray-900 uppercase tracking-wider">Media Pendukung</Label>
                                
                                <div className="flex gap-2">
                                    <Button 
                                        type="button"
                                        variant={data.media_type === "photo" ? "default" : "outline"}
                                        onClick={() => setData("media_type", "photo")}
                                        className={cn(
                                            "flex-1 rounded-xl font-bold h-10",
                                            data.media_type === "photo" ? "bg-edufa-blue text-white" : "bg-white"
                                        )}
                                    >
                                        <ImageIcon className="mr-2 h-4 w-4" /> Foto
                                    </Button>
                                    <Button 
                                        type="button"
                                        variant={data.media_type === "video" ? "default" : "outline"}
                                        onClick={() => setData("media_type", "video")}
                                        className={cn(
                                            "flex-1 rounded-xl font-bold h-10",
                                            data.media_type === "video" ? "bg-edufa-blue text-white" : "bg-white"
                                        )}
                                    >
                                        <Video className="mr-2 h-4 w-4" /> Video
                                    </Button>
                                </div>

                                {data.media_type === "photo" ? (
                                    <div className="space-y-4">
                                        <div 
                                            className="relative aspect-video rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 bg-white group transition-all hover:border-edufa-blue/50 flex flex-col items-center justify-center cursor-pointer"
                                            onClick={() => document.getElementById('media-upload').click()}
                                        >
                                            {data.media_file ? (
                                                <img 
                                                    src={URL.createObjectURL(data.media_file)} 
                                                    alt="Preview" 
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (editingActivity?.media_type === "photo" ? (
                                                <img src={`/storage/${editingActivity.media_path}`} alt="Current" className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="text-center p-6">
                                                    <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-2 text-gray-400">
                                                        <Plus className="h-5 w-5" />
                                                    </div>
                                                    <p className="text-[10px] font-bold text-gray-500">Upload Foto Kegiatan</p>
                                                </div>
                                            ))}
                                            <input 
                                                id="media-upload"
                                                type="file" 
                                                className="hidden" 
                                                onChange={e => setData("media_file", e.target.files[0])}
                                                accept="image/*"
                                            />
                                        </div>
                                        {errors.media_file && <p className="text-xs text-rose-500 font-medium">{errors.media_file}</p>}
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <div className="grid gap-2">
                                            <Label htmlFor="video_url" className="text-xs font-bold text-gray-600">Link Video (YouTube / GDrive)</Label>
                                            <Input 
                                                id="video_url" 
                                                value={data.video_url}
                                                onChange={e => setData("video_url", e.target.value)}
                                                placeholder="https://www.youtube.com/watch?v=..."
                                                className={cn("h-10 rounded-xl bg-white", errors.video_url && "border-rose-500")}
                                            />
                                            {errors.video_url && <p className="text-xs text-rose-500 font-medium">{errors.video_url}</p>}
                                        </div>
                                        <p className="text-[10px] text-gray-400 italic">
                                            * Link akan dikonversi otomatis menjadi tampilan video di halaman kegiatan.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="pt-8 border-t flex items-center justify-end gap-3 sticky bottom-0 bg-white">
                            <Button type="button" variant="ghost" onClick={() => setIsSheetOpen(false)} className="rounded-xl font-bold">
                                Batal
                            </Button>
                            <Button type="submit" disabled={processing} className="bg-edufa-blue hover:bg-edufa-blue/90 text-white rounded-xl shadow-lg shadow-edufa-blue/20 px-8 font-bold">
                                {processing ? "Menyimpan..." : (editingActivity ? "Update Kegiatan" : "Simpan Kegiatan")}
                            </Button>
                        </div>
                    </form>
                </SheetContent>
            </Sheet>
        </AuthenticatedLayout>
    )
}
