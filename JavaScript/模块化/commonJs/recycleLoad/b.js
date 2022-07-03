console.log("b.js 开始被执行"); //2 
exports.x = 'b1';
console.log('b.js ', require('./a.js').x);  //3 
exports.x = 'b2';
console.log("b.js 执行完毕");  //4