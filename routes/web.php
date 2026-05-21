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

use App\Http\Controllers\GuestController;

Route::get('/', [GuestController::class, 'index'])->name('home');
Route::get('/terapis', [GuestController::class, 'terapis'])->name('terapis');
Route::get('/kegiatan', [GuestController::class, 'kegiatan'])->name('kegiatan');
Route::get('/artikel', [GuestController::class, 'artikel'])->name('artikel');
Route::get('/artikel/{slug}', [GuestController::class, 'showArtikel'])->name('artikel.show');
Route::get('/cabang', [GuestController::class, 'cabang'])->name('cabang');

Route::prefix('pelayanan')->name('pelayanan.')->group(function () {
    Route::get('/asesmen-psikologi', [GuestController::class, 'pelayanan'])->defaults('type', 'asesmen-psikologi')->name('asesmen');
    Route::get('/pelatihan', [GuestController::class, 'pelayanan'])->defaults('type', 'pelatihan')->name('pelatihan');
    Route::get('/konseling', [GuestController::class, 'pelayanan'])->defaults('type', 'konseling')->name('konseling');
    Route::get('/terapi', [GuestController::class, 'pelayanan'])->defaults('type', 'terapi')->name('terapi');
    Route::get('/paud-edufa-kids', [GuestController::class, 'pelayanan'])->defaults('type', 'paud-edufa-kids')->name('paud');
    Route::get('/pendampingan-abk', [GuestController::class, 'pelayanan'])->defaults('type', 'pendampingan-abk')->name('pendampingan');
    Route::get('/balai-latihan-kerja', [GuestController::class, 'pelayanan'])->defaults('type', 'balai-latihan-kerja')->name('balai');
});

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
