<template>
<div class="dialog">{{msg}}</div>
</template>
<script>
    export default {
        data() {
            return {
              msg:"你有一条消息"
            }

        }
    }

</script>

<style scoped>
  .dialog{
    width: 300px;
    height: 300px;
    position: absolute;
    left:100px;
    top:100px;
    background: #ccc;
  }

</style>
