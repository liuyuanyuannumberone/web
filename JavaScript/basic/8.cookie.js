/**
 * 存储大小
     cookie 一般大小限制在4kb以内  localStorage/sessionStorage 可以达到5M或更大 
  有效时间   
     localStorage的生命周期是永久，除非用户清除localStorage信息。
     sessionStorage的生命周期为当前窗口或标签页。一旦窗口永久关闭就结束。
  数据与服务器之间的交互方式
              cookie的数据会自动的传递到服务器，服务器端也可以写cookie到客户端；
              sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
 * 
 */