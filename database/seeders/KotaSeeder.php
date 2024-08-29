<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $file = database_path('seeders/csv/kotas.csv');
        $kotas = $this->loadCSV($file);

        foreach ($kotas as $kota) {
            DB::table('kotas')->insert([
                'id' => $kota['id'],
                'nama_kota' => $kota['nama_kota'],
                'id_provinsi' => $kota['id_provinsi'],
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
