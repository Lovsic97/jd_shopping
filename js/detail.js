// 实现商品信息左边部分的小图片左右切换效果
let leftArrow = document.querySelector('.arrow-pre');
let rightArrow = document.querySelector('.arrow-next');
let ul = document.querySelector('.lh');
leftArrow.onclick = function() {
  ul.style.left = '0px';
  leftArrow.className = 'arrow-pre';
  leftArrow.style.background = 'url(./images/preArrow.png)';
  rightArrow.className = 'arrow-next arrow-next-img';
  rightArrow.style.background = '';
}
rightArrow.onclick = function() {
  ul.style.left = '-116px';
  rightArrow.className = 'arrow-next';
  rightArrow.style.background = 'url(./images/nextArrow.png)';
  leftArrow.className = 'arrow-pre arrow-pre-img';
  leftArrow.style.background = '';
}

// 实现商品信息左边部分的大图片跟随小图片一起切换效果
let lis = document.querySelectorAll('.lh li');
let specN1 = document.querySelector('.spec-n1');
console.log(specN1.children[2])
// 去除整体样式函数
function clearClass() {
  for(let j = 0; j < lis.length; j++) {
    lis[j].className = '';
  }
}
for(let i = 0; i < lis.length; i++) {
  lis[i].onmouseover = function() {
    clearClass()
    lis[i].className = 'img-hover';
    specN1.children[0].src = lis[i].children[0].src;
    specN1.children[2].style.background = 'url(' + lis[i].children[0].src + ') no-repeat';
    specN1.children[2].style.backgroundSize = '800px 800px';
  }
}

// 实现放大镜效果
let smallBox = document.querySelector('.smallBox');
let bigBox = document.querySelector('.bigBox');
specN1.onmouseover = function() {
  smallBox.style.display = 'block';
  bigBox.style.display = 'block';
 }
specN1.onmouseout = function() {
  smallBox.style.display = 'none';
  bigBox.style.display = 'none';
}
// 小图随着鼠标移动
specN1.onmousemove = function(event) {
  let smallBoxLeft = event.pageX - smallBox.offsetWidth / 2 - specN1.offsetLeft;
  let smallBoxTop = event.pageY - smallBox.offsetHeight / 2 - specN1.offsetTop;
  if(smallBoxLeft <= 0) {
    smallBoxLeft = 0;
  } else if(smallBoxLeft >= specN1.offsetWidth - smallBox.offsetWidth) {
    smallBoxLeft = specN1.offsetWidth - smallBox.offsetWidth;
  }
  if(smallBoxTop <= 0) {
    smallBoxTop = 0;
  } else if(smallBoxTop >= specN1.offsetHeight - smallBox.offsetHeight) {
    smallBoxTop = specN1.offsetHeight - smallBox.offsetHeight;
  }
  smallBox.style.left = smallBoxLeft + 'px';
  smallBox.style.top = smallBoxTop + 'px';
  // 大图随着小图移动
  // 首先有个前提：左边图片/小图 = 大图/右边固定隐藏的图片，这个比较相当于等比扩大。所以大图移动的距离/小图移动的距离 = 大图的宽/小图的宽
  // 大图移动距离 = （大图的宽/小图的宽）* 小图移动的距离
  let smallH = smallBox.offsetHeight;
  let bigH = bigBox.offsetHeight;
  // let smallW = smallBox.offsetWidth;
  // let bigW = bigBox.offsetWidth;
  let bigTransY = (bigH / smallH) * smallBoxTop;
  // let bigTransX = (bigW / smallW) * smallBoxLeft;
  bigBox.style.top = -bigTransY + 'px';
  // bigBox.style.left = -bigTransX + 'px';
}
