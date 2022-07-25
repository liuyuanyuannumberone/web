/*
 reflect:操作对象。
 设计目的：
   1.将Object对象的一些明显属于语言内部的方法(Object.defineProperty)放到Reflect对象上。
   2.修改某些Object方法的返回结果，让其变得更合理。
   3.让Object操作都变成函数行为。Reflect.has(obj, name),Reflect.deleteProperty(obj, name)
   4.Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。
     不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。

*/



{
    let a = Math.floor.apply(null, [3.2]); //3
    let b = Reflect.apply(Math.floor, null, [3.72]); //3
    let c = Reflect.apply(100 > 2 ? Math.floor : Math.ceil, null, [3.2])//3
}

/* Reflect.construct*/

{
    let a=Reflect.construct(Date,[]);
    // console.log(a instanceof Date); //true


}

/*
*   Object的全部方法 Reflect都有
*
* */

{
    const obj={};
    Object.defineProperty(obj,"age",{value:12});
    Reflect.defineProperty(obj,"name",{value:'lyy'});
    // console.log(obj);//{age:12,name:'lyy'}


}
{
    let obj = {
        name: 'lyy',
    };
    console.log(obj.hasOwnProperty("name")); //true
    console.log(Reflect.has(obj, "name")); //true
}