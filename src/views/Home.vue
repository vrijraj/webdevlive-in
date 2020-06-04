<template>
  <v-content class="ma-0">
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="10" cols="12">
          <ComingSoon />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="grey lighten-4" style="" >
      <v-row justify="center" align="center">
        <v-col md="11" cols="12">
          <stats />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="">
      <v-row justify="center" align="center">
        <v-col md="11" cols="12">
          <eventContext />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row justify="start" align="center">
        <v-col md="11" cols="12">
          <CodeOfConductSection />
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
export default {
  name: "Home",
  components: {
    ComingSoon,
    stats,
    eventContext,
    CodeOfConductSection
  }
};
</script>
