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

## 条件渲染
- 1.v-if v-else-if  v-else
- 设置条件判断的DOM元素得连续
- 操作的DOM元素
- 2.template 设置v-if 条件的渲染分组 在这里template仅仅表示包裹的意思
- 3.key 管理复用的元素 若不想复用DOM元素,只需要给相应的DOM元素增加不同的key值
- DOM元素是销毁（removeChild完全移除的）和重建 （不要频繁的显示和隐藏,会非常消耗性能）

v-show （适合于频繁的显示和隐藏）
- 操作样式 是否添加display:none 样式

## 动态绑定类名(class)和行内样式(style)
- 都有两种写法： 第一种对象的方式  另一种是数组的方式
- 动态的优先级高于原来的







