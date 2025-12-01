<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NhanVienSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('nhan_viens')->delete();
        DB::table('nhan_viens')->truncate();
        DB::table('nhan_viens')->insert([
            [
                'email'             =>  'tan60134@gmail.com',
                'password'          =>  bcrypt('123456'),
                'ho_va_ten'         =>  'Nguyễn Văn Tân',
                'so_dien_thoai'     =>  '0932.594.539',
                'dia_chi'           =>  'Đà Nẵng',
                'tinh_trang'        =>  1,
            ],
            [
                'email'             =>  'vantangit@gmail.com',
                'password'          =>  bcrypt('123456'),
                'ho_va_ten'         =>  'Nguyễn Văn Tân',
                'so_dien_thoai'     =>  '085.2345.817',
                'dia_chi'           =>  'Đà Nẵng',
                'tinh_trang'        =>  1,
            ],
        ]);
    }
}
