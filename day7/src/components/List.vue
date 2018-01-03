<template>
<div class="scroll-content">
  <Header>列表</Header>
  <div class="list">
    <dl>
      <dt>
        <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
      </dt>
      <dd>Vue2实践揭秘</dd>
      <dd>这本书基于api的 可以官网</dd>
      <dd><button>删除</button> <button>修改</button></dd>
    </dl>
  </div>
</div>
</template>
<script>
  import Header from '../base/Header.vue';
    export default {
        components: {
          Header
        }
    }

</script>

<style scoped lang="less">
  .list dl{
    width: 100%;
    border-bottom:2px solid #ccc;
    float: left;
    padding: 10px 0;
    dt{
      float: left;
      width: 30%;
      margin-right:10px;
      img{
        width: 100%;
      }
    }
    dd{
      line-height: 30px;
      font-size: 18px;
    }
  }
</style>
