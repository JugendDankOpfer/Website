<script>
import {Line} from "vue-chartjs"
import {Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

export default {
  name: "LineChart",
  components: {Line},
  data() {
    return {
      chartData: {
        labels: ["September", "Oktober", "November", "Dezember"],
        datasets: [
          {
            label: "Blasewitz",
            data: [21, 42, 133.7, 300],
            borderColor: ["gold"],
            backgroundColor: ["gold"],
            tension: 0.2
          },
          {
            label: "Weißter Hirsch",
            data: [25, 125, 200, 220],
            borderColor: ["red"],
            backgroundColor: ["red"],
            tension: 0.2
          },
          {
            label: "Laurentius",
            data: [50, 75, 123, 260],
            borderColor: ["lightblue"],
            backgroundColor: ["lightblue"],
            tension: 0.2
          }
        ]
      },
      chartOptions: {
        responsive: true,
        // maintainAspectRatio: false
        // plugins: {
        //   legend: {display: false},
        // },
        // title: {
        //   display: true,
        //   text: "Jugenddankopfer"
        // },
        // scales: {
        //   yAxis: [{
        //     ticks: {beginAtZero: true}
        //   }]
        // }
      }
    }
  }
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Line id="chartID" :options="chartOptions" :data="chartData"/>
  </div>
</template>

<style>
#chartID {
}
</style>
