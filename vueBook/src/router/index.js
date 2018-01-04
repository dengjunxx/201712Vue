import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// import Home from '../components/Home.vue';
// import List from '../components/List.vue';
// import Add from '../components/Add.vue';
// import Detail from '../components/Detail.vue';

let routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',
    component:() => import('../components/Home.vue'),
    meta:{keepAlive:true}
  },
  {path:'/list',
    component:() => import('../components/List.vue')
  },
  {path:'/add',
    component:() => import('../components/Add.vue')
  },
  {path:'/detail/:id',
    component:() => import('../components/Detail.vue'),
    name:"detail"
  },
  {path:'*',redirect:"/home"}
]
let router = new VueRouter({
  routes
});
export default router;
