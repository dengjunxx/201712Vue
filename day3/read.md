## computed
1.计算属性和方法的区别
- 计算属性有缓存功能 方法没有
- computed是依赖于其他属性（属性是vm实例的响应式数据）,依赖的属性发生改变时才去重新计算，否则获取缓存里的数据
- 方法是不管数据有没有发生改变，都会重新计算
2.computed有get和set方法
- get必须有返回值(return)  ，默认执行的
- 设置监听属性时调用set方法

## watch
-当属性发生改变时，可以通过watch监听到属性的变化
-相当于computed调用set方法
-watch支持异步 computed不支持

## 事件修饰符
- stop   e.stopPropagation  e.cancelBubble = true 阻止冒泡
- capture 捕获阶段（从外往里） 默认冒泡阶段（从里往外） 先捕获后冒泡
- self e.target||e.srcElement 事件源
- once 只绑定一次
- prevent阻止默认行为 e.preventDefault||e.returnValue =false

