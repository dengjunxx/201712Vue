<template>
<div>
  <!--路由的出口-->
  <router-view></router-view>
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
    height: 100%;
    padding-top: 40px;
    padding-bottom: 50px;
    box-sizing: border-box;/*width或者height包含padding和border*/
    overflow: scroll;
  }
</style>
