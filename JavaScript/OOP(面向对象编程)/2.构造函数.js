// 构造函数生成实例对象，也叫实例或者对象, 函数体内部this代表了所要生成的实例对象
/**  
  如果把构造函数当普通函数用，内部的this就会指向window，他的属性会变成全局变量
  解决办法：1.use strict; 由于严格模式中，函数内部的this不能指向全局对象，默认等于undefined;
           2.构造函数内部判断是否使用new命令;
*/

function Person() {
    'use strict'
    if (!(this instanceof Person)) {
      return new Person();
    }
    this.name = 'lyy';
}
let stu = new Person();