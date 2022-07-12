//深拷贝  主要常见项目中处理不含正则和日期的对象或者数组做处理

// 缺陷：对于正则、日期处理有问题，

function cloneDeep(obj = {}) {
    let newObj = null;
    if (typeof obj === 'object' && obj !== null) { //对象、数组
        newObj = Array.isArray(obj) ? [] : {};
        for (let key in obj) {
            newObj[key] = cloneDeep(obj[key]);
        }
    } else {
        newObj = obj;
    }
    return newObj;
}
let test1 = {
    name: 'lyy',
    group: {
        id: 1,
        active: {
            color: 'red',
            border: 1,
        },
    },
};
//console.log(cloneDeep(test1)); //{ name: 'lyy', group: { id: 1, active: { color: 'red', border: 1 } } }

console.log(cloneDeep(new Date()));  //{}