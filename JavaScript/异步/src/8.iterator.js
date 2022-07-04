/**
Iterator对象是一个指针对象，实现类似于单项链表的数据结构，通过next()将指针指向下一个节点 
[Symbol.iterator]是一个Symbol类型，可以作为对象的key来使用
原生具有[Symbol.iterator]属性数据类型有：数组、某些类似数组的对象（如arguments、NoeList）、Set和Map
原生具有[Symbol.iterator]属性数据类型有一个特点，就是可以使用for...of来取值
而具有[Symbol.iterator]属性的对象，都可以一键生成一个Iterator对象,有两种方式使用这个对象next和for...of
*/
var person = {};
person.age = 100
person[Symbol.iterator] = 200
const arr = [100, 200, 300];
const iterator = arr[Symbol.iterator]() //生成iterator 对象
//方式1
//console.log(iterator.next())  // { value: 100, done: false }
//console.log(iterator.next())  // { value: 200, done: false }
//console.log(iterator.next())  // { value: 300, done: false }
//console.log(iterator.next())  // { value: undefined, done: true }
//方式2
// for (item of arr) {
//     // console.log(item)  //100 200 300
// }

console.log('=======================================');




let authors = {
    allperson: {
        science: ['a', 'b', 'c'],
        story: ['mike', 'lily', 'tom'],
        sadly: ['mm', 'dd', 'cc'],
    },
    address:'test',
};
authors[Symbol.iterator] = function () {
    let allperson = this.allperson;
    let keys = Reflect.ownKeys(allperson);
    let value = [];
    return {
        next() {
            if (value.length === 0 && keys.length > 0) {
                value.push(allperson[keys[0]]);
                keys.shift();
            }
            return {
                done: keys.length === 0,
                value: value.shift(),
            };
        },
    };
};
for (let v of authors) {
    console.log(v);
}


let obj = {
    count: 0,
    Gen(time) {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(time);
                resolve({ done: false, value: time });
            }, time);
        });
    },
    [Symbol.asyncIterator]() {
        let self = this;
        return {
            next() {
                self.count++;
                if (self.count < 4) {
                    return self.Gen(Math.random() * 1000);
                } else {
                    return Promise.resolve({ done: true, value: '' });
                }
            },
        };
    },
  };


