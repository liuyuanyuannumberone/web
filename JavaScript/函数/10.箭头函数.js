/**
 * 箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj
 * 
 *  */
let f3 = () => {};
let f4 = index => {};
let f5 = (x, y, z) => x + y + z; 
let f6 = (x, y, z) => ({ x, y, z });