<template>
<div class="scroll-content">
  <Header>首页</Header>
  <div class="bookList">
    <ul>
      <li>
        <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
        <span>Vue2实践揭秘</span>
      </li>
      <li>
        <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
        <span>Vue2实践揭秘</span>
      </li>
      <li>
        <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
        <span>Vue2实践揭秘</span>
      </li>
      <li>
        <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
        <span>Vue2实践揭秘</span>
      </li>
      <li>
        <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
        <span>Vue2实践揭秘</span>
      </li>
      <li>
        <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
        <span>Vue2实践揭秘</span>
      </li>
      <li>
        <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
        <span>Vue2实践揭秘</span>
      </li>
      <li>
        <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
        <span>Vue2实践揭秘</span>
      </li>
      <li>
        <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
        <span>Vue2实践揭秘</span>
      </li>
      <li>
        <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
        <span>Vue2实践揭秘</span>
      </li>
      <li>
        <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
        <span>Vue2实践揭秘</span>
      </li>
      <li>
        <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
        <span>Vue2实践揭秘</span>
      </li>
      <li>
        <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
        <span>Vue2实践揭秘</span>
      </li> <li>
      <img src="https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg" alt="">
      <span>Vue2实践揭秘</span>
    </li>

    </ul>

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
  .bookList{
    padding: 20px;
    ul{
      li{
        float: left;
        width: 32%;
        text-align: center;
        margin: 10px 0;
        font-size: 16px;
        img{
          width: 100%;
          display: block;
        }
      }
    }
  }

</style>
