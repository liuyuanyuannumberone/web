//滚动出去的距离
function getScroll(parentContaier = 'brower') {
    let scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    return {
        scrollLeft,
        scrollTop,
    };
}

//获取鼠标绝对位置
function getPage(e, parentContaier = 'brower') {
    let pageX = e.pageX || e.clientX + getScroll(parentContaier).scrollLeft;
    let pageY = e.pageY || e.clientY + getScroll(parentContaier).scrollTop;
    return {
        pageX,
        pageY,
    };
}

//获取浏览器可视区域大小
function getPageSize() {
    let pageWidth = document.body.clientWidth || document.documentElement.clientWidth;
    let pageHeight = document.body.clientHeight || document.documentElement.clientHeight;
    return {
        pageWidth,
        pageHeight,
    };
}
