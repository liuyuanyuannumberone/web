//Symbol
{
    //Symbol函数的参数只是表示对当前 Symbol 值的描述
    console.log(Symbol('foo').description); //foo

    //Symbol值不能与其他类型的值进行运算,可以转为为布尔值、显式转为字符串
    console.log(Boolean(Symbol())); //true
    console.log(String(Symbol('test')), Symbol('test').toString()); //Symbol(test) Symbol(test)
}

//如果Symbol的参数是一个对象，就会调用该对象的toString方法将其转为字符串，然后才生成一个Symbol 值。
{
    const o1 = { name: 12 };
    Symbol(o1); //Symbol([object Object])

    const o2 = {
        name: 12,
        toString() {
            return this.name;
        },
    };

    console.log(Symbol(o2)); //Symbol(12)
}

/*
Symbol与Symbol.for的区别：
Symbol(字符串):每次调用都会返回一个不同的值。
Symbol.for(字符串):生成的Symbol会被登记在全局环境中供搜索,不会每次调用就返回一个新的Symbol类型的值，
                  而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
                  是全局环境的，不管有没有在全局环境运行。

Symbol.keyFor(): 返回一个已登记的Symbol类型值的key

*/
{
    let s1 = Symbol.for('t1');
    let s2 = Symbol.for('t1');
    console.log(s1 === s2); //true
    console.log(Symbol.keyFor(s1)); //t1
}
