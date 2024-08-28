<script>
import {Bar, Line} from "vue-chartjs"
import ChartDataLabaels from "chartjs-plugin-datalabels"
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
import {useChartsStore} from "@/stores/charts.js";
const chartsStore = useChartsStore()

ChartJS.register(LineElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, ChartDataLabaels)

const formatter = function (value, context) {
  let name = ""
  switch (context.dataset.place) {
    case 1: name = chartsStore.nameFirstPlace[context.dataIndex]; break;
    case 2: name = chartsStore.nameSecondPlace[context.dataIndex]; break;
    case 3: name = chartsStore.nameThirdPlace[context.dataIndex]; break;
  }
  console.log(name + " " + context.dataset.place)
  return name;
}

export default {
  name: "LineChart",
  components: {Bar, Line},
  data: function () {
    return {
      mixedData: {
        labels: chartsStore.years,
        datasets: [
          {
            type: "line",
            label: 'Dresden Mite',
            backgroundColor: 'white',
            borderColor: "white",
            tension: 0.4,
            data: chartsStore.dresdenMiddle,
            showLegend: true,
            datalabels: {
              display: false
            }
          },
          {
            type: "line",
            label: 'Dresden Nord',
            backgroundColor: 'yellow',
            borderColor: "yellow",
            tension: 0.4,
            data: chartsStore.dresdenNorth,
            showLegend: true,
            datalabels: {
              display: false
            }
          },
          {
            type: "bar",
            label: "Erster Platz",
            data: chartsStore.valuesFirstPlace,
            backgroundColor: "darkorange",
            showLegend: false,
            place: 1,
            datalabels: {
              rotation: "-90",
              formatter: formatter
            }
          },
          {
            type: "bar",
            label: "Zweiter Platz",
            data: chartsStore.valuesSecondPlace,
            backgroundColor: "red",
            showLegend: false,
            place: 2,
            datalabels: {
              rotation: "-90",
              formatter: formatter
            }
          },
          {
            type: "bar",
            label: "Dritter Platz",
            data: chartsStore.valuesThirdPlace,
            backgroundColor: "green",
            showLegend: false,
            place: 3,
            datalabels: {
              rotation: "-90",
              formatter: formatter
            }
          },
        ]
      },
      mixedOptions: {
        responsive: true,
        spanGaps: true,
        plugins: {
          datalabels: {
            color: "white"
          },
          legend: {
            labels: {
              filter: function (item, data) {
                return data.datasets[item.datasetIndex].showLegend
              }
            }
          },
        },
        title: {
          display: true,
          text: "Jugenddankopfer"
        },
      },
    }
  }
}
</script>

<template>
  <div class="about">
    <h1>Jugenddankopder im Verlauf der Jahre</h1>
    <Line id="lineChart" :options="mixedOptions" :data="mixedData"/>
    <p>42</p>
    <!--    <Bar id="chartID" :options="chartOptions" :data="chartData"/>-->
  </div>
</template>

<style>
#chartID {
}
</style>
