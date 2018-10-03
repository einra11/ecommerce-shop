require("../node_modules/vuetify/src/stylus/app.styl");

import router from "./router";
import { store } from "./store";
import Vue from "vue";
import App from "./App.vue";
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VJumbotron,
  VDivider,
  VCard,
  VCarousel,
  VImg,
  VAvatar,
  VAlert,
  VTextField,
  VParallax,
  VDataIterator,
  transitions
} from "vuetify";

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VJumbotron,
    VDivider,
    VCard,
    VCarousel,
    VImg,
    VAvatar,
    VAlert,
    VTextField,
    VParallax,
    VDataIterator,
    transitions
  },

  theme: {
    primary: "#ee44aa",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
