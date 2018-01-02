/*import {str,sum,obj} from './a.js';
console.log(obj);
console.log(sum(1,2,3,4,5));*/

import Vue from 'vue';
import App from './App.vue';
console.log(App); //包含组件选项的对象
//runtime "dist/vue.runtime.common.js", 不能用template属性，得用render
//createElement()生成的虚拟的DOM(对象)
//render 虚拟的DOM转换成真是的DOM

//runtime+compiler  "dist/vue.js"  6kb 可以用template

new Vue({
    el:"#app",
    /*render:function(createElement){
        return createElement("h1",[
            "hello",
            createElement("span","child")
        ])
    }*/
    render:h=>h(App)
    // template:"<div><h1><span>helllooooooo</span></h1></div>"
})


