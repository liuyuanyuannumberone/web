# CommonJs
## Node 应用由模块组成，采用 CommonJS 模块规范
  ### 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
  require('./mod1.js');
  require('./mod1.js').message = "hello";
  console.log(require('./mod1.js').message);  //'hello'
    #### 证明require命令并没有重新加载模块文件，而是输出了缓存。

  ### CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。
  Node内部提供一个Module构建函数：
  ```
  function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  ...
  }
  ``` 
- module.id 模块的识别符，通常是带有绝对路径的模块文件名。
- module.filename 模块的文件名，带有绝对路径。
- module.loaded 返回一个布尔值，表示模块是否已经完成加载。
- module.parent 返回一个对象，表示调用该模块的模块。
- module.children 返回一个数组，表示该模块要用到的其他模块。
- module.exports 表示模块对外输出的值。


 ### module.exports和exports 
   Node为每个模块提供一个exports变量，指向module.exports,require能看到的只有module.exports这个对象
   相当于每个模块头部都有有一行这样的命令 var exports = module.exports;
 #### 注意，不能直接将exports变量指向一个值，因为这样等于切断了exports与module.exports的联系


### CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值
1. 基本类型：值拷贝，不共享
2. 引用类型：浅拷贝，共享
3. 工作空间可以修改引入的值

### 脚本代码在require的时候，就会全部执行。如果发生模块的循环加载，即A加载B，B又加载A，则B只将加载A已执行过的代码
