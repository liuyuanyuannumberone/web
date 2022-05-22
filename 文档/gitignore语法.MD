1.以/开始是根目录，否则就是所有节点;以/结尾的是目录，否则是文件或者目录。
2.*【0-n个字符】  使用两个星号(**) 表示匹配任意中间目录，比如a/**/z 可以匹配 a/z, a/b/z 或 a/b/c/z等。
4.?【匹配1个字符】 
5.!a.txt 
6. [] 用来匹配括号内的任一字符，如 [abc],[0-9] 匹配0至9的一个数
7.git无法追踪一个空的文件夹（隐藏空目录),当用户需要追踪一个空的文件夹,.gitkeep 是一个约定俗成的文件名并不会带有特殊规则，这样处理 .gitnore   /dist/*  !/dist/.gitkeep

8.
/build/ 忽略根目录的build目录
build/  忽略所有build目录
build   忽略所有名为build目录和文件
/build  忽略根目录的build目录和文件
*.log   所有的.log结尾的文件或者目录

9.查看所有被tracked的文件：git ls-tree -r 分支名 --name-only;  
10.查看文件是否被tracked：git ls-files 文件名 ; 
11.解除文件tracked：git rm -rf --cached 文件名; 解除后文件变成未跟踪；
12.如果某些文件曾经被已经被track起来了,则修改.gitignore是无效的;

