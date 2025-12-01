<template>
    <div class="row">
        <div class="card">
            <div class="card-header ">  
                <div class="row">
                    <div class="col-lg-7">
                        <h5 class="mt-2">
                            Danh Sách Sản Phẩm Đại Lý
                        </h5>
                    </div>
                    <div class="col-md-5 text-end">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themmoimodal">Thêm Mới</button>
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
                                    <label class="form-label">Tên Sản Phẩm</label>
                                    <input v-on:keyup="createSlug()" v-model="create_san_pham.ten_san_pham" type="text" class="form-control">
                                </div>
                                <div class="col-6 mb-2">
                                    <label class="form-label">Slug Sản Phẩm</label>
                                    <input disabled v-model="create_san_pham.slug_san_pham" type="text" class="form-control">
                                </div>
                                <div class="col-6 mb-2">
                                    <label class="form-label">Hình Ảnh</label>
                                    <input v-model="create_san_pham.hinh_anh" type="email" class="form-control">
                                </div>
                                <div class="col-6 mb-2">
                                    <label class="form-label">Mô tả Ngắn</label>
                                    <input v-model="create_san_pham.mo_ta_ngan" type="text" class="form-control">
                                </div>
                                <div class="col-12 mb-2">
                                    <label class="form-label">Mô tả Chi Tiết</label>
                                    <textarea v-model="create_san_pham.mo_ta_chi_tiet" class="form-control"  cols="30" rows="5"></textarea>
                                </div>
                                <div class="col-6 mb-2">
                                    <label class="form-label">Giá Bán</label>
                                    <input v-model="create_san_pham.gia_ban" type="number" class="form-control">
                                </div>
                                <div class="col-6 mb-2">
                                    <label class="form-label">Giá Khuyến Mãi</label>
                                    <input v-model="create_san_pham.gia_khuyen_mai" type="number" class="form-control">
                                </div>
                                <div class="col-6 mb-2">
                                    <label class="form-label">Tình trạng</label>
                                    <select class="form-select" v-model="create_san_pham.tinh_trang">
                                        <option value="0">Tạm tắt</option>
                                        <option value="1">Hiển thị</option>
                                    </select>
                                </div>
                                <div class="col-6 mb-2">
                                    <label class="form-label">Danh Mục</label>
                                    <select class="form-select" v-model="create_san_pham.id_danh_muc">
                                        <option value="0">Root</option>
                                        <template v-for="(v, k) in list_danh_muc">
                                            <option v-bind:value="v.id">{{ v.ten_danh_muc }}</option>
                                        </template>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary"
                                data-bs-dismiss="modal">Close</button>
                            <button data-bs-dismiss="modal" type="button" class="btn btn-primary" v-on:click="createSanPham()">Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center align-middle">
                                <th>#</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Danh Mục</th>
                                <th>Hình Ảnh</th>
                                <th>Mô Tả</th>
                                <th>Số Lượng</th>
                                <th>Giá Bán</th>
                                <th>Giá Khuyến Mãi</th>
                                <th>Tình Trạng</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value, key)  in list_san_pham">
                                <tr class="align-middle">
                                    <th class="text-center">{{ key + 1 }}</th>
                                    <td>{{ value.ten_san_pham }}</td>
                                    <td>{{ value.id_danh_muc }}</td>
                                    <td class="text-center">
                                        <img v-bind:src="value.hinh_anh" alt="" class="user-img">
                                    </td>
                                    <td class="text-center">
                                        <i class="fa-solid fa-circle-info fa-2x text-info" data-bs-toggle="modal"
                                                data-bs-target="#moTaModal" v-on:click="Object.assign(update_san_pham, value);"></i>
                                    </td>
                                    <td class="text-center">{{ value.so_luong }}</td>
                                    <td class="text-end">{{ value.gia_ban }} đ</td>
                                    <td class="text-end">{{ value.gia_khuyen_mai }} đ</td>
                                    <td class="text-center">
                                        <button v-on:click="changeTrangThai(value)" v-if="value.tinh_trang == 1" class="btn btn-success">Hiển Thị</button>
                                        <button v-on:click="changeTrangThai(value)" v-else class="btn btn-danger">Tạm Tắt</button>
                                    </td>
                                    <td class="text-center">
                                        <button v-on:click="Object.assign(update_san_pham, value); is_view_update = 1" class="btn btn-primary me-2" data-bs-toggle="modal"
                                                data-bs-target="#updateModal">Cập Nhật</button>
                                            <button v-on:click="Object.assign(delete_san_pham, value)" class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal">Xóa</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <!-- Modal Delete -->
                <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xác Nhận Xóa Sản Phẩm
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                    <div class="d-flex align-items-center">
                                        <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                        </div>
                                        <div class="ms-3">
                                            <h6 class="mb-0 text-dark">Danger Alerts</h6>
                                            <div class="text-dark">
                                                Bạn có chắc chắn muốn xóa Sản Phẩm <b>{{ delete_san_pham.ten_san_pham }}</b> này không?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                                <button v-on:click="accpectDel()" data-bs-dismiss="modal" type="button" class="btn btn-danger">Xác Nhận</button>
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
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Sản Phẩm
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Tên Sản Phẩm</label>
                                        <input v-on:keyup="createSlugUpdate()" v-model="update_san_pham.ten_san_pham" type="text" class="form-control">
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Slug Sản Phẩm</label>
                                        <input disabled v-model="update_san_pham.slug_san_pham" type="text" class="form-control">
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Hình Ảnh</label>
                                        <input v-model="update_san_pham.hinh_anh" type="email" class="form-control">
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Mô tả Ngắn</label>
                                        <input v-model="update_san_pham.mo_ta_ngan" type="text" class="form-control">
                                    </div>
                                    <div class="col-12 mb-2">
                                        <label class="form-label">Mô tả Chi Tiết</label>
                                        <textarea v-model="update_san_pham.mo_ta_chi_tiet" class="form-control"  cols="30" rows="5"></textarea>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Giá Bán</label>
                                        <input v-model="update_san_pham.gia_ban" type="text" class="form-control">
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Giá Khuyến Mãi</label>
                                        <input v-model="update_san_pham.gia_khuyen_mai" type="text" class="form-control">
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Tình trạng</label>
                                        <select class="form-select" v-model="update_san_pham.tinh_trang">
                                            <option value="0">Tạm tắt</option>
                                            <option value="1">Hiển thị</option>
                                        </select>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Danh Mục</label>
                                        <select class="form-select" v-model="update_san_pham.id_danh_muc">
                                            <option value="0">Root</option>
                                            <template v-for="(v, k) in list_danh_muc">
                                                <option v-bind:value="v.id">{{ v.ten_danh_muc }}</option>
                                            </template>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                                <button v-if="is_view_update == 0" disabled data-bs-dismiss="modal" type="button" class="btn btn-danger">Xác Nhận</button>
                                <button v-else v-on:click="accpectUpate()" data-bs-dismiss="modal" type="button" class="btn btn-success">Xác Nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- modal Mô Tả -->
                <div class="modal fade" id="moTaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Mô Tả Sản Phẩm
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body justify-content">
                                <h5><b>Mô tả ngắn</b></h5>
                                <p>
                                    {{ update_san_pham.mo_ta_ngan }}
                                </p>
                                <hr>
                                <h5><b>Mô tả chi tiết</b></h5>
                                <p class="justify-content">
                                    {{ update_san_pham.mo_ta_chi_tiet }}
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
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
import baseRequest from '../../../core/baseRequest';


