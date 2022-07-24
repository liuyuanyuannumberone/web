//1.直接字面量创建
{
    let obj = {};
    // console.log(obj.__proto__ === Object.prototype); // true
    // console.log(obj instanceof Object); // true
}

//2.new关键字创建
{
    let obj1 = new Object();
    // console.log(obj1.__proto__ === Object.prototype); // true
    // console.log(obj1 instanceof Object); // true

    // new 的过程中发生了什么
    function Person() {
        this.name = 'lyy';
    }
    {
        let [p, obj = {}] = []; // 创建一个空对象，作为将要返回的实例对象
        obj.__proto__ = Person.prototype; // obj的__proto__指向构造函数Person的prototype
        let result = Person.call(obj); // 构造函数Person的this指向空对象，然后执行构造函数,
        p = typeof result === 'object' ? result : obj; //如果构造函数内部有return+对象,返回这个对象。否则默认返回this;
        console.log(p);
    }
}

//3.Object.create() 以A对象为原型，生成了B对象。B继承了A的所有属性和方法。
{
    let A = {
        name: '张三',
        greeting: function () {
            // console.log(11);
        },
    };
    let B = Object.create(A);
    B.greeting();

    {
        //原理 新建一个空的构造函数F，然后让F.prototype属性指向参数对象A，最后返回一个F的实例，从而实现让该实例继承A的属性。
        Object.create = function (A) {
            function F() {}
            F.prototype = A;
            return new F();
        };
    }
}
