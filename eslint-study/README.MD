# ESLint规范:ESLint提供的默认规则涵盖了基本规则
一、eslint在项目中的使用
1. 下载eslint插件、 装包【npm install eslint -D;
                    npm init @eslint/config =>./node_modules/.bin/eslint --init => npx eslint --init 】
2. 配置用户的setting.json的文件:overrideConfigFile根据实际情况配置; 在本文件ctrl+s才可以自动修复；
   配置.eslintrc.js,
    【配置文件:eslint使用配置的顺序：.eslintrc.js > .eslintrc.yaml > .eslintrc.yml > .eslintrc.json > package.json;】
3. .eslintignore 告诉ESLint忽略某些文件或者目录; 
   warning:VSCode资源管理器下加载多个项目（微前端多个微应用），每个项目下的.eslintignore配置并未生效;
   解决办法：
   eslint.workingDirectories 指定如何计算ESLint使用的工作目录。ESLint解析相对于工作目录的配置文件；
   最好的解决方案，通过正则匹配，特别适合monorepo项目结构：
       "eslint.workingDirectories": [{ "pattern": "./packages/*/" }]
4.可以用如下方式：
    校验文件:npx eslint a.js b.js;
    校验目录:npx eslint src/* view/*;
    检验其他格式的文件：npx eslint --ext .js,.jsx,.vue  src/*;
            //ESLint默认只会检测.js后缀的文件,加上*就可以了;        
    "scripts": {
     "lint": "npx eslint src/*",
     "lint:fix": "npx eslint src/*  --fix",
     },

二、eslint的使用规则
1.rules：
  "off"   或 0   - 关闭规则
  "warn"  或 1   - 开启规则,使用警告级别的错误：warn (不会导致程序退出)
  "error" 或 2   - 开启规则,使用错误级别的错误：error (当被触发的时候，程序会退出)
2.extends：使用别人提供的包 { "extends"："google"}
3.plugins: 第三方提供的大量自定义插件
