<template>
  <v-content>
    <!-- :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'" -->
    <v-container
      fluid
      class="my-5"
    >
      <v-row justify="center" align="start" class="mb-5 pb-5">
        <v-col md="2" lg="2" sm="11" cols="12">
          <v-container>
            <v-row class>
              <v-col class="pb-0">
                <v-img :src="require('@/assets/img/webdevlogo.png')" style="" width="5vh"></v-img>
                <h1 class="google-font mb-5">FAQ</h1>
                <p class="google-font my-0">Need Answars?</p>
                <p class="google-font my-0">Find them here.</p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col md="8" lg="8" sm="11" cols="12">
          <v-expansion-panels accordion>
            <v-expansion-panel v-for="(item,i) in faqData" :key="i">
              <v-expansion-panel-header class="google-font">{{item.name}}</v-expansion-panel-header>
              <v-expansion-panel-content 
              :class="$vuetify.theme.dark == true?'grey darken-3':'grey lighten-4'"
              class="google-font py-3">
              {{item.des}}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-container fluid class="">
      <v-row align="center" justify="center">
        <v-col md="8" lg="7" xl="5" sm="11">
          <SocialShare/>
        </v-col>
      </v-row>
    </v-container> -->

    <!-- <v-container fluid class="my-0 py-3 pb-0" >
      <v-row justify="center" align="center">
        <v-col md="7" lg="7" sm="11" cols="12">
          <v-expansion-panels accordion>
            <v-expansion-panel v-for="(item,i) in faqData" :key="i">
              <v-expansion-panel-header class="google-font">{{item.name}}</v-expansion-panel-header>
              <v-expansion-panel-content 
              :class="$vuetify.theme.dark == true?'grey darken-3':'grey lighten-4'"
              class="google-font py-3">
              {{item.des}}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col md="3" lg="3" sm="11" cols="12"></v-col>
      </v-row>
    </v-container> -->
  </v-content>
</template>

<script>
import data from "@/assets/data/faq.json";
// import SocialShare from "@/components/common/SocialShare"
export default {
  components:{
    // SocialShare
  },
  data() {
    return {
      faqData: data
    };
  }
};
</script>
