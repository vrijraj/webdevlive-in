<template>
  <v-content class="ma-0">
    <v-container fluid >
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="10" cols="12" class="red">
          <h1>Google Sign In required</h1>
          <!-- <v-btn @click="GoogleSignIn">Google SignIn</v-btn> -->

          {{ userDetails }}
        </v-col>

        <v-col md="12" sm="11" xl="10" cols="12" >
          <v-container fluid>
            <v-row >
                <form ref="formElement" @submit.prevent="response" style="width:50%;margin-left:auto;margin-right:auto">
                  <v-col md="12">
                <v-text-field
                  label="email"
                  name="emailAddress"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col md="12">
                <v-text-field
                  label="First Name"
                  name="entry.468300441"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col md="12">
                <v-text-field
                  label="Last Name"
                  outlined
                  name="entry.2146700190"
                ></v-text-field>
              </v-col>
              <v-col md="12">
                <v-text-field
                  label="Company / Institute name "
                  outlined
                  name="entry.996142731"
                ></v-text-field>
              </v-col>

              <v-col md="12">
                <v-text-field
                  label="Role"
                  outlined
                  name="entry.868615869"
                ></v-text-field>
              </v-col>

              <v-col md="12">
                <v-text-field
                  label="City"
                  outlined
                  name="entry.1550631012"
                ></v-text-field>
              </v-col>
              <v-col md="12">
                <v-text-field
                  label="Country"
                  outlined
                  name="entry.1772296180"
                ></v-text-field>
              </v-col>

              <v-col md="12">
                <v-radio-group name="entry.1737451561"> 
                  <template v-slot:label>
                    <div>How would you like to identify yourself as?</div>
                  </template>
                  <v-radio value="Male" >
                    <template v-slot:label>
                      <div>
                        <strong class="success--text">Male</strong>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="Female">
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">Female</strong>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="Prefer not to say">
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">Prefer not to say</strong>
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col>

              <v-col md="12">
                <v-radio-group name="entry.757164378"> 
                  <template v-slot:label>
                    <div>Years of experience</div>
                  </template>
                  <v-radio value="0 - 5 years" >
                    <template v-slot:label>
                      <div>
                        <strong class="success--text">0 - 5 years</strong>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="6 - 10 years">
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">6 - 10 years</strong>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="11 - 20 years">
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">11 - 20 years</strong>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="21+ years">
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">21+ years</strong>
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col>
              
              <v-col md="12">
                <div>How did you get to know about this event?</div>
                <v-checkbox name="entry.1422460694" label="Performance & Developer Tools (9th July, 2020)" value="Performance & Developer Tools (9th July, 2020)"></v-checkbox>
                <v-checkbox name="entry.1422460694" label="Front-end & AMP (10th July, 2020)" value="Front-end & AMP (10th July, 2020)"></v-checkbox>
                <v-checkbox name="entry.1422460694" label="PWA & FUGU (11th July, 2020)" value="PWA & FUGU (11th July, 2020)"></v-checkbox>
                <v-checkbox name="entry.1422460694" label="Privacy & UX (12th July, 2020)" value="Privacy & UX (12th July, 2020)"></v-checkbox>
              </v-col>

              <v-col md="12">
                <v-radio-group name="entry.910958158"> 
                  <template v-slot:label>
                    <div>How would you like to identify yourself as?</div>
                  </template>
                  <v-radio value="Twitter" >
                    <template v-slot:label>
                      <div>
                        <strong class="success--text">Twitter</strong>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="LinkedIn">
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">LinkedIn</strong>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="Facebook">
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">Facebook</strong>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="Google Developer Groups">
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">Google Developer Groups</strong>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="Women Techmakers">
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">Women Techmakers</strong>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="Developer Student Clubs">
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">Developer Student Clubs</strong>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="Other Communities">
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">Other Communities</strong>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="Friends / Family">
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">Friends / Family</strong>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="Through your company/colleague/institute">
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">Through your company/colleague/institute</strong>
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col>
              <v-col md="12">
                <v-text-field
                  label="Anything else you want to share with us?"
                  outlined
                  name="entry.1763016329"
                ></v-text-field>
              </v-col>
              <v-btn color="primary" type="submit">Submit</v-btn>
            </form>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// import firebase from "../firebase/firebase";
import axios from 'axios'
export default {
  data: () => ({
    userDetails: null,
  }),
  methods: {
    response(){
      let vm = this
        let formElement = vm.$refs.formElement
        let formData = new FormData(formElement)
        // https://cors-anywhere.herokuapp.com/
        let url = 'https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/0/d/e/1FAIpQLSeScFEjqkA3KTVuSKezaPHoW65JHgYBlZPE4IjrWHFYXkl9SQ/formResponse'
 
        axios.post(url, formData).then(function(response){
          console.log(response)
        })

    },
    // GoogleSignIn() {
    //   let provider = new firebase.auth.GoogleAuthProvider();
    //   firebase.auth
    //     .signInWithPopup(provider)
    //     .then(function(result) {
    //       var token = result.credential.accessToken;
    //       this.userDetails = result.user;
    //       // ...
    //     })
    //     .catch(function(error) {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       var email = error.email;
    //       var credential = error.credential;
    //       // ...
    //     });
    // },
    // logout() {
    //   firebase.auth
    //     .signOut()
    //     .then(function() {
    //     })
    //     .catch(function(error) {
    //     });
    // },
    checkState() {},
  },
};
</script>
