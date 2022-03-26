//typeof
console.log(typeof ''); // string 有效
console.log(typeof 1); // number 有效
console.log(typeof Symbol()); // symbol 有效
console.log(typeof true); //boolean 有效
console.log(typeof undefined); //undefined 有效
console.log(typeof new Function()); // function 有效
console.log(Array.isArray([]));
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(new Date()));   // [object Date]
console.log(Object.prototype.toString.call(new RegExp())); // [object RegExp]
console.log(Object.prototype.toString.call({})); //[object Object]

let a;
if (a === undefined) {
    console.log(1);  //执行
}
if (typeof a === "undefined") {
    console.log(2);  //执行
}


//有上边的就够了
console.log(typeof []); //object 无效
console.log(typeof {}); //object 无效
console.log(typeof null); //object 无效
console.log(typeof new Date()); //object 无效
console.log(typeof new RegExp()); //object 无效


console.log(Object.prototype.toString.call(''));// [object String]
console.log(Object.prototype.toString.call(1));// [object Number]
console.log(Object.prototype.toString.call(true)); // [object Boolean]
console.log(Object.prototype.toString.call(Symbol())); //[object Symbol]
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call(new Function()));// [object Function]
console.log(Object.prototype.toString.call([]));// [object Array]
console.log(Object.prototype.toString.call(new Error())); // [object Error]



/* instanceof 判断是不是某个对象的实例*/







