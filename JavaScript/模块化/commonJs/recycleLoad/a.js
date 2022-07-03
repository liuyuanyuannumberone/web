console.log("a.js 开始被执行");   //1
exports.x = 'a1';
console.log('a.js ', require('./b.js').x);  //5
exports.x = 'a2';
console.log("a.js 执行完毕"); //6 