<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Branch;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $branches = [
            [ 'city' => "KANTOR PUSAT BANDUNG", 'type' => "Kantor Utama", 'address' => "Jl. Windu No.6, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40262", 'latitude' => -6.924823, 'longitude' => 107.625619, 'photo_path' => "branches/bBRG6Wvq1yvBWXmU2tohElnHnMA5RE648gkcnw1f.jpg" ],
            [ 'city' => "EXTENSION BANDUNG", 'type' => "Fasilitas Perluasan", 'address' => "Jl. R.A.A. Marta Negara No.34,  Turangga, Kec. lengkong, Kota Bandung, Jawa Barat 40264", 'latitude' => -6.931750, 'longitude' => 107.629393, 'photo_path' => null ],
            [ 'city' => "MEDAN", 'type' => "", 'address' => "Jl. Karya Bakti no 5 Pangkalan Masyhur MedanJohor, Medan Sumatra Utara", 'latitude' => 3.5852, 'longitude' => 98.6722, 'photo_path' => "branches/Ciec2xOYgdHUeeJkrMM8NwHv5AGktmB4zUEGAatx.jpg" ],
            [ 'city' => "CIMAHI", 'type' => "Terapi ABK", 'address' => "Jl. Pd. Mas Raya No.2, Baros, Kec. Cimahi Tengah, Kota Cimahi", 'latitude' => -6.8723, 'longitude' => 107.5436, 'photo_path' => "branches/9DYNoHCA3CGWhiZ6CDUMohpXK88GTb4Y3HLxGywy.jpg" ],
            [ 'city' => "MAKASAR", 'type' => "Terapi ABK", 'address' => "Ruko Alfa jln Pengayoman No. 36. Kota Makassar", 'latitude' => -5.1476, 'longitude' => 119.4327, 'photo_path' => "branches/vTtHXuZXvYmuXYhLA2vVcJCpzaykJS5oS51K8Dzj.jpg" ],
            [ 'city' => "DENPASAR", 'type' => "Terapi ABK", 'address' => "Jl. Nangka Selatan No 158 Blok 88 Kec. Denpasar Utara, Kel Danging Puri Kaja", 'latitude' => -8.6500, 'longitude' => 115.2166, 'photo_path' => "branches/leE7s93NOL1LSGhEy92SLmiAKhDHZnmRpaq0efpc.jpg" ],
            [ 'city' => "PALEMBANG", 'type' => "Terapi ABK", 'address' => "Jl. Dewana no.4 Alang Alang Lebar Palembang", 'latitude' => -2.9909, 'longitude' => 104.7565, 'photo_path' => "branches/1ZZ29PC9nWOlWOb65O05Edsti0lvtxHyOEDvt2i1.jpg" ],
            [ 'city' => "PADANG", 'type' => "Terapi ABK", 'address' => "Filano Jaya 1 Blok A1 No.11 Kubu Dalam Parak Karakah Padang Timur", 'latitude' => -0.9470, 'longitude' => 100.3658, 'photo_path' => "branches/7aUtHkIQM4JEUudcdvQNs4KBlUCiBi35wylzVKf4.jpg" ],
            [ 'city' => "PEKANBARU", 'type' => "Terapi ABK", 'address' => "Jl. Hangjebat No, 3 Kel. Sukamulya, Kec. Sail kota Pekanbaru.", 'latitude' => 0.5070, 'longitude' => 101.4477, 'photo_path' => "branches/O4lfPsqidLuUGes8ME6Rqy5PiVtd857luqQ37saW.jpg" ],
            [ 'city' => "LAMPUNG", 'type' => "Terapi ABK", 'address' => "Jl. Way Mesuji No.51, Pahoman, Engal, Kota Bandar Lampung", 'latitude' => -5.3971, 'longitude' => 105.2667, 'photo_path' => "branches/LIqnqeSyccCLnlpPFm64Mzl4cf8OMjxuZq4qFVrX.jpg" ],
            [ 'city' => "SERANG", 'type' => "Terapi ABK", 'address' => "Jl. Raya Petir-Serang No. 3, Cipocok Jaya, Kota Serang, Banten", 'latitude' => -6.1200, 'longitude' => 106.1502, 'photo_path' => "branches/pCPCXBIR6ipSR0V31skmqJGq7EIgBoj6KUpwji3R.jpg" ],
            [ 'city' => "JAKARTA TIMUR", 'type' => "Terapi ABK", 'address' => "Perumahan Cibubur Indah III Blok G No. 11 Cibubur", 'latitude' => -6.2088, 'longitude' => 106.8456, 'photo_path' => "branches/NLL8rRevWEULt5A6Jlk0dFevBKSgbaj40qoxgXhE.jpg" ],
            [ 'city' => "CILEGON", 'type' => "Terapi ABK", 'address' => "Ruko Perumahan Metro Cilegon Blok E-1 no 14 Jombang Kota Cilegon", 'latitude' => -6.0173, 'longitude' => 106.0202, 'photo_path' => "branches/ZEObp8x0lXvlyWBs7vK839jHuKPjnXRglpczDPLx.jpg" ],
            [ 'city' => "SUBANG", 'type' => "Terapi ABK", 'address' => "Jl. Brigjen Katamso No.65 (belakang RSUD Subang, Gang Akper), Subang", 'latitude' => -6.5583, 'longitude' => 107.7661, 'photo_path' => "branches/KMi8PcNCukZaVnW5UaOIOReyVFQo7i41eAeGo7Jv.jpg" ],
            [ 'city' => "GARUT", 'type' => "Terapi ABK", 'address' => "Komp.Permata Hijau Land E39 Jln.Raya Samarang, Tarogong Garut", 'latitude' => -7.2279, 'longitude' => 107.9086, 'photo_path' => "branches/ySPdZI9t9S52Kp8Smlft4VEFJbc6cm0AhpEy9iVO.jpg" ],
            [ 'city' => "KETAPANG", 'type' => "Terapi ABK", 'address' => "Jl. R. Suprapto No.172, Sampit, Kec. Delta Pawan, Ketapang, Kalbar", 'latitude' => -1.8465, 'longitude' => 109.9721, 'photo_path' => "branches/d2OAKPv0KHPligNupqa3QAbDbdcGWfMHVgANjQT7.jpg" ],
            [ 'city' => "CIREBON", 'type' => "Terapi ABK", 'address' => "Jl. Kesambi Baru No.14b, Kesambi, Kota Cirebon, Jawa Barat", 'latitude' => -6.7320, 'longitude' => 108.5523, 'photo_path' => "branches/k6hQ6pv54LY1e0AbBomj4TkZJ5iIsva9Rur6Lgrw.jpg" ],
            [ 'city' => "YOGYAKARTA", 'type' => "Terapi ABK", 'address' => "Taman Griya Indah I No B-122, Sumberan, Ngestiharjo, Kasihan, Bantul", 'latitude' => -7.7955, 'longitude' => 110.3694, 'photo_path' => "branches/0iMM6wsYoGoW3lpnqmkY6Vus9EnycbYYlSc8CQFh.jpg" ],
            [ 'city' => "SEMARANG", 'type' => "Terapi ABK", 'address' => "Jln. KEDUNGMUNDU NO. 34A LAMPER TENGAH, SEMARANG", 'latitude' => -6.9666, 'longitude' => 110.4166, 'photo_path' => "branches/4QuRr7AyEloRyDmkRDROQRPBfiYKsBuKzRm2EhyE.jpg" ],
            [ 'city' => "MOJOKERTO", 'type' => "Terapi ABK", 'address' => "JL. BRAWIJAYA No.350 MOJOKERTO", 'latitude' => -7.4726, 'longitude' => 112.4336, 'photo_path' => "branches/i66D9Em5mylnzjMUN3yQf9iLF43XIiuj0fDbnqDO.jpg" ],
            [ 'city' => "BENGKULU", 'type' => "Terapi ABK", 'address' => "JL. Fatmawati No. 039, Rt 10/Rw04, Penurunan, Kec Ratu Samban, Bengkulu", 'latitude' => -3.7928, 'longitude' => 102.2607, 'photo_path' => "branches/XkXTfzM8MXjtZ1y9048BqkLOy3XY2qyDjDS3Zz2Q.jpg" ],
            [ 'city' => "KUDUS", 'type' => "Terapi ABK", 'address' => "Jl Gg. 4 Kav., Mlati Norowito, Kec. Kota Kudus, Jawa Tengah", 'latitude' => -6.8048, 'longitude' => 110.8405, 'photo_path' => "branches/JVZMOvqwlD8hlvMDERVNFnS5AACf1OP6PQifZvf0.jpg" ],
            [ 'city' => "MALANG", 'type' => "Terapi ABK", 'address' => "Pondok Belimbing Indah blok E1, No.12, Polowijen, Belimbing Malang", 'latitude' => -7.9797, 'longitude' => 112.6304, 'photo_path' => "branches/FOvLX2VvUz5kSuRZ1D1kPCkoLl5usuhbrEebBMic.jpg" ],
            [ 'city' => "SOLO", 'type' => "Terapi ABK", 'address' => "Jl. Profesor DR. Soeharsono No. 46, Jajar, kec Laweyan, Surakarta", 'latitude' => -7.5666, 'longitude' => 110.8266, 'photo_path' => "branches/dwpTciMekYAHJe00XmJQwWCvQpf51yjlqYtxzL12.jpg" ],
            [ 'city' => "TASIKMALAYA", 'type' => "Terapi ABK", 'address' => "Jl. Raflesia No.17, Panglayungan, Kec. Cipedes, Tasikmalaya", 'latitude' => -7.3195, 'longitude' => 108.2040, 'photo_path' => "branches/gxlSQIJrEQA166czcbkvdsDn6wOUmreocztaXioT.jpg" ],
            [ 'city' => "SURABAYA", 'type' => "Terapi ABK", 'address' => "Jl. Serayu No.3, RT.002/RW.09, Keputran, Kec. Tegalsari, Surabaya", 'latitude' => -7.2504, 'longitude' => 112.7688, 'photo_path' => "branches/0gN3OpGxQ1oMllXcHx1X0Ga7jnjVw5QVc8joiSvB.jpg" ],
            [ 'city' => "SIDOARJO", 'type' => "Terapi ABK", 'address' => "Jl. Kombes Pol. Moh. Duryat No.15, Rw2, Sidokumpul, Sidoarjo", 'latitude' => -7.4478, 'longitude' => 112.7183, 'photo_path' => "branches/qSNnCfjdFSrtxtl9fQVNZ6yIAWWRLk4VbblXhATm.jpg" ],
            [ 'city' => "CILEUNYI", 'type' => "Terapi ABK", 'address' => "Komplek Bumi Panyawangan, Jl. Puspa Kencana No.27, Cimekar, Cileunyi", 'latitude' => -6.9372, 'longitude' => 107.7335, 'photo_path' => "branches/AJNmnifOR0Jm9bG6s1kSnUEzqnEfPRi1NoaYoDu0.jpg" ],
            [ 'city' => "PURWAKARTA", 'type' => "Terapi ABK", 'address' => "Jl. Pesona Griya Asri Blok Biro No.18, Ciseureuh, Purwakarta", 'latitude' => -6.5361, 'longitude' => 107.4436, 'photo_path' => "branches/SWJGIRwjVxNhdZbrxRxLwTAyzqQv2bVmCaymxWgY.jpg" ],
            [ 'city' => "BOGOR", 'type' => "Terapi ABK", 'address' => "Jl. Guntur No.32 RT.03/RW.03, Babakan, Bogor Tengah, Bogor", 'latitude' => -6.5971, 'longitude' => 106.7901, 'photo_path' => "branches/pBmGiAXBVjWLezCJFCCD3OjDjBf8cKUA2tEA10Ri.jpg" ],
            [ 'city' => "PURWOKERTO", 'type' => "Terapi ABK", 'address' => "Jl. Jatiwinangun No.41, Jatiwinangun, Purwokerto Lor", 'latitude' => -7.4214, 'longitude' => 109.2305, 'photo_path' => "branches/fllq0nQuWAl03UHPAGuQrainhFtXxeJ3WY5gZ3Ah.jpg" ],
            [ 'city' => "TABANAN", 'type' => "Terapi ABK", 'address' => "Jl. Jepun No.11 B, Dauh Peken, Kec. Tabanan, Bali", 'latitude' => -8.5372, 'longitude' => 115.1166, 'photo_path' => "branches/2ldt8GJSvkQeFC3DUCm8KOpqlDWPGrdRiTIlu4MW.jpg" ],
            [ 'city' => "DEPOK", 'type' => "Terapi ABA Depok", 'address' => "Ruko Pesona Khayangan, Jl. K.H.M. Yusuf Raya No.I Blok B, Mekar Jaya, Depok", 'latitude' => -6.4024, 'longitude' => 106.7942, 'photo_path' => "branches/VSJin3DMxtKSNkOO1Xc3HUOHnJuDSylB4RbXsZZv.jpg" ],
            [ 'city' => "PONTIANAK", 'type' => "Terapi ABA Pontianak", 'address' => "Jl. Padat Karya Ruko 1C 1D, Bansir Darat, Pontianak Tenggara", 'latitude' => -0.0227, 'longitude' => 109.3333, 'photo_path' => "branches/qw5m7cXxCNDvm6b0dquukdcD5RGgtZtAATmyNmHg.jpg" ],
            [ 'city' => "BATULICIN", 'type' => "Terapi ABK", 'address' => "Jl. Raya Batulicin No.18, Batulicin, Tanah Bumbu, Kalsel", 'latitude' => -3.4544, 'longitude' => 115.9866, 'photo_path' => "branches/iEPMNdGAOtn56kXHyGPfUu0VgVk6jr0QgxLBX5Lu.jpg" ],
            [ 'city' => "JEMBER", 'type' => "Terapi ABK", 'address' => "Jl. Letjen Panjaitan No. 103, Sumbersari, Jember", 'latitude' => null, 'longitude' => null, 'photo_path' => "branches/iP0cCpjJ5BqzwBAlyblgoKmmaswpQ9AE8PSzOGhp.jpg" ],
            [ 'city' => "TANGERANG", 'type' => "Terapi ABK", 'address' => "Jalan A. Damyati No. 28 A, Tangerang", 'latitude' => -6.17761558, 'longitude' => 106.63177805, 'photo_path' => "branches/W2LSc8eEkm4XZ2aecGzkExVPdN0Kzm7Pa1vi8JBP.jpg" ],
        ];

        foreach ($branches as $branch) {
            Branch::create([
                'city' => $branch['city'],
                'type' => $branch['type'] ?: null,
                'address' => $branch['address'],
                'latitude' => $branch['latitude'],
                'longitude' => $branch['longitude'],
                'photo_path' => $branch['photo_path'],
            ]);
        }
    }
}
