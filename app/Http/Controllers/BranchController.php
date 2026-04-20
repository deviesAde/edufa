<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

use Illuminate\Support\Facades\Storage;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Branches/Index', [
            'branches' => Branch::orderBy('city')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'city' => 'required|string|max:255',
            'type' => 'nullable|string|max:255',
            'address' => 'required|string',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
            'photo' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo_path'] = $request->file('photo')->store('branches', 'public');
        }

        Branch::create($validated);

        return Redirect::back()->with('success', 'Cabang berhasil ditambahkan.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Branch $branch)
    {
        $validated = $request->validate([
            'city' => 'required|string|max:255',
            'type' => 'nullable|string|max:255',
            'address' => 'required|string',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
            'photo' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('photo')) {
            
            if ($branch->photo_path && !filter_var($branch->photo_path, FILTER_VALIDATE_URL)) {
                Storage::disk('public')->delete($branch->photo_path);
            }
            $validated['photo_path'] = $request->file('photo')->store('branches', 'public');
        }

        $branch->update($validated);

        return Redirect::back()->with('success', 'Cabang berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Branch $branch)
    {
        if ($branch->photo_path && !filter_var($branch->photo_path, FILTER_VALIDATE_URL)) {
            Storage::disk('public')->delete($branch->photo_path);
        }

        $branch->delete();

        return Redirect::back()->with('success', 'Cabang berhasil dihapus.');
    }
}
