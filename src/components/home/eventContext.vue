<template>
  <v-container fluid>
    <v-row
      align="center"
      justify="center"
      fill-height
      class="hidden-sm-and-down ma-2 what-do-wrapper"
      style
    >
      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="text-center pa-5">
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="pa-3"
            :elevation="hover ? 0 : 0" 
            :class="$vuetify.theme.dark ? 'dark-card' : ''"
          >
            <v-icon size="50px">mdi-microphone</v-icon>
            <p class="google-font my-0" style="font-size:150%;">
              Sessions
            </p>
            <br />
            <p class="google-font" style="font-size:100%;color:#9e9e9e">
              A plethora of talks ranging from technologies like ML, Cloud,
              Android and Web to Design to Entrepreneurship.
            </p>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="text-center pa-5">
        <v-hover v-slot:default="{ hover }">
          <v-card class="pa-3" :elevation="hover ? 0 : 0" :class="$vuetify.theme.dark ? 'dark-card' : ''">
            <v-icon size="50px">mdi-lightbulb-on</v-icon>
            <p class="google-font my-0" style="font-size:150%;">
              Ice Breakers
            </p>
            <br />
            <p class="google-font" style="font-size:100%;color:#9e9e9e">
              A series of engaging online activities in between the sessions to
              combine learning and fun.
            </p>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="text-center pa-5">
        <v-hover v-slot:default="{ hover }" class="">
          <v-card class="py-3" :elevation="hover ? 0 : 0" :class="$vuetify.theme.dark ? 'dark-card' : ''">
            <br />
            <v-icon size="50px">mdi-access-point-network</v-icon>
            <p class="google-font my-0" style="font-size:150%;">
              Stories
            </p>
            <br />
            <p class="google-font" style="font-size:100%;color:#9e9e9e">
              Hear from the community champions about their stories, experiences
              and learnings.
            </p>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="text-center pa-5">
        <v-hover v-slot:default="{ hover }">
          <v-card class="pa-3" :elevation="hover ? 0 : 0" :class="$vuetify.theme.dark ? 'dark-card' : ''">
            <v-icon size="50px">mdi-nfc-tap</v-icon>
            <p class="google-font my-0" style="font-size:150%;">
              Discussions
            </p>
            <br />
            <p class="google-font" style="font-size:100%;color:#9e9e9e">
              A variety of discussions through a Panel discussions, Fireside
              chat and many online conversations.
            </p>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      align="center"
      fill-height
      class="hidden-sm-and-up"
      style="padding-top:5%;padding-bottom:5%;background:#fafafa"
    >
      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="px-5">
        <span
          class="pa-2 google-font"
          style="border-radius: 7px; background-color: rgb(210, 227, 252); color: rgb(23, 78, 166); font-size: 130%;"
          >Sessions</span
        >
        <p class="google-font mt-3" style="font-size:100%;color:#9e9e9e">
          A plethora of talks ranging from technologies like ML, Cloud, Android
          and Web to Design to Entrepreneurship.
        </p>
      </v-col>
      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="px-5 mt-2">
        <span
          class="pa-2 google-font"
          style="border-radius: 7px; background-color: rgb(254, 247, 224); color: rgb(176, 96, 0); font-size: 120%;"
          >Ice Breakers</span
        >
        <p class="google-font mt-3" style="font-size:100%;color:#9e9e9e">
          A series of engaging online activities in between the sessions to
          combine learning and fun.
        </p>
      </v-col>
      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="px-5 mt-2">
        <span
          class="pa-2 google-font"
          style="border-radius: 7px; background-color: rgb(252, 232, 230); color: rgb(179, 20, 18); font-size: 120%;"
          >Stories</span
        >
        <p class="google-font mt-3" style="font-size:100%;color:#9e9e9e">
          Hear from the community champions about their stories, experiences and
          learnings.
        </p>
      </v-col>
      <v-col cols="12" sm="5" md="3" lg="3" xl="3" class="px-5 mt-2">
        <span
          class="pa-2 google-font"
          style="border-radius: 7px; background-color: rgb(206, 234, 214); color: rgb(13, 101, 45); font-size: 120%;"
          >Discussions</span
        >
        <p class="google-font mt-3" style="font-size:100%;color:#9e9e9e">
          A variety of discussions through a Panel discussions, Fireside chat
          and many online conversations.
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

<style>
.dark-card {
  background-color: #433e47 !important;
}
</style>
