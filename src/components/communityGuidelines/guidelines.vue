<template>
  <v-container>
    <v-row>
      <v-col>
        <p class="google-font" style="font-size:180%;color:indigo">Code of Conduct</p>
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item,i) in data" :key="i">
            <v-expansion-panel-header class="google-font">{{item.name}}</v-expansion-panel-header>
            <v-expansion-panel-content class="google-font grey lighten-4 py-3">{{item.des}}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels><br>
        <p
          class="mt-2 google-font text-mobile-center"
        >If you witness any attendee breaching the code of conduct, please reach out to us at <a href="mailto:webdevliveindia@gmail.com"> webdevliveindia@gmail.com</a>.</p>
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
