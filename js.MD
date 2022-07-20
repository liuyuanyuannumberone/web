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




