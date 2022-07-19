# html5
1.结构标签：header nav section aside footer  dialog  article
2.多媒体标签:audio video 
3.表单属性：autocomplete  autofocus  placeholder required multiple  pattern
4.Input新增的type：email url number tel  range color  Date Pickers search
# DOM节点
1.DOM的最小组成单位叫做节点,DOM树就是由各种不同类型的节点组成。
 ## 节点的类型有七种:浏览器提供一个原生的节点对象Node,这七种节点都继承了Node。
  ### 浏览器原生提供document节点，代表整个文档 
  ### 文档的第一层只有一个节点<html>,树结构的根节点

# Node接口
  ## Node.nodeType 节点类型
  元素节点（element）：1，对应常量Node.ELEMENT_NODE   网页的各种HTML标签（比如<body>、<a>等）
  属性节点（attr）：2，对应常量Node.ATTRIBUTE_NODE   网页元素的属性（比如class="right"）
  文本节点（text）：3，对应常量Node.TEXT_NODE   标签之间或标签包含的文本

  文档片断节点（DocumentFragment）：11，对应常量Node.DOCUMENT_FRAGMENT_NODE   文档的片段
  文档类型节点（DocumentType）：10，对应常量Node.DOCUMENT_TYPE_NODE   doctype标签（比如<!DOCTYPE html>）
  注释节点（Comment）：8，对应常量Node.COMMENT_NODE  注释
  文档节点（document）：9，对应常量Node.DOCUMENT_NODE  整个文档树的顶层节点
## Node.nodeName 节点名称
  元素节点（element）：大写的标签名
  属性节点（attr）：属性的名称
  文本节点（text）：#text

  文档片断节点（DocumentFragment）：#document-fragment
  文档类型节点（DocumentType）：文档的类型
  注释节点（Comment）：#comment
  文档节点（document）：#document
## Node.nodeValue 当前节点本身的文本值，该属性可读写
   只有文本节点（text）和注释节点（comment）有文本值,其他类型的节点一律返回null。
## Node.textContent 返回当前节点和它的所有后代节点的文本内容，该属性可读写。
  对于文本节点和注释节点，textContent属性的值与nodeValue相同。
  对于其他类型的节点，该属性会将每个子节点的内容连接在一起返回（不包括注释节点）
## Node.baseURI  表示当前网页的绝对路径 该属性只读
 document.baseURI:'https://javascript.ruanyifeng.com/dom/node.html#toc0'
 该属性的值由window.location属性决定，但是可以使用<base>标签，改变该属性的值。
 <base href="http://www.example.com/page.html">;

## 节点关系
    父节点关系（parentNode）：直接的那个上级节点
    子节点关系（childNodes）：直接的下级节点
    同级节点关系（sibling）：拥有同一个父节点的节点。

    Node.nextSibling 返回紧跟在当前节点后面的第一个同级节点。如果当前节点后面没有同级节点，则返回null。
    Node.previousSibling 返回当前节点前面的一个同级节点。如果当前节点前面没有同级节点，则返回null。
    Node.parentNode  返回当前节点的父节点。对于一个节点来说，它的父节点只可能是三种类型：元素节点（element）、文档节点（document）和文档片段节点。
    Node.parentElement 返回当前节点的父元素节点。如果当前节点没有父节点，或者父节点类型不是元素节点，则返回null。
    Node.firstChild 返回当前节点的第一个子节点，如果当前节点没有子节点，则返回null。
    Node.lastChild  返回当前节点的最后一个子节点，如果当前节点没有子节点，则返回null
    Node.childNodes 返回一个类似数组的对象

    Node.appendChild() 
                      ```  var p = document.createElement('p');
                        document.body.appendChild(p);
                      ``` 
   Node.hasChildNodes() 表示当前节点是否有子节点
               node.firstChild !== null
              node.childNodes && node.childNodes.length > 0
             
   Node.insertBefore(newNode, referenceNode) 用于将某个节点插入父节点内部的指定位置
        第一个参数是所要插入的节点newNode，第二个参数是父节点parentNode内部的一个子节点referenceNode
        newNode将插在referenceNode这个子节点的前面。返回值是插入的新节点newNode。
        如果insertBefore方法的第二个参数为null，则新节点将插在当前节点内部的最后位置，即变成最后一个子节点。
   Node.removeChild() 用于从当前节点移除该子节点。返回值是移除的子节点
   Node.replaceChild(newChild, oldChild) 将一个新的节点，替换当前节点的某一个子节点                    



## NodeList 接口        返回值是一个类似数组的对象
## HTMLCollection 接口  返回值是一个类似数组的对象，只能包含元素节点
## ParentNode 接口      
## ChildNode 接口