<template>
    <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
                <div class="col mx-auto">
                    <div class="my-4 text-center">
                        <img src="https://th.bing.com/th/id/OIP.VgZqLhaTAhEZ5p7ho5oPgQHaHa?rs=1&pid=ImgDetMain" width="180" alt="" />
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <div class="text-center">
                                    <h3 class="">ĐĂNG NHẬP NHÂN VIÊN</h3>
                                </div>
                                <div class="login-separater text-center mb-4">
                                    <hr />
                                </div>
                                <div class="form-body">
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <label class="form-label">Email</label>
                                            <div class="input-group">
                                                <div class="input-group-text bg-transparent">
                                                    <i class="fa-solid fa-envelope"></i>
                                                </div>
                                                <input v-model="tai_khoan.email" type="email" class="form-control border-end-0">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label">Password</label>
                                            <div class="input-group">
                                                <div class="input-group-text bg-transparent"><i
                                                        class="fa-solid fa-lock"></i></div>
                                                <input v-model="tai_khoan.password" type="password" class="form-control border-end-0">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button v-on:click="dangNhap()" type="button" class="btn btn-primary"><i
                                                        class="fa-solid fa-lock-open"></i>Đăng Nhập</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
import baseRequest from "../../../core/baseRequest";

export default {
    data() {
        return {
            tai_khoan: {},
        }
    },
    methods: {
        dangNhap() {
            axios
                .post('http://127.0.0.1:8000/api/admin/dang-nhap', this.tai_khoan)
                .then((res) => {
                    if(res.data.status == 1) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.$router.push('/admin/danh-muc')
                        // Lưu res.data.chia_khoa
                        localStorage.setItem('chia_khoa_16', res.data.chia_khoa);
                        localStorage.setItem('ten_admin', res.data.ten_admin);
                        
                    } else if(res.data.status == 0) {
                        toaster.error('Thông báo<br>' + res.data.message);
                    } else {
                        toastr.warning(res.data.message);
                    }
                });
        }
    },
}
</script>
<style></style>