import Vue from 'vue';
import App from './App.vue';
import router from './router';
import "./index.css";
new Vue({
  el:"#app",
  ...App,
  router
});
