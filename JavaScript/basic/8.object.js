let students = { id: 1, name: 'liu', sex: 0 };
console.log(
    Object.keys(students), //[ 'id', 'name', 'sex' ]
    Object.values(students), //[ 1, 'liu', 0 ]
    Object.entries(students) //[ [ 'id', 1 ], [ 'name', 'liu' ], [ 'sex', 0 ] ]
);
