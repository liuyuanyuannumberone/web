
  
    
1.面试1：https://juejin.cn/post/6844903918753808398#comment
2.双向绑定的原理？手写双向绑定？ https://segmentfault.com/a/1190000006599500?utm%20source=tag-newest      
3.vue项目优化?https://juejin.cn/post/6844903913410314247 
      1.1 Vue 代码层面的优化；
              v-if 和 v-show 区分使用场景
              computed 和 watch 区分使用场景
              v-for 遍历必须为 item 添加 key，且避免同时使用 v-if
              长列表性能优化 Object.freeze 方法来冻结一个对象
              组件的销毁特定事件  
              图片资源懒加载
              
      1.2  webpack 配置层面的优化；
               对图片进行压缩 image-webpack-loader
               减少 ES6 转为 ES5 的冗余代码    babel-plugin-transform-runtime 
               提取公共代码  CommonsChunkPlugin 
              优化 SourceMap   sourceMap 出现了，它就是为了解决不好调式代码问题的
              开发环境推荐： cheap-module          -eval-source-map
              生产环境推荐： cheap-module          -source-map
                    忽略打包前后的列信息-bug能定位到具体的Vue文件- 
             开发中 打包的速度很快  map文件以DataURL的形式存在打包后的js文件中
               Vue项目中用到的分析工具：webpack-bundle-analyzer                                        
           
               
3、Vue与其他框架对比优势和劣势？
   

4.Vue路由传参
  params传参数   
    路由name匹配通过params传参        $route.params.id      
    跳转之后页面 url后面不会拼接参数密码之类还是用params
   
   
  query传参数    
   路由 path匹配，通过query传参       $route.query.id    
   跳转之后页面 url后面会拼接参数,类似?id=1
   
5.  nextTick实现原理

   把回调函数所有代码放入callbacks数组中等待执行
   使用timerFunc（Promise.then、setTimeout等
   pending是用来标识同一个时间只能执行一次）放到微任务或者宏任务中，flushCallbacks，callbacks数组置空；
   事件循环到了微任务或者宏任务，执行函数依次执行callbacks中的回调
   
        


 
             
 
 


    


