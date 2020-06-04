<template >
  <v-content class="ma-0">
    <!-- :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'" -->
    <!-- :style="{'background-image':'url('+require('@/assets/img/common/live.png')+')'}" -->
    <!--     :style="{'background-image':'url('+require('@/assets/img/common/live.png')+')'}" -->
    <v-container
      fluid
      :class="this.$vuetify.theme.dark == true?'grey darken-4 elevation-1':'white-border white '"
  
    >
      <v-row justify="center" align="center">
        <v-col md="10" lg="10" sm="11" cols="12" class="">
          <v-container class="my-2">
            <v-row justify="start" align="center" class="">
              <v-col md="12" class="text-center" >
                <v-img :src="require('@/assets/img/webdevlogo.png')" style="margin-left:auto;margin-right:auto" width="5vh"></v-img>
                <h1 class="google-font mb-0" style="font-size:180%">Check out our speaker lineup</h1>
                <p class="google-font" style="width:70%;margin-left:auto;margin-right:auto;font-size:110%">Whatever your challenge, see how these leaders on the front line of transformation, innovation, and exploration can help solve it with you. Get to know the inspiring minds right here.</p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="mb-5 pb-5">
      <v-row justify="center" align="center">
        <v-col md="10" lg="10" sm="11" cols="12">
          
          <v-container>
            <v-row class>
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="6"
                class="px-1"
                v-for="(item, index) in SpeakersData"
                :key="index"
              >
                <Speakers :data="item" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import Speakers from "@/components/speaker/SpeakerDetails";
import SpeakersData from "@/assets/data/speakers.json";
export default {
  name: "SpeakersPage",
  components: {
    Speakers
  },
  data: () => ({
    SpeakersData: SpeakersData.sort((a, b) => a.name - b.name)
  }),
  mounted() {
    this.SpeakersData.sort((a, b) => {
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

<style scoped>
.white-border{
  border-bottom: 1px solid #e0e0e0 !important;
}
/* @media only screen and (min-width: 1268px) {
  .desktop-bg{
    background: url('../assets/img/common/live3.png');
    background-position: right center;
    background-size: 800px;
    background-repeat: no-repeat;
    height: 40vh;
  }
} */
.card-top-margin {
  margin-top: -150px;
}
/* .bg-image{
  background-position: top right;
  background-size: 1000px;
  height: 40vh;
} */

</style>