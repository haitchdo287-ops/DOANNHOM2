<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DaiLySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('dai_lys')->delete();

        DB::table('dai_lys')->truncate();

        DB::table('dai_lys')->insert([
            ['id' => '1', 'ho_va_ten' => 'Nguyễn Văn Tân', 'email' => 'tan60134@gmail.com', 'so_dien_thoai' => '376659652', 'ngay_sinh' => '2023-12-10', 'password' => bcrypt(123456), 'ten_doanh_nghiep' => 'DZFullStack', 'ma_so_thue' => '123123',  'dia_chi_kinh_doanh' => 'Đà Nẵng', 'is_active' => 1],
            ['id' => '2', 'ho_va_ten' => 'Nguyễn Tấn Dũng', 'email' => 'tandung@gmail.com', 'so_dien_thoai' => '123123123', 'ngay_sinh' => '2022-12-10', 'password' => bcrypt(123456), 'ten_doanh_nghiep' => 'CÔNG TY TNHH SƠN TÙNG', 'ma_so_thue' => '300588569',  'dia_chi_kinh_doanh' => '39/5 Hoàng Dư Khương, Phường 12, Q. 10, Tp. Hồ Chí Minh (TPHCM)', 'is_active' => 1],
            ['id' => '3', 'ho_va_ten' => 'Hoàng Anh Duy', 'email' => 'anhduy@gmail.com', 'so_dien_thoai' => '123123123', 'ngay_sinh' => '2021-12-10', 'password' => bcrypt(123456), 'ten_doanh_nghiep' => 'CÔNG TY TNHH PHÁT THIÊN THANH', 'ma_so_thue' => '151323569',  'dia_chi_kinh_doanh' => 'Thửa đất số 615, tờ bản đồ số 39, Khu phố Khánh Lộc, P.Khánh Bình, Tx Tân Uyên, Tỉnh Bình Dương', 'is_active' => 1],
            ['id' => '4', 'ho_va_ten' => 'Trịnh Thị Phương Thảo', 'email' => 'phuongthao@gmail.com', 'so_dien_thoai' => '123123123', 'ngay_sinh' => '2023-12-10', 'password' => bcrypt(123456), 'ten_doanh_nghiep' => 'CÔNG TY TNHH ANMAC VIỆT NAM', 'ma_so_thue' => '321288123',  'dia_chi_kinh_doanh' => 'Tòa Nhà 19, N7B, Trung Hòa, Nhân Chính, Quận Thanh Xuân, TP Hà Nội (TPHN)', 'is_active' => 1],
        ]);
    }
}
