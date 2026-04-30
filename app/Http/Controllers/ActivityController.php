<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Activities/Index', [
            'activities' => Activity::latest()->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'type' => 'required|in:terapi,kelas',
            'media_type' => 'required|in:photo,video',
            'media_file' => 'required_if:media_type,photo|nullable|image|mimes:jpeg,png,jpg,webp|max:5120',
            'video_url' => 'required_if:media_type,video|nullable|url',
        ]);

        $mediaPath = '';
        if ($request->media_type === 'photo' && $request->hasFile('media_file')) {
            $mediaPath = $request->file('media_file')->store('activities', 'public');
        } else {
            $mediaPath = $request->video_url ?? '';
        }

        Activity::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'type' => $validated['type'],
            'media_type' => $validated['media_type'],
            'media_path' => $mediaPath,
        ]);

        return redirect()->back()->with('success', 'Kegiatan berhasil ditambahkan');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Activity $activity)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'type' => 'required|in:terapi,kelas',
            'media_type' => 'required|in:photo,video',
            'media_file' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120',
            'video_url' => 'required_if:media_type,video|nullable|url',
        ]);

        $mediaPath = $activity->media_path;

        if ($request->media_type === 'photo') {
            if ($request->hasFile('media_file')) {
                if ($activity->media_type === 'photo' && $activity->media_path) {
                    Storage::disk('public')->delete($activity->media_path);
                }
                $mediaPath = $request->file('media_file')->store('activities', 'public');
            }
        } else {
            if ($activity->media_type === 'photo' && $activity->media_path) {
                Storage::disk('public')->delete($activity->media_path);
            }
            $mediaPath = $request->video_url ?? '';
        }

        $activity->update([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'type' => $validated['type'],
            'media_type' => $validated['media_type'],
            'media_path' => $mediaPath,
        ]);

        return redirect()->back()->with('success', 'Kegiatan berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Activity $activity)
    {
        if ($activity->media_type === 'photo' && $activity->media_path) {
            Storage::disk('public')->delete($activity->media_path);
        }
        $activity->delete();
        return redirect()->back()->with('success', 'Kegiatan berhasil dihapus');
    }
}
