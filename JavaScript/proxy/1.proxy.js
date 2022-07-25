/*
代理器：
proxy:在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截。

ES6原生提供Proxy构造函数，用来生成Proxy实例。
 let proxy = new Proxy(target={}, handler={});
         target:所要拦截的目标对象
         handler参数也是一个对象，用来定制拦截行为

*/
let handler = {
    //拦截对象属性的读取   target:目标对象 receiver:操作行为所针对的对象/proxy实例本身
    get: function (target, propKey, receiver) {
        if (propKey === 'name') {
            //  return target[propKey];
            return Reflect.get(target, propKey, receiver);
        } else {
            throw new ReferenceError('Prop name "' + propKey + '" does not exist.');
        }
    },
    //拦截对象属性的设置
    set: function (target, propKey, value, receiver) {
        if (propKey === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }
        Reflect.set(target, propKey, value, receiver);
        // obj[prop] = value;
        return true;
    },

    //拦截propKey in proxy的操作;不拦截for...in循环。
    has: function (target, propKey) {
        if (propKey[0] === '_') {
            return false;
        }
        return propKey in target;
    },
    //拦截delete proxy[propKey]的操作
    deleteProperty(target, propKey) {
        delete target[propKey];
        return true;
    },
    //拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、
    //Object.keys(proxy)、for...in循环
    ownKeys(target) {},
    //拦截Object.getOwnPropertyDescriptor(proxy, propKey)
    getOwnPropertyDescriptor(target, propKey) {
        if (key[0] === '_') {
            return;
        }
        return Object.getOwnPropertyDescriptor(target, propKey);
    },
    //拦截Object.defineProperty(proxy, propKey, propDesc）
    defineProperty(target, propKey, propDesc) {},
    //拦截获取对象原型 Object.prototype.__proto__  Object.prototype.isPrototypeOf()
    //Object.getPrototypeOf() Reflect.getPrototypeOf() instanceof
    getPrototypeOf() {},
    //拦截Object.setPrototypeOf()
    setPrototypeOf(target, proto) {},

    //拦截Proxy 实例作为构造函数调用的操作  目标对象 构造函数的参数数组
    construct: function (target, args) {
        console.log(this === handler); //true
        return new target(...args);
    },
    //拦截Proxy实例作为函数调用、call和apply。目标对象、目标对象的上下文对象（this）和目标对象的参数数组。
    apply: function (target, thisBinding, args) {
        return Reflect.apply(...arguments);
    },
};

let person = {
    name: 12,
};

let proxy = new Proxy(person, handler);
let proxy1 = new Proxy(function add(a, b) {
    return a + b;
}, handler);
// console.log(proxy1(1,2));
// console.log('_name' in proxy);  //false
let proxy2 = new Proxy(function Person(name, age) {
    this.name = name;
    this.age = age;
}, handler);
// console.log(new proxy2('lyy',12)); //Person { name: 'lyy', age: 12 }
let obj = Object.create(proxy);
// obj.time; //obj对象本身并没有time属性，所以根据原型链，会在proxy对象上读取该属性，导致被拦截。
