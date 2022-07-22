/**
作用域:全局作用域 函数作用域 块级作用域

 */
{
    //i是var声明的 全局作用域
    //i是let声明的块级作用域.每次循环i都是一个新的块级变量;设置循环变量的是一个父作用域,而循环体内部是一个子作用域

    let arr = [];
    /*
     for (var i = 0; i < 5; i++) {
        arr[i] = function () {
            console.log(i); //i为全局变量
        };
     }
     */
    for (let i = 0; i < 5; i++) {
        arr[i] = function () {
            console.log(i);
        };
    }
    for (let i = 0; i < 3; i++) {
        let i = 'abc';
        // console.log(222,i); // 3次都打印abc
    }
}

//const实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。
{
    // const a=5;a=6  会报错;
    const arr = [];
    // arr=[];  //报错
    arr[0] = 2; //不报错;
}
