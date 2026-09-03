-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 03 Sep 2026 pada 22.32
-- Versi server: 11.4.12-MariaDB-cll-lve
-- Versi PHP: 8.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Basis data: `edufacoi_website_2025`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `activities`
--

CREATE TABLE `activities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `type` enum('terapi','kelas') NOT NULL,
  `media_type` enum('photo','video') NOT NULL,
  `media_path` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `articles`
--

CREATE TABLE `articles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `thumbnail_path` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `status` enum('published','draft') NOT NULL DEFAULT 'draft',
  `author_name` varchar(255) DEFAULT NULL,
  `author_role` varchar(255) DEFAULT NULL,
  `author_bio` text DEFAULT NULL,
  `show_expert_voice` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `articles`
--

INSERT INTO `articles` (`id`, `title`, `slug`, `content`, `thumbnail_path`, `category`, `user_id`, `status`, `author_name`, `author_role`, `author_bio`, `show_expert_voice`, `created_at`, `updated_at`) VALUES
(5, 'Cara Menangani Anak dengan Gangguan Perkembangan Saraf: Terapi, Penelitian, dan Harapan Perkembangan', 'cara-menangani-anak-dengan-gangguan-perkembangan-saraf-terapi-penelitian-dan-harapan-perkembangan-9jGQR', '<p>Setiap anak berhak tumbuh dan berkembang dengan bahagia, meskipun ada yang menghadapi tantangan berbeda. Salah satunya adalah anak dengan gangguan perkembangan saraf atau Neurodevelopmental Disorder (NDD). Kondisi ini sering membuat orang tua bingung harus mulai dari mana. Kabar baiknya, dengan penanganan yang tepat, anak tetap bisa berkembang secara optimal.<br><br>1. Apa Itu Gangguan Perkembangan Saraf pada Anak?<br><br>Gangguan perkembangan saraf adalah kondisi yang memengaruhi cara otak anak bekerja dan berkembang. Anak dengan NDD mungkin mengalami kesulitan dalam berkomunikasi, berinteraksi sosial, mengatur perilaku, atau belajar hal baru. Kondisi ini biasanya muncul sejak dini dan berbeda pada setiap anak.<br><br>Beberapa contoh gangguan yang termasuk dalam kategori ini antara lain:<br>1. Autism Spectrum Disorder (ASD) – anak mengalami tantangan dalam komunikasi sosial dan memiliki minat atau perilaku berulang.<br>2. Attention-Deficit/Hyperactivity Disorder (ADHD) – anak sulit fokus, mudah terdistraksi, atau sangat aktif.<br>3. Specific Learning Disorder (Disleksia, Diskalkulia, Disgrafia) &nbsp;– anak mengalami kesulitan belajar membaca, menulis, atau berhitung.<br>4. Intellectual Disability &nbsp;– anak memiliki keterlambatan kemampuan intelektual.<br>5. Tic Disorder / Tourette Syndrome &nbsp;– anak melakukan gerakan atau suara berulang yang tidak disadari.<br><br>Menurut para ahli, gangguan ini disebabkan oleh kombinasi antara faktor genetik dan lingkungan yang memengaruhi perkembangan otak sejak dini.<br><br>2. Cara Menangani Anak dengan Gangguan Perkembangan Saraf<br><br>Menangani anak dengan gangguan perkembangan saraf bukan tentang “menyembuhkan”, tetapi tentang membantu mereka beradaptasi, belajar, dan menemukan cara terbaik untuk berkembang. Terapi Perilaku (Behavioral Therapy)<br>Terapi ini membantu anak memahami perilaku positif, belajar mengikuti instruksi, dan mengurangi perilaku yang menghambat. Salah satu metode yang banyak digunakan adalah Applied Behavior Analysis (ABA).<br><br>pelatihan atau konseling agar lebih percaya diri dalam mendampingi anak di rumah.<br><br>3. Apa Kata Penelitian tentang Gangguan Perkembangan Saraf?<br><br>Penelitian menunjukkan bahwa anak dengan NDD memiliki potensi luar biasa untuk berkembang. Menurut Courchesne et al. (2020), otak anak dengan gangguan perkembangan saraf memiliki kemampuan beradaptasi yang disebut neuroplastisitas &nbsp;kemampuan otak untuk membentuk jalur baru dan belajar dari pengalaman.<br><br>Beberapa studi juga menunjukkan hasil positif dari intervensi dini seperti Early Start Denver Model (ESDM) &nbsp;yang meningkatkan kemampuan sosial dan komunikasi anak dengan autisme.<br><br>&nbsp;Artinya, semakin cepat anak mendapatkan intervensi yang tepat, semakin besar peluang mereka untuk berkembang.<br><br>Referensi Ilmiah:<br>1. Courchesne, E., et al. (2020). Neurodevelopmental disorders: From Genetics to Functional Pathways. Trends in Neurosciences.<br>2. Arnett, A. B., &amp; Pennington, B. F. (2024). Unpacking the overlap between Autism and ADHD in adults. Comprehensive Psychiatry.<br>3. Alvares, G. A., et al. (2023). Systematic Review and Meta-Analysis: Prevalence of Neurodevelopmental Disorders. European Journal of Paediatrics.<br>4. Bölte, S., et al. (2023). Neurodevelopmental disorders: Research and interventions beyond diagnosis. &nbsp;Journal of Neural Transmission.<br><br><br>4. Bisakah Anak dengan Gangguan Perkembangan Saraf Berkembang Seperti Anak Tipikal?<br><br>Tentu bisa &nbsp;dengan cara dan waktu yang berbeda.<br><br>Anak dengan NDD memiliki keunikan dalam cara berpikir dan belajar. Banyak dari mereka yang unggul dalam bidang seni, musik, logika visual, atau teknologi. Dengan dukungan terapi, lingkungan yang menerima, serta bimbingan yang sabar, anak dapat berkembang dengan bahagia dan percaya diri.<br><br>&nbsp;Setiap anak memiliki potensi, &nbsp;tugas Orang tua dan Terapis &nbsp;adalah menemukan cara terbaik untuk menumbuhkannya.<br><br><br>5. Kesimpulan<br>Menangani anak dengan gangguan perkembangan saraf adalah perjuangan panjang. Dengan terapi yang tepat, pendidikan yang inklusif, dan dukungan dari keluarga dan sekitar. anak-anak ini bisa berkembang menjadi pribadi yang mandiri.<br><br>Mari kita ubah cara pandang: bukan “mereka berbeda”, tetapi “mereka unik dan berharga”.<br><br>Sumber Tulisan<br><br>- Courchesne, E., et al. (2020). Trends in Neurosciences.<br>- Arnett, A. B., &amp; Pennington, B. F. (2024). Comprehensive Psychiatry.<br>- Alvares, G. A., et al. (2023). Eur J Paediatr.<br>- Bölte, S., et al. (2023). J Neural Transm.<br>- Yale Child Study Center (2024). Autism and Neurodevelopment Research. &nbsp;Yale University.</p><p></p>', 'articles/c4gZpvKDzUJobAHJIKLegsYYvT6GnVvXsk2PRTn6.png', 'Terapi', 1, 'published', 'Dr. Ernie C. Siregar, S.Psi., M.Pd., Psi.', 'Psikolog Klinis', 'Berdedikasi dalam mendampingi tumbuh kembang anak dan memberikan solusi psikologis terbaik bagi keluarga Indonesia selama lebih dari satu dekade.', 1, '2026-08-02 21:42:43', '2026-08-02 21:42:43'),
(6, 'EDUfa Laksanakan Asesmen Kesiapan Belajar bagi Siswa  SD Ashfiya untuk Membantu Memahami Potensi Anak', 'bantu-pahami-potensi-anak-kolaborasi-edufa-dan-sd-ashfiya-dalam-pelaksanaan-psikotes-JUb8a', '<p>Biro Psikologi EDUfa Counseling telah melaksanakan kegiatan psikotes bagi siswa-siswi SD Ashfiya pada tanggal 18–19 Juli 2026. Kegiatan ini merupakan bagian dari layanan asesmen psikologis yang bertujuan membantu pihak sekolah dan orang tua memperoleh gambaran <strong><em>kesiapan anak memasuki dunia sekolah secara kognitif, motorik serta sosial emosi.</em></strong></p><p>Pelaksanaan psikotes berlangsung dengan tertib dan didampingi oleh tim profesional dari Biro Psikologi EDUfa Counseling. Para siswa mengikuti setiap tahapan asesmen sesuai dengan arahan yang diberikan oleh tim pelaksana.</p><p>Dalam kegiatan ini, asesmen yang diberikan berfokus pada <strong>Kesiapan Belajar Anak</strong>. Tes kesiapan belajar merupakan pemeriksaan yang bertujuan untuk melihat sejauh mana kesiapan anak dalam mengikuti proses pembelajaran di Sekolah, baik dari aspek kognitif, motorik, maupun sosial-emosional.</p><p>&nbsp;</p><p>Melalui alat ukur yang digunakan, asesmen dapat memberikan gambaran mengenai beberapa aspek yang menunjang kesiapan belajar anak, antara lain:</p><ul><li><p>Kemampuan mengamati dan membedakan</p></li><li><p>Kemampuan motorik halus</p></li><li><p>Pemahaman mengenai besar, jumlah, dan perbandingan</p></li><li><p>Ketajaman pengamatan</p></li><li><p>Kemampuan berpikir dan mengamati secara kritis</p></li><li><p>Konsentrasi dan daya ingat</p></li><li><p>Pemahaman mengenai objek</p></li><li><p>Kemampuan menilai situasi</p></li><li><p>Kemampuan memahami cerita</p></li><li><p>Kesadaran terhadap bagian-bagian tubuh sendiri</p></li></ul><p>Kesiapan belajar merupakan salah satu faktor penting yang dapat mendukung anak dalam mengikuti proses pendidikan secara optimal. Anak yang memiliki kemampuan dan keterampilan yang sesuai dengan tuntutan pembelajaran akan memiliki kesempatan yang lebih besar untuk memperoleh manfaat dari pengalaman belajar di sekolah.</p><p>Oleh karena itu, diperlukan penilaian yang menyeluruh untuk memperoleh gambaran mengenai kesiapan belajar anak. Hasil asesmen juga dapat membantu mengidentifikasi aspek yang sudah berkembang dengan baik maupun aspek yang masih perlu mendapatkan stimulasi dan pendampingan.</p><p>Selain melihat kesiapan belajar, asesmen psikologis dapat memberikan gambaran mengenai potensi dan kemampuan anak. Informasi tersebut dapat menjadi dasar bagi orang tua dan pihak sekolah dalam memahami kebutuhan anak, menentukan pendekatan belajar yang sesuai, serta menyusun strategi yang dapat membantu mengoptimalkan potensi setiap anak.</p><p>Melalui layanan Asesmen dan Konsultasi, Biro Psikologi EDUfa Counseling berkomitmen untuk membantu sekolah dan orang tua memperoleh pemahaman yang lebih menyeluruh mengenai karakteristik dan kebutuhan anak, sehingga setiap anak dapat mendapatkan dukungan yang sesuai untuk berkembang secara optimal.</p>', 'articles/jEbrgP7D1Xgco3dkx1bGaiD9SOQs785rghmjXvfw.png', 'Asesmen', 1, 'published', 'Dr. Ernie C. Siregar', 'Psikolog Klinis', 'Berdedikasi dalam mendampingi tumbuh kembang anak dan memberikan solusi psikologis terbaik bagi keluarga Indonesia selama lebih dari satu dekade.', 1, '2026-08-03 18:36:31', '2026-08-11 02:06:23'),
(7, 'Pelatihan Penanganan Anak Berkebutuhan Khusus dengan Metode Applied Behavior Analysis (ABA) di Surabaya Berlangsung Sukses', 'pelatihan-penanganan-anak-berkebutuhan-khusus-dengan-metode-applied-behavior-analysis-aba-di-surabaya-berlangsung-sukses-cPC28', '<p>EDUfa kembali sukses menyelenggarakan <strong>Pelatihan Penanganan Anak Berkebutuhan Khusus dengan Metode Applied Behavior Analysis (ABA)</strong> yang berlangsung pada <strong>8–19 Juni 2026</strong> di Surabaya.</p><p>Pelatihan ini dipandu oleh <strong>Dr. Ernie C. Siregar, S.Psi., M.Pd., Psikolog</strong> bersama tim profesional EDUfa. Selama pelatihan, peserta mempelajari konsep dasar ABA, teknik observasi perilaku, penyusunan program intervensi, hingga praktik penerapan metode ABA dalam penanganan anak berkebutuhan khusus.</p><p>Kegiatan ini diikuti oleh peserta dari berbagai daerah, seperti <strong>Surabaya, Sintang, dan Pontianak</strong>, dengan latar belakang profesi yang beragam, di antaranya terapis perilaku, psikolog, guru pendamping anak berkebutuhan khusus, mahasiswa, dan orang tua.</p><p>Melalui pelatihan ini, EDUfa berharap semakin banyak tenaga profesional dan keluarga yang memiliki kompetensi dalam memberikan pendampingan yang tepat bagi anak berkebutuhan khusus.</p><p><strong>Pelatihan Berikutnya Dibuka!</strong></p><p>Bagi Anda yang ingin meningkatkan pengetahuan dan keterampilan dalam penanganan anak berkebutuhan khusus menggunakan metode <strong>Applied Behavior Analysis (ABA)</strong>, EDUfa kembali membuka pelatihan pada:</p><p><strong>📅 7–18 September 2026</strong></p><p><strong>Terbuka untuk:</strong> Terapis, Psikolog, Guru, Guru Pendamping ABK, Mahasiswa, Orang Tua, serta Praktisi Pendidikan dan Kesehatan.</p><p><strong>✨ Segera daftarkan diri Anda! Kuota peserta terbatas.</strong></p>', 'articles/cd2lCozFrC1njYRJEgjeJsvb0avcJFbAa9TAc4X9.jpg', 'Pelatihan', 1, 'published', 'Dr. Ernie C. Siregar', 'Psikolog Klinis', 'Berdedikasi dalam mendampingi tumbuh kembang anak dan memberikan solusi psikologis terbaik bagi keluarga Indonesia selama lebih dari satu dekade.', 1, '2026-08-07 02:57:53', '2026-08-07 02:57:53'),
(8, 'Mengenal Layanan Shadow Teacher: Fungsi, Peran, dan Manfaatnya dalam Pendidikan Inklusi', 'mengenal-layanan-shadow-teacher-fungsi-peran-dan-manfaatnya-dalam-pendidikan-inklusi-jXjth', '<p>Layanan <em>shadow teacher</em> (guru pendamping khusus) merupakan bentuk dukungan edukatif yang dirancang untuk mendampingi Anak Berkebutuhan Khusus (ABK) atau siswa dengan kebutuhan belajar spesifik saat mengikuti proses pembelajaran di sekolah reguler/inklusi.</p><p><em>Shadow teacher</em> bertindak sebagai jembatan antara siswa, guru kelas, dan orang tua agar anak dapat mengikuti kegiatan akademis serta sosial secara optimal. 1</p><p>&nbsp;</p><p><strong>1. Siapa yang Membutuhkan Shadow Teacher?</strong></p><p>Siswa yang biasanya memanfaatkan layanan ini meliputi anak dengan kondisi:</p><ul><li><p><strong>Autism Spectrum Disorder (ASD):</strong> Membutuhkan bantuan komunikasi dan regulasi sensorik/sosial.</p></li><li><p><strong>ADHD/ADD:</strong> Mengalami kesulitan fokus dan menjaga stabilitas perilaku selama jam pelajaran.</p></li><li><p><strong>Slow Learner / Keterlambatan Kognitif:</strong> Memerlukan penyederhanaan instruksi atau kurikulum.</p></li><li><p><strong>Hambatan Komunikasi atau Emosional:</strong> Mengalami kesulitan beradaptasi dengan rutinitas sekolah, kecemasan tinggi, atau tantrum.</p></li></ul><p><strong>2. Tugas dan Peran Utama Shadow Teacher</strong></p><ul><li><p><strong>Modifikasi &amp; Adaptasi Pembelajaran:</strong> Menyederhanakan instruksi atau materi dari guru kelas agar sesuai dengan tingkat pemahaman anak tanpa mengubah substansi pelajaran.</p></li><li><p><strong>Menjaga Fokus dan Stabilitas:</strong> Bekerja menjaga konsentrasi anak agar tetap tenang dan tidak mengganggu alur kelas.</p></li><li><p><strong>Manajemen Perilaku:</strong> Membantu anak mengendalikan emosi (mencegah <em>meltdown</em> atau <em>tantrum</em>) dan membimbing regulasi emosi.</p></li><li><p><strong>Fasilitator Sosialisasi:</strong> Membantu anak berinteraksi, bermain, dan membangun hubungan sehat dengan teman sebayanya.</p></li><li><p><strong>Jembatan Komunikasi:</strong> Memberikan laporan perkembangan harian/berkala kepada orang tua dan melakukan koordinasi intensif dengan guru kelas maupun terapis.</p></li></ul><p><strong>3. Konsep \"Fade Out\" (Mendorong Kemandirian)</strong></p><p>Tujuan akhir dari layanan <em>shadow teacher</em> <strong>bukanlah</strong> membuat anak terus bergantung pada pendamping. Pendampingan dilakukan dengan prinsip <em>fading</em>:</p><ol type=\"1\"><li><p><strong>Tahap Awal:</strong> Pendampingan penuh (1-on-1 di setiap aktivitas).</p></li><li><p><strong>Tahap Transisi:</strong> Mengurangi intervensi secara bertahap saat anak mulai paham rutinitas dan mandiri.</p></li><li><p><strong>Tahap Lepas:</strong> Anak mampu mengikuti kelas secara mandiri bersama guru reguler.</p></li></ol><p><strong>4. Cara Mendapatkan dan Kualifikasi Layanan</strong></p><p>Layanan ini biasanya disediahkan oleh pusat terapi (<em>therapy centre</em>), lembaga psikologi anak, atau disediakan langsung oleh sekolah inklusi tertentu.</p><p>Di lembaga kami Edufa, shadow teacher biasa di sebut juga PAS ( Pendamping ABK di Sekolah ) kualifikasi Pendidikan PAS edufa sendiri minimal D3 dan S1 dari semua jurusan akan tetapi kami utamakan lulusan psikologi dan Pendidikan khusus.</p><p>&nbsp;</p><p>Nah , untuk Orangtua yang membutuhkan layanan Shadow Teacher yuk boleh hubungi Edufa ya 😊</p><p>&nbsp;</p><p>&nbsp;</p><p></p><p>&nbsp;</p><p>&nbsp;</p>', 'articles/XC9Znoo36piPCMbgyZolLM0GUQfeAhjtTwjNpQj1.png', 'Pendamping ABK di Sekolah', 1, 'published', 'Dr. Ernie C. Siregar', 'Psikolog Klinis', 'Berdedikasi dalam mendampingi tumbuh kembang anak dan memberikan solusi psikologis terbaik bagi keluarga Indonesia selama lebih dari satu dekade.', 1, '2026-08-12 00:51:28', '2026-08-12 01:06:25'),
(9, 'EDUfa Gelar Pelatihan Pendamping Anak di Sekolah', 'edufa-gelar-pelatihan-pendamping-anak-di-sekolah-E7sR5', '<p>EDUfa kembali menunjukkan komitmennya dalam meningkatkan kompetensi para pendamping anak di lingkungan sekolah melalui <strong>Pelatihan Pendamping Anak di Sekolah (PAS)</strong> yang dilaksanakan pada <strong>6–14 Agustus 2026</strong>.</p><p>Pelatihan ini dapat diikuti secara <strong>online maupun offline</strong>, dengan peserta yang berasal dari <strong>pendamping sekolah di Kota Bandung, Bogor, dan Cirebon</strong>.</p><p>Dalam pelatihan ini, peserta mendapatkan berbagai materi yang mendukung keterampilan pendampingan anak di sekolah, di antaranya:</p><ul><li><p><strong>Penanganan perilaku menggunakan metode Applied Behavior Analysis (ABA)</strong></p></li><li><p><strong>Pembuatan Program Pembelajaran Individual (PPI)</strong> sesuai kebutuhan dan karakteristik anak</p></li><li><p><strong>Teknik melakukan pendampingan anak di lingkungan sekolah</strong> agar anak dapat mengikuti proses pembelajaran dan beraktivitas secara lebih optimal</p></li></ul><p>Melalui pelatihan PAS, EDUfa berharap para pendamping sekolah dapat memiliki pemahaman dan keterampilan yang lebih baik dalam memberikan pendampingan yang tepat, terarah, dan sesuai dengan kebutuhan setiap anak.</p><p>Terima kasih kepada seluruh peserta yang telah berpartisipasi dalam <strong>Pelatihan Pendamping Anak di Sekolah (PAS)</strong>.</p><p><strong>Nantikan Pelatihan PAS EDUfa berikutnya!</strong></p>', 'articles/D6AanIgYfiSInzNaAQikEqvlc7YMLSNBF1mtm5Rb.png', 'Pelatihan', 1, 'published', 'Dr. Ernie C. Siregar', 'Psikolog Klinis', 'Berdedikasi dalam mendampingi tumbuh kembang anak dan memberikan solusi psikologis terbaik bagi keluarga Indonesia selama lebih dari satu dekade.', 1, '2026-08-20 02:30:14', '2026-08-20 02:30:35'),
(10, 'Mempersiapkan Remaja Berkebutuhan Khusus Menjadi Lebih Mandiri dan Berkarya', 'mempersiapkan-remaja-berkebutuhan-khusus-menjadi-lebih-mandiri-dan-berkarya-S8BXD', '<p>Setiap anak memiliki potensi untuk tumbuh, berkembang, dan memberikan kontribusi bagi lingkungan di sekitarnya. Namun, ketika anak berkebutuhan khusus (IBK) mulai memasuki usia remaja hingga dewasa, orang tua sering kali dihadapkan pada berbagai pertanyaan: “Setelah lulus sekolah, anak saya akan melakukan apa?”, “Apakah anak saya bisa mandiri?”, atau “Apakah anak saya bisa memiliki pekerjaan dan berfungsi di lingkungan sosial?”</p><p>Kekhawatiran tersebut menjadi salah satu alasan hadirnya <em>Balai Latihan Kerja dan Kehidupan (BLKK)</em> di EDUfa.</p><p>## Apa Itu BLKK?</p><p><em>Balai Latihan Kerja dan Kehidupan (BLKK)</em> merupakan layanan yang dirancang untuk membantu remaja berkebutuhan khusus mengembangkan <em>keterampilan kerja, keterampilan hidup, serta kemampuan sosial</em> agar mereka dapat menjadi pribadi yang lebih mandiri dan memiliki kesempatan untuk berkontribusi di lingkungan masyarakat.</p><p>Di BLKK, anak tidak hanya belajar mengenai pekerjaan, tetapi juga berbagai keterampilan yang dibutuhkan dalam kehidupan sehari-hari. Anak diberikan kesempatan untuk belajar melakukan aktivitas secara bertahap, mulai dari mengenal tugas, mengikuti instruksi, menyelesaikan pekerjaan, berinteraksi dengan orang lain, hingga belajar bertanggung jawab terhadap tugas yang diberikan.</p><p>Program BLKK disesuaikan dengan kemampuan, kebutuhan, dan potensi masing-masing anak. Tujuannya bukan sekadar membuat anak mampu melakukan suatu pekerjaan, tetapi juga membantu mereka memiliki <em>kesiapan untuk menjalani kehidupan yang lebih mandiri</em>.</p><p>## Mengapa BLKK Hadir?</p><p>Memasuki masa remaja dan dewasa merupakan fase penting dalam kehidupan setiap individu. Bagi orang tua anak berkebutuhan khusus, fase ini terkadang menghadirkan keresahan yang lebih besar.</p><p>Ketika pendidikan formal mulai berakhir, orang tua mungkin mulai memikirkan masa depan anak. <em>Di mana anak akan berkegiatan? Apa yang bisa anak lakukan? Apakah anak dapat membantu dirinya sendiri? Apakah anak dapat bekerja? Bagaimana anak berinteraksi di masyarakat?</em></p><p>Pertanyaan-pertanyaan tersebut merupakan keresahan yang nyata.</p><p>Selama ini, perhatian terhadap anak berkebutuhan khusus sering kali lebih banyak berfokus pada masa kanak-kanak dan pendidikan. Padahal, mereka juga membutuhkan persiapan untuk menghadapi masa remaja dan dewasa.</p><p>BLKK hadir untuk menjawab kebutuhan tersebut.</p><p>Melalui latihan yang terstruktur dan berkelanjutan, anak diberikan ruang untuk mengenali kemampuan dirinya, mengembangkan keterampilan, serta mendapatkan pengalaman yang dapat menjadi bekal dalam kehidupan sehari-hari maupun dunia kerja.</p><p>Karena bagi orang tua, mempersiapkan masa depan anak bukan hanya tentang apa yang bisa anak lakukan hari ini, tetapi juga tentang <em>bagaimana anak dapat menjalani kehidupannya dengan lebih mandiri di masa depan</em>.</p><p>## Kesiapan Layanan dengan Wawasan yang Terus Berkembang</p><p>Memberikan layanan kepada remaja berkebutuhan khusus tentu membutuhkan pengetahuan, keterampilan, dan pemahaman yang terus berkembang.</p><p>Oleh karena itu, <em>tim BLKK EDUfa turut menghadiri konferensi internasional</em> sebagai salah satu bentuk komitmen untuk terus belajar dan memperluas wawasan mengenai perkembangan layanan bagi individu berkebutuhan khusus.</p><p>Kehadiran tim dalam konferensi internasional menjadi bagian dari upaya untuk memastikan bahwa layanan yang diberikan tidak berhenti pada pengalaman yang sudah ada, tetapi terus berkembang mengikuti <em>ilmu pengetahuan, praktik berbasis bukti, serta kebutuhan individu berkebutuhan khusus</em>.</p><p>Dengan terus belajar, berdiskusi, dan mendapatkan wawasan dari berbagai perspektif, tim BLKK berupaya mempersiapkan layanan yang semakin baik bagi anak dan keluarga.</p><p>## Memberikan Kesempatan untuk Berkarya</p><p>Setiap anak memiliki kemampuan dan potensi yang berbeda. Ada anak yang mungkin membutuhkan waktu lebih lama untuk menguasai suatu keterampilan, ada pula yang memiliki kemampuan tertentu yang dapat dikembangkan menjadi sebuah karya.</p><p>Yang terpenting adalah <em>memberikan kesempatan</em>.</p><p>Kesempatan untuk belajar.</p><p>Kesempatan untuk mencoba.</p><p>Kesempatan untuk melakukan kesalahan dan belajar kembali.</p><p>Kesempatan untuk menjadi mandiri.</p><p>Dan yang tidak kalah penting, <em>kesempatan untuk berkarya dan berkontribusi</em>.</p><p>Melalui BLKK, EDUfa ingin membantu membuka lebih banyak kesempatan tersebut bagi remaja berkebutuhan khusus.</p><p>Karena mereka bukan hanya perlu dipersiapkan untuk menerima bantuan, tetapi juga perlu diberikan ruang untuk menunjukkan <em>apa yang mampu mereka lakukan</em>.</p><p>Mari bersama-sama melihat IBK bukan hanya dari keterbatasannya, tetapi juga dari potensi yang dapat dikembangkan.</p><p><em>Berikan kesempatan kepada mereka untuk belajar, berkarya, dan menjadi bagian dari masyarakat. Karena setiap anak memiliki cerita, potensi, dan kesempatan untuk memberikan arti.</em> 💙</p>', 'articles/NujoIxoX5aZklzzICv7a9QQLJnYqqYvtAtyb6hJ8.jpg', 'Balai Latihan Kerja & Kehidupan', 1, 'published', 'Dr. Ernie C. Siregar', 'Psikolog Klinis', 'Berdedikasi dalam mendampingi tumbuh kembang anak dan memberikan solusi psikologis terbaik bagi keluarga Indonesia selama lebih dari satu dekade.', 1, '2026-08-27 01:17:29', '2026-08-27 01:19:12'),
(11, 'Kenali Potensi, Pahami Kebutuhan: Layanan Asesmen dan Konsultasi di EDUfa', 'kenali-potensi-pahami-kebutuhan-layanan-asesmen-dan-konsultasi-di-edufa-3eY1m', '<p>Setiap anak dan individu memiliki karakter, potensi, serta kebutuhan yang berbeda. Karena itu, memahami seseorang tidak cukup hanya dengan melihat nilai akademik atau perilaku yang tampak sehari-hari. Dibutuhkan pemahaman yang lebih menyeluruh melalui&nbsp;<strong>asesmen psikologi dan konsultasi profesional</strong>.</p><p>Menjawab kebutuhan tersebut,&nbsp;<strong>EDUfa</strong>&nbsp;menghadirkan layanan asesmen dan konsultasi yang membantu orang tua, peserta didik, maupun individu mendapatkan gambaran yang lebih jelas mengenai potensi dan kebutuhannya.</p><p><strong>Bukan Sekadar Tes, tetapi Memahami Potensi</strong></p><p>Asesmen psikologi di EDUfa dilakukan untuk membantu memahami berbagai aspek individu secara lebih komprehensif. Layanan ini mencakup&nbsp;<strong>tes intelegensi, tes kepribadian, tes kesiapan belajar, tes minat dan bakat, hingga asesmen perkembangan</strong>.</p><p>Informasi yang diperoleh dari hasil asesmen dapat menjadi dasar untuk memahami kekuatan, area yang masih perlu dikembangkan, serta menentukan langkah pendampingan yang lebih sesuai.</p><p>Pendekatan seperti ini semakin relevan di tengah kebutuhan pendidikan saat ini yang bergerak menuju&nbsp;<strong>pembelajaran yang lebih personal dan berpusat pada kebutuhan individu</strong>.</p><p><strong>Konsultasi untuk Menentukan Langkah yang Tepat</strong></p><p>Setelah mendapatkan gambaran dari proses asesmen, konsultasi menjadi langkah penting berikutnya. Orang tua maupun individu dapat berdiskusi dengan tenaga profesional mengenai hasil asesmen dan kemungkinan strategi pendampingan yang sesuai.</p><p>Dengan demikian, asesmen dan konsultasi tidak berdiri sendiri. Keduanya dapat menjadi bagian dari proses yang berkesinambungan:&nbsp;<strong>mengenali, memahami, kemudian mengembangkan potensi</strong>.</p><p>Melalui layanan asesmen dan konsultasi, EDUfa hadir sebagai mitra bagi orang tua, peserta didik, pendidik, dan individu untuk mengenali potensi serta menemukan strategi pengembangan yang lebih tepat.</p>', 'articles/kud0S0ke6TrcSYrRaxzupqXrv8zsQusQtyij14Jf.jpg', 'Asesmen', 1, 'published', 'Dr. Ernie C. Siregar', 'Psikolog Klinis', 'Berdedikasi dalam mendampingi tumbuh kembang anak dan memberikan solusi psikologis terbaik bagi keluarga Indonesia selama lebih dari satu dekade.', 1, '2026-09-01 01:05:50', '2026-09-01 01:05:50');

