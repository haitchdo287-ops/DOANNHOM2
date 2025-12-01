<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                       <h5> Danh Sách Nhập Kho</h5>
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
                                    <th>Ngày Nhập</th>
                                    <th>Ghi Chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in list_danh_sach_nhap_kho">
                                    <tr class="align-middle">
                                        <th class="text-center">{{ index + 1 }}</th>
                                        <td>{{ value.abcd }}</td>
                                        <td class="text-center" style="width: 150px;">
                                            {{ value.so_luong }}
                                        </td>
                                        <td class="text-end" style="width: 150px;">
                                            {{ formatToVND(value.don_gia)}}
                                        </td>
                                        <td class="text-end" >
                                            {{ formatToVND(value.thanh_tien) }}
                                        </td>
                                        <td class="text-center" >
                                            {{ formattedDate(value.updated_at) }}
                                        </td>
                                        <td>
                                            {{ value.ghi_chu }}
                                        </td>
                                       
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import dayjs from 'dayjs';
import baseRequest from '../../../core/baseRequest';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            list_danh_sach_nhap_kho      : [],
        }
    },
    mounted() {
        this.loadDataSanhSachNhapKho();
    },
    methods: {
        formatToVND(number) {
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
        loadDataSanhSachNhapKho() {
            baseRequest
                .get('dai-ly/nhap-kho/danh-sach-nhap-kho')
                .then((res) => {
                    this.list_danh_sach_nhap_kho = res.data.data;
                })
        },
        formattedDate(ngay) {
            return dayjs(ngay).format('DD/MM/YYYY');
        },
    }
}
</script>
<style></style>