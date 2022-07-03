//export 可以有多个  as起别名
//export default 只能有一个  直接可以用别名

let add = function add() {
    return 2;
};
let a = 2;
let person = {
    name: 'lyy',
    age: 18,
};
export { add, a };
export default person;
