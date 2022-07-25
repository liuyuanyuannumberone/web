/**
 * 对象的所有键名都是字符串，如果键名是数值，会被自动转为字符串。
 */
{
    let x = 1,
        y = 3;
    let m = 'name';
    var obj = {
        x,
        y,
        [m]: 'liu',
        [x + y]: '123',
        m: 'liu',
        age: 12,
        hello() {
            console.log('hello');
        },
        //原来函数这么写的
        add: function () {},
    };
    // console.log(obj); //{ '4': '123', x: 1, y:3,name: 'liu', m: 'liu', hello: [Function: hello] }
}

//遍历
{
    //1.用于检查一个对象是否具有某个属性in运算符 【不管是自身的还是继承的)】
    //2.获得对象的所有可遍历属性，可以使用for...in循环 【不管是自身的还是继承的】

    /*
     3. Object.prototype.hasOwnProperty() 判断是否为自身的属性
     */
    {
        let obj1 ={age:12};
        console.log(obj1.hasOwnProperty('age'));
    }

    //4.delete命令用于删除对象的属性，删除成功后返回true【不管属性是否存在】
    console.log(delete obj.age, delete obj.grade); //true true

    //5.该数组的成员都是该对象自身的所有属性名。
    let students = { id: 1, name: 'liu', sex: 0 };
    console.log(
        Object.keys(students), //[ 'id', 'name', 'sex' ]
        Object.values(students), //[ 1, 'liu', 0 ]
        Object.entries(students) //[ [ 'id', 1 ], [ 'name', 'liu' ], [ 'sex', 0 ] ]
        // Object.fromEntries   entries==>对象(逆操作)
    );
}