-- --------------------------------------------------------

--
-- Struktur dari tabel `branches`
--

CREATE TABLE `branches` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `city` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `address` text NOT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `photo_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `branches`
--

INSERT INTO `branches` (`id`, `city`, `type`, `address`, `latitude`, `longitude`, `photo_path`, `created_at`, `updated_at`) VALUES
(1, 'KANTOR PUSAT BANDUNG', 'Kantor Utama', 'Jl. Windu No.6, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40262', -6.92482300, 107.62561900, 'branches/bBRG6Wvq1yvBWXmU2tohElnHnMA5RE648gkcnw1f.jpg', '2026-06-11 10:03:34', '2026-07-28 00:39:25'),
(2, 'EXTENSION BANDUNG', 'Fasilitas Perluasan', 'Jl. R.A.A. Marta Negara No.34,  Turangga, Kec. lengkong, Kota Bandung, Jawa Barat 40264', -6.93175000, 107.62939300, NULL, '2026-06-11 10:03:34', '2026-06-11 10:03:34'),
(3, 'MEDAN', NULL, 'Jl. Karya Bakti no 5 Pangkalan Masyhur MedanJohor, Medan Sumatra Utara', 3.58520000, 98.67220000, 'branches/Ciec2xOYgdHUeeJkrMM8NwHv5AGktmB4zUEGAatx.jpg', '2026-06-11 10:03:34', '2026-07-28 00:38:24'),
(4, 'CIMAHI', 'Terapi ABK', 'Jl. Pd. Mas Raya No.2, Baros, Kec. Cimahi Tengah, Kota Cimahi', -6.87230000, 107.54360000, 'branches/9DYNoHCA3CGWhiZ6CDUMohpXK88GTb4Y3HLxGywy.jpg', '2026-06-11 10:03:34', '2026-07-27 23:38:34'),
(5, 'MAKASAR', 'Terapi ABK', 'Ruko Alfa jln Pengayoman No. 36. Kota Makassar', -5.14760000, 119.43270000, 'branches/vTtHXuZXvYmuXYhLA2vVcJCpzaykJS5oS51K8Dzj.jpg', '2026-06-11 10:03:34', '2026-07-28 19:00:54'),
(6, 'DENPASAR', 'Terapi ABK', 'Jl. Nangka Selatan No 158 Blok 88 Kec. Denpasar Utara, Kel Danging Puri Kaja', -8.65000000, 115.21660000, 'branches/leE7s93NOL1LSGhEy92SLmiAKhDHZnmRpaq0efpc.jpg', '2026-06-11 10:03:34', '2026-07-27 23:22:36'),
(7, 'PALEMBANG', 'Terapi ABK', 'Jl. Dewana no.4 Alang Alang Lebar Palembang', -2.99090000, 104.75650000, 'branches/1ZZ29PC9nWOlWOb65O05Edsti0lvtxHyOEDvt2i1.jpg', '2026-06-11 10:03:34', '2026-07-27 23:43:07'),
(8, 'PADANG', 'Terapi ABK', 'Filano Jaya 1 Blok A1 No.11 Kubu Dalam Parak Karakah Padang Timur', -0.94700000, 100.36580000, 'branches/7aUtHkIQM4JEUudcdvQNs4KBlUCiBi35wylzVKf4.jpg', '2026-06-11 10:03:34', '2026-07-28 01:11:26'),
(9, 'PEKANBARU', 'Terapi ABK', 'Jl. Hangjebat No, 3 Kel. Sukamulya, Kec. Sail kota Pekanbaru.', 0.50700000, 101.44770000, 'branches/O4lfPsqidLuUGes8ME6Rqy5PiVtd857luqQ37saW.jpg', '2026-06-11 10:03:34', '2026-07-28 01:15:43'),
(10, 'LAMPUNG', 'Terapi ABK', 'Jl. Way Mesuji No.51, Pahoman, Engal, Kota Bandar Lampung', -5.39710000, 105.26670000, 'branches/LIqnqeSyccCLnlpPFm64Mzl4cf8OMjxuZq4qFVrX.jpg', '2026-06-11 10:03:34', '2026-07-27 21:59:10'),
(11, 'SERANG', 'Terapi ABK', 'Jl. Raya Petir-Serang No. 3, Cipocok Jaya, Kota Serang, Banten', -6.12000000, 106.15020000, 'branches/pCPCXBIR6ipSR0V31skmqJGq7EIgBoj6KUpwji3R.jpg', '2026-06-11 10:03:34', '2026-07-28 00:36:02'),
(12, 'JAKARTA TIMUR', 'Terapi ABK', 'Perumahan Cibubur Indah III Blok G No. 11 Cibubur', -6.20880000, 106.84560000, 'branches/NLL8rRevWEULt5A6Jlk0dFevBKSgbaj40qoxgXhE.jpg', '2026-06-11 10:03:34', '2026-07-27 22:01:21'),
(13, 'CILEGON', 'Terapi ABK', 'Ruko Perumahan Metro Cilegon Blok E-1 no 14 Jombang Kota Cilegon', -6.01730000, 106.02020000, 'branches/ZEObp8x0lXvlyWBs7vK839jHuKPjnXRglpczDPLx.jpg', '2026-06-11 10:03:34', '2026-07-27 23:30:33'),
(14, 'SUBANG', 'Terapi ABK', 'Jl. Brigjen Katamso No.65 (belakang RSUD Subang, Gang Akper), Subang', -6.55830000, 107.76610000, 'branches/KMi8PcNCukZaVnW5UaOIOReyVFQo7i41eAeGo7Jv.jpg', '2026-06-11 10:03:34', '2026-07-27 23:29:30'),
(15, 'GARUT', 'Terapi ABK', 'Komp.Permata Hijau Land E39 Jln.Raya Samarang, Tarogong Garut', -7.22790000, 107.90860000, 'branches/ySPdZI9t9S52Kp8Smlft4VEFJbc6cm0AhpEy9iVO.jpg', '2026-06-11 10:03:34', '2026-07-27 21:21:39'),
(16, 'KETAPANG', 'Terapi ABK', 'Jl. R. Suprapto No.172, Sampit, Kec. Delta Pawan, Ketapang, Kalbar', -1.84650000, 109.97210000, 'branches/d2OAKPv0KHPligNupqa3QAbDbdcGWfMHVgANjQT7.jpg', '2026-06-11 10:03:34', '2026-07-27 21:55:43'),
(17, 'CIREBON', 'Terapi ABK', 'Jl. Kesambi Baru No.14b, Kesambi, Kota Cirebon, Jawa Barat', -6.73200000, 108.55230000, 'branches/k6hQ6pv54LY1e0AbBomj4TkZJ5iIsva9Rur6Lgrw.jpg', '2026-06-11 10:03:34', '2026-07-28 19:25:52'),
(18, 'YOGYAKARTA', 'Terapi ABK', 'Taman Griya Indah I No B-122, Sumberan, Ngestiharjo, Kasihan, Bantul', -7.79550000, 110.36940000, 'branches/0iMM6wsYoGoW3lpnqmkY6Vus9EnycbYYlSc8CQFh.jpg', '2026-06-11 10:03:34', '2026-07-27 23:37:17'),
(19, 'SEMARANG', 'Terapi ABK', 'Jln. KEDUNGMUNDU NO. 34A LAMPER TENGAH, SEMARANG', -6.96660000, 110.41660000, 'branches/4QuRr7AyEloRyDmkRDROQRPBfiYKsBuKzRm2EhyE.jpg', '2026-06-11 10:03:34', '2026-07-27 23:26:01'),
(20, 'MOJOKERTO', 'Terapi ABK', 'JL. BRAWIJAYA No.350 MOJOKERTO', -7.47260000, 112.43360000, 'branches/i66D9Em5mylnzjMUN3yQf9iLF43XIiuj0fDbnqDO.jpg', '2026-06-11 10:03:34', '2026-07-27 23:23:39'),
(21, 'BENGKULU', 'Terapi ABK', 'JL. Fatmawati No. 039, Rt 10/Rw04, Penurunan, Kec Ratu Samban, Bengkulu', -3.79280000, 102.26070000, 'branches/XkXTfzM8MXjtZ1y9048BqkLOy3XY2qyDjDS3Zz2Q.jpg', '2026-06-11 10:03:34', '2026-07-27 23:21:35'),
(22, 'KUDUS', 'Terapi ABK', 'Jl Gg. 4 Kav., Mlati Norowito, Kec. Kota Kudus, Jawa Tengah', -6.80480000, 110.84050000, 'branches/JVZMOvqwlD8hlvMDERVNFnS5AACf1OP6PQifZvf0.jpg', '2026-06-11 10:03:34', '2026-07-27 23:15:59'),
(23, 'MALANG', 'Terapi ABK', 'Pondok Belimbing Indah blok E1, No.12, Polowijen, Belimbing Malang', -7.97970000, 112.63040000, 'branches/FOvLX2VvUz5kSuRZ1D1kPCkoLl5usuhbrEebBMic.jpg', '2026-06-11 10:03:34', '2026-07-27 23:28:23'),
(24, 'SOLO', 'Terapi ABK', 'Jl. Profesor DR. Soeharsono No. 46, Jajar, kec Laweyan, Surakarta', -7.56660000, 110.82660000, 'branches/dwpTciMekYAHJe00XmJQwWCvQpf51yjlqYtxzL12.jpg', '2026-06-11 10:03:34', '2026-07-28 00:34:53'),
(25, 'TASIKMALAYA', 'Terapi ABK', 'Jl. Raflesia No.17, Panglayungan, Kec. Cipedes, Tasikmalaya', -7.31950000, 108.20400000, 'branches/gxlSQIJrEQA166czcbkvdsDn6wOUmreocztaXioT.jpg', '2026-06-11 10:03:34', '2026-07-27 23:12:42'),
(26, 'SURABAYA', 'Terapi ABK', 'Jl. Serayu No.3, RT.002/RW.09, Keputran, Kec. Tegalsari, Surabaya', -7.25040000, 112.76880000, 'branches/0gN3OpGxQ1oMllXcHx1X0Ga7jnjVw5QVc8joiSvB.jpg', '2026-06-11 10:03:34', '2026-07-27 21:57:39'),
(27, 'SIDOARJO', 'Terapi ABK', 'Jl. Kombes Pol. Moh. Duryat No.15, Rw2, Sidokumpul, Sidoarjo', -7.44780000, 112.71830000, 'branches/qSNnCfjdFSrtxtl9fQVNZ6yIAWWRLk4VbblXhATm.jpg', '2026-06-11 10:03:34', '2026-07-27 21:54:57'),
(28, 'CILEUNYI', 'Terapi ABK', 'Komplek Bumi Panyawangan, Jl. Puspa Kencana No.27, Cimekar, Cileunyi', -6.93720000, 107.73350000, 'branches/AJNmnifOR0Jm9bG6s1kSnUEzqnEfPRi1NoaYoDu0.jpg', '2026-06-11 10:03:34', '2026-07-27 23:36:08'),
(29, 'PURWAKARTA', 'Terapi ABK', 'Jl. Pesona Griya Asri Blok Biro No.18, Ciseureuh, Purwakarta', -6.53610000, 107.44360000, 'branches/SWJGIRwjVxNhdZbrxRxLwTAyzqQv2bVmCaymxWgY.jpg', '2026-06-11 10:03:34', '2026-07-28 01:16:27'),
(30, 'BOGOR', 'Terapi ABK', 'Jl. Guntur No.32 RT.03/RW.03, Babakan, Bogor Tengah, Bogor', -6.59710000, 106.79010000, 'branches/pBmGiAXBVjWLezCJFCCD3OjDjBf8cKUA2tEA10Ri.jpg', '2026-06-11 10:03:34', '2026-07-27 23:34:51'),
(31, 'PURWOKERTO', 'Terapi ABK', 'Jl. Jatiwinangun No.41, Jatiwinangun, Purwokerto Lor', -7.42140000, 109.23050000, 'branches/fllq0nQuWAl03UHPAGuQrainhFtXxeJ3WY5gZ3Ah.jpg', '2026-06-11 10:03:34', '2026-07-27 22:00:29'),
(32, 'TABANAN', 'Terapi ABK', 'Jl. Jepun No.11 B, Dauh Peken, Kec. Tabanan, Bali', -8.53720000, 115.11660000, 'branches/2ldt8GJSvkQeFC3DUCm8KOpqlDWPGrdRiTIlu4MW.jpg', '2026-06-11 10:03:34', '2026-07-27 23:16:54'),
(33, 'DEPOK', 'Terapi ABA Depok', 'Ruko Pesona Khayangan, Jl. K.H.M. Yusuf Raya No.I Blok B, Mekar Jaya, Depok', -6.40240000, 106.79420000, 'branches/VSJin3DMxtKSNkOO1Xc3HUOHnJuDSylB4RbXsZZv.jpg', '2026-06-11 10:03:34', '2026-07-28 01:17:20'),
(34, 'PONTIANAK', 'Terapi ABA Pontianak', 'Jl. Padat Karya Ruko 1C 1D, Bansir Darat, Pontianak Tenggara', -0.02270000, 109.33330000, 'branches/qw5m7cXxCNDvm6b0dquukdcD5RGgtZtAATmyNmHg.jpg', '2026-06-11 10:03:34', '2026-07-27 23:20:20'),
(35, 'BATULICIN', 'Terapi ABK', 'Jl. Raya Batulicin No.18, Batulicin, Tanah Bumbu, Kalsel', -3.45440000, 115.98660000, 'branches/iEPMNdGAOtn56kXHyGPfUu0VgVk6jr0QgxLBX5Lu.jpg', '2026-06-11 10:03:34', '2026-07-27 23:27:36'),
(36, 'JEMBER', 'Terapi ABK', 'Jl. Letjen Panjaitan No. 103, Sumbersari, Jember', NULL, NULL, 'branches/iP0cCpjJ5BqzwBAlyblgoKmmaswpQ9AE8PSzOGhp.jpg', '2026-07-27 23:40:42', '2026-07-27 23:40:42'),
(37, 'TANGERANG', 'Terapi ABK', 'Jalan A. Damyati No. 28 A, Tangerang', -6.17761558, 106.63177805, 'branches/W2LSc8eEkm4XZ2aecGzkExVPdN0Kzm7Pa1vi8JBP.jpg', '2026-07-28 19:14:32', '2026-07-28 19:14:32');

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_04_20_133158_create_branches_table', 1),
(5, '2026_04_25_153659_create_team_members_table', 1),
(6, '2026_04_30_045526_create_activities_table', 1),
(7, '2026_04_30_050400_create_articles_table', 1),
(8, '2026_04_30_051304_add_author_details_to_articles_table', 1),
(9, '2026_04_30_051535_add_show_expert_voice_to_articles_table', 1),
(10, '2026_04_30_055559_create_services_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `google_form_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `services`
--

