##### 创建用户
host="localhost"为本地登录用户，host="ip"为ip地址登录，host="%"，为外网ip登录
1.mysql->create user 'test'@'localhost' identified by '123';
2.mysql->create user 'test'@'192.168.7.22' identified by '123';
3.mysql->create user 'test'@'%' identified by '123';

##### 删除用户
drop user 'admin'@'%'
##### 三、授予权限
grant  ALL  on *.*  to 'admin'@'%'

##### 注释
$ #DELETE FROM SeatInformation  
  /*DELETE FROM SeatInformation */
  -- DELETE FROM SeatInformation  后边有空格
##### 数据库语言
  DCL:数据库控制语言
  TCL:事务控制语言
  DDDL:数据库定义语言
  DML:数据操作语言

##### 镜像mysql     /etc/mysql/conf.d   /var/lib/mysql
docker pull mysql;
docker run -d -p 3306:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=passok   --name mysql1  mysql:latest

容器内：
mysql -uroot  -ppassok

