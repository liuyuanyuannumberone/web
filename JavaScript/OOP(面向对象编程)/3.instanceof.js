// instanceof 用于检测某个实例对象的原型链上是否存在构造函数的原型对象
let Person = function () {};
let p = new Person();
console.log(p instanceof Person); //true

//原理  instanceof 主要的实现原理就是左边变量的原型链上在右边的原型对象
function new_instance_of(leftVaule, rightVaule) { 
  let rightProto = rightVaule.prototype; 
  leftVaule = leftVaule.__proto__;

  while (true) {
    if (leftVaule === null) {
          return false;	
      }
      if (leftVaule === rightProto) {
          return true;	
      } 
      leftVaule = leftVaule.__proto__; 
  }
}