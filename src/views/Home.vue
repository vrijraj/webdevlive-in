<template>
  <v-content class="ma-0">
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="10" cols="12">
          <StartScreen />
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

    <v-container fluid class>
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="10" cols="12">
          <eventContext />
        </v-col>
      </v-row>
    </v-container>

    <v-container
      fluid
      :class="this.$vuetify.theme.dark == true?'grey darken-4 elevation-5':'grey lighten-4'"
      class="py-4 pb-5"
      style="min-height:330px"
    >
      <v-row justify="start" align="start">
        <v-col offset-md="1" md="8" offset-sm="1" offset-xl="1" sm="11" xl="8" cols="12">
          <eventOverview />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class>
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="10" cols="12">
          <CodeOfConductSection />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class>
      <v-row align="center" justify="center">
        <v-col md="8" lg="7" xl="5" sm="11">
          <SocialShare />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
import StartScreen from "@/components/home/StartScreen";
export default {
  name: "Home",
  components: {
    StartScreen,
    stats: () => import(/* webpackChunkName: "homeStats" */ "@/components/home/stats"),
    eventContext: () => import(/* webpackChunkName: "homeContext" */ "@/components/home/eventContext"),
    eventOverview: () => import(/* webpackChunkName: "homeOverview" */ "@/components/home/overview"),
    CodeOfConductSection: () => import(/* webpackChunkName: "homeGuidelines" */ "@/components/codeOfConduct/guidelines"),
    SocialShare: () => import(/* webpackChunkName: "homeSocialShare" */ "@/components/common/SocialShare")
  }
};
</script>
