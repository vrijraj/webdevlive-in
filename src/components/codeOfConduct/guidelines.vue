<template>
  <v-container fluid>
    <v-row justify="start" align="start">
      <v-col cols="12" md="10" lg="10" xl="9">
        <p class="google-font" :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-2'" style="font-weight: 350;font-size:200%">Code of Conduct</p>
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item,i) in data" :key="i">
            <v-expansion-panel-header class="google-font">{{item.name}}</v-expansion-panel-header>
            <v-expansion-panel-content :class="$vuetify.theme.dark == true?'grey darken-3':'grey lighten-4'" class="google-font py-3">{{item.des}}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels><br>
        <p
          class="mt-2 google-font text-mobile-center"
        >If you witness any attendee breaching the code of conduct, please reach out to us at <a href="mailto:webdevliveindia@gmail.com" :class="$vuetify.theme.dark == true ? 'white--text' : 'grey--text text--darken-4'"> webdevliveindia@gmail.com</a>.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CodeOfConduct from "@/assets/data/about.json";
export default {
  data() {
    return {
      data: CodeOfConduct.codeOfConduct
    };
  }
};
</script>
