<template>
  <div style="background-color: #fff;">
    <div class="center_div">
      <v-card
        class="mx-auto"
        max-width="550"
        outlined>
        <v-list-item>
          <v-list-item-content>
            <div class="overline mb-4">DIT UNIVERSITY</div>
            <v-list-item-title class="headline mb-1"><span style="font-family: Muli, sans-serif;">Patient Centric Smart HealthCare System</span></v-list-item-title>
            <v-list-item-subtitle><span style="font-family: Muli, sans-serif;">Final Report</span></v-list-item-subtitle>
            <hr/>
            <ul class="final_data">
              <li>Arrhythmia Check : <b> {{ arrhythmia_check }} </b> </li>
              <li>Arrhythmia Class and Graph :
                <line-chart
                  :chartdata="chardata"
                  :options="options"/>
                {{ arrhythmia_result }}
              </li>
            </ul>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
  import LineChart from './LineChart.vue';

  export default {
    name: 'Medical Diagnosis',

    components: { LineChart },

    data: () => ({
      arrhythmia_check : 'No Result',
      arrythmia_result : 'No Prediction',
      signal_label: [],
      chartdata: null,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        beginAtZero: true,
        elements: {
          point: {
            radius: 0
          }
        }
      }
    }),
    methods: {
      createLabels() {
        for(var i = 0; i < 1000; ++i) {
          this.signal_label.push(i);
        }
      },
      renderChart() {
        this.chartdata = {
          labels: this.signal_label,
          datasets: [{
            label: 'ECG Single Lead Reading',
            borderColor: '#F0134D',
            borderWidth: 1,
            pointBackgroundColor: '#F0134D',
            fill: false,
            data: this.ecg_signal.slice(0, 1000)
          }]
        }
      }
    }
  }
</script>

<style>
</style>
