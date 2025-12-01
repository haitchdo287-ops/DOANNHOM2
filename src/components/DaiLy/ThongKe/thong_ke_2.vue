<template>
    <div class="row">
        <div class="col-lg-12 col-md-6">
            <div class="card">
                <div class="card-body">
                    <Doughnut
                        v-if="loaded == true"
                        id="my-chart-id"
                        :options="chartOptions"
                        :data="chartData"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)

import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
import baseRequest from '../../../core/baseRequest';

export default {
    name: 'BarChart',
    components: { Doughnut },
    data() {
        return {
            loaded      : false,
            chartData: {
                labels: [],
                datasets: [ 
                    { 
                        data: [],
                        backgroundColor: [
                            "#C0392B", "#1ABC9C", "#F1C40F", "#E67E22", "#8E44AD", "#2980B9", "#27AE60"
                        ],
                    } 
                ]
            },
            chartOptions: {
                responsive: true
            }
        }
    },
    mounted() {
        this.loaded = false;
        this.loadData();
    },
    methods: {
        loadData() {
            baseRequest
                .get('dai-ly/thong-ke/data-thong-ke-2')
                .then((res) => {
                    this.chartData.labels           = res.data.array_ten;
                    this.chartData.datasets[0].data = res.data.array_so_lieu;
                    this.loaded = true;
                })
        }
    },
}
</script>

<style>
    
</style>
