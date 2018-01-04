//通过接口获取到数据
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8500";
//默认的请求接口的基础路径（域名 +端口号）

//拦截器
//要求axios返回的数据是res.data
axios.interceptors.response.use(res=>{
  return res.data;
})

//获取热门图书
export let getHotBooks = function(){
  return axios.get("/hot")
}
//获取所有的图书
export let getAllBooks = function(){
  return axios.get("/book")
}

//获取一条图书的信息
export let getOneBook = function(id){
  return axios.get(`/book?id=${id}`);
}

//修改一条数据
export let updateOneBook = function(id,data){
  return axios.put(`/book?id=${id}`,data);
}


