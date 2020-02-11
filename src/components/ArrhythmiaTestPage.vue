<template>
  <div style="background-color: #fff; height: 100%; width: 100%;">
    <div class="file_form_holder">
      <h2> {{ heading_page }} </h2>
      <v-file-input
        v-model="files"
        color="deep-purple accent-4"
        counter
        label="File Input"
        multiple
        placeholder="Select your files"
        prepend-icon="mdi-paperclip"
        outlined
        :show-size="1000"
        style="margin-top: 30px;"
      >
        <template v-slot:selection="{ index, text }">
          <v-chip
            v-if="index < 2"
            color="deep-purple accent-4"
            dark label small>
            {{ text }}
          </v-chip>
          <span
            v-else-if="index == 2"
            class="overline grey--text text--darken-3 mx-2">
            +{{ files.length - 2 }} File(s)
          </span>
        </template>
      </v-file-input>
      <div style="margin-left: 20px;">
        <v-btn class="ma-2" v-on:click="submitFiles()" tile outlined>
         UPLOAD <v-icon right small>mdi-upload</v-icon>
       </v-btn>
     </div>
   </div>
   <v-dialog
     v-model="dialog"
     hide-overlay persistent
     width="300">
     <v-card
       color="#505050" dark>
       <div style="padding: 5px;">
         <v-card-text>
           <h1 style="font-size: 15px; font-family: Muli, sans-serif; margin-bottom: 20px;">Analysing Data...</h1>
           <v-progress-linear
             indeterminate color="white" class="mb-0">
           </v-progress-linear>
         </v-card-text>
       </div>
     </v-card>
   </v-dialog>
   <div class="resultgh_container">
     <h1 v-if="fetched"> Electrocardiographic Resultant Plot </h1>
     <div class="ecg_chart_container">
       <div>
         <line-chart
          style="position: relative;"
          v-if="fetched"
          :chartdata="chartdata"
          :options="options"/>
          <div class="result_container" v-if="fetched">
            <v-btn :to="`${'/test/medicaldiagnosis'}`" id="btn_next" class="ma-2" tile outlined>
               DIAGNOSIS REPORT <v-icon right small>mdi-arrow-right</v-icon>
            </v-btn>
            <h3> {{ final_result }} </h3>
          </div>
        </div>
     </div>
   </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import LineChart from './LineChart.vue';

  export default {
    name: 'ArrhythmiaTestPage',

    components: { LineChart },

    data: () => ({
      files: [],
      dialog: false,
      heading_page: 'Select ECG files for Arrhythmia detection :',
      ecg_signal: [],
      signal_label: [],
      final_result: 'No Prediction done',
      label_create: true,
      fetched: false,
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
        for(var i = 0; i < 5000; i++) {
          this.signal_label.push(i);
        }
      },
      submitFiles() {
        this.dialog = true;
        let formData = new FormData();
        for(var i = 0; i < this.files.length; i++) {
          let file = this.files[i];
          formData.append('files[' + i + ']', file);
        }
        axios.post('http://localhost:8000/pcshs_app/tests/arrhythmia/dataupload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then((response) => {
          console.log(response);
          this.ecg_signal = response.data.ecg_signal;
          if(this.label_create == true) {
            this.createLabels();
            this.label_create = false
          }
          this.dialog = false;
          this.chartdata = {
            labels: this.signal_label,
            datasets: [{
              label: 'ECG Single Lead Reading',
              borderColor: '#F0134D',
              borderWidth: 1,
              pointBackgroundColor: '#F0134D',
              pointBorderColor: '#F0134D',
              fill: false,
              data: this.ecg_signal.slice(0, 5000)
            }]
          }
          this.fetched = true;
        }).catch(function() {
          console.log('Files could not be uploaded successfully!');
        });
      }
    }
  }
</script>

<style>
  .file_form_holder {
    width: 40%;
    margin-top: 30px;
    margin-left: 20px;
  }
  .file_form_holder h2 {
    font-family: 'Muli', sans-serif;
    font-weight: 100;
    font-size: 20px;
    margin-left: 20px;
  }
  .resultgh_container {
    text-align: center;
    margin-top: 20px;
  }
  .resultgh_container h1 {
    font-size: 20px;
    font-family: 'Muli', sans-serif;
    font-weight: 100;
  }
  .ecg_chart_container {
    position: relative;
    margin-top: 20px;
  }
  .ecg_chart_container div {
    position: absolute;
    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 95%;
  }
  .result_container {
    position: relative;
    display: inline;
    margin-top: 40px;
    border-bottom: 40px solid #fff;
  }
  .result_container h3 {
    font-family: 'Muli', sans-serif;
    font-weight: 200;
    font-size: 20px;
    display: inline;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  #btn_next {
    float: right;
  }
</style>
