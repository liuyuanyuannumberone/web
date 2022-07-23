//只要具有Iterator接口的数据结构,就可以使用数组解构赋值
{
    let [a, b, c] = [1, 2, 3];
    let [m, [[n], f]] = [1, [[2], 3]];
    let [, , q] = [1, 2, 3];
    let [, ...all] = [1, 2, 3, 4];

    //默认值可以引用解构赋值的其他变量，但该变量必须已经声明
    let [x = 1, y = x] = []; // x=1; y=1
    // let [x = y, y = 1] = [];     // ReferenceError: y is not defined

    //当一个数组成员严格等于undefined或者不设置，默认值才会生效。
    let [v = 1] = [null]; //null
    let [flag = true] = []; //true
    let [t = 1] = [undefined]; //1

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

//对象解构赋值,由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构
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

    const { x1, y = 5 } = { x1: 1 }; //1  5
    const { x3 = 3 } = { x3: null }; //null

    //当一个对象的属性值严格等于undefined或者不设置，默认值才会生效
    const { x4 = 3 } = {}; //3
    const { x2 = 3 } = { x2: undefined }; //3

    //由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构
    let arr = [1, 2, 3];
    let { 1: first, [arr.length - 1]: last } = arr;
    // console.log(first,last);  //2 3
}
//字符串的解构赋值
{
    const [a, b, ...value] = 'hello';
    // console.log(a,b,value); //h e ['l','l','o']
}

//函数参数的解构赋值
{
    let test = function ([x = 1, y = 4]) {
        console.log(x, y);
    };
    // test([1, 2]);

    function move({ x = 1, y = 0 } = {}) {
        return console.log(x, y);
    }
    // move({x: 3, y: 8});

    // [[1, 2], [3, 4]].map(([a, b]) => console.log(a,b));
}
