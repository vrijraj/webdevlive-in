<template>
  <v-container fluid>
    <v-row
      justify="center"
      align="center"
      v-for="(item, index) in data.schedule"
      :key="index"
      style="border-bottom:1px solid #e0e0e0"
      class="pa-0 my-0"
    >
      <v-col md="2" cols="3" class="text-right my-0 py-0">
        <p style="font-size:150%" class="mb-0 google-font">
          {{ item.startTime }}
        </p>
        <p style="font-size:80%" class="ma-0 google-font">{{ item.endTime }}</p>
        <p class="mt-1 google-font" style="font-size:70%">
          <b style="color:grey">GMT (+05:30)</b>
        </p>
      </v-col>
      <v-col
        class="schedule-details my-0"
        cols="9"
        md="10"
        style="border-left:1px solid #e0e0e0"
      >
        <ScheduleDialog :data="getSessionData(item.session)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ScheduleDialog from '@/components/Schedule/ScheduleDialog'
import SessionsData from '@/assets/data/sessions.json'
    export default {
        props:['data'],
        components:{
            ScheduleDialog
        },
        data:()=>({
            SessionsData:SessionsData,
        }),
        methods:{
            getSessionData(id){
                return this.SessionsData.filter(sd=>sd.id==id)[0]
            }
        }

    }
</script>
