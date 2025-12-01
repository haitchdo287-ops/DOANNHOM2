<template>
    <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                           <h5>Thống Kê Hàng Trong Kho</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr class="text-center align-middle">
                                        <th>#</th>
                                        <th>Tên Sản Phẩm</th>
                                        <th>Tổng Nhập</th>
                                        <th>Tổng Bán</th>
                                        <th>Còn Lại</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in list">
                                        <tr class="align-middle">
                                            <th class="text-center">{{ index + 1 }}</th>
                                            <td>{{ value.ten_san_pham }}</td>
                                            <td class="text-center" style="width: 150px;">
                                                {{ value.tong_nhap }}
                                            </td>
                                            <td class="text-center" style="width: 150px;">
                                                0
                                            </td>
                                            <td class="text-center" style="width: 150px;">
                                                {{ value.tong_nhap }}
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
                list     : [],
            }
        },
        mounted() {
            this.loadData();
        },
        methods: {
            formatToVND(number) {
                return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
            },
            loadData() {
                baseRequest
                    .get('dai-ly/nhap-kho/thong-ke-kho')
                    .then((res) => {
                        this.list = res.data.data;
                    })
            },
            formattedDate(ngay) {
                return dayjs(ngay).format('DD/MM/YYYY');
            },
        }
    }
    </script>
    <style>
        
    </style>