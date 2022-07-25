/**
  链判断运算符:如果读取对象内部的某个属性，往往需要判断一下，属性的上层对象是否存在。
  左侧的对象为null或undefined,就不再往下运算，而是返回undefined
 */
let message = {
    body: {
        user: {
            firstName: '刘',
            lastName: '高',
        },
    },
    code: 200,
    status: 1,
};
// const firstName =
//     (message && message.body && message.body.user && message.body.user.firstName) || 'default';

const firstName1 = message?.body?.user?.firstName || 'default';
