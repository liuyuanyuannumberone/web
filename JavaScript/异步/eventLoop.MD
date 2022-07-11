# 异步学习 https://github.com/wangfupeng1988/js-async-tutorial.git
 JS是单线程的语言，开发中比较常用的异步操作有：
      网络请求，如`ajax` `http.get`
      IO 操作，如`readFile` `readdir`
      定时函数，如`setTimeout` `setInterval`
## 实现异步的最核心原理，就是将`callback`作为参数传递给异步执行函数，当有结果返回之后再触发callback执行。
## event-loop - 事件轮询（体现出单线程中异步操作是如何被执行的）
   `同步任务`:在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务。
   `异步任务`:不进入主线程、而进入"任务队列"的任务。
           `宏任务`：Macrotask Queue：进行比较大型的工作，常见的有定时器、用户交互操作、I/O等；
           `微任务`:Microtask Queue：进行较小的工作，常见的有Promise then、async await、Process.nextTick;
            执行任务队列中的任务具体是在执行栈中完成的，当主线程中的任务全部执行完毕后，去读取微任务队列，如果有微任务就会全部执行，然后再去读取宏任务队列。
   `回调函数`:就是那些会被主线程挂起来的代码。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。
  #### 只要主线程空了，就会去读取"任务队列"，这就是JavaScript的运行机制。
  #### 只要指定过回调函数，这些事件发生时就会进入"任务队列"，等待主线程读取
  #### 异步任务的执行顺序
        "任务队列"是一个先进先出的数据结构，排在前面的事件，优先被主线程读取。主线程的读取过程基本上是自动的，只要执行栈一清空，"任务队列"上第一位的事件就自动进入主线程。但是，由于存在"定时器"功能，主线程首先要检查一下执行时间，某些事件只有到了规定的时间，才能返回主线程。
  #### 定时器 
      setTimeout(fn,0)的含义是，指定某个任务在主线程最早可得的空闲时间执行，也就是说，尽可能早得执行。它在"任务队列"的尾部添加一个事件。执行栈清空以后，立即执行指定的回调函数。
      setTimeout最大延迟时间2147483647 毫秒 (大约24.8 天)时就会溢出，导致定时器会被立即执行
   ##### 总的来说造成JS定时器不可靠的原因就是JavaScript是单线程的，一次只能执行一个任务，而setTimeout() 的第二个参数（延时时间）只是告诉 JavaScript 再过多长时间把当前任务添加到队列中。如果队列是空的，那么添加的代码会立即执行；如果队列不是空的，那么它就要等前面的代码执行完了以后再执行定时器任务，必须等主线程任务执行才可能开始执行无论它是否到达我们设置的时间。

  `注意`:setInterval的处理时长不能比设定的间隔长，否则setInterval将会没有间隔的重复执行
   为了能够按照一定的间隔周期性的触发定时器
   1.我们可以使用setTimeout来代替setInterval执行
   ```
       let timer = null;
      setTimeout(function fn() {
         //执行程序
        console.log(format.formatDate(new Date()));
        if (timer) {
         clearTimeout(timer);
         timer = null;
        }
       timer = setTimeout(fn, 2000);
      },0)
  ```
## 2.为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。
   ### 同源限制：创建worker线程的时候需要分配一个JS文件，该文件必须是同源的，且不能是本地文件。
                也可以是同一页面的代码
   ### 环境隔离：worker线程所在的上下文环境与主线程不一样，无法读取网页的DOM对象,全局对象不再是window，可以通过 this或self 访问
   ### 通信受限：主线程和worker线程不能直接通信，通过postMessage方法进行消息传递
    1.在主线程中，调用worker构造函数，创建worker线程：let worker = new Worker('work.js') 
    2.主线程通过调用postMessage方法，向worker线程传递数据，数据类型不限：
      worker.postMessage('Hello World');
      worker.postMessage({a:1, b:2});
    3.主线程通过监听 onmessage 事件，接收子线程传递的信息：
      worker.onmessage = function(event) {
      console.log(event.data);
      }  
    4.woker 线程内同样通过监听onmessage事件，接收主线程传递的数据，通过postMessage传递数据：
      self.addEventListener('message', function(event) {
        console.log(event.data); // data 为传递的数据
       self.postMessage('get✔');
      })  
    5.错误处理
    // 主线程
    worker.onerror(function (event) {
      console.log([
         'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
        ].join(''));
     });

     // 子线程
     self.onerror(function (event) {
        console.log([
    'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
        ].join(''));
     }); 