<template>
  <v-container fluid class>
    <v-row>
      <v-col>
        <h1
          :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-2'"
          class="google-font mb-0"
          style="font-size:180%"
        >Coming Soon...</h1>
        <p
          class="google-font"
          style="font-size:110%"
        >The team is working on finalizing the data. Please have a look after 28th June, 2020 for the updated information.</p>
        <!-- <v-img :src="require('@/assets/img/webdevlogo.png')" style="margin-left:auto;margin-right:auto" width="5vh"></v-img> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  components: {
    
  }
};
</script>