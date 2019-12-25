<template>
  <div class="div_test_intro">
    <h1>Patient Centric Smart HealthCare System</h1>
    <ul>
      <li>
        <div class="list_content">
          <img src="https://image.flaticon.com/icons/png/512/913/premium/913424.png" height="30" width="30"/>
          <span> Heart/Cardiovascular Disease Prediction </span>
        </div>
      </li>
      <li>
        <div class="list_content">
          <img src="https://image.flaticon.com/icons/png/512/913/premium/913424.png" height="30" width="30"/>
          <span> Heart Arrhythmia Detection using Electrocardiogram Signals </span>
        </div>
      </li>
      <li>
        <div class="list_content">
          <img src="https://image.flaticon.com/icons/png/512/913/premium/913424.png" height="30" width="30"/>
          <span> Medical Diagnosis Suggestion System </span>
        </div>
      </li>
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
  }
  .list_content {
    position: relative;
  }
  .list_content img, .list_content span{
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translate(-50%, -50%);
  }
  .cnt_button {
    text-align: center;
    margin-top: 100px;
  }

</style>
