//实现请求的接口的逻辑 ---后台部分
//1.实现/hot 返回最新的8条数据

let http =require("http"),
    fs = require("fs"),
    url = require("url");
let slider = require("./sliders");
//1.读取文件
  function read(cb){
    fs.readFile("./book.json","utf-8",function(err,books){
      if(err||books.length==0){
        cb([])
      }else{
        books = JSON.parse(books);
        cb(books);
      }
    })
  }

//2.写入文件
function write(data,cb){
    fs.writeFile("./book.json",data,cb);
}

http.createServer(function(req,res){
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')

  //pathname 路径 query请求的参数 true 把请求参数放在对象里
  if(req.method=="OPTIONS") return res.end();
  let {pathname,query}=url.parse(req.url,true);
  //请求轮播图数据
  if(pathname=="/slider"){
    res.setHeader("Content-Type","application/json;charset=utf-8");
    res.end(JSON.stringify(slider));
    return ;
  }

  if(pathname=="/hot"){
   read(function(books){
      //处理逻辑  返回最新的8条数据
     books = books.reverse().slice(0,8);
     res.setHeader("Content-Type","application/json;charset=utf-8");
     res.end(JSON.stringify(books));
   })
    return;
  }
  if(pathname=="/book"){
    let id = parseInt(query.id); //获取参数id的值
    switch (req.method){
      case "GET":
        if(!isNaN(id)){
            read(function(books){
              let book =books.find(item=>{
                return item.id === id;
              })
             if(!book) book = {};
              res.setHeader('Content-Type',"application/json;charset=utf-8");
              res.end(JSON.stringify(book));
            })
        }else{
          read(function(books){
            res.setHeader('Content-Type',"application/json;charset=utf-8");
            res.end(JSON.stringify(books));
          });
        }

        break;
      case  "POST":
        let str2 = "";
        req.on("data",function(chunck){
          str2+=chunck;
        })
        req.on("end",function(){
          let book = JSON.parse(str2);
          read(function(books){
           book.id =  books.length>0?parseInt(books[books.length-1].id)+1:1;
            books.push(book);
            books = JSON.stringify(books);
            write(books, function () {
              res.setHeader("Content-Type", "application/json;charset=utf-8");
              res.end(books);
            })
          })
        })


        break;
      case  "PUT":
        let str = "";
        //有数据时触发data事件
        req.on("data",function(chunck){
          str+=chunck;
        })
       //数据发送结束了，触发end事件
        req.on("end",function(){
          let book = JSON.parse(str);
          read(function(books){
            books = books.map(item=>{
              if(item.id == id){
                return book
              }
              return item;
            })
            books = JSON.stringify(books)
            write(books,function(){
              res.setHeader("Content-Type","application/json;charset=utf-8");
              res.end(books);
            })
          })
        })
        //修改数据的id值
        //1.获取客户端请求体里的内容
        //2.从所有的数据中找到id的这一项，把id的这一项更新成拿到的数据
        //3.把更新后的数据重新写入book.json文件里

        break;
      case  "DELETE":
        read(function(books){
          books = books.filter(item=>{
            return item.id!=id;
          })
          write(JSON.stringify(books),function(){
            res.setHeader("Content-Type","application/json;charset=utf-8");
            res.end(JSON.stringify({}));
          })
        });
        break;
    }
    return;
  }

  //读取静态的数据
  //根据路径读取文件的信息
  fs.stat("."+pathname,function(err,stats){
    if(err){
      fs.createReadStream("index.html").pipe(res);
    }else{
      if(stats.isDirectory()){
        let pa = require("path").join("."+pathname+"./index.html");
        fs.createReadStream(pa).pipe(res);
      }else{
        fs.createReadStream("."+pathname).pipe(res);
      }
    }
  })



}).listen(8500,()=>{
  console.log("8500端口被启用")
})

