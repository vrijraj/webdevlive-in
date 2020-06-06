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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum dolorem quo, provident consectetur ullam praesentium
                    dolorum magni, officia quasi, itaque quos placeat odit!
                    Atque ratione, non unde in reprehenderit maxime?
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum dolorem quo, provident consectetur ullam praesentium
                    dolorum magni, officia quasi, itaque quos placeat odit!
                    Atque ratione, non unde in reprehenderit maxime?
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum dolorem quo, provident consectetur ullam praesentium
                    dolorum magni, officia quasi, itaque quos placeat odit!
                    Atque ratione, non unde in reprehenderit maxime?
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum dolorem quo, provident consectetur ullam praesentium
                    dolorum magni, officia quasi, itaque quos placeat odit!
                    Atque ratione, non unde in reprehenderit maxime?
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
