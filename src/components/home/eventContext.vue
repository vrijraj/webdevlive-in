<template>
  <v-container fluid>
    <v-row
      align="center"
      justify="center"
      fill-height
      class="hidden-sm-and-down ma-2"
    >
      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="text-center pa-5">
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="pa-3"
            :elevation="hover ? 0 : 0" 
            :class="$vuetify.theme.dark ? 'grey darken-4' : ''"
          >
            <v-icon size="50px">mdi-microphone</v-icon>
            <p class="google-font my-0" style="font-size:150%;">
              Sessions
            </p>
            <br />
            <p class="google-font" style="font-size:100%;">
              A plethora of talks ranging from technologies like AMP, PWA, Developer Tools to Privacy and Security.
            </p>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="text-center pa-5">
        <v-hover v-slot:default="{ hover }">
          <v-card class="pa-3" :elevation="hover ? 0 : 0" :class="$vuetify.theme.dark ? 'grey darken-4' : ''">
            <v-icon size="50px">mdi-lightbulb-on</v-icon>
            <p class="google-font my-0" style="font-size:150%;">
              Ice Breakers
            </p>
            <br />
            <p class="google-font" style="font-size:100%;">
              A series of engaging online activities in between the sessions to
              combine learning and fun.
            </p>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="text-center pa-5">
        <v-hover v-slot:default="{ hover }">
          <v-card class="pa-3" :elevation="hover ? 0 : 0" :class="$vuetify.theme.dark ? 'grey darken-4' : ''">
            <v-icon size="50px">mdi-nfc-tap</v-icon>
            <p class="google-font my-0" style="font-size:150%;">
              AMAs
            </p>
            <br />
            <p class="google-font" style="font-size:100%;">
              'Ask Me Anything' sessions at the end of each day to answer the questions from the audience.
            </p>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      align="center"
      fill-height
      class="hidden-sm-and-up py-1"
    >
      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="px-5">
        <span
          class="google-font"
          style="font-size: 150%;"
          >Sessions</span
        >
        <p class="google-font mt-3" style="font-size:100%;">
          A plethora of talks ranging from technologies like AMP, PWA, Developer Tools to Privacy and Security.
        </p>
      </v-col>
      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="px-5 mt-2">
        <span
          class="google-font"
          style="font-size: 150%;"
          >Ice Breakers</span>
        <p class="google-font mt-3" style="font-size:100%;">
          A series of engaging online activities in between the sessions to
          combine learning and fun.
        </p>
      </v-col>
      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="px-5 mt-2">
        <span
          class="google-font"
          style="font-size: 150%;"
          >AMAs</span
        >
        <p class="google-font mt-3" style="font-size:100%;">
          'Ask Me Anything' sessions at the end of each day to answer the questions from the audience.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>


