<template>
<div class="tab">
  <router-link to="/home">
    <i class="iconfont icon-shouye"></i>
    <span>首页</span>
  </router-link>
  <router-link to="/list">
    <i class="iconfont icon-liebiao"></i>
    <span>列表</span>
  </router-link>
  <router-link to="/add">
    <i class="iconfont icon-icon02"></i>
    <span>添加</span>
  </router-link>
</div>
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

<style scoped lang="less">
  /*
  display:flex
  flex-direction:row |column 主轴的方向
  flex-wrap:nowrap|wrap 溢出盒子时是否换行
  justify-content:center 主轴上居中对齐
  align-items：center 交叉轴上居中对齐
  */
    .tab{
      width: 100%;
      height: 50px;
      background: #fff;
      border-top:2px solid #ccc;
      position: fixed;
      bottom:0;
      left:0;
      display: flex;
      justify-content: space-around;
      a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        &.router-link-active{/*当前链接选中的效果*/
          color: red;
        }
      }
    }
</style>
