let _ = require('../../node_modules/lodash/lodash.js');
let stu={
  name:"lyy"
}
let stu1=stu;
stu.name="wang";
console.log(stu1.name);  //wang

let stu2=_.cloneDeep(stu);
stu.name="test";
console.log(stu2.name); //wang
console.log(stu.name); //test


