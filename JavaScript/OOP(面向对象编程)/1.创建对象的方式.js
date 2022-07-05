//1.直接字面量创建
let obj1 = {};
console.log(obj1.__proto__ === Object.prototype); // true
console.log(obj1 instanceof Object); // true

//2.new关键字创建
var obj2 = new Object();
console.log(obj2.__proto__ === Object.prototype); // true
console.log(obj2 instanceof Object); // true

// new 的过程中发生了什么
function Person() {
    this.name = 'lyy';
}
let p;
var obj = new Object(); // 创建一个空对象，作为将要返回的实例对象
obj.__proto__ = Person.prototype; // obj的__proto__指向构造函数Person的prototype
// 构造函数Person的this指向空对象，然后执行构造函数,
var result = Person.call(obj);
// 如果构造函数内部有return+对象,返回这个对象。否则默认返回this;
p = typeof result === 'object' ? p : obj; //console.log('构造函数的返回值', result);

//3.Object.create() 以这个现有的对象作为模板，生成新的实例对象
//Object.create方法以A对象为原型，生成了B对象。B继承了A的所有属性和方法。
var A = {
    name: '张三',
    greeting: function () {
        console.log(11);
    },
};
var B = Object.create(A);
B.greeting();

//原理 新建一个空的构造函数F，然后让F.prototype属性指向参数对象A，最后返回一个F的实例，从而实现让该实例继承A的属性。
if (typeof Object.create !== 'function') {
    Object.create = function (A) {
        function F() {}
        F.prototype = A;
        return new F();
    };
}

new Object() === Object.create({}) === Object.create(Object.prototype);
//如果想要生成一个不继承任何属性（比如没有toString和valueOf方法）的对象
Object.create(null);