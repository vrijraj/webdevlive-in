<template>
  <v-dialog v-model="dialog" width="700">
    <!-- :class="$vuetify.theme.dark == true ? 'darkModeCard' : 'whiteThemeCard'" -->
    <template v-slot:activator="{ on }">
      <div v-on="on" style="cursor: pointer;" class="py-3 ma-1 fill-height">
        <p style="font-size:130%" class="mb-0 google-font">{{data.title}}</p>
        <p style="font-size:100%" class="mb-0 google-font">{{data.description}}</p>
        <v-chip class="mt-2" label small>{{data.speaker}}</v-chip>
      </div>
    </template>

    <v-card :class="theme.isDark ? 'grey darken-3' : 'white'">
      <v-card-text class="pa-5">
        <v-container>
          <v-row>
            <v-col md="4" cols="12" class="text-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis quos ex autem culpa? Reiciendis a adipisci nulla ducimus cumque quaerat accusamus. Numquam accusantium voluptate deleniti eaque velit tenetur nam!</p>
            </v-col>
            <v-col md="8" cols="12">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis quos ex autem culpa? Reiciendis a adipisci nulla ducimus cumque quaerat accusamus. Numquam accusantium voluptate deleniti eaque velit tenetur nam!</p>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  components: {},
  inject: ["theme"],
  props: ["data"],
  data() {
    return {
      dialog: false
    };
  },
  mounted() {},
  methods: {
    goToTeam(id) {
      this.$router.push("/team/" + id);
    }
  },
  filters: {
    summery: (val, num) => {
      if (val.length > num) return val.substring(0, num) + "..";
      else return val;
    }
  }
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
