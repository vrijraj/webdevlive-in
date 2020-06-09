<template>
    <v-container fluid >
        <v-row>
            <v-col md="6" cols="12">
                <v-card class="pa-5 elevation-0" outlined :class="$vuetify.theme.dark == true ? 'darkModeCard' : 'whiteThemeCard'" rel="noreferrer" href="https://twitter.com/WebDevLiveIndia" target="_blank">
                    <v-icon x-large color="#00acee">mdi-twitter</v-icon>
                    <h2 class="google-font mt-2 mb-2">Stay connected</h2>
                    <p class="google-font">Keep up with the latest Web Dev India news and announcements. Join the conversation on Twitter.</p>
                    <p class="google-font mt-5 mb-0" style="font-size:130%">Follow @WebDevIndia</p>
                </v-card>
            </v-col>
            <v-col md="6" cols="12">
                <v-card class="pa-5 elevation-0" outlined :class="$vuetify.theme.dark == true ? 'darkModeCard' : 'whiteThemeCard'" href="/faq">
                    <v-icon x-large color="#FBBC04">mdi-star</v-icon>
                    <h2 class="google-font mt-2 mb-2">Frequently Asked Questions</h2>
                    <p class="google-font">Get all the details about Web Dev Live India: including event content, schedule, access, what to expect, and more.</p>
                    <p class="google-font mt-5 mb-0" style="font-size:130%">See FAQs</p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>