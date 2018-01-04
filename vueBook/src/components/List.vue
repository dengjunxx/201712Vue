<template>
<div class="scroll-content">
  <Header>列表</Header>
  <div class="list">
    <router-link v-for="(book,index) in books" :key ="index" tag="dl" :to="{name:'detail',params:{id:book.id}}">
      <dt>
        <img v-lazy="book.bookCover" alt="">
      </dt>
      <dd>{{book.bookName}}</dd>
      <dd>{{book.bookInfo}}</dd>
      <dd><button @click.stop="remove(book)">删除</button></dd>
    </router-link>
  </div>
</div>
</template>
<script>
  import Header from '../base/Header.vue';
  import {getAllBooks,deleteOneBook} from '../api';
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
        },
        async remove(book){
          await deleteOneBook(book.id);
          //前台也得把这条数据删了，这样界面才会显示删除了
          this.books = this.books.filter(item=>{
            return item.id!=book.id;
          })
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
