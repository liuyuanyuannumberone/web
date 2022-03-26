
// 在一个模块中，可以同时使用 export default 和 export 向外暴露成员
// 使用 export 向外暴露的成员，可以向外暴露多个成员,只能使用 { }来接收;

var info = {
  name: 'zs',
  age: 20
};

export default info   //在一个模块中，export default 只允许向外暴露1次
export var title = '小星星1号';
export var content = '小星星2号';

/*
* ES6简写    {name:name,id:id}====>{name,id};
*             var cal={    //干掉了function
*                 add1(){return 1},
*                 add2(){return 2},
*                 add3(n2){return n1},
*             }
*
*
*
* */






