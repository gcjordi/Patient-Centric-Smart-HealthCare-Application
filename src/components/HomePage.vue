<template>
  <div style="background-color: #fff;">
    <section>
      <v-btn
        icon
        class="console_btn"
        :to="`${'/starttest'}`">
        <v-icon>mdi-console</v-icon>
      </v-btn>
      <div class="padded-multiline">
        <h1> {{ project_title }} </h1>
      </div>
      <h2> {{ project_madeby }} </h2>
      <h2> {{ project_guide }} </h2>
      <h3> {{ project_desc }} </h3>
    </section>
    <section style="margin-top: 90px; margin-left: 80px; margin-right: 80px;">
      <div class="desc_sec_2">
        <h1> {{ project_sec2_head }} </h1>
        <p> {{ project_sec2_desc }} </p>
      </div>
      <div class="sec_prt1">
        <div class="sec_prt1_hd">
          <h2> {{ prt1_head }} </h2>
          <p> {{ prt1_desc }} </p>
        </div>
        <div class="sec_prt1_img">
          <img src="https://image.flaticon.com/icons/png/512/119/119058.png" height="250px" width="250px"/>
        </div>
      </div>
      <div class="sec_prt2" style="height: 250px">
        <div class="sec_prt2_img">
          <img src="https://image.flaticon.com/icons/png/512/2/2247.png" height="250px" width="250px"/>
        </div>
        <div class="sec_prt2_hd">
          <h2> {{ prt2_head }} </h2>
          <p> {{ prt2_desc }} </p>
        </div>
      </div>
      <div class="sec_prt3">
        <div class="sec_prt3_hd">
          <h2> {{ prt3_head }} </h2>
          <p> {{ prt3_desc }} </p>
        </div>
        <div class="sec_prt3_img">
          <img src="https://image.flaticon.com/icons/png/512/2117/premium/2117044.png" height="250px" width="250px"/>
        </div>
      </div>
    </section>
    <section class="bottom_content">
      <div class="dit_univ_data">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/DIT_University_Dehradun_Logo.jpg/220px-DIT_University_Dehradun_Logo.jpg"
             width="130px" height="100px"/>
        <h2> {{ dit_univ_loc }} </h2>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',

    data: () => ({
      project_title: 'Patient Centric Smart HealthCare System using Machine Learning Approach',
      project_madeby: 'Abhishek Kathayat, Shubham Guleria, and Vanshika Wadhwa',
      project_guide: 'Under the guidance of Dr. Srabanti Maji',
      project_desc: 'For partial fullfillment of degree of Bachelor in Computer Science and Engineering.',
      project_sec2_head: 'About the project',
      project_sec2_desc: 'We have developed a system which is capable of predicting whether a person is suffering from a ' +
                         'heart disease or not, which type of arrhythmia(irregular heart rhythms) condition does' +
                         ' the patient has, using ECG signals and suggesting an appropriate diagnosis based on inputs '+
                         'recieved from the person.',
      prt1_head: 'Heart Disease Prediction',
      prt1_desc: 'In this phase we have developed a machine learning model using feed forward neural networks, which is capable ' +
                 'of predicting whether a patient is suffering from a heart/cardiovascular disease or not using the inputs provided by the patient.',
      prt2_head: 'Arrhythmia Detection using Convolutional Neural Networks',
      prt2_desc: 'In this phase we have developed a machine learning model using Convolutional Neural Networks, which is capable of ' +
                 'predicting the type of arrhythmia(irregular heart rhythms) condition the patient has, using the ECG(Electrocardiogram) ' +
                 'signals as an input.',
      prt3_head: 'Medical Diagnosis Suggestion System',
      prt3_desc: 'In this phase we have focused on combining the work done in the first two phases (Heart Disease Prediction and Arrhythmia ' +
                 'Detection using Convolutional Neural Networks). We will also be looking to make our arrhythmia detection model more accurate ' +
                 'by training it over larger datasets if possible. We will also be looking to create a simple medical diagnosis suggestion ' + 
                 'system which is capable of suggesting an appropriate diagnosis depending upon the type of arrhythmia condition the patient has.',
      dit_univ_loc: 'Mussoorie-Diversion Road, Village Makkawala, Dehradun, Uttarakhand-248009, India'
    })
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  .padded-multiline {
    width: 700px;
    margin-left: 60px;
    margin-top: 50px;
    margin-bottom: 25px;
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
    margin-left: 60px;
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
    margin-right: 60px;
  }
  .desc_sec_2 h1 {
    text-align: center;
    font-size: 27px;
    margin-bottom: 20px;
  }
  .desc_sec_2 p {
    font-family: 'Calibri', sans-serif;
    font-size: 20px;
    font-weight: 200;
    line-height: 1.3;
    text-align: center;
  }
  .sec_prt1_hd h2, .sec_prt2_hd h2, .sec_prt3_hd h2 {
    font-family: 'Muli', sans-serif;
    font-size: 25px;
    margin-left: 0px;
  }
  .sec_prt1_hd p, .sec_prt2_hd p, .sec_prt3_hd p {
    font-family: 'Calibri', sans-serif;
    font-size: 20px;
    font-weight: 100;
    margin-top: 15px;
    text-align: justify;
  }
  .sec_prt1, .sec_prt2, .sec_prt3 {
    margin-top: 60px;
    position: relative;
  }
  .sec_prt1_hd, .sec_prt3_hd {
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 600px;
    right: 0;
  }
  .sec_prt2_hd {
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 600px;
    left: 0;
  }
  .sec_prt1_img, .sec_prt3_img {
    width: 500px;
    text-align: center;
  }
  .sec_prt2_img {
    text-align: center;
    width: 500px;
    float: right;
  }
  .bottom_content {
    margin-top: 100px;
    position: relative;
    height: 250px;
    width: 100%;
    border-top: 1px solid #ccc;
  }
  .bottom_content div {
    text-align: center;
  }
  .dit_univ_data {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translateY(-50%);
    transform: translate(-50%, -50%);
    width: 400px;
  }
  .dit_univ_data img {
    text-align: center;
  }
  .dit_univ_data h2 {
    margin: 0;
    font-size: 18px;
    text-align: center;
  }

</style>
