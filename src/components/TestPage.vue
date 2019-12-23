<template>
  <div>
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
</template>

<script>
  export default {
    name: 'TestPage'
  }
</script>

<style>
  div {
    width: 500px;
  }
</style>
