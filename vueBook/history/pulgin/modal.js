import MyDialog from "./MyDialog.vue";
let modal = {

};
modal.install = function(Vue,options){
  //自己定义的插件的方法设置在Vue的原型上,这样每个vue实例都能访问
  //console.log(Vue,options);
  Vue.prototype.$dialog = function(message,opt){
    if(modal.el) return;//防止重复创建
    options = {...options,...opt};//非常常见的合并参数的方式
    //思路是用js代码不断操作整个组件，只要获取到这个组件的实例就能操作整个组件
    //1.获取到组件的构造函数
    let V = Vue.extend(MyDialog) //生成MyDialog组件的构造函数
    //2.通过new 运行这个构造函数，则拿到这个组件实例
    let vm = new V;

    //3.把vue实例挂载到DOM元素
    let oDiv = document.createElement("div");
    vm.$mount(oDiv);
    vm.msg =message;

    //4.把挂载的vm实例的DOM添加到页面上
    document.body.appendChild(vm.$el);
    modal.el = vm.$el;//识别作用

    setTimeout(function(){
      document.body.removeChild(vm.$el);
      modal.el = null;
    },options.delay);
  }
}
export default modal ;
