
//一个一个的获取其他模块的变量或函数
/*import {str,sum} from "./a.js";
console.log(str);
console.log(sum(1,2,3,4));*/

//一次性获取导出的对象(对导出的对象起个别名)
/*import * as obj from './a.js';

console.log(obj.str);*/

//都得确切知道导出的变量名,若不知道则没法获取
//若是默认导出的，导入时的变量名可以自己随便去起，不要加{}
 import str2,{str} from "./a.js";
console.log(str);
console.log(str2(1,2,3,4));





