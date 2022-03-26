/*
  * unshift  push 添加
  * shift   pop   删除
  *
  * */
let arr1 = [1, 2, 3, 4];
const unshifted = arr1.unshift(-1, -2, -3);  //返回的是数组新的长度
console.log(arr1);//[-1, -2, -3, 1, 2, 3, 4]
console.log(unshifted);//7


let arr2 = [1, 2, 3, 4];
const pushed = arr2.push(0, 0, 0, 0); //返回的是数组新的长度
console.log(arr2);//[1,2,3,4,,5,6,7,8];
console.log(pushed);//8


let arr3 = [1, 2, 3, 4];
const shifted = arr3.shift();//删除元素的值
console.log(arr3);//[2,3,4]
console.log(shifted);//1

let arr4 = [1, 2, 3, 4];
const poped = arr4.pop();//删除元素的值
console.log(arr4);//[1,2,3]
console.log(poped);//4
