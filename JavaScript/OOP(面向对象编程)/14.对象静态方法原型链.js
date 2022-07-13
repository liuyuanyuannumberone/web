//1.获取原型对象 Object.getPrototypeOf()
function Person() {
    this.name = 'lyy';
}
const p = new Person();
console.log(Object.getPrototypeOf(p)); //{}

//2.设置原型对象 Object.setPrototypeOf();
//将对象a的原型，设置为对象b，因此a可以共享b的属性。
var a = {};
var b = { x: 1 };
Object.setPrototypeOf(a, b);
Object.getPrototypeOf(a) === b;

//3.判断某个属性定义在对象自身 Object.prototype.hasOwnProperty()

//4.用于检查一个对象是否具有某个属性in运算符        【不管是自身的还是继承的)】
//5.获得对象的所有可遍历属性，可以使用for...in循环  【不管是自身的还是继承的】
var o1 = { p1: 123 };
var o2 = Object.create(o1, {
    p2: { value: 'abc', enumerable: true },
});

for (let p in o2) {
    console.info(p);
}