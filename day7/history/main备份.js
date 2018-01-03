import Vue from 'vue';
import App from './App.vue';
import VueRouter  from 'vue-router';
Vue.use(VueRouter);//VueRouter注册成全局的，router-link和router-view才能在其他组件里事件

//console.log(App);//是一个包含组件选项的对象
//createElement()生成虚拟DOM
//render 生成真实DOM
//1.引入路由组件
import Home from './componets/Home.vue';
import List from './componets/List.vue';

//2.注册路由表
let routes = [
  {path:"/home",component:Home},
  {path:"/list",component:List}
]

//3.引入vue-router的VueRouter类
let router = new VueRouter({
  routes
});

//4.router放入Vue实例
new Vue({
  el:"#app",
  router,
  /*render:function(createElement){
    return createElement(App)
  }*/
  /*render:h=> h(App)*/
  ...App
});
