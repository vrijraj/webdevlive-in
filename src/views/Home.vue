<template>
  <v-content class="ma-0">
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="10" cols="12">
          <ComingSoon />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'">
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="10" cols="12">
          <stats />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="">
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="10" cols="12">
          <eventContext />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'">
      <v-row justify="start" align="center">
        <v-col md="10" sm="11" xl="6" cols="12" offset-md="1" class="">
          <Overview />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="">
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="10" cols="12">
          <CodeOfConductSection />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="">
      <v-row align="center" justify="center">
        <v-col md="8" lg="7" xl="5" sm="11">
          <SocialShare/>
        </v-col>
      </v-row>
    </v-container>
    
  </v-content>
</template>

<script>
// @ is an alias to /src
import ComingSoon from "@/components/home/ComingSoon";
import stats from "@/components/home/stats"
import eventContext from "@/components/home/eventContext"
import CodeOfConductSection from "@/components/codeOfConduct/guidelines"
import SocialShare from "@/components/common/SocialShare"
import Overview from "../components/home/overview"
export default {
  name: "Home",
  components: {
    ComingSoon,
    stats,
    eventContext,
    CodeOfConductSection,
    SocialShare,
    Overview
  }
};
</script>
