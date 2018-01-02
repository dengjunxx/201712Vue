### 模块化
- 为了保证代码充分解耦，一个大的项目拆分成互相依赖的一个一个的小的模块，最后再通过简单的方式合并在一起
- 每一个js文件都可以看成一个单独的模块
在node这边（服务器端），提出CommonJs模块化规范
- 模块的引入 require (内置模块，第三方模块，自定义模块)
- 模块的导出 module.exports ||exports
浏览器:
- CMD sea.js AMD require.js
- UMD 处理兼容（require.js和CommonJS）
- es6module
  - 模块创建 （每个js文件就是一个模块）
  - 模块的引入(import)
    import {str} from "./a.js" 解构赋值的方式获取到导出的每个变量或方法
    import * as obj from "./a.js" obj.str
    import str2 from "./a.js"  对默认导出的变量起个别名
  - 模块的导出(export) 
    export let str ="hello"
    export default str;
  
安装在项目里，尽量别安装在全局，在全局下容易引起版本的冲突 

npm init -y 初始化本地配置文件 package.json文件 
### webpack
npm install webpack --save-dev
 
 在package.json里配置启动webpack的命令->.bin ->webpack.cmd->webpack/bin/webpack.js->当前目录下(基于package.json文件)webpack.config.js
 
 在命令行 执行 npm run build 就能运行webpack
  
 webpack.config.js 是webpack配置文件 webpack所有的操作都根据这个配置文件进行的 
 
 1.npm install webpack --save-dev
 2.package.json->"scripts": {
                     "build":"webpack"
                   },
 3.在项目下建一个webpack.config.js文件
 
 ### es6->es5
 - babel (babel-core 核心功能包 babel-loader babel解析器)
 npm install babel-core --save-dev
 npm install babel-loader --save-dev  --解析js
 
 在webpack配置下js的解析器是babel-loader
 -> {test:/\.js$/,use:"babel-loader",exclude:/node_modules/}
  
 presets(预设)指编译的规则,它是plugins集合
 npm install babel-preset-es2015 --save-dev ->es6转换es5
 npm install babel-preset-stage-0 --save-dev ->解析es7
 
 使用babel需要设置babel配置文件 .babelrc 在.babelrc设置presets和plugins
 
 ### 解析CSS
 css-loader（解析css） style-loader  (css代码放入style标签)
 
 


