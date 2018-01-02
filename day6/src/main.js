import {str,sum,obj} from "./a.js";
/*import './index.css';*/
import './index2.less'; //自己创建的要加./
// console.log(obj);
import img from './timg.jpg';
let oImg = new Image();
//oImg.src="./timing.jpg";//直接当成一个字符串
oImg.src=img;//打包后图片的图片
document.body.appendChild(oImg);
