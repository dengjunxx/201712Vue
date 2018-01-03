生成vue-cli步骤
1.npm install vue-cli -g
2.vue init webpack myDemo
3.cd myDemo
4.npm install
5.npm run dev   

## 引入vue组件
一个.vue文件 就是vue组件
- template
- script
- style

## 路由

## 写个全局的插件
- 模态框
 -.vue
 -.js
 
 点击一个按钮，出现一个弹框，弹框里的内容可以自己定义，弹框出现后，隔一段时间消失（间隔时间也可以自己定义）
 
## 组件
 - 基础组件  base
 - 页面级组件 
 
 每个组件都有的固定的基础组件 放入App.vue
 不同的基础组件根据需要放入不同的页面级组件里
 
 1.创建组件  引入组件
 2.注册组件(component)
 3.使用这个组件（在模板里以标签的形式使用这个组件）
 
 
 npm install less less-loader --save-dev
 npm install axios --save-dev
