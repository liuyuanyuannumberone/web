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