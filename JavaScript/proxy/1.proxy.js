/*
proxy:

*/

{
    let obj = {
        name: 'lyy',
        age: 18,
    };
    let validator = (target, key, value) => {
        if (Reflect.has(target, key)) {
            //target.hasOwnProperty(key)
            if (key === 'age') {
                target[key] = value;
            } else {
                return false; //不允许赋值
            }
        } else {
            throw new TypeError('property is not defined');
        }
    };
    let o = new Proxy(obj, {
        get(target, key) {
            return target[key] || '';
        },
        set: validator,
    });
}
