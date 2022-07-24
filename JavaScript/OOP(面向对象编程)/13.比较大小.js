/**
   == 会自动转换数据类型
   === NaN不等于自身
   Object.is() 与===的行为基本一致。(除了这个NaN,+0比较，其他都一样)
 */

// console.log(NaN===NaN);  //false
// console.log(+0 === -0); //true
// console.log(Object.is(NaN,NaN));  //true
// console.log(Object.is(+0, -0)); //false

//ES5改造为Object.is();
{
    Object.defineProperty(Object, 'is', {
        value: function (x, y) {
            if (x === y) {
                // 针对+0不等于-0的情况
                return x !== 0 || 1 / x === 1 / y;
            }
            // 针对NaN的情况
            return x !== x && y !== y;
        },
        writable: true,
        enumerable: false,
        configurable: true,
    });
    // console.log(Object.is(NaN, NaN)); //true
    // console.log(Object.is(+0, -0)); //false
    // console.log(Object.is(1, 1)); //true
}
