<template>
    <div class="row">
        <div class="card">
            <div class="card-body">
                <Bar
                    v-if="loaded == true"
                    id="my-chart-id"
                    :options="chartOptions"
                    :data="chartData"
                />
            </div>
        </div>
    </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
import baseRequest from '../../../core/baseRequest';

export default {
    name: 'BarChart',
    components: { Bar },
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
                        borderRadius: 10,
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
                .get('dai-ly/thong-ke/data-thong-ke-1')
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
