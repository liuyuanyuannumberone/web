//构造函数的继承
function Parent() {}
function Child(value) {
    Parent.call(this);
    this.prop = value;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
Child.prototype.method = '...';

// JavaScript 继承机制的设计思想:实例对象共享原型对象的所有属性和方法;
// 也就是说，如果属性和方法定义在原型上，那么所有实例对象就能共享;
// 原型链：
function Animal(type){
    this.type=type
}
Animal.prototype.sleep=function(){
    console.log("动物都会睡觉");
}

