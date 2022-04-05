// 处理innerText和textContent的兼容性问题
function setInnerText(element, content) {
  if (typeof element.innerText === 'string') {
    element.innerText = content;
  } else {
    element.textContent = content;
  }
}


