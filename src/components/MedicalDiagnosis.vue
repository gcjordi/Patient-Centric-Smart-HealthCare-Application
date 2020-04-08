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
            <hr class="hr_line"/>
            <ul class="final_data">
              <li>Arrhythmia Check : <b> {{ arrhythmia_check }} </b> </li>
              <li>Arrhythmia Class and Graph :
                <line-chart
                  class="chart_arrhythmia"
                  v-if="fetched"
                  :chartdata="chartdata"
                  :options="options"/>
              </li>
            </ul>
            <h1> {{ arrhythmia_result }} </h1>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import LineChart from './LineChart.vue';

  export default {
    name: 'MedicalDiagnosis',

    components: { LineChart },

    data: () => ({
      arrhythmia_check : 'No Result',
      arrhythmia_result : 'No Prediction',
      signal_label: [],
      ecg_signal: [],
      chartdata: null,
      fetched: false,
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
      getAlldata() {
        axios.get('http://localhost:8000/pcshs_app/get_alldata')
          .then((response) => {
            console.log(response);
            this.arrhythmia_check = response.data.arrhythmia_check;
            this.arrhythmia_result = response.data.arrhythmia_result;
            this.ecg_signal = response.data.ecg_signal;
            this.createLabels();
            this.chartdata = {
              labels: this.signal_label,
              datasets: [{
                label: 'ECG Single Lead Reading',
                borderColor: '#F0134D',
                borderWidth: 1,
                pointBackgroundColor: '#F0134D',
                pointBorderColor: '#F0134D',
                fill: false,
                data: this.ecg_signal.slice(0, 1000)
              }]
            }
            this.fetched = true
          }).catch(function() {
            console.log('Error');
        });
      }
    },
    beforeMount() {
      this.getAlldata();
    }
  }
</script>

<style scoped>
.center_div {
  margin-top: 15px;
}
.hr_line {
  margin-top: 5px;
  margin-bottom: 5px;
}
.final_data li {
  list-style-type: none;
  margin-top: 10px;
}
.chart_arrhythmia {
  margin-top: 10px;
}
h1 {
  font-family: 'Muli', sans-serif;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
}
</style>
