<template>
    <div class="row mb-4">
        <div class="col-lg-8">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../../assets/slide/1.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../assets/slide/2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../assets/slide/3.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="row mb-2">
                <img src="../../../assets/slide/4.png" class="d-block w-100" alt="...">
            </div>
            <div class="row">
                <img src="../../../assets/slide/5.png" class="d-block w-100" alt="...">
            </div>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 row-cols-xl-5">
        <div class="col">
            <div class="card radius-10">
                <div class="card-body">
                    <div class="text-center">
                        <div class="widgets-icons rounded-circle mx-auto bg-light-primary text-primary mb-3"><i
                                class="fa-solid fa-satellite-dish"></i>
                        </div>
                        <h4 class="my-1">Sales</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card radius-10">
                <div class="card-body">
                    <div class="text-center">
                        <div class="widgets-icons rounded-circle mx-auto bg-light-danger text-danger mb-3"><i
                                class="fa-solid fa-ticket"></i>
                        </div>
                        <h4 class="my-1">Voucher</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card radius-10">
                <div class="card-body">
                    <div class="text-center">
                        <div class="widgets-icons rounded-circle mx-auto bg-light-info text-info mb-3"><i
                                class="fa-solid fa-globe"></i>
                        </div>
                        <h4 class="my-1">Hàng Quốc Tế</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card radius-10">
                <div class="card-body">
                    <div class="text-center">
                        <div class="widgets-icons rounded-circle mx-auto bg-light-success text-success mb-3"><i
                                class="fa-solid fa-warehouse"></i>
                        </div>
                        <h4 class="my-1">Xả Kho</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card radius-10">
                <div class="card-body">
                    <div class="text-center">
                        <div class="widgets-icons rounded-circle mx-auto bg-light-warning text-warning mb-3"><i
                                class="fa-brands fa-aws"></i>
                        </div>
                        <h4 class="my-1">Dịch Vụ</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row mb-4">
        <div class="card">
            <div class="card-header">
                <h4 class="text-danger"><b>Flash Sale <i class="fa-solid fa-bolt-lightning"></i></b></h4>
            </div>
            <div class="card-body">
                <div class="row row-cols-1 row-cols-lg-3">
                    <template v-for="(value, index) in list_flash_sale" :key="index">
                        <div class="col align-items-stretch mb-3">
                            <router-link :to="'/chi-tiet-san-pham/' + value.id + '-' + value.slug_san_pham">
                                <div class="card h-100">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img v-bind:src="value.hinh_anh" class="img-fluid" alt="...">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h6 class="card-title">{{ value.ten_san_pham }}</h6>
                                                <div class="cursor-pointer my-2">
                                                    <i class="bx bxs-star text-warning"></i>
                                                    <i class="bx bxs-star text-warning"></i>
                                                    <i class="bx bxs-star text-warning"></i>
                                                    <i class="bx bxs-star text-warning"></i>
                                                    <i class="bx bxs-star text-secondary"></i>
                                                </div>
                                                <div class="clearfix">
                                                    <p class="mb-0 float-start fw-bold"><span
                                                            class="me-2 text-decoration-line-through text-secondary">{{ formatToVND(value.gia_ban) }}</span><span>{{ formatToVND(value.gia_khuyen_mai) }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                            
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
    <div class="row mb-4">
        <div class="col-lg-4">
            <img src="../../../assets/banner/1.png" class="d-block w-100" alt="...">
        </div>
        <div class="col-lg-4">
            <img src="../../../assets/banner/2.png" class="d-block w-100" alt="...">
        </div>
        <div class="col-lg-4">
            <img src="../../../assets/banner/3.png" class="d-block w-100" alt="...">
        </div>
    </div>
    <div class="row mb-4">
        <div class="card">
            <div class="card-header">
                <h4 class="text-danger"><b>Các Sản Phẩm Giá Cao Chất Lượng</b></h4>
            </div>
            <div class="card-body">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 product-grid ">
                    <template v-for="(value, index) in list_ban_chay" :key="index">
                        <div class="col d-flex align-items-stretch mb-3">
                            <router-link :to="'/chi-tiet-san-pham/' + value.id + '-' + value.slug_san_pham">
                                <div class="card h-100">
                                    <img v-bind:src="value.hinh_anh" style="min-height: 315px;" class="card-img-top" alt="...">
                                    <div class="">
                                        <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-10%</span></div>
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-title cursor-pointer">{{ value.ten_san_pham }}</h6>
                                        <div class="clearfix">
                                            <p class="mb-0 float-start"><strong>{{ value.so_luong }}</strong> Sales</p>
                                            <p class="mb-0 float-end fw-bold"><span class="me-2 text-decoration-line-through text-secondary">{{ formatToVND(value.gia_ban) }}</span><span>{{ formatToVND(value.gia_khuyen_mai) }}</span></p>
                                        </div>
                                        <div class="d-flex align-items-center mt-3 fs-6">
                                        <div class="cursor-pointer">
                                            <i class='bx bxs-star text-warning'></i>
                                            <i class='bx bxs-star text-warning'></i>
                                            <i class='bx bxs-star text-warning'></i>
                                            <i class='bx bxs-star text-warning'></i>
                                            <i class='bx bxs-star text-secondary'></i>
                                        </div>	
                                        <p class="mb-0 ms-auto">4.2(182)</p>
                                        </div>
                                    </div>
                                 </div>
                            </router-link>
                           
                        </div>
                    </template>
					
				</div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="card">
            <div class="card-header">
                <h4 class="text-danger"><b>Các Sản Phẩm Mới </b></h4>
            </div>
            <div class="card-body">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 product-grid ">
                    <template v-for="(value, index) in list_san_pham_moi" :key="index">
                        <div class="col align-items-stretch mb-3">
                            <router-link :to="'/chi-tiet-san-pham/' + value.id + '-' + value.slug_san_pham">
                                <div class="card h-100">
                                    <img v-bind:src="value.hinh_anh" style="min-height: 315px;" class="card-img-top" alt="...">
                                    <div class="">
                                        <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-10%</span></div>
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-title cursor-pointer">{{ value.ten_san_pham }}</h6>
                                        <div class="clearfix">
                                            <p class="mb-0 float-start"><strong>{{ value.so_luong }}</strong> Sales</p>
                                            <p class="mb-0 float-end fw-bold"><span class="me-2 text-decoration-line-through text-secondary">{{ formatToVND(value.gia_ban) }}</span><span>{{ formatToVND(value.gia_khuyen_mai) }}</span></p>
                                        </div>
                                        <div class="d-flex align-items-center mt-3 fs-6">
                                        <div class="cursor-pointer">
                                            <i class='bx bxs-star text-warning'></i>
                                            <i class='bx bxs-star text-warning'></i>
                                            <i class='bx bxs-star text-warning'></i>
                                            <i class='bx bxs-star text-warning'></i>
                                            <i class='bx bxs-star text-secondary'></i>
                                        </div>	
                                        <p class="mb-0 ms-auto">4.2(182)</p>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                            
                        </div>
                    </template>
					
				</div>
            </div>
        </div>
        
    </div>

    <div class="row mb-4">
        <div class="card">
            <div class="card-header">
                <h4 class="text-danger"><b>Các Sản Có Số Lượng Nhiều Nhất </b></h4>
            </div>
            <div class="card-body">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 product-grid ">
                    <template v-for="(value, index) in list_san_pham_nhieu" :key="index">
                        <div class="col align-items-stretch mb-3">
                            <router-link :to="'/chi-tiet-san-pham/' + value.id + '-' + value.slug_san_pham">
                                <div class="card h-100">
                                    <img v-bind:src="value.hinh_anh" style="min-height: 315px; max-height: 315px" class="card-img-top" alt="...">
                                    <div class="">
                                        <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-10%</span></div>
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-title cursor-pointer">{{ value.ten_san_pham }}</h6>
                                        <div class="clearfix">
                                            <p class="mb-0 float-start"><strong>{{ value.so_luong }}</strong> Sales</p>
                                            <p class="mb-0 float-end fw-bold"><span class="me-2 text-decoration-line-through text-secondary">{{ formatToVND(value.gia_ban) }}</span><span>{{ formatToVND(value.gia_khuyen_mai) }}</span></p>
                                        </div>
                                        <div class="d-flex align-items-center mt-3 fs-6">
                                        <div class="cursor-pointer">
                                            <i class='bx bxs-star text-warning'></i>
                                            <i class='bx bxs-star text-warning'></i>
                                            <i class='bx bxs-star text-warning'></i>
                                            <i class='bx bxs-star text-warning'></i>
                                            <i class='bx bxs-star text-secondary'></i>
                                        </div>	
                                        <p class="mb-0 ms-auto">4.2(182)</p>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                            
                        </div>
                    </template>
					
				</div>
            </div>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            list_flash_sale     : [],
            list_ban_chay       : [],
            list_san_pham_moi   : [],
            list_san_pham_nhieu : [],
        }
    },
    mounted() {
        this.getDataHomePage();
    },
    methods: {
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },

        getDataHomePage() {
            axios
                .get('http://127.0.0.1:8000/api/trang-chu/data')
                .then((res) => {
                    this.list_flash_sale        = res.data.listFlashSale;
                    this.list_ban_chay          = res.data.listSanPhamBanChay;
                    this.list_san_pham_moi      = res.data.listSanPhamMoi;
                    this.list_san_pham_nhieu    = res.data.listSanPhamSoLuongNhieu;
                })
        }
    }
}
</script>
<style></style>
