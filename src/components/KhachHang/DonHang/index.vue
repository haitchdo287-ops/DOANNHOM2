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
                                    <template v-if="value.is_thanh_toan == 0">
                                        <button class="btn btn-danger">Chưa Thanh Toán</button>
                                    </template>
                                    <template v-else>
                                        <button class="btn btn-success">Đã Thanh Toán</button>
                                    </template>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-danger">Chưa Giao</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
            list : []
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
                .get('khach-hang/data-don-hang')
                .then((res) => {
                    this.list = res.data.data;
                })
        }
    },
}
</script>
<style>
    
</style>