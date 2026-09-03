<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('activities', function (Blueprint $table) {
            // Change the type column from ENUM to VARCHAR
            $table->string('type')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('activities', function (Blueprint $table) {
            // Revert back to original ENUM (or just leave it as string if too complex to safely revert)
            $table->enum('type', ['terapi','asesmen','pelatihan','pendidikan-anak-usia-dini','pendamping-abk-di-sekolah','balai-latihan-kerja-dan-kehidupan','internal','kelas'])->change();
        });
    }
};