INSERT INTO `services` (`id`, `title`, `slug`, `google_form_url`, `created_at`, `updated_at`) VALUES
(1, 'Asesmen Psikologi', 'asesmen-psikologi', 'https://forms.gle/ehkaLVkVgbUgYwLb8o', '2026-06-11 10:03:34', '2026-07-28 20:22:20'),
(2, 'Pelatihan & Workshop', 'pelatihan', 'https://forms.gle/5pRHdtWoto4aMGDS8', '2026-06-11 10:03:34', '2026-07-08 19:17:33'),
(3, 'Konseling', 'konseling', 'https://docs.google.com/forms/d/e/1FAIpQLSfw7f1x...', '2026-06-11 10:03:34', '2026-06-11 10:03:34'),
(4, 'Terapi', 'terapi', 'https://docs.google.com/forms/d/e/1FAIpQLSfw7f1x...', '2026-06-11 10:03:34', '2026-06-11 10:03:34'),
(5, 'PAUD EDUfa Kids', 'paud-edufa-kids', 'https://docs.google.com/forms/d/e/1FAIpQLSfw7f1x...', '2026-06-11 10:03:34', '2026-06-11 10:03:34'),
(6, 'Pendampingan ABK di Sekolah', 'pendampingan-abk', 'https://docs.google.com/forms/d/e/1FAIpQLSfw7f1x...', '2026-06-11 10:03:34', '2026-06-11 10:03:34'),
(7, 'Balai Latihan Kerja', 'balai-latihan-kerja', 'https://docs.google.com/forms/d/e/1FAIpQLSfw7f1x...', '2026-06-11 10:03:34', '2026-06-11 10:03:34');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('049WKhlUbqCen8ppDkTerby22jAsZojndnbkJ7vd', NULL, '54.37.118.73', 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)', 'eyJfdG9rZW4iOiJGYldsb1d0cWRQT3hLa1ZtMzZMNXJzYUZjUkQweXREYjhUQ1IzTmpNIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZFwvc2l0ZW1hcC54bWwiLCJyb3V0ZSI6ImdlbmVyYXRlZDo6dG1CdE9SbGxHWFRqRFlLOSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788438771),
('0hT0hVgdacfjtpBGartJB53sU4mQaALIg2bIJA17', NULL, '162.120.184.229', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36', 'eyJfdG9rZW4iOiJUN2RuNnBuS1RpalFSMWFqMmR2WG83QjljTGhCcXdLVGtrdHB6OEpZIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZCIsInJvdXRlIjoiaG9tZSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788437246),
('1kbsvh3ErQBvgACvLyGdkqgk2QQqZNrsKYxwz9ly', NULL, '162.120.184.228', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36', 'eyJfdG9rZW4iOiIzQ1RKUHB5QWUzSzFmcmhHOUE2Z1RBclNqTzlCdmtYNndQbmlBOHU0IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZFwvY2FiYW5nIiwicm91dGUiOiJjYWJhbmcifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1788440982),
('3uNPVIItdbPOZFGqTBBbZIkvmP7reukmkyhNSgog', NULL, '52.167.144.160', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36', 'eyJfdG9rZW4iOiIwT0d5ZzZZZ1M1VjllUEs0SGpROUdlSUtxZE9EQjVSa0xsMFViOUN2IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9tYWlsLmVkdWZhLmNvLmlkXC9hcnRpa2VsIiwicm91dGUiOiJhcnRpa2VsIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1788441221),
('41VyiNoWDcsoZMrFYcpmPOrHEEbjGJQsZZjmixCn', NULL, '9.129.51.223', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot', 'eyJfdG9rZW4iOiI4TTJTQkRtdnNIeE43T3FxR0NjMlB6dnlJb3htdExRVUF0clkxNm0wIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZFwvY2FiYW5nIiwicm91dGUiOiJjYWJhbmcifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1788434093),
('6OGjJ1mvj58PLce2vfQpJLm2ARXynLoQXfKPIY81', NULL, '17.166.21.151', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)', 'eyJfdG9rZW4iOiJRU3B3Z2Yxc0dGTGV4Z3JOVEZxc3RCdmJNYlNFSnpVZFp4ZFprZm5hIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC93d3cuZWR1ZmEuY28uaWRcL2FydGlrZWxcL21lbmdlbmFsLWxheWFuYW4tc2hhZG93LXRlYWNoZXItZnVuZ3NpLXBlcmFuLWRhbi1tYW5mYWF0bnlhLWRhbGFtLXBlbmRpZGlrYW4taW5rbHVzaS1qWGp0aCIsInJvdXRlIjoiYXJ0aWtlbC5zaG93In0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1788443051),
('9G57Dva6lPtBQwrIrYIxTyKFwmf2lQv9rmE0hEa0', NULL, '162.120.184.36', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Mobile Safari/537.36', 'eyJfdG9rZW4iOiJkWlYwYnB0dzRacGM1c1gyTDZod21rd3dHbFpoeEs2Y3gxUzlWakJkIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZCIsInJvdXRlIjoiaG9tZSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788436438),
('CAbnrBwwvYqlyGHusr7QLIRc92mAKDElEZSmHoSW', NULL, '40.77.167.46', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36', 'eyJfdG9rZW4iOiJyS2JNcko0VHEzZ0dYODMwQkVlVWNEZkRLUTdTYXVtaTIyT3NRT2F5IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC93d3cuZWR1ZmEuY28uaWRcL3BlbGF5YW5hblwvYXNlc21lbi1wc2lrb2xvZ2kiLCJyb3V0ZSI6InBlbGF5YW5hbi5hc2VzbWVuIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1788440207),
('IuoQ7LVe1O2rcWrr7b7avS5vkNwNK1J1OnQYqoFz', NULL, '9.129.51.223', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot', 'eyJfdG9rZW4iOiJaekplT1M3cThTOWtscnU1dGJVcDNXcG96UlVuNTNHYVp6cEVsOGVFIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZCIsInJvdXRlIjoiaG9tZSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788434064),
('J9ht3a8M0J2PIK706UtJ1qVuLHwkllaoHkHcNiYl', NULL, '162.120.184.217', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Mobile Safari/537.36', 'eyJfdG9rZW4iOiI2VzRVMFg0cGpSQWFVTGtjOVB0ZjZzQUE5VTNHc1UyNHh2WnZXWndrIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZFwvY2FiYW5nIiwicm91dGUiOiJjYWJhbmcifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1788434024),
('KFVrbOUALqAsWfE4RsvoQi4iVyy5VoZujwCeaJqr', NULL, '103.120.170.68', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36', 'eyJfdG9rZW4iOiJTNURzcWE2YURGQ2F4eUtNMVZEcTFYUDBQdDRpZnV5OWRQT1hCRzhRIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1788438738),
('kUhWNEONIRVg5S9PIL9RtE8JjvrtXnZmWqjJ8729', NULL, '40.77.167.79', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36', 'eyJfdG9rZW4iOiJmSXRGeTUwdWtlVHd2SDd2NzJkWUMxQzZiTFBiRWVrZjBERUVBUGpIIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZFwvP2Vfc2VhcmNoX3Byb3BzPTRhNzRlNTQtMTAmcz0yMDI2Iiwicm91dGUiOiJob21lIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1788443212),
('lYj43GChiFe1pHFTfYX8zRG4kSWawd8NXXIeIx17', NULL, '43.153.85.46', 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1', 'eyJfdG9rZW4iOiJmN1RhWDRwTUtEYmRISU9TT2NRd1FObHFZN3ZsbXNob2wzUG12SktqIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2VkdWZhLmNvLmlkIiwicm91dGUiOiJob21lIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1788434302),
('MmkhEerR7yOjvA568yUoPMey8757wf2iaE9CZGXq', NULL, '52.167.144.166', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36', 'eyJfdG9rZW4iOiJOck42MUVnWVNuamdXR2dRMHdodXowQ1hoUFdRUzJnQXJXQ3Z1V0EwIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZFwvP2Vfc2VhcmNoX3Byb3BzPTU1ZTlhZGIwLTQzNyZzPSIsInJvdXRlIjoiaG9tZSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788437434),
('mnfpsUgmtgWpGIMeYE8nNr2WHDHpy9f0YlNGQ1KI', NULL, '9.129.51.220', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot', 'eyJfdG9rZW4iOiJWT3FoNktTSkV5dlRyV0Y3T3A2MFBxVTNQZGZrRDdja3h5THhQekxuIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9tYWlsLmVkdWZhLmNvLmlkIiwicm91dGUiOiJob21lIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1788434136),
('n0hFwNHzneG0FGfAsstdByC4oPTrd1tNqNG71GJ2', NULL, '182.8.179.161', 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Mobile/15E148 Safari/604.1', 'eyJfdG9rZW4iOiI1MDR1emRwMTJvaDlRS2tUT21TamZKdnF0Tm0zYVZDWjIzenZEckFoIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC93d3cuZWR1ZmEuY28uaWQiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1788436479),
('NCF0cdIJIW3VnH57RQcQplgrc3DRJ9GUPUohMJ5J', NULL, '40.77.167.74', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36', 'eyJfdG9rZW4iOiJSWHVNT2Vram1KNkV2U2ZJOTN0QjR4MVU1ck82Skx4eTA5RlVFOEVLIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZFwvc2l0ZW1hcC54bWwiLCJyb3V0ZSI6ImdlbmVyYXRlZDo6dG1CdE9SbGxHWFRqRFlLOSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788439289),
('Nd9mDYKdnlYbgZyQdHjHWGqpGu6ySo6mpdRNLbrD', NULL, '52.167.144.218', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36', 'eyJfdG9rZW4iOiJvNThmN3Jtb0RpMk1Nd0k3dWNqNFlLREdHQnhmaktUNXZQUFMyZ2dKIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZFwvP2Vfc2VhcmNoX3Byb3BzPWM5Njk3OTYtMTA0NyZzPTIwMjciLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1788446457),
('NKdH7Ksan4UovvFnadANl901TPv03seMjeUn9SjZ', NULL, '52.167.144.232', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36', 'eyJfdG9rZW4iOiJ1R2R0V0FtSkxHaHFTZXA0T3c0WGdBUTJPR0Z2bHpPM1hFaDI2OExYIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZFwvP2Vfc2VhcmNoX3Byb3BzPWM5Njk3OTYtMTg3NyZzPTIwMjciLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1788435469),
('nmXg2DP13qgBeuVC4mGhAKfy1CcFoFrDGIltnCVL', NULL, '40.77.167.157', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36', 'eyJfdG9rZW4iOiIwbnZFdW42QlVQd1FKWUxCMGR2Tk5tMHdoNHR5eUVqTTVIMUxiSkRUIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZFwvP2Vfc2VhcmNoX3Byb3BzPTYyMmI2YjgtNDIxJnM9Iiwicm91dGUiOiJob21lIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1788440521),
('OfBWHniOEhtwNNNl6dtjn8WydITotClaahXZVrsF', NULL, '52.167.144.147', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36', 'eyJfdG9rZW4iOiJzVkhYUnNPQmFhSEpScjhVMVVyUVBSb3pWUHJCOE1udDFDNWRZT1Q0IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC93d3cuZWR1ZmEuY28uaWRcL2tlZ2lhdGFuIiwicm91dGUiOiJrZWdpYXRhbiJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788438771),
('pD9hftNWfaHGIXMkjxuhr9N5JRq0FBa57fF1Qls7', NULL, '103.120.170.68', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36', 'eyJfdG9rZW4iOiJYZHh3ZGdpakhGM2MzSFlJTWJBYmR5eVljQnloT2dKTDRYNVc1dU5EIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZCIsInJvdXRlIjoiaG9tZSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788449295),
('pKQTnlr8eVSWQoYQG7XBwPWRB2fse87r3hHUDQa7', NULL, '92.222.108.111', 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)', 'eyJfdG9rZW4iOiJtVGxjT2I2UkJIOWpwNU1OTU5aMUk1Y01MbGt0OU0wNUhPUWRSOWR0IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZCIsInJvdXRlIjoiaG9tZSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788438452),
('rfFhrMCcip9ka5uO7LDTOMOpKltAU0jG1baevSZS', NULL, '162.120.184.27', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Mobile Safari/537.36', 'eyJfdG9rZW4iOiJ3dExPTlNjeHR5eXc1R2x3SVZQdXNMaFhTcGVqZ1lrQXRhSjIzYzFwIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZCIsInJvdXRlIjoiaG9tZSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788437336),
('rWDlEe9Gzkq3M15Ux0aSYZR5me5Fze1FCy4QWQFe', NULL, '40.77.167.24', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36', 'eyJfdG9rZW4iOiJReldocTZXQ1M2OFVHUUc2VXhjV3FnV3BjYnZldFVZTFlQT1Zac2pJIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9tYWlsLmVkdWZhLmNvLmlkXC9zaXRlbWFwLnhtbCIsInJvdXRlIjoiZ2VuZXJhdGVkOjp0bUJ0T1JsbEdYVGpEWUs5In0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1788438825),
('veC7fnCy2MGfzDa8thc5ef0HjtjndD4DoccW9NV4', NULL, '37.59.204.159', 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)', 'eyJfdG9rZW4iOiJNbHAyeG9rcDdtbzNWYVNxakx2aXFNRlZnV0Jrd2JWbmJSdmNSWTlMIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZFwvc2l0ZW1hcC54bWwiLCJyb3V0ZSI6ImdlbmVyYXRlZDo6dG1CdE9SbGxHWFRqRFlLOSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788443743),
('VhbSGm0m03aX9HBi31bP7NeKGruznukh11fiWRbL', NULL, '72.14.201.147', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Mobile Safari/537.36', 'eyJfdG9rZW4iOiI1UUhTNUZNbHFmVmt5NkFWRUZrZnBlVmZEQmJJSnc2N1U0YUJtM2lwIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZFwvY2FiYW5nIiwicm91dGUiOiJjYWJhbmcifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1788434903),
('vi6QZCzZ59fpvErGrm7Bu68KlMUrOmHesA9BuLZY', NULL, '162.120.184.26', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36', 'eyJfdG9rZW4iOiJFUzJQUUViMFdIajBoWGg1dW55Z0publpUVGI1QXJ2ck1ZVmQ0d2IzIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZFwvY2FiYW5nIiwicm91dGUiOiJjYWJhbmcifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1788440895),
('wAa0z5rJBeZC26zZJEduRNdWDSLBzWpYnWto080r', NULL, '9.129.55.247', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot', 'eyJfdG9rZW4iOiI3eXh0a2pqTW5mTkJOejhQYUFQNEJJVWYyd05BRURTU0JGWld0Y21UIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZCIsInJvdXRlIjoiaG9tZSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788441934),
('WpNUVe4FU3u8GnRwXt5izK3pnkDSCLsh1LfQ0L2F', NULL, '17.166.23.252', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)', 'eyJfdG9rZW4iOiJZMjNGbTM2OW1wMEM0c3dZb2hiUVd5SDZwRTdKTmFXM0xDc2hMNEdwIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC93d3cuZWR1ZmEuY28uaWRcL2FydGlrZWxcL21lbXBlcnNpYXBrYW4tcmVtYWphLWJlcmtlYnV0dWhhbi1raHVzdXMtbWVuamFkaS1sZWJpaC1tYW5kaXJpLWRhbi1iZXJrYXJ5YS1TOEJYRCIsInJvdXRlIjoiYXJ0aWtlbC5zaG93In0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1788444908),
('Y99pDtmz3PGZdOP9JONhKLZbSIJXJUpJNFlPqMID', NULL, '70.153.189.193', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot', 'eyJfdG9rZW4iOiJHbGxNQzRzbThZTlhoM2VMZzRlYllQbDdTYlJlOGRvek15NW1FenVyIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZCIsInJvdXRlIjoiaG9tZSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788446458),
('Z2X6ntVJ4JxI93Eh4MQcygUd5Wpph8y3R34qoVnD', NULL, '160.22.62.42', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0', 'eyJfdG9rZW4iOiJ4alU3UXc4TjN6elRpV1Fyc1RDSDNCZkNyb0I1TXRvTWpFMkV6RW1GIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZFwvdGVyYXBpcyIsInJvdXRlIjoidGVyYXBpcyJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788445550),
('Zgj1OrJGAClFzr9yE4rq1UqzIQIdbhJuzCRqZ4Ez', NULL, '162.120.184.37', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36', 'eyJfdG9rZW4iOiJRTzRXa0tGRFVpV3FEaloyMXBXMEVZM2RyaVVLWm53VTcycHBHZ21yIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHBzOlwvXC9lZHVmYS5jby5pZCIsInJvdXRlIjoiaG9tZSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1788440987);

