<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Activity;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $activities = [
            [
                'title' => 'Sesi Terapi ABA (Applied Behavior Analysis)',
                'description' => 'Melihat lebih dekat bagaimana sesi terapi ABA dijalankan dengan penuh kesabaran dan metode terukur di EDUfa Centre.',
                'type' => 'terapi',
                'media_type' => 'video',
                'media_path' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            ],
            [
                'title' => 'Kegiatan Belajar Kelompok di Kelas',
                'description' => 'Interaksi sosial antar anak dalam kegiatan belajar bersama untuk menumbuhkan rasa percaya diri dan kerjasama tim.',
                'type' => 'kelas',
                'media_type' => 'video',
                'media_path' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            ],
            [
                'title' => 'Pelatihan Motorik Halus',
                'description' => 'Aktivitas kreatif menggunakan berbagai media untuk melatih koordinasi mata dan tangan serta fokus anak.',
                'type' => 'terapi',
                'media_type' => 'video',
                'media_path' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            ],
            [
                'title' => 'Program PAUD EDUfa Kids',
                'description' => 'Keceriaan pagi hari di PAUD EDUfa Kids, di mana setiap anak bebas bereksplorasi dalam lingkungan yang aman dan mendukung.',
                'type' => 'kelas',
                'media_type' => 'video',
                'media_path' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            ],
        ];

        foreach ($activities as $activity) {
            Activity::create($activity);
        }
    }
}
