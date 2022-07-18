/**
Iterator对象是一个指针对象，实现类似于单项链表的数据结构，通过next()将指针指向下一个节点 
原生具有[Symbol.iterator]属性数据类型有：数组、某些类似数组的对象（如arguments、NoeList）、Set和Map
原生具有[Symbol.iterator]属性数据类型有一个特点，就是可以使用for...of来取值
而具有[Symbol.iterator]属性的对象，都可以一键生成一个Iterator对象(arr[Symbol.iterator]() )
         有两种方式遍历这个对象
         1.Iterator对象           使用next()
         2.具有Iterator属性的对象  for...of (done为true的不会返回)    
           检查一个对象具有Iterator属性
           console.log(typeof obj[Symbol.iterator] === 'function'); //false 

*/

{
    const arr = [100, 200, 300];
    const iterator = arr[Symbol.iterator](); //生成iterator对象
    //方式1
    //console.log(iterator.next())  // { value: 100, done: false }
    //console.log(iterator.next())  // { value: 200, done: false }
    //console.log(iterator.next())  // { value: 300, done: false }
    //console.log(iterator.next())  // { value: undefined, done: true }

    //方式2
    for (item of arr) {
    }
}

//让普通对象变成可遍历对象
{
    let authors = {
        allperson: {
            science: ['a', 'b', 'c'],
            story: ['mike', 'lily', 'tom'],
            sadly: ['mm', 'dd', 'cc'],
        },
        [Symbol.iterator]: function () {
            let allperson = this.allperson;
            let keys = Reflect.ownKeys(allperson);
            let value = [];
            return {
                next() {
                    if (keys.length > 0) {
                        value.push(allperson[keys[0]]);
                        keys.shift();
                    } else {
                        keys = null;
                    }
                    return {
                        done: keys === null,
                        value: value.shift(),
                    };
                },
            };
        },
    };

    // console.log(typeof authors[Symbol.iterator] === 'function'); //true
    // let iterator=authors[Symbol.iterator]();
    //console.log(iterator.next());//{ done: false, value: [ 'a', 'b', 'c' ] }
    //console.log(iterator.next());//{ done: false, value: [ 'mike', 'lily', 'tom' ] }
    //console.log(iterator.next()); //{ done: true, value: [ 'mm', 'dd', 'cc' ] }

    for (let v of authors) {
        // console.log(v);
    }
}
