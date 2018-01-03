<template>
<div>
  <router-link to="/home">首页</router-link>
  <router-link to="/list">列表页</router-link>
  <router-view></router-view>

  <button @click="show">点我</button>
</div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    methods:{
      show(){
       this.$dialog("hello",{delay:1000})
      }
    },

  }

</script>

<style>

</style>
