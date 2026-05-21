<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Services/Index', [
            'services' => Service::all()
        ]);
    }

    public function update(Request $request, Service $service)
    {
        $validated = $request->validate([
            'google_form_url' => 'nullable|url',
        ]);

        $service->update([
            'google_form_url' => $validated['google_form_url']
        ]);

        return redirect()->back()->with('success', 'Link Google Form berhasil diperbarui');
    }
}
