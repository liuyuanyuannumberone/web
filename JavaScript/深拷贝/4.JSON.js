const { zipObject } = require('lodash');

/**
 * 字符串必须使用双引号表示;最后一个成员的后面，不能加逗号;
 
 * 基本类型的值只有四种：string、number（必须是十进制）、布尔值和null; 
 * 复合类型的值只能是array|object 
 * 
 * 不能是undefined symbol  NaN Infinity
 * 不能是Function|Regexp|Date
 */
{
    JSON.stringify('abc'); // ""abc""
    JSON.stringify('abc') === '"abc"'; // true
    JSON.stringify(1); // "1"
    JSON.stringify(false); // "false"
    JSON.stringify([]); // "[]"
    JSON.stringify({}); // "{}"
    JSON.stringify([1, 'false', false]); // '[1,"false",false]'
    JSON.stringify({ name: '张三' }); // '{"name":"张三"}'
}
{
    let obj = {
        a: undefined, //undefined 过滤      null
        b: Symbol(111), // Symbol 过滤      null
        c: function () {}, //function过滤   null
        
        h:Number('123a'), //NAN  null
        d: /^q/g, //Regexp {}
        e: new Date(), // Date 字符串
        f: [undefined, Symbol(111), function () {}, /^q/g, new Date(),Number('123a')], // null,null nul {} 字符串 null
      
    };
    // console.log(JSON.stringify(obj));
}

/**
 * JSON.stringify(value,replacer,space)
 *    value: 将要序列后成 JSON 字符串的值
 *    replacer(可选):
 *         1.如果该参数是一个函数,则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；
 *           value为对象：如果返回值为undefined或者函数时，该属性值会被过滤掉
             value为数组：如果返回值为undefined或者函数时，该属性值将会被null 取代

 *         2.如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的JSON 字符串中;
             如果返回值为undefined或者函数时，该属性值会会被 null 取代   

           3.如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。     
 */

{
    //参数是一个函数
    function replacer(key, value) {
        if (typeof value === 'string') {
            return undefined; // return () => {};
        }
        return value;
    }
    const foo = { a: 'Mozilla', b: 'box', c: 45, d: 'car', e: 7 };
    const list = [1, '22', 3];
    JSON.stringify(foo, replacer); //{"c":45,"e":7}
    JSON.stringify(list, replacer); //[1,null,3]

    // 参数是一个数组
    JSON.stringify(foo, ['a', 'e']); //{"a":"Mozilla","e":7}
}
