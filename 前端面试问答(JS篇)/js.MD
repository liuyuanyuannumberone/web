JS的异步 （Promise/asyc）
ES6的常用特性（Set、结构赋值、新特性等）
手写深拷贝  
什么是事件冒泡？具体有什么应用？如何阻止事件冒泡？
    
箭头函数
  箭头函数的写法  
     1.如果只有一条语句，可以将{}和return省略掉 v=>v+v;    如果语句为多条，则不可以省略{}和return
     2.当没有参数或有多个参数时，需要用括号（）括起来: （num1,num2)=>num1+num2;
  箭头函数不能用作构造函数
  箭头函数不绑定this  箭头函数没有自己的this，其内部的this绑定到它的外围作用域
  箭头函数无法使用 call或 apply来改变其运行的作用域。
 

项目越做越大，依赖包越来越多，打包文件太大
单页面应用首页白屏时间长，用户体验差


首页按需引入文件 

  路由组件按需加载    component: resolve => require.ensure([], () => resolve(require('@/components/index')))
  第三方组件和插件    import { Button } from 'element-ui'

减小打包后的文件大小   

  生产环境关闭 sourceMap
  代码压缩  ParallelUglifyPlugin   对图片进行压缩 image-webpack-loader
  提取公共代码  CommonsChunkPlugin  
  减少 ES6 转为 ES5 的冗余代码    babel-plugin-transform-runtime 
  CDN 优化 
     vue、vue-router、vuex、element-ui 和 axios 这五个库，全部改为通过 CDN 链接获取，在 index.html 里插入 相应链接。




