import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Add from '../components/Add.vue';

let routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',component:Home},
  {path:'/list',component:List},
  {path:'/add',component:Add},
  {path:'*',redirect:"/home"}
]
let router = new VueRouter({
  routes
});
export default router;
