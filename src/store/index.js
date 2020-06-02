import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      {
        text: "Home",
        to: "/",
        icon: "mdi-home",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      // {
      //   text: "Agenda",
      //   to: "/agenda",
      //   icon: "mdi-assistant",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: true,
      //   },
      // },
      {
        text: "Team",
        to: "/team",
        icon: "mdi-account-settings",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "Speakers",
        to: "/speakers",
        icon: "mdi-assistant",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      // {
      //   text: "About",
      //   to: "/about",
      //   icon: "mdi-comment-alert",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: true,
      //   },
      // },
      {
        text: "schedule",
        to: "/schedule",
        icon: "mdi-contacts",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      // {
      //   text: "Partners",
      //   to: "/partners",
      //   icon: "mdi-currency-usd",
      //   meta: {
      //     showToolbar: false,
      //     showBottomNav: false,
      //   },
      // },
      // {
      //   text: "Blogs",
      //   to: "/blogs",
      //   icon: "mdi-blogger",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: false,
      //   },
      // },
    ],
  },
  getters: {
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
  },
  actions: {},
  modules: {},
});
