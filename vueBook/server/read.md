api接口文档
1.首页 获取最新的8条数据 /hot  get
2.列表  /books
 - 获取所有的数据 get 不需传参
 - 获取某一条数据 get 需要传id
 - 删除某条数据 delete?id="11"
 - 添加数据   post  添加的数据发送给后台
 - 修改某条数据  put?id="111" 还要把修改的数据发送给后台 
 
 options 请求快速返回数据
 每条数据的字段:
 {"id":8,"bookName":"Vue2实践揭秘","bookCover":"https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg","bookInfo":"这本书基于api的 可以官网"}

