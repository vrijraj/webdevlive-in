<template>
  <v-content>
  <v-container>
    <v-row>
      <v-col>
        <ComingSoon/>
      </v-col>
    </v-row>
  </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
import ComingSoon from '../components/home/CommingSoon'
export default {
  name: 'Home',
  components: {
    ComingSoon
  }
}
</script>
