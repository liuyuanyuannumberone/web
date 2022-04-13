// 处理注册事件的兼容性问题
function addEventListener(element, eventName, fn) {
    // 判断当前浏览器是否支持addEventListener 方法
    if (element.addEventListener) {
      element.addEventListener(eventName, fn);  
    } else if (element.attachEvent) {
      element.attachEvent('on' + eventName, fn);
    } else {
      element['on' + eventName] = fn;
    }
  }
  // 处理移除事件的兼容性处理
  function removeEventListener(element, eventName, fn) {
    if (element.removeEventListener) {
      element.removeEventListener(eventName, fn);
    } else if (element.detachEvent) {
      element.detachEvent('on' + eventName, fn);
    } else {
      element['on' + eventName] = null;
    }
  }