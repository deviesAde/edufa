import * as React from "react"
import { Head, useForm, router } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import RichTextEditor from "@/Components/RichTextEditor"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { 
    Plus, 
    Search, 
    Edit2, 
    Trash2, 
    FileText, 
    Image as ImageIcon,
    ExternalLink,
    CheckCircle2,
    Eye,
    Clock
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

export default function Index({ articles }) {
    const [searchTerm, setSearchTerm] = React.useState("")
    const [isSheetOpen, setIsSheetOpen] = React.useState(false)
    const [editingArticle, setEditingArticle] = React.useState(null)

    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (article.category && article.category.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        content: "",
        category: "",
        status: "draft",
        thumbnail: null,
        author_name: "Dr. Ernie C. Siregar",
        author_role: "Psikolog Klinis",
        author_bio: "Berdedikasi dalam mendampingi tumbuh kembang anak dan memberikan solusi psikologis terbaik bagi keluarga Indonesia selama lebih dari satu dekade.",
        show_expert_voice: true,
        _method: "POST",
    })

    const openCreate = () => {
        setEditingArticle(null)
        reset()
        setData("_method", "POST")
        setIsSheetOpen(true)
    }

    const openEdit = (article) => {
        setEditingArticle(article)
        setData({
            title: article.title,
            content: article.content,
            category: article.category || "",
            status: article.status,
            thumbnail: null,
            author_name: article.author_name || "Dr. Ernie C. Siregar",
            author_role: article.author_role || "Psikolog Klinis",
            author_bio: article.author_bio || "Berdedikasi dalam mendampingi tumbuh kembang anak dan memberikan solusi psikologis terbaik bagi keluarga Indonesia selama lebih dari satu dekade.",
            show_expert_voice: article.show_expert_voice === 1 || article.show_expert_voice === true,
            _method: "POST"
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

        if (editingArticle) {
            const formData = { ...data, _method: "PUT" };
            router.post(route("admin.articles.update", editingArticle.id), formData, config);
        } else {
            post(route("admin.articles.store"), config)
        }
    }

    const deleteArticle = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
            router.delete(route("admin.articles.destroy", id))
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-black leading-tight text-gray-900 tracking-tight">
                        Manajemen Artikel
                    </h2>
                    <Button onClick={openCreate} className="bg-edufa-blue hover:bg-edufa-blue/90 text-white rounded-xl shadow-lg shadow-edufa-blue/20 px-6 font-bold">
                        <Plus className="mr-2 h-4 w-4" /> Tulis Artikel
                    </Button>
                </div>
            }
        >
            <Head title="Manajemen Artikel" />

            <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                        placeholder="Cari judul atau kategori..."
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
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Thumbnail</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Judul & Kategori</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Penulis</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Tanggal</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredArticles.map((article) => (
                                    <tr key={article.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="h-12 w-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-100">
                                                {article.thumbnail_path ? (
                                                    <img src={`/storage/${article.thumbnail_path}`} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                        <FileText className="h-5 w-5" />
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div>
                                                <p className="font-bold text-gray-900 leading-tight mb-1">{article.title}</p>
                                                <span className="text-[10px] font-bold text-edufa-blue uppercase bg-edufa-blue/5 px-2 py-0.5 rounded">
                                                    {article.category || "Uncategorized"}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                {article.status === 'published' ? (
                                                    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                                                        <CheckCircle2 className="h-3 w-3" /> Terbit
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                                                        <Clock className="h-3 w-3" /> Draft
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <p className="text-sm font-medium text-gray-600">{article.user?.name || "Unknown"}</p>
                                        </td>
                                        <td className="px-6 py-5">
                                            <p className="text-xs text-gray-400 font-medium">
                                                {new Date(article.created_at).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric'
                                                })}
                                            </p>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button 
                                                    variant="ghost" 
                                                    size="icon"
                                                    asChild
                                                >
                                                    <a href={route('artikel.show', article.slug)} target="_blank">
                                                        <Eye className="h-4 w-4" />
                                                    </a>
                                                </Button>
                                                <Button 
                                                    variant="ghost" 
                                                    size="icon"
                                                    onClick={() => openEdit(article)}
                                                    className="h-9 w-9 rounded-lg hover:bg-edufa-blue/10 hover:text-edufa-blue transition-colors"
                                                >
                                                    <Edit2 className="h-4 w-4" />
                                                </Button>
                                                <Button 
                                                    variant="ghost" 
                                                    size="icon"
                                                    onClick={() => deleteArticle(article.id)}
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
                        {filteredArticles.length === 0 && (
                            <div className="py-20 text-center">
                                <FileText className="h-12 w-12 text-gray-200 mx-auto mb-4" />
                                <p className="text-gray-500 font-medium">Belum ada artikel yang ditulis.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Create/Edit Sheet */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetContent side="right" className="sm:max-w-2xl bg-white border-l overflow-y-auto">
                    <SheetHeader className="pb-8 border-b">
                        <SheetTitle className="text-2xl font-black tracking-tight">
                            {editingArticle ? "Edit Artikel" : "Tulis Artikel Baru"}
                        </SheetTitle>
                        <SheetDescription>
                            Tulis artikel edukatif untuk orang tua dan masyarakat.
                        </SheetDescription>
                    </SheetHeader>

                    <form onSubmit={submit} className="py-8 space-y-6 pb-20">
                        <div className="space-y-5">
                            <div className="grid gap-2">
                                <Label htmlFor="title" className="text-sm font-bold text-gray-700">Judul Artikel</Label>
                                <Input 
                                    id="title" 
                                    value={data.title}
                                    onChange={e => setData("title", e.target.value)}
                                    placeholder="Masukkan judul artikel yang menarik..."
                                    className={cn("h-11 rounded-xl", errors.title && "border-rose-500")}
                                />
                                {errors.title && <p className="text-xs text-rose-500 font-medium">{errors.title}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="category" className="text-sm font-bold text-gray-700">Kategori</Label>
                                    <Input 
                                        id="category" 
                                        value={data.category}
                                        onChange={e => setData("category", e.target.value)}
                                        placeholder="E.g. Parenting, Terapi"
                                        className="h-11 rounded-xl"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="status" className="text-sm font-bold text-gray-700">Status Publikasi</Label>
                                    <select 
                                        id="status"
                                        value={data.status}
                                        onChange={e => setData("status", e.target.value)}
                                        className="h-11 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-edufa-blue"
                                    >
                                        <option value="draft">Draft (Simpan Saja)</option>
                                        <option value="published">Published (Terbitkan)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="content" className="text-sm font-bold text-gray-700">Isi Artikel</Label>
                                <RichTextEditor 
                                    value={data.content}
                                    onChange={(html) => setData("content", html)}
                                />
                                {errors.content && <p className="text-xs text-rose-500 font-medium">{errors.content}</p>}
                            </div>

                            <div className="grid gap-6 p-6 bg-blue-50/50 rounded-3xl border border-blue-100">
                                <Label className="text-sm font-black text-edufa-blue uppercase tracking-wider">Kustom Penulis (Expert Voice)</Label>
                                
                                <div className="flex items-center space-x-3 mb-2">
                                    <input 
                                        type="checkbox"
                                        id="show_expert_voice"
                                        checked={data.show_expert_voice}
                                        onChange={e => setData("show_expert_voice", e.target.checked)}
                                        className="w-5 h-5 rounded border-gray-300 text-edufa-blue focus:ring-edufa-blue transition-all cursor-pointer"
                                    />
                                    <Label htmlFor="show_expert_voice" className="text-sm font-bold text-gray-700 cursor-pointer">Tampilkan Expert Voice di artikel ini</Label>
                                </div>

                                <div className={cn("space-y-4 transition-all duration-300", !data.show_expert_voice && "opacity-40 pointer-events-none")}>
                                    <div className="grid gap-2">
                                        <Label htmlFor="author_name" className="text-xs font-bold text-gray-700">Nama Lengkap & Gelar</Label>
                                        <Input 
                                            id="author_name" 
                                            value={data.author_name}
                                            onChange={e => setData("author_name", e.target.value)}
                                            placeholder="E.g. Dr. Ernie C. Siregar"
                                            className="h-10 rounded-xl bg-white"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="author_role" className="text-xs font-bold text-gray-700">Jabatan / Keahlian</Label>
                                        <Input 
                                            id="author_role" 
                                            value={data.author_role}
                                            onChange={e => setData("author_role", e.target.value)}
                                            placeholder="E.g. Psikolog Klinis"
                                            className="h-10 rounded-xl bg-white"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="author_bio" className="text-xs font-bold text-gray-700">Biografi Singkat</Label>
                                        <textarea 
                                            id="author_bio" 
                                            value={data.author_bio}
                                            onChange={e => setData("author_bio", e.target.value)}
                                            rows={3}
                                            placeholder="Tuliskan biografi singkat expert..."
                                            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-edufa-blue leading-relaxed"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                                <Label className="text-sm font-black text-gray-900 uppercase tracking-wider">Thumbnail Artikel</Label>
                                <div 
                                    className="relative aspect-video rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 bg-white group transition-all hover:border-edufa-blue/50 flex flex-col items-center justify-center cursor-pointer"
                                    onClick={() => document.getElementById('thumb-upload').click()}
                                >
                                    {data.thumbnail ? (
                                        <img 
                                            src={URL.createObjectURL(data.thumbnail)} 
                                            alt="Preview" 
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (editingArticle?.thumbnail_path ? (
                                        <img src={`/storage/${editingArticle.thumbnail_path}`} alt="Current" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="text-center p-6">
                                            <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-3 text-gray-400 group-hover:text-edufa-blue transition-all">
                                                <Plus className="h-6 w-6" />
                                            </div>
                                            <p className="text-xs font-bold text-gray-500">Klik untuk upload thumbnail</p>
                                        </div>
                                    ))}
                                    <input 
                                        id="thumb-upload"
                                        type="file" 
                                        className="hidden" 
                                        onChange={e => setData("thumbnail", e.target.files[0])}
                                        accept="image/*"
                                    />
                                </div>
                                {errors.thumbnail && <p className="text-xs text-rose-500 font-medium">{errors.thumbnail}</p>}
                            </div>
                        </div>

                        <div className="pt-8 border-t flex items-center justify-end gap-3 sticky bottom-0 bg-white">
                            <Button type="button" variant="ghost" onClick={() => setIsSheetOpen(false)} className="rounded-xl font-bold">
                                Batal
                            </Button>
                            <Button type="submit" disabled={processing} className="bg-edufa-blue hover:bg-edufa-blue/90 text-white rounded-xl shadow-lg shadow-edufa-blue/20 px-8 font-bold">
                                {processing ? "Menyimpan..." : (editingArticle ? "Update Artikel" : "Terbitkan Artikel")}
                            </Button>
                        </div>
                    </form>
                </SheetContent>
            </Sheet>
        </AuthenticatedLayout>
    )
}
