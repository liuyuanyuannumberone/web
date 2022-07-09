/**
 * 对象的所有键名都是字符串，如果键名是数值，会被自动转为字符串。
 *
 */
let obj = {
    name: 'lyy',
    add: function () {},
};
// delete命令用于删除对象的属性，删除成功后返回true【不管属性是否存在】
console.log(delete obj.name, delete obj.a); //true true


//不管该数组的成员都是该对象自身的（而不是继承的）所有属性名。
let students = { id: 1, name: 'liu', sex: 0 };
console.log(
    Object.keys(students), //[ 'id', 'name', 'sex' ]
    Object.values(students), //[ 1, 'liu', 0 ]
    Object.entries(students) //[ [ 'id', 1 ], [ 'name', 'liu' ], [ 'sex', 0 ] ]
);

//检查一个对象是否可遍历
console.log(typeof {}[Symbol.iterator]==='function'); //false
