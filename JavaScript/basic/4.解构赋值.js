// 只要具有Iterator接口的数据结构,就可以使用数组解构赋值
{
    let [a, b, c] = [1, 2, 3];
    let [m, [[n], f]] = [1, [[2], 3]];
    let [, , q] = [1, 2, 3];
    let [, ...all] = [1, 2, 3, 4];

    //默认值可以引用解构赋值的其他变量，但该变量必须已经声明
    let [x = 1, y = x] = []; // x=1; y=1
    // let [x = y, y = 1] = [];     // ReferenceError: y is not defined

    //当一个数组成员严格等于undefined，默认值才会生效。
    let [flag = true] = [];
    let [t = 1] = [undefined];
    let [v = 1] = [null];
    // console.log(t); // 1
    // console.log(v); // null

    function* fibs() {
        let a = 1;
        let b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    }
    let [first, second, third, fourth, fifth, sixth] = fibs();
}

//对象解构赋值
{
    let obj = {
        type: 'image/png',
        size: 1432,
        hobby: ['sleep', 'swim', 'drink'],
        family: {
            fa: 'liu',
            mo: 'wang',
        },
    };

    const { type, size, hobby, family } = obj;
    const { type: var1, size: var2, hobby: var3, family: var4 } = obj;
    const node = {
        loc: {
            start: {
                line: 1,
                column: 5,
            },
        },
    };
    let {
        loc,
        loc: { start },
        loc: {
            start: { line },
        },
    } = node;
    line; // 1
    loc; // Object {start: Object}
    start; // Object {line: 1, column: 5}

    //当一个对象的属性值严格等于undefined，默认值才会生效
    const { x1, y = 5 } = { x1: 1 }; //1  5
    const { x2 = 3 } = { x2: undefined }; //3
    const { x3 = 3 } = { x3: null }; //null
}
