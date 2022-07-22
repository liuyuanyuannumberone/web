# Babel:ES6转码器 (@babel/core)
  .babelrc:设置转码规则和插件
   @babel/cli   命令行工具   npx babel example.js -o compiled.js
   @babel/node              npx babel-node es6.js
   @babel/register 只会对require命令加载的文件转码
                     ```
                       //index.js
                      require('@babel/register');
                      require('./es6.js');
                      node index.js
                     ```
# polyfill                      


