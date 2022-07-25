//属性描述对象
const obj = {
    value: 1, // writable和configurable有一个为true，就允许改动
    writable: true, //value是否可改变
    enumerable: true, //可遍历。设为false,for...in、Object.keys() JSON.stringify、Object.assign()跳过
    configurable: true, //false value、writable、enumerable都不能修改了。比如无法删除该属性。

    get: undefined,
    set: undefined,
};
//get 和 set
{
    let o2 = {
        n: 5,
        get name() {
            return this.n;
        },
        set name(value) {
            this.n = value;
        },
    };
    o2.name = 123;
    o2;
    o2.name; //{ n: 123, name: [Getter/Setter] } 123
}

//Object.getOwnPropertyDescriptor():获取某个属性的描述对象【对象自身的属性】
//Object.getOwnPropertyDescriptors()
{
    let o1 = { name: 'lyy', age: 12 };
    Object.getOwnPropertyDescriptor(o1, 'name'); //{ value: 'lyy', writable: true, enumerable: true, configurable: true }
    console.log(Object.getOwnPropertyDescriptors(o1)); //{ name: { value: 'lyy', writable: true, enumerable: true, configurable: true },age: { value: 12, writable: true,enumerable: true, configurable: true } }
}

//defineProperty 定义或修改属性描述对象,返回修改后的对象。writable、configurable、enumerable默认值都为false
{
    let o1 = {};
    let o3 = Object.defineProperty(o1, 'name', {
        value: 15,
        writable: true,
        enumerable: true,
        configurable: true,
    });
    console.log(o1 === o3); //true
    console.log(o1, Object.getOwnPropertyDescriptor(o1, 'name')); //{ name: 15 } { value: 15, writable: true, enumerable: true, configurable: true }
}

// Object.defineProperties()
{
    let o1 = Object.defineProperties(
        {},
        {
            p1: { value: 123, enumerable: true },
            p2: { value: 'abc', enumerable: true },
        }
    );
}