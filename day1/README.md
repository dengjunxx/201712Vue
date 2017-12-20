# 201712Vue
## 王燕 vue全日制  QQ:1323682239 手机:13262923920

特别强调需要再三巩固的知识点，es6部分
解构赋值，字符串和数组（es5迭代方法和es6）的方法,箭头函数,class类和继承,Promise用法，async函数,Module语法等...

## 为什么学习前端框架?Vue和React
主流趋势 手工作坊的时代进入到工业化时代 ->真正的前端工程化

## 为什么学习vue?
 - 易学，易用 ->火爆程度程序相当于早期的jQuery
 - 更加适合个人或小型团队的开发（也适合大型项目）
 - 轻量级 20k
 - 面试时都用
 - 渐进式框架（有选择的获取所需要的）
 - 中文文档，入门快

## 框架和库的区别
 框架：vue，React 提供了完美的解决方案
 库：jQuery,zepto,animate.css 提供了一些JS方法，都是零零散散

## vue渐进式框架
声明式渲染 组件化开发 客户端路由(vue-router) 大规模的数据状态（vuex） 构建工具（vue-cli）

全家桶系列：vue.js+vue-router+vuex+vue-cli+axios
->完整的构成了大型项目开发

## Vue核心知识点
- 数据变化->视图自动更新 ->框架的架构模式MVVM
- 组件化开发

## 框架的架构模式
MVC  单向的数据绑定
- model 模型
- view  视图
- controller 控制器

MVVM 双向数据绑定 (Angular,Vue)
- model 模型（数据）
- view 视图
- viewModel 视图模式

## 起步
Webstorm升级到>2017版本
node版本>8.5
设置本地的配置文件-package.json(安装的依赖)
进入项目目录->npm init
->一键安装 npm init -y

cdn
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
npm install vue -D  开发环境所需要的依赖 devDependencies
npm install vue     生产环境所需要的依赖 dependencies

npm install 跑环境 把package.json所有的依赖安装上

## 双向数据绑定
- 只有表单元素才能实现双向数据绑定
- 看到表单元素写v-model
- vue通过数据劫持实现数据绑定，通过Object.defineProperty()的get和set方法监听数据变化,当数据变化时执行监听的回调函数
- vue兼容性 <=ie8不支持

## 指令
对谁进行遍历，就对谁增加指令 v-for










