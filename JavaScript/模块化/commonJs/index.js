let mod1 = require('./mod1.js');
console.log(mod1, mod1(1, 2), mod1.grade, mod1.person.name);

const mod2 = require('./mod2.js');
mod2.plusCount();
mod2.plusYuanhua();
console.log(mod2.count,mod2.friends)// 0 [ 1 ]
let arr=mod2.friends;
arr[0]="test"
console.log(mod2.friends);