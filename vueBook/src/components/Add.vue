<template>
  <div class="scroll-content">
    <Header>添加</Header>
    <form class="bookForm">
      <label for="bookName">书名</label>
      <input type="text" id="bookName" placeholder="请输入书名" v-model="book.bookName">
      <label for="bookCover">书的封面地址</label>
      <input type="text" id="bookCover" placeholder="请输入书的封面地址" v-model="book.bookCover">
      <label for="bookInfo">书的详细信息</label>
      <input type="text" id="bookInfo" placeholder="请处输入书的详细信息" v-model="book.bookInfo">
      <button class="add" @click="add">添加图书</button>
    </form>
  </div>
</template>
<script>
  //1.引入 2.注册 3.使用
  import Header from '../base/Header.vue';
  import {addBook} from '../api';
    export default {
      data(){
        return {
          book:{}
        }
      },
      methods:{
        async add(){
          await addBook(this.book);
          this.$router.push("/list");
        }
      },
        components: {
          Header
        },

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
      background:palegreen;
      color: #fff;
      border:none;
      margin-left: 20%;
      margin-top: 15px;
    }
  }

</style>
