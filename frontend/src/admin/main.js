import Vue from "vue";
import store from "./store";
import App from "./App";

new Vue ({
  store,
  el:"#app-admin",
  render: h => h(App),
});