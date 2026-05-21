<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Article;
use App\Models\Branch;
use App\Models\Service;
use App\Models\TeamMember;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuestController extends Controller
{
    /**
     * Home page
     */
    public function index()
    {
        return Inertia::render('Guest/Page', [
            'branches' => Branch::all(),
        ]);
    }

    /**
     * Terapis page
     */
    public function terapis()
    {
        return Inertia::render('Guest/Terapis', [
            'teamMembers' => TeamMember::all()
        ]);
    }

    /**
     * Kegiatan page
     */
    public function kegiatan()
    {
        return Inertia::render('Guest/Kegiatan', [
            'activities' => Activity::latest()->get()
        ]);
    }

    /**
     * Artikel index
     */
    public function artikel()
    {
        return Inertia::render('Guest/Artikel', [
            'articles' => Article::with('user')->where('status', 'published')->latest()->get()
        ]);
    }

    /**
     * Artikel detail
     */
    public function showArtikel($slug)
    {
        $article = Article::with('user')->where('slug', $slug)->firstOrFail();
        $relatedArticles = Article::where('id', '!=', $article->id)
            ->where('status', 'published')
            ->latest()
            ->take(3)
            ->get();
            
        return Inertia::render('Guest/DetailArtikel', [
            'article' => $article,
            'relatedArticles' => $relatedArticles
        ]);
    }

    /**
     * Cabang page
     */
    public function cabang()
    {
        return Inertia::render('Guest/Cabang', [
            'branches' => Branch::all()
        ]);
    }

    /**
     * Pelayanan pages handler
     */
    public function pelayanan($type)
    {
        $viewMap = [
            'asesmen-psikologi' => 'Guest/Pelayanan/AsesmenPsikologi',
            'pelatihan' => 'Guest/Pelayanan/Pelatihan',
            'konseling' => 'Guest/Pelayanan/Konseling',
            'terapi' => 'Guest/Pelayanan/Terapi',
            'paud-edufa-kids' => 'Guest/Pelayanan/PAUDEDUfaKids',
            'pendampingan-abk' => 'Guest/Pelayanan/PendampinganABKdiSekolah',
            'balai-latihan-kerja' => 'Guest/Pelayanan/Balai',
        ];

        if (!isset($viewMap[$type])) {
            abort(404);
        }

        return Inertia::render($viewMap[$type], [
            'service' => Service::where('slug', $type)->first()
        ]);
    }
}
