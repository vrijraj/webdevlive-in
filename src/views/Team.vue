<template>
  <v-content class="">
    <v-container
      fluid
      :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'"
    >
      <v-row justify="center" align="center">
        <v-col md="10" lg="10" sm="11" cols="12">
          <v-container>
            <v-row class>
              <v-col class="pb-5">
                <h1 class="google-font mb-5">Our Team</h1>
                <br />
                <br />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid >
      <v-row justify="center" align="center" class="px-0">
        <v-col md="10" lg="10" sm="11" cols="12" class="card-top-margin">
          <v-container>
            <v-row class>
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="6"
                class="px-1"
                v-for="(item, index) in TeamData"
                :key="index"
              >
                <TeamMember :data="item" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import TeamMember from "@/components/team/TeamDetails";
import TeamData from "@/assets/data/team.json";
export default {
  name: "TeamPage",
  components: {
    TeamMember
  },
  data: () => ({
    TeamData: TeamData.sort((a, b) => a.name - b.name)
  }),
  mounted() {
    this.TeamData.sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  }
};
</script>

<style>
.card-top-margin {
  margin-top: -150px;
}
</style>