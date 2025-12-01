<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6">
                            Danh Sách Quyền
                        </div>
                        <div class="col-lg-6 text-end">
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themMoiModal">Thêm
                                Quyền</button>
                        </div>
                        <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Quyền</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="col-12 mb-2">
                                            <label class="form-label">Tên Quyền</label>
                                            <input v-model="create_ten_quyen.ten_quyen" type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button v-on:click="createPhanQuyen()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Tạo
                                            Mới</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="text-center align-middle">
                                <tr>
                                    <th>#</th>
                                    <th>Tên Quyền</th>
                                    <th>Cấp Quyền</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(v, k) in listTenQuyen" :key="k" class="align-middle">
                                    <th class="text-center">{{ k + 1 }}</th>
                                    <td>{{ v.ten_quyen }}</td>
                                    <td class="text-center">
                                        <button v-on:click="Object.assign(chucVu, v), loadChiTietQuyen()" class="btn btn-info text-white" >Phân
                                            Quyền</button>
                                    </td>
                                    <td class="text-center">
                                        <i v-on:click="Object.assign(update_ten_quyen, v)" class="fa-solid fa-square-pen fa-3x text-primary me-2" data-bs-toggle="modal"
                                            data-bs-target="#updateModal"></i>
                                        <i v-on:click="Object.assign(delete_ten_quyen, v)" class="fa-solid fa-trash fa-3x text-danger" data-bs-toggle="modal"
                                            data-bs-target="#xoaModal"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Quyền</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="col-12 mb-2">
                                        <label class="form-label">Tên Quyền</label>
                                        <input v-model="update_ten_quyen.ten_quyen" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="accpectUpate()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác Nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Quyền</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                        <div class="d-flex align-items-center">
                                            <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                            </div>
                                            <div class="ms-3">
                                                <h6 class="mb-0 text-dark">Warning</h6>
                                                <div class="text-dark">
                                                    <p>Bạn có muốn xóa quyền <b>{{ delete_ten_quyen.ten_quyen }}</b> này không?
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
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="accpectDel()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    Danh Sách Chức Năng
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr class="text-center text-nowrap align-middle">
                                        <th>#</th>
                                        <th>Tên Chức Năng</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(v, k) in listChucNang" :key="k" class="align-middle">
                                        <th class="text-center">{{ k + 1 }}</th>
                                        <td>{{ v.ten_chuc_nang }}</td>
                                        <td class="text-center">
                                            <button v-on:click="capQuyen(v.id), loadChiTietQuyen()" class="btn btn-primary" >Cấp
                                                Quyền</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    Đang Phân Quyền Cho <b class="text-danger"> {{ chucVu.ten_quyen }}</b>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr class="text-center text-nowrap align-middle">
                                        <th>#</th>
                                        <th>Tên Quyền</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(v, k) in listChucNangQuyen" :key="k" class="align-middle">
                                        <th class="text-center">{{ k + 1 }}</th>
                                        <td>{{ v.ten_chuc_nang }}</td>
                                        <td class="text-center">
                                            <button v-on:click="xoaPhanQuyen(v)" class="btn btn-danger">Xoá</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import baseRequest from '../../../core/baseRequest'
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            listChucNang        : [],
            listChucVu          : [],
            listChucNangQuyen   : [],
            chucVu              : {}, 
            listTenQuyen        : [],
            create_ten_quyen    : {},
            delete_ten_quyen    : {},
            update_ten_quyen    : {},
        }
    },
    mounted() {
        this.loadPhanQuyen();
        this.loadChucNang();
    },
    methods: {
        loadChucNang() {
            baseRequest
                .get('admin/chuc-nang/data')
                .then((res) => {
                    this.listChucNang = res.data.data;
                });
        },
        loadPhanQuyen() {
            baseRequest
                .get('admin/phan-quyen/data')
                .then((res) => {
                    this.listTenQuyen = res.data.data;
                });
        },
        createPhanQuyen() {
            baseRequest
                .post('admin/phan-quyen/create', this.create_ten_quyen)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadPhanQuyen();
                        this.create_ten_quyen = {};
                    }
                });
        },
        accpectDel() {
            baseRequest
                .delete('admin/phan-quyen/delete/' + this.delete_ten_quyen.id)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadPhanQuyen();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
        accpectUpate() {
            baseRequest
                .put('admin/phan-quyen/update', this.update_ten_quyen)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadPhanQuyen();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
        capQuyen(id_chuc_nang) {
            var payload = {
                'id_chuc_nang' : id_chuc_nang,
                'id_quyen'     : this.chucVu.id 
            }
            baseRequest
                .post('admin/chi-tiet-phan-quyen/create', payload)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadPhanQuyen();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
        loadChiTietQuyen() {
            baseRequest
                .get('admin/chuc-nang-theo-quyen/' + this.chucVu.id)
                .then((res) => {
                    this.listChucNangQuyen = res.data.data;
                });
        },
        xoaPhanQuyen(payload) {
            baseRequest
                .post('admin/chi-tiet-phan-quyen/delete', payload)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadChiTietQuyen();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        }
    },
}
</script>
<style></style>