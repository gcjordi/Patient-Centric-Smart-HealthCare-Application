<template>
  <div>
    <div class="right_div">
      <v-card
        class="mx-auto"
        max-width="550"
        outlined>
        <v-list-item>
          <v-list-item-content>
            <div class="overline mb-4">DIT UNIVERSITY</div>
            <v-list-item-title class="headline mb-1"><span style="font-family: Muli, sans-serif;">Patient Centric Smart HealthCare System</span></v-list-item-title>
            <v-list-item-subtitle><span style="font-family: Muli, sans-serif;">Heart Disease Report</span></v-list-item-subtitle>
            <hr/>
            <ul class="list_data">
              <li>Age : {{ age }} </li>
              <li>Gender : {{ gender }}</li>
              <li>Chest Pain Type : {{ chptype }}</li>
              <li>Resting Blood Pressure (mm/Hg) : {{ rbp }} </li>
              <li>Serum Cholestrol Level (mg/dl) : {{ scl }} </li>
              <li>Blood Sugar Level > 120 mg/dl : {{ bsl }} </li>
              <li>Resting Electrocardiographic Results : {{ rer }} </li>
              <li>Maximum Heart Rate Achieved : {{ mhra }} </li>
              <li>Exercise Induced Angina : {{ eia }} </li>
              <li>ST Depression Induced by Excercise Relative to rest : {{ stdep }} </li>
              <li>Slope of the peak exercise ST segment : {{ slpst }} </li>
              <li>Number of Major Vessel(0-3) colored by Fluroscopy : {{ fluroves }} </li>
              <li>Thal : {{ thal }}</li>
            </ul>
          </v-list-item-content>
        </v-list-item>
      </v-card>
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
    name: 'TestPage'
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
</style>
