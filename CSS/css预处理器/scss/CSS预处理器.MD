# ../../node_modules/.bin/lessc 1-nest.less 1-nest-less.css

# ../../node_modules/.bin/node-sass --output-style expanded 1-nest.scss 1.nest-scss.css

1.sass 严格按照 ruby 的强缩进功能,不含有括号；scss 和 css 写法相同，直接将 css 改为 scss 可以直接使用。

2. expanded 展开输出方式 compact 紧凑输出方式 nested 嵌套输出方式
compressed 压缩输出方式

3.sass 局部文件的文件名以下划线开头,sass 就不会在编译时单独编译这个文件输出 css，而只把这个文件用作导入; 

4. /* ... */ 注释会保留在 css 文件中，而//方法注释不会。
