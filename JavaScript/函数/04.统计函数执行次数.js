// 统计函数的执行次数
var getFunCallTimes = (function () {
    // 执行次数
    var funTimes = {};
    return function (fun) {
        let funName = fun;
        if (funTimes[funName]) {
            return funTimes[funName];
        }
        funTimes[funName] = function () {
            funTimes[funName].callTimes++;
            fun();
        };
        // 定义函数的值为计数值（初始化）
        funTimes[funName].callTimes = 0;
        return funTimes[funName];
    };
})();

function f1() {}
f1 = getFunCallTimes(f1);
f1();
f1();
f1();
console.log(f1.callTimes); // 2
