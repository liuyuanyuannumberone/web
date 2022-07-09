
/*
Array.prototype.concat()
String.prototype.concat()

拼接数组

* */
let arr = ['a', 'b', 'c'];
let arr2 = ['1', '2', '3'];
let str = 'ss';
let arr3 = arr.concat(arr2, str, arr2, 22, [44, 55]);
//console.log(arr3);//['a', 'b', 'c',  '1','2', '3', 'ss', '1','2', '3', 22, 44,55]
arr3 = arr3.concat(str);
console.log(arr3);

/*
*
* 不过concat这个函数不适合合并两个大型·的数组，因为它将消耗大量的内存来存储新创建的数组
* Array.prototype.push.apply(arr1,arr2);这个方法不是创建一个新的数组，只是单纯合并；
* */
let ex1=[1,2,3];
let ex2=[4,5,6];
Array.prototype.push.apply(ex1,ex2);
console.log(ex1);










