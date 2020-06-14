<template>
  <v-content class="ma-0">
    <v-container>
      <v-row justify="center" align="center">
        <v-col md="5" xl="5" sm="11" cols="12" class="text-center">
          <br />
          <v-img
            :src="require('@/assets/img/webdevlogo.png')"
            style="margin-left:auto;margin-right:auto"
            width="5vh"
          ></v-img>
          <p
            class="google-font mb-1"
            :class="
              this.$vuetify.theme.dark
                ? 'white--text'
                : 'grey--text text--darken-2'
            "
            style="font-weight: 350;font-size:200%"
          >web.dev Live India: Registration</p>
          <p
            class="google-font"
            :class="
              this.$vuetify.theme.dark
                ? 'white--text'
                : 'grey--text text--darken-2 mt-0'
            "
            style="font-weight: 350;font-size:130%"
            v-if="!formSubmitted"
          >Bringing Indian web devs together, from home</p>
          <v-divider></v-divider>

          <p class="google-font mt-4" v-if="!formSubmitted" style="font-size:110%">
            Connect with us at
            <a
              href="https://twitter.com/WebDevLiveIndia"
              rel="noreferrer"
              target="_blank"
              style="text-decoration:none;"
            >@WebDevLiveIndia</a> for the
            latest updates.
            <br />For any query, contact us at:
            <a
              href="mailto:webdevliveindia@gmail.com"
              style="text-decoration:none"
              :class="$vuetify.theme.dark == true ? 'white--text' : 'primary--text'"
            >webdevliveindia@gmail.com</a>
          </p>
          <p class="google-font mt-4" style="font-size:100%;">
            <span v-for="(item,i) in mainData.hashtags" :key="i">
              <v-chip
                :href="'https://twitter.com/hashtag/'+item"
                rel="noopener"
                target="_blank"
                outlined
                color="primary"
                label
                class="mr-1"
              >#{{item}}</v-chip>
              <!-- &nbsp; -->
            </span>
          </p>
        </v-col>

        <!-- Form -->
        <v-col md="12" sm="11" xl="10" cols="12" v-if="!formSubmitted">
          <form ref="formElement" @submit.prevent="response">
            <v-container>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-text-field
                    label="Email"
                    v-on:change="validateForm()"
                    v-model="userInfo.email"
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
                    v-on:change="validateForm()"
                    v-model="userInfo.fname"
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
                    v-on:change="validateForm()"
                    v-model="userInfo.lname"
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
                    label="Company / Institute Name "
                    outlined
                    v-on:change="validateForm()"
                    v-model="userInfo.company"
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
                    v-on:change="validateForm()"
                    v-model="userInfo.role"
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
                    v-on:change="validateForm()"
                    v-model="userInfo.city"
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
                    v-on:change="validateForm()"
                    v-model="userInfo.country"
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
                    v-model="userInfo.genderRadioGroup"
                    v-on:change="validateForm()"
                    :rules="[rules.required]"
                  >
                    <div
                      class="google-font"
                      style="font-size:120%"
                      :style="$vuetify.theme.dark ? 'color:white !important' : 'color:black !important'"
                    >
                      How would you like to identify yourself as?
                      <span style="color:#ff5252;">*</span>
                      <br />
                      <span
                        style="color:#ff5252;font-size:70%"
                        v-if="userInfo.genderRadioGroup === 0"
                      >This field is required.</span>
                    </div>
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
                    v-model="userInfo.expRadioGroup"
                    v-on:change="validateForm()"
                    :rules="[rules.required]"
                  >
                    <div
                      class="google-font"
                      style="font-size:120%;"
                      :style="$vuetify.theme.dark ? 'color:white !important' : 'color:black !important'"
                    >
                      Years of experience
                      <span style="color:#ff5252;">*</span>
                      <br />
                      <span
                        style="color:#ff5252;font-size:70%"
                        v-if="userInfo.expRadioGroup === 0"
                      >This field is required.</span>
                    </div>
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
                  <div
                    class="google-font"
                    style="font-size:120%"
                    :style="$vuetify.theme.dark ? '{color:white}' : '{color:black}'"
                  >
                    Tracks / themes you are interested to attend.
                    <span style="color:#ff5252;">*</span>
                    <br />
                    <span
                      style="color:#ff5252;font-size:70%"
                      v-if="userInfo.themeCheckbox.filter(res => res == false || res == null)
          .length === 4"
                    >This field is required.</span>
                  </div>
                  <v-checkbox
                    class="mb-0"
                    name="entry.1422460694"
                    v-on:change="validateForm()"
                    v-model="userInfo.themeCheckbox[0]"
                    label="Performance & Developer Tools (9th July, 2020)"
                    value="Performance & Developer Tools (9th July, 2020)"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-0"
                    name="entry.1422460694"
                    v-on:change="validateForm()"
                    v-model="userInfo.themeCheckbox[1]"
                    label="Front-end & AMP (10th July, 2020)"
                    value="Front-end & AMP (10th July, 2020)"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-0"
                    name="entry.1422460694"
                    v-on:change="validateForm()"
                    v-model="userInfo.themeCheckbox[2]"
                    label="PWA & FUGU (11th July, 2020)"
                    value="PWA & FUGU (11th July, 2020)"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-0"
                    name="entry.1422460694"
                    v-on:change="validateForm()"
                    v-model="userInfo.themeCheckbox[3]"
                    label="Privacy & UX (12th July, 2020)"
                    value="Privacy & UX (12th July, 2020)"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-radio-group
                    v-model="userInfo.infoRadioGroup"
                    v-on:change="validateForm()"
                    name="entry.910958158"
                    :rules="[rules.required]"
                  >
                    <div
                      class="google-font mb-2"
                      style="font-size:120%"
                      :style="$vuetify.theme.dark ? 'color:white !important' : 'color:black !important'"
                    >
                      How did you get to know about this event?
                      <span style="color:#ff5252;">*</span>
                      <br />
                      <span
                        style="color:#ff5252;font-size:70%"
                        v-if="userInfo.infoRadioGroup === 0"
                      >This field is required.</span>
                    </div>
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
                    outlined
                    label="Anything else you want to share with us?"
                    name="entry.1763016329"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col md="5" cols="12">
                  <v-btn
                    color="primary"
                    :loading="loader"
                    large
                    type="submit"
                    :disabled="invalidEntry"
                  >Submit</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </form>
        </v-col>

        <!-- Thank you msg -->
        <v-col
          md="8"
          sm="11"
          xl="8"
          cols="12"
          class="text-center"
          v-if="formSubmitted && formClosed === false"
        >
          <h1 class="google-font">Bringing Indian web devs together, from home</h1>
          <br />
          <p class="google-font" style="font-size:110%">
            Thank you for registering for
            <a
              href="https://twitter.com/WebDevLiveIndia"
              rel="noreferrer"
              target="_blank"
              style="text-decoration:none"
            >
              <b>#WebDevLiveIndia</b>
            </a>.
            <br />We will be sending the confirmation mail after
            <b>4th July, 2020</b>.
            <br />
            <v-btn
              href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fwebdevlivein.web.app&ref_src=twsrc%5Etfw&text=console.log%28%27Hi%20%23WebDevs%27%29%3B%0A%0AI%20have%20registered%20for%20%23WebDevLiveIndia%20to%20attend%20many%20amazing%20sessions.%0AHave%20you%3F%0A%0AIf%20not%2C%20register%20yourself%20at%3A%20bit.ly%2Fwebdevliveindia%0A%0A%23WebDev%20%23WebDevLive%20%40WebDevLiveIndia"
              target="_blank"
              rel="noreferrer"
              dark
              color="#4285F4"
              class="mt-2 google-font"
            >
              <v-icon size="20px" left>mdi-twitter</v-icon>
              <b>Share your excitement</b>
            </v-btn>
          </p>
        </v-col>
        <!-- Form Not Accepting -->
        <v-col
          md="8"
          sm="11"
          xl="8"
          cols="12"
          class="text-center"
          v-if="formSubmitted && formClosed"
        >
          <br />
          <p style="font-size:130%">The form is no longer accepting responses.</p>
          <p class="google-font">
            For any query, write to:
            <a
              href="mailto:webdevliveindia@gmail.com"
              style="text-decoration:none"
              :class="$vuetify.theme.dark == true ? 'white--text' : 'primary--text'"
            >webdevliveindia@gmail.com</a>
            <br />
            <br />Connect with us at
            <a
              href="https://twitter.com/WebDevLiveIndia"
              rel="noreferrer"
              target="_blank"
              style="text-decoration:none;"
            >@WebDevLiveIndia</a>
            for the latest updates.
            <br />
            <b>#WebDevLiveIndia #WebDevLive #WebDev</b>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import aboutEvent from "@/assets/data/about.json";
