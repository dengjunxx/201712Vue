import Vue from 'vue';
import App from './App.vue';
import router from './router';
import modal from './pulgin/modal.js';
 Vue.use(modal,{delay:3000});
new Vue({
  el:"#app",
  router,
  ...App
});
