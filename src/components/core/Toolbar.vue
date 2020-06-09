<template>
  <v-app-bar app fixed clipped-left :class="this.$vuetify.theme.dark?'':'white'">
    <v-app-bar-nav-icon aria-label="Hamburger Btn" @click="toggleDrawer" class="d-md-none d-lg-none"></v-app-bar-nav-icon>
    <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/img/webdevlogo.png')"
          transition="scale-transition"
          width="30"
        />
    </div>
    <v-toolbar-title class="google-font px-0">
      <router-link
        to="/"
        class="google-font"
        style="text-decoration:none;font-size:110%"
        :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-2'"
      >{{aboutEvent.EventName || ""}}</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-for="(link, i) in links" :key="i">
      <v-btn
        aria-label="toolbar links"
        :key="i"
        :to="link.to"
        v-if="link.meta.showToolbar"
        class="ml-2 google-font hidden-sm-and-down"
        style="text-transform: capitalize;"
        text
        @click="onClick($event, link)"
      >{{ link.text }}</v-btn>
    </div>

    <v-btn aria-label="Share Button" icon v-on:click="shareMe" class="hidden-sm-and-up">
      <v-icon>mdi-share-variant</v-icon>
    </v-btn>

    <v-btn icon v-on:click="darkMode" class="ml-2" aria-label="theme btn">
      <v-icon v-if="this.$vuetify.theme.dark">mdi-brightness-7</v-icon>
      <v-icon v-else>mdi-brightness-4</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import aboutEvent from "@/assets/data/about.json";
export default {
  data: () => ({
    aboutEvent: aboutEvent
  }),
  computed: {
    ...mapGetters(["links"])
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
    darkMode() {
      let metaThemeColor = document.querySelector("meta[name=theme-color]");
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (localStorage)
        localStorage.setItem("darkMode", this.$vuetify.theme.dark);
      if (this.$vuetify.theme.dark) {
        metaThemeColor.setAttribute("content", "#212121");
      } else {
        metaThemeColor.setAttribute("content", "#3F51B5");
      }
    },
    shareMe(e) {
      if (navigator.share) {
        navigator
          .share({
            title: "web.dev Live India",
            url: ""
          })
          .then(() => {
            console.log("Thanks for sharing");
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
};
</script>
