<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(
      {
        labels: [
          "Заражений за всё время",
          "Выздоровлений",
          "Смертей"
        ],
        datasets: [
          {
            label: this.options.country,
            backgroundColor: "#f87979",
            data: [this.options.cases, this.options.recovered, this.options.deaths]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
}
</script>