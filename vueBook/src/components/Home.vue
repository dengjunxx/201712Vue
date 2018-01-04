<template>
<div class="scroll-content">
  <Header>首页</Header>
  <div class="bookList">
    <ul>
      <li v-for="(book,index) in hotBooks" :key="index">
        <img :src="book.bookCover" alt="">
        <span>{{book.bookName}}</span>
      </li>

    </ul>

  </div>
</div>
</template>
<script>
  import Header from '../base/Header.vue';
  import {getHotBooks,a} from '../api';
  export default {
      data(){
        return {
          hotBooks:[]
        }
      },
      created(){
        this.getHotData()
      },
      methods:{
        /*getHotData(){
            getHotBooks().then(data=>{
            console.log(data);
            this.hotBooks = data;

          })
        }*/
        //await 跟着的是promise对象请求数据成功的回调
        //语法糖
        async getHotData(){
          this.hotBooks = await  getHotBooks();
        }
      },
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
        width: 45%;
        text-align: center;
        margin: 10px 0;
        font-size: 20px;
        img{
          width: 100%;
          display: block;
        }
      }
    }
  }

</style>
