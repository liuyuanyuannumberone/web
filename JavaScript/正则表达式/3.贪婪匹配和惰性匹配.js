let string = '123 1234 12345 123456';

//贪婪匹配
let regex = /\d{2,5}/g;
// console.log(string.match(regex)); //贪婪匹配  [ '123', '1234', '12345', '12345' ]
//惰性匹配
let regex1 = /\d{2,5}?/g;
// console.log(string.match(regex1)); // ['12', '12', '34','12', '34', '12','34', '56']

let string2 = '213213244323';

let regex2 = /2(.*)3/g;
// console.log(string2.match(regex2)); //[ '213213244323' ]

let regex3 = /2(.*?)3/g;
// console.log(string2.match(regex3)); // [ '213', '213', '2443', '23' ]