<template>
  <div class="scroll-content">
    <Header>添加</Header>
    <form class="bookForm">
      <label for="bookName">书名</label>
      <input type="text" id="bookName" placeholder="请输入书名">
      <label for="bookCover">书的封面地址</label>
      <input type="text" id="bookCover" placeholder="请输入书的封面地址">
      <label for="bookInfo">书的详细信息</label>
      <input type="text" id="bookInfo" placeholder="请处输入书的详细信息">
      <button class="add">添加图书</button>
    </form>
  </div>
</template>
<script>
  //1.引入 2.注册 3.使用
  import Header from '../base/Header.vue';
    export default {
        components: {
          Header
        }
    }

</script>

<style scoped lang="less">
  .bookForm{
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    label{
      padding: 10px;
    }
    input{
      width: 250px;
      height: 40px;
      padding-left: 5px;
      margin-left: 10px;
    }
    .add{
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 5px;
      background:orange;
      color: #fff;
      border:none;
      margin-left: 20%;
      margin-top: 15px;
    }
  }

</style>
