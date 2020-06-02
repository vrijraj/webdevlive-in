<template>
  <v-content>
    <v-container
      fluid
      class="pa-0 pt-0"
      style="border-bottom: 1px solid #e0e0e0;"
    >
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col md="10" class="py-0 my-0">
          <v-toolbar flat class="py-0 mt-0 my-0" tabs height="120%">
            <v-toolbar-title
              class="google-font my-5"
              style="font-weight: 350;color: #616161;font-size:200%"
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
              <v-tabs v-model="model" :mobile-breakpoint="0" :centered="getMobileTab()" color="indigo" slider-color="indigo">
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
            <v-tab-item value="day1">
              <v-container>
                <v-row>
                  <v-col>
                    <h1 class="google-font">Performance & Developer Tools</h1>
                    <p class="google-font">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum officiis impedit laborum tempore aliquam libero
                      maxime ipsa ipsum molestiae dolor aut ipsam odio vitae,
                      accusamus saepe voluptate tempora architecto enim?
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item value="day2">
              <v-container>
                <v-row>
                  <v-col>
                    <h1 class="google-font">Front-end & AMP</h1>
                    <p class="google-font">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum officiis impedit laborum tempore aliquam libero
                      maxime ipsa ipsum molestiae dolor aut ipsam odio vitae,
                      accusamus saepe voluptate tempora architecto enim?
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item value="day3">
              <v-container>
                <v-row>
                  <v-col>
                    <h1 class="google-font">PWA & FUGU</h1>
                    <p class="google-font">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum officiis impedit laborum tempore aliquam libero
                      maxime ipsa ipsum molestiae dolor aut ipsam odio vitae,
                      accusamus saepe voluptate tempora architecto enim?
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item value="day4">
              <v-container>
                <v-row>
                  <v-col>
                    <h1 class="google-font">Privacy & UX</h1>
                    <p class="google-font">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum officiis impedit laborum tempore aliquam libero
                      maxime ipsa ipsum molestiae dolor aut ipsam odio vitae,
                      accusamus saepe voluptate tempora architecto enim?
                    </p>
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
export default {
  name: "",
  data: () => ({
    model: "day1",
  }),
  mounted(){
  },
  methods:{
    getMobileTab(){
        if(window.innerWidth<500) return true
        else return false
    }
  }
};
</script>
