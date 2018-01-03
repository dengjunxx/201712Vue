let fs = require("fs"),
   http = require("http"),
    url = require("url");

function read(callback){
  fs.readFile("./book.json","utf-8",function(err,books){
    if(err||books.length==0) return;
    books = JSON.parse(books);
    callback(books);
  })
}

function write(data,callback){
  fs.writeFile("./book.json",JSON.stringify(data),function(err){
    if(err) return ;
    callback();
  })

}

http.createServer(function(req,res){
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')
    let {pathname,query} = url.parse(req.url,true);
    let id = query.id;
    if(pathname=="/api/hot"){  //返回最新的15条信息
       read(function(books){
         books = books.reverse().slice(0,15);
         res.end(JSON.stringify(books));
       })
    }else if(pathname=="/api/book"){
      let method = req.method;
      switch (method){
        case "GET":
          if(id){
            read(function(books){
             let book = books.find(item=>{
                return item.id == id;
              });
              res.end(JSON.stringify(book));
            })
          }else{
            read(function(books){
              res.end(JSON.stringify(books));
            })
          }
          break;

        case  "POST":
          let str = "";
          req.on("data",function(chunck){
            str+=chunck;
          });
          req.on("end",function(){
            let book = JSON.parse(str);
            read(function(books){
              book.id =  books.length==0?1:parseInt(books[books.length-1].id)+1;
              books.push(book);
              write(books,function(){
                res.end(JSON.stringify({}));
              })
            })
          })
          break;
        case  "PUT":
          //1.获取到响应体里的内容
          //2.根据id参数值修改这条内容
          let str1 = "";
          req.on("data",function(chunck){
            str1+=chunck;
          });
          req.on("end",function(){
            let book = JSON.parse(str1);
            read(function(books){
               books = books.map(item=>{
                     if(item.id==id)return book;
                     return item;
                 });
              write(books,function(){
                res.end(JSON.stringify(book));
              })

            })
          })
          break;
        case  "DELETE":
          //根据id值过滤掉这条数据
          read(function(books){
             books = books.filter(item=>{
               return item.id!=id;
             });
            write(books,function(){
              res.end(JSON.stringify(books));
            })
          })
          break;
      }
    }
}).listen(9000,()=>{
  console.log("9000端口号已被启用");
});
