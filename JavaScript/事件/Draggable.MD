# Drag 拖拉事件
  1.图像和链接的draggable属性自动被设置成了true，而其他元素默认值都是false.(如果要防止拖拉可以设置draggable="false")
  2.一旦draggable设为true,就无法再用鼠标选中该节点内部的文字或子节点了
  3.兼容性:IE9-浏览器不支持draggable属性，但可通过mousedown事件处理程序调用dragDrop()方法来实现拖动效果
    test.onmousedown = function(){this.dragDrop()}
    如果让firefox支持draggable属性，必须添加一个ondragstart事件处理程序，并在dataTransfer对象使用setData()方法来启动效果;

  4.拖放事件:
    1.1 拖放源涉及到3个拖放事件。拖动拖放源时，依次触发dragstart、drag和dragend这3个事件;
         dragstart:按下鼠标键并开始移动鼠标时，会在被拖放的元素上触发dragstart事件
         drag:触发dragstart事件后，随即会触发drag事件，而且在元素被拖动期间会持续触发该事件
         dragend:当拖动停止时,会触发dragend事件
    1.2 拖放目标:拖放源被拖动到拖放目标上时，将依次触发dragenter、dragover、dragleave或drop这四个事件
         dragenter:只要有元素被拖动到放置目标上，触发dragenter事件;
         dragover:被拖动的元素在放置目标的范围内移动时，持续触发dragover事件
         dragleave:如果元素被拖出了放置目标，触发dragleave事件
         drop:如果元素被放到了放置目标中，触发drop事件

        默认情况下，目标元素是不允许被放置的，所以不会发生drop事件,只要在dragover和dragenter事件中阻止默认行为，才能成为被允许的放置目标.