import axios from "axios";
export default {
  data: () => ({
    rules: {
      required: value => !!value || "This field is required.",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail address";
      }
    },
    userInfo: {
      fname: null,
      lname: null,
      email: null,
      city: null,
      country: null,
      company: null,
      role: null,
      themeCheckbox: [false, false, false, false],
      genderRadioGroup: 0,
      infoRadioGroup: 0,
      expRadioGroup: 0
    },
    invalidEntry: true,
    errorMessage: false,
    formSubmitted: false, // false
    formClosed: null, // null
    mainData: [],
    loader: false
  }),
  mounted() {
    this.mainData = aboutEvent;
  },
  methods: {
    validateForm() {
      if (
        this.userInfo.fname &&
        this.userInfo.lname &&
        this.userInfo.email &&
        this.rules.email(this.userInfo.email) !== "Invalid e-mail." &&
        this.userInfo.city &&
        this.userInfo.country &&
        this.userInfo.company &&
        this.userInfo.role &&
        this.userInfo.infoRadioGroup !== 0 &&
        this.userInfo.expRadioGroup !== 0 &&
        this.userInfo.genderRadioGroup !== 0 &&
        this.userInfo.themeCheckbox.filter(res => res == false || res == null)
          .length !== 4
      ) {
        this.invalidEntry = false;
      } else {
        this.invalidEntry = true;
      }
    },
    response() {
      let vm = this;
      vm.loader = true;
      let formElement = vm.$refs.formElement;
      let formData = new FormData(formElement);
      // https://cors-anywhere.herokuapp.com/
      let url =
        "https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/0/d/e/1FAIpQLSeScFEjqkA3KTVuSKezaPHoW65JHgYBlZPE4IjrWHFYXkl9SQ/formResponse";
      axios.post(url, formData).then(function(response) {
        if (response.status === 200) {
          vm.formSubmitted = true;
          if (response.data.includes("mistake")) {
            vm.formClosed = true;
            vm.loader = false;
          } else if (response.data.includes("another")) {
            vm.formClosed = false;
            vm.loader = false;
          }
        }
      });
    }
  }
};
</script>
