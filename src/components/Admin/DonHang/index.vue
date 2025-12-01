<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                Danh Sách Đơn Hàng
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center">
                                <th>#</th>
                                <th>Mã Đơn Hàng</th>
                                <th>Tên Người Nhận</th>
                                <th>Số Điện Thoại</th>
                                <th>Địa Chỉ</th>
                                <th>Tổng Tiền Thanh Toán</th>
                                <th>Thanh Toán</th>
                                <th>Tình Trạng Đơn Hàng</th>
                                <th>Chi TIết Đơn Hàng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle" v-for="(value, index) in list" :key="index">
                                <th>{{ index + 1 }}</th>
                                <td class="text-center">{{ value.ma_don_hang }}</td>
                                <td>{{ value.ten_nguoi_nhan }}</td>
                                <td class="text-center">{{ value.so_dien_thoai }}</td>
                                <td>{{ value.dia_chi_giao_hang }}</td>
                                <td class="text-end">{{ formatToVND(value.tong_tien_thanh_toan) }}</td>
                                <td class="text-center">
                                    <template v-if="value.is_thanh_toan == 0">
                                        <button v-on:click="changeThanhToan(value)" class="btn btn-danger">Chưa Thanh Toán</button>
                                    </template>
                                    <template v-else>
                                        <button class="btn btn-success">Đã Thanh Toán</button>
                                    </template>
                                </td>
                                <td class="text-center">
                                    <template v-if="value.tinh_trang_don_hang == 0">
                                        <button v-on:click="changeDonHang(value)" class="btn btn-danger">Chưa Giao</button>
                                    </template>
                                    <template v-else>
                                        <button class="btn btn-success">Đã Giao</button>
                                    </template>
                                </td>
                                <td class="text-center">
                                    <button v-on:click="loadDataChiTiet(value)" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#chiTietModal">Chi Tiết Đơn Hàng</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal fade" id="chiTietModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Chi Tiết Đơn Hàng</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr class="text-center">
                                                <th>#</th>
                                                <th>Tên Sản Phẩm</th>
                                                <th>Đại Lý</th>
                                                <th>Số Lượng</th>
                                                <th>Đơn Giá</th>
                                                <th>Thành Tiền</th>
                                                <th>Ghi Chú</th>
                                                <th>Tình Trạng Giao Kho</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="align-middle" v-for="(value, index) in list_chi_tiet" :key="index">
                                                <th>{{ index + 1 }}</th>
                                                <td class="text-wrap">{{ value.ten_san_pham }}</td>
                                                <td class="text-center">{{ value.ho_va_ten }}</td>
                                                <td class="text-center">{{ value.so_luong }}</td>
                                                <td class="text-end">{{ formatToVND(value.don_gia) }}</td>
                                                <td class="text-end">{{ formatToVND(value.thanh_tien) }}</td>
                                                <td class="text-center text-wrap">{{ value.ghi_chu }}</td>
                                                <td class="text-center">
                                                    <template v-if="value.is_giao_kho == 0">
                                                        <button class="btn btn-danger">Chưa Giao Kho</button>
                                                    </template>
                                                    <template v-else>
                                                        <button class="btn btn-success">Đã Giao Kho</button>
                                                    </template>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { createToaster } from "@meforma/vue-toaster";
import baseRequest from '../../../core/baseRequest';
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            list: [],
            list_chi_tiet: []

        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },

        loadData() {
            baseRequest
                .get('admin/don-hang/data')
                .then((res) => {
                    this.list = res.data.data;
                })
        },
        loadDataChiTiet(v) {
            baseRequest
                .post('admin/don-hang/chi-tiet-don-hang', v)
                .then((res) => {
                    this.list_chi_tiet = res.data.data;
                })
        },
        changeThanhToan(v) {
            baseRequest
                .post('admin/don-hang/doi-trang-thai-thanh-toan', v)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadData();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
        changeDonHang(v) {
            baseRequest
                .post('admin/don-hang/doi-tinh-trang-don-hang', v)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadData();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
    },
}
</script>
<style></style>