<template>
	<div class="row">
		<div class="card">
			<div class="card-body">
				<div class="row">
					<div class="col-6">
						<div class="d-lg-flex align-items-center mb-4 gap-3">
							<div class="position-relative">
								<input type="text" class="form-control ps-5 radius-30" placeholder="Search Order"> <span
									class="position-absolute top-50 product-show translate-middle-y"><i
										class="bx bx-search"></i></span>
							</div>
						</div>
					</div>
					<div class="col-6">
						<div class="text-end">
							<input class="form-check-input me-3" type="checkbox" value="" aria-label="..."><b>Chọn Tất
								Cả (3)</b>
						</div>
					</div>
				</div>
				<div class="table-responsive">
					<table class="table mb-0">
						<thead class="table-light">
							<tr>
								<th></th>
								<th class="text-center text-nowrap">#</th>
								<th class="text-center text-nowrap">Hình Ảnh</th>
								<th class="text-nowrap">Sản Phẩm</th>
								<th class="text-nowrap">Đại Lý</th>
								<th class="text-center text-nowrap">Đơn Giá</th>
								<th class="text-center text-nowrap">Số Lượng</th>
								<th class="text-center text-nowrap">Thành Tiền</th>
								<th class="text-center text-nowrap">Ghi Chú</th>
								<th class="text-center text-nowrap">Actions</th>
							</tr>
						</thead>
						<tbody>
							<template v-for="(value, index) in list" :key="index">
								<tr>
									<td class="align-middle text-center">
										<input v-on:change="tinhTien()" v-model="value.chon_sp"
											class="form-check-input me-3" type="checkbox" value=""
											aria-label="...">
									</td>
									<td class="align-middle">
											<h6 class="mb-0 font-14">{{ index + 1 }}</h6>
									</td>
									<td class="text-wrap text-center align-middle">
										<img v-bind:src="value.hinh_anh" style="width: 50px; height: auto;" alt="">
									</td>
									<td class="text-wrap align-middle">{{ value.ten_san_pham }}</td>
									<td class="align-middle">{{ value.ho_va_ten }}</td>
									<td class="text-end align-middle">{{ formatToVND(value.don_gia) }}</td>
									<td style="width: 140px;" class="align-middle">
										<div class="input-group input-spinner d-flex justify-content-center flex-row" style="flex-wrap: nowrap;">
											<button v-on:click="value.so_luong--; updateGioHang(value)"
												class="btn btn-white" type="button" id="button-minus"> − </button>
											<input type="text" class="form-control text-center"
												v-model="value.so_luong" v-on:change="updateGioHang(value)">
											<button v-on:click="value.so_luong++; updateGioHang(value)"
												class="btn btn-white" type="button" id="button-plus"> + </button>
										</div>
									</td>
									<td class="text-end align-middle">{{ formatToVND(value.thanh_tien) }}</td>
									<td class="text-center align-middle">
										<input type="text" class="form-control" v-model="value.ghi_chu"
											v-on:change="updateGioHang(value)">
									</td>
									<td class="text-center align-middle">
										<button class="btn" v-on:click="xoaGioHang(value)"><i
												class="fa-solid fa-trash text-danger"></i></button>
									</td>
								</tr>
							</template>
						</tbody>
					</table>
				</div>
				<div class="row mt-4">
					<div class="col-6">
						<div class="ms-auto"><a href="javascript:;" class="btn btn-primary radius-30 mt-2 mt-lg-0">
								<i class="fa-solid fa-money-bill"></i>Tổng Tiền: {{ formatToVND(tong_tien) }}</a></div>
					</div>
					<div class="col-6 text-end text-nowrap">
						<div class="ms-auto" data-bs-toggle="modal" data-bs-target="#muaHangModal"><a
								class="btn btn-danger radius-30 mt-2 mt-lg-0"><i
									class="fa-solid fa-cart-shopping"></i>Mua Hàng</a>
						</div>
					</div>
				</div>
				<div class="modal fade" id="muaHangModal" tabindex="-1" aria-labelledby="exampleModalLabel"
					aria-hidden="true">
					<div class="modal-dialog modal-xl">
						<div class="modal-content">
							<div class="modal-header">
								<h1 class="modal-title fs-5" id="exampleModalLabel">Xác Nhận Mua Hàng</h1>
								<button type="button" class="btn-close" data-bs-dismiss="modal"
									aria-label="Close"></button>
							</div>
							<div class="modal-body">
								<table class="table mb-0 table table-bordered">
									<thead>
										<tr>
											<th class="text-center text-nowrap">#</th>
											<th class="text-center text-nowrap">Sản Phẩm</th>
											<th class="text-center text-nowrap">Đơn Giá</th>
											<th class="text-center text-nowrap">Số Lượng</th>
											<th class="text-center text-nowrap">Thành Tiền</th>
											<th class="text-center text-nowrap">Ghi Chú</th>
										</tr>
									</thead>
									<tbody>
										<template v-for="(value, index) in list" :key="index">
											<tr v-if="value.chon_sp == true">
												<td class="text-center align-middle">
													{{ index + 1 }}
												</td>
												<td class="align-middle">{{ value.ten_san_pham }}</td>
												<td class="text-end align-middle">{{ formatToVND(value.don_gia) }}</td>
												<td class="text-center align-middle">{{ value.so_luong }}</td>
												<td class="text-end align-middle">{{ formatToVND(value.thanh_tien) }}
												</td>
												<td class="text-center align-middle">
													{{ value.ghi_chu }}
												</td>
											</tr>
										</template>
										<tr>
											<th colspan="1" class="align-middle text-nowrap">Nơi giao hàng</th>
											<th colspan="3" class="align-middle">
												<select v-model="id_dia_chi" class="form-control">
													<template v-for="(value, index) in list_dia_chi" :key="index">
														<option v-bind:value="value.id">
															{{ value.ten_nguoi_nhan }} - {{ value.so_dien_thoai }} - {{
																value.dia_chi }}
														</option>
													</template>
												</select>
											</th>
											<th colspan="2" class="align-middle text-nowrap text-danger">
												Tổng Tiền: {{ formatToVND(tong_tien) }}
											</th>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
								<button v-on:click="muaHang()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác Nhận Mua
									Hàng</button>
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
import baseRequest from '../../../core/baseRequest';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
	data() {
		return {
			list: [],
			tong_tien: 0,
			list_dia_chi: [],
			id_dia_chi: 0,
		}
	},
	mounted() {
		this.loadDataGioHang();
		this.loadDataDiaChi();
	},
	methods: {
		formatToVND(number) {
			number = parseInt(number);
			return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
		},

		loadDataGioHang() {
			baseRequest
				.get('khach-hang/data-gio-hang')
				.then((res) => {
					this.list = res.data.data;
				})
		},

		xoaGioHang(value) {
			baseRequest
				.post('khach-hang/xoa-gio-hang', value)
				.then((res) => {
					if (res.data.status) {
						toaster.success('Thông báo<br>' + res.data.message);
						this.loadDataGioHang();
					} else {
						toaster.error('Thông báo<br>' + res.data.message);
					}
				})
		},

		updateGioHang(value) {
			baseRequest
				.post('khach-hang/update-gio-hang', value)
				.then((res) => {
					if (res.data.status) {
						toaster.success('Thông báo<br>' + res.data.message);
						this.loadDataGioHang();
					} else {
						toaster.error('Thông báo<br>' + res.data.message);
					}
				})
		},

		tinhTien() {
			let tmp = 0;
			this.list.forEach((value, index) => {
				if (value.chon_sp == true) {
					tmp = tmp + value.thanh_tien;
				}
			});
			this.tong_tien = tmp;
		},

		loadDataDiaChi() {
			baseRequest
				.get('khach-hang/dia-chi/data')
				.then((res) => {
					this.list_dia_chi = res.data.data;
					console.log(this.list_dia_chi);
				});
		},

		muaHang() {
			var list_chon = [];
			this.list.forEach((value, key) => {
				if (value.chon_sp && value.chon_sp == true) {
					list_chon.push(value);
				}
			});
			var payload = {
				'id_dia_chi': this.id_dia_chi,
				'ds_mua_sp': list_chon,
			};
			baseRequest
				.post('khach-hang/mua-hang', payload)
				.then((res) => {
					if (res.data.status) {
						toaster.success('Thông báo<br>' + res.data.message);
						this.tong_tien = 0,
						this.loadDataGioHang();
					} else {
						toaster.error('Thông báo<br>' + res.data.message);
					}
				});
		}
	}
}
</script>
<style></style>