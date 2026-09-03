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
    User, 
    X,
    ExternalLink,
    MoreHorizontal,
    ArrowUp,
    ArrowDown,
    Calendar,
    GripVertical
} from "lucide-react"
import { Label } from "@/Components/ui/label"
import { cn } from "@/lib/utils"
import Modal from "@/Components/Modal"
import SecondaryButton from "@/Components/SecondaryButton"
import DangerButton from "@/Components/DangerButton"
import PrimaryButton from "@/Components/PrimaryButton"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"

export default function Index({ teamMembers }) {
    const [searchTerm, setSearchTerm] = React.useState("")
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [editingMember, setEditingMember] = React.useState(null)
    const [confirmModal, setConfirmModal] = React.useState({ isOpen: false, type: '', data: null })
    const [sortBy, setSortBy] = React.useState("default") // default, name, date
    const [sortOrder, setSortOrder] = React.useState("asc") // asc, desc
    const [localTeamMembers, setLocalTeamMembers] = React.useState(teamMembers)

    React.useEffect(() => {
        setLocalTeamMembers(teamMembers)
    }, [teamMembers])

    const isFilterActive = searchTerm.length > 0 || sortBy !== "default"
    const isDragDisabled = isFilterActive

    const getFilteredTeamMembers = () => {
        let filtered = isDragDisabled ? localTeamMembers : localTeamMembers

        // Apply search filter
        if (searchTerm.length > 0) {
            filtered = filtered.filter(member => 
                member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.type.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        // Apply sort
        if (sortBy === "name") {
            filtered.sort((a, b) => {
                const comparison = a.name.localeCompare(b.name)
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

    const filteredMembers = getFilteredTeamMembers()

    const handleDragEnd = (result) => {
        if (!result.destination) return

        const items = Array.from(localTeamMembers)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        setLocalTeamMembers(items)

        router.post(route('admin.team-members.reorder'), {
            members: items.map(item => item.id)
        }, {
            preserveScroll: true,
            onSuccess: () => {
                // Refresh halaman untuk memastikan data dari database yang dimuat
                router.reload()
            }
        })
    }

    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: "",
        type: "terapis", // default
        role: "",
        description: "",
        photo: null,
        _method: "POST",
    })

    const openCreate = () => {
        setEditingMember(null)
        reset()
        setData({
            name: "",
            type: "terapis",
            role: "",
            description: "",
            photo: null,
            _method: "POST"
        })
        setIsModalOpen(true)
    }

    const openEdit = (member) => {
        setEditingMember(member)
        setData({
            name: member.name,
            type: member.type || "terapis",
            role: member.role || "",
            description: member.description || "",
            photo: null,
            _method: "PUT"
        })
        setIsModalOpen(true)
    }

    const submit = (e) => {
        e.preventDefault()
        setConfirmModal({ isOpen: true, type: 'save', data: null })
    }

    const deleteMember = (id) => {
        setConfirmModal({ isOpen: true, type: 'delete', data: id })
    }

    const handleConfirm = () => {
        if (confirmModal.type === 'save') {
            if (editingMember) {
                post(route("admin.team-members.update", editingMember.id), {
                    forceFormData: true,
                    onSuccess: () => {
                        setIsModalOpen(false)
                        setConfirmModal({ isOpen: false, type: '', data: null })
                        reset()
                    }
                })
            } else {
                post(route("admin.team-members.store"), {
                    onSuccess: () => {
                        setIsModalOpen(false)
                        setConfirmModal({ isOpen: false, type: '', data: null })
                        reset()
                    }
                })
            }
        } else if (confirmModal.type === 'delete') {
            router.delete(route("admin.team-members.destroy", confirmModal.data), {
                onSuccess: () => {
                    setConfirmModal({ isOpen: false, type: '', data: null })
                }
            })
        }
    }

    return (
        <>
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-black leading-tight text-gray-900 tracking-tight">
                        Manajemen Tim
                    </h2>
                    <Button onClick={openCreate} className="bg-edufa-blue hover:bg-edufa-blue/90 text-white rounded-xl shadow-lg shadow-edufa-blue/20 px-6 font-bold">
                        <Plus className="mr-2 h-4 w-4" /> Tambah Anggota
                    </Button>
                </div>
            }
        >
            <Head title="Manajemen Tim (Terapis & Staf)" />

            <div className="space-y-6">
                {/* Search Bar & Filter Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input 
                            placeholder="Cari nama, jabatan, atau tipe..."
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
                        {sortBy !== "default" && (
                            <Button
                                onClick={() => {
                                    setSortBy("default")
                                    setSortOrder("asc")
                                }}
                                variant="ghost"
                                className="rounded-lg h-10 px-3 text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                                title="Reset ke urutan default"
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
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Nama & Tipe</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Jabatan / Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Aksi</th>
                                </tr>
                            </thead>
                            <DragDropContext onDragEnd={handleDragEnd}>
                                <Droppable droppableId="team-members-list" isDropDisabled={isDragDisabled}>
                                    {(provided) => (
                                        <tbody 
                                            className="divide-y divide-gray-100"
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                        >
                                            {filteredMembers.map((member, index) => (
                                                <Draggable key={member.id} draggableId={member.id.toString()} index={index} isDragDisabled={isDragDisabled}>
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
                                                                <div className="h-14 w-14 rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
                                                                    {member.photo_url ? (
                                                                        <img src={member.photo_url} alt={member.name} className="w-full h-full object-cover" />
                                                                    ) : (
                                                                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                                            <User className="h-6 w-6" />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-5">
                                                                <div className="flex flex-col">
                                                                    <p className="font-bold text-gray-900">{member.name}</p>
                                                                    <span className={cn(
                                                                        "mt-1 text-[10px] font-bold uppercase w-max px-2 py-0.5 rounded",
                                                                        member.type === 'terapis' ? "bg-edufa-blue/10 text-edufa-blue" : "bg-edufa-yellow/20 text-edufa-yellow"
                                                                    )}>
                                                                        {member.type}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-5">
                                                                <p className="font-medium text-gray-700">{member.role}</p>
                                                                {member.description && (
                                                                    <p className="text-xs text-gray-500 mt-1 line-clamp-1 max-w-xs">{member.description}</p>
                                                                )}
                                                            </td>
                                                            <td className="px-6 py-5 text-right">
                                                                <div className="flex items-center justify-end gap-2">
                                                                    <Button 
                                                                        variant="ghost" 
                                                                        size="icon"
                                                                        onClick={() => openEdit(member)}
                                                                        className="h-9 w-9 rounded-lg hover:bg-edufa-blue/10 hover:text-edufa-blue transition-colors"
                                                                    >
                                                                        <Edit2 className="h-4 w-4" />
                                                                    </Button>
                                                                    <Button 
                                                                        variant="ghost" 
                                                                        size="icon"
                                                                        onClick={() => deleteMember(member.id)}
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
                        {filteredMembers.length === 0 && (
                            <div className="py-20 text-center">
                                <User className="h-12 w-12 text-gray-200 mx-auto mb-4" />
                                <p className="text-gray-500 font-medium">Tidak ada anggota tim ditemukan.</p>
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
                                {editingMember ? "Edit Anggota" : "Tambah Anggota"}
                            </h2>
                            <p className="text-xs text-gray-500 mt-1">
                                Isi detail anggota tim (Terapis/Staf) beserta foto.
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
                                <Label htmlFor="name" className="text-sm font-bold text-gray-700">Nama Lengkap</Label>
                                <Input 
                                    id="name" 
                                    value={data.name}
                                    onChange={e => setData("name", e.target.value)}
                                    placeholder="Contoh: Dr. Jhon Doe"
                                    className={cn("h-11 rounded-xl", errors.name && "border-rose-500")}
                                />
                                {errors.name && <p className="text-xs text-rose-500 font-medium">{errors.name}</p>}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="type" className="text-sm font-bold text-gray-700">Tipe (Staf atau Terapis)</Label>
                                <select 
                                    id="type"
                                    value={data.type}
                                    onChange={e => setData("type", e.target.value)}
                                    className={cn(
                                        "h-11 rounded-xl border border-gray-100 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-edufa-blue",
                                        errors.type && "border-rose-500"
                                    )}
                                >
                                    <option value="terapis">Terapis</option>
                                    <option value="staf">Staf</option>
                                </select>
                                {errors.type && <p className="text-xs text-rose-500 font-medium">{errors.type}</p>}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="role" className="text-sm font-bold text-gray-700">Status / Jabatan</Label>
                                <Input 
                                    id="role" 
                                    value={data.role}
                                    onChange={e => setData("role", e.target.value)}
                                    placeholder="Contoh: Terapis Pendidikan"
                                    className={cn("h-11 rounded-xl", errors.role && "border-rose-500")}
                                />
                                {errors.role && <p className="text-xs text-rose-500 font-medium">{errors.role}</p>}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="description" className="text-sm font-bold text-gray-700">Keterangan Tambahan (Opsional)</Label>
                                <textarea 
                                    id="description" 
                                    value={data.description}
                                    onChange={e => setData("description", e.target.value)}
                                    rows={3}
                                    placeholder="Masukkan keterangan singkat..."
                                    className={cn(
                                        "w-full rounded-xl border border-gray-100 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-edufa-blue",
                                        errors.description && "border-rose-500"
                                    )}
                                />
                                {errors.description && <p className="text-xs text-rose-500 font-medium">{errors.description}</p>}
                            </div>

                            <div className="grid gap-2">
                                <Label className="text-sm font-bold text-gray-700">Foto Profil</Label>
                                <div className="space-y-4">
                                    <div 
                                        className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 bg-gray-50 group transition-all hover:border-edufa-blue/50 flex flex-col items-center justify-center cursor-pointer"
                                        onClick={() => document.getElementById('photo-upload').click()}
                                    >
                                        {data.photo || (editingMember && editingMember.photo_url) ? (
                                            <img 
                                                src={data.photo ? URL.createObjectURL(data.photo) : editingMember.photo_url} 
                                                alt="Preview" 
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="text-center p-4">
                                                <div className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-2 text-gray-400 group-hover:text-edufa-blue group-hover:scale-110 transition-all">
                                                    <Plus className="h-4 w-4" />
                                                </div>
                                                <p className="text-[10px] font-bold text-gray-500">Upload Foto</p>
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
                        </div>

                        <div className="pt-6 border-t flex items-center justify-end gap-3">
                            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)} className="rounded-xl font-bold">
                                Batal
                            </Button>
                            <Button type="submit" disabled={processing} className="bg-edufa-blue hover:bg-edufa-blue/90 text-white rounded-xl shadow-lg shadow-edufa-blue/20 px-8 font-bold">
                                {processing ? "Menyimpan..." : "Simpan Anggota"}
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </AuthenticatedLayout>
            
        {/* Confirmation Modal */}
        <Modal show={confirmModal.isOpen} onClose={() => setConfirmModal({ isOpen: false, type: '', data: null })} maxWidth="sm">
            <div className="p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                    {confirmModal.type === 'save' ? 'Konfirmasi Simpan' : 'Konfirmasi Hapus'}
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                    {confirmModal.type === 'save' 
                        ? 'Apakah Anda yakin ingin menyimpan data anggota tim ini?' 
                        : 'Apakah Anda yakin ingin menghapus anggota tim ini? Tindakan ini tidak dapat dibatalkan.'}
                </p>
                <div className="flex justify-end gap-3">
                    <SecondaryButton onClick={() => setConfirmModal({ isOpen: false, type: '', data: null })}>
                        Batal
                    </SecondaryButton>
                    {confirmModal.type === 'save' ? (
                        <PrimaryButton onClick={handleConfirm} disabled={processing} className="bg-edufa-blue">
                            {processing ? 'Menyimpan...' : 'Ya, Simpan'}
                        </PrimaryButton>
                    ) : (
                        <DangerButton onClick={handleConfirm} disabled={processing}>
                            {processing ? 'Menghapus...' : 'Ya, Hapus'}
                        </DangerButton>
                    )}
                </div>
            </div>
        </Modal>
        </>
    )
}
