<?php

use App\Http\Controllers\ProfileController;
use App\Models\Branch;
use App\Models\TeamMember;
use App\Http\Controllers\BranchController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

Route::get('/sitemap.xml', function () {
    $sitemap = Sitemap::create()
        ->add(Url::create('/')->setPriority(1.0)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY))
        ->add(Url::create('/terapis')->setPriority(0.8)->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY))
        ->add(Url::create('/cabang')->setPriority(0.8)->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY));
    
    $pelayanan = [
        '/pelayanan/asesmen-psikologi',
        '/pelayanan/pelatihan',
        '/pelayanan/konseling',
        '/pelayanan/terapi',
        '/pelayanan/paud-edufa-kids',
        '/pelayanan/pendampingan-abk',
        '/pelayanan/balai-latihan-kerja'
    ];

    foreach ($pelayanan as $path) {
        $sitemap->add(Url::create($path)->setPriority(0.9)->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY));
    }

    return $sitemap->toResponse(request());
});

Route::get('/', function () {
    return Inertia::render('Guest/Page', [
        'branches' => Branch::all()
    ]);
})->name('home');

Route::get('/terapis', function () {
    return Inertia::render('Guest/Terapis', [
        'teamMembers' => \App\Models\TeamMember::all()
    ]);
})->name('terapis');

Route::get('/kegiatan', function () {
    return Inertia::render('Guest/Kegiatan', [
        'activities' => \App\Models\Activity::latest()->get()
    ]);
})->name('kegiatan');

Route::get('/artikel', function () {
    return Inertia::render('Guest/Artikel', [
        'articles' => \App\Models\Article::with('user')->where('status', 'published')->latest()->get()
    ]);
})->name('artikel');

Route::get('/artikel/{slug}', function ($slug) {
    $article = \App\Models\Article::with('user')->where('slug', $slug)->firstOrFail();
    $relatedArticles = \App\Models\Article::where('id', '!=', $article->id)
        ->where('status', 'published')
        ->latest()
        ->take(3)
        ->get();
        
    return Inertia::render('Guest/DetailArtikel', [
        'article' => $article,
        'relatedArticles' => $relatedArticles
    ]);
})->name('artikel.show');



Route::prefix('pelayanan')->name('pelayanan.')->group(function () {
    Route::get('/asesmen-psikologi', function () { 
        return Inertia::render('Guest/Pelayanan/AsesmenPsikologi', [
            'service' => \App\Models\Service::where('slug', 'asesmen-psikologi')->first()
        ]); 
    })->name('asesmen');

    Route::get('/pelatihan', function () { 
        return Inertia::render('Guest/Pelayanan/Pelatihan', [
            'service' => \App\Models\Service::where('slug', 'pelatihan')->first()
        ]); 
    })->name('pelatihan');

    Route::get('/konseling', function () { 
        return Inertia::render('Guest/Pelayanan/Konseling', [
            'service' => \App\Models\Service::where('slug', 'konseling')->first()
        ]); 
    })->name('konseling');

    Route::get('/terapi', function () { 
        return Inertia::render('Guest/Pelayanan/Terapi', [
            'service' => \App\Models\Service::where('slug', 'terapi')->first()
        ]); 
    })->name('terapi');

    Route::get('/paud-edufa-kids', function () { 
        return Inertia::render('Guest/Pelayanan/PAUDEDUfaKids', [
            'service' => \App\Models\Service::where('slug', 'paud-edufa-kids')->first()
        ]); 
    })->name('paud');

    Route::get('/pendampingan-abk', function () { 
        return Inertia::render('Guest/Pelayanan/PendampinganABKdiSekolah', [
            'service' => \App\Models\Service::where('slug', 'pendampingan-abk')->first()
        ]); 
    })->name('pendampingan');

    Route::get('/balai-latihan-kerja', function () { 
        return Inertia::render('Guest/Pelayanan/Balai', [
            'service' => \App\Models\Service::where('slug', 'balai-latihan-kerja')->first()
        ]); 
    })->name('balai');
});

Route::get('/cabang', function () {
    return Inertia::render('Guest/Cabang', [
        'branches' => Branch::all()
    ]);
})->name('cabang');

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard', [
            'stats' => [
                'totalBranches' => Branch::count(),
                'totalTeamMembers' => TeamMember::count(),
                'totalArticles' => \App\Models\Article::count(),
                'totalActivities' => \App\Models\Activity::count(),
            ],
            'recentArticles' => \App\Models\Article::with('user')->latest()->take(5)->get(),
            'recentActivities' => \App\Models\Activity::latest()->take(5)->get(),
        ]);
    })->name('dashboard');

    // Service Management (G-Form Links)
    Route::get('admin/services', [\App\Http\Controllers\ServiceController::class, 'index'])->name('admin.services.index');
    Route::put('admin/services/{service}', [\App\Http\Controllers\ServiceController::class, 'update'])->name('admin.services.update');

    Route::resource('admin/branches', BranchController::class)->names([
        'index' => 'admin.branches.index',
        'create' => 'admin.branches.create',
        'store' => 'admin.branches.store',
        'show' => 'admin.branches.show',
        'edit' => 'admin.branches.edit',
        'update' => 'admin.branches.update',
        'destroy' => 'admin.branches.destroy',
    ]);

    Route::resource('admin/team-members', \App\Http\Controllers\TeamMemberController::class)->names([
        'index' => 'admin.team-members.index',
        'create' => 'admin.team-members.create',
        'store' => 'admin.team-members.store',
        'show' => 'admin.team-members.show',
        'edit' => 'admin.team-members.edit',
        'update' => 'admin.team-members.update',
        'destroy' => 'admin.team-members.destroy',
    ]);

    Route::resource('admin/activities', \App\Http\Controllers\ActivityController::class)->names([
        'index' => 'admin.activities.index',
        'create' => 'admin.activities.create',
        'store' => 'admin.activities.store',
        'show' => 'admin.activities.show',
        'edit' => 'admin.activities.edit',
        'update' => 'admin.activities.update',
        'destroy' => 'admin.activities.destroy',
    ]);

    Route::resource('admin/articles', \App\Http\Controllers\ArticleController::class)->names([
        'index' => 'admin.articles.index',
        'create' => 'admin.articles.create',
        'store' => 'admin.articles.store',
        'show' => 'admin.articles.show',
        'edit' => 'admin.articles.edit',
        'update' => 'admin.articles.update',
        'destroy' => 'admin.articles.destroy',
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
