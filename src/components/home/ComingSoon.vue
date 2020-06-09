<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="5" lg="4" class="text-center">
        <v-img :src="require('@/assets/img/home.png')"></v-img>
      </v-col>
      <v-col cols="12" md="7" lg="7">
        <h1 class="google-font mt-5 mb-0">web.dev Live India</h1>
        <p class="google-font mt-0" style="font-size:80%">
          Follow up event of
          <a href="https://web.dev/live/" target="_blank">web.dev</a>
        </p>
        <p
          class="google-font"
          style="font-size:150%"
        >Bringing Indian web developers together, from home</p>
        <p
          class="google-font"
        >These are unprecedented times, with people worldwide looking to stay connected and informed. The Web plays a special role here, and we're proud to see how the community has stepped up.</p>
        <p
          class="google-font"
        >Join Google's Web Platform team, from the comfort of your homes, to celebrate our community's actions, learn modern web techniques and connect with each other.</p>
        <v-btn
          color="primary"
          style="text-transform: capitalize;"
          class="google-font"
          depressed
          large
          dark
        >Get Notified</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>