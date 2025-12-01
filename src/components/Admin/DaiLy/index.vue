<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header">
                    <h5>Thêm Mới Đại Lý</h5>
                </div>
                <div class="card-body">
                    <div class="mt-2">
                        <label>Họ và tên</label>
                        <input v-model="create_dai_ly.ho_va_ten" type="text" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Email</label>
                        <input v-model="create_dai_ly.email" type="text" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Password</label>
                        <input v-model="create_dai_ly.password" type="tel" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Số điện thoại</label>
                        <input v-model="create_dai_ly.so_dien_thoai" type="tel" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Ngày sinh</label>
                        <input v-model="create_dai_ly.ngay_sinh" type="date" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Tên doanh nghiệp</label>
                        <input v-model="create_dai_ly.ten_doanh_nghiep" type="text" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Mã số thuế</label>
                        <input v-model="create_dai_ly.ma_so_thue" type="text" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Địa chỉ</label>
                        <input v-model="create_dai_ly.dia_chi_kinh_doanh" type="text" class="form-control mt-1">
                    </div>
                </div>
                <div class="text-end">
                    <button v-on:click="createDaiLy()" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card border-top border-0 border-4 border-primary shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header">
                    <h5>Danh Sách Đại Lý</h5>
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
                                        Ngày Sinh
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Tên Doanh Nghiệp
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Mã Số Thuế
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Địa Chỉ Kinh Doanh
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
                                <template v-for="(v, k) in list_dai_ly">
                                    <tr>
                                        <th class="align-middle text-nowrap text-center">{{ k + 1 }}</th>
                                        <td class="align-middle text-nowrap">{{ v.ho_va_ten }}</td>
                                        <td class="align-middle text-nowrap">{{ v.email }}</td>
                                        <td class="align-middle text-nowrap text-center">{{ v.so_dien_thoai }}</td>
                                        <td class="align-middle text-nowrap text-center" >{{ v.ngay_sinh }}</td>
                                        <td class="align-middle text-nowrap">{{ v.ten_doanh_nghiep }}</td>
                                        <td class="align-middle text-nowrap text-center">{{ v.ma_so_thue }}</td>
                                        <td class="align-middle text-nowrap">{{ v.dia_chi_kinh_doanh }}</td>
                                        <td class="align-middle text-nowrap text-center">
                                            <button v-on:click="changeTrangThai(v)" v-if="v.is_active == 1"
                                                class="btn btn-success">Hiển Thị</button>
                                            <button v-on:click="changeTrangThai(v)" v-else class="btn btn-warning">Tạm
                                                Tắt</button>
                                        </td>
                                        <td class="align-middle text-nowrap text-center">
                                            <button v-on:click="Object.assign(update_dai_ly, v)"
                                                class="btn btn-primary me-1" data-bs-toggle="modal"
                                                data-bs-target="#updateModal">Cập Nhật</button>
                                            <button v-on:click="Object.assign(delete_dai_ly, v)" class="btn btn-danger"
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
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xác Nhận Xóa đại lý
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
                                                                Bạn có chắc chắn muốn xóa đại lý <b>{{
                                                                    delete_dai_ly.ho_va_ten }}</b> này không?
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
                                                    <input v-model="update_dai_ly.ho_va_ten" type="text"
                                                        class="form-control mt-1">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Email</label>
                                                    <input v-model="update_dai_ly.email" type="text"
                                                        class="form-control mt-1">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Số điện thoại</label>
                                                    <input v-model="update_dai_ly.so_dien_thoai" type="tel"
                                                        class="form-control mt-1">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Ngày sinh</label>
                                                    <input v-model="update_dai_ly.ngay_sinh" type="date"
                                                        class="form-control mt-1">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Password</label>
                                                    <input v-model="update_dai_ly.password" type="text"
                                                        class="form-control mt-1">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Tên doanh nghiệp</label>
                                                    <input v-model="update_dai_ly.ten_doanh_nghiep" type="text"
                                                        class="form-control mt-1">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Mã số thuế</label>
                                                    <input v-model="update_dai_ly.ma_so_thue" type="text"
                                                        class="form-control mt-1">
                                                </div>
                                                <div class="mt-2">
                                                    <label>Địa chỉ</label>
                                                    <input v-model="update_dai_ly.dia_chi_kinh_doanh" type="text"
                                                        class="form-control mt-1">
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-on:click="accpectUpate()" data-bs-dismiss="modal"
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
            list_dai_ly: [],
            create_dai_ly: {},
            delete_dai_ly: {},
            update_dai_ly: {},
        }
    },
    mounted() {
        this.loadDaiLy();
    },
    methods: {
        loadDaiLy() {
            baseRequest
                .get('admin/dai-ly/data')
                .then((res) => {
                    this.list_dai_ly = res.data.data;
                });
        },
        createDaiLy() {
            baseRequest
                .post('admin/dai-ly/create', this.create_dai_ly)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDaiLy();
                        this.create_dai_ly = {};
                    }
                });
        },
        accpectDel() {
            baseRequest
                .delete('admin/dai-ly/delete/' + this.delete_dai_ly.id)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDaiLy();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
        accpectUpate() {
            baseRequest
                .put('admin/dai-ly/update', this.update_dai_ly)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDaiLy();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
        changeTrangThai(value) {
            baseRequest
                .put('admin/dai-ly/change-status', value)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDaiLy();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
    },
}
</script>
<style></style>