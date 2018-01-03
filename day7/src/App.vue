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

<style scoped>

</style>
