let str ="hello";
let sum = (...args)=>{
    return eval(args.join("+"));
}
export {str,sum};