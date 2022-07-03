console.log('main.js ', require('./a.js').x); //7
console.log('main.js ', require('./b.js').x); //8
/**
 a.js 开始被执行
b.js 开始被执行
b.js  a1
b.js 执行完毕
a.js  b2
a.js 执行完毕
main.js  a2
main.js  b2
 */