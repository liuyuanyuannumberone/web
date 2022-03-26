{
    function sortIndex(index) {
        return function (a, b) {
            return a[index] - b[index];
        }
    }

    let arr = [{index: 5, name: "lyy"}, {index: 4, name: 'hx'}, {index: 6, name: 'hx'}, {index: 0, name: 'hx'}];
    arr.sort(sortIndex("index"));
    console.log(arr);

    function sortNumber() {
        return function (a, b) {
            return a - b
        };
    }

    let arr1 = [6, 8, 4, 5];
    arr1.sort(sortNumber());
    console.log(arr1);
}
{
    function File(name, size, time) {
        this.name = name;
        this.size = size;
        this.time = time;
    }

    let f1 = new File('jack.avi', '400M', "1997-12-12");
    let f2 = new File('tom.avi', '200M', "2017-12-12");
    let f3 = new File('xiaozu.avi', '800M', "2010-12-12");
    let arr = [f1, f2, f3];

    function fn(attr) {
        return function (obj1, obj2) {
            if (obj1[attr] > obj2[attr]) {
                return 1;
            } else if (obj1[attr] === obj2[attr]) {
                return 0;
            } else {
                return -1;
            }
        }
    }

    arr.sort(fn("size"));

    console.log(arr);
}
