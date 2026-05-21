<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'title' => 'Asesmen Psikologi',
                'slug' => 'asesmen-psikologi',
                'google_form_url' => 'https://docs.google.com/forms/d/e/1FAIpQLSfw7f1x...',
            ],
            [
                'title' => 'Pelatihan & Workshop',
                'slug' => 'pelatihan',
                'google_form_url' => 'https://docs.google.com/forms/d/e/1FAIpQLSfw7f1x...',
            ],
            [
                'title' => 'Konseling',
                'slug' => 'konseling',
                'google_form_url' => 'https://docs.google.com/forms/d/e/1FAIpQLSfw7f1x...',
            ],
            [
                'title' => 'Terapi',
                'slug' => 'terapi',
                'google_form_url' => 'https://docs.google.com/forms/d/e/1FAIpQLSfw7f1x...',
            ],
            [
                'title' => 'PAUD EDUfa Kids',
                'slug' => 'paud-edufa-kids',
                'google_form_url' => 'https://docs.google.com/forms/d/e/1FAIpQLSfw7f1x...',
            ],
            [
                'title' => 'Pendampingan ABK di Sekolah',
                'slug' => 'pendampingan-abk',
                'google_form_url' => 'https://docs.google.com/forms/d/e/1FAIpQLSfw7f1x...',
            ],
            [
                'title' => 'Balai Latihan Kerja',
                'slug' => 'balai-latihan-kerja',
                'google_form_url' => 'https://docs.google.com/forms/d/e/1FAIpQLSfw7f1x...',
            ],
        ];

        foreach ($services as $service) {
            \App\Models\Service::updateOrCreate(['slug' => $service['slug']], $service);
        }
    }
}
