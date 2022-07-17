//
/**
 * 模型特征
     1.一个目标者对象 Subject，拥有方法：添加/删除/通知 Observer；
     2.多个观察者对象 Observer，拥有方法：接收Subject状态变更通知并处理；
     3.目标对象Subject状态变更时，通知所有Observer。
 * 
 */

//目标对象 Subject,所有依赖它的对象 Observer 都会得到通知。
class Subject {
    constructor() {
        this.state = 0;
        this.observers = [];
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.notify();
    }
   
    add(observer) {
        this.observers.push(observer);
    }
    remove(observer) {
        let idx = this.observers.findIndex(item => item === observer);
        idx > -1 && this.observers.splice(idx, 1);
    }
    notify() {
        this.observers.forEach(observer => observer.update());
    }
}
// 观察者
class Observer {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.add(this);
    }
    update() {
        console.log(`目标者通知我更新了，我是：${this.name}`);
    }
}

let s = new Subject();
let o1 = new Observer('o1', s);
let o2 = new Observer('o2', s);
let o3 = new Observer('o3', s);
let o4 = new Observer('o4', s);
s.setState(11);
