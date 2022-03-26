// 闭包

{
    function createGreeter(greeting) {
        return function (name) {
            console.log(greeting + ',' + name);
        }
    }

    const sayHello = createGreeter('Hello');
    sayHello('Joe');//Hello,Joe;
}


//对象赋值
{
    const obj = {
        name: 'lyy',
        food: 'apple',
        sex: '女',
    };
    const {name, food, sex} = obj;
    console.log(obj);//{ name: 'lyy', food: 'apple', sex: '女' }
    console.log(name, food, sex); //Joe cake 男
}



//设置默认值
{
    let {a = 10, b = 5} = {a:3};   //b设置为默认值,
    console.log(a, b); //3,5
}



//返回数组
{

    let [a, b] = ["name", "age"];
    console.log(a, b); //name age
}


//两个值互相交换；
{
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b); //2 1
}


//返回数组指定位置上的元素
{
    let a, b;
    [a, , ...b] = [1, 2, 3, 4, 5];
    console.log(a, b); //1 [3,4,5];
}