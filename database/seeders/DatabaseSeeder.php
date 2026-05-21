<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => env('ADMIN_EMAIL')],
            [
                'name'              => env('ADMIN_NAME'),
                'password'          => Hash::make(env('ADMIN_PASSWORD')),
                'role'              => 'admin',
                'email_verified_at' => now(),
            ]
        );

        $this->call([
            BranchSeeder::class,
            ServiceSeeder::class,
        ]);
    }
}
