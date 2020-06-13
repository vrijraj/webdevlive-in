<template>
    <v-container>
        <v-row>
            <v-col>
                <v-img :src="require('@/assets/img/webdevlogo.png')" style="margin-left:auto;margin-right:auto" width="5vh"></v-img>
                <h1 :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-2'" class="google-font mb-0" style="font-size:180%">{{title}}</h1>
                <p class="google-font" style="width:80%;margin-left:auto;margin-right:auto;font-size:110%">{{des}}</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data:()=>({

        }),
        props:{
            title:'',
            des:''
        }
    }
</script>