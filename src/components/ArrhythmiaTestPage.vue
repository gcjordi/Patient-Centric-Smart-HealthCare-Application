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
        <v-btn v-on:click="uploadECGFiles()" class="ma-2" tile outlined>
         UPLOAD <v-icon right small>mdi-upload</v-icon>
       </v-btn>
     </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'ArrhythmiaTestPage',

    data: () => ({
      files: [],
      heading_page: 'Select ECG files for Arrhythmia detection :'
    }),

    methods: {
      uploadECGFiles() {
        let formData = new FormData();
        for(var i = 0; i < this.files.length; i++) {
          let file = this.files[i];
          formData.append('files[' + i + ']', file);
        }
        axios.post('/test/arrhythmia/ecgupload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function() {
          console.log('Files uploaded successfully!');
        })
        .catch(function() {
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
</style>
