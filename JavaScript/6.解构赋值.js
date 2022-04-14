//对象
let obj = {
    type: 'image/png',
    size: 1432,
    imgName: '图片名',
    hobby: ['sleep', 'swim', 'drink'],
    family: {
        fa: 'liu',
        mo: 'wang',
    },
};
const { type, size, imgName } = obj;
const { type: var1, size: var2, imgName: var3 } = obj;
let {
    family: { fa },
    hobby: [item],
} = obj;
// console.log(type, size, imgName,var1, var2, var3,fa,item);
//赋值
[obj.size, obj.imgName] = [1000, '新名字'];
// console.log(obj);

// console.log(Object.entries(obj));
for (let [k, v] of Object.entries(obj)) {
    console.log(`${k}:${v}`);
}

/*
 *
 * 数组
 * */
let [a, b, c] = [1, 2, 3];
let [m, [[n], f]] = [1, [[2], 3]];

let [, , q] = [1, 2, 3];
let [, ...all] = [1, 2, 3, 4];

console.log(all); //[ 2, 3, 4 ]
