<template>
  <div style="background-color: #fff;">
    <div class="right_div">
      <v-card
        class="mx-auto"
        max-width="550"
        outlined
        style="margin-bottom: 50px;">
        <v-list-item>
          <v-list-item-content>
            <div class="overline mb-4">DIT UNIVERSITY</div>
            <v-list-item-title class="headline mb-1"><span style="font-family: Muli, sans-serif;">Patient Centric Smart HealthCare System</span></v-list-item-title>
            <v-list-item-subtitle><span style="font-family: Muli, sans-serif;">Heart Disease Report</span></v-list-item-subtitle>
            <hr/>
            <ul class="list_data">
              <li>Age : <b> {{ age }} </b> </li>
              <li>Gender : <b> {{ gender }} </b> </li>
              <li>Chest Pain Type : <b> {{ chptype }} </b> </li>
              <li>Resting Blood Pressure (mm/Hg) : <b> {{ rbp }} mm/Hg </b> </li>
              <li>Serum Cholestrol Level (mg/dl) : <b> {{ scl }} mg/dl </b> </li>
              <li>Blood Sugar Level > 120 mg/dl : <b> {{ bsl }} </b> </li>
              <li>Resting Electrocardiographic Results : <b> {{ rer }} </b> </li>
              <li>Maximum Heart Rate Achieved : <b> {{ mhra }} </b> </li>
              <li>Exercise Induced Angina : <b> {{ eia }} </b> </li>
              <li>ST Depression Induced by Excercise Relative to rest : <b> {{ stdep }} </b> </li>
              <li>Slope of the peak exercise ST segment : <b> {{ slpst }} </b> </li>
              <li>Number of Major Vessel(0-3) colored by Fluroscopy : <b> {{ fluroves }} </b> </li>
              <li>Thal : <b> {{ thal }} </b> </li>
            </ul>
            <hr/>
            <div class="result_area">
              <span style="font-weight: 600;">PREDICTION RESULT  : </span>
              <span class="result_data"> {{ result }} </span>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-btn :to="`${'/test/arrhythmia'}`" style="float: right;" v-if="show_button" class="ma-2"
         tile outlined>
         CHECK ARRHYTHMIA <v-icon right small>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
    <div class="left_div">
      <h1>Enter the following data for Heart Disease Prediction : </h1>
      <v-form
        ref = "form"
        lazy-validation>
        <v-text-field
          v-model="age"
          label="Age"
          :rules="ageRules"
          required
          dense
          outlined></v-text-field>
        <v-select
          v-model="gender"
          :items="gender_values"
          :rules="[v => !!v ||'Required']"
          label="Gender"
          required
          dense
          outlined></v-select>
        <v-select
          v-model="chptype"
          :items="chest_pain_type"
          :rules="[v => !!v ||'Required']"
          label="Chest Pain Type"
          required
          dense
          outlined></v-select>
        <v-text-field
          v-model="rbp"
          label="Resting Blood Pressure (mm/Hg)"
          :rules="[v => !!v ||'Required']"
          required
          dense
          outlined></v-text-field>
        <v-text-field
          v-model="scl"
          :rules="[v => !!v ||'Required']"
          label="Serum Cholestrol Level (mg/dl)"
          required
          dense
          outlined></v-text-field>
        <v-select
          v-model="bsl"
          :items="bloodsugar"
          label="Is your blood sugar level > 120 mg/dl ?"
          :rules="[v => !!v ||'Required']"
          required
          dense
          outlined></v-select>
        <v-select
          v-model="rer"
          :items="restecgresults"
          label="Resting Electrocardiographic Results"
          :rules="[v => !!v ||'Required']"
          required
          dense
          outlined></v-select>
        <v-text-field
          v-model="mhra"
          :rules="[v => !!v ||'Required']"
          label="Maximum Heart Rate Achieved"
          required
          dense
          outlined></v-text-field>
        <v-select
          v-model="eia"
          :items="xangina"
          label="Exercise Induced Angina"
          :rules="[v => !!v ||'Required']"
          required
          dense
          outlined></v-select>
        <v-text-field
          v-model="stdep"
          :rules="[v => !!v ||'Required']"
          label="ST Depression Induced by exercise relative to rest"
          required
          dense
          outlined></v-text-field>
        <v-select
          v-model="slpst"
          :items="slpSTseg"
          label="Slope of the peak exercise ST segment"
          :rules="[v => !!v ||'Required']"
          required
          dense
          outlined></v-select>
        <v-select
          v-model="fluroves"
          :items="majvessel"
          label="Number of Major Vessels(0-3) colored by Fluroscopy"
          required
          dense
          outlined></v-select>
        <v-select
          v-model="thal"
          :items="thal_values"
          label="Thal"
          :rules="[v => !!v ||'Required']"
          required
          dense
          outlined></v-select>
        <v-btn
          class="mr-4"
          @click="submit">Submit</v-btn>
        <v-btn
          @click="clear">Clear</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  //import Cookies from 'js-cookie';
  //var csrftoken = Cookies.get('csrftoken');

  export default {
    name: 'HeartTestPage',

    data: () => ({
      //csrf_token: csrftoken,
      show_button: true,
      result_int: 1,
      result: 'Hard disease detected.',
      age: 0,
      ageRules: [
        v => !!v || 'Required',
        v => (v > 0 && v <= 120) || 'Age cannot be less than 0 or greater than 120'
      ],
      gender: '',
      gender_values: [
        'Male',
        'Female'
      ],
      chptype: '',
      chest_pain_type: [
        'Typical Angina',
        'Atypical Angina',
        'Non-Anginal Pain',
        'Asymptomatic'
      ],
      rbp: 0,
      scl: 0,
      bsl: '',
      bloodsugar: [
        'True',
        'False'
      ],
      rer: '',
      restecgresults: [
        'Normal',
        'Having ST-T wave abnormality',
        'Showing probable or definite left ventricular hypertropy'
      ],
      mhra: 0,
      eia: '',
      xangina: [
        'Yes',
        'No'
      ],
      stdep: 0.0,
      slpst: '',
      slpSTseg: [
        'Upsloping',
        'Flat',
        'Downsloping'
      ],
      fluroves: 0,
      majvessel: [
        0,
        1,
        2,
        3
      ],
      thal: '',
      thal_values: [
        'Normal',
        'Fixed Defect',
        'Reversable Defect'
      ]
    }),

    methods: {
      submit() {
        var heart_data = {
          Age_js: this.age,
          Gender_js: this.gender,
          chptype_js: this.chptype,
          rbp_js: this.rbp,
          scl_js: this.scl,
          bsl_js: this.bsl,
          rer_js: this.rer,
          mhra_js: this.mhra,
          eia_js: this.eia,
          stdep_js: this.stdep,
          slpst_js: this.slpst,
          fluroves_js: this.fluroves,
          thal_js: this.thal
        }
        axios.post('http://localhost:8000/pcshs_app/tests/heartdisease/dataupload', {
          body: heart_data,
        }).then(function(response) {
          console.log(response);
        }).catch(function(error) {
          console.log(error);
        });
      },

      clear() {
        this.age = 0,
        this.gender = '',
        this.chptype = '',
        this.scl = 0,
        this.rbp = 0,
        this.bsl = '',
        this.rer = '',
        this.mhra = 0,
        this.eia = '',
        this.stdep = 0.0,
        this.slpst = '',
        this.fluroves = 0,
        this.thal = ''
      }
    }
  }
</script>

<style scoped>
 .left_div {
   margin-left: 100px;
   margin-top: 30px;
   margin-bottom: 40px;
   width: 450px;
 }
 h1 {
   font-family: 'Muli', sans-serif;
   font-size: 20px;
   margin-bottom: 20px;
 }
 .right_div {
   float: right;
   margin-right: 100px;
   margin-top: 50px;
 }
 hr {
   margin-top: 10px;
   border-top: 1px solid #ccc;
 }
 .list_data {
   margin-top: 10px;
   list-style-type: circle;
   font-size: 15px;
   font-family: 'Muli', sans-serif;
   line-height: 2;
 }
 .result_area {
   font-family: 'Muli', sans-serif;
   margin: 20px;
   font-size: 18px;
 }
</style>
