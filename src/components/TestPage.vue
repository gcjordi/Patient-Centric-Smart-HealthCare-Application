<template>
  <div class="div_test_intro">
    <h1>Patient Centric Smart HealthCare System</h1>
    <ul>
      <li> Heart/Cardiovascular Disease Prediction </li>
      <li> Heart Arrhythmia Detection using Electrocardiogram Signals </li>
      <li> Medical Diagnosis Suggestions </li>
    </ul>
    <div class="cnt_button"><v-btn :to="`${'/test/heartdisease'}`" class="ma-2" tile outlined> START TEST </v-btn></div>
  </div>
</template>

<script>
  export default {
    name: 'TestPage',

    data: () => ({
    })
  }
</script>

<style scoped>
  .div_test_intro {
    background-color: #fff;
    height: 100%;
    width: 100%;
    text-align: center;
  }
  h1 {
    font-family: 'Muli', sans-serif;
    margin-top: 50px;
    text-align: center;
    font-size: 45px;
  }
  ul {
    font-family: 'Muli', sans-serif;
    margin-top: 100px;
    list-style-type: none;
    font-size: 17px;
    line-height: 4.5;
  }
  .cnt_button {
    text-align: center;
    margin-top: 100px;
  }

</style>
