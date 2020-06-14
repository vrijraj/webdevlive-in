<template>
  <v-content class="ma-0">
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col md="5" sm="11" xl="10" cols="12" class="text-center">
          <br />
          <v-img
            :src="require('@/assets/img/webdevlogo.png')"
            style="margin-left:auto;margin-right:auto"
            width="5vh"
          ></v-img>
          <p
            class="google-font"
            :class="
              this.$vuetify.theme.dark
                ? 'white--text'
                : 'grey--text text--darken-2'
            "
            style="font-weight: 350;font-size:200%"
          >
            web.dev Live India: Registration
          </p>
          <p
            class="google-font"
            :class="
              this.$vuetify.theme.dark
                ? 'white--text'
                : 'grey--text text--darken-2'
            "
            style="font-weight: 350;font-size:150%"
          >
            Bringing Indian web devs together, from home
          </p>
          <p class="google-font" style="text-align: justify;">
            These are unprecedented times, with people worldwide looking to stay
            connected and informed. The Web plays a special role here, and we're
            proud to see how the community has stepped up. Join Google's Web
            Platform team, from the comfort of your homes, to celebrate our
            community's actions, learn modern web techniques, and connect with
            each other. 
          </p>
          <p class="google-font">
            Connect with us at https://twitter.com/WebDevLiveIndia for the
            latest updates. 
            <br><br>
            For any query, contact us at:
            webdevliveindia@gmail.com #WebDevLiveIndia #WebDevLive #WebDev
          </p>
        </v-col>

        <v-col md="12" sm="11" xl="10" cols="12">
          <form ref="formElement" @submit.prevent="response">
            <v-container>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="Email"
                    name="emailAddress"
                    :rules="[rules.required, rules.email]"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="First Name"
                    :rules="[rules.required]"
                    name="entry.468300441"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="Last Name"
                    outlined
                    :rules="[rules.required]"
                    name="entry.2146700190"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="Company / Institute name "
                    outlined
                    :rules="[rules.required]"
                    required
                    name="entry.996142731"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="Role"
                    outlined
                    :rules="[rules.required]"
                    required
                    name="entry.868615869"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="City"
                    outlined
                    :rules="[rules.required]"
                    required
                    name="entry.1550631012"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="Country"
                    outlined
                    :rules="[rules.required]"
                    required
                    name="entry.1772296180"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-radio-group
                    name="entry.1737451561"
                    required
                    :rules="[rules.required]"
                  >
                    <template v-slot:label>
                      <div class="google-font" style="font-size:120%">
                        <strong
                          >How would you like to identify yourself as? *</strong
                        >
                      </div>
                    </template>
                    <v-radio value="Male">
                      <template v-slot:label>
                        <div>Male</div>
                      </template>
                    </v-radio>
                    <v-radio value="Female">
                      <template v-slot:label>
                        <div>Female</div>
                      </template>
                    </v-radio>
                    <v-radio value="Prefer not to say">
                      <template v-slot:label>
                        <div>Prefer not to say</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-radio-group
                    name="entry.757164378"
                    :rules="[rules.required]"
                  >
                    <template v-slot:label>
                      <div class="google-font" style="font-size:120%">
                        <strong>Years of experience *</strong>
                      </div>
                    </template>
                    <v-radio value="0 - 5 years">
                      <template v-slot:label>
                        <div>0 - 5 years</div>
                      </template>
                    </v-radio>
                    <v-radio value="6 - 10 years">
                      <template v-slot:label>
                        <div>6 - 10 years</div>
                      </template>
                    </v-radio>
                    <v-radio value="11 - 20 years">
                      <template v-slot:label>
                        <div>11 - 20 years</div>
                      </template>
                    </v-radio>
                    <v-radio value="21+ years">
                      <template v-slot:label>
                        <div>21+ years</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <div class="google-font" style="font-size:120%">
                    <strong>How did you get to know about this event? *</strong>
                  </div>
                  <v-checkbox
                    class="mb-0"
                    name="entry.1422460694"
                    :rules="[rules.required]"
                    label="Performance & Developer Tools (9th July, 2020)"
                    value="Performance & Developer Tools (9th July, 2020)"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-0"
                    name="entry.1422460694"
                    :rules="[rules.required]"
                    label="Front-end & AMP (10th July, 2020)"
                    value="Front-end & AMP (10th July, 2020)"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-0"
                    name="entry.1422460694"
                    :rules="[rules.required]"
                    label="PWA & FUGU (11th July, 2020)"
                    value="PWA & FUGU (11th July, 2020)"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-0"
                    name="entry.1422460694"
                    :rules="[rules.required]"
                    label="Privacy & UX (12th July, 2020)"
                    value="Privacy & UX (12th July, 2020)"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-radio-group
                    name="entry.910958158"
                    :rules="[rules.required]"
                  >
                    <template v-slot:label>
                      <div class="google-font mb-2" style="font-size:120%">
                        <strong
                          >How would you like to identify yourself as? *</strong
                        >
                      </div>
                    </template>
                    <v-radio value="Twitter">
                      <template v-slot:label>
                        <div>Twitter</div>
                      </template>
                    </v-radio>
                    <v-radio value="LinkedIn">
                      <template v-slot:label>
                        <div>LinkedIn</div>
                      </template>
                    </v-radio>
                    <v-radio value="Facebook">
                      <template v-slot:label>
                        <div>Facebook</div>
                      </template>
                    </v-radio>
                    <v-radio value="Google Developer Groups">
                      <template v-slot:label>
                        <div>Google Developer Groups</div>
                      </template>
                    </v-radio>
                    <v-radio value="Women Techmakers">
                      <template v-slot:label>
                        <div>Women Techmakers</div>
                      </template>
                    </v-radio>
                    <v-radio value="Developer Student Clubs">
                      <template v-slot:label>
                        <div>Developer Student Clubs</div>
                      </template>
                    </v-radio>
                    <v-radio value="Other Communities">
                      <template v-slot:label>
                        <div>Other Communities</div>
                      </template>
                    </v-radio>
                    <v-radio value="Friends / Family">
                      <template v-slot:label>
                        <div>Friends / Family</div>
                      </template>
                    </v-radio>
                    <v-radio value="Through your company/colleague/institute">
                      <template v-slot:label>
                        <div>Through your company/colleague/institute</div>
                      </template>
                    </v-radio>
                    <v-radio value="Others">
                      <template v-slot:label>
                        <div>Others</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-textarea
                    :rules="[rules.required]"
                    outlined
                    label="Anything else you want to share with us?"
                    name="entry.1763016329"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-btn color="primary" large type="submit">Submit</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// import firebase from "../firebase/firebase";
import axios from "axios";
export default {
  data: () => ({
    rules: {
      required: (value) => !!value || "Required.",
      counter: (value) => value.length <= 20 || "Max 20 characters",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
  }),
  methods: {
    response() {
      let vm = this;
      let formElement = vm.$refs.formElement;
      let formData = new FormData(formElement);
      // https://cors-anywhere.herokuapp.com/
      let url =
        "https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/0/d/e/1FAIpQLSeScFEjqkA3KTVuSKezaPHoW65JHgYBlZPE4IjrWHFYXkl9SQ/formResponse";

      axios.post(url, formData).then(function(response) {
        console.log(response);
      });
    },
  },
};
</script>
