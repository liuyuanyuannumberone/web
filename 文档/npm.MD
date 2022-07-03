1.-S(--save):dependencies发布后还需要依赖的模块;-D(--save-dev)：devDependencies 开发时的依赖;
2.npm config get registry 原版镜像 设置阿里 npm config set registry https://registry.npm.taobao.org;
  https://registry.npmjs.org/
3.npm info  模块  versions  // 查看服务器模块所有版本  
  npm info  模块            // 查看服务器模块的具体信息 
  npm ls   模块  --depth=0   //查看本项目所有安装包
  npm config list -l 查看npm 的配置
  npm prune 检查package.json里面的模块有没有全部被安装


  "^3.1.3"  >=3.x.x    大版本号相同
  "~3.1.3" >=3.1.x   大小版本相同
  无符号：固定版本号  

  npm i jquery@4.10.1  -D   npm i jquery -S 
 ### 一个模块不管是否安装过，npm 都要强制重新安装，可以使用-f参数。
  npm uninstall 模块 -D  同时删除package.json的记录
  npm uninstall 模块 -S  同时删除package.json的记录
  #### "build": "npm run 1.js && npm run 2.js" 先运行npm run 1.js，然后再运行npm run 2.js
  #### "build": "npm run 1.js & npm run 2.js"  同时运行npm run 1.js npm run 2.js


4.npx是一个可执行的二进制文件，原理很简单，运行npx的时候，默认会到 node_modules/.bin 路径和环境变量$PATH里面，检查命令是否存在 ./node_modules/.bin/eslint --init =>相当于 npx eslint --init;


    















