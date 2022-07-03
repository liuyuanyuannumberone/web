/*
对象描述符 限制对象某一属性不可读   defineProperty  getOwnPropertyDescriptors
* */
const student = {
    name: 'lyy',
    age: 18,
    sex: 1
};

Reflect.defineProperty(student, 'sex', {
    enumerable: false,
});

console.log(student);  //{ name: 'lyy', age: 18 }

console.log(Object.getOwnPropertyDescriptors(student));
/*
{
  name: {
    value: 'lyy',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 18, writable: true, enumerable: true, configurable: true },
  sex: { value: 1, writable: true, enumerable: false, configurable: true }
}
* */
