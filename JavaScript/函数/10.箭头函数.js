let f3 = () => {};
let f4 = index => {};
let f5 = (x, y, z) => x + y + z;
let f6 = (x, y, z) => ({ x, y, z });

/**
 * 缺点：
 *  1.没有arguments,如果要用,可以用 rest 参数代替。
 *  2.无法通过 apply、call、bind 改变this指向;
 * 注意： 箭头函数中this的值和外层的this是一样的
 *  1.对象方法、原型方法、构造函数中，不适用箭头函数。
 *  2.动态上下文中的回调函数;
 */
{
    function fn1() {
        console.log('arguments', arguments);
    }
    const fn2 = (...values) => {
        console.log(values);
    };
}

//注意1：
{
    const obj = {
        name: '张三',
        getName() {
            return this.name;
        },
        getName1: () => {
            return this.name;
        },
    };
    obj.__proto__.getName2 = function () {
        return this.name;
    };
    obj.__proto__.getName3 = () => {
        return this.name;
    };
    // console.log('普通函数', obj.getName()); //张三
    // console.log('普通函数', obj.getName2()); //张三
    // console.log('箭头函数', obj.getName1()); // undefined
    // console.log('箭头函数', obj.getName3()); //undefined
}
//注意2：
{
    const btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', () => {
        this.innerHTML = 'clicked';  //this 指向window
    });
}
