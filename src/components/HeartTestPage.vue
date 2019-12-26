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
          :v-model="number"
          label="Age"
          :rules="ageRules"
          required
          dense
          outlined></v-text-field>
        <v-text-field
          v-model="select"
          :items="gender"
          :rules="[v => !!v ||'Gender is Required']"
          label="Gender"
          required
          dense
          outlined></v-text-field>
        <v-text-field
          v-model="select"
          :items="chest_pain_type"
          :rules="[v => !!v ||'Chest Pain Type is Required']"
          label="Chest Pain Type"
          required
          dense
          outlined></v-text-field>
        <v-text-field
          v-model="number"
          label="Resting Blood Pressure (mm/Hg)"
          :rules="bpRules"
          required
          dense
          outlined></v-text-field>
        <v-text-field
          v-model="number"
          :rules="cholRules"
          label="Serum Cholestrol Level (mg/dl)"
          required
          dense
          outlined></v-text-field>
        <v-text-field
          v-model="select"
          :items="bloodsugar"
          label="Is your blood sugar level > 120 mg/dl ?"
          required
          dense
          outlined></v-text-field>
        <v-text-field
          v-model="select"
          :items="restecgresults"
          label="Resting Electrocardiographic Results"
          required
          dense
          outlined></v-text-field>
        <v-text-field
          v-model="number"
          :rules="hrtrateRules"
          label="Maximum Heart Rate Achieved"
          required
          dense
          outlined></v-text-field>
        <v-text-field
          v-model="select"
          :items="xangina"
          label="Exercise Induced Angina"
          required
          dense
          outlined></v-text-field>
        <v-text-field
          v-model="number"
          :rules="stdepRules"
          label="ST Depression Induced by exercise relative to rest"
          required
          dense
          outlined></v-text-field>
        <v-text-field
          v-model="select"
          :items="slpSTsegRules"
          label="Slope of the peak exercise ST segment"
          required
          dense
          outlined></v-text-field>
        <v-text-field
          v-model="select"
          :items="majvessel"
          label="Number of Major Vessels(0-3) colored by Fluroscopy"
          required
          dense
          outlined></v-text-field>
        <v-text-field
          v-model="select"
          :items="thal"
          label="Thal"
          required
          dense
          outlined></v-text-field>
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
  export default {
    name: 'HeartTestPage',

    data: () => ({
      show_button: true,
      result_int: 1,
      result: 'Hard disease detected.',
      age: 45,
      gender: 'Male',
      chptype: 'Typical Angina',
      rbp: 124,
      scl: 209,
      bsl: 'True',
      rer: 'Normal',
      mhra: 342,
      eia: 'Yes',
      stdep: 2.4,
      slpst: 'Upsloping',
      fluroves: 2,
      thal: 'Fixed Defect'
    })
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
