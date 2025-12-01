<template >
	<div class="card">
		<div class="row g-0">
			<div class="col-md-4 border-end">
				<img v-bind:src="san_pham_chi_tiet.hinh_anh"
					class="img-fluid" alt="...">
			</div>
			<div class="col-md-8">
				<div class="card-body">
					<h4 class="card-title">{{ san_pham_chi_tiet.ten_san_pham }}</h4>
					<div class="d-flex gap-3 py-3">
						<div class="cursor-pointer">
							<i class="bx bxs-star text-warning"></i>
							<i class="bx bxs-star text-warning"></i>
							<i class="bx bxs-star text-warning"></i>
							<i class="bx bxs-star text-warning"></i>
							<i class="bx bxs-star text-secondary"></i>
						</div>
						<div>142 reviews</div>
						<div class="text-success"><i class="bx bxs-cart-alt align-middle"></i> 134 orders</div>
					</div>
					<div class="mb-3">
						<p class="mb-0  fw-bold"><span
								class="me-2 text-decoration-line-through text-secondary">{{ san_pham_chi_tiet.gia_ban }}&nbsp;₫</span><span>{{ san_pham_chi_tiet.gia_khuyen_mai }}&nbsp;₫</span>
						</p>
					</div>
					<p class="card-text fs-6">{{ san_pham_chi_tiet.mo_ta_ngan }}</p>

					<hr>
					<div class="row row-cols-auto row-cols-1 row-cols-md-3 align-items-center">
						<div class="col">
							<label class="form-label">Quantity</label>
							<div class="input-group input-spinner">
								<button class="btn btn-white" type="button" id="button-plus"> + </button>
								<input type="text" class="form-control" value="1">
								<button class="btn btn-white" type="button" id="button-minus"> − </button>
							</div>
						</div>
						<div class="col">

							<div class="color-indigators d-flex align-items-center gap-2">
								<div class="color-indigator-item bg-primary"></div>
								<div class="color-indigator-item bg-danger"></div>
								<div class="color-indigator-item bg-success"></div>
								<div class="color-indigator-item bg-warning"></div>
							</div>
						</div>
					</div>
					<div class="d-flex gap-3 mt-3">
						<a href="#" class="btn btn-primary">Buy Now</a>
						<template v-if="is_login == true">
							<a  href="#" class="btn btn-outline-primary" v-on:click="themVaoGioHang()"><span class="text">Add to cart</span> <i
								class="bx bxs-cart-alt"></i></a>
						</template>
						<template v-else >
							<router-link to="/dang-nhap">
								<a href="/dang-nhap" class="btn btn-outline-primary"><span class="text">Add to cart</span> <i
								class="bx bxs-cart-alt"></i></a>
							</router-link>
						</template>
						
					</div>
				</div>
			</div>
		</div>
		<hr>
		<div class="card-body">
			<ul class="nav nav-tabs nav-primary mb-0" role="tablist">
				<li class="nav-item" role="presentation">
					<a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab" aria-selected="true">
						<div class="d-flex align-items-center">
							<div class="tab-icon"><i class="bx bx-comment-detail font-18 me-1"></i>
							</div>
							<div class="tab-title"> Mô Tả Sản Phẩm </div>
						</div>
					</a>
				</li>
				<li class="nav-item" role="presentation">
					<a class="nav-link" data-bs-toggle="tab" href="#primaryprofile" role="tab" aria-selected="false"
						tabindex="-1">
						<div class="d-flex align-items-center">
							<div class="tab-icon"><i class="bx bx-bookmark-alt font-18 me-1"></i>
							</div>
							<div class="tab-title">Thẻ</div>
						</div>
					</a>
				</li>
				<li class="nav-item" role="presentation">
					<a class="nav-link" data-bs-toggle="tab" href="#primarycontact" role="tab" aria-selected="false"
						tabindex="-1">
						<div class="d-flex align-items-center">
							<div class="tab-icon"><i class="bx bx-star font-18 me-1"></i>
							</div>
							<div class="tab-title">Đánh Giá</div>
						</div>
					</a>
				</li>
			</ul>
			<div class="tab-content pt-3">
				<div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
					<p>{{ san_pham_chi_tiet.mo_ta_chi_tiet }}</p>
				</div>
				<div class="tab-pane fade" id="primaryprofile" role="tabpanel">
					<p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation
						+1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table
						craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts
						ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.
					Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio
					cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson
					biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed
					echo park.</p>
			</div>
			<div class="tab-pane fade" id="primarycontact" role="tabpanel">
				<p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro
					fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer,
					iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
					Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles
					pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of
					them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
			</div>
		</div>
	</div>

</div></template>
<script>
import baseRequest from '../../../core/baseRequest';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
	props: ['id_san_pham', 'slug_san_pham'],
    data() {
        return {
            san_pham_chi_tiet    : {},
			id_san_pham			 : null,
			is_login			 : false
        }
    },
    mounted() {
		this.id_san_pham 	= this.$route.params.id_san_pham;
		this.loadDataSanPhamChiTiet();
		this.checkLogin();
    },
    methods: {
		checkLogin() {
			baseRequest
				.post('khach-hang/check-login')
				.then((res) => {
					if(res.data.status) {
						this.is_login = true;
					}
				})
		},

        formatToVND(number) {
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
        loadDataSanPhamChiTiet() {
            baseRequest
                .get('san-pham/' + this.id_san_pham)
                .then((res) => {
                    this.san_pham_chi_tiet = res.data.data
                })
        },

		themVaoGioHang() {
			var payload = {
				'id_san_pham' : this.id_san_pham
			};

			baseRequest
                .post('khach-hang/them-vao-gio-hang', payload)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                    } else {
						toaster.error('Thông báo<br>' + res.data.message);
					}
                })
		}

    },
}
</script>
<style ></style>