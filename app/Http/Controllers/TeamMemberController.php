<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class TeamMemberController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/TeamMembers/Index', [
            'teamMembers' => TeamMember::orderBy('type')->orderBy('name')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|in:terapis,staf',
            'role' => 'required|string|max:255',
            'description' => 'nullable|string',
            'photo' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('photo')) {
            $validated['image_path'] = $request->file('photo')->store('team_members', 'public');
        }

        TeamMember::create($validated);

        return Redirect::back()->with('success', 'Anggota tim berhasil ditambahkan.');
    }

    public function update(Request $request, TeamMember $teamMember)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|in:terapis,staf',
            'role' => 'required|string|max:255',
            'description' => 'nullable|string',
            'photo' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('photo')) {
            if ($teamMember->image_path && !filter_var($teamMember->image_path, FILTER_VALIDATE_URL)) {
                Storage::disk('public')->delete($teamMember->image_path);
            }
            $validated['image_path'] = $request->file('photo')->store('team_members', 'public');
        }

        $teamMember->update($validated);

        return Redirect::back()->with('success', 'Anggota tim berhasil diperbarui.');
    }

    public function destroy(TeamMember $teamMember)
    {
        if ($teamMember->image_path && !filter_var($teamMember->image_path, FILTER_VALIDATE_URL)) {
            Storage::disk('public')->delete($teamMember->image_path);
        }

        $teamMember->delete();

        return Redirect::back()->with('success', 'Anggota tim berhasil dihapus.');
    }
}
