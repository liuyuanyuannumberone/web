const _ =require('../../node_modules/lodash/lodash.js')
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
console.log(_.cloneDeep(test1)) //{ name: 'lyy', group: { id: 1, active: { color: 'red', border: 1 } } }
console.log(_.cloneDeep(new Date())) 