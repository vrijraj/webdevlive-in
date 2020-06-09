<template>
  <v-content class="ma-0">
    <v-container
      fluid
      class="pb-0"
      :class="$vuetify.theme.dark ? 'row-border-dark' : 'row-border-white'"
    >
      <v-row justify="center" align="center">
        <v-col md="10" class="py-0 my-0">
          <v-toolbar flat 
          class="py-0 mt-0 my-0" 
          tabs 
          height="120%" 
          :class="$vuetify.theme.dark==true?'grey darken-4':'white'">
            <v-toolbar-title
              :class="$vuetify.theme.dark == true ? 'white--text' : 'grey--text text--darken-2'"
              class="google-font my-5"
              style="font-weight: 350;font-size:200%"
              >Schedules
            </v-toolbar-title>
            <template v-slot:extension>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus atque dolorum sequi ex cumque praesentium, quaerat
                molestias? Earum quod libero sit veniam. Dolorem provident
                quibusdam, necessitatibus laborum perspiciatis ipsam laudantium.
              </p>
            </template>

            <template v-slot:extension>
              <v-tabs
                v-model="model"
                :grow="getMobileTab()"
                :centered="getMobileTab()"
                color="primary"
                slider-color="primary"
              >
                <v-tab href="#day1">
                  Day 1
                </v-tab>
                <v-tab href="#day2">
                  Day 2
                </v-tab>
                <v-tab href="#day3">
                  Day 3
                </v-tab>
                <v-tab href="#day4">
                  Day 4
                </v-tab>
              </v-tabs>
            </template>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center" align="center">
        <v-col md="10">
          <v-tabs-items v-model="model">
            <v-tab-item
              value="day1"
              :class="$vuetify.theme.dark ? 'black' : 'white'"
            >
              <v-container>
                <v-row>
                  <v-col>
                    <h3 class="google-font">Performance & Developer Tools</h3>
                    <p class="google-font">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum officiis impedit laborum tempore aliquam libero
                      maxime ipsa ipsum molestiae dolor aut ipsam odio vitae,
                      accusamus saepe voluptate tempora architecto enim?
                    </p>
                    <ScheduleDetails :data="ScheduleData[0]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item value="day2" :class="$vuetify.theme.dark ? 'black' : 'white'">
              <v-container>
                <v-row>
                  <v-col>
                    <h3 class="google-font">Front-end & AMP</h3>
                    <p class="google-font">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum officiis impedit laborum tempore aliquam libero
                      maxime ipsa ipsum molestiae dolor aut ipsam odio vitae,
                      accusamus saepe voluptate tempora architecto enim?
                    </p>
                    <ScheduleDetails :data="ScheduleData[1]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item value="day3" :class="$vuetify.theme.dark ? 'black' : 'white'">
              <v-container>
                <v-row>
                  <v-col>
                    <h3 class="google-font">PWA & FUGU</h3>
                    <p class="google-font">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum officiis impedit laborum tempore aliquam libero
                      maxime ipsa ipsum molestiae dolor aut ipsam odio vitae,
                      accusamus saepe voluptate tempora architecto enim?
                    </p>
                    <ScheduleDetails :data="ScheduleData[2]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item value="day4" :class="$vuetify.theme.dark ? 'black' : 'white'">
              <v-container>
                <v-row>
                  <v-col>
                    <h3 class="google-font">Privacy & UX</h3>
                    <p class="google-font">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum officiis impedit laborum tempore aliquam libero
                      maxime ipsa ipsum molestiae dolor aut ipsam odio vitae,
                      accusamus saepe voluptate tempora architecto enim?
                    </p>
                    <ScheduleDetails :data="ScheduleData[3]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import ScheduleDetails from "../components/Schedule/ScheduleDetails";
import ScheduleData from "../assets/data/schedule.json";
export default {
  name: "",
  components: {
    ScheduleDetails,
  },
  data: () => ({
    model: "day1",
    ScheduleData: ScheduleData,
  }),
  mounted() {},
  methods: {
    getMobileTab() {
      if (window.innerWidth < 500) return true;
      else return false;
    },
  },
};
</script>

<style >
.white-font{
  color: white;
}
.grey-font{
  color: #616161 !important;
}
.row-border-white {
  border-bottom: 1px solid #e0e0e0;
}
.row-border-dark {
  border-bottom: 1px solid #292929;
  background: #212121;
}
.bg-dark{
  background-color: #757575;
}
</style>
