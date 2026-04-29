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
    return Inertia::render('Guest/Kegiatan');
})->name('kegiatan');

Route::get('/artikel', function () {
    return Inertia::render('Guest/Artikel');
})->name('artikel');

Route::get('/artikel/{slug}', function ($slug) {
    return Inertia::render('Guest/DetailArtikel', [
        'slug' => $slug
    ]);
})->name('artikel.show');



Route::prefix('pelayanan')->name('pelayanan.')->group(function () {
    Route::get('/asesmen-psikologi', function () { return Inertia::render('Guest/Pelayanan/AsesmenPsikologi'); })->name('asesmen');
    Route::get('/pelatihan', function () { return Inertia::render('Guest/Pelayanan/Pelatihan'); })->name('pelatihan');
    Route::get('/konseling', function () { return Inertia::render('Guest/Pelayanan/Konseling'); })->name('konseling');
    Route::get('/terapi', function () { return Inertia::render('Guest/Pelayanan/Terapi'); })->name('terapi');
    Route::get('/paud-edufa-kids', function () { return Inertia::render('Guest/Pelayanan/PAUDEDUfaKids'); })->name('paud');
    Route::get('/pendampingan-abk', function () { return Inertia::render('Guest/Pelayanan/PendampinganABKdiSekolah'); })->name('pendampingan');
    Route::get('/balai-latihan-kerja', function () { return Inertia::render('Guest/Pelayanan/Balai'); })->name('balai');
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
                'totalArticles' => 0, 
            ]
        ]);
    })->name('dashboard');

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
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
