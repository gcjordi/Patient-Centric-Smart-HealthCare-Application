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
        <v-btn class="ma-2" tile outlined>
         UPLOAD <v-icon right small>mdi-upload</v-icon>
       </v-btn>
     </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ArrhythmiaTestPage',

    data: () => ({
      heading_page: 'Select ECG files for Arrhythmia detection :'
    })
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
</style>
