import Vue from 'vue';
import VueRouter  from 'vue-router';
import Home from '../componets/Home.vue';
import List from '../componets/List.vue';
Vue.use(VueRouter);
let routes = [
  {path:"/home",component:Home},
  {path:"/list",component:List}
]
let router = new VueRouter({
  routes
});
export default router;

