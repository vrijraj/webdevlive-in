<template>
  <v-dialog v-model="dialog" width="800">
    <!-- :class="$vuetify.theme.dark == true ? 'darkModeCard' : 'whiteThemeCard'" -->
    <template v-slot:activator="{ on }">
      <div v-on="on" style="cursor: pointer;" class="py-3 ma-1 fill-height">
        <p style="font-size:130%" class="mb-0 google-font">{{ data.title }}</p>
        <!-- <p style="font-size:100%" class="mb-0 google-font">{{data.description}}</p> -->
        <!-- <v-chip class="mt-2 mr-2" label small>{{ data.track }}</v-chip> -->
        <v-chip class="mt-2 mr-2" label small>{{ data.format }}</v-chip>
        <span v-for="(itemp, indexp) in speakers" :key="indexp">
          <v-chip class="mt-2 mr-2" outlined label small>{{
            itemp.name
          }}</v-chip>
        </span>
      </div>
    </template>

    <v-card :class="theme.isDark ? 'grey darken-3' : 'white'">
      <v-card-title
        class="google-font"
        style="background-position:right bottom;"
      >
        <p class="google-font mb-0" style="font-size:110%">{{ data.title }} Details</p>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
          <span>Close</span>
        </v-tooltip>
        
      </v-card-title>
      <v-card-text class="px-5">
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-col md="12" cols="12">
              <v-chip small label class="mr-2">{{ data.track }}</v-chip>
              <v-chip small label>{{ data.format }}</v-chip>
              <p class="google-font my-1 mt-4" style="font-size:110%">
                <b>Date:</b> {{ data.date }}
              </p>
              <p class="google-font my-1" style="font-size:110%">
                <b>Duration:</b> {{ data.timeDuration }} min
              </p>
              <p class="google-font my-1" style="font-size:110%">
                <b>Description:</b> {{ data.description }}
              </p>
              <v-container fluid class="px-0 mx-0">
                <v-row
                  class="pa-0 ma-0"
                  v-for="(itemp, indexp) in speakers"
                  :key="indexp"
                >
                  <v-col class="pa-0 ma-0">
                    <v-list two-line subheader class="pa-0 ma-0" :class="theme.isDark ? 'grey darken-3' : 'white'">
                      <v-list-item class="my-0 py-0">
                        <v-list-item-avatar>
                          <img :src="getImgUrl(itemp.image)" />
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            class="google-font"
                            >{{ itemp.name }}</v-list-item-title
                          >
                          <v-list-item-subtitle
                            class="google-font text-wrap"
                            v-if="itemp.company.designation"
                          >
                            {{ itemp.company.designation }}
                            <span v-if="itemp.company.name">,</span>
                            {{ itemp.company.name }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <!-- <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">Close</v-btn>
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>

<script>
import SpeakersData from "../../assets/data/speakers.json";
export default {
  components: {},
  inject: ["theme"],
  props: ["data"],
  data() {
    return {
      dialog: false,
      SpeakersData: SpeakersData,
      speakers: [],
    };
  },
  mounted() {
    this.speakers = [];
    this.data.speakers.map((spid) => {
      this.SpeakersData.map((spdata) => {
        if (spid == spdata.id) {
          this.speakers.push(spdata);
        }
      });
    });
  },
  methods: {
    goToTeam(id) {
      this.$router.push("/team/" + id);
    },
  },
  filters: {
    summery: (val, num) => {
      if (val.length > num) return val.substring(0, num) + "..";
      else return val;
    },
  },
};
</script>

<style scoped>
.darkModeCard {
  background-color: #292929;
  border: 1px solid #212121;
  border-radius: 5px;
}
.whiteThemeCard {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}
</style>
