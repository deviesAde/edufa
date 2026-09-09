<?php

namespace App\Http\Controllers;

use App\Models\ConsultantImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ConsultantImageController extends Controller
{
    public function index()
    {
        $images = ConsultantImage::orderBy('sort_order', 'asc')->get();
        
        return Inertia::render('Admin/Consultants/Index', [
            'images' => $images
        ]);
    }



    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,webp|max:5120',
        ]);

        $maxSortOrder = ConsultantImage::max('sort_order') ?? 0;

        $path = $request->file('image')->store('consultants', 'public');

        ConsultantImage::create([
            'image_path' => '/storage/' . $path,
            'sort_order' => $maxSortOrder + 1,
        ]);

        return redirect()->route('admin.consultants.index')->with('success', 'Gambar berhasil ditambahkan.');
    }



    public function update(Request $request, ConsultantImage $consultant)
    {
        $request->validate([
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image
            $oldPath = str_replace('/storage/', '', $consultant->image_path);
            if (Storage::disk('public')->exists($oldPath)) {
                Storage::disk('public')->delete($oldPath);
            }

            $path = $request->file('image')->store('consultants', 'public');
            $consultant->update([
                'image_path' => '/storage/' . $path,
            ]);
        }

        return redirect()->route('admin.consultants.index')->with('success', 'Gambar berhasil diperbarui.');
    }

    public function destroy(ConsultantImage $consultant)
    {
        $oldPath = str_replace('/storage/', '', $consultant->image_path);
        if (Storage::disk('public')->exists($oldPath)) {
            Storage::disk('public')->delete($oldPath);
        }

        $consultant->delete();

        return redirect()->route('admin.consultants.index')->with('success', 'Gambar berhasil dihapus.');
    }

    public function reorder(Request $request)
    {
        $request->validate([
            'items' => 'required|array',
            'items.*.id' => 'required|exists:consultant_images,id',
            'items.*.sort_order' => 'required|integer',
        ]);

        foreach ($request->items as $item) {
            ConsultantImage::where('id', $item['id'])->update(['sort_order' => $item['sort_order']]);
        }

        return redirect()->back()->with('success', 'Urutan berhasil diperbarui.');
    }
}
