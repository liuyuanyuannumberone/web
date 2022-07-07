// 1.使用自执行函数 外部变量无法访问内部变量，产生了100个独立作用域
for (var i = 0; i < 10; i++) {
    // setTimeout(function () {
    //     console.log(i);  //10
    // }, 1000);

    (function (j) {
        setTimeout(function () {
            console.log("set",j);
        }, 1000);
    })(i);
}
// 2.
var data1 = [];
var data2 = [];
for (var i = 0; i < 4; i++) {
    data1[i] = function () {
        console.log('data1', i);
    };
    (function (i) {
        data2[i] = function () {
            console.log('data2', i);
        };
    })(i);
}

data1[0](); //4
data1[1](); //4
data1[2](); //4

data2[0](); //0
data2[1](); //1
data2[2](); //2

//也可以使用let,let 具有块级作用域，形成的3个私有作用域都是互不干扰的。
var data3 = [];
for (let i = 0; i < 4; i++) {
    data3[i] = function () {
        console.log('data3', i);
    };
}
data3[0](); //0
data3[1](); //1
data3[2](); //2