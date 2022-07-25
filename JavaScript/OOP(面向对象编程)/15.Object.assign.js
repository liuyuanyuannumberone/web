//Object.assign() 源对象(source)的自身的属性(不拷贝继承属性)和可枚举的属性enumerable:true复制到目标对象(target)
//浅拷贝 同名属性的替换、数组的处理  无法正确拷贝get属性和set属性
{
    const target = { a: 1, b: 1 };
    const source1 = { b: 2, c: 2 };
    const source2 = { c: 3 };
    let target1 = Object.assign(target, source1, source2);
    // console.log(target); //{ a: 1, b: 2, c: 3 }
    // console.log(target1===target);  //true
}

{
    let o1 = { name: 'lyy' };
    Object.assign(
        o1,
        Object.defineProperties(
            {},
            {
                age: { value: 12, enumerable: false },
                grade: { value: 100, enumerable: true },
            }
        )
    );
    // console.log(o1);//{ name: 'lyy', grade: 100 }
}

//对于嵌套的对象，一旦遇到同名属性,他会进行同名属性的替换
{
    const target = { a: { b: 'c', d: 'e' } };
    const source = { a: { b: 'hello' } };
    // console.log(Object.assign(target, source));//{ a: { b: 'hello' } }
}
//处理数组，但是会把数组视为对象
{
    let o1 = Object.assign([1, 2, 3], [4, 5]);
    // console.log(o1); //[4,5,3]
}

//应用
{
    //为对象添加属性
    {
        class Point {
            constructor(x, y) {
                Object.assign(this, { x, y });
            }
        }
    }

    //克隆继承的属性
    {
        let shadowClone = function (origin) {
            let newObj = {};
            Object.setPrototypeOf(newObj, origin);
            Object.assign(newObj, origin);
        };
        const shallowClone = obj => Object.create(Object.getPrototypeOf(obj), obj);
    }

    //为对象添加方法
    {
        // SomeClass.prototype.someMethod = function () {};
        // SomeClass.prototype.anotherMethod = function () {};
        Object.assign(Number.prototype, {
            someMethod() {},
            anotherMethod() {},
        });
    }
    {
        // 合并多个对象到某个对象
        let obj = { a: 1 };
        const merge = (target, ...sources) => Object.assign(target, ...sources);
        merge(obj, ...[{ b: 1 }, { c: 3 }]); //{ a: 1, b: 1, c: 3 }
    }
}

//为属性指定默认值。两者有同名属性，则options的属性值会覆盖DEFAULTS的属性值。
{
    const DEFAULTS = {
        logLevel: 0,
        outputFormat: 'html',
    };
    let options = {
        logLevel: 1,
        outputFormat: 'js',
    };
    options = Object.assign({}, DEFAULTS, options);
}

//无法正确拷贝get属性和set属性
{
    const o1 = {
        name: 'lyy',
        set foo(value) {},
    };

    Object.getOwnPropertyDescriptor(o1, 'foo'); //{get:undefined,set:[Function: set foo],enumerable:true,configurable: true}
    Object.assign({}, o1); //{ value:undefined, writable:true,enumerable:true, configurable:true }

    //解决办法1
    const shallowMerge = (target = {}, source) =>
        Object.assign(target, Object.getOwnPropertyDescriptors(source));
    //解决办法2
    const shallowMerge1 = (target = {}, source) =>
        Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source) //可以将自身的所有属性和get\set属性一起复制
        );
}
