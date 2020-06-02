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
              <v-tabs
                v-model="model"
                :mobile-breakpoint="0"
                :grow="getMobileTab()"
                :centered="getMobileTab()"
                color="indigo"
                slider-color="indigo"
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
            <v-tab-item value="day1">
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
                    <v-container fluid>
                        <v-row justify="center" align="center" v-for="(item, index) in day1Data" :key="index" style="border-bottom:1px solid #e0e0e0" class="pa-0 my-0">
                            <v-col md="2" cols="3" class="text-right my-0 py-0">
                                <p style="font-size:150%" class="mb-0 google-font">{{item.startTime}}</p>
                                <p style="font-size:80%" class="ma-0 google-font">{{item.endTime}}</p>
                                <p class="mt-1 google-font" style="font-size:70%"><b style="color:grey">GMT (+05:30)</b></p>
                            </v-col>
                            <v-col class="schedule-details my-0" cols="9" md="10" style="border-left:1px solid #e0e0e0">
                                <ScheduleDialog :data="item"/>
                                <!-- <p style="font-size:130%" class="mb-0 google-font">{{item.title}}</p>
                                <p style="font-size:100%" class="mb-0 google-font">{{item.description}}</p>
                                <v-chip label small>{{item.speaker}}</v-chip> -->
                            </v-col>
                        </v-row>
                    </v-container>
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
import ScheduleDialog from '../components/Schedule/ScheduleDialog'
export default {
  name: "",
  components:{
    ScheduleDialog
  },
  data: () => ({
    model: "day1",
    day1Data: [
      {
        startTime: "2:00",
        endTime:"3:00",
        speaker: "Vrijraj",
        des:"GDE for Web",
        image: "",
        title:"This is Title",
        description: "This is Description",
      },
      {
        startTime: "2:00",
        endTime:"3:00",
        speaker: "Vrijraj",
        image: "",
        title:"This is Title",
        des:"GDE for Web",
        description: "This is Description",
      },
      {
        startTime: "2:00",
        endTime:"3:00",
        speaker: "Vrijraj",
        des:"GDE for Web",
        image: "",
        title:"This is Title",
        description: "This is Description",
      },
    ],
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

<style>
    .schedule-details:hover{
        background: #FAFAFA;
    }
</style>
