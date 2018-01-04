<template>
  <div class="scroll-content">
    <Header>详情页</Header>
    <form class="bookForm">
      <label for="bookName">书名</label>
      <input type="text" id="bookName" placeholder="请输入书名" v-model="book.bookName">
      <label for="bookCover">书的封面地址</label>
      <input type="text" id="bookCover" placeholder="请输入书的封面地址" v-model="book.bookCover">
      <label for="bookInfo">书的详细信息</label>
      <input type="text" id="bookInfo" placeholder="请处输入书的详细信息" v-model="book.bookInfo">
      <button class="add" @click="update">修改图书</button>
    </form>
  </div>
</template>
<script>
  //1.引入 2.注册 3.使用
  import Header from '../base/Header.vue';
  import {getOneBook,updateOneBook} from '../api';

  export default {
    data() {
      return {
        book: {}
      }
    },
    watch: {//路由参数发生改变时，重新根据路由参数获取数据
      $route() {
        this.getOneData();
      }
    },
    created() {
      this.getOneData();
    },
    methods: {
      async getOneData() {
        this.book = await getOneBook(this.$route.params.id);
        //返回的数据要判断下，若不是{}则在详情页，若是{}则跳转到列表页
        //Object.keys()把对象转换成数组
        Object.keys(this.book).length == 0 ? this.$router.push("/list") : void 0;
      },
     async update(){
        await updateOneBook(this.$route.params.id,this.book)
      }
    },
    components: {
      Header
    }
  }

</script>

<style scoped lang="less">
  .bookForm {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    label {
      padding: 10px;
    }
    input {
      width: 250px;
      height: 40px;
      padding-left: 5px;
      margin-left: 10px;
    }
    .add {
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 5px;
      background: palegreen;
      color: #fff;
      border: none;
      margin-left: 20%;
      margin-top: 15px;
    }
  }

</style>
