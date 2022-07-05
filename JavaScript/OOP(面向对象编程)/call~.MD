# 函数原型链中的 apply，call 和 bind 方法是 JavaScript 中相当重要的概念，与 this 关键字密切相关
 ## 语法
  fun.call(thisArg, param1, param2, ...)
  fun.apply(thisArg, [param1,param2,...])
  fun.bind(thisArg, param1, param2, ...)
 ## 返回值
  call/apply:fun执行的结果    bind：返回fun的拷贝，并拥有指定的this值和初始参数
 
