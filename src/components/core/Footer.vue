<template>
  <v-footer app inset padless absolute>
    <v-container
      fluid
      :class="
        this.$vuetify.theme.dark == true ? 'grey darken-4' : 'grey lighten-4'
      "
    >
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="10" cols="12">
          <v-card-text class="mx-0 px-0" style="height: 40px; position: relative">
            <v-fab-transition>
              <v-btn
                aria-label="FAB Button"
                style="margin-top:-20px"
                color="primary"
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
            <h1
              class="google-font"
              :class="
                $vuetify.theme.dark == true
                  ? 'white--text'
                  : 'grey--text text--darken-2'
              "
            >web.dev LIVE India</h1>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="10" cols="12">
       <a href="https://web.dev/" target="_blank"
            rel="noreferrer"
            :class="
                $vuetify.theme.dark == true
                  ? 'white--text'
                  : 'grey--text text--darken-3'
              "
            class="mr-3 google-font"
            style="text-decoration:none;"
          >web.dev</a>
          <router-link
            to="/faq"
            rel="noreferrer"
            :class="
                $vuetify.theme.dark == true
                  ? 'white--text'
                  : 'grey--text text--darken-3'
              "
            class="mr-3 google-font"
            style="text-decoration:none;"
          >FAQ</router-link>
            <a href="https://developers.google.com" target="_blank"
            rel="noreferrer"
            :class="
                $vuetify.theme.dark == true
                  ? 'white--text'
                  : 'grey--text text--darken-3'
              "
            class="mr-3 google-font"
            style="text-decoration:none;"
          >Google Developers</a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
