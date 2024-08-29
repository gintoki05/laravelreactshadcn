<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KelurahanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $file = database_path('seeders/csv/kelurahans.csv');
        $kelurahans = $this->loadCSV($file);

        foreach ($kelurahans as $kelurahan) {
            DB::table('kelurahans')->insert([
                'id' => $kelurahan['id'],
                'nama_kelurahan' => $kelurahan['nama_kelurahan'],
                'id_kecamatan' => $kelurahan['id_kecamatan'],
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
