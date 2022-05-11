//export 可以有多个，导出加上{};
// export default 只能有一个，不需要括号；

export let a=1;
export function add(){
    return 2;
}
let b=3;
let minusFun=function(){
    return 4
}
let person ={name:'lyy',age:18};

//推荐最后一次性导出的写法
export {
    b,
    minusFun,
}


export default  person;
