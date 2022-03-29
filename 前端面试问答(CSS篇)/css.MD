一、水平垂直居中布局 

1. 内联元素   
​      水平居中       text-align: center 
2. 块状元素
​      水平居中   margin: 0  auto;
​     垂直居中： 绝对定位+transform/margin      flex布局
二、Flex 布局优点和缺陷。
缺点：浏览器兼容性比较差，只能兼容到ie9及以上；
三、盒子模型

   
   window.getComputedStyle(dom).width/height;//兼容性好
   
四、BFC 规范(块级格式化上下文）
 它是一个独立容器，决定元素如何对其内容进行定位,以及与其他元素的关系和相互作用。
 一个页面是由很多个Box组成的,元素的类型和display属性,决定了这个Box的类型，不同类型的Box会以不同的方式渲染。

 如何产生BFC？
 float的值    !none 
 overflow的值 !visible
 position的值 !relative、!static
 
 display的值为table-cell, table-caption, inline-block
 
 

 BFC能用来做什么？
 
 1.不和浮动元素重叠  
 2.清除元素内部浮动
 3.解决上下相邻两个元素重叠
 
五、清除浮动方式


六、画三角形
.dv1{
    border-top:50px solid yellow ;
    border-left:50px solid blue ;
    border-bottom:50px solid red ;
    border-right:50px solid purple;
    width: 0;
  }



1.给整个界面修改颜色？



css之幽灵空白节点
vertical-align  行内元素（inline）、行内块级（inline-block） 垂直对齐方式