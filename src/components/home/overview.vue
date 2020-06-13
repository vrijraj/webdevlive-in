<template>
  <v-container fluid class="mb-0 pb-0 px-0">
    <v-row class="mb-0 pb-0 ">
      <v-col cols="12" class="mb-0 pb-0 px-0">
        <v-tabs
          v-model="model"
          color="indigo"
          :grow="getMobileTab()"
          :centered="getMobileTab()"
          slider-color="indigo"
          class="grey lighten-2 mx-0"
          :background-color="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
          :class="$vuetify.theme.dark ? 'row-border-dark' : 'row-border-white'"
        >
          <v-tab
            href="#day1"
            class="google-font"
            style="text-transform: capitalize;font-weight: bold;"
          >
            Performance & Developer Tools
          </v-tab>
          <v-tab
            href="#day2"
            class="google-font"
            style="text-transform: capitalize;font-weight: bold;"
          >
            Front-end & AMP
          </v-tab>
          <v-tab
            href="#day3"
            class="google-font"
            style="text-transform: capitalize;font-weight: bold;"
          >
            PWA & FUGU
          </v-tab>
          <v-tab
            href="#day4" 
            class="google-font"
            style="text-transform: capitalize;font-weight: bold;"
          >
            Privacy & UX
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="my-0 py-0">
      <v-col cols="12" class="my-0 py-0">
        <v-tabs-items v-model="model">
          <v-tab-item
            value="day1"
            class="my-0 py-0"
            :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
          >
            <v-container class="py-0 my-0 px-0">
              <v-row>
                <v-col>
                  <p class="google-font" style="text-align:justify">
                    Runtime performance is how your page performs when it is running, as opposed to loading. Users expect pages to be interactive and smooth. Each stage in the pixel pipeline represents an opportunity to introduce jank. Learn about tools and strategies to identify and fix common problems that slow down runtime performance.
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item
            value="day2"
            class="my-0 py-0"
            :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
          >
            <v-container class="py-0 my-0 px-0">
              <v-row>
                <v-col>
                  <p class="google-font" style="text-align:justify">
                    AMP is an open-source HTML framework that provides a straightforward way to create web pages that are fast, smooth-loading and prioritize the user-experience above all else. Can't believe it? Try it out.
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item
            value="day3"
            class="my-0 py-0"
           :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
          >
            <v-container class="py-0 my-0 px-0">
              <v-row>
                <v-col>
                  <p class="google-font" style="text-align:justify">
                    Progressive Web Apps are web apps that use emerging web browser APIs and features along with traditional progressive enhancement strategy to bring a native app-like user experience to cross-platform web applications.
                     <br>
                     Project Fugu 🐡 is an effort to close gaps in the web's capabilities enabling new classes of applications to run on the web. The developer-friendly landing page of the project is <a href="https://web.dev/fugu-status/" target="_blank" style="text-decoration:none;">https://web.dev/fugu-status/</a>.
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item
            value="day4"
            class="my-0 py-0"
            :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
          >
            <v-container class="py-0 my-0 px-0">
              <v-row>
                <v-col>
                  <p class="google-font" style="text-align:justify">
                  Taking best practices from the field of user experience and human-centered design and applying them to data collection and privacy interactions. <br> Once you start looking for ways to optimize your opt-ins or reduce the bounce rates that have increased due to your consent experience, you’re already starting to think of the Privacy UX.
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "overview",
  data: () => ({
    model: "day1",
  }),
  methods: {
    getMobileTab() {
      if (window.innerWidth < 500) return true;
      else return false;
    },
  },
};
</script>
