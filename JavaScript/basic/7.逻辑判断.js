/**
1.if/else
2.switch
3.单一判断：存储在 Object 中
4.单一判断：存储在 Map 对象中
5.多重判断：将条件串联成一个字符串，存储在 Object 中
6.多重判断：将条件连成一个字符串，存储在 Map 对象中
7.多重判断：把条件作为对象存储在 Map 中
8.多重判断：把条件写成正则式存储在 Map 中
 * 
*/
function sendLog() {}
function jumpTo() {}
//1. if-else-else if
const onButtonClick = status => {
    if (status == 1) {
        sendLog('processing');
        jumpTo('IndexPage');
    } else if (status == 2) {
        sendLog('fail');
        jumpTo('FailPage');
    } else if (status == 3) {
        sendLog('fail');
        jumpTo('FailPage');
    } else if (status == 4) {
        sendLog('success');
        jumpTo('SuccessPage');
    } else if (status == 5) {
        sendLog('cancel');
        jumpTo('CancelPage');
    } else {
        sendLog('other');
        jumpTo('Index');
    }
};
// 2.switch
const onButtonClick1 = status => {
    switch (status) {
        case 1:
            sendLog('processing');
            jumpTo('IndexPage');
            break;
        case 2:
        case 3:
            sendLog('fail');
            jumpTo('FailPage');
            break;
        case 4:
            sendLog('success');
            jumpTo('SuccessPage');
            break;
        case 5:
            sendLog('cancel');
            jumpTo('CancelPage');
            break;
        default:
            sendLog('other');
            jumpTo('Index');
            break;
    }
};


//3.obj
const actions1 = {
    1: ['processing', 'IndexPage'],
    2: ['fail', 'FailPage'],
    3: ['fail', 'FailPage'],
    4: ['success', 'SuccessPage'],
    5: ['cancel', 'CancelPage'],
    default: ['other', 'Index'],
};

const onButtonClick2 = status => {
    let action = actions1[status] || actions1['default'];
    sendLog(action[0]);
    jumpTo(action[1]);
};
//4.map 优势map的键可以为任意类型
const actions2 = new Map([
    [1, ['processing', 'IndexPage']],
    [2, ['fail', 'FailPage']],
    [3, ['fail', 'FailPage']],
    [4, ['success', 'SuccessPage']],
    [5, ['cancel', 'CancelPage']],
    ['default', ['other', 'Index']],
]);

const onButtonClick3 = status => {
    let action = actions2.get(status) || actions2.get('default');
    sendLog(action[0]);
    jumpTo(action[1]);
};

//双重判断1
const actions3 = {
    guest_1: () => {},
    guest_2: () => {},
};
const onButtonClick4 = (identity, status) => {
    let action = actions3[`${identity}_${status}`] || actions3['default'];
    action.call(this);
};


//双重判断2
const actions4 = new Map([
    ['guest_1', () => {}],
    ['guest_2', () => {}],
    ['guest_3', () => {}],
    ['guest_4', () => {}],
    ['guest_5', () => {}],
    ['master_1', () => {}],
    ['master_2', () => {}],
    ['master_3', () => {}],
    ['master_4', () => {}],
    ['master_5', () => {}],
    ['default', () => {}],
]);

const onButtonClick5 = (identity, status) => {
    let action = actions4.get(`${identity}_${status}`) || actions4.get('default');
    action.call(this);
};


//双重判断3
const actions5 = new Map([
    [{ identity: 'guest', status: 1 }, () => {}],
    [{ identity: 'guest', status: 2 }, () => {}],
]);
const onButtonClick6 = (identity, status) => {
    let action = [...actions5].filter(
        ([key, value]) => key.identity == identity && key.status == status
    );
    action.forEach(([key, value]) => value.call(this));
};


//双重判断4
const actions6 = () => {
    const functionA = () => {};
    const functionB = () => {};
    return new Map([
        [{ identity: 'guest', status: 1 }, functionA],
        [{ identity: 'guest', status: 2 }, functionA],
        [{ identity: 'guest', status: 3 }, functionA],
        [{ identity: 'guest', status: 4 }, functionA],
        [{ identity: 'guest', status: 5 }, functionB],
    ]);
};
const onButtonClick7 = (identity, status) => {
    let action = [...actions6()].filter(
        ([key, value]) => key.identity == identity && key.status == status
    );
    action.forEach(([key, value]) => value.call(this));
};


//双重判断5
const actions7 = () => {
    const functionA = () => {}; // 逻辑处理 A
    const functionB = () => {}; // 逻辑处理 B
    const functionC = () => {}; // 发送日志 C
    return new Map([
        [/^guest_[1-4]$/, functionA],
        [/^guest_5$/, functionB],
        [/^guest_.*$/, functionC],
    ]);
};

const onButtonClick8 = (identity, status) => {
    let action = [...actions7()].filter(([key, value]) => key.test(`${identity}_${status}`));
    action.forEach(([key, value]) => value.call(this));
};
