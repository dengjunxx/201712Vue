## 指令 有特殊函数行内属性
- v-model 让表单元素和数据一一对应，是映射关系  只要表单元素就用v-model指令
- v-text 代替{{}}  渲染成文本
- v-html 渲染成标签
- v-once 只会绑定一次 避免视图一直刷新更新内容
- v-for 遍历数组，对象，字符串，数字

## methods
 - 方法名不要跟data里的变量名重名
 - methods里的方法不要用箭头函数,因为需要方法里的this指向vm

## event
 - v-on:click 简写成@click
 - @click="fn" fn后的()若不写，则会把事件类型自动传给fn,若写了()并需要事件类型，则手动传$event
 - @keydown.ctrl.enter

## 表单元素
 - checkbox
 - radio
 - select

## 获取数据 axios
 - 基于promise