-- --------------------------------------------------------

--
-- Struktur dari tabel `team_members`
--

CREATE TABLE `team_members` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `team_members`
--

INSERT INTO `team_members` (`id`, `name`, `type`, `role`, `description`, `image_path`, `created_at`, `updated_at`) VALUES
(7, 'Dr. Yoga Budhi Santoso, M.Pd.', 'terapis', 'Orthopedagog', NULL, 'team_members/nZdALnP9PolDH0symh0HTBS5TXdOBCAlY42AeLCV.png', '2026-07-27 20:48:10', '2026-08-02 00:32:08'),
(8, 'Irfah Nahariz Zam\'ah, S.Pd.', 'terapis', 'Head of PAS, BLKK and PAUD Divisions', NULL, 'team_members/r5L9rZOmdQ185k8MpRGnA0CHYVocPxcqPv93gwlt.png', '2026-07-28 01:23:40', '2026-08-06 23:13:55'),
(9, 'Astri Rismawardhani, S.Pd.', 'terapis', 'Head of Therapy Centre and Homebased Divisions', NULL, 'team_members/MjpeyjX2ntBLDEiOrPYbPiwloyAjw1r7GbNEZyPP.png', '2026-07-28 20:32:33', '2026-08-06 23:14:46'),
(10, 'Siti Nurhalimah, S.Psi.', 'terapis', 'Head of Assessment and Counseling Divisions', NULL, 'team_members/JXkxXjIx2ocRm1i84958SinhWCczAntk46m8OBwH.png', '2026-07-28 20:33:08', '2026-08-06 23:15:24'),
(11, 'Grace Belinda, S.Psi.', 'terapis', 'Head of the Education, Training and Organisation Development Divisions', NULL, 'team_members/DgY3I9pGIaPXuliRzwfvCHCdVQemX02M2J40EJEH.png', '2026-07-28 20:36:30', '2026-08-06 23:18:10'),
(12, 'Dini Sari Janatunnisa, S.Psi.', 'terapis', 'Head of HRD, Marketing, Legal and Finance Divisions', NULL, 'team_members/DIuvFgg6a1UAVBIx4xR6WIK4wOMxFY6gnXudFyhr.png', '2026-07-28 20:37:08', '2026-08-06 23:17:39'),
(13, 'Rizqy Regina Mahrunnisa, S.Psi.', 'terapis', 'Senior Behaviour Therapist', NULL, 'team_members/D2b4On3SAvzzN2HR87aM15o1PcnJZPPWejppmOoH.png', '2026-07-28 20:37:57', '2026-07-28 20:41:01'),
(14, 'One Meidyana Putri Suryani, S.Psi.', 'terapis', 'Senior Behaviour Therapist', NULL, 'team_members/HMR8X9lUgIJx11rT47yBgdGS5QX9kdUgTSnOK8Ql.png', '2026-07-28 20:42:24', '2026-07-28 20:42:24'),
(15, 'Ayu Sri Widyani, S.Psi.', 'terapis', 'Konsultan Teknik', NULL, 'team_members/13rxO68DKx7GPtfI8u4OLxnUZr676I207Garnial.png', '2026-07-28 20:44:14', '2026-07-29 23:59:54'),
(16, 'Dwi Subiyakto, S.Tr.Sos.', 'terapis', 'Senior Behaviour Therapist', NULL, 'team_members/PzmLVCJEVquntgPN0lep6ikMAAQtk0YDzq1S5bh2.png', '2026-07-28 20:44:34', '2026-07-30 00:04:08'),
(17, 'Adi Nur Alfi Setiawan, S.Psi.', 'terapis', 'Behavior Therapist', NULL, 'team_members/zZIjaC5XsPojE10bl5TJUFErRYWAyncRVkng04Xz.png', '2026-07-29 18:27:50', '2026-07-29 23:57:28'),
(18, 'Agung Rizky Fauzi', 'staf', 'Creative Designer', NULL, 'team_members/7HGQx0ziTJJhsxG6Bnfl4i1XpAd8dauINsxcvSDW.png', '2026-07-29 18:32:43', '2026-08-01 04:04:13'),
(19, 'Ai Enok Iah Sariah, S.Kom.I', 'terapis', 'Senior Behavior Therapist', NULL, 'team_members/I0f82FuL1VozrVpaO8dwFvckivLIk8SMnFf7Jx4U.png', '2026-07-29 18:34:19', '2026-07-29 23:57:49'),
(20, 'Alifah Ghina Khoirunnisa, S.Ag', 'terapis', 'Junior Behavior Therapist', NULL, 'team_members/bW3UsJ927RNcKhv1lYvk9mPaPNLMhvp3PLFBtZLv.png', '2026-07-29 18:36:12', '2026-07-29 23:59:34'),
(21, 'Alysaa Legiani', 'terapis', 'Asisten Therapist', NULL, 'team_members/t3VDtsP71DA245dseDcatu3sBEnGOSyv4adeX1cU.png', '2026-07-29 18:37:39', '2026-07-30 00:20:45'),
(25, 'Bandung Tunggul Jagad, S. Sos.', 'terapis', 'Behavior Therapist', NULL, 'team_members/iiQG3Pi65B9bp8uqJ2axMeTSX11XkGYiHPYSQz1i.png', '2026-07-29 18:44:22', '2026-07-30 00:00:17'),
(26, 'Bayu Tegar Andriansyah', 'terapis', 'Asisten Therapist', NULL, 'team_members/cRPpGUMNCfNiT04Epki82mpstUuhvPPx9B5eoDD9.png', '2026-07-29 18:45:25', '2026-07-30 00:00:44'),
(27, 'Chaerunnisa Dwimarwanti, S.Psi.', 'terapis', 'Senior Behavior Therapist', NULL, 'team_members/n4rsqLBXOqTJUYt6jVmK2AwnkVUNXOWKvcA72rkH.png', '2026-07-29 18:46:34', '2026-07-30 00:00:58'),
(28, 'Dawam Khoerudin, S.Sos', 'terapis', 'Behavior Therapist', NULL, 'team_members/stXGyvmZscnQZl4Qez0vPvAn4hhF6Dgq01y5dZFU.png', '2026-07-29 18:48:07', '2026-07-30 00:01:14'),
(29, 'Delilah Marpaung, S.Psi.', 'terapis', 'Konsultan Teknik', NULL, 'team_members/jKtW829MIAOiz1DeGWfAxBTZcnLHM5um6pEP8DK5.png', '2026-07-29 18:48:56', '2026-07-30 00:01:30'),
(30, 'Deva Melinda, S.Psi.', 'terapis', 'Behavior Therapist', NULL, 'team_members/HtVyITjW3GDUSILcWXiINmkO8qPWLHKMiFoLFafj.jpg', '2026-07-29 18:49:57', '2026-07-29 18:49:57'),
(31, 'Diella Olivia Febriani, S.Pd.', 'terapis', 'Senior Behavior Therapist', NULL, 'team_members/TvYBKqcsrq99RiuZ5D5y9ODKlMYP1kYYU4qMgJcY.png', '2026-07-29 18:50:39', '2026-07-31 00:23:23'),
(32, 'Dika Prayasa', 'terapis', 'Asisten Therapist', NULL, 'team_members/409GqibUA3naZDTOxmlVeEPPCzriN5MckQ1OHadi.png', '2026-07-29 18:51:38', '2026-07-30 00:01:58'),
(33, 'Dinda Annisa, S.Psi.', 'terapis', 'Senior Behavior Therapist', NULL, 'team_members/TIj8cg4nEDUvNsnDkVt87yzC6kQQ5K0GJA3BmZ0X.png', '2026-07-29 18:52:16', '2026-07-30 00:02:37'),
(34, 'Dini S. Duniawati, S.Pd.', 'terapis', 'Senior Behavior Therapist', NULL, 'team_members/ayoBSgrQml05mh0bsozAVYLmGcfM7amsIFVCo4Zg.png', '2026-07-29 18:52:52', '2026-07-30 00:03:22'),
(36, 'Eka Jonathan Setyawan, S.Psi', 'terapis', 'Behavior Therapist', NULL, 'team_members/IADdmWGDai7HfByRT9s3gQrcRd5LlBNqdpsV1n6e.png', '2026-07-29 18:54:31', '2026-07-30 00:06:02'),
(37, 'Endra Hermawan', 'terapis', 'Asisten Therapist', NULL, 'team_members/ZTRNDxE0D0U8ndMpdKoBzxbi1nVVIl0dhvHgqFjI.jpg', '2026-07-29 18:55:18', '2026-07-29 18:55:18'),
(38, 'Fadhlan Muhammad Alfafa, S.Sos.', 'terapis', 'Behavior Therapist', NULL, 'team_members/VTekNrneNmd7tyqXKd8rOfjmoFblC5OoqY5uEMK1.png', '2026-07-29 18:56:11', '2026-07-30 00:06:16'),
(39, 'Fillemon Septianus Sidabutar, S.Pd.', 'terapis', 'Senior Behavior Therapist', NULL, 'team_members/pGHZ4FnHcBjAH97WWW9D3tgsskos2VorACxljrHh.png', '2026-07-29 18:57:00', '2026-07-30 00:06:36'),
(40, 'Haifa Khoerunnisa, S.Psi.', 'terapis', 'Behavior Therapist', NULL, 'team_members/ot3m7MJion1xzZoSYnUdf5yfL7FOWQiYFLrcTRpV.png', '2026-07-29 18:58:45', '2026-07-30 00:07:08'),
(41, 'Herawati, S.Pd.', 'staf', 'Admin', NULL, 'team_members/aT6c91nq0QDsbcMIisllXZaorvLYdFEqTElwGyEw.jpg', '2026-07-29 19:00:09', '2026-08-28 01:01:58'),
(42, 'Isnaini Maratus Solihah S.Ak', 'terapis', 'Behavior Therapist', NULL, 'team_members/1VRRLXKfGmiZJCgXWmGZN7d7Sy8gtaWeBvmy9sbu.png', '2026-07-29 19:01:29', '2026-07-30 00:07:29'),
(43, 'Janar Rina Lestari', 'staf', 'Call Center', NULL, 'team_members/aSBHrg6QpMEW55PTyJRVAZyH6mIYFa7I68M9knfH.png', '2026-07-29 19:02:32', '2026-07-30 00:41:57'),
(44, 'Janjan Shiamudin, S.Sos.', 'terapis', 'Senior Behavior Therapist', NULL, 'team_members/7W4ziyknx2CQrEyTEnNSYiP55KFYnr09WKlkX5v9.png', '2026-07-29 19:03:09', '2026-07-30 00:08:06'),
(46, 'Liba S Takwati, S.Pd.', 'terapis', 'Senior Behavior Therapist', NULL, 'team_members/GJw9HzTtdyUayxtO2zCu2wKSO7gVBdfbB0MloZWl.png', '2026-07-29 19:04:49', '2026-07-31 01:36:39'),
(47, 'M. Hanif Al Aqiyas', 'terapis', 'Asisten Therapist', NULL, 'team_members/DVGsjFlJQxl06IaXgQsk7CCinj1ykHiODpRzaxZu.png', '2026-07-29 19:05:40', '2026-07-30 00:38:29'),
(48, 'Mella Riska Julianti, S.Pd.', 'terapis', 'Behavior Therapist', NULL, 'team_members/1FWjyWkRCAsp7SPCAwUCfwA403t455UVzS97GkJQ.png', '2026-07-29 19:06:17', '2026-07-30 00:09:13'),
(49, 'Nada Meitri Maharani, S.Psi.', 'terapis', 'Behavior Therapist', NULL, 'team_members/bKJPg22WQ8ma6c0nVJ0UVrH9QoLVRw4sOOVt16W3.png', '2026-07-29 19:07:17', '2026-07-30 00:09:32'),
(50, 'Nadya Hanifah Nur Apriani', 'staf', 'Creative Designer', NULL, 'team_members/oo58VCb426xUypoyDnqKRpFmMX75s51f0JhrAFAx.png', '2026-07-29 19:07:42', '2026-08-01 04:04:28'),
(51, 'Ni Kadek Ady Maytri Wulandari, S.Psi.', 'terapis', 'Senior Behavior Therapist', NULL, 'team_members/TTQOBusqGJptAvMC3oQWgmcq2NtCyEyIASowv5Yg.png', '2026-07-29 19:08:17', '2026-07-30 00:09:47'),
(52, 'Nif Nif Hanifah', 'staf', 'Customer Service', NULL, 'team_members/OZyYpsH9oxSXc984tQQ0d3ZPV41lr3kEinJ6z7Cc.png', '2026-07-29 19:09:14', '2026-08-27 23:31:49'),
(53, 'Putri Nopitasari, S.Pd.', 'staf', 'Guru Paud', NULL, 'team_members/h3BpjoECtLXYh3BTu1JEYzr28hk8TQMoeZYNZCzS.png', '2026-07-29 19:11:46', '2026-08-28 00:58:57'),
(54, 'Renita Sofi Amelia, S.Psi', 'terapis', 'Junior Behavior Therapist', NULL, 'team_members/FjCanoMo34JLj88UmSZisdobR6XZWRvOiB50mkrd.png', '2026-07-29 19:12:18', '2026-07-30 00:10:34'),
(56, 'Rossa Siti Nurfauzi, S.Psi.', 'staf', 'Staff Recruitment', NULL, 'team_members/GUY3OD3x1UMIFuMJFcsMMFwb01QcRS7z0kKnlQHn.png', '2026-07-29 19:14:09', '2026-08-27 23:31:13'),
(58, 'Salsha Nurulita Pratiwi, S.Psi.', 'terapis', 'Behavior Therapist', NULL, 'team_members/OTyXRGjAr0ESAPlUTqivFlnycyfMPwqKqIR3zKnP.png', '2026-07-29 19:15:17', '2026-07-31 00:24:37'),
(59, 'Sari Sovia Lova, S.Ag.', 'terapis', 'Senior Behavior Therapist', NULL, 'team_members/OUFRfJH7PSRWVrybzbYsnSxpnRrzAEH3mS1LTSGW.png', '2026-07-29 19:16:10', '2026-07-30 00:15:39'),
(60, 'Septian Maulana Dirja', 'staf', 'Admin', NULL, 'team_members/AnJxbbe20e8fjgacNf5Uu20sCjFjvGbVIXQdN68k.png', '2026-07-29 19:17:15', '2026-07-30 00:35:41'),
(61, 'Shaela Deri Selfiani', 'terapis', 'Asisten Therapist', NULL, 'team_members/aXY6CHyetrUhHo8CPXvihA3Ehs3MhGIYNwF6SaUB.png', '2026-07-29 19:18:04', '2026-07-30 00:14:11'),
(62, 'Sisca Anggraeni', 'terapis', 'Asisten Therapist', NULL, 'team_members/WJZHfJjAy4OmiBdA4VlJiO9hZH8pNzmYIpiYzfiu.png', '2026-07-29 19:18:35', '2026-07-30 00:13:00'),
(63, 'Sri Hidayanti Nelson, S.Psi.', 'terapis', 'Behavior Therapist', NULL, 'team_members/fax0Ujn4RSaQGujicpMC7mvpiJTZGCS34CeW4udz.png', '2026-07-29 19:19:25', '2026-07-30 00:07:45'),
(64, 'Syifa Latifah, S.Psi.', 'terapis', 'Behavior Therapist', NULL, 'team_members/pwqNwZvcyod47WGLjh5WyK6x4azON9PX4gRWFKCO.png', '2026-07-29 19:19:55', '2026-08-07 02:24:35'),
(66, 'Tyara Nursyam', 'terapis', 'Asisten Therapist', NULL, 'team_members/anslAbdhk2Q8LOj85FmmzypVrtqbYRf3kBpO0Hnf.png', '2026-07-29 19:21:40', '2026-07-30 00:11:28'),
(67, 'Yeti Yanuarti, S.Psi.', 'terapis', 'Senior Behavior Therapist', NULL, 'team_members/ZCDYt9WHWzY77DaFXqShUqUXcXf5t7C3E3KPn25U.png', '2026-07-29 19:22:40', '2026-07-30 00:12:47'),
(68, 'Arlinsyah', 'staf', 'Call Center', NULL, 'team_members/QbKSz5gN6TMdfwQZIOIeZfySnTdffvraBuB5K6hm.png', '2026-07-30 00:18:48', '2026-07-30 00:41:32'),
(69, 'Ravi Ananta Aji Wardana, S.Psi', 'terapis', 'Behavior Therapist', NULL, 'team_members/BwlxDxnXQz5zbZylfwanxU7b6eWbTCiJY6to5P1e.png', '2026-08-05 20:11:17', '2026-08-05 20:11:17'),
(70, 'Mia Yuniati, S.I.kom', 'staf', 'Customer Service', NULL, 'team_members/yiEBmpPIOwgMiPjcgwBn26TayS3BWSu046h8cPRN.png', '2026-08-05 20:14:36', '2026-08-28 01:00:12'),
(71, 'Hafifah, S.Pd', 'terapis', 'Junior Behaviour Therapist - BLKK', NULL, 'team_members/JlPZT9Zga2Zfc59nCnX79gFEMIwrPksEz3Sj8iCL.png', '2026-08-05 20:33:15', '2026-09-02 18:21:02'),
(73, 'Rizal Miftachul Huda, S.Pd', 'terapis', 'Behavior Therapist', NULL, 'team_members/x0jbKLw3pUKOTBmDi5uKWppDwR33hRlPtAj0KJoe.png', '2026-09-02 18:26:06', '2026-09-02 18:28:06');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin') NOT NULL DEFAULT 'admin',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin Edufa', 'biropsikologiedufa@gmail.com', '2026-06-11 10:03:34', '$2y$12$GMjvE9gPHBA3p4bb86MA1OVo42i/w1FEAwLBa4vTLl5amA/xjx5Yi', 'admin', 'ketX5djKJYeG1wXnRVYJpKLPvLkWYs3v0VUDUTA9DH3SxUlB2DFS9jD8nsCn', '2026-06-11 10:03:34', '2026-06-11 10:03:34');

--
-- Indeks untuk tabel yang dibuang
--

--
-- Indeks untuk tabel `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `articles_slug_unique` (`slug`),
  ADD KEY `articles_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indeks untuk tabel `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indeks untuk tabel `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `services_slug_unique` (`slug`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indeks untuk tabel `team_members`
--
ALTER TABLE `team_members`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `activities`
--
ALTER TABLE `activities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `articles`
--
ALTER TABLE `articles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `branches`
--
ALTER TABLE `branches`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `team_members`
--
ALTER TABLE `team_members`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
