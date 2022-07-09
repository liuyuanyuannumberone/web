/**
 * JavaScript提供了一个内部数据结构，用来描述对象的属性，这个内部数据结构称为属性描述对象
 **/

let obj1 = {
    value: 123, //属性值  writable和configurable有一个为true，就允许改动
    writable: true, //value是否可改变

    //属性是否可遍历，如果设为false，会使得某些操作for...in、Object.keys() JSON.stringify 跳过该属性。
    enumerable: true,

    //configurable为false时，value、writable、enumerable和configurable都不能被修改了。比如无法删除该属性
    configurable: false, //表示可配置性

    //一旦定义了取值函数get或set,不写value  writable必须为true
    get: undefined,
    set: undefined,
};

/**
      Object.getOwnPropertyDescriptor()：获取某个属性的描述对象,只能用于对象自身的属性，不能用于继承的属性
   
      1.返回修改后的对象，定义或修改属性描述对象
      2.writable、configurable、enumerable这三个属性的默认值都为false
      Object.defineProperty()   Object.defineProperties() 


      3.存取器
       存值函数称为setter，使用属性描述对象的set属性
       取值函数称为getter，使用属性描述对象的get属性

*/

let obj3 = Object.defineProperty({}, 'p', { value: 1 });
//{ value: 1, writable: false, enumerable: false, configurable: false }
console.log(Object.getOwnPropertyDescriptor(obj3, 'p'));

let obj2 = {
    name: 'lyy',
};
Object.defineProperty(obj2, 'name', {
    value: 15,
    writable: true,
    enumerable: true,
    configurable: true,
});
//{ name: 15 } { value: 15, writable: true, enumerable: true, configurable: true }
console.log(obj2, Object.getOwnPropertyDescriptor(obj2, 'name'));

let obj4 = Object.defineProperties(
    {},
    {
        p1: { value: 123, enumerable: true },
        p2: { value: 'abc', enumerable: true },
        p3: {
            get: function () {
                return this.p1 + this.p2;
            },
            enumerable: true,
            configurable: true,
        },
    }
);

//get和set
{
    //第一种写法
    //  let obj = Object.defineProperty({}, 'p', {
    //      get: function () {
    //          console.log('getter1');
    //          return 1;
    //      },
    //      set: function (value) {
    //          console.log('setter1');
    //      },
    //  });
    //  obj.p; //getter1
    //  obj.p = 123; // setter1

    //第二种写法
    let obj1 = {
        n: 5,
        get p() {
            return this.n;
        },
        set p(value) {
            this.n = value;
        },
    };
    obj1.p = 123;
    console.log(obj1,obj1.p); //123
}
