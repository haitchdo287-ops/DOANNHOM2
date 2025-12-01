<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header">
                    <h5>Thêm Mới Nhân Viên</h5>
                </div>
                <div class="card-body">
                    <div class="mt-2">
                        <label>Họ và tên</label>
                        <input v-model="create_nhan_vien.ho_va_ten" type="text" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Email</label>
                        <input v-model="create_nhan_vien.email" type="text" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Password</label>
                        <input v-model="create_nhan_vien.password" type="tel" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Số điện thoại</label>
                        <input v-model="create_nhan_vien.so_dien_thoai" type="tel" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Địa chỉ</label>
                        <input v-model="create_nhan_vien.dia_chi" type="text" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Tình Trạng</label>
                        <select name="" id="" class="form-control mt-1" v-model="create_nhan_vien.tinh_trang">
                            <option v-bind:value="1">Hiển Thị</option>
                            <option v-bind:value="0">Tạm Tắt</option>
                        </select>
                    </div>
                    <div class="mt-2">
                        <label>Chức Vụ</label>
                        <select name="" id="" class="form-control mt-1" v-model="create_nhan_vien.id_quyen">
                            <template v-for="(v, k) in list_id_quyen" :key="k">
                                <option v-bind:value="v.id">{{ v.ten_quyen }}</option>
                            </template>
                        </select>
                    </div>
                </div>
                <div class="text-end">
                    <button v-on:click="createNhanVien()" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card border-top border-0 border-4 border-primary shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header">
                    <h5>Danh Sách Nhân Viên</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">
                                        #
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Họ và Tên
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Email
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Số Điện Thoại
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Địa Chỉ
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Tình Trạng
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(v, k) in list_nhan_vien">
                                    <tr>
                                        <th class="align-middle text-nowrap text-center">{{ k + 1 }}</th>
                                        <td class="align-middle text-nowrap">{{ v.ho_va_ten }}</td>
                                        <td class="align-middle text-nowrap">{{ v.email }}</td>
                                        <td class="align-middle text-nowrap text-center">{{ v.so_dien_thoai }}</td>
                                        <td class="align-middle text-nowrap">{{ v.dia_chi }}</td>
                                        <td class="align-middle text-nowrap text-center">
                                            <button v-on:click="changeTrangThai(v)" v-if="v.tinh_trang == 1"
                                                class="btn btn-success">Hiển Thị</button>
                                            <button v-on:click="changeTrangThai(v)" v-else class="btn btn-warning">Tạm
                                                Tắt</button>
                                        </td>
                                        <td class="align-middle text-nowrap text-center">
                                            <button v-on:click="Object.assign(update_nhan_vien, v); is_view_update = 1"
                                                class="btn btn-primary me-1" data-bs-toggle="modal"
                                                data-bs-target="#updateModal">Cập Nhật</button>
                                            <button v-on:click="Object.assign(delete_nhan_vien, v)" class="btn btn-danger"
                                                data-bs-toggle="modal" data-bs-target="#deleteModal">Xóa</button>
                                        </td>
                                    </tr>
                                </template>
                                <!-- Modal Delete -->
                                <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xác Nhận Xóa Nhân Viên
                                                </h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div
                                                    class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                                    <div class="d-flex align-items-center">
                                                        <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                                        </div>
                                                        <div class="ms-3">
                                                            <h6 class="mb-0 text-dark">Danger Alerts</h6>
                                                            <div class="text-dark">
                                                                Bạn có chắc chắn muốn xóa nhân viên <b>{{
                                                                    delete_nhan_vien.ho_va_ten }}</b> này không?
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-on:click="accpectDel()" data-bs-dismiss="modal" type="button"
                                                    class="btn btn-danger">Xác Nhận</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Modal Update -->
                                <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật đại lý
                                                </h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="mt-2">
                                                    <label>Họ và tên</label>
                                                    <input v-model="update_nhan_vien.ho_va_ten" type="text"
                                                        class="form-control mt-1">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Email</label>
                                                    <input v-model="update_nhan_vien.email" type="text"
                                                        class="form-control mt-1">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Số điện thoại</label>
                                                    <input v-model="update_nhan_vien.so_dien_thoai" type="tel"
                                                        class="form-control mt-1">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Địa chỉ</label>
                                                    <input v-model="update_nhan_vien.dia_chi" type="text"
                                                        class="form-control mt-1">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Tình Trạng</label>
                                                    <select name="" id="" class="form-control mt-1" v-model="update_nhan_vien.tinh_trang">
                                                        <option v-bind:value="1">Hiển Thị</option>
                                                        <option v-bind:value="0">Tạm Tắt</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-if="is_view_update == 0" disabled data-bs-dismiss="modal"
                                                    type="button" class="btn btn-danger">Xác Nhận</button>
                                                <button v-else v-on:click="accpectUpate()" data-bs-dismiss="modal"
                                                    type="button" class="btn btn-success">Xác Nhận</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
import axios from 'axios';
import baseRequest from "../../../core/baseRequest";
export default {
    data() {
        return {
            list_nhan_vien: [],
            create_nhan_vien: {},
            delete_nhan_vien: {},
            update_nhan_vien: {},
            list_id_quyen   : [],
        }
    },
    mounted() {
        this.loadNhanVien();
        this.loadPhanQuyen();
    },
    methods: {
        loadNhanVien() {
            baseRequest
                .get('admin/nhan-vien/data')
                .then((res) => {
                    this.list_nhan_vien = res.data.data;
                });
        },
        createNhanVien() {
            baseRequest
                .post('admin/nhan-vien/create', this.create_nhan_vien)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadNhanVien();
                        this.create_nhan_vien = {};
                    }
                });
        },
        accpectDel() {
            baseRequest
                .delete('admin/nhan-vien/delete/' + this.delete_nhan_vien.id)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadNhanVien();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
        accpectUpate() {
            baseRequest
                .put('admin/nhan-vien/update', this.update_nhan_vien)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadNhanVien();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
        changeTrangThai(value) {
            baseRequest
                .put('admin/nhan-vien/change-status', value)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadNhanVien();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
        loadPhanQuyen() {
            baseRequest
                .get('admin/phan-quyen/data')
                .then((res) => {
                    this.list_id_quyen = res.data.data;
                });
        },
    },
}
</script>
<style></style>