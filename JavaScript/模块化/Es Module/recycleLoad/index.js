import {foo} from './a.js';
console.log(foo); //bar 
setTimeout(() => console.log(foo), 500);   //baz