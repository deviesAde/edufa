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
            [ 'city' => "KANTOR PUSAT BANDUNG", 'type' => "Kantor Utama", 'address' => "Jl. Windu No.6, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40262", 'latitude' => -6.924823, 'longitude' => 107.625619 ],
            [ 'city' => "EXTENSION BANDUNG", 'type' => "Fasilitas Perluasan", 'address' => "Jl. R.A.A. Marta Negara No.34,  Turangga, Kec. lengkong, Kota Bandung, Jawa Barat 40264", 'latitude' => -6.931750, 'longitude' => 107.629393 ],
            [ 'city' => "MEDAN", 'type' => "", 'address' => "Jl. Karya Bakti no 5 Pangkalan Masyhur MedanJohor, Medan Sumatra Utara", 'latitude' => 3.5852, 'longitude' => 98.6722 ],
            [ 'city' => "CIMAHI", 'type' => "Terapi Autis", 'address' => "Jl. Pd. Mas Raya No.2, Baros, Kec. Cimahi Tengah, Kota Cimahi", 'latitude' => -6.8723, 'longitude' => 107.5436 ],
            [ 'city' => "MAKASAR", 'type' => "Terapi Autis", 'address' => "Ruko Alfa jln Pengayoman No. 36. Kota Makassar", 'latitude' => -5.1476, 'longitude' => 119.4327 ],
            [ 'city' => "DENPASAR", 'type' => "Terapi Autis", 'address' => "Jl. Nangka Selatan No 158 Blok 88 Kec. Denpasar Utara, Kel Danging Puri Kaja", 'latitude' => -8.6500, 'longitude' => 115.2166 ],
            [ 'city' => "PALEMBANG", 'type' => "Terapi Autis", 'address' => "Jl. Dewana no.4 Alang Alang Lebar Palembang", 'latitude' => -2.9909, 'longitude' => 104.7565 ],
            [ 'city' => "PADANG", 'type' => "Terapi Autis", 'address' => "Filano Jaya 1 Blok A1 No.11 Kubu Dalam Parak Karakah Padang Timur", 'latitude' => -0.9470, 'longitude' => 100.3658 ],
            [ 'city' => "PEKANBARU", 'type' => "Terapi Autis", 'address' => "Jl. Hangjebat No, 3 Kel. Sukamulya, Kec. Sail kota Pekanbaru.", 'latitude' => 0.5070, 'longitude' => 101.4477 ],
            [ 'city' => "LAMPUNG", 'type' => "Terapi Autis", 'address' => "Jl. Way Mesuji No.51, Pahoman, Engal, Kota Bandar Lampung", 'latitude' => -5.3971, 'longitude' => 105.2667 ],
            [ 'city' => "SERANG", 'type' => "Terapi Autis", 'address' => "Jl. Raya Petir-Serang No. 3, Cipocok Jaya, Kota Serang, Banten", 'latitude' => -6.1200, 'longitude' => 106.1502 ],
            [ 'city' => "JAKARTA TIMUR", 'type' => "Terapi Autis", 'address' => "Perumahan Cibubur Indah III Blok G No. 11 Cibubur", 'latitude' => -6.2088, 'longitude' => 106.8456 ],
            [ 'city' => "CILEGON", 'type' => "Terapi Autis", 'address' => "Ruko Perumahan Metro Cilegon Blok E-1 no 14 Jombang Kota Cilegon", 'latitude' => -6.0173, 'longitude' => 106.0202 ],
            [ 'city' => "SUBANG", 'type' => "Terapi Autis", 'address' => "Jl. Brigjen Katamso No.65 (belakang RSUD Subang, Gang Akper), Subang", 'latitude' => -6.5583, 'longitude' => 107.7661 ],
            [ 'city' => "GARUT", 'type' => "Terapi Autis", 'address' => "Komp.Permata Hijau Land E39 Jln.Raya Samarang, Tarogong Garut", 'latitude' => -7.2279, 'longitude' => 107.9086 ],
            [ 'city' => "KETAPANG", 'type' => "Terapi Autis", 'address' => "Jl. R. Suprapto No.172, Sampit, Kec. Delta Pawan, Ketapang, Kalbar", 'latitude' => -1.8465, 'longitude' => 109.9721 ],
            [ 'city' => "CIREBON", 'type' => "Terapi Autis", 'address' => "Jl. Kesambi Baru No.14b, Kesambi, Kota Cirebon, Jawa Barat", 'latitude' => -6.7320, 'longitude' => 108.5523 ],
            [ 'city' => "YOGYAKARTA", 'type' => "Terapi Autis", 'address' => "Taman Griya Indah I No B-122, Sumberan, Ngestiharjo, Kasihan, Bantul", 'latitude' => -7.7955, 'longitude' => 110.3694 ],
            [ 'city' => "SEMARANG", 'type' => "Terapi Autis", 'address' => "Jln. KEDUNGMUNDU NO. 34A LAMPER TENGAH, SEMARANG", 'latitude' => -6.9666, 'longitude' => 110.4166 ],
            [ 'city' => "MOJOKERTO", 'type' => "Terapi Autis", 'address' => "JL. BRAWIJAYA No.350 MOJOKERTO", 'latitude' => -7.4726, 'longitude' => 112.4336 ],
            [ 'city' => "BENGKULU", 'type' => "Terapi Autis", 'address' => "JL. Fatmawati No. 039, Rt 10/Rw04, Penurunan, Kec Ratu Samban, Bengkulu", 'latitude' => -3.7928, 'longitude' => 102.2607 ],
            [ 'city' => "KUDUS", 'type' => "Terapi Autis", 'address' => "Jl Gg. 4 Kav., Mlati Norowito, Kec. Kota Kudus, Jawa Tengah", 'latitude' => -6.8048, 'longitude' => 110.8405 ],
            [ 'city' => "MALANG", 'type' => "Terapi Autis", 'address' => "Pondok Belimbing Indah blok E1, No.12, Polowijen, Belimbing Malang", 'latitude' => -7.9797, 'longitude' => 112.6304 ],
            [ 'city' => "SOLO", 'type' => "Terapi Autis", 'address' => "Jl. Profesor DR. Soeharsono No. 46, Jajar, kec Laweyan, Surakarta", 'latitude' => -7.5666, 'longitude' => 110.8266 ],
            [ 'city' => "TASIKMALAYA", 'type' => "Terapi Autis", 'address' => "Jl. Raflesia No.17, Panglayungan, Kec. Cipedes, Tasikmalaya", 'latitude' => -7.3195, 'longitude' => 108.2040 ],
            [ 'city' => "SURABAYA", 'type' => "Terapi Autis", 'address' => "Jl. Serayu No.3, RT.002/RW.09, Keputran, Kec. Tegalsari, Surabaya", 'latitude' => -7.2504, 'longitude' => 112.7688 ],
            [ 'city' => "SIDOARJO", 'type' => "Terapi Autis", 'address' => "Jl. Kombes Pol. Moh. Duryat No.15, Rw2, Sidokumpul, Sidoarjo", 'latitude' => -7.4478, 'longitude' => 112.7183 ],
            [ 'city' => "CILEUNYI", 'type' => "Terapi Autis", 'address' => "Komplek Bumi Panyawangan, Jl. Puspa Kencana No.27, Cimekar, Cileunyi", 'latitude' => -6.9372, 'longitude' => 107.7335 ],
            [ 'city' => "PURWAKARTA", 'type' => "Terapi Autis", 'address' => "Jl. Pesona Griya Asri Blok Biro No.18, Ciseureuh, Purwakarta", 'latitude' => -6.5361, 'longitude' => 107.4436 ],
            [ 'city' => "BOGOR", 'type' => "Terapi Autis", 'address' => "Jl. Guntur No.32 RT.03/RW.03, Babakan, Bogor Tengah, Bogor", 'latitude' => -6.5971, 'longitude' => 106.7901 ],
            [ 'city' => "PURWOKERTO", 'type' => "Terapi Autis", 'address' => "Jl. Jatiwinangun No.41, Jatiwinangun, Purwokerto Lor", 'latitude' => -7.4214, 'longitude' => 109.2305 ],
            [ 'city' => "TABANAN", 'type' => "Terapi Autis", 'address' => "Jl. Jepun No.11 B, Dauh Peken, Kec. Tabanan, Bali", 'latitude' => -8.5372, 'longitude' => 115.1166 ],
            [ 'city' => "DEPOK", 'type' => "Terapi ABA Depok", 'address' => "Ruko Pesona Khayangan, Jl. K.H.M. Yusuf Raya No.I Blok B, Mekar Jaya, Depok", 'latitude' => -6.4024, 'longitude' => 106.7942 ],
            [ 'city' => "PONTIANAK", 'type' => "Terapi ABA Pontianak", 'address' => "Jl. Padat Karya Ruko 1C 1D, Bansir Darat, Pontianak Tenggara", 'latitude' => -0.0227, 'longitude' => 109.3333 ],
            [ 'city' => "BATULICIN", 'type' => "Terapi Autis", 'address' => "Jl. Raya Batulicin No.18, Batulicin, Tanah Bumbu, Kalsel", 'latitude' => -3.4544, 'longitude' => 115.9866 ],
        ];

        foreach ($branches as $branch) {
            Branch::create([
                'city' => $branch['city'],
                'type' => $branch['type'] ?: null,
                'address' => $branch['address'],
                'latitude' => $branch['latitude'],
                'longitude' => $branch['longitude'],
                'photo_path' => null, // Placeholder for future admin uploads
            ]);
        }
    }
}
