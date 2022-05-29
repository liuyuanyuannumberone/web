# webpack配置

1. touch  webpack.config.js

2. npx webpack  默认以webpack.config.js 为默认打包配置文件 ，但是 npx webpack --config  新的配置文件.js

3. loader的执行顺序从下往上，从右往左执行

4. ```bash
   npm i -D postcss-loader
   ```

 5.

```
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": 2,
        "helpers": true,
        "regenerator": true,
        "useESModules": false,
        "version": "7.0.0-beta.0"
      }
    ]
  ]
}


{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage"
      }
    ]
  ]
}
```