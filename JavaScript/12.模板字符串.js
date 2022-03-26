/*
*
*   `${表达式}`  变量  空格  换行
*
* */

let name = '刘园园';
let age= 18;
console.log(`${name} 
  是个好孩子`);

function test(arr, type1,type2) {
    console.log(arr); //[ '你的年龄', '不是', '' ]
    console.log(type1); //刘园园
    console.log(type2); //18
}

let showText = test`你的年龄${name}不是${age}`;



