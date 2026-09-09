<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Article;
use App\Models\Branch;
use App\Models\Service;
use App\Models\TeamMember;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class GuestController extends Controller
{
    /**
     * Home page
     */
    public function index()
    {
        return Inertia::render('Guest/Page', [
            'branches' => Branch::orderBy('sort_order', 'asc')->get(),
        ]);
    }

    /**
     * Terapis page
     */
    public function terapis()
    {
        return Inertia::render('Guest/Terapis', [
            'teamMembers' => TeamMember::orderBy('sort_order', 'asc')->get()
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
        $articles = Article::with('user')->where('status', 'published')->latest()->get()->map(function ($article) {
            $article->excerpt = Str::limit(strip_tags($article->content), 200);
            unset($article->content);
            return $article;
        });

        return Inertia::render('Guest/Artikel', [
            'articles' => $articles
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
            ->get()
            ->map(function ($art) {
                $art->excerpt = Str::limit(strip_tags($art->content), 150);
                unset($art->content);
                return $art;
            });
            
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
            'branches' => Branch::orderBy('sort_order', 'asc')->get()
        ]);
    }

    /**
     * Konsultan page
     */
    public function konsultan()
    {
        return Inertia::render('Guest/Konsultan', [
            'images' => \App\Models\ConsultantImage::orderBy('sort_order', 'asc')->get()
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

    /**
     * Tag-based article filter (legacy SEO URLs like /tag/terapi-anak)
     */
    public function tagArtikel($slug)
    {
        // Convert slug to search keywords: "terapi-anak" → "terapi anak"
        $keyword = str_replace('-', ' ', $slug);
        $tagTitle = ucwords(str_replace('-', ' ', $slug));

        $articles = Article::with('user')
            ->where('status', 'published')
            ->where(function ($query) use ($keyword) {
                $query->where('title', 'LIKE', "%{$keyword}%")
                    ->orWhere('content', 'LIKE', "%{$keyword}%")
                    ->orWhere('category', 'LIKE', "%{$keyword}%");
            })
            ->latest()
            ->get()
            ->map(function ($article) {
                $article->excerpt = Str::limit(strip_tags($article->content), 200);
                unset($article->content);
                return $article;
            });

        // If no articles found for this tag, show all articles as fallback
        if ($articles->isEmpty()) {
            $articles = Article::with('user')
                ->where('status', 'published')
                ->latest()
                ->get()
                ->map(function ($article) {
                    $article->excerpt = Str::limit(strip_tags($article->content), 200);
                    unset($article->content);
                    return $article;
                });
        }

        return Inertia::render('Guest/Artikel', [
            'articles' => $articles,
            'tagFilter' => $tagTitle,
        ]);
    }
}
