class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age, score) {
        super(name, age);
        this.score = score;
    }
    getScore() {
        return this.score;
    }
    getInfo() {
        return `姓名：${this.name};年龄:${this.age}岁;分数：${this.score}分`;
    }
}
let stu = new Student('liuyy', 28, 100);
console.log(stu.getInfo());
