let vm = new Vue({
    el:"#app",
    data:{
        title:"",
        todos :[{isSelected:false,content:'吃饭'},{isSelected:false,content:'睡觉'}],
        cur:"",
        hash:""
    },
    created(){ //获取数据
        //若本地存储里有，则取localStorage,若没有再取初始化的data里todos
        this.todos = JSON.parse(localStorage.getItem("todos"))|| this.todos;
        //设置hash值默认值
        this.hash = window.location.hash ||"#/all";
        //通过hashchange事件捕获到hash值得变化
        window.addEventListener("hashchange",()=>{
            this.hash = window.location.hash;
        },false);

    },
    methods:{
        add(){
            /*输入框里的内容添加到列表里*/
           this.todos.push({isSelected:false,content:this.title});
           this.title = '';
        },
        remove(todo){
            //把匹配条件的内容返回，不匹配的就过滤掉了
            this.todos = this.todos.filter(item=>{
                return item!=todo
            })
        },
        remember(todo){
            this.cur = todo;
        },
        cancel(){ //输入框消失，span 显示 ->操作cur的值
            this.cur = "";
        }
    },
    computed:{
        count(){ //默认只调用get方法
            //等于没有选中的多选框的个数
           return  this.todos.filter(item=>{
                return !item.isSelected
            }).length
        },
        filterTodos(){
              if(this.hash=="#/all"){
                  return this.todos;
              }
              if(this.hash=="#/finish"){
                  return this.todos.filter(item=>{
                      return item.isSelected
                  })
              }
              if(this.hash=="#/unfinish"){
                   return  this.todos.filter(item=>{
                        return !item.isSelected
                    })
              }
        }
    },
    watch:{
        todos:{ //默认只监控一层
            handler(newVal){
                localStorage.setItem("todos",JSON.stringify(newVal));
            },
            deep:true  //深度监控
        }
    }
})

/*1.动态绑定（变量和方法）
* 2.勾选上添加删除线的样式
* 3.计算count的值
* 4.双击列表内容时，出现可编辑的输入框 ，失去焦点或者按回车时，输入框消失
*   - created 获取数据
*   - 只要todos改变，就得存到本地存储
* 5.根据hash值确定列表里显示的内容有哪些
*    - 重新计算个属性(filterTodos)，根据hash值从todos筛选出符合的事项
* */