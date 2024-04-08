<script>
import {Bar} from "vue-chartjs"
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement)

export default {
  name: "LineChart",
  components: {Bar},
  data() {
    return {
      chartData: {
        labels: ["Blasewitz", "Laurentius", "Weißer Hirsch", "Mitarbeiter StaJuPfa"],
        datasets: [
          {
            label: "2024",
            data: [531, 479, 430, 242],
            backgroundColor: "green"
          }, {
            label: "2023",
            data: [511, 459, 410, 202],
            backgroundColor: "blue"
          },
        ],
      },
      chartOptions: {
        responsive: true,
        // maintainAspectRatio: false
        plugins: {
          legend: {display: true},
        },
        title: {
          display: true,
          text: "Jugenddankopfer"
        },
        scales: {
          yAxis: [{
            ticks: {beginAtZero: true}
          }]
        }
      }
    }
  }
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Bar id="chartID" :options="chartOptions" :data="chartData"/>
  </div>
</template>

<style>
#chartID {
}
</style>
