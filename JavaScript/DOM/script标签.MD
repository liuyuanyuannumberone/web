# script元素 https://javascript.ruanyifeng.com/bom/engine.html#toc0
 ## 问题：加载外部脚本时，浏览器会暂停页面渲染，等待脚本下载并执行完成后，再继续渲染。
   原因是JavaScript代码可以修改DOM，所以必须把控制权让给它，否则会导致复杂的线程竞赛的问题。
   如果外部脚本加载时间很长，那么浏览器就会一直等待脚本下载完成，造成网页长时间失去响应，浏览器就会呈现“假死”状态，这被称为“阻塞效应”。
 ## 解决办法
   1.为了避免这种情况，较好的做法是将script标签都放在页面底部，而不是头部，网页主体的渲染也已经完成了，用户至少可以看到内容。
   2.为了解决脚本文件下载阻塞网页渲染的问题，一个方法是对script元素加入defer属性。它的作用是延迟脚本的执行，等到DOM加载生成后，再执行脚本。document.write加载的外部脚本defer不生效。
    <script src="a.js" defer></script>

    defer属性的运行流程如下：
     浏览器开始解析HTML网页。
     解析过程中发现带有defer属性的<script>元素,浏览器继续往下解析HTML网页，同时并行下载<script>标签中的外部脚本。

     浏览器完成解析HTML网页，此时再回过头执行已经下载完成的脚本。 

  3. <script>元素加入async属性。作用是，使用另一个进程下载脚本，下载时不会阻塞渲染。
     document.write加载的外部脚本defer不生效。
      <script src="a.js" async></script>

     浏览器开始解析HTML网页。
     解析过程中，发现带有async属性的script标签,浏览器继续往下解析HTML网页，同时并行下载<script>标签中的外部脚本。

     脚本下载完成，浏览器暂停解析HTML网页，开始执行下载的脚本。
     脚本执行完毕，浏览器恢复解析HTML网页。 

     一旦采用这个属性，就无法保证脚本的执行顺序。哪个脚本先下载结束，就先执行那个脚本。

     一般来说，如果脚本之间没有依赖关系，就使用async属性，如果脚本之间有依赖关系，就使用defer属性。如果同时使用async和defer属性，浏览器行为由async属性决定。

  4.动态加载
     动态生成的script标签不会阻塞页面渲染，也就不会造成浏览器假死。但是问题在于，这种方法无法保证脚本的执行顺序，哪个脚本文件先下载完成，就先执行哪个。如果想避免这个问题，可以设置async属性为false。
     ``` ['a.js', 'b.js'].forEach(function(src) {
         var script = document.createElement('script');
         script.src = src;
         script.async = false;
         document.head.appendChild(script);
        });
     ```
     
