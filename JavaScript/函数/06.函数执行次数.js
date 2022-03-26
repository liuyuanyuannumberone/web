// 统计函数的执行次数
var getFunCallTimes = (function () {
    // 装饰器，在当前函数执行前先执行另一个函数
    function decoratorBefore(fn, beforeFn) {
        return function () {
            var ret = beforeFn.apply(this, arguments);
            // 在前一个函数中判断，不需要执行当前函数
            if (ret !== false) {
                fn.apply(this, arguments);
            }
        };
    }

    // 执行次数
    var funTimes = {};

    // 给fun添加装饰器，fun执行前将进行计数累加
    return function (fun, funName) {
        // 存储的key值
        funName = funName || fun;
        // 不重复绑定，有则返回
        if (funTimes[funName]) {
            return funTimes[funName];
        }
        // 绑定
        funTimes[funName] = decoratorBefore(fun, function () {
            // 计数累加
            funTimes[funName].callTimes++;
            // console.log('count', funTimes[funName].callTimes);
        });
        // 定义函数的值为计数值（初始化）
        funTimes[funName].callTimes = 0;
        return funTimes[funName];
    };
})();

function f1() {
    console.log("我是最帅的");
}

f1 = getFunCallTimes(f1);
f1();
f1();
console.log(f1.callTimes); // 2


console.log("=====================================================================");

//通过闭包来控制函数的执行次数
function someFunction() {
    console.log(1);
}

function otherFunction() {
    console.log(2);
}

function setFunCallMaxTimes(fun, times, nextFun) {
    return function () {
        if (times-- > 0) {
            // 执行函数
            return fun.apply(this, arguments);
        } else if (nextFun && typeof nextFun === 'function') {
            // 执行下一个函数
            return nextFun.apply(this, arguments);
        }
    };
}

var fun = setFunCallMaxTimes(someFunction, 3, otherFunction);
fun(); // 1
fun(); // 1
fun(); // 1
fun(); // 2
console.log("=====================================================================");
var control = setFunCallMaxTimes(someFunction, 2);
control();//1
control();//1
control();//不执行