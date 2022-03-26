const user = {
    name: 'lyy',
    age: 18,
    sex: "男"
};

switch (true) {
    case !user:
        throw new Error("user must be defined");
    case !user.name:
        throw new Error("user.name must be defined");
    case typeof user.age !== 'number':
        throw new Error("user.age must be number");
    default:
        console.log(user);
}
