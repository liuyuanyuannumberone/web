console.log('null', Boolean(null));  //false
console.log('undefined', Boolean(undefined));  //false
console.log('NaN', Boolean(NaN));      //false
console.log('false', Boolean(false));      //false
console.log('', Boolean(''));      //false
console.log('0', Boolean(0));      //false


console.log(Boolean('0'));      //true
console.log(Boolean([]));      //true  空数组true;
console.log(Boolean({}));      //true  空对象true;



