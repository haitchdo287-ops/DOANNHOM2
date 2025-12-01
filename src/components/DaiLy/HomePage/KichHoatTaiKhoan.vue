<template>
    
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
import baseRequest from '../../../core/baseRequest';
export default {
    props: ['hash_active'],
    mounted() {
        this.kichHoatTaiKhoan();
    },
    methods: {
        kichHoatTaiKhoan() {
            baseRequest
                .get('dai-ly/kich-hoat-tai-khoan/' + this.$route.params.hash_active)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                    } else {
                        toaster.error(res.data.message);
                    }
                })
        }
    },
}
</script>
<style>
    
</style>