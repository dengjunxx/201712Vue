<template>
<div class="scroll-content">
  <Header>列表</Header>
  <div class="list">
    <router-link v-for="(book,index) in books" :key ="index" tag="dl" :to="{name:'detail',params:{id:book.id}}">
      <dt>
        <img :src="book.bookCover" alt="">
      </dt>
      <dd>{{book.bookName}}</dd>
      <dd>{{book.bookInfo}}</dd>
      <dd><button>删除</button></dd>
    </router-link>
  </div>
</div>
</template>
<script>
  import Header from '../base/Header.vue';
  import {getAllBooks} from '../api';
    export default {
      data(){
        return {
          books:[]
        }
      },
      created(){
        this.getBooks();
      },
      methods:{
       async getBooks(){
          this.books = await getAllBooks();
        }
      },
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
