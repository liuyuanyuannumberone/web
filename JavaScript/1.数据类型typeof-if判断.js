/*
 JS 数据类型 number string  boolean  undefined  null  Object:Array|Function|Regexp|Date
 */
 let a;

// Boolean 判断
console.log(Boolean(null), Boolean(undefined), Boolean(NaN), Boolean('')); //false
console.log(Boolean('0'), Boolean([]), Boolean({}),Boolean(a === undefined)); //true


//typeof 基本类型(去掉null) && Function
console.log(typeof 1, typeof '1', typeof true, typeof undefined, typeof new Function());

console.log(
    Object.prototype.toString.call(null),
    Object.prototype.toString.call({}),
    Object.prototype.toString.call(new RegExp()),
    Object.prototype.toString.call(new Date()),
    Array.isArray([])
); // [object Null] [object Object] [object RegExp] [object Date]

