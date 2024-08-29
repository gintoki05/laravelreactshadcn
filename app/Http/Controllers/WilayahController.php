<?php

namespace App\Http\Controllers;

use App\Models\Provinsi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WilayahController extends Controller
{
    public function index()
    {
        $provinsi = Provinsi::all();
        return Inertia::render('Wilayah/Provinsi', ['provinsi' => $provinsi]);
    }
}
