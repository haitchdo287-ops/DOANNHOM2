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
                                <th>Giao Kho</th>
                                <th>Tình Trạng Đơn Hàng</th>
                                <th>Chi Tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle" v-for="(value, index) in list" :key="index">
                                <th>{{index + 1}}</th>
                                <td class="text-center">{{ value.ma_don_hang }}</td>
                                <td>{{ value.ten_nguoi_nhan }}</td>
                                <td class="text-center">{{ value.so_dien_thoai }}</td>
                                <td>{{ value.dia_chi_giao_hang }}</td>
                                <td class="text-end">{{ formatToVND(value.tong_tien_thanh_toan) }}</td>
                                <td class="text-center">
                                    <button v-if="value.is_giao_kho == 0" class="btn btn-danger" v-on:click="giaoKho(value)">Chưa Giao Kho</button>
                                    <button v-else class="btn btn-success">Đã Giao Kho</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-danger">Chưa Giao</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-primary" v-on:click="chi_tiet_don_hang = value" data-bs-toggle="modal" data-bs-target="#chiTietModal"><i class="fa-solid fa-circle-info"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal fade" id="chiTietModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Chi Tiết Đơn Hàng</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table class="table table-bordered">
                        <thead>
                            <tr class="text-center">
                                <th>Tên Sản Phẩm</th>
                                <th>Số Lượng</th>
                                <th>Đơn Giá</th>
                                <th>Thành Tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle">
                                <td >{{ chi_tiet_don_hang.ten_san_pham }}</td>
                                <td class="text-center">{{ chi_tiet_don_hang.so_luong }}</td>
                                <td class="text-end">{{ formatToVND(chi_tiet_don_hang.don_gia) }}</td>
                                <td class="text-end">{{ formatToVND(chi_tiet_don_hang.thanh_tien) }}</td>
                            </tr>
                        </tbody>
                    </table> 
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
            list                : [],
            chi_tiet_don_hang   : {}
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
                .get('dai-ly/data-don-hang')
                .then((res) => {
                    this.list = res.data.data;
                })
        },

        giaoKho(value) {
            baseRequest
                .post('dai-ly/xac-nhan-giao-kho', value)
                .then((res) => {
                    if (res.data.status) {
						toaster.success('Thông báo<br>' + res.data.message);
						this.loadData();
					} else {
						toaster.error('Thông báo<br>' + res.data.message);
					}
                })
        }
    },
}
</script>
<style>
    
</style>