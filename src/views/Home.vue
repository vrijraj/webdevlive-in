<template>
  <v-content>
    <v-container>
      <v-row justify="center" align="center">
        <v-col md="11" cols="12">
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

    <v-container class="">
      <v-row justify="center" align="center">
        <v-col md="11" cols="12">
          <eventContext />
        </v-col>
      </v-row>
    </v-container>

    <v-container>
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
export default {
  name: "Home",
  components: {
    ComingSoon,
    stats: () => import("@/components/home/stats"),
    eventContext: () => import("@/components/home/eventContext"),
    CodeOfConductSection: () => import("@/components/codeOfConduct/guidelines")
  }
};
</script>
