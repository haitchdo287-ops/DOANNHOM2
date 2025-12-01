<template>
    <div class="row mb-4">
        <div class="card">
            <div class="card-body">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 product-grid ">
                    <template v-for="(value, index) in list">
                        <div class="col-lg-3 d-flex">
                            <router-link :to="'/chi-tiet-san-pham/' + value.id + '-' + value.slug_san_pham">
                                <div class="card ">
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
</template>
<script>
import baseRequest from '../../../core/baseRequest';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    props: ['thong_tin'],
    beforeRouteUpdate(to, from, next) {
        this.thong_tin = to.params.thong_tin;
        this.loadData();
        next();
    },
    data() {
        return {
            thong_tin   :   this.$route.params.thong_tin,
            list        :   [],
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
        loadData() {
            var payload = {
                'thong_tin_tim' : this.thong_tin
            };
            baseRequest
                .post('trang-chu/tim-kiem', payload)
                .then((res) => {
                    this.list = res.data.data;
                    // console.log(this.list);
                })
        }
    },
}   
</script>
<style>
    
</style>