<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KecamatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $file = database_path('seeders/csv/kecamatans.csv');
        $kecamatans = $this->loadCSV($file);

        foreach ($kecamatans as $kecamatan) {
            DB::table('kecamatans')->insert([
                'id' => $kecamatan['id'],
                'nama_kecamatan' => $kecamatan['nama_kecamatan'],
                'id_kota' => $kecamatan['id_kota'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }

    private function loadCSV($file)
    {
        $data = [];
        $header = null;

        if (($handle = fopen($file, 'r')) !== false) {
            while (($row = fgetcsv($handle, 1000, ',')) !== false) {
                if (!$header) {
                    $header = $row;
                } else {
                    $data[] = array_combine($header, $row);
                }
            }
            fclose($handle);
        }

        return $data;
    }
}
