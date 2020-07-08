<template>
  <v-container fluid class="px-0 mx-0 my-0 py-0">
    <v-row justify="center" align="center" class="px-0 mx-0">
      <v-col xs="12" sm="4" :cols="i==0 || i==3?12:6" md="4" lg="3" v-for="(item, i) in youtubeData" :key="i" class="pa-0 mx-0">
        <div
          style="border-radius: 5px;border: 1px solid rgb(224, 224, 224);max-height: 170px;min-height:170px;border-left: 8px solid rgb(66, 133, 244) !important;"
          class="mx-1 my-1"
        >
        <!--  -->
          <div class="pa-3 card-light">
            <p class="google-font mt-2 mb-0" style="font-size: 80%;">
              {{ item.date }}
              <br />05:00 PM - 08:00 PM IST
            </p>
            <p class="google-font ma-0 mt-2 mb-5" style="font-size: 90%;">
              {{ item.track }}
            </p>
            <v-btn
              :href="item.link"
              target="_blank" 
              small
              outlined
              color="red"
              style="text-transform: capitalize;"
              class="ml-0 google-font"
            >
              <v-icon size="20px" class="mr-1">mdi-access-point</v-icon
              >{{ item.name }}
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ResourcesData from "@/assets/data/resources.json";
export default {
  data() {
    return {
      youtubeData: ResourcesData.resources.youtubePlaylist,
      dialog: false,
    };
  },
  components: {},
};
</script>
