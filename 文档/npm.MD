1.-S(--save):dependencies发布后还需要依赖的模块;-D(--save-dev)：devDependencies 开发时的依赖;
2.npm config get registry 原版镜像 设置阿里 npm config set registry https://registry.npm.taobao.org;
3.npm info(view)  模块 versions  // 查看服务器模块所有版本   
  npm ls(list)    模块 --depth=0  //查看本项目所有安装包
  npm update jquery|| npm outdated 

  "^3.1.3">=3.x.x    大版本号相同
   "~3.1.3">=3.1.x   大小版本相同
  无符号：固定版本号  

  npm i jquery@4.10.1  -D   npm i jquery -S 
  npm uninstall 模块 -D  同时删除package.json的记录
  npm uninstall 模块 -S  同时删除package.json的记录


    















