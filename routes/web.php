<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Guest/Page');
})->name('home');

Route::get('/terapis', function () {
    return Inertia::render('Guest/Terapis');
})->name('terapis');

// Pelayanan Routes
Route::prefix('pelayanan')->name('pelayanan.')->group(function () {
    Route::get('/asesmen-psikologi', function () { return Inertia::render('Guest/Pelayanan/AsesmenPsikologi'); })->name('asesmen');
    Route::get('/pelatihan', function () { return Inertia::render('Guest/Pelayanan/Pelatihan'); })->name('pelatihan');
    Route::get('/konseling', function () { return Inertia::render('Guest/Pelayanan/Konseling'); })->name('konseling');
    Route::get('/terapi', function () { return Inertia::render('Guest/Pelayanan/Terapi'); })->name('terapi');
    Route::get('/paud-edufa-kids', function () { return Inertia::render('Guest/Pelayanan/PAUDEDUfaKids'); })->name('paud');
    Route::get('/pendampingan-abk', function () { return Inertia::render('Guest/Pelayanan/PendampinganABKdiSekolah'); })->name('pendampingan');
    Route::get('/balai-latihan-kerja', function () { return Inertia::render('Guest/Pelayanan/Balai'); })->name('balai');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'admin'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
