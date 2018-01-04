import Vue from 'vue';
import App from './App.vue';
import router from './router';
import "./index.css";
//使用轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload';
Vue.use(VueAwesomeSwiper);

Vue.use(VueLazyload);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "http://img1.imgtn.bdimg.com/it/u=3779605030,1222595953&fm=27&gp=0.jpg ",
  loading: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif',
  attempt: 1
})

new Vue({
  el:"#app",
  ...App,
  router
});
