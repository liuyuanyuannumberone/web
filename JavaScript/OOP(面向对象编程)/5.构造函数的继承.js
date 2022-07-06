//构造函数的继承
function Parent() {}
function Child(value) {
    Parent.call(this);
    this.prop = value;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
Child.prototype.method = '...';

{
    function UserError(message) {
        this.message = message || '默认信息';
        this.name = 'UserError';
    }
    UserError.prototype = new Error();
    UserError.prototype.constructor = UserError;
}

// JavaScript 继承机制的设计思想:实例对象共享原型对象的所有属性和方法;
// 也就是说，如果属性和方法定义在原型上，那么所有实例对象就能共享;
// 原型链：一方面，任何一个对象，都可以充当其他对象的原型
//另一方面，由于原型对象也是对象，所以它也有自己的原型
//因此，就会形成一个原型链,从对象到原型，再到原型的原型……

function Animal(type) {
    this.type = type;
}
Animal.prototype.sleep = function () {
    console.log('动物都会睡觉');
};
