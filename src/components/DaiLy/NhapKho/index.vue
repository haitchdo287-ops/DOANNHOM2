<template>
    <div class="row">
        <div class="col-lg-5">
            <div class="card">
                <div class="card-header">
                    Danh Sách Sản Phẩm
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="align-middle text-center">
                                    <th colspan="100%">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Username">
                                            <button class="btn btn-primary input-group-text"> <i class="fa-solid fa-magnifying-glass"></i></button>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="text-center">
                                    <th>#</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(v, k) in list_san_pham">
                                    <tr class="align-middle">
                                        <th class="text-center">{{ k + 1 }}</th>
                                        <td>{{ v.ten_san_pham }}</td>
                                        <td class="text-center">
                                            <button class="btn btn-primary" v-on:click="themSanPhamNhapKho(v)">
                                                <i class="fa-solid fa-share ms-2"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-7">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        Danh Sách Nhập Kho
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="text-center align-middle">
                                    <th>#</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Số Lượng</th>
                                    <th>Đơn Giá</th>
                                    <th>Thành Tiền</th>
                                    <th>Ghi Chú</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in list_san_pham_nhap_kho">
                                    <tr class="align-middle">
                                        <th class="text-center">{{ index + 1 }}</th>
                                        <td>{{ value.abcd }}</td>
                                        <td class="text-center">
                                            <input v-on:change="capNhatChiTietNhapKho(value)" type="number"
                                                class="form-control text-center" v-model="value.so_luong">
                                        </td>
                                        <td class="text-center">
                                            <input v-on:change="capNhatChiTietNhapKho(value)" type="number"
                                                class="form-control text-center" v-model="value.don_gia">
                                        </td>
                                        <td class="text-end">
                                            {{ formatToVND(value.thanh_tien) }}
                                        </td>
                                        <td>
                                            <input v-on:change="capNhatChiTietNhapKho(value)" v-model="value.ghi_chu" type="text" class="form-control">
                                        </td>
                                        <td class="text-center">
                                            <i class="fa-solid fa-trash text-danger fa-2x"
                                                v-on:click="xoaChiTietNhapKho(value)"></i>
                                        </td>
                                    </tr>
                                </template>
                                <tr>
                                    <th colspan="100%" class="text-end">
                                        Tổng Tiền: <span class="text-danger">{{ formatToVND(tong_tien) }}</span>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-lg-12">
                            <button v-on:click="actionNhapKho()" class="btn btn-primary w-100">Nhập kho</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import baseRequest from '../../../core/baseRequest';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            list_san_pham           : [],
            list_san_pham_nhap_kho  : [],
            san_pham_them           : {},
            tong_tien               : 0,
        }
    },
    mounted() {
        this.loadDataSanPham();
        this.loadDataSanhSachNhapKho();
    },
    methods: {
        formatToVND(number) {
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },

        loadDataSanPham() {
            baseRequest
                .get('dai-ly/san-pham/data')
                .then((res) => {
                    this.list_san_pham = res.data.data
                })
        },

        loadDataSanhSachNhapKho() {
            baseRequest
                .get('dai-ly/nhap-kho/data-san-pham-nhap-kho')
                .then((res) => {
                    this.list_san_pham_nhap_kho = res.data.data;
                    this.tong_tien              = res.data.tong_tien
                })
        },

        themSanPhamNhapKho(v) {
            baseRequest
                .post('dai-ly/nhap-kho/them-san-pham-nhap-kho', v)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataSanhSachNhapKho();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },

        capNhatChiTietNhapKho(v) {
            baseRequest
                .post('dai-ly/nhap-kho/cap-nhat-san-pham-nhap-kho', v)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataSanhSachNhapKho();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },

        xoaChiTietNhapKho(v) {
            baseRequest
                .post('dai-ly/nhap-kho/xoa-san-pham-nhap-kho', v)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataSanhSachNhapKho();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },

        actionNhapKho() {
            baseRequest
                .post('dai-ly/nhap-kho/xac-nhan-nhap-kho')
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataSanhSachNhapKho();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },

    },
}
</script>
<style></style>