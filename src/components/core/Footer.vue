<template>
  <v-container
    fluid
    :class="this.$vuetify.theme.dark == true ? 'grey darken-4' : 'grey lighten-4'"
  >
    <v-row justify="center" align="center">
      <v-col md="10" sm="11" xl="10" cols="12">
        <v-card-text class="mx-0 px-0" style="height: 40px; position: relative">
          <v-fab-transition>
            <v-btn
              style="margin-top:-20px"
              color="indigo"
              dark
              absolute
              top
              right
              fab
               @click="toTop"
            >
              <v-icon>mdi-chevron-up</v-icon>
            </v-btn>
          </v-fab-transition>
          <h1 class="google-font" :class="$vuetify.theme.dark == true ? 'white--text' : 'grey--text text--darken-2'">web.dev Live India</h1>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col md="10" sm="11" xl="10" cols="12">
        <span v-for="(item, index) in links" :key="index">
          <router-link
            :to="item.link"
            :class="$vuetify.theme.dark == true ? 'white--text' : 'grey--text text--darken-3'"
            class="mr-3 google-font "
            style="text-decoration:none;"
            >{{ item.name }}</router-link
          >
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: [
      {
        name: "web.dev",
        link: "https://web.dev/",
      },
      {
        name: "FAQ",
        link: "/faq",
      },
      {
        name: "Google Developers",
        link: "https://developers.google.com/",
      },
    ],
  }),
    methods: {
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
