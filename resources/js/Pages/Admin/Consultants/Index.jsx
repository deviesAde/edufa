import * as React from "react"
import { Head, useForm, router } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Button } from "@/Components/ui/button"
import { 
    Plus, 
    Edit2, 
    Trash2, 
    Image as ImageIcon, 
    X,
} from "lucide-react"
import { Label } from "@/Components/ui/label"
import { cn } from "@/lib/utils"
import Modal from "@/Components/Modal"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { GripVertical } from "lucide-react"

export default function Index({ images }) {
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [editingImage, setEditingImage] = React.useState(null)
    const [localImages, setLocalImages] = React.useState(images)
    const [isDragging, setIsDragging] = React.useState(false)

    React.useEffect(() => {
        setLocalImages(images)
    }, [images])

    const handleBeforeCapture = () => {
        if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
            document.activeElement.blur()
        }
    }

    const handleDragStart = () => {
        setIsDragging(true)
    }

    const handleDragEnd = (result) => {
        setIsDragging(false)
        if (!result.destination) return

        const items = Array.from(localImages || [])
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        // Update sort_order locally
        const updatedItems = items.map((item, idx) => ({ ...item, sort_order: idx + 1 }))
        setLocalImages(updatedItems)

        router.post(route('admin.consultants.reorder'), {
            items: updatedItems.map(item => ({ id: item.id, sort_order: item.sort_order }))
        }, {
            preserveScroll: true,
            onSuccess: () => {
                router.reload()
            }
        })
    }

    const { data, setData, post, processing, errors, reset } = useForm({
        image: null,
        _method: "POST",
    })

    const openCreate = () => {
        setEditingImage(null)
        reset()
        setData("_method", "POST")
        setIsModalOpen(true)
    }

    const openEdit = (img) => {
        setEditingImage(img)
        setData({
            image: null,
            _method: "PUT"
        })
        setIsModalOpen(true)
    }

    const submit = (e) => {
        e.preventDefault()
        if (editingImage) {
            post(route("admin.consultants.update", editingImage.id), {
                forceFormData: true,
                onSuccess: () => {
                    setIsModalOpen(false)
                    reset()
                }
            })
        } else {
            post(route("admin.consultants.store"), {
                onSuccess: () => {
                    setIsModalOpen(false)
                    reset()
                }
            })
        }
    }

    const deleteImage = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus gambar ini?")) {
            router.delete(route("admin.consultants.destroy", id))
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-black leading-tight text-gray-900 tracking-tight">
                        Manajemen Gambar Konsultan
                    </h2>
                    <Button onClick={openCreate} className="bg-edufa-blue hover:bg-edufa-blue/90 text-white rounded-xl shadow-lg shadow-edufa-blue/20 px-6 font-bold">
                        <Plus className="mr-2 h-4 w-4" /> Tambah Gambar
                    </Button>
                </div>
            }
        >
            <Head title="Manajemen Konsultan" />

            <div className="space-y-6">
                {/* Table / Grid */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/50 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 border-b border-gray-100">
                                <tr>
                                    <th className="w-10 px-3 py-4"></th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Gambar</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Aksi</th>
                                </tr>
                            </thead>
                            <DragDropContext 
                                onBeforeCapture={handleBeforeCapture}
                                onDragStart={handleDragStart} 
                                onDragEnd={handleDragEnd}
                            >
                                <Droppable droppableId="images-list">
                                    {(provided) => (
                                        <tbody 
                                            className="divide-y divide-gray-100"
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                        >
                                            {localImages.map((img, index) => (
                                                <Draggable key={img.id} draggableId={img.id.toString()} index={index}>
                                                    {(provided, snapshot) => (
                                                        <tr 
                                                            className={cn("hover:bg-gray-50/50 transition-colors group bg-white", snapshot.isDragging && "shadow-lg bg-gray-50/80 z-50 relative")}
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            style={Object.assign(
                                                                {},
                                                                provided.draggableProps.style || {},
                                                                {
                                                                    display: snapshot.isDragging ? 'table' : '',
                                                                    tableLayout: snapshot.isDragging ? 'fixed' : '',
                                                                }
                                                            )}
                                                        >
                                                            <td className="px-3 py-5 w-10">
                                                                <div 
                                                                    {...provided.dragHandleProps} 
                                                                    className="text-gray-300 hover:text-gray-500 transition-colors p-2 cursor-grab active:cursor-grabbing"
                                                                >
                                                                    <GripVertical className="h-5 w-5" />
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-5">
                                                                <div className="h-24 w-32 rounded-lg overflow-hidden bg-gray-100 border border-gray-100 flex items-center justify-center">
                                                                    {img.image_path ? (
                                                                        <img src={img.image_path} alt="Gambar Konsultan" className="w-full h-full object-cover" />
                                                                    ) : (
                                                                        <ImageIcon className="h-6 w-6 text-gray-300" />
                                                                    )}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-5 text-right">
                                                                <div className="flex items-center justify-end gap-2">
                                                                    <Button 
                                                                        variant="ghost" 
                                                                        size="icon"
                                                                        onClick={() => openEdit(img)}
                                                                        className="h-9 w-9 rounded-lg hover:bg-edufa-blue/10 hover:text-edufa-blue transition-colors"
                                                                    >
                                                                        <Edit2 className="h-4 w-4" />
                                                                    </Button>
                                                                    <Button 
                                                                        variant="ghost" 
                                                                        size="icon"
                                                                        onClick={() => deleteImage(img.id)}
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
                        {localImages.length === 0 && (
                            <div className="py-20 text-center">
                                <ImageIcon className="h-12 w-12 text-gray-200 mx-auto mb-4" />
                                <p className="text-gray-500 font-medium">Tidak ada gambar ditemukan.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Create/Edit Modal */}
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} maxWidth="md">
                <div className="p-6">
                    <div className="pb-6 border-b flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-black tracking-tight text-gray-900">
                                {editingImage ? "Edit Gambar" : "Tambah Gambar"}
                            </h2>
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
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <Label className="text-sm font-bold text-gray-700">File Gambar</Label>
                                <div className="space-y-4">
                                    <div 
                                        className="relative aspect-video rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 bg-gray-50 group transition-all hover:border-edufa-blue/50 flex flex-col items-center justify-center cursor-pointer"
                                        onClick={() => document.getElementById('image-upload').click()}
                                    >
                                        {data.image || editingImage?.image_path ? (
                                            <img 
                                                src={data.image ? URL.createObjectURL(data.image) : editingImage.image_path} 
                                                alt="Preview" 
                                                className="w-full h-full object-contain"
                                            />
                                        ) : (
                                            <div className="text-center p-6">
                                                <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-3 text-gray-400 group-hover:text-edufa-blue group-hover:scale-110 transition-all">
                                                    <Plus className="h-6 w-6" />
                                                </div>
                                                <p className="text-xs font-bold text-gray-500">Klik untuk upload gambar</p>
                                                <p className="text-[10px] text-gray-400 mt-1">PNG, JPG, WEBP up to 5MB</p>
                                            </div>
                                        )}
                                        <input 
                                            id="image-upload"
                                            type="file" 
                                            className="hidden" 
                                            onChange={e => setData("image", e.target.files[0])}
                                            accept="image/*"
                                        />
                                    </div>
                                    {errors.image && <p className="text-xs text-rose-500 font-medium">{errors.image}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t flex items-center justify-end gap-3">
                            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)} className="rounded-xl font-bold">
                                Batal
                            </Button>
                            <Button type="submit" disabled={processing} className="bg-edufa-blue hover:bg-edufa-blue/90 text-white rounded-xl shadow-lg shadow-edufa-blue/20 px-8 font-bold">
                                {processing ? "Menyimpan..." : "Simpan Gambar"}
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </AuthenticatedLayout>
    )
}
