/*export let str ="hello";
export function sum(...args){
    return eval(args.join("+"))
}*/
//上面一行跟下面这两行一样
/*let str ="hello";
let sum=(...args)=>{
    return eval(args.join("+"))
}
export {str,sum};*/

 let sum=(...args)=>{
     return eval(args.join("+"))
 }

export let str ="hello";
export default  sum;
//默认导出相当于匿名导出
//每一个模块里默认导出只能有一个，并且导出的是个值