export default {
    data() {
        return {
            create_san_pham : {},
            list_san_pham   : [],
            list_danh_muc   : [],
            delete_san_pham : {},
            update_san_pham : {},
            is_view_update  : 0,
        }
    },
    mounted() {
        this.loadData();
        this.loadDanhMuc();
    },
    methods: {

        createSlugUpdate() {
            this.update_san_pham.slug_san_pham = this.toSlug(this.update_san_pham.ten_san_pham);
        },

        createSlug() {
            this.create_san_pham.slug_san_pham = this.toSlug(this.create_san_pham.ten_san_pham);
        },

        toSlug(str) {
            str = str.toLowerCase();
            str = str
                .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
                .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp
            str = str.replace(/[đĐ]/g, 'd');
            str = str.replace(/([^0-9a-z-\s])/g, '');
            str = str.replace(/(\s+)/g, '-');
            str = str.replace(/-+/g, '-');
            str = str.replace(/^-+|-+$/g, '');
            return str;
        },
        createSanPham() {
            baseRequest
                .post('dai-ly/san-pham/create', this.create_san_pham, 
                )
                .then((res) => {
                    if(res.data.status) {
                        toastr.success(res.data.message);
                        this.loadData();
                        this.create_san_pham = {}
                    }
                })
        },

        loadData() {
            baseRequest
                .get('dai-ly/san-pham/data')
                .then((res) => {
                    this.list_san_pham = res.data.data
                })
        },

        loadDanhMuc() {
            baseRequest
                .get('admin/danh-muc/data')
                .then((res) => {
                    this.list_danh_muc = res.data.data;
                });
        },

        accpectDel() {
            baseRequest
                .delete('dai-ly/san-pham/delete/' + this.delete_san_pham.id,{
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('chia_khoa_16')
                    }
                })
                .then((res) => {
                    if(res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadData();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
        accpectUpate() {
            baseRequest
                .put('dai-ly/san-pham/update', this.update_san_pham, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('chia_khoa_16')
                    }
                })
                .then((res) => {
                    if(res.data.status) {
                        toastr.success(res.data.message, "Thông báo");
                        this.loadData();
                    } else {
                        toastr.error(res.data.message, "Thông báo");
                    }
                });
        },
        changeTrangThai(value) {
            baseRequest
                .put('dai-ly/san-pham/change-status', value)
                .then((res) => {
                    if(res.data.status) {
                        toastr.success(res.data.message, "Thông báo");
                        this.loadData();
                    } else {
                        toastr.error(res.data.message, "Thông báo");
                    }
                });
        },
    },
}
</script>
<style>
    
</style>