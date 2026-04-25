<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TeamMember;

class TeamMemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Terapis Seeders
        for ($i = 1; $i <= 10; $i++) {
            TeamMember::create([
                'name' => "Terapis Profesional {$i}",
                'type' => 'terapis',
                'role' => 'Terapis Psikologi & Pendidikan',
                'description' => 'Membantu pendampingan dan perkembangan potensi anak didik secara profesional dan terukur.',
            ]);
        }

        // Staf Seeders
        for ($i = 1; $i <= 5; $i++) {
            TeamMember::create([
                'name' => "Staf Manajemen {$i}",
                'type' => 'staf',
                'role' => 'Tim Administrasi & Dukungan',
                'description' => 'Menjaga kelancaran operasional pusat dan mendukung seluruh layanan di EDUfa Centre.',
            ]);
        }
    }
}
