//1.获取原型对象 Object.getPrototypeOf()
function Person() {
    this.name = 'lyy';
}
const p = new Person();
console.log(Object.getPrototypeOf(p)); //{}

//2.设置原型对象 Object.setPrototypeOf();
//将对象a的原型，设置为对象b，因此a可以共享b的属性。
let a = {};
let b = { x: 1 };
Object.setPrototypeOf(a, b);
console.log(Object.getPrototypeOf(a)); //{ x: 1 }