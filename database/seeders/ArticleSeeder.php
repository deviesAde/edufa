<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Article;
use App\Models\User;
use Illuminate\Support\Str;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::where('role', 'admin')->first();
        if (!$admin) return;

        $articles = [
            [
                'title' => 'Mengenal Terapi ABA untuk Anak Autisme',
                'category' => 'Terapi',
                'status' => 'published',
                'content' => 'Terapi ABA (Applied Behavior Analysis) telah lama diakui sebagai salah satu metode paling efektif dalam membantu perkembangan anak dengan Gangguan Spektrum Autisme (GSA). Fokus utamanya adalah mengajarkan keterampilan baru dan mengurangi perilaku yang menghambat belajar melalui sistem penguatan (reinforcement) yang positif. Di EDUfa Centre, kami menerapkan standar profesional untuk memastikan setiap anak mendapatkan intervensi yang tepat sesuai kebutuhan unik mereka.',
            ],
            [
                'title' => 'Tips Parenting: Membangun Komunikasi dengan Anak Spesial',
                'category' => 'Parenting',
                'status' => 'published',
                'content' => 'Berkomunikasi dengan anak berkebutuhan khusus memerlukan pendekatan yang lebih sabar dan kreatif. Orang tua adalah jembatan utama bagi anak untuk memahami dunia luar. Beberapa teknik seperti penggunaan alat bantu visual, menjaga kontak mata, dan memberikan instruksi yang sederhana namun jelas dapat sangat membantu dalam membangun koneksi yang kuat antara orang tua dan anak.',
            ],
            [
                'title' => 'Pentingnya Deteksi Dini Tumbuh Kembang Anak',
                'category' => 'Edukasi',
                'status' => 'published',
                'content' => 'Masa "Golden Age" adalah periode krusial dalam pertumbuhan seorang anak. Deteksi dini terhadap keterlambatan perkembangan (developmental delay) memungkinkan intervensi dilakukan sesegera mungkin. Semakin cepat bantuan diberikan, semakin besar peluang anak untuk mencapai potensi maksimalnya. Jangan ragu untuk berkonsultasi dengan psikolog atau tenaga ahli jika Anda melihat adanya tanda-tanda perkembangan yang tidak sesuai dengan usianya.',
            ],
            [
                'title' => 'Memahami Kebutuhan Nutrisi untuk Anak Berkebutuhan Khusus',
                'category' => 'Kesehatan',
                'status' => 'published',
                'content' => 'Nutrisi yang tepat berperan penting dalam mendukung fungsi otak dan perilaku anak. Beberapa penelitian menunjukkan bahwa diet tertentu dapat membantu mengurangi gejala pada anak dengan autisme atau ADHD. Fokus pada makanan utuh, mengurangi gula tambahan, dan memastikan asupan vitamin serta mineral yang cukup adalah langkah awal yang baik untuk mendukung terapi yang sedang dijalani.',
            ],
            [
                'title' => 'Manfaat Terapi Okupasi dalam Kemandirian Anak',
                'category' => 'Terapi',
                'status' => 'published',
                'content' => 'Terapi okupasi membantu anak mengembangkan keterampilan yang diperlukan untuk aktivitas sehari-hari (Activities of Daily Living). Mulai dari keterampilan motorik halus seperti memegang pensil atau mengancingkan baju, hingga koordinasi tubuh yang lebih kompleks. Tujuan akhirnya adalah kemandirian anak agar mereka merasa percaya diri dalam menjalani kehidupan sehari-hari baik di rumah maupun di sekolah.',
            ],
        ];

        foreach ($articles as $article) {
            Article::create([
                'title' => $article['title'],
                'slug' => Str::slug($article['title']) . '-' . Str::random(5),
                'content' => $article['content'],
                'category' => $article['category'],
                'status' => $article['status'],
                'user_id' => $admin->id,
            ]);
        }
    }
}
