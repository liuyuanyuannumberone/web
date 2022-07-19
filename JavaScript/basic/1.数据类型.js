/*
 JS 数据类型 基本类型 number string  boolean  null  undefined  symbol  
            这不是基本类型  NaN  Infinity

            引用类型 object(Array|Function|Regexp|Date)
 */
 let a;
 let obj=null;
 //if判断
 console.log(Boolean(null), Boolean(undefined), Boolean(NaN), Boolean(''),Boolean(0),Boolean(false)); //false
 

 //typeof判断基本类型(去掉null)和Function
 console.log(a === undefined);  //true
 console.log(Boolean(obj === null),Boolean(Array.isArray([]))); //true

// Object
console.log(
    Object.prototype.toString.call({}),
    Object.prototype.toString.call(new RegExp()),
    Object.prototype.toString.call(new Date()),
); // [object Null] [object Object] [object RegExp] [object Date]