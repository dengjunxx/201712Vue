<template>
  <div class="header"><slot></slot></div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {}
    }

</script>

<style scoped>
  .header{
      height: 50px;
      line-height: 50px;
      background: palegreen;
      color:#333;
      width: 100%;
      text-align: center;
      position:fixed;
      left:0;
      top:0;
  }
</style>
