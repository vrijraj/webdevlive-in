<template>
  <v-content>
    <v-container>
      <v-row>
        <v-col>
          <ComingSoon />
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col>
          <stats />
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col>
          <eventContext />
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col>
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
