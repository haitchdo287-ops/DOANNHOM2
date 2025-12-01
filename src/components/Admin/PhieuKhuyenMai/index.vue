<template>
    <div class="row">
        <div class="col-12">
            <div class="card  shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header mt-2">
                    <div class="row">
                        <div class="col-6">
                            <h5>Danh Sách Phiếu Khuyến Mãi</h5>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-outline-primary float-end" data-bs-toggle="modal"
                                data-bs-target="#themmoimodal">Thêm mới</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr class="text-center align-middle">
                                    <th class="align-middle text-nowrap text-center">#</th>
                                    <th class="align-middle text-nowrap text-center">Mã Khuyến Mãi</th>
                                    <th class="align-middle text-nowrap text-center">Số Tiền Giảm</th>
                                    <th class="align-middle text-nowrap text-center">Phần Trăm Giảm</th>
                                    <th class="align-middle text-nowrap text-center">Ngày Bắt Đầu</th>
                                    <th class="align-middle text-nowrap text-center">Ngày Kết Thúc</th>
                                    <th class="align-middle text-nowrap text-center">Tình trạng</th>
                                    <th class="align-middle text-nowrap text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(v, k) in list_phieu_khuyen_mai">
                                    <tr>
                                        <th class="align-middle text-nowrap text-center">{{ k + 1 }}</th>
                                        <td class="align-middle text-nowrap">{{ v.ma_khuyen_mai }}</td>
                                        <td class="align-middle text-nowrap text-end">{{ formatToVND(v.so_tien_giam) }}</td>
                                        <td class="align-middle text-nowrap text-center">{{ v.phan_tram_giam }} %</td>
                                        <td class="align-middle text-nowrap text-center">{{ v.ngay_bat_dau }}</td>
                                        <td class="align-middle text-nowrap text-center">{{ v.ngay_ket_thuc }}</td>
                                        <td class="align-middle text-nowrap text-center">
                                            <template v-if="v.tinh_trang == 0">
                                                <button v-on:click="changeTrangThai(v)" class="btn btn-warning">Tạm Tắt</button>
                                            </template>
                                            <template v-else>
                                                <button v-on:click="changeTrangThai(v)" class="btn btn-success">Hiển Thị</button>
                                            </template>
                                        </td>
                                        <td class="align-middle text-nowrap text-center">
                                            <button v-on:click="Object.assign(update_phieu_khuyen_mai, v)" class="btn btn-primary me-2" data-bs-toggle="modal"
                                                data-bs-target="#capNhatmodal">Cập Nhật</button>
                                            <button v-on:click="Object.assign(delete_phieu_khuyen_mai, v)" class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#xoaModal">Xóa</button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="themmoimodal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-6 mb-2">
                                <label class="form-label">Mã Khuyến Mãi</label>
                                <input v-model="create_phieu_khuyen_mai.ma_khuyen_mai" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Số Tiền Giảm (đ)</label>
                                <input v-model="create_phieu_khuyen_mai.so_tien_giam" type="number" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Phần Trăm Giảm (%)</label>
                                <input v-model="create_phieu_khuyen_mai.phan_tram_giam" type="number" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Ngày Bắt Đầu</label>
                                <input v-model="create_phieu_khuyen_mai.ngay_bat_dau" type="date" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Ngày Kết Thúc</label>
                                <input v-model="create_phieu_khuyen_mai.ngay_ket_thuc" type="date" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Tình trạng</label>
                                <select v-model="create_phieu_khuyen_mai.tinh_trang" class="form-select">
                                    <option value="0">Tạm tắt</option>
                                    <option value="1">Hiển thị</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                        <button v-on:click="createPhieuKhuyenMai" data-bs-dismiss="modal" type="button" class="btn btn-primary">Xác nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="capNhatmodal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-6 mb-2">
                                <label class="form-label">Mã Khuyến Mãi</label>
                                <input v-model="update_phieu_khuyen_mai.ma_khuyen_mai" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Số Tiền Giảm (đ)</label>
                                <input v-model="update_phieu_khuyen_mai.so_tien_giam" type="number" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Phần Trăm Giảm (%)</label>
                                <input v-model="update_phieu_khuyen_mai.phan_tram_giam" type="number" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Ngày Bắt Đầu</label>
                                <input v-model="update_phieu_khuyen_mai.ngay_bat_dau" type="date" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Ngày Kết Thúc</label>
                                <input v-model="update_phieu_khuyen_mai.ngay_ket_thuc" type="date" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Tình trạng</label>
                                <select v-model="update_phieu_khuyen_mai.tinh_trang" class="form-select">
                                    <option value="0">Tạm tắt</option>
                                    <option value="1">Hiển thị</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                        <button v-on:click="accpectUpdate()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Xác
                            nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa</h1>
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
                                    <h6 class="mb-0 text-dark">Warning</h6>
                                    <div class="text-dark">
                                        <p>Bạn có muốn xóa mã khuyến mãi <b>{{ delete_phieu_khuyen_mai.ma_khuyen_mai }}</b> này không?
                                        </p>
                                        <p>
                                            <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                        <button v-on:click="accpectDel()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
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
            create_phieu_khuyen_mai : {},
            list_phieu_khuyen_mai   : [],
            delete_phieu_khuyen_mai : {},
            update_phieu_khuyen_mai : {},
        }
    },
    mounted() {
        this.loadPhieuKhuyenMai();
    },
    methods: {
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
        loadPhieuKhuyenMai() {
            baseRequest
                .get('admin/phieu-khuyen-mai/data')
                .then((res) => {
                    this.list_phieu_khuyen_mai = res.data.data;
                });
        },
        createPhieuKhuyenMai() {
            baseRequest
                .post('admin/phieu-khuyen-mai/create', this.create_phieu_khuyen_mai)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadPhieuKhuyenMai();
                        this.create_phieu_khuyen_mai = {};
                    }
                });
        },
        accpectDel() {
            baseRequest
                .delete('admin/phieu-khuyen-mai/delete/' + this.delete_phieu_khuyen_mai.id)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadPhieuKhuyenMai();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
        accpectUpdate() {
            baseRequest
                .put('admin/phieu-khuyen-mai/update', this.update_phieu_khuyen_mai)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadPhieuKhuyenMai();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
        changeTrangThai(value) {
            baseRequest
                .put('admin/phieu-khuyen-mai/change-status', value)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadPhieuKhuyenMai();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
    }
}
</script>
<style>
    
</style>