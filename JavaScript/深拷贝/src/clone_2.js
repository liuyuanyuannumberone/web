/*
*   https://juejin.cn/post/6844903929705136141

浅拷贝：基本类型拷贝的是基本类型的值，引用类型拷贝的是内存地址（object） 如果一个对象改变，另外一个也会发生改变
深拷贝：完整的拷贝一个对象，在堆中开辟一块新的区域存放新对象，如果一个对象发生改变，另外一个也不会发生改变


* */


//递归
module.exports = function clone(target) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        for (const key in target) {
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    } else {
        return target;
    }
};





//浅拷贝
function cloneShaw(obj) {
    if (typeof obj === 'object') {
        let target = Array.isArray(obj) ? [] : {};
        for (let key in obj) {
            target[key] = obj[key];
        }
        return target;
    } else {
        return obj;
    }
}

//深拷贝
function cloneDeep(obj) {
    if (typeof obj === 'object') {
        let target = Array.isArray(obj) ? [] : {};
        for (let key in obj) {
            target[key] = cloneDeep(obj[key]);
        }
        return target;
    } else {
        return obj;
    }
}
