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
    MapPin, 
    X,
    ExternalLink,
    MoreHorizontal,
    ArrowUp,
    ArrowDown,
    Calendar
} from "lucide-react"
import { Label } from "@/Components/ui/label"
import { cn } from "@/lib/utils"
import Modal from "@/Components/Modal"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { GripVertical } from "lucide-react"

export default function Index({ branches }) {
    const [searchTerm, setSearchTerm] = React.useState("")
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [editingBranch, setEditingBranch] = React.useState(null)
    const [localBranches, setLocalBranches] = React.useState(branches)
    const [sortBy, setSortBy] = React.useState("manual") // manual, name, date
    const [sortOrder, setSortOrder] = React.useState("asc") // asc, desc

    React.useEffect(() => {
        setLocalBranches(branches)
    }, [branches])

    const isFilterActive = searchTerm.length > 0 || sortBy !== "manual"
    const isDragDisabled = isFilterActive

    const getFilteredBranches = () => {
        let filtered = localBranches

        // Apply search filter
        if (searchTerm.length > 0) {
            filtered = filtered.filter(branch => 
                branch.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                branch.address.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        // Apply sort
        if (sortBy === "name") {
            filtered.sort((a, b) => {
                const comparison = a.city.localeCompare(b.city)
                return sortOrder === "asc" ? comparison : -comparison
            })
        } else if (sortBy === "date") {
            filtered.sort((a, b) => {
                const dateA = new Date(a.created_at || 0)
                const dateB = new Date(b.created_at || 0)
                return sortOrder === "asc" ? dateA - dateB : dateB - dateA
            })
        }

        return filtered
    }

    const displayBranches = getFilteredBranches()

    const handleDragEnd = (result) => {
        if (!result.destination) return

        const items = Array.from(localBranches)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        setLocalBranches(items)

        router.post(route('admin.branches.reorder'), {
            branches: items.map(item => item.id)
        }, {
            preserveScroll: true,
            onSuccess: () => {
                // Refresh halaman untuk memastikan data dari database yang dimuat
                router.reload()
            }
        })
    }

    const { data, setData, post, put, processing, errors, reset } = useForm({
        city: "",
        type: "",
        address: "",
        latitude: "",
        longitude: "",
        photo_path: "",
        photo: null,
        _method: "POST",
    })

    const openCreate = () => {
        setEditingBranch(null)
        reset()
        setData("_method", "POST")
        setIsModalOpen(true)
    }

    const openEdit = (branch) => {
        setEditingBranch(branch)
        setData({
            city: branch.city,
            type: branch.type || "",
            address: branch.address,
            latitude: branch.latitude || "",
            longitude: branch.longitude || "",
            photo_path: branch.photo_path || "",
            _method: "PUT"
        })
        setIsModalOpen(true)
    }

    const submit = (e) => {
        e.preventDefault()
        if (editingBranch) {
            
            post(route("admin.branches.update", editingBranch.id), {
                forceFormData: true,
                onSuccess: () => {
                    setIsModalOpen(false)
                    reset()
                }
            })
        } else {
            post(route("admin.branches.store"), {
                onSuccess: () => {
                    setIsModalOpen(false)
                    reset()
                }
            })
        }
    }

    const deleteBranch = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus cabang ini?")) {
            router.delete(route("admin.branches.destroy", id))
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-black leading-tight text-gray-900 tracking-tight">
                        Manajemen Cabang
                    </h2>
                    <Button onClick={openCreate} className="bg-edufa-blue hover:bg-edufa-blue/90 text-white rounded-xl shadow-lg shadow-edufa-blue/20 px-6 font-bold">
                        <Plus className="mr-2 h-4 w-4" /> Tambah Cabang
                    </Button>
                </div>
            }
        >
            <Head title="Manajemen Cabang" />

            <div className="space-y-6">
                {/* Search Bar */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input 
                            placeholder="Cari kota atau alamat..."
                            className="pl-10 h-11 bg-white border-gray-100 rounded-xl shadow-sm focus:ring-edufa-blue"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex gap-2 items-center">
                        {/* Sort by Name Button */}
                        <Button
                            onClick={() => {
                                if (sortBy === "name") {
                                    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                                } else {
                                    setSortBy("name")
                                    setSortOrder("asc")
                                }
                            }}
                            variant={sortBy === "name" ? "default" : "outline"}
                            className={cn(
                                "rounded-lg h-10 font-bold text-sm transition-all",
                                sortBy === "name" 
                                    ? "bg-edufa-blue text-white hover:bg-edufa-blue/90 shadow-md" 
                                    : "border-gray-200 hover:bg-gray-50"
                            )}
                        >
                            {sortBy === "name" && (
                                sortOrder === "asc" ? <ArrowUp className="h-4 w-4 mr-1.5" /> : <ArrowDown className="h-4 w-4 mr-1.5" />
                            )}
                            A-Z
                        </Button>

                        {/* Sort by Date Button */}
                        <Button
                            onClick={() => {
                                if (sortBy === "date") {
                                    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                                } else {
                                    setSortBy("date")
                                    setSortOrder("desc")
                                }
                            }}
                            variant={sortBy === "date" ? "default" : "outline"}
                            className={cn(
                                "rounded-lg h-10 font-bold text-sm transition-all",
                                sortBy === "date" 
                                    ? "bg-edufa-blue text-white hover:bg-edufa-blue/90 shadow-md" 
                                    : "border-gray-200 hover:bg-gray-50"
                            )}
                        >
                            {sortBy === "date" && (
                                sortOrder === "asc" ? <ArrowUp className="h-4 w-4 mr-1.5" /> : <ArrowDown className="h-4 w-4 mr-1.5" />
                            )}
                            <Calendar className="h-4 w-4 mr-1.5" />
                            Tanggal
                        </Button>

                        {/* Reset Button - Show when filter is active */}
                        {isFilterActive && (
                            <Button
                                onClick={() => {
                                    setSortBy("manual")
                                    setSortOrder("asc")
                                }}
                                variant="ghost"
                                className="rounded-lg h-10 px-3 text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                                title="Reset ke custom order"
                            >
                                ✕
                            </Button>
                        )}
                    </div>
                </div>

                {/* Table / Grid */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 border-b border-gray-100">
                                <tr>
                                    <th className="w-10 px-3 py-4"></th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Foto</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Cabang</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Alamat</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Koordinat</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Aksi</th>
                                </tr>
                            </thead>
                            <DragDropContext onDragEnd={handleDragEnd}>
                                <Droppable droppableId="branches-list" isDropDisabled={isDragDisabled}>
                                    {(provided) => (
                                        <tbody 
                                            className="divide-y divide-gray-100"
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                        >
                                            {displayBranches.map((branch, index) => (
                                                <Draggable key={branch.id} draggableId={branch.id.toString()} index={index} isDragDisabled={isDragDisabled}>
                                                    {(provided, snapshot) => (
                                                        <tr 
                                                            className={cn("hover:bg-gray-50/50 transition-colors group bg-white", snapshot.isDragging && "shadow-lg bg-gray-50/80 z-50 relative")}
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                        >
                                                            <td className="px-3 py-5 w-10">
                                                                <div 
                                                                    {...provided.dragHandleProps} 
                                                                    className={cn("text-gray-300 hover:text-gray-500 transition-colors p-2 cursor-grab active:cursor-grabbing", isDragDisabled && "opacity-50 cursor-not-allowed")}
                                                                >
                                                                    <GripVertical className="h-5 w-5" />
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-5">
                                                                <div className="h-12 w-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-100">
                                                                    {branch.photo_url ? (
                                                                        <img src={branch.photo_url} alt={`Foto Cabang ${branch.city}`} className="w-full h-full object-cover" />
                                                                    ) : (
                                                                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                                            <MapPin className="h-4 w-4" />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-5">
                                                                <div className="flex items-center gap-3">
                                                                    <div>
                                                                        <p className="font-bold text-gray-900">{branch.city}</p>
                                                                        {branch.type && (
                                                                            <span className="text-[10px] font-bold text-edufa-yellow uppercase bg-edufa-yellow/10 px-1.5 py-0.5 rounded">
                                                                                {branch.type}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-5">
                                                                <p className="text-sm text-gray-600 line-clamp-1 max-w-xs">{branch.address}</p>
                                                            </td>
                                                            <td className="px-6 py-5">
                                                                <div className="text-[11px] font-mono text-gray-500 space-y-0.5">
                                                                    <p>LAT: {branch.latitude || "-"}</p>
                                                                    <p>LNG: {branch.longitude || "-"}</p>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-5 text-right">
                                                                <div className="flex items-center justify-end gap-2">
                                                                    <Button 
                                                                        variant="ghost" 
                                                                        size="icon"
                                                                        onClick={() => openEdit(branch)}
                                                                        className="h-9 w-9 rounded-lg hover:bg-edufa-blue/10 hover:text-edufa-blue transition-colors"
                                                                    >
                                                                        <Edit2 className="h-4 w-4" />
                                                                    </Button>
                                                                    <Button 
                                                                        variant="ghost" 
                                                                        size="icon"
                                                                        onClick={() => deleteBranch(branch.id)}
                                                                        className="h-9 w-9 rounded-lg hover:bg-rose-50 hover:text-rose-600 transition-colors"
                                                                    >
                                                                        <Trash2 className="h-4 w-4" />
                                                                    </Button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </tbody>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        </table>
                        {displayBranches.length === 0 && (
                            <div className="py-20 text-center">
                                <MapPin className="h-12 w-12 text-gray-200 mx-auto mb-4" />
                                <p className="text-gray-500 font-medium">Tidak ada cabang ditemukan.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Create/Edit Modal */}
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} maxWidth="lg">
                <div className="p-6">
                    {/* Header */}
                    <div className="pb-6 border-b flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-black tracking-tight text-gray-900">
                                {editingBranch ? "Edit Cabang" : "Tambah Cabang"}
                            </h2>
                            <p className="text-xs text-gray-500 mt-1">
                                Isi detail cabang di bawah ini. Pastikan alamat dan koordinat sesuai untuk tampilan peta.
                            </p>
                        </div>
                        <Button 
                            type="button"
                            variant="ghost" 
                            size="icon" 
                            onClick={() => setIsModalOpen(false)}
                            className="h-8 w-8 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>

                    <form onSubmit={submit} className="py-6 space-y-6">
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            <div className="grid gap-2">
                                <Label htmlFor="city" className="text-sm font-bold text-gray-700">Nama Kota / Wilayah</Label>
                                <Input 
                                    id="city" 
                                    value={data.city}
                                    onChange={e => setData("city", e.target.value)}
                                    placeholder="Contoh: Bandung Head Office"
                                    className={cn("h-11 rounded-xl", errors.city && "border-rose-500")}
                                />
                                {errors.city && <p className="text-xs text-rose-500 font-medium">{errors.city}</p>}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="type" className="text-sm font-bold text-gray-700">Tipe (Opsional)</Label>
                                <Input 
                                    id="type" 
                                    value={data.type}
                                    onChange={e => setData("type", e.target.value)}
                                    placeholder="Contoh: Extension"
                                    className="h-11 rounded-xl"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="address" className="text-sm font-bold text-gray-700">Alamat Lengkap</Label>
                                <textarea 
                                    id="address" 
                                    value={data.address}
                                    onChange={e => setData("address", e.target.value)}
                                    rows={3}
                                    placeholder="Masukkan alamat lengkap..."
                                    className={cn(
                                        "w-full rounded-xl border border-gray-100 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-edufa-blue",
                                        errors.address && "border-rose-500"
                                    )}
                                />
                                {errors.address && <p className="text-xs text-rose-500 font-medium">{errors.address}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="latitude" className="text-sm font-bold text-gray-700">Latitude</Label>
                                    <Input 
                                        id="latitude" 
                                        value={data.latitude}
                                        onChange={e => setData("latitude", e.target.value)}
                                        placeholder="-6.12345"
                                        className="h-11 rounded-xl"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="longitude" className="text-sm font-bold text-gray-700">Longitude</Label>
                                    <Input 
                                        id="longitude" 
                                        value={data.longitude}
                                        onChange={e => setData("longitude", e.target.value)}
                                        placeholder="106.12345"
                                        className="h-11 rounded-xl"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label className="text-sm font-bold text-gray-700">Foto Cabang</Label>
                                <div className="space-y-4">
                                    <div 
                                        className="relative aspect-video rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 bg-gray-50 group transition-all hover:border-edufa-blue/50 flex flex-col items-center justify-center cursor-pointer"
                                        onClick={() => document.getElementById('photo-upload').click()}
                                    >
                                        {data.photo || data.photo_path ? (
                                            <img 
                                                src={data.photo ? URL.createObjectURL(data.photo) : (editingBranch?.photo_url || data.photo_path)} 
                                                alt="Preview" 
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="text-center p-6">
                                                <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-3 text-gray-400 group-hover:text-edufa-blue group-hover:scale-110 transition-all">
                                                    <Plus className="h-6 w-6" />
                                                </div>
                                                <p className="text-xs font-bold text-gray-500">Klik untuk upload foto</p>
                                                <p className="text-[10px] text-gray-400 mt-1">PNG, JPG up to 2MB</p>
                                            </div>
                                        )}
                                        <input 
                                            id="photo-upload"
                                            type="file" 
                                            className="hidden" 
                                            onChange={e => setData("photo", e.target.files[0])}
                                            accept="image/*"
                                        />
                                    </div>
                                    {errors.photo && <p className="text-xs text-rose-500 font-medium">{errors.photo}</p>}
                                </div>
                            </div>

                            <p className="text-[10px] text-muted-foreground flex items-center gap-1.5">
                                <ExternalLink className="h-3 w-3" /> 
                                Tip: Gunakan foto terbaru gedung atau ruang kelas Edufa.
                            </p>
                        </div>

                        <div className="pt-6 border-t flex items-center justify-end gap-3">
                            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)} className="rounded-xl font-bold">
                                Batal
                            </Button>
                            <Button type="submit" disabled={processing} className="bg-edufa-blue hover:bg-edufa-blue/90 text-white rounded-xl shadow-lg shadow-edufa-blue/20 px-8 font-bold">
                                {processing ? "Menyimpan..." : "Simpan Cabang"}
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </AuthenticatedLayout>
    )
}
