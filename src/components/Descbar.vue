<template>
  <div>
    <section>
      <v-btn
        icon
        class="console_btn">
        <v-icon>mdi-console</v-icon>
      </v-btn>
      <div class="padded-multiline">
        <h1> {{ project_title }} </h1>
      </div>
      <h2> {{ project_madeby }} </h2>
      <h2> {{ project_guide }} </h2>
      <h3> {{ project_desc }} </h3>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Patient Centric Smart Healthcare System',

    data: () => ({
      project_title: 'Patient Centric Smart HealthCare System using Machine Learning Approach',
      project_madeby: 'Abhishek Kathayat, Shubham Guleria, and Vanshika Wadhwa',
      project_guide: 'Under the guidance of Dr. Srabanti Maji',
      project_desc: 'For partial fullfillment of degree of Bachelor in Computer Science and Engineering.'
    })
  };

</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  .padded-multiline {
    width: 700px;
    margin: 25px;
    line-height: 1.5;
  }
  .padded-multiline h1 {
    display: inline;
  }
  h1, h2, h3 {
    font-weight: 100;
  }
  h1 {
    font-family: 'Muli', sans-serif;
    font-size: 35px;
  }
  h2, h3 {
    font-family: 'Calibri', sans-serif;
    margin-left: 25px;
  }
  h2 {
    font-size: 25px;
  }
  h3 {
    margin-top: 20px;
    font-size: 20px;
  }
  .console_btn {
    float: right;
    margin-right: 50px;
  }


</style>
