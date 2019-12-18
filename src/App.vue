<template>
  <v-app>
    <v-content>
      <Descbar/>
    </v-content>
  </v-app>
</template>

<script>
import Descbar from './components/Descbar';

export default {
  name: 'App',

  components: {
    Descbar,
  },

  data: () => ({
    //
  }),
};
</script>
