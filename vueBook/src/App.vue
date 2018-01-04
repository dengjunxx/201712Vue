<template>
<div>
  <!--路由的出口-->
  <transition name="fadeIn">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  </transition>
  <transition name="fadeIn">
     <router-view v-if="!$route.meta.keepAlive"></router-view>
  </transition>
  <Tab></Tab>
</div>
</template>
<script>
    import Tab from "./base/Tab.vue";
    export default {
        components: {
          Tab
        }
    }

</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  html,body{
    height: 100%;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #333;
  }
  .scroll-content{
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    position: absolute;
    left:0;
    right: 0;
    box-sizing: border-box;/*width或者height包含padding和border*/
    overflow: scroll;
  }
  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
     transition: 0.3s linear;
  }
  .fadeIn-leave{

  }
  .fadeIn-leave-active{
    transition: 0.3s linear;
    opacity: 0;
  }
</style>
