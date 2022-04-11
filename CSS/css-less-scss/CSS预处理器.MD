#  ../../node_modules/.bin/lessc                                1-nest.less   1-nest-less.css
#  ../../node_modules/.bin/node-sass --output-style expanded    1-nest.scss  1.nest-scss.css
# _content.scss 不会被编译  加上_不会被Live Sass Compiler插件编译,但是仍然会被监听
1.sass严格按照ruby的强缩进功能,不含有括号；scss和css写法相同，直接将css改为scss可以直接使用
expanded   展开输出方式 
compact    紧凑输出方式 
nested      嵌套输出方式 
compressed 压缩输出方式 
2.sass局部文件的文件名以下划线开头,sass就不会在编译时单独编译这个文件输出css，而只把这个文件用作导入;
3./* ... */ 注释会保留在css文件中，而//方法注释不会。