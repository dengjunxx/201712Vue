//CommonJs规范
//引入模块 require() 导出模块 module.exports
let path = require("path");//path.resolve()根据当前的路径生成一个绝对路径
//console.log(path.resolve("./dist"));
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:'./src/main.js', //打包入口文件
    output: {
        filename: "bundle.js", //打包后的文件名
        path:path.resolve("./dist") //必须写的是绝对路径
    },
    module: {//设置模块的解析规则
        rules:[
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.(jpg|png|gif)$/,use:"url-loader?limit=10000"},//10000字节 = 10k
            {test:/\.(eot|woff|woff2|ttf|svg)$/,use:"url-loader"}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html" //设置html模板
            //filename:"login.html" //在dist下输出的html的名称
        })
    ]
}
