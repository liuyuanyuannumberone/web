/**
1. ES5的对象属性名都是字符串，这容易造成属性名的冲突.
对象的属性名现在可以有两种类型，一种是原来就有的字符串;另一种就是新增的Symbol类型。
凡是属性名属于Symbol类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

2.Symbol 作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，
  Object.keys()、Object.getOwnPropertyNames() JSON.stringify()返回

   Object.getOwnPropertySymbols() 获取对象的所有Symbol属性名,返回一个数组
   Reflect.ownKeys() 返回所有类型的键名，包括常规键名和 Symbol 键名。

3.由于以Symbol值作为键名，不会被常规方法遍历得到。可以利用这个特性，为对象定义一些非私有的、只用于内部的方法

 */
{
    // console.log(Symbol() === Symbol()); //false
    let [mySymbol_1, mySymbol_2, mySymbol_3] = [Symbol(), Symbol(), Symbol()];
    let a = {
        [mySymbol_1]: 1,
    };
    a[mySymbol_2] = 2; // a.mySymbol = 'Hello!';  错误写法
    Object.defineProperty(a, mySymbol_3, { value: 3, enumerable: true });
    console.log(a); //{ [Symbol()]: 1, [Symbol()]: 2, [Symbol()]: 3 }
    console.log(a[mySymbol_3]); //3

    console.log(Object.getOwnPropertySymbols(a)); // [ Symbol(), Symbol(), Symbol() ]
    console.log(Reflect.ownKeys(a));  //[ Symbol(), Symbol(), Symbol() ]
}

//消除魔术字符串:在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值
{
    //常用的消除魔术字符串的方法，就是把它写成一个变量

    // const shapeType = {
    //     triangle: 'Triangle',
    // };

    const shapeType = {
        triangle: Symbol(),
        square: Symbol(),
        trapezoid: Symbol(),
    };

    function getArea(shape, value) {
        switch (shape) {
            case shapeType.triangle:
                console.log(value + 1);
                break;
            case shapeType.square:
                console.log(value + 2);
                break;
            case shapeType.trapezoid:
                console.log(value + 3);
                break;
            default:
                console.log(value);
        }
    }
}
