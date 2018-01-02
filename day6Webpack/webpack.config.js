let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:"./src/main.js",
    output: {
        filename: "bundle.js",
        path:path.resolve("./dist")
    },
    module: {
        rules:[
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.less$/,use:["style-loader","css-loader",'less-loader']},
            {test:/\.(png|jpg|gif)$/,use:"url-loader"},
            {test:/\.(eot|woff|woff2|svg|ttf)$/,use:"url-loader"},
            {test:/\.vue$/,use:"vue-loader"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/a.html"
        })
    ]
